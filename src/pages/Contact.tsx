import React from 'react';
import { Button } from '@/components/ui/button';
import { Send, Mail, MessageSquare, X, Facebook, Instagram, Disc, Github, Linkedin, BookOpen } from 'lucide-react';
const Contact: React.FC = () => {
  return <div className="relative flex flex-col flex-1">

      <main className="relative z-10 flex-grow container mx-auto px-4 pt-4 pb-16">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-4xl md:text-5xl text-alien-gold mb-8 font-nasalization text-center py-[23px] font-extrabold">Contact Us</h1>
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Contact Methods - Takes 2/3 of the space on large screens */}
            <div className="lg:col-span-2 space-y-6">
              <div className="relative mb-8 max-w-2xl">
                <div className="bg-gradient-to-br from-alien-green/20 to-alien-green/5 backdrop-blur-md border-2 border-alien-green/40 rounded-2xl rounded-tl-sm p-6 shadow-lg shadow-alien-green/10">
                  <p className="text-lg md:text-xl font-[Exo] text-alien-green font-semibold leading-relaxed">
                    Have questions or want to join the AlienFlowSpace DAO? Reach out through any of these cosmic channels:
                  </p>
                </div>
                {/* Chat bubble pointer */}
                <div className="absolute -top-2 left-0 w-4 h-4 bg-alien-green/20 border-l-2 border-t-2 border-alien-green/40 transform rotate-45"></div>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="flex items-center p-4 bg-alien-space-dark/80 rounded-lg backdrop-blur-md hover:bg-alien-space-dark/90 transition-colors border border-alien-gold/20">
                  <div className="w-10 h-10 rounded-full bg-alien-green flex items-center justify-center mr-4">
                    <Disc className="h-5 w-5 text-alien-space-dark" />
                  </div>
                  <div>
                    <h3 className="font-medium text-alien-gold font-[Exo]">Discord</h3>
                    <a href="https://discord.gg/alienflowspace" target="_blank" rel="noopener noreferrer" className="text-gray-300 font-[Exo] hover:text-alien-green">discord.gg/alienflowspace</a>
                  </div>
                </div>
                
                <div className="flex items-center p-4 bg-alien-space-dark/80 rounded-lg backdrop-blur-md hover:bg-alien-space-dark/90 transition-colors border border-alien-gold/20">
                  <div className="w-10 h-10 rounded-full bg-alien-green flex items-center justify-center mr-4">
                    <Mail className="h-5 w-5 text-alien-space-dark" />
                  </div>
                  <div>
                    <h3 className="font-medium text-alien-gold font-[Exo]">Email</h3>
                    <a href="mailto:info@alienflow.space" className="text-gray-300 font-[Exo] hover:text-alien-green">info@alienflow.space</a>
                  </div>
                </div>
                
                <div className="flex items-center p-4 bg-alien-space-dark/80 rounded-lg backdrop-blur-md hover:bg-alien-space-dark/90 transition-colors border border-alien-gold/20">
                  <div className="w-10 h-10 rounded-full bg-alien-green flex items-center justify-center mr-4">
                    <Facebook className="h-5 w-5 text-alien-space-dark" />
                  </div>
                  <div>
                    <h3 className="font-medium text-alien-gold font-[Exo]">Facebook</h3>
                    <a href="https://www.facebook.com/Alien69Flow" target="_blank" rel="noopener noreferrer" className="text-gray-300 font-[Exo] hover:text-alien-green">facebook.com/Alien69Flow</a>
                  </div>
                </div>
                
                <div className="flex items-center p-4 bg-alien-space-dark/80 rounded-lg backdrop-blur-md hover:bg-alien-space-dark/90 transition-colors border border-alien-gold/20">
                  <div className="w-10 h-10 rounded-full bg-alien-green flex items-center justify-center mr-4">
                    <BookOpen className="h-5 w-5 text-alien-space-dark" />
                  </div>
                  <div>
                    <h3 className="font-medium text-alien-gold font-[Exo]">GitBook</h3>
                    <a href="https://alienflowspace.gitbook.io/DAO" target="_blank" rel="noopener noreferrer" className="text-gray-300 font-[Exo] hover:text-alien-green">alienflowspace.gitbook.io</a>
                  </div>
                </div>
                
                <div className="flex items-center p-4 bg-alien-space-dark/80 rounded-lg backdrop-blur-md hover:bg-alien-space-dark/90 transition-colors border border-alien-gold/20">
                  <div className="w-10 h-10 rounded-full bg-alien-green flex items-center justify-center mr-4">
                    <Github className="h-5 w-5 text-alien-space-dark" />
                  </div>
                  <div>
                    <h3 className="font-medium text-alien-gold font-[Exo]">GitHub</h3>
                    <a href="https://github.com/AlienFlowSpaceDAO" target="_blank" rel="noopener noreferrer" className="text-gray-300 font-[Exo] hover:text-alien-green">github.com/AlienFlowSpaceDAO</a>
                  </div>
                </div>
                
                <div className="flex items-center p-4 bg-alien-space-dark/80 rounded-lg backdrop-blur-md hover:bg-alien-space-dark/90 transition-colors border border-alien-gold/20">
                  <div className="w-10 h-10 rounded-full bg-alien-green flex items-center justify-center mr-4">
                    <Instagram className="h-5 w-5 text-alien-space-dark" />
                  </div>
                  <div>
                    <h3 className="font-medium text-alien-gold font-[Exo]">Instagram</h3>
                    <a href="https://www.instagram.com/alien69flow/" target="_blank" rel="noopener noreferrer" className="text-gray-300 font-[Exo] hover:text-alien-green">@alien69flow</a>
                  </div>
                </div>
                
                <div className="flex items-center p-4 bg-alien-space-dark/80 rounded-lg backdrop-blur-md hover:bg-alien-space-dark/90 transition-colors border border-alien-gold/20">
                  <div className="w-10 h-10 rounded-full bg-alien-green flex items-center justify-center mr-4">
                    <Linkedin className="h-5 w-5 text-alien-space-dark" />
                  </div>
                  <div>
                    <h3 className="font-medium text-alien-gold font-[Exo]">LinkedIn</h3>
                    <a href="https://linkedin.com/in/alienflow" target="_blank" rel="noopener noreferrer" className="text-gray-300 font-[Exo] hover:text-alien-green">linkedin.com/in/alienflow</a>
                  </div>
                </div>
                
                <div className="flex items-center p-4 bg-alien-space-dark/80 rounded-lg backdrop-blur-md hover:bg-alien-space-dark/90 transition-colors border border-alien-gold/20">
                  <div className="w-10 h-10 rounded-full bg-alien-green flex items-center justify-center mr-4">
                    <Send className="h-5 w-5 text-alien-space-dark" />
                  </div>
                  <div>
                    <h3 className="font-medium text-alien-gold font-[Exo]">Telegram</h3>
                    <a href="https://T.Me/AlienFlow" target="_blank" rel="noopener noreferrer" className="text-gray-300 font-[Exo] hover:text-alien-green">t.me/AlienFlow</a>
                  </div>
                </div>
                
                <div className="flex items-center p-4 bg-alien-space-dark/80 rounded-lg backdrop-blur-md hover:bg-alien-space-dark/90 transition-colors border border-alien-gold/20">
                  <div className="w-10 h-10 rounded-full bg-alien-green flex items-center justify-center mr-4">
                    <MessageSquare className="h-5 w-5 text-alien-space-dark" />
                  </div>
                  <div>
                    <h3 className="font-medium text-alien-gold font-[Exo]">Threads</h3>
                    <a href="https://threads.net/@alien69flow" target="_blank" rel="noopener noreferrer" className="text-gray-300 font-[Exo] hover:text-alien-green">@alien69flow</a>
                  </div>
                </div>
                
                <div className="flex items-center p-4 bg-alien-space-dark/80 rounded-lg backdrop-blur-md hover:bg-alien-space-dark/90 transition-colors border border-alien-gold/20">
                  <div className="w-10 h-10 rounded-full bg-alien-green flex items-center justify-center mr-4">
                    <X className="h-5 w-5 text-alien-space-dark" />
                  </div>
                  <div>
                    <h3 className="font-medium text-alien-gold font-[Exo]">X</h3>
                    <a href="https://x.com/alien69flow" target="_blank" rel="noopener noreferrer" className="text-gray-300 font-[Exo] hover:text-alien-green">@alien69flow</a>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Contact Form - Takes 1/3 of the space on large screens, compact design */}
            <div className="bg-alien-space-dark/80 p-5 rounded-lg backdrop-blur-md border border-alien-gold/20 h-fit">
              <h2 className="text-xl font-semibold text-alien-green mb-4 font-nasalization">Send us a message</h2>
              <form className="space-y-3">
                <div>
                  <label className="block text-sm font-medium text-gray-400 mb-1 font-[Exo]" htmlFor="name">Name</label>
                  <input type="text" id="name" className="w-full px-3 py-2 bg-alien-space-light/50 rounded-md border border-gray-600 text-gray-200 focus:border-alien-gold focus:outline-none font-[Exo] text-sm" placeholder="Your name" />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-400 mb-1 font-[Exo]" htmlFor="email">Email</label>
                  <input type="email" id="email" className="w-full px-3 py-2 bg-alien-space-light/50 rounded-md border border-gray-600 text-gray-200 focus:border-alien-gold focus:outline-none font-[Exo] text-sm" placeholder="your@email.com" />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-400 mb-1 font-[Exo]" htmlFor="message">Message</label>
                  <textarea id="message" rows={3} className="w-full px-3 py-2 bg-alien-space-light/50 rounded-md border border-gray-600 text-gray-200 focus:border-alien-gold focus:outline-none font-[Exo] text-sm resize-none" placeholder="Your message"></textarea>
                </div>
                
                <Button className="w-full bg-alien-green hover:bg-alien-green-light text-alien-space-dark font-[Exo] mt-4">
                  <Send size={16} className="mr-2" /> Send Message
                </Button>
              </form>
            </div>
          </div>
        </div>
      </main>
    </div>;
};
export default Contact;