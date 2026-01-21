import { serve } from "https://deno.land/std@0.190.0/http/server.ts";
import { Resend } from "npm:resend@2.0.0";

const resend = new Resend(Deno.env.get("RESEND_API_KEY"));

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers":
    "authorization, x-client-info, apikey, content-type",
};

interface ContactEmailRequest {
  name: string;
  email: string;
  subject: string;
  message: string;
}

const handler = async (req: Request): Promise<Response> => {
  // Handle CORS preflight requests
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const { name, email, subject, message }: ContactEmailRequest = await req.json();

    // Validate input
    if (!name || !email || !subject || !message) {
      return new Response(
        JSON.stringify({ error: "Missing required fields" }),
        {
          status: 400,
          headers: { "Content-Type": "application/json", ...corsHeaders },
        }
      );
    }

    // Send email to AlienFlowSpace team
    const emailResponse = await resend.emails.send({
      from: "AlienFlowSpace <onboarding@resend.dev>",
      to: ["alien69flow@proton.me"],
      replyTo: email,
      subject: `[Contact Form] ${subject}`,
      html: `
        <!DOCTYPE html>
        <html>
        <head>
          <style>
            body { font-family: 'Segoe UI', Arial, sans-serif; background-color: #0a0a0f; color: #e5e5e5; margin: 0; padding: 20px; }
            .container { max-width: 600px; margin: 0 auto; background: linear-gradient(135deg, #111119 0%, #1a1a25 100%); border: 1px solid rgba(240, 216, 130, 0.3); border-radius: 12px; overflow: hidden; }
            .header { background: linear-gradient(135deg, rgba(57, 255, 20, 0.2), rgba(240, 216, 130, 0.1)); padding: 20px; text-align: center; border-bottom: 1px solid rgba(57, 255, 20, 0.3); }
            .header h1 { color: #f0d882; margin: 0; font-size: 24px; }
            .content { padding: 30px; }
            .field { margin-bottom: 20px; }
            .label { color: #39ff14; font-size: 12px; text-transform: uppercase; letter-spacing: 1px; margin-bottom: 5px; }
            .value { color: #e5e5e5; font-size: 16px; line-height: 1.5; }
            .message-box { background: rgba(0,0,0,0.3); border: 1px solid rgba(57, 255, 20, 0.2); border-radius: 8px; padding: 15px; margin-top: 5px; }
            .footer { padding: 20px; text-align: center; border-top: 1px solid rgba(240, 216, 130, 0.2); font-size: 12px; color: #888; }
          </style>
        </head>
        <body>
          <div class="container">
            <div class="header">
              <h1>🛸 Nuevo Mensaje de Contacto</h1>
            </div>
            <div class="content">
              <div class="field">
                <div class="label">Nombre</div>
                <div class="value">${name}</div>
              </div>
              <div class="field">
                <div class="label">Email</div>
                <div class="value"><a href="mailto:${email}" style="color: #39ff14;">${email}</a></div>
              </div>
              <div class="field">
                <div class="label">Asunto</div>
                <div class="value">${subject}</div>
              </div>
              <div class="field">
                <div class="label">Mensaje</div>
                <div class="message-box">
                  <div class="value">${message.replace(/\n/g, '<br>')}</div>
                </div>
              </div>
            </div>
            <div class="footer">
              AlienFlowSpace Contact Form • ${new Date().toLocaleDateString('es-ES', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' })}
            </div>
          </div>
        </body>
        </html>
      `,
    });

    console.log("Email sent successfully:", emailResponse);

    // Send confirmation email to the user
    await resend.emails.send({
      from: "AlienFlowSpace <onboarding@resend.dev>",
      to: [email],
      subject: "✨ Hemos recibido tu mensaje - AlienFlowSpace",
      html: `
        <!DOCTYPE html>
        <html>
        <head>
          <style>
            body { font-family: 'Segoe UI', Arial, sans-serif; background-color: #0a0a0f; color: #e5e5e5; margin: 0; padding: 20px; }
            .container { max-width: 600px; margin: 0 auto; background: linear-gradient(135deg, #111119 0%, #1a1a25 100%); border: 1px solid rgba(240, 216, 130, 0.3); border-radius: 12px; overflow: hidden; }
            .header { background: linear-gradient(135deg, rgba(57, 255, 20, 0.2), rgba(240, 216, 130, 0.1)); padding: 30px; text-align: center; border-bottom: 1px solid rgba(57, 255, 20, 0.3); }
            .header h1 { color: #f0d882; margin: 0 0 10px 0; font-size: 28px; }
            .header p { color: #39ff14; margin: 0; font-size: 14px; }
            .content { padding: 30px; }
            .greeting { font-size: 18px; margin-bottom: 20px; }
            .message { color: #b0b0b0; line-height: 1.6; }
            .cta { margin-top: 25px; text-align: center; }
            .cta a { display: inline-block; background: linear-gradient(135deg, #39ff14, #f0d882); color: #0a0a0f; padding: 12px 30px; border-radius: 8px; text-decoration: none; font-weight: bold; }
            .footer { padding: 20px; text-align: center; border-top: 1px solid rgba(240, 216, 130, 0.2); font-size: 12px; color: #888; }
            .social { margin-top: 15px; }
            .social a { color: #f0d882; text-decoration: none; margin: 0 10px; }
          </style>
        </head>
        <body>
          <div class="container">
            <div class="header">
              <h1>👽 ¡Gracias, ${name}!</h1>
              <p>Hemos recibido tu mensaje</p>
            </div>
            <div class="content">
              <div class="greeting">¡Hola, viajero cósmico!</div>
              <div class="message">
                <p>Tu mensaje ha sido transmitido exitosamente a través del cosmos hasta nuestro centro de comunicaciones.</p>
                <p>Nuestro equipo lo revisará y te responderemos lo antes posible. Mientras tanto, te invitamos a explorar nuestro ecosistema:</p>
              </div>
              <div class="cta">
                <a href="https://alienflowspace.lovable.app">Explorar AlienFlowSpace</a>
              </div>
            </div>
            <div class="footer">
              <p>🚀 AlienFlowSpace - Conectando el multiverso</p>
              <div class="social">
                <a href="https://t.me/AlienFlow">Telegram</a> •
                <a href="https://x.com/alien69flow">X (Twitter)</a> •
                <a href="https://github.com/Alien69Flow">GitHub</a>
              </div>
            </div>
          </div>
        </body>
        </html>
      `,
    });

    return new Response(JSON.stringify({ success: true }), {
      status: 200,
      headers: {
        "Content-Type": "application/json",
        ...corsHeaders,
      },
    });
  } catch (error: any) {
    console.error("Error in send-contact-email function:", error);
    return new Response(
      JSON.stringify({ error: error.message }),
      {
        status: 500,
        headers: { "Content-Type": "application/json", ...corsHeaders },
      }
    );
  }
};

serve(handler);