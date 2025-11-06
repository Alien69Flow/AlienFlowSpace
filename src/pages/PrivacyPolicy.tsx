import React from 'react';
import { motion } from 'framer-motion';
import { Shield, Lock, Database, Users, Mail, FileText } from 'lucide-react';

const PrivacyPolicy = () => {
  return (
    <div className="min-h-screen py-20">
      <div className="container mx-auto px-4 max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          {/* Header */}
          <div className="text-center mb-12">
            <div className="flex justify-center mb-6">
              <div className="p-4 bg-alien-space-dark/60 rounded-full border-2 border-alien-gold/30">
                <Shield className="h-12 w-12 text-alien-gold" />
              </div>
            </div>
            <h1 className="text-4xl lg:text-5xl font-bold text-alien-gold font-nasalization mb-4 text-glow">
              Privacy & Cookie Policy
            </h1>
            <p className="text-alien-green font-[Exo] text-lg">
              Last Updated: January 2025
            </p>
          </div>

          {/* Content */}
          <div className="space-y-8 bg-alien-space-dark/40 backdrop-blur-md border border-alien-gold/20 rounded-xl p-8">
            
            {/* Introduction */}
            <section>
              <div className="flex items-center gap-3 mb-4">
                <FileText className="h-6 w-6 text-alien-gold" />
                <h2 className="text-2xl font-bold text-alien-gold font-nasalization">Introduction</h2>
              </div>
              <p className="text-gray-200 font-[Exo] leading-relaxed">
                AlienFlowSpace DAO ("we," "us," or "our") is committed to protecting your privacy. 
                This Privacy and Cookie Policy explains how we collect, use, disclose, and safeguard 
                your information when you visit our website and use our services.
              </p>
            </section>

            {/* Information Collection */}
            <section>
              <div className="flex items-center gap-3 mb-4">
                <Database className="h-6 w-6 text-alien-gold" />
                <h2 className="text-2xl font-bold text-alien-gold font-nasalization">Information Collection</h2>
              </div>
              <div className="space-y-4 text-gray-200 font-[Exo]">
                <div>
                  <h3 className="text-alien-green font-semibold mb-2">Personal Information</h3>
                  <p className="leading-relaxed">
                    We may collect personal information that you voluntarily provide when using our services, 
                    including wallet addresses, email addresses, and transaction data on the blockchain.
                  </p>
                </div>
                <div>
                  <h3 className="text-alien-green font-semibold mb-2">Automatic Information</h3>
                  <p className="leading-relaxed">
                    We automatically collect certain information when you visit our website, including 
                    IP addresses, browser type, device information, and usage patterns through cookies 
                    and similar tracking technologies.
                  </p>
                </div>
              </div>
            </section>

            {/* Cookies & Tracking */}
            <section>
              <div className="flex items-center gap-3 mb-4">
                <Lock className="h-6 w-6 text-alien-gold" />
                <h2 className="text-2xl font-bold text-alien-gold font-nasalization">Cookies & Tracking Technologies</h2>
              </div>
              <div className="space-y-4 text-gray-200 font-[Exo]">
                <p className="leading-relaxed">
                  We use cookies and similar tracking technologies to enhance your experience and analyze 
                  website usage. Cookies are small data files stored on your device.
                </p>
                <div>
                  <h3 className="text-alien-green font-semibold mb-2">Types of Cookies We Use:</h3>
                  <ul className="list-disc list-inside space-y-2 ml-4">
                    <li><strong>Essential Cookies:</strong> Required for basic website functionality</li>
                    <li><strong>Analytics Cookies:</strong> Help us understand how visitors interact with our website</li>
                    <li><strong>Functional Cookies:</strong> Remember your preferences and settings</li>
                    <li><strong>Marketing Cookies:</strong> Used to track visitors across websites for marketing purposes</li>
                  </ul>
                </div>
                <p className="leading-relaxed">
                  You can control cookies through your browser settings, but disabling certain cookies 
                  may affect website functionality.
                </p>
              </div>
            </section>

            {/* Data Usage */}
            <section>
              <div className="flex items-center gap-3 mb-4">
                <Users className="h-6 w-6 text-alien-gold" />
                <h2 className="text-2xl font-bold text-alien-gold font-nasalization">How We Use Your Information</h2>
              </div>
              <ul className="list-disc list-inside space-y-2 text-gray-200 font-[Exo] ml-4">
                <li>To provide, maintain, and improve our services</li>
                <li>To process transactions and manage your participation in the DAO</li>
                <li>To communicate with you about updates, security alerts, and support</li>
                <li>To analyze usage patterns and optimize user experience</li>
                <li>To comply with legal obligations and enforce our terms</li>
                <li>To prevent fraud and enhance security</li>
              </ul>
            </section>

            {/* Data Sharing */}
            <section>
              <div className="flex items-center gap-3 mb-4">
                <Shield className="h-6 w-6 text-alien-gold" />
                <h2 className="text-2xl font-bold text-alien-gold font-nasalization">Data Sharing & Third Parties</h2>
              </div>
              <div className="space-y-4 text-gray-200 font-[Exo]">
                <p className="leading-relaxed">
                  We do not sell your personal information. We may share your information with:
                </p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>Service providers who assist in operating our website and services</li>
                  <li>Blockchain networks (as transactions are publicly visible)</li>
                  <li>Legal authorities when required by law or to protect rights and safety</li>
                  <li>Business partners with your consent</li>
                </ul>
              </div>
            </section>

            {/* User Rights */}
            <section>
              <div className="flex items-center gap-3 mb-4">
                <Lock className="h-6 w-6 text-alien-gold" />
                <h2 className="text-2xl font-bold text-alien-gold font-nasalization">Your Rights</h2>
              </div>
              <div className="space-y-4 text-gray-200 font-[Exo]">
                <p className="leading-relaxed">
                  Depending on your location, you may have the following rights regarding your personal data:
                </p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>Access and receive a copy of your personal data</li>
                  <li>Correct inaccurate or incomplete data</li>
                  <li>Request deletion of your personal data</li>
                  <li>Object to or restrict processing of your data</li>
                  <li>Data portability</li>
                  <li>Withdraw consent at any time</li>
                  <li>Lodge a complaint with a supervisory authority</li>
                </ul>
                <p className="leading-relaxed">
                  Note: Blockchain transactions are immutable and cannot be deleted once recorded.
                </p>
              </div>
            </section>

            {/* Security */}
            <section>
              <div className="flex items-center gap-3 mb-4">
                <Shield className="h-6 w-6 text-alien-gold" />
                <h2 className="text-2xl font-bold text-alien-gold font-nasalization">Data Security</h2>
              </div>
              <p className="text-gray-200 font-[Exo] leading-relaxed">
                We implement appropriate technical and organizational measures to protect your personal 
                information against unauthorized access, alteration, disclosure, or destruction. However, 
                no method of transmission over the internet is 100% secure.
              </p>
            </section>

            {/* Contact */}
            <section>
              <div className="flex items-center gap-3 mb-4">
                <Mail className="h-6 w-6 text-alien-gold" />
                <h2 className="text-2xl font-bold text-alien-gold font-nasalization">Contact Us</h2>
              </div>
              <p className="text-gray-200 font-[Exo] leading-relaxed">
                If you have questions about this Privacy Policy or wish to exercise your rights, 
                please contact us at:
              </p>
              <div className="mt-4 p-4 bg-alien-space-dark/60 rounded-lg border border-alien-gold/20">
                <p className="text-alien-gold font-semibold">Email: info@alienflow.space</p>
                <p className="text-gray-300 text-sm mt-1">Discord: discord.gg/alienflowspace</p>
              </div>
            </section>

            {/* Updates */}
            <section className="border-t border-alien-gold/20 pt-6">
              <p className="text-gray-300 font-[Exo] text-sm leading-relaxed">
                We may update this Privacy Policy from time to time. We will notify you of any changes 
                by posting the new Privacy Policy on this page and updating the "Last Updated" date.
              </p>
            </section>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default PrivacyPolicy;
