import React, { useState, useEffect, useRef } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { 
  Send, Mail, ChevronRight, Terminal, Loader2, 
  Twitter, Github, Disc, Instagram, Linkedin, 
  MessageCircle, BookOpen, Facebook, Share2, 
  Globe, Cpu, ShieldCheck
} from 'lucide-react';
import { motion } from 'framer-motion';
import { toast } from 'sonner';
import { supabase } from '@/integrations/supabase/client';
import { z } from 'zod';

// Validación con Zod para asegurar datos limpios
const contactFormSchema = z.object({
  name: z.string().trim().min(2, "Mínimo 2 caracteres"),
  email: z.string().trim().email("Email inválido"),
  subject: z.string().trim().min(3, "Asunto requerido"),
  message: z.string().trim().min(10, "Mensaje demasiado corto")
});

type ContactFormData = z.infer<typeof contactFormSchema>;

const Contact: React.FC = () => {
  const [formData, setFormData] = useState<ContactFormData>({ name: '', email: '', subject: '', message: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formErrors, setFormErrors] = useState<Partial<Record<keyof ContactFormData, string>>>({});
  const [honeypot, setHoneypot] = useState(''); // Protección anti-spam
  
  const [terminalInput, setTerminalInput] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const [terminalHistory, setTerminalHistory] = useState([
    { type: 'ai', text: '[SISTEMA]: Enlace neuronal con AI Tor establecido.' },
    { type: 'ai', text: '[AI-TOR]: Canal de soporte DAO listo. ¿En qué puedo ayudarte?' }
  ]);
  
  const terminalRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (terminalRef.current) terminalRef.current.scrollTop = terminalRef.current.scrollHeight;
  }, [terminalHistory, isTyping]);

  const handleFormSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (honeypot) return; // Bloqueo silencioso de bots

    const result = contactFormSchema.safeParse(formData);
    if (!result.success) {
      const errors: any = {};
      result.error.errors.forEach(err => { errors[err.path[0]] = err.message; });
      setFormErrors(errors);
      return;
    }

    setIsSubmitting(true);
    try {
      // Envío a Supabase Edge Function (Configurada para alien69flow@proton.me)
      const { error } = await supabase.functions.invoke('send-contact-email', { 
        body: { ...formData, destination: 'alien69flow@proton.me' } 
      });
      
      if (error) throw error;

      toast.success('SEÑAL TRANSMITIDA', {
        description: 'Mensaje enviado con éxito a la red Proton.',
        style: { background: '#0a0a0a', border: '1px solid #39FF14', color: '#39FF14' }
      });

      setFormData({ name: '', email: '', subject: '', message: '' });
      setFormErrors({});
    } catch (error) {
      toast.error('FALLO DE TRANSMISIÓN', { description: 'Reintenta o contacta vía RRSS.' });
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleTerminalSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!terminalInput.trim()) return;
    setTerminalHistory(prev => [...prev, { type: 'user', text: terminalInput }]);
    const userMsg = terminalInput.toLowerCase();
    setTerminalInput('');
    setIsTyping(true);

    setTimeout(() => {
      let response = "[SISTEMA]: Comando no reconocido. Escriba 'ayuda'.";
      if (userMsg.includes('ayuda')) response = "[AI-TOR]: Comandos disponibles: status, dao, seguridad.";
      if (userMsg.includes('status')) response = "[LOG]: Todos los sistemas operativos. Latencia mínima.";
      if (userMsg.includes('dao')) response = "[AI-TOR]: La gobernanza se ejecuta on-chain mediante contratos inteligentes.";
      if (userMsg.includes('seguridad')) response = "[INFO]: Encriptación end-to-end activa via Proton.";
      
      setTerminalHistory(prev => [...prev, { type: 'ai', text: response }]);
      setIsTyping(false);
    }, 600);
  };

  // REDES ORDENADAS ALFABÉTICAMENTE
  const socialLinks = [
    { name: 'Discord', icon: Disc, link: '', comingSoon: true },
    { name: 'Facebook', icon: Facebook, link: 'https://www.facebook.com/Alien69Flow', comingSoon: false },
    { name: 'GitBook', icon: BookOpen, link: 'https://alienflowspace.gitbook.io/DAO', comingSoon: false },
    { name: 'GitHub', icon: Github, link: 'https://github.com/Alien69Flow', comingSoon: false },
    { name: 'Instagram', icon: Instagram, link: 'https://www.instagram.com/alien69flow/', comingSoon: false },
    { name: 'LinkedIn', icon: Linkedin, link: 'https://linkedin.com/company/alienflowspace', comingSoon: false },
    { name: 'Telegram', icon: MessageCircle, link: 'https://t.me/AlienFlow', comingSoon: false },
    { name: 'Threads', icon: Share2, link: 'https://threads.net/@alien69flow', comingSoon: false },
    { name: 'TikTok', icon: Globe, link: '', comingSoon: true },
    { name: 'X (Twitter)', icon: Twitter, link: 'https://x.com/alien69flow', comingSoon: false },
  ];

  return (
    <div className="min-h-screen bg-transparent pb-24 px-4 md:px-12 font-exo overflow-hidden">
      <main className="max-w-7xl mx-auto pt-16">
        
        {/* Header Seccion */}
        <motion.div initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} className="mb-16 text-center lg:text-left">
          <h1 className="text-5xl md:text-8xl font-nasalization bg-gradient-to-r from-alien-green via-alien-gold to-alien-green bg-clip-text text-transparent drop-shadow-[0_0_15px_rgba(57,255,20,0.2)]">
            COMMUNICATIONS
          </h1>
          <div className="flex items-center justify-center lg:justify-start gap-4 mt-4 text-gray-500 font-mono text-[10px] tracking-[0.4em]">
            <Cpu className="w-3 h-3 text-alien-gold animate-spin-slow" />
            <span>ALPHABETICAL_ORDER_INDEX // ENCRYPTED_LINK</span>
          </div>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 mb-20 items-stretch">
          
          {/* FORMULARIO DE CONTACTO */}
          <motion.div initial={{ opacity: 0, x: -30 }} animate={{ opacity: 1, x: 0 }} className="bg-white/[0.02] backdrop-blur-3xl border border-white/10 p-8 md:p-10 rounded-[2.5rem] shadow-2xl relative group overflow-hidden">
            <div className="absolute inset-0 bg-alien-green/5 opacity-0 group-hover:opacity-100 transition-opacity duration-1000" />
            <div className="flex justify-between items-center mb-10 relative z-10">
              <h2 className="text-xl font-nasalization text-alien-green flex items-center gap-3 tracking-tighter">
                <ShieldCheck className="w-5 h-5" /> PROTOCOLO DE ENVÍO
              </h2>
              <span className="text-[9px] text-gray-500 font-mono">DEST: PROTON.ME</span>
            </div>

            <form onSubmit={handleFormSubmit} className="space-y-6 relative z-10">
              {/* Honeypot invisible */}
              <input type="text" className="hidden" value={honeypot} onChange={(e) => setHoneypot(e.target.value)} />

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <Label className="text-[10px] text-alien-green/60 uppercase ml-1">Alias / Nombre</Label>
                  <Input value={formData.name} onChange={(e) => setFormData({...formData, name: e.target.value})} className="bg-black/60 border-white/5 focus:border-alien-green/50 h-14 rounded-2xl" placeholder="Identidad" />
                  {formErrors.name && <p className="text-red-500 text-[10px] ml-1">{formErrors.name}</p>}
                </div>
                <div className="space-y-2">
                  <Label className="text-[10px] text-alien-green/60 uppercase ml-1">Nodo de Respuesta</Label>
                  <Input type="email" value={formData.email} onChange={(e) => setFormData({...formData, email: e.target.value})} className="bg-black/60 border-white/5 focus:border-alien-green/50 h-14 rounded-2xl" placeholder="email@dominio.com" />
                </div>
              </div>
              <div className="space-y-2">
                <Label className="text-[10px] text-alien-green/60 uppercase ml-1">Etiqueta de Asunto</Label>
                <Input value={formData.subject} onChange={(e) => setFormData({...formData, subject: e.target.value})} className="bg-black/60 border-white/5 focus:border-alien-green/50 h-14 rounded-2xl" />
              </div>
              <div className="space-y-2">
                <Label className="text-[10px] text-alien-green/60 uppercase ml-1">Cuerpo del Mensaje</Label>
                <Textarea value={formData.message} onChange={(e) => setFormData({...formData, message: e.target.value})} rows={5} className="bg-black/60 border-white/5 focus:border-alien-green/50 rounded-2xl resize-none" />
              </div>
              <Button type="submit" disabled={isSubmitting} className="w-full bg-gradient-to-r from-alien-green to-alien-gold text-black font-black h-16 rounded-2xl hover:brightness-125 transition-all shadow-lg shadow-alien-green/10">
                {isSubmitting ? <Loader2 className="animate-spin" /> : 'DESPLEGAR PAQUETE DE DATOS'}
              </Button>
            </form>
          </motion.div>

          {/* TERMINAL AI TOR */}
          <motion.div initial={{ opacity: 0, x: 30 }} animate={{ opacity: 1, x: 0 }} className="flex flex-col bg-black/80 border-2 border-white/5 rounded-[2.5rem] overflow-hidden group">
            <div className="bg-white/5 p-5 border-b border-white/5 flex justify-between items-center">
              <span className="text-[10px] font-mono text-alien-gold flex items-center gap-3 tracking-[0.2em]">
                <Terminal className="w-4 h-4" /> AI-TOR CONSOLE v2.0
              </span>
              <div className="w-2 h-2 rounded-full bg-alien-green animate-pulse shadow-[0_0_10px_#39FF14]" />
            </div>
            <div ref={terminalRef} className="flex-1 p-8 font-mono text-[11px] space-y-4 overflow-y-auto max-h-[450px] scrollbar-hide">
              {terminalHistory.map((m, i) => (
                <div key={i} className={m.type === 'ai' ? 'text-alien-green' : 'text-alien-gold/70'}>
                  <span className="opacity-40">{m.type === 'ai' ? '>>>' : 'USR>'}</span> {m.text}
                </div>
              ))}
              {isTyping && <div className="text-alien-green animate-pulse">_Sincronizando...</div>}
            </div>
            <form onSubmit={handleTerminalSubmit} className="p-6 bg-white/5 flex gap-4 border-t border-white/5">
              <ChevronRight className="text-alien-gold w-5 h-5" />
              <input value={terminalInput} onChange={(e) => setTerminalInput(e.target.value)} className="bg-transparent border-none outline-none flex-1 text-alien-gold text-xs font-mono" placeholder="Ingresar comando de sistema..." />
            </form>
          </motion.div>
        </div>

        {/* REDES SOCIALES ORDENADAS ALFABÉTICAMENTE */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4">
          {socialLinks.map((item, i) => (
            <motion.a
              key={item.name}
              href={item.comingSoon ? '#' : item.link}
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.05 }}
              whileHover={!item.comingSoon ? { scale: 1.05, borderColor: '#39FF14' } : {}}
              className={`p-6 rounded-[2rem] border flex flex-col items-center justify-center gap-4 transition-all ${
                item.comingSoon 
                ? 'bg-white/[0.01] border-white/5 opacity-20 cursor-not-allowed' 
                : 'bg-white/[0.04] border-white/10 group'
              }`}
            >
              <item.icon className={`w-6 h-6 transition-all duration-500 ${
                item.comingSoon ? 'text-gray-700' : 'text-gray-400 group-hover:text-alien-green group-hover:rotate-[360deg]'
              }`} />
              <div className="text-center">
                <p className={`text-[9px] font-nasalization uppercase tracking-widest ${
                  item.comingSoon ? 'text-gray-700' : 'text-gray-300 group-hover:text-white'
                }`}>
                  {item.name}
                </p>
                {item.comingSoon && <span className="text-[7px] text-alien-gold font-bold block mt-1 tracking-tighter">SOON</span>}
              </div>
            </motion.a>
          ))}
        </div>

      </main>
    </div>
  );
};

export default Contact;
