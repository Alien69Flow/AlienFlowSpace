import React from 'react';
import { motion } from 'framer-motion';
import { FileText, Scale, Users, Shield, AlertCircle, Mail } from 'lucide-react';
import AlienTag from '@/components/alien/AlienTag';
import { Link } from 'react-router-dom';

const TermsOfService = () => {
  return (
    <div className="min-h-screen py-16">
      <div className="container mx-auto px-4 max-w-4xl">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
          {/* Header */}
          <div className="mb-10">
            <div className="flex items-center gap-3 mb-4">
              <AlienTag color="gold">LEGAL</AlienTag>
              <AlienTag color="muted">TERMS OF SERVICE</AlienTag>
            </div>
            <div className="flex items-center gap-4 mb-2">
              <div className="p-3 border border-af-border">
                <Scale className="h-8 w-8 text-alien-gold" />
              </div>
              <h1 className="text-4xl lg:text-5xl font-bold text-alien-gold font-nasalization af-heading-underline inline-block">
                Terms of Service
              </h1>
            </div>
            <p className="text-alien-green font-nasalization text-lg mt-4">Last Updated: October 2026</p>
          </div>

          {/* Content */}
          <div className="border border-af-border bg-af-surface/20 p-6 md:p-8 space-y-8">

            <section>
              <div className="flex items-center gap-3 mb-4">
                <FileText className="h-5 w-5 text-alien-gold" />
                <h2 className="text-xl font-bold text-alien-gold font-nasalization">Acceptance of Terms</h2>
              </div>
              <p className="text-gray-200 leading-relaxed">
                By accessing or using the AlienFlowSpace DAO website, services, and decentralized applications,
                you agree to be bound by these Terms of Service. If you do not agree with any part of these terms,
                you must not use our services. These terms constitute a legally binding agreement between you
                and AlienFlowSpace DAO.
              </p>
            </section>

            <section>
              <div className="flex items-center gap-3 mb-4">
                <Users className="h-5 w-5 text-alien-gold" />
                <h2 className="text-xl font-bold text-alien-gold font-nasalization">Eligibility & Participation</h2>
              </div>
              <div className="space-y-4 text-gray-200">
                <p className="leading-relaxed">
                  You must be at least 18 years old or the age of legal majority in your jurisdiction to use our services.
                  By participating in the DAO, you represent and warrant that:
                </p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>You have the legal capacity to enter into binding agreements</li>
                  <li>You are not prohibited from using our services under applicable laws</li>
                  <li>You are not located in a jurisdiction subject to comprehensive sanctions</li>
                  <li>You understand the risks associated with blockchain and cryptocurrency transactions</li>
                  <li>You are responsible for your own wallet security and private keys</li>
                </ul>
              </div>
            </section>

            <section>
              <div className="flex items-center gap-3 mb-4">
                <AlertCircle className="h-5 w-5 text-alien-gold" />
                <h2 className="text-xl font-bold text-alien-gold font-nasalization">No Financial Advice</h2>
              </div>
              <p className="text-gray-200 leading-relaxed">
                All content provided by AlienFlowSpace DAO is for informational and educational purposes only.
                Nothing on this website constitutes financial, investment, legal, or tax advice. Cryptocurrency
                and blockchain-based assets carry significant risk, including total loss of value. You should
                consult qualified professionals before making any investment decisions. Never invest more than
                you can afford to lose.
              </p>
            </section>

            <section>
              <div className="flex items-center gap-3 mb-4">
                <Shield className="h-5 w-5 text-alien-gold" />
                <h2 className="text-xl font-bold text-alien-gold font-nasalization">DAO Governance & Smart Contracts</h2>
              </div>
              <div className="space-y-4 text-gray-200">
                <p className="leading-relaxed">
                  AlienFlowSpace DAO operates through smart contracts deployed on the Polygon blockchain.
                  By interacting with our governance system, you acknowledge that:
                </p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>Smart contract transactions are irreversible and immutable once confirmed</li>
                  <li>Governance decisions are executed on-chain and cannot be reversed</li>
                  <li>You are solely responsible for reviewing and understanding proposals before voting</li>
                  <li>Smart contracts may contain bugs or vulnerabilities despite auditing efforts</li>
                  <li>The DAO is not liable for losses resulting from smart contract failures</li>
                </ul>
              </div>
            </section>

            <section>
              <div className="flex items-center gap-3 mb-4">
                <FileText className="h-5 w-5 text-alien-gold" />
                <h2 className="text-xl font-bold text-alien-gold font-nasalization">Acceptable Use</h2>
              </div>
              <div className="space-y-4 text-gray-200">
                <p className="leading-relaxed">You agree not to:</p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>Use our services for any illegal or unauthorized purpose</li>
                  <li>Attempt to disrupt, hack, or compromise our website or smart contracts</li>
                  <li>Submit malicious or fraudulent governance proposals</li>
                  <li>Use bots, scripts, or automated systems to manipulate voting</li>
                  <li>Impersonate other users or misrepresent your affiliation with the DAO</li>
                  <li>Distribute malware, spam, or harmful content through our platforms</li>
                  <li>Violate any applicable local, national, or international law</li>
                </ul>
              </div>
            </section>

            <section>
              <div className="flex items-center gap-3 mb-4">
                <Scale className="h-5 w-5 text-alien-gold" />
                <h2 className="text-xl font-bold text-alien-gold font-nasalization">Limitation of Liability</h2>
              </div>
              <p className="text-gray-200 leading-relaxed">
                AlienFlowSpace DAO, its contributors, and community members shall not be liable for any indirect,
                incidental, special, consequential, or punitive damages, including loss of profits, data,
                or digital assets, arising from your use of or inability to use our services. The DAO is a
                decentralized entity and does not have a central operator that can be held liable for
                on-chain decisions made through governance.
              </p>
            </section>

            <section>
              <div className="flex items-center gap-3 mb-4">
                <FileText className="h-5 w-5 text-alien-gold" />
                <h2 className="text-xl font-bold text-alien-gold font-nasalization">Intellectual Property</h2>
              </div>
              <p className="text-gray-200 leading-relaxed">
                The AlienFlowSpace DAO brand, logo, website content, and design are provided under applicable
                licenses. Smart contract code may be open-source under specific license terms. Community
                contributions are governed by the DAO's intellectual property policies as approved through
                governance.
              </p>
            </section>

            <section>
              <div className="flex items-center gap-3 mb-4">
                <AlertCircle className="h-5 w-5 text-alien-gold" />
                <h2 className="text-xl font-bold text-alien-gold font-nasalization">Dispute Resolution</h2>
              </div>
              <p className="text-gray-200 leading-relaxed">
                Disputes arising from these Terms shall be resolved through good-faith community mediation
                within the DAO governance framework. If mediation fails, disputes shall be resolved through
                binding arbitration in accordance with applicable cryptocurrency and blockchain dispute
                resolution practices.
              </p>
            </section>

            <section>
              <div className="flex items-center gap-3 mb-4">
                <Mail className="h-5 w-5 text-alien-gold" />
                <h2 className="text-xl font-bold text-alien-gold font-nasalization">Contact</h2>
              </div>
              <p className="text-gray-200 leading-relaxed">
                For questions about these Terms of Service, please contact us at:
              </p>
              <div className="mt-4 p-4 border border-af-border bg-af-surface/30">
                <p className="text-alien-gold font-semibold font-nasalization">Email: info@alienflow.space</p>
                <p className="text-gray-300 text-sm mt-1">Discord: discord.gg/alienflowspace</p>
              </div>
            </section>

            <section className="border-t border-af-border-hairline pt-6 space-y-3">
              <p className="text-gray-300 text-sm leading-relaxed">
                These Terms may be updated through DAO governance proposals. Changes become effective
                immediately upon approval and publication. Continued use of our services constitutes
                acceptance of updated Terms.
              </p>
              <p className="text-alien-gold/70 text-sm">
                See also: <Link to="/privacy-policy" className="text-alien-gold hover:underline">Privacy &amp; Cookie Policy</Link>
              </p>
            </section>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default TermsOfService;
