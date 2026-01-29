diff --git a/src/pages/Contact.tsx b/src/pages/Contact.tsx
index efe7928..a7ab42b 100644
--- a/src/pages/Contact.tsx
+++ b/src/pages/Contact.tsx
@@ -3,513 +3,170 @@ import { Button } from '@/components/ui/button';
 import { Input } from '@/components/ui/input';
 import { Textarea } from '@/components/ui/textarea';
 import { Label } from '@/components/ui/label';
-import { Send, Mail, MessageSquare, ChevronRight, Terminal, Shield, Scale, BookOpen, Users, Loader2 } from 'lucide-react';
-import { motion, AnimatePresence } from 'framer-motion';
+import { 
+  Send, Mail, ChevronRight, Terminal, Loader2, 
+  Twitter, Github, Disc, Instagram, Linkedin, 
+  MessageCircle, BookOpen, Facebook, Share2, 
+  Globe, Cpu, ShieldCheck
+} from 'lucide-react';
+import { motion } from 'framer-motion';
 import { toast } from 'sonner';
-import { supabase } from '@/integrations/supabase/client';
-import aiTorAvatar from '@/assets/ai-tor-avatar.jpg';
-import { z } from 'zod';
 
-// Form validation schema
-const contactFormSchema = z.object({
-  name: z.string().trim().min(2, "Nombre debe tener al menos 2 caracteres").max(100, "Nombre muy largo"),
-  email: z.string().trim().email("Email inv├ílido").max(255, "Email muy largo"),
-  subject: z.string().trim().min(3, "Asunto debe tener al menos 3 caracteres").max(200, "Asunto muy largo"),
-  message: z.string().trim().min(10, "Mensaje debe tener al menos 10 caracteres").max(2000, "Mensaje muy largo")
-});
-
-type ContactFormData = z.infer<typeof contactFormSchema>;
-
-// Social media icons - using official brand SVGs where possible
-const SocialIcon: React.FC<{ name: string; className?: string }> = ({ name, className = "w-5 h-5" }) => {
-  const icons: Record<string, JSX.Element> = {
-    discord: (
-      <svg viewBox="0 0 24 24" fill="currentColor" className={className}>
-        <path d="M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515a.074.074 0 0 0-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 0 0-5.487 0a12.64 12.64 0 0 0-.617-1.25a.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 0 0 .031.057a19.9 19.9 0 0 0 5.993 3.03a.078.078 0 0 0 .084-.028a14.09 14.09 0 0 0 1.226-1.994a.076.076 0 0 0-.041-.106a13.107 13.107 0 0 1-1.872-.892a.077.077 0 0 1-.008-.128a10.2 10.2 0 0 0 .372-.292a.074.074 0 0 1 .077-.01c3.928 1.793 8.18 1.793 12.062 0a.074.074 0 0 1 .078.01c.12.098.246.198.373.292a.077.077 0 0 1-.006.127a12.299 12.299 0 0 1-1.873.892a.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028a19.839 19.839 0 0 0 6.002-3.03a.077.077 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.03zM8.02 15.33c-1.183 0-2.157-1.085-2.157-2.419c0-1.333.956-2.419 2.157-2.419c1.21 0 2.176 1.096 2.157 2.42c0 1.333-.956 2.418-2.157 2.418zm7.975 0c-1.183 0-2.157-1.085-2.157-2.419c0-1.333.955-2.419 2.157-2.419c1.21 0 2.176 1.096 2.157 2.42c0 1.333-.946 2.418-2.157 2.418z"/>
-      </svg>
-    ),
-    telegram: (
-      <svg viewBox="0 0 24 24" fill="currentColor" className={className}>
-        <path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12a12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472c-.18 1.898-.962 6.502-1.36 8.627c-.168.9-.499 1.201-.82 1.23c-.696.065-1.225-.46-1.9-.902c-1.056-.693-1.653-1.124-2.678-1.8c-1.185-.78-.417-1.21.258-1.91c.177-.184 3.247-2.977 3.307-3.23c.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345c-.48.33-.913.49-1.302.48c-.428-.008-1.252-.241-1.865-.44c-.752-.245-1.349-.374-1.297-.789c.027-.216.325-.437.893-.663c3.498-1.524 5.83-2.529 6.998-3.014c3.332-1.386 4.025-1.627 4.476-1.635z"/>
-      </svg>
-    ),
-    x: (
-      <svg viewBox="0 0 24 24" fill="currentColor" className={className}>
-        <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
-      </svg>
-    ),
-    facebook: (
-      <svg viewBox="0 0 24 24" fill="currentColor" className={className}>
-        <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
-      </svg>
-    ),
-    instagram: (
-      <svg viewBox="0 0 24 24" fill="currentColor" className={className}>
-        <path d="M12 0C8.74 0 8.333.015 7.053.072 5.775.132 4.905.333 4.14.63c-.789.306-1.459.717-2.126 1.384S.935 3.35.63 4.14C.333 4.905.131 5.775.072 7.053.012 8.333 0 8.74 0 12s.015 3.667.072 4.947c.06 1.277.261 2.148.558 2.913.306.788.717 1.459 1.384 2.126.667.666 1.336 1.079 2.126 1.384.766.296 1.636.499 2.913.558C8.333 23.988 8.74 24 12 24s3.667-.015 4.947-.072c1.277-.06 2.148-.262 2.913-.558.788-.306 1.459-.718 2.126-1.384.666-.667 1.079-1.335 1.384-2.126.296-.765.499-1.636.558-2.913.06-1.28.072-1.687.072-4.947s-.015-3.667-.072-4.947c-.06-1.277-.262-2.149-.558-2.913-.306-.789-.718-1.459-1.384-2.126C21.319 1.347 20.651.935 19.86.63c-.765-.297-1.636-.499-2.913-.558C15.667.012 15.26 0 12 0zm0 2.16c3.203 0 3.585.016 4.85.071 1.17.055 1.805.249 2.227.415.562.217.96.477 1.382.896.419.42.679.819.896 1.381.164.422.36 1.057.413 2.227.057 1.266.07 1.646.07 4.85s-.015 3.585-.074 4.85c-.061 1.17-.256 1.805-.421 2.227-.224.562-.479.96-.899 1.382-.419.419-.824.679-1.38.896-.42.164-1.065.36-2.235.413-1.274.057-1.649.07-4.859.07-3.211 0-3.586-.015-4.859-.074-1.171-.061-1.816-.256-2.236-.421-.569-.224-.96-.479-1.379-.899-.421-.419-.69-.824-.9-1.38-.165-.42-.359-1.065-.42-2.235-.045-1.26-.061-1.649-.061-4.844 0-3.196.016-3.586.061-4.861.061-1.17.255-1.814.42-2.234.21-.57.479-.96.9-1.381.419-.419.81-.689 1.379-.898.42-.166 1.051-.361 2.221-.421 1.275-.045 1.65-.06 4.859-.06l.045.03zm0 3.678c-3.405 0-6.162 2.76-6.162 6.162 0 3.405 2.76 6.162 6.162 6.162 3.405 0 6.162-2.76 6.162-6.162 0-3.405-2.757-6.162-6.162-6.162zM12 16c-2.21 0-4-1.79-4-4s1.79-4 4-4 4 1.79 4 4-1.79 4-4 4zm7.846-10.405c0 .795-.646 1.44-1.44 1.44-.795 0-1.44-.646-1.44-1.44 0-.794.646-1.439 1.44-1.439.793-.001 1.44.645 1.44 1.439z"/>
-      </svg>
-    ),
-    linkedin: (
-      <svg viewBox="0 0 24 24" fill="currentColor" className={className}>
-        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
-      </svg>
-    ),
-    github: (
-      <svg viewBox="0 0 24 24" fill="currentColor" className={className}>
-        <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"/>
-      </svg>
-    ),
-    threads: (
-      <svg viewBox="0 0 24 24" fill="currentColor" className={className}>
-        <path d="M12.186 24h-.007c-3.581-.024-6.334-1.205-8.184-3.509C2.35 18.44 1.5 15.586 1.472 12.01v-.017c.03-3.579.879-6.43 2.525-8.482C5.845 1.205 8.6.024 12.18 0h.014c2.746.02 5.043.725 6.826 2.098 1.677 1.29 2.858 3.13 3.509 5.467l-2.04.569c-1.104-3.96-3.898-5.984-8.304-6.015-2.91.022-5.11.936-6.54 2.717C4.307 6.504 3.616 8.914 3.589 12c.027 3.086.718 5.496 2.057 7.164 1.43 1.783 3.631 2.698 6.54 2.717 2.623-.02 4.358-.631 5.8-2.045 1.647-1.613 1.618-3.593 1.09-4.798-.31-.71-.873-1.3-1.634-1.75-.192 1.352-.622 2.446-1.284 3.272-.886 1.102-2.14 1.704-3.73 1.79-1.202.065-2.361-.218-3.259-.801-1.063-.689-1.685-1.74-1.752-2.96-.065-1.182.408-2.256 1.332-3.023.899-.746 2.13-1.109 3.658-1.076 1.08.022 2.01.22 2.787.574-.007-.614-.092-1.163-.249-1.637-.23-.703-.62-1.204-1.105-1.507-.532-.332-1.274-.505-2.205-.514-.872.01-1.616.19-2.212.534-.529.306-.918.725-1.17 1.244l-1.87-.767c.376-.811.998-1.483 1.836-1.974.912-.534 2.024-.815 3.304-.834h.122c1.49 0 2.736.363 3.7 1.078.89.66 1.521 1.57 1.87 2.7.191.619.287 1.33.287 2.133 0 .053-.002.105-.004.158.637.386 1.192.863 1.646 1.43.7.875 1.13 1.932 1.277 3.142.294 2.42-.678 4.88-2.606 6.6-1.736 1.548-4.096 2.37-7.023 2.446zm-.118-8.864c-1.073-.036-1.91.189-2.489.675-.525.44-.78.997-.754 1.652.025.59.252 1.066.677 1.412.47.382 1.13.576 1.963.576l.238-.006c1.036-.056 1.837-.426 2.381-1.103.479-.594.777-1.418.866-2.408-.587-.24-1.249-.39-1.985-.445-.299-.022-.598-.036-.897-.036l-.001-.317z"/>
-      </svg>
-    ),
-    gitbook: (
-      <svg viewBox="0 0 24 24" fill="currentColor" className={className}>
-        <path d="M10.802 17.77a.703.703 0 1 1-.002 1.406.703.703 0 0 1 .002-1.406m11.024-4.347a.703.703 0 1 1 .001-1.406.703.703 0 0 1-.001 1.406m0-2.876a2.176 2.176 0 0 0-2.174 2.174c0 .233.039.465.115.691l-7.181 3.823a2.165 2.165 0 0 0-1.784-.937c-.829 0-1.584.475-1.95 1.216l-6.451-3.402c-.682-.358-1.192-1.48-1.138-2.502.028-.533.212-.947.493-1.107.178-.1.392-.092.62.027l.042.023c1.71.9 7.304 3.847 7.54 3.956.363.169.565.237 1.185-.057l11.564-6.014c.17-.064.368-.227.368-.474 0-.342-.354-.477-.355-.477-.658-.315-1.669-.788-2.655-1.25-2.108-.987-4.497-2.105-5.546-2.655-.906-.474-1.635-.074-1.765.006l-.252.125C7.78 6.048 1.46 9.178 1.1 9.397.457 9.789.058 10.57.006 11.539c-.08 1.537.703 3.14 1.824 3.727l6.822 3.518a2.175 2.175 0 0 0 2.15 1.862 2.177 2.177 0 0 0 2.173-2.14l7.514-4.073c.38.298.853.461 1.337.461A2.176 2.176 0 0 0 24 12.72a2.176 2.176 0 0 0-2.174-2.174"/>
-      </svg>
-    ),
-    tiktok: (
-      <svg viewBox="0 0 24 24" fill="currentColor" className={className}>
-        <path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.02-.5-.03-1-.01-1.49.18-1.9 1.12-3.72 2.58-4.96 1.66-1.44 3.98-2.13 6.15-1.72.02 1.48-.04 2.96-.04 4.44-.99-.32-2.15-.23-3.02.37-.63.41-1.11 1.04-1.36 1.75-.21.51-.15 1.07-.14 1.61.24 1.64 1.82 3.02 3.5 2.87 1.12-.01 2.19-.66 2.77-1.61.19-.33.4-.67.41-1.06.1-1.79.06-3.57.07-5.36.01-4.03-.01-8.05.02-12.07z"/>
-      </svg>
-    ),
-  };
-
-  return icons[name] || <Mail className={className} />;
-};
+// ELIMINADA LA IMPORTACI├ôN DE SUPABASE PARA EVITAR EL ERROR DE BUILD EN VERCEL
 
 const Contact: React.FC = () => {
-  // Form state
-  const [formData, setFormData] = useState<ContactFormData>({
-    name: '',
-    email: '',
-    subject: '',
-    message: ''
-  });
+  const [formData, setFormData] = useState({ name: '', email: '', subject: '', message: '' });
   const [isSubmitting, setIsSubmitting] = useState(false);
-  const [formErrors, setFormErrors] = useState<Partial<Record<keyof ContactFormData, string>>>({});
-
-  // Terminal state
   const [terminalInput, setTerminalInput] = useState('');
-  const [terminalHistory, setTerminalHistory] = useState<Array<{ type: 'user' | 'system' | 'ai'; text: string }>>([
-    { type: 'system', text: '> AlienFlowSpace Communication Terminal v2.0' },
-    { type: 'system', text: '> Establishing secure connection...' },
-    { type: 'ai', text: '┬íHola, viajero c├│smico! Soy AI Tor. ┬┐En qu├⌐ puedo ayudarte hoy?' },
-  ]);
   const [isTyping, setIsTyping] = useState(false);
+  const [terminalHistory, setTerminalHistory] = useState([
+    { type: 'ai', text: '[SISTEMA]: Enlace neuronal con AI Tor establecido.' },
+    { type: 'ai', text: '[AI-TOR]: Canal de soporte DAO listo. ┬┐En qu├⌐ puedo ayudarte?' }
+  ]);
+  
   const terminalRef = useRef<HTMLDivElement>(null);
-  const inputRef = useRef<HTMLInputElement>(null);
 
-  // Auto-scroll terminal
   useEffect(() => {
-    if (terminalRef.current) {
-      terminalRef.current.scrollTop = terminalRef.current.scrollHeight;
-    }
-  }, [terminalHistory]);
-
-  const handleFormChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
-    const { name, value } = e.target;
-    setFormData(prev => ({ ...prev, [name]: value }));
-    // Clear error when user types
-    if (formErrors[name as keyof ContactFormData]) {
-      setFormErrors(prev => ({ ...prev, [name]: undefined }));
-    }
-  };
+    if (terminalRef.current) terminalRef.current.scrollTop = terminalRef.current.scrollHeight;
+  }, [terminalHistory, isTyping]);
 
-  const handleFormSubmit = async (e: React.FormEvent) => {
+  const handleFormSubmit = (e: React.FormEvent) => {
     e.preventDefault();
-    
-    // Validate form
-    const result = contactFormSchema.safeParse(formData);
-    if (!result.success) {
-      const errors: Partial<Record<keyof ContactFormData, string>> = {};
-      result.error.errors.forEach(err => {
-        if (err.path[0]) {
-          errors[err.path[0] as keyof ContactFormData] = err.message;
-        }
-      });
-      setFormErrors(errors);
-      return;
-    }
-
     setIsSubmitting(true);
 
-    try {
-      const { error } = await supabase.functions.invoke('send-contact-email', {
-        body: formData
-      });
-
-      if (error) throw error;
+    // M├ëTODO SEGURO Y DIRECTO: Abre el gestor de correo del usuario con los datos rellenos
+    // Puedes cambiar 'tu-gmail@gmail.com' por tu direcci├│n real.
+    const mailtoLink = `mailto:alien69flow@proton.me?subject=${encodeURIComponent(formData.subject)}&body=${encodeURIComponent("De: " + formData.name + "\nEmail: " + formData.email + "\n\nMensaje:\n" + formData.message)}`;
+    
+    window.location.href = mailtoLink;
 
-      toast.success('┬íMensaje enviado!', {
-        description: 'Te responderemos lo antes posible.'
-      });
+    toast.success('PREPARANDO ENV├ìO', {
+      description: 'Se abrir├í tu gestor de correo para enviar la se├▒al.',
+      style: { background: '#0a0a0a', border: '1px solid #39FF14', color: '#39FF14' }
+    });
 
-      // Reset form
-      setFormData({ name: '', email: '', subject: '', message: '' });
-    } catch (error) {
-      console.error('Error sending message:', error);
-      toast.error('Error al enviar', {
-        description: 'Por favor intenta de nuevo o contacta por email directamente.'
-      });
-    } finally {
-      setIsSubmitting(false);
-    }
+    setTimeout(() => setIsSubmitting(false), 2000);
   };
 
   const handleTerminalSubmit = (e: React.FormEvent) => {
     e.preventDefault();
     if (!terminalInput.trim()) return;
-
     setTerminalHistory(prev => [...prev, { type: 'user', text: terminalInput }]);
-    const userMessage = terminalInput.toLowerCase();
+    const userMsg = terminalInput.toLowerCase();
     setTerminalInput('');
     setIsTyping(true);
 
     setTimeout(() => {
-      let response = '';
-      
-      if (userMessage.includes('dao') || userMessage.includes('gobernanza') || userMessage.includes('votar')) {
-        response = 'La DAO de AlienFlowSpace opera en Polygon. Puedes participar en votaciones y propuestas a trav├⌐s de Aragon. ┬┐Quieres que te env├¡e el enlace directo?';
-      } else if (userMessage.includes('nft') || userMessage.includes('colecci├│n')) {
-        response = 'Nuestras colecciones NFT est├ín disponibles en OpenSea: Alien69Flow y AlienFlowSpace. Son tu pasaporte al ecosistema. ┬┐Te interesa m├ís informaci├│n sobre los beneficios?';
-      } else if (userMessage.includes('ayuda') || userMessage.includes('soporte')) {
-        response = 'Estoy aqu├¡ para ayudarte. Puedes preguntarme sobre: DAO, NFTs, tokenomics, roadmap, partners o cualquier duda t├⌐cnica. Tambi├⌐n puedes contactar al equipo por Telegram: @AlienFlow';
-      } else if (userMessage.includes('legal') || userMessage.includes('t├⌐rminos')) {
-        response = 'Para consultas legales, revisa nuestra pol├¡tica de privacidad en /privacy-policy. Para asuntos espec├¡ficos, contacta: alien69flow@proton.me';
-      } else if (userMessage.includes('token') || userMessage.includes('afs') || userMessage.includes('a69')) {
-        response = 'Los tokens principales son $AFS (AlienFlowSpace) y $A69 (Alien69Flow), ambos en la red Polygon. ┬┐Quieres informaci├│n sobre tokenomics o c├│mo adquirirlos?';
-      } else if (userMessage.includes('hola') || userMessage.includes('hi') || userMessage.includes('hello')) {
-        response = '┬íBienvenido a bordo! ≡ƒæ╜ ┬┐Qu├⌐ te gustar├¡a saber sobre AlienFlowSpace? Puedo ayudarte con informaci├│n sobre la DAO, NFTs, tokens, roadmap y mucho m├ís.';
-      } else {
-        response = 'Interesante consulta. D├⌐jame procesar... Para asistencia detallada, te sugiero contactar directamente por Telegram (@AlienFlow) o email. ┬┐Hay algo espec├¡fico sobre el ecosistema que pueda explicarte?';
-      }
-
+      let response = "[SISTEMA]: Comando no reconocido.";
+      if (userMsg.includes('ayuda')) response = "[AI-TOR]: Comandos: status, dao, seguridad.";
+      if (userMsg.includes('status')) response = "[LOG]: Sistemas estables. Esperando comunicaci├│n.";
       setTerminalHistory(prev => [...prev, { type: 'ai', text: response }]);
       setIsTyping(false);
-    }, 1500);
+    }, 600);
   };
 
+  // REDES ORDENADAS ALFAB├ëTICAMENTE
   const socialLinks = [
-    { icon: 'discord', name: 'Discord', link: '', text: 'discord.gg/alienflow', comingSoon: true },
-    { icon: 'telegram', name: 'Telegram', link: 'https://t.me/AlienFlow', text: '@AlienFlow' },
-    { icon: 'x', name: 'X (Twitter)', link: 'https://x.com/alien69flow', text: '@alien69flow' },
-    { icon: 'facebook', name: 'Facebook', link: 'https://www.facebook.com/Alien69Flow', text: 'Alien69Flow' },
-    { icon: 'instagram', name: 'Instagram', link: 'https://www.instagram.com/alien69flow/', text: '@alien69flow' },
-    { icon: 'threads', name: 'Threads', link: 'https://threads.net/@alien69flow', text: '@alien69flow' },
-    { icon: 'linkedin', name: 'LinkedIn', link: 'https://linkedin.com/company/alienflowspace', text: 'AlienFlowSpace' },
-    { icon: 'github', name: 'GitHub', link: 'https://github.com/Alien69Flow', text: 'Alien69Flow' },
-    { icon: 'gitbook', name: 'GitBook', link: 'https://alienflowspace.gitbook.io/DAO', text: 'Documentation' },
-    { icon: 'tiktok', name: 'TikTok', link: '', text: '@alienflowspace', comingSoon: true },
+    { name: 'Discord', icon: Disc, link: '', comingSoon: true },
+    { name: 'Facebook', icon: Facebook, link: 'https://www.facebook.com/Alien69Flow', comingSoon: false },
+    { name: 'GitBook', icon: BookOpen, link: 'https://alienflowspace.gitbook.io/DAO', comingSoon: false },
+    { name: 'GitHub', icon: Github, link: 'https://github.com/Alien69Flow', comingSoon: false },
+    { name: 'Instagram', icon: Instagram, link: 'https://www.instagram.com/alien69flow/', comingSoon: false },
+    { name: 'LinkedIn', icon: Linkedin, link: 'https://linkedin.com/company/alienflowspace', comingSoon: false },
+    { name: 'Telegram', icon: MessageCircle, link: 'https://t.me/AlienFlow', comingSoon: false },
+    { name: 'Threads', icon: Share2, link: 'https://threads.net/@alien69flow', comingSoon: false },
+    { name: 'TikTok', icon: Globe, link: '', comingSoon: true },
+    { name: 'X (Twitter)', icon: Twitter, link: 'https://x.com/alien69flow', comingSoon: false },
   ];
 
   return (
-    <div className="relative flex flex-col flex-1 min-h-screen">
-      <main className="relative z-10 flex-grow container mx-auto px-4 pt-4 pb-16">
-        <div className="max-w-6xl mx-auto">
-          {/* Hero */}
-          <motion.div 
-            initial={{ opacity: 0, y: 20 }}
-            animate={{ opacity: 1, y: 0 }}
-            className="relative mb-12 py-8"
-          >
-            <h1 className="text-5xl md:text-6xl lg:text-7xl font-nasalization text-center font-extrabold relative">
-              <span className="bg-gradient-to-r from-alien-green via-alien-gold to-alien-green bg-clip-text text-transparent drop-shadow-[0_0_30px_rgba(57,255,20,0.5)]">
-                Contact
-              </span>
-            </h1>
-            <p className="text-center text-gray-400 font-exo mt-4 max-w-2xl mx-auto">
-              Centro de comunicaciones intergal├íctico. Conecta con el equipo y la comunidad.
-            </p>
-          </motion.div>
-
-          {/* Contact Form Section */}
-          <motion.div
-            initial={{ opacity: 0, y: 20 }}
-            animate={{ opacity: 1, y: 0 }}
-            transition={{ delay: 0.1 }}
-            className="mb-12"
-          >
-            <div className="bg-gradient-to-br from-alien-space-dark/95 to-black border-2 border-alien-gold/40 rounded-2xl p-6 md:p-8 shadow-[0_0_40px_rgba(240,216,130,0.1)]">
-              <h2 className="text-2xl font-nasalization text-alien-gold mb-6 flex items-center gap-3">
-                <Mail className="w-6 h-6" />
-                Env├¡anos un Mensaje
-              </h2>
-              <form onSubmit={handleFormSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-6">
+    <div className="min-h-screen bg-transparent pb-24 px-4 md:px-12 font-exo overflow-hidden">
+      <main className="max-w-7xl mx-auto pt-16">
+        <motion.div initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} className="mb-16 text-center lg:text-left">
+          <h1 className="text-5xl md:text-8xl font-nasalization bg-gradient-to-r from-alien-green via-alien-gold to-alien-green bg-clip-text text-transparent drop-shadow-[0_0_15px_rgba(57,255,20,0.2)]">
+            COMMUNICATIONS
+          </h1>
+          <div className="flex items-center justify-center lg:justify-start gap-4 mt-4 text-gray-400 font-mono text-[10px] tracking-[0.4em]">
+            <Cpu className="w-3 h-3 text-alien-gold animate-spin-slow" />
+            <span>SISTEMA DE CONTACTO DIRECTO // ALPHABETICAL_ORDER</span>
+          </div>
+        </motion.div>
+
+        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 mb-20">
+          {/* FORMULARIO */}
+          <motion.div initial={{ opacity: 0, x: -30 }} animate={{ opacity: 1, x: 0 }} className="bg-white/[0.02] backdrop-blur-3xl border border-white/10 p-8 md:p-10 rounded-[2.5rem] shadow-2xl relative group overflow-hidden">
+            <h2 className="text-xl font-nasalization text-alien-green mb-10 flex items-center gap-3 relative z-10">
+              <ShieldCheck className="w-5 h-5" /> PROTOCOLO DE ENV├ìO
+            </h2>
+            <form onSubmit={handleFormSubmit} className="space-y-6 relative z-10">
+              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                 <div className="space-y-2">
-                  <Label htmlFor="name" className="text-gray-300 font-exo">Nombre</Label>
-                  <Input
-                    id="name"
-                    name="name"
-                    value={formData.name}
-                    onChange={handleFormChange}
-                    placeholder="Tu nombre"
-                    className="bg-alien-space-dark/60 border-alien-gold/30 focus:border-alien-green text-white placeholder:text-gray-500"
-                    disabled={isSubmitting}
-                  />
-                  {formErrors.name && <p className="text-red-400 text-sm">{formErrors.name}</p>}
+                  <Label className="text-[10px] text-gray-500 uppercase ml-1 tracking-widest">Nombre</Label>
+                  <Input value={formData.name} onChange={(e) => setFormData({...formData, name: e.target.value})} required className="bg-black/60 border-white/5 focus:border-alien-green/50 h-14 rounded-2xl text-white" />
                 </div>
                 <div className="space-y-2">
-                  <Label htmlFor="email" className="text-gray-300 font-exo">Email</Label>
-                  <Input
-                    id="email"
-                    name="email"
-                    type="email"
-                    value={formData.email}
-                    onChange={handleFormChange}
-                    placeholder="tu@email.com"
-                    className="bg-alien-space-dark/60 border-alien-gold/30 focus:border-alien-green text-white placeholder:text-gray-500"
-                    disabled={isSubmitting}
-                  />
-                  {formErrors.email && <p className="text-red-400 text-sm">{formErrors.email}</p>}
-                </div>
-                <div className="md:col-span-2 space-y-2">
-                  <Label htmlFor="subject" className="text-gray-300 font-exo">Asunto</Label>
-                  <Input
-                    id="subject"
-                    name="subject"
-                    value={formData.subject}
-                    onChange={handleFormChange}
-                    placeholder="┬┐Sobre qu├⌐ quieres hablar?"
-                    className="bg-alien-space-dark/60 border-alien-gold/30 focus:border-alien-green text-white placeholder:text-gray-500"
-                    disabled={isSubmitting}
-                  />
-                  {formErrors.subject && <p className="text-red-400 text-sm">{formErrors.subject}</p>}
-                </div>
-                <div className="md:col-span-2 space-y-2">
-                  <Label htmlFor="message" className="text-gray-300 font-exo">Mensaje</Label>
-                  <Textarea
-                    id="message"
-                    name="message"
-                    value={formData.message}
-                    onChange={handleFormChange}
-                    placeholder="Escribe tu mensaje aqu├¡..."
-                    rows={5}
-                    className="bg-alien-space-dark/60 border-alien-gold/30 focus:border-alien-green text-white placeholder:text-gray-500 resize-none"
-                    disabled={isSubmitting}
-                  />
-                  {formErrors.message && <p className="text-red-400 text-sm">{formErrors.message}</p>}
-                </div>
-                <div className="md:col-span-2">
-                  <Button
-                    type="submit"
-                    disabled={isSubmitting}
-                    className="w-full md:w-auto bg-gradient-to-r from-alien-green to-alien-gold hover:from-alien-green/80 hover:to-alien-gold/80 text-alien-space-dark font-nasalization font-bold py-3 px-8"
-                  >
-                    {isSubmitting ? (
-                      <>
-                        <Loader2 className="w-4 h-4 mr-2 animate-spin" />
-                        Enviando...
-                      </>
-                    ) : (
-                      <>
-                        <Send className="w-4 h-4 mr-2" />
-                        Enviar Mensaje
-                      </>
-                    )}
-                  </Button>
-                </div>
-              </form>
-            </div>
-          </motion.div>
-
-          {/* Quick Support & Social Links */}
-          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
-            {/* Quick Support Cards */}
-            <motion.div
-              initial={{ opacity: 0, x: -20 }}
-              animate={{ opacity: 1, x: 0 }}
-              transition={{ delay: 0.2 }}
-              className="grid grid-cols-2 gap-4"
-            >
-              <a 
-                href="https://alienflowspace.gitbook.io/DAO" 
-                target="_blank" 
-                rel="noopener noreferrer"
-                className="p-4 bg-gradient-to-br from-blue-500/20 to-blue-600/10 border border-blue-500/40 rounded-xl hover:border-blue-500/60 transition-all group"
-              >
-                <div className="flex items-center gap-3 mb-2">
-                  <BookOpen className="w-5 h-5 text-blue-400" />
-                  <span className="text-blue-400 font-nasalization font-semibold">Documentaci├│n</span>
-                </div>
-                <p className="text-gray-400 text-sm font-exo">Gu├¡as t├⌐cnicas y roadmap</p>
-              </a>
-              <a 
-                href="/privacy-policy"
-                className="p-4 bg-gradient-to-br from-purple-500/20 to-purple-600/10 border border-purple-500/40 rounded-xl hover:border-purple-500/60 transition-all group"
-              >
-                <div className="flex items-center gap-3 mb-2">
-                  <Scale className="w-5 h-5 text-purple-400" />
-                  <span className="text-purple-400 font-nasalization font-semibold">Legal</span>
-                </div>
-                <p className="text-gray-400 text-sm font-exo">Pol├¡tica de privacidad</p>
-              </a>
-              <a 
-                href="mailto:alien69flow@proton.me"
-                className="p-4 bg-gradient-to-br from-green-500/20 to-green-600/10 border border-green-500/40 rounded-xl hover:border-green-500/60 transition-all group"
-              >
-                <div className="flex items-center gap-3 mb-2">
-                  <Shield className="w-5 h-5 text-green-400" />
-                  <span className="text-green-400 font-nasalization font-semibold">Soporte T├⌐cnico</span>
+                  <Label className="text-[10px] text-gray-500 uppercase ml-1 tracking-widest">Email</Label>
+                  <Input type="email" value={formData.email} onChange={(e) => setFormData({...formData, email: e.target.value})} required className="bg-black/60 border-white/5 focus:border-alien-green/50 h-14 rounded-2xl text-white" />
                 </div>
-                <p className="text-gray-400 text-sm font-exo">alien69flow@proton.me</p>
-              </a>
-              <a 
-                href="https://t.me/AlienFlow"
-                target="_blank"
-                rel="noopener noreferrer"
-                className="p-4 bg-gradient-to-br from-cyan-500/20 to-cyan-600/10 border border-cyan-500/40 rounded-xl hover:border-cyan-500/60 transition-all group"
-              >
-                <div className="flex items-center gap-3 mb-2">
-                  <Users className="w-5 h-5 text-cyan-400" />
-                  <span className="text-cyan-400 font-nasalization font-semibold">Comunidad</span>
-                </div>
-                <p className="text-gray-400 text-sm font-exo">Telegram @AlienFlow</p>
-              </a>
-            </motion.div>
-
-            {/* Social Links Grid with Official Icons */}
-            <motion.div
-              initial={{ opacity: 0, x: 20 }}
-              animate={{ opacity: 1, x: 0 }}
-              transition={{ delay: 0.3 }}
-              className="bg-alien-space-dark/80 border border-alien-gold/30 rounded-xl p-6"
-            >
-              <h3 className="text-alien-gold font-nasalization text-lg mb-4 flex items-center gap-2">
-                <MessageSquare className="w-5 h-5" />
-                Redes Sociales
-              </h3>
-              <div className="grid grid-cols-2 gap-3">
-                {socialLinks.map((social, idx) => (
-                  <motion.div
-                    key={idx}
-                    initial={{ opacity: 0, scale: 0.9 }}
-                    animate={{ opacity: 1, scale: 1 }}
-                    transition={{ delay: 0.4 + idx * 0.05 }}
-                  >
-                    {social.comingSoon ? (
-                      <div className="flex items-center gap-3 p-3 bg-alien-space-light/20 rounded-lg border border-gray-700/50 opacity-60">
-                        <SocialIcon name={social.icon} className="w-5 h-5 text-gray-500" />
-                        <div className="flex-1 min-w-0">
-                          <p className="text-gray-500 font-exo text-sm truncate">{social.name}</p>
-                          <span className="text-[10px] text-orange-400">Coming Soon</span>
-                        </div>
-                      </div>
-                    ) : (
-                      <a
-                        href={social.link}
-                        target={social.link.startsWith('http') ? '_blank' : undefined}
-                        rel={social.link.startsWith('http') ? 'noopener noreferrer' : undefined}
-                        className="flex items-center gap-3 p-3 bg-alien-space-light/20 rounded-lg border border-alien-gold/20 hover:border-alien-green/40 hover:bg-alien-space-light/30 transition-all group"
-                      >
-                        <SocialIcon name={social.icon} className="w-5 h-5 text-alien-gold group-hover:text-alien-green transition-colors" />
-                        <div className="flex-1 min-w-0">
-                          <p className="text-gray-300 font-exo text-sm truncate group-hover:text-alien-green transition-colors">
-                            {social.name}
-                          </p>
-                        </div>
-                      </a>
-                    )}
-                  </motion.div>
-                ))}
-              </div>
-            </motion.div>
-          </div>
-
-          {/* Space Terminal - At the end */}
-          <motion.div
-            initial={{ opacity: 0, y: 20 }}
-            animate={{ opacity: 1, y: 0 }}
-            transition={{ delay: 0.4 }}
-            className="bg-gradient-to-br from-alien-space-dark/95 to-black border-2 border-alien-green/40 rounded-2xl overflow-hidden shadow-[0_0_40px_rgba(57,255,20,0.15)]"
-          >
-            {/* Terminal Header */}
-            <div className="bg-gradient-to-r from-alien-green/20 to-alien-gold/10 border-b border-alien-green/30 px-4 py-3 flex items-center gap-3">
-              <div className="flex gap-2">
-                <div className="w-3 h-3 rounded-full bg-red-500/80" />
-                <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
-                <div className="w-3 h-3 rounded-full bg-green-500/80" />
               </div>
-              <div className="flex items-center gap-2 flex-1">
-                <Terminal className="w-4 h-4 text-alien-green" />
-                <span className="text-alien-green font-mono text-sm">Space Terminal - Asistente AI</span>
+              <div className="space-y-2">
+                <Label className="text-[10px] text-gray-500 uppercase ml-1 tracking-widest">Asunto</Label>
+                <Input value={formData.subject} onChange={(e) => setFormData({...formData, subject: e.target.value})} required className="bg-black/60 border-white/5 focus:border-alien-green/50 h-14 rounded-2xl text-white" />
               </div>
-              <div className="w-8 h-8 rounded-full overflow-hidden border border-alien-gold/50">
-                <img src={aiTorAvatar} alt="AI Tor" className="w-full h-full object-cover" />
+              <div className="space-y-2">
+                <Label className="text-[10px] text-gray-500 uppercase ml-1 tracking-widest">Mensaje</Label>
+                <Textarea value={formData.message} onChange={(e) => setFormData({...formData, message: e.target.value})} required rows={5} className="bg-black/60 border-white/5 focus:border-alien-green/50 rounded-2xl resize-none text-white" />
               </div>
-            </div>
+              <Button type="submit" disabled={isSubmitting} className="w-full bg-gradient-to-r from-alien-green to-alien-gold text-black font-black h-16 rounded-2xl hover:brightness-125 transition-all">
+                {isSubmitting ? <Loader2 className="animate-spin" /> : 'DESPLEGAR MENSAJE DIRECTO'}
+              </Button>
+            </form>
+          </motion.div>
 
-            {/* Terminal Body */}
-            <div 
-              ref={terminalRef}
-              className="h-[300px] overflow-y-auto p-4 font-mono text-sm space-y-2 scrollbar-thin scrollbar-thumb-alien-green/30 scrollbar-track-transparent"
-              onClick={() => inputRef.current?.focus()}
-            >
-              <AnimatePresence>
-                {terminalHistory.map((entry, idx) => (
-                  <motion.div
-                    key={idx}
-                    initial={{ opacity: 0, y: 10 }}
-                    animate={{ opacity: 1, y: 0 }}
-                    className={`${
-                      entry.type === 'user' 
-                        ? 'text-alien-gold' 
-                        : entry.type === 'system' 
-                        ? 'text-gray-500' 
-                        : 'text-alien-green'
-                    }`}
-                  >
-                    {entry.type === 'user' && <span className="text-gray-500">{'>'} </span>}
-                    {entry.type === 'ai' && <span className="text-purple-400">[AI Tor] </span>}
-                    {entry.text}
-                  </motion.div>
-                ))}
-              </AnimatePresence>
-              
-              {isTyping && (
-                <motion.div
-                  initial={{ opacity: 0 }}
-                  animate={{ opacity: 1 }}
-                  className="text-alien-green flex items-center gap-2"
-                >
-                  <span className="text-purple-400">[AI Tor]</span>
-                  <span className="flex gap-1">
-                    <span className="w-2 h-2 bg-alien-green rounded-full animate-bounce" style={{ animationDelay: '0s' }} />
-                    <span className="w-2 h-2 bg-alien-green rounded-full animate-bounce" style={{ animationDelay: '0.15s' }} />
-                    <span className="w-2 h-2 bg-alien-green rounded-full animate-bounce" style={{ animationDelay: '0.3s' }} />
-                  </span>
-                </motion.div>
-              )}
+          {/* TERMINAL */}
+          <motion.div initial={{ opacity: 0, x: 30 }} animate={{ opacity: 1, x: 0 }} className="flex flex-col bg-black/80 border-2 border-white/5 rounded-[2.5rem] overflow-hidden group">
+            <div className="bg-white/5 p-5 border-b border-white/5 flex justify-between items-center">
+              <span className="text-[10px] font-mono text-alien-gold flex items-center gap-3 tracking-[0.2em]">
+                <Terminal className="w-4 h-4" /> AI-TOR CONSOLE v2.0
+              </span>
+              <div className="w-2 h-2 rounded-full bg-alien-green animate-pulse" />
             </div>
-
-            {/* Terminal Input */}
-            <form onSubmit={handleTerminalSubmit} className="border-t border-alien-green/30 p-4">
-              <div className="flex items-center gap-2">
-                <ChevronRight className="w-5 h-5 text-alien-green" />
-                <input
-                  ref={inputRef}
-                  type="text"
-                  value={terminalInput}
-                  onChange={(e) => setTerminalInput(e.target.value)}
-                  placeholder="Escribe tu mensaje..."
-                  className="flex-1 bg-transparent border-none outline-none text-alien-gold font-mono placeholder:text-gray-600"
-                  disabled={isTyping}
-                />
-                <Button
-                  type="submit"
-                  size="sm"
-                  disabled={isTyping || !terminalInput.trim()}
-                  className="bg-alien-green/20 hover:bg-alien-green/30 text-alien-green border border-alien-green/50"
-                >
-                  <Send className="w-4 h-4" />
-                </Button>
-              </div>
+            <div ref={terminalRef} className="flex-1 p-8 font-mono text-[11px] space-y-4 overflow-y-auto max-h-[450px] scrollbar-hide">
+              {terminalHistory.map((m, i) => (
+                <div key={i} className={m.type === 'ai' ? 'text-alien-green' : 'text-alien-gold/70'}>
+                  <span className="opacity-40">{m.type === 'ai' ? '>>>' : 'USR>'}</span> {m.text}
+                </div>
+              ))}
+              {isTyping && <div className="text-alien-green animate-pulse">_Procesando...</div>}
+            </div>
+            <form onSubmit={handleTerminalSubmit} className="p-6 bg-white/5 flex gap-4 border-t border-white/5">
+              <ChevronRight className="text-alien-gold w-5 h-5" />
+              <input value={terminalInput} onChange={(e) => setTerminalInput(e.target.value)} className="bg-transparent border-none outline-none flex-1 text-alien-gold text-xs font-mono" placeholder="Comando..." />
             </form>
           </motion.div>
         </div>
+
+        {/* REDES SOCIALES */}
+        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4">
+          {socialLinks.map((item, i) => (
+            <motion.a
+              key={item.name}
+              href={item.comingSoon ? '#' : item.link}
+              initial={{ opacity: 0, y: 15 }}
+              animate={{ opacity: 1, y: 0 }}
+              transition={{ delay: i * 0.05 }}
+              className={`p-6 rounded-[2rem] border flex flex-col items-center justify-center gap-4 transition-all ${
+                item.comingSoon ? 'opacity-20 cursor-not-allowed border-white/5' : 'bg-white/[0.04] border-white/10 group hover:border-alien-green'
+              }`}
+            >
+              <item.icon className={`w-6 h-6 ${item.comingSoon ? 'text-gray-700' : 'text-gray-400 group-hover:text-alien-green group-hover:rotate-[360deg]'}`} />
+              <p className="text-[9px] font-nasalization uppercase tracking-widest text-gray-300">{item.name}</p>
+            </motion.a>
+          ))}
+        </div>
       </main>
     </div>
   );
 };
 
-export default Contact;
\ No newline at end of file
+export default Contact;
