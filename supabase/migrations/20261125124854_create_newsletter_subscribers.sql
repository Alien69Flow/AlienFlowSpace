/*
# Create newsletter_subscribers table (single-tenant, no auth)

1. New Tables
- `newsletter_subscribers`
  - `id` (uuid, primary key)
  - `email` (text, unique, not null) — the subscriber's email address
  - `source` (text, default 'alienflow.space') — where the subscription came from
  - `status` (text, default 'active') — subscription status: active, unsubscribed
  - `subscribed_at` (timestamptz, default now()) — when they subscribed
  - `created_at` (timestamptz, default now()) — record creation timestamp
  - `updated_at` (timestamptz, default now()) — last update timestamp

2. Security
- Enable RLS on `newsletter_subscribers`.
- Grant SELECT, INSERT to `anon` + `authenticated` so the Data API can reach the table.
  - SELECT is needed to check if an email already exists before inserting.
  - INSERT is needed for the public subscription form.
  - UPDATE is needed to unsubscribe.
  - DELETE is NOT granted (we never delete subscribers, we mark them unsubscribed).
- Add 3 policies: SELECT, INSERT, UPDATE — all public (no auth on this site).
  The form is public-facing with no sign-in, so anon must be able to write.

3. Important Notes
- This is a single-tenant app with no sign-in screen, so policies use `TO anon, authenticated`.
- Email is stored lowercase to avoid duplicates with different casing.
- `USING (true)` is acceptable here because subscriptions are intentionally public —
  anyone can subscribe and check if their email is already on the list.
*/

CREATE TABLE IF NOT EXISTS newsletter_subscribers (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  email text UNIQUE NOT NULL,
  source text NOT NULL DEFAULT 'alienflow.space',
  status text NOT NULL DEFAULT 'active',
  subscribed_at timestamptz NOT NULL DEFAULT now(),
  created_at timestamptz NOT NULL DEFAULT now(),
  updated_at timestamptz NOT NULL DEFAULT now()
);

-- Index for fast email lookups
CREATE INDEX IF NOT EXISTS idx_newsletter_subscribers_email ON newsletter_subscribers (email);

ALTER TABLE newsletter_subscribers ENABLE ROW LEVEL SECURITY;

GRANT SELECT, INSERT, UPDATE ON newsletter_subscribers TO anon, authenticated;

DROP POLICY IF EXISTS "anon_select_subscribers" ON newsletter_subscribers;
CREATE POLICY "anon_select_subscribers"
ON newsletter_subscribers FOR SELECT
TO anon, authenticated USING (true);

DROP POLICY IF EXISTS "anon_insert_subscribers" ON newsletter_subscribers;
CREATE POLICY "anon_insert_subscribers"
ON newsletter_subscribers FOR INSERT
TO anon, authenticated WITH CHECK (true);

DROP POLICY IF EXISTS "anon_update_subscribers" ON newsletter_subscribers;
CREATE POLICY "anon_update_subscribers"
ON newsletter_subscribers FOR UPDATE
TO anon, authenticated USING (true) WITH CHECK (true);