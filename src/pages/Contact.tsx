import React from 'react';
import { Button } from '@/components/ui/button';
import { Send, Mail, MessageSquare, X, Facebook, Instagram, Disc, Github, Linkedin, BookOpen } from 'lucide-react';
const Contact: React.FC = () => {
  return <div className="relative flex flex-col flex-1">

      <main className="relative z-10 flex-grow container mx-auto px-4 pt-4 pb-16">
        <div className="max-w-6xl mx-auto">
          <div className="relative mb-12 py-8">
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-nasalization text-center font-extrabold relative">
              <span className="bg-gradient-to-r from-alien-green via-alien-gold to-alien-green bg-clip-text text-transparent animate-pulse drop-shadow-[0_0_30px_rgba(57,255,20,0.5)]">
                Contact Us
              </span>
              <div className="absolute inset-0 blur-xl opacity-50 bg-gradient-to-r from-alien-green/30 via-alien-gold/30 to-alien-green/30 -z-10"></div>
            </h1>
            <div className="flex justify-center items-center gap-2 mt-4">
              <div className="h-px w-16 md:w-24 bg-gradient-to-r from-transparent via-alien-green to-transparent"></div>
              <div className="w-2 h-2 rounded-full bg-alien-green animate-pulse shadow-[0_0_10px_rgba(57,255,20,0.8)]"></div>
              <div className="h-px w-16 md:w-24 bg-gradient-to-r from-transparent via-alien-gold to-transparent"></div>
            </div>
          </div>
          
          <div className="flex flex-col items-center space-y-8 max-w-5xl mx-auto">
            {/* Message Section with Animation */}
            <div className="relative w-full max-w-3xl animate-fade-in">
              <div className="bg-gradient-to-br from-alien-green/20 to-alien-green/5 backdrop-blur-md border-2 border-alien-green/40 rounded-2xl rounded-tl-sm p-8 shadow-lg shadow-alien-green/10 hover:shadow-alien-green/20 transition-all duration-300 hover:scale-[1.02]">
                <p className="text-lg md:text-xl font-[Exo] font-semibold leading-relaxed text-alien-gold text-center">
                  Have questions or want to join the AlienFlowSpace DAO? Reach out through any of these cosmic channels:
                </p>
              </div>
              {/* Chat bubble pointer */}
              <div className="absolute -top-2 left-8 w-4 h-4 bg-alien-green/20 border-l-2 border-t-2 border-alien-green/40 transform rotate-45"></div>
            </div>
            
            {/* Social Media Channels Grid */}
            <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              <div className="flex items-center p-4 bg-alien-space-dark/80 rounded-lg backdrop-blur-md hover:bg-alien-space-dark/90 transition-all duration-300 hover:scale-105 border border-alien-gold/20 hover:border-alien-green/40">
                <div className="w-10 h-10 rounded-full bg-alien-green flex items-center justify-center mr-4">
                  <Disc className="h-5 w-5 text-alien-space-dark" />
                </div>
                <div>
                  <h3 className="font-medium text-alien-gold font-[Exo]">Discord</h3>
                  <a href="https://discord.gg/alienflowspace" target="_blank" rel="noopener noreferrer" className="text-gray-300 font-[Exo] hover:text-alien-green">discord.gg/alienflowspace</a>
                </div>
              </div>
              
              <div className="flex items-center p-4 bg-alien-space-dark/80 rounded-lg backdrop-blur-md hover:bg-alien-space-dark/90 transition-all duration-300 hover:scale-105 border border-alien-gold/20 hover:border-alien-green/40">
                <div className="w-10 h-10 rounded-full bg-alien-green flex items-center justify-center mr-4">
                  <Mail className="h-5 w-5 text-alien-space-dark" />
                </div>
                <div>
                  <h3 className="font-medium text-alien-gold font-[Exo]">Email</h3>
                  <a href="mailto:info@alienflow.space" className="text-gray-300 font-[Exo] hover:text-alien-green">info@alienflow.space</a>
                </div>
              </div>
              
              <div className="flex items-center p-4 bg-alien-space-dark/80 rounded-lg backdrop-blur-md hover:bg-alien-space-dark/90 transition-all duration-300 hover:scale-105 border border-alien-gold/20 hover:border-alien-green/40">
                <div className="w-10 h-10 rounded-full bg-alien-green flex items-center justify-center mr-4">
                  <Facebook className="h-5 w-5 text-alien-space-dark" />
                </div>
                <div>
                  <h3 className="font-medium text-alien-gold font-[Exo]">Facebook</h3>
                  <a href="https://www.facebook.com/Alien69Flow" target="_blank" rel="noopener noreferrer" className="text-gray-300 font-[Exo] hover:text-alien-green">facebook.com/Alien69Flow</a>
                </div>
              </div>
              
              <div className="flex items-center p-4 bg-alien-space-dark/80 rounded-lg backdrop-blur-md hover:bg-alien-space-dark/90 transition-all duration-300 hover:scale-105 border border-alien-gold/20 hover:border-alien-green/40">
                <div className="w-10 h-10 rounded-full bg-alien-green flex items-center justify-center mr-4">
                  <BookOpen className="h-5 w-5 text-alien-space-dark" />
                </div>
                <div>
                  <h3 className="font-medium text-alien-gold font-[Exo]">GitBook</h3>
                  <a href="https://alienflowspace.gitbook.io/DAO" target="_blank" rel="noopener noreferrer" className="text-gray-300 font-[Exo] hover:text-alien-green">alienflowspace.gitbook.io</a>
                </div>
              </div>
              
              <div className="flex items-center p-4 bg-alien-space-dark/80 rounded-lg backdrop-blur-md hover:bg-alien-space-dark/90 transition-all duration-300 hover:scale-105 border border-alien-gold/20 hover:border-alien-green/40">
                <div className="w-10 h-10 rounded-full bg-alien-green flex items-center justify-center mr-4">
                  <Github className="h-5 w-5 text-alien-space-dark" />
                </div>
                <div>
                  <h3 className="font-medium text-alien-gold font-[Exo]">GitHub</h3>
                  <a href="https://github.com/Alien69Flow" target="_blank" rel="noopener noreferrer" className="text-gray-300 font-[Exo] hover:text-alien-green">github.com/Alien69Flow</a>
                </div>
              </div>
              
              <div className="flex items-center p-4 bg-alien-space-dark/80 rounded-lg backdrop-blur-md hover:bg-alien-space-dark/90 transition-all duration-300 hover:scale-105 border border-alien-gold/20 hover:border-alien-green/40">
                <div className="w-10 h-10 rounded-full bg-alien-green flex items-center justify-center mr-4">
                  <Instagram className="h-5 w-5 text-alien-space-dark" />
                </div>
                <div>
                  <h3 className="font-medium text-alien-gold font-[Exo]">Instagram</h3>
                  <a href="https://www.instagram.com/alien69flow/" target="_blank" rel="noopener noreferrer" className="text-gray-300 font-[Exo] hover:text-alien-green">@alien69flow</a>
                </div>
              </div>
              
              <div className="flex items-center p-4 bg-alien-space-dark/80 rounded-lg backdrop-blur-md hover:bg-alien-space-dark/90 transition-all duration-300 hover:scale-105 border border-alien-gold/20 hover:border-alien-green/40">
                <div className="w-10 h-10 rounded-full bg-alien-green flex items-center justify-center mr-4">
                  <Linkedin className="h-5 w-5 text-alien-space-dark" />
                </div>
                <div>
                  <h3 className="font-medium text-alien-gold font-[Exo]">LinkedIn</h3>
                  <a href="https://linkedin.com/in/alienflow" target="_blank" rel="noopener noreferrer" className="text-gray-300 font-[Exo] hover:text-alien-green">linkedin.com/in/alienflow</a>
                </div>
              </div>
              
              <div className="flex items-center p-4 bg-alien-space-dark/80 rounded-lg backdrop-blur-md hover:bg-alien-space-dark/90 transition-all duration-300 hover:scale-105 border border-alien-gold/20 hover:border-alien-green/40">
                <div className="w-10 h-10 rounded-full bg-alien-green flex items-center justify-center mr-4">
                  <Send className="h-5 w-5 text-alien-space-dark" />
                </div>
                <div>
                  <h3 className="font-medium text-alien-gold font-[Exo]">Telegram</h3>
                  <a href="https://T.Me/AlienFlow" target="_blank" rel="noopener noreferrer" className="text-gray-300 font-[Exo] hover:text-alien-green">t.me/AlienFlow</a>
                </div>
              </div>
              
              <div className="flex items-center p-4 bg-alien-space-dark/80 rounded-lg backdrop-blur-md hover:bg-alien-space-dark/90 transition-all duration-300 hover:scale-105 border border-alien-gold/20 hover:border-alien-green/40">
                <div className="w-10 h-10 rounded-full bg-alien-green flex items-center justify-center mr-4">
                  <MessageSquare className="h-5 w-5 text-alien-space-dark" />
                </div>
                <div>
                  <h3 className="font-medium text-alien-gold font-[Exo]">Threads</h3>
                  <a href="https://threads.net/@alien69flow" target="_blank" rel="noopener noreferrer" className="text-gray-300 font-[Exo] hover:text-alien-green">@alien69flow</a>
                </div>
              </div>
              
              <div className="flex items-center p-4 bg-alien-space-dark/80 rounded-lg backdrop-blur-md hover:bg-alien-space-dark/90 transition-all duration-300 hover:scale-105 border border-alien-gold/20 hover:border-alien-green/40">
                <div className="w-10 h-10 rounded-full bg-alien-green flex items-center justify-center mr-4">
                  <X className="h-5 w-5 text-alien-space-dark" />
                </div>
                <div>
                  <h3 className="font-medium text-alien-gold font-[Exo]">X</h3>
                  <a href="https://x.com/alien69flow" target="_blank" rel="noopener noreferrer" className="text-gray-300 font-[Exo] hover:text-alien-green">@alien69flow</a>
                </div>
              </div>
            </div>
            
            {/* Contact Form */}
            <div className="w-full max-w-2xl bg-gradient-to-br from-alien-space-dark/90 to-alien-space-dark/70 p-8 rounded-2xl backdrop-blur-md border-2 border-alien-green/30 shadow-[0_0_30px_rgba(57,255,20,0.15)] hover:shadow-[0_0_40px_rgba(57,255,20,0.25)] transition-all duration-300">
              <h2 className="text-2xl md:text-3xl font-semibold text-alien-green mb-6 font-nasalization text-center">Send us a message</h2>
              <form className="space-y-5">
                <div>
                  <label className="block text-sm font-medium text-alien-gold mb-2 font-[Exo]" htmlFor="name">Name</label>
                  <input type="text" id="name" className="w-full px-4 py-3 bg-alien-space-light/50 rounded-lg border-2 border-gray-600 text-gray-200 focus:border-alien-green focus:outline-none font-[Exo] transition-colors" placeholder="Your name" />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-alien-gold mb-2 font-[Exo]" htmlFor="email">Email</label>
                  <input type="email" id="email" className="w-full px-4 py-3 bg-alien-space-light/50 rounded-lg border-2 border-gray-600 text-gray-200 focus:border-alien-green focus:outline-none font-[Exo] transition-colors" placeholder="your@email.com" />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-alien-gold mb-2 font-[Exo]" htmlFor="message">Message</label>
                  <textarea id="message" rows={5} className="w-full px-4 py-3 bg-alien-space-light/50 rounded-lg border-2 border-gray-600 text-gray-200 focus:border-alien-green focus:outline-none font-[Exo] resize-none transition-colors" placeholder="Your message"></textarea>
                </div>
                
                <Button className="w-full bg-alien-green hover:bg-alien-green-light text-alien-space-dark font-[Exo] font-semibold py-3 rounded-lg transition-all duration-300 hover:scale-105 hover:shadow-[0_0_20px_rgba(57,255,20,0.5)]">
                  <Send size={18} className="mr-2" /> Send Message
                </Button>
              </form>
            </div>
          </div>
        </div>
      </main>
    </div>;
};
export default Contact;