import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Shield, Lock, Database, Users, Mail, FileText } from 'lucide-react';
import AlienTag from '@/components/alien/AlienTag';

const PrivacyPolicy = () => {
  return (
    <div className="min-h-screen py-16">
      <div className="container mx-auto px-4 max-w-4xl">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: '-60px' }} transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}>
          {/* Header */}
          <div className="mb-10">
            <div className="flex items-center gap-3 mb-4">
              <AlienTag color="gold">LEGAL</AlienTag>
              <AlienTag color="muted">PRIVACY POLICY</AlienTag>
            </div>
            <div className="flex items-center gap-4 mb-2">
              <div className="p-3 border border-af-border">
                <Shield className="h-8 w-8 text-alien-gold" />
              </div>
              <h1 className="text-4xl lg:text-5xl font-bold text-alien-gold font-nasalization af-heading-underline inline-block">
                Privacy & Cookie Policy
              </h1>
            </div>
            <p className="af-prose text-alien-green text-lg mt-4">Last Updated: October 2026</p>
          </div>

          {/* Content */}
          <div className="border border-af-border bg-af-surface/20 p-6 md:p-8 space-y-8">

            <section>
              <div className="flex items-center gap-3 mb-4">
                <FileText className="h-5 w-5 text-alien-gold" />
                <h2 className="text-xl font-bold text-alien-gold font-nasalization">Introduction</h2>
              </div>
              <p className="text-gray-200 leading-relaxed">
                AlienFlowSpace DAO ("we," "us," or "our") is committed to protecting your privacy.
                This Privacy and Cookie Policy explains how we collect, use, disclose, and safeguard
                your information when you visit our website and use our services.
              </p>
            </section>

            <section>
              <div className="flex items-center gap-3 mb-4">
                <Database className="h-5 w-5 text-alien-gold" />
                <h2 className="text-xl font-bold text-alien-gold font-nasalization">Information Collection</h2>
              </div>
              <div className="space-y-4 text-gray-200">
                <div>
                  <h3 className="text-alien-green font-semibold mb-2 font-nasalization">Personal Information</h3>
                  <p className="leading-relaxed">We may collect personal information that you voluntarily provide when using our services, including wallet addresses, email addresses, and transaction data on the blockchain.</p>
                </div>
                <div>
                  <h3 className="text-alien-green font-semibold mb-2 font-nasalization">Automatic Information</h3>
                  <p className="leading-relaxed">We automatically collect certain information when you visit our website, including IP addresses, browser type, device information, and usage patterns through cookies and similar tracking technologies.</p>
                </div>
              </div>
            </section>

            <section>
              <div className="flex items-center gap-3 mb-4">
                <Lock className="h-5 w-5 text-alien-gold" />
                <h2 className="text-xl font-bold text-alien-gold font-nasalization">Cookies & Tracking Technologies</h2>
              </div>
              <div className="space-y-4 text-gray-200">
                <p className="leading-relaxed">We use cookies and similar tracking technologies to enhance your experience and analyze website usage. Cookies are small data files stored on your device.</p>
                <div>
                  <h3 className="text-alien-green font-semibold mb-2 font-nasalization">Types of Cookies We Use:</h3>
                  <ul className="list-disc list-inside space-y-2 ml-4">
                    <li><strong>Essential Cookies:</strong> Required for basic website functionality</li>
                    <li><strong>Analytics Cookies:</strong> Help us understand how visitors interact with our website</li>
                    <li><strong>Functional Cookies:</strong> Remember your preferences and settings</li>
                    <li><strong>Marketing Cookies:</strong> Used to track visitors across websites for marketing purposes</li>
                  </ul>
                </div>
                <p className="leading-relaxed">You can control cookies through your browser settings, but disabling certain cookies may affect website functionality.</p>
              </div>
            </section>

            <section>
              <div className="flex items-center gap-3 mb-4">
                <Users className="h-5 w-5 text-alien-gold" />
                <h2 className="text-xl font-bold text-alien-gold font-nasalization">How We Use Your Information</h2>
              </div>
              <ul className="list-disc list-inside space-y-2 text-gray-200 ml-4">
                <li>To provide, maintain, and improve our services</li>
                <li>To process transactions and manage your participation in the DAO</li>
                <li>To communicate with you about updates, security alerts, and support</li>
                <li>To analyze usage patterns and optimize user experience</li>
                <li>To comply with legal obligations and enforce our terms</li>
                <li>To prevent fraud and enhance security</li>
              </ul>
            </section>

            <section>
              <div className="flex items-center gap-3 mb-4">
                <Shield className="h-5 w-5 text-alien-gold" />
                <h2 className="text-xl font-bold text-alien-gold font-nasalization">Data Sharing & Third Parties</h2>
              </div>
              <div className="space-y-4 text-gray-200">
                <p className="leading-relaxed">We do not sell your personal information. We may share your information with:</p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>Service providers who assist in operating our website and services</li>
                  <li>Blockchain networks (as transactions are publicly visible)</li>
                  <li>Legal authorities when required by law or to protect rights and safety</li>
                  <li>Business partners with your consent</li>
                </ul>
              </div>
            </section>

            <section>
              <div className="flex items-center gap-3 mb-4">
                <Lock className="h-5 w-5 text-alien-gold" />
                <h2 className="text-xl font-bold text-alien-gold font-nasalization">Your Rights</h2>
              </div>
              <div className="space-y-4 text-gray-200">
                <p className="leading-relaxed">Depending on your location, you may have the following rights regarding your personal data:</p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>Access and receive a copy of your personal data</li>
                  <li>Correct inaccurate or incomplete data</li>
                  <li>Request deletion of your personal data</li>
                  <li>Object to or restrict processing of your data</li>
                  <li>Data portability</li>
                  <li>Withdraw consent at any time</li>
                  <li>Lodge a complaint with a supervisory authority</li>
                </ul>
                <p className="leading-relaxed">Note: Blockchain transactions are immutable and cannot be deleted once recorded.</p>
              </div>
            </section>

            <section>
              <div className="flex items-center gap-3 mb-4">
                <Shield className="h-5 w-5 text-alien-gold" />
                <h2 className="text-xl font-bold text-alien-gold font-nasalization">Data Security</h2>
              </div>
              <p className="text-gray-200 leading-relaxed">
                We implement appropriate technical and organizational measures to protect your personal
                information against unauthorized access, alteration, disclosure, or destruction. However,
                no method of transmission over the internet is 100% secure.
              </p>
            </section>

            <section>
              <div className="flex items-center gap-3 mb-4">
                <Mail className="h-5 w-5 text-alien-gold" />
                <h2 className="text-xl font-bold text-alien-gold font-nasalization">Contact Us</h2>
              </div>
              <p className="text-gray-200 leading-relaxed">
                If you have questions about this Privacy Policy or wish to exercise your rights, please contact us at:
              </p>
              <div className="mt-4 p-4 border border-af-border bg-af-surface/30">
                <p className="af-prose text-alien-gold font-semibold">Email: info@alienflow.space</p>
                <p className="text-gray-300 text-sm mt-1">Discord: discord.gg/alienflowspace</p>
              </div>
            </section>

            <section className="border-t border-af-border-hairline pt-6">
              <p className="text-gray-300 text-sm leading-relaxed">
                We may update this Privacy Policy from time to time. We will notify you of any changes
                by posting the new Privacy Policy on this page and updating the "Last Updated" date.
              </p>
              <p className="text-alien-gold/70 text-sm">
                See also: <Link to="/terms-of-service" className="text-alien-gold hover:underline">Terms of Service</Link>
              </p>
            </section>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default PrivacyPolicy;
