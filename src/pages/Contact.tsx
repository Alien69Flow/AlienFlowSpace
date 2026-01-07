import React from 'react';
import { Button } from '@/components/ui/button';
import { Send, Mail, MessageSquare, X, Facebook, Instagram, Disc, Github, Linkedin, BookOpen, Users } from 'lucide-react';
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
                <div className="flex-1">
                  <div className="flex items-center gap-2">
                    <h3 className="font-medium text-alien-gold font-[Exo]">Discord</h3>
                    <span className="px-2 py-0.5 text-[10px] bg-orange-500/20 text-orange-400 rounded-full border border-orange-500/30 font-[Exo]">Coming Soon</span>
                  </div>
                  <span className="text-gray-500 font-[Exo]">discord.gg/alienflow</span>
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
                  <h3 className="font-medium text-alien-gold font-[Exo]">LinkedIn Personal</h3>
                  <a href="https://linkedin.com/in/alien69flow" target="_blank" rel="noopener noreferrer" className="text-gray-300 font-[Exo] hover:text-alien-green">linkedin.com/in/alien69flow</a>
                </div>
              </div>
              
              <div className="flex items-center p-4 bg-alien-space-dark/80 rounded-lg backdrop-blur-md hover:bg-alien-space-dark/90 transition-all duration-300 hover:scale-105 border border-alien-gold/20 hover:border-alien-green/40">
                <div className="w-10 h-10 rounded-full bg-alien-green flex items-center justify-center mr-4">
                  <Linkedin className="h-5 w-5 text-alien-space-dark" />
                </div>
                <div>
                  <h3 className="font-medium text-alien-gold font-[Exo]">LinkedIn Company</h3>
                  <a href="https://linkedin.com/company/alienflowspace" target="_blank" rel="noopener noreferrer" className="text-gray-300 font-[Exo] hover:text-alien-green">linkedin.com/company/alienflowspace</a>
                </div>
              </div>
              
              <div className="flex items-center p-4 bg-alien-space-dark/80 rounded-lg backdrop-blur-md hover:bg-alien-space-dark/90 transition-all duration-300 hover:scale-105 border border-alien-gold/20 hover:border-alien-green/40">
                <div className="w-10 h-10 rounded-full bg-alien-green flex items-center justify-center mr-4">
                  <svg className="h-5 w-5 text-alien-space-dark" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0zm5.01 4.744c.688 0 1.25.561 1.25 1.249a1.25 1.25 0 0 1-2.498.056l-2.597-.547-.8 3.747c1.824.07 3.48.632 4.674 1.488.308-.309.73-.491 1.207-.491.968 0 1.754.786 1.754 1.754 0 .716-.435 1.333-1.01 1.614a3.111 3.111 0 0 1 .042.52c0 2.694-3.13 4.87-7.004 4.87-3.874 0-7.004-2.176-7.004-4.87 0-.183.015-.366.043-.534A1.748 1.748 0 0 1 4.028 12c0-.968.786-1.754 1.754-1.754.463 0 .898.196 1.207.49 1.207-.883 2.878-1.43 4.744-1.487l.885-4.182a.342.342 0 0 1 .14-.197.35.35 0 0 1 .238-.042l2.906.617a1.214 1.214 0 0 1 1.108-.701zM9.25 12C8.561 12 8 12.562 8 13.25c0 .687.561 1.248 1.25 1.248.687 0 1.248-.561 1.248-1.249 0-.688-.561-1.249-1.249-1.249zm5.5 0c-.687 0-1.248.561-1.248 1.25 0 .687.561 1.248 1.249 1.248.688 0 1.249-.561 1.249-1.249 0-.687-.562-1.249-1.25-1.249zm-5.466 3.99a.327.327 0 0 0-.231.094.33.33 0 0 0 0 .463c.842.842 2.484.913 2.961.913.477 0 2.105-.056 2.961-.913a.361.361 0 0 0 .029-.463.33.33 0 0 0-.464 0c-.547.533-1.684.73-2.512.73-.828 0-1.979-.196-2.512-.73a.326.326 0 0 0-.232-.095z"/>
                  </svg>
                </div>
                <div>
                  <h3 className="font-medium text-alien-gold font-[Exo]">Reddit</h3>
                  <a href="https://www.reddit.com/user/Alien69Flow/" target="_blank" rel="noopener noreferrer" className="text-gray-300 font-[Exo] hover:text-alien-green">reddit.com/user/Alien69Flow</a>
                </div>
              </div>
              
              <div className="flex items-center p-4 bg-alien-space-dark/80 rounded-lg backdrop-blur-md hover:bg-alien-space-dark/90 transition-all duration-300 hover:scale-105 border border-alien-gold/20 hover:border-alien-green/40">
                <div className="w-10 h-10 rounded-full bg-alien-green flex items-center justify-center mr-4">
                  <Send className="h-5 w-5 text-alien-space-dark" />
                </div>
                <div>
                  <h3 className="font-medium text-alien-gold font-[Exo]">Telegram Personal</h3>
                  <a href="https://t.me/Alien69Flow" target="_blank" rel="noopener noreferrer" className="text-gray-300 font-[Exo] hover:text-alien-green">@Alien69Flow</a>
                </div>
              </div>
              
              <div className="flex items-center p-4 bg-alien-space-dark/80 rounded-lg backdrop-blur-md hover:bg-alien-space-dark/90 transition-all duration-300 hover:scale-105 border border-alien-gold/20 hover:border-alien-green/40">
                <div className="w-10 h-10 rounded-full bg-alien-green flex items-center justify-center mr-4">
                  <Users className="h-5 w-5 text-alien-space-dark" />
                </div>
                <div>
                  <h3 className="font-medium text-alien-gold font-[Exo]">Telegram Community</h3>
                  <a href="https://t.me/AlienFlow" target="_blank" rel="noopener noreferrer" className="text-gray-300 font-[Exo] hover:text-alien-green">t.me/AlienFlow</a>
                </div>
              </div>
              
              <div className="flex items-center p-4 bg-alien-space-dark/80 rounded-lg backdrop-blur-md hover:bg-alien-space-dark/90 transition-all duration-300 hover:scale-105 border border-alien-gold/20 hover:border-alien-green/40">
                <div className="w-10 h-10 rounded-full bg-alien-green flex items-center justify-center mr-4">
                  <svg className="h-5 w-5 text-alien-space-dark" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.02-.5-.03-1-.01-1.49.18-1.9 1.12-3.72 2.58-4.96 1.66-1.44 3.98-2.13 6.15-1.72.02 1.48-.04 2.96-.04 4.44-.99-.32-2.15-.23-3.02.37-.63.41-1.11 1.04-1.36 1.75-.21.51-.15 1.07-.14 1.61.24 1.64 1.82 3.02 3.5 2.87 1.12-.01 2.19-.66 2.77-1.61.19-.33.4-.67.41-1.06.1-1.79.06-3.57.07-5.36.01-4.03-.01-8.05.02-12.07z"/>
                  </svg>
                </div>
                <div className="flex-1">
                  <div className="flex items-center gap-2">
                    <h3 className="font-medium text-alien-gold font-[Exo]">TikTok</h3>
                    <span className="px-2 py-0.5 text-[10px] bg-orange-500/20 text-orange-400 rounded-full border border-orange-500/30 font-[Exo]">Coming Soon</span>
                  </div>
                  <span className="text-gray-500 font-[Exo]">@alien69flow</span>
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