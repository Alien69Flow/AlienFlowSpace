diff --git a/src/pages/Academy.tsx b/src/pages/Academy.tsx
index a5d0c7d..fdcfe14 100644
--- a/src/pages/Academy.tsx
+++ b/src/pages/Academy.tsx
@@ -1,386 +1,238 @@
-import React from 'react';
-import { GraduationCap, BookOpen, Video, Users, Award, Sparkles, Leaf, Brain, Coins, ShoppingCart, Heart, Lightbulb, ExternalLink } from 'lucide-react';
+import React, { useState } from 'react';
+import { motion, AnimatePresence } from 'framer-motion';
+import { 
+  ShieldCheck, Coins, Leaf, Brain, GraduationCap, 
+  Zap, ExternalLink, ChevronDown, Award, CheckCircle2 
+} from 'lucide-react';
 import { Button } from '@/components/ui/button';
-import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
-const CourseCard = ({
-  title,
-  description,
-  icon,
-  modules,
-  color
-}: {
-  title: string;
-  description: string;
-  icon: React.ReactNode;
-  modules: Array<{
-    name: string;
-    topics: string[];
-  }>;
-  color: string;
-}) => <Card className="bg-alien-space-dark/80 backdrop-blur-lg border-alien-gold/30 hover:border-alien-gold/60 transition-all duration-300 hover:transform hover:scale-[1.02] hover:shadow-2xl hover:shadow-alien-gold/10 group relative">
-    <div className={`h-1 ${color} rounded-t-lg`}></div>
-    <CardHeader className="pb-4">
-      <div className="flex items-start justify-between mb-4">
-        <div className="p-3 bg-alien-space-light/60 rounded-xl group-hover:bg-alien-gold/20 transition-colors duration-300 border border-alien-gold/20">
-          {icon}
-        </div>
-        <div className="flex space-x-2">
-          <span className="px-3 py-1 text-xs bg-alien-space-light/60 rounded-full text-alien-green border border-alien-green/30 font-medium">
-            {modules.length} modules
-          </span>
-        </div>
-      </div>
-      <CardTitle className="text-xl font-semibold font-nasalization group-hover:text-alien-gold-light transition-colors text-alien-green">
-        {title}
-      </CardTitle>
-      <CardDescription className="text-gray-300 text-sm leading-relaxed">
-        {description}
-      </CardDescription>
-    </CardHeader>
-    
-    <CardContent className="pt-0">
-      <div className="space-y-3 mb-6">
-        {modules.map((module, index) => <div key={index} className="bg-alien-space-light/40 rounded-lg p-3 border border-alien-gold/10 hover:border-alien-gold/20 transition-colors">
-            <h4 className="text-alien-gold text-sm font-semibold mb-2 flex items-center">
-              <span className="w-6 h-6 bg-alien-gold/20 rounded-full flex items-center justify-center text-xs mr-2 border border-alien-gold/30">
-                {index + 1}
-              </span>
-              {module.name}
-            </h4>
-            <ul className="text-xs text-gray-300 space-y-1 ml-8">
-              {module.topics.map((topic, topicIndex) => <li key={topicIndex} className="flex items-start leading-relaxed">
-                  <span className="text-alien-green mr-2 mt-1">┬╖</span>
-                  <span className="flex-1">{topic}</span>
-                </li>)}
-            </ul>
-          </div>)}
-      </div>
-      
-      <Button variant="outline" className="w-full border-alien-gold/40 text-alien-gold hover:bg-alien-gold/15 hover:border-alien-gold/60 transition-all duration-300 font-medium">
-        <BookOpen className="w-4 h-4 mr-2" />
-        Explore Course
-      </Button>
-    </CardContent>
-  </Card>;
-const PartnerCard = ({
-  name,
-  url,
-  logoUrl
-}: {
-  name: string;
-  url: string;
-  logoUrl?: string;
-}) => <a href={url} target="_blank" rel="noopener noreferrer" className="bg-alien-space-dark/70 backdrop-blur-md rounded-xl p-4 border border-alien-gold/20 hover:border-alien-gold/50 transition-all duration-300 hover:transform hover:scale-105 group flex items-center justify-center relative">
-    <div className="absolute inset-0 bg-gradient-to-br from-alien-gold/5 to-alien-green/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
-    <div className="text-center relative z-10">
-      {logoUrl ? <div className="w-12 h-12 mx-auto mb-2 flex items-center justify-center">
-          <img src={logoUrl} alt={`${name} logo`} className="max-w-full max-h-full object-contain group-hover:scale-110 transition-transform duration-300" onError={e => {
-        const target = e.target as HTMLImageElement;
-        target.style.display = 'none';
-        target.nextElementSibling?.classList.remove('hidden');
-      }} />
-          <div className="w-10 h-10 bg-alien-gold/20 rounded-lg items-center justify-center border border-alien-gold/30 hidden">
-            <span className="text-alien-gold font-bold text-sm">{name.charAt(0)}</span>
-          </div>
-        </div> : <div className="w-12 h-12 mx-auto mb-2 bg-alien-gold/20 rounded-lg flex items-center justify-center border border-alien-gold/30">
-          <span className="text-alien-gold font-bold text-lg">{name.charAt(0)}</span>
-        </div>}
-      <h3 className="text-alien-gold font-semibold text-xs group-hover:text-alien-gold-light transition-colors font-[Exo] mb-1">
-        {name}
-      </h3>
-      <ExternalLink className="w-3 h-3 text-alien-green mx-auto opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
-    </div>
-  </a>;
-const Academy: React.FC = () => {
-  const courses = [{
+
+// --- DATA DEFINITIVA: 3 M├ôDULOS CON 4 BLOQUES CADA UNO ---
+const academyModules = [
+  {
+    id: 1,
     title: "Abundance & Freedom",
+    tag: "DATA_FLOW",
     description: "Master the fundamentals of digital economy, blockchain and sustainable financial systems to create abundance and financial freedom.",
     icon: <Coins className="h-6 w-6 text-alien-gold" />,
-    color: "bg-gradient-to-r from-green-400 to-green-600",
-    modules: [{
-      name: "EcoFinTech",
-      topics: ["Circularity + ESG Criteria + Efficiency & Sustainability + Growth & Development", "System Dynamics (Complex / Dynamic) [Critical Degrowth | Theories]", "Digitalization + Money & Payment Systems + Iterative Design Methodologies", "Economy & Finance - General Macro & Particular Micro + Game Theory"]
-    }, {
-      name: "Electronic Commerce",
-      topics: ["Fundamental characteristics", "Foundations and infrastructure", "Practical advantages and uses", "Forms and types of implementation"]
-    }, {
-      name: "Blockchain & Cryptography",
-      topics: ["Digital Assets (Crypto + Tokens, Bitcoin, Altcoins, Stablecoins)", "Digital Properties (NFTs + Smart Contracts)", "Applications & Decentralized Finance (DeFi)"]
-    }]
-  }, {
+    modules: [
+      { name: "EcoFinTech & Dynamics", topics: ["Circularity + ESG Criteria", "System Dynamics", "Macro & Micro Economy", "Game Theory"] },
+      { name: "Electronic Commerce", topics: ["Foundations & Infrastructure", "Practical Advantages", "Implementation Types", "E-commerce Features"] },
+      { name: "Blockchain & Cryptography", topics: ["Digital Assets (BTC, NFTs)", "DeFi & ReFi Deep Dive", "Smart Contracts", "DePIN & IPFS"] },
+      { name: "Revenue Architecture", topics: ["Automated Systems", "Scalability Frameworks", "Digital Properties", "Market Efficiency"] }
+    ]
+  },
+  {
+    id: 2,
+    title: "Harmony & Transcendence",
+    tag: "FLOW_SPACE",
+    description: "Explore Tesla equations, magnetic fields, and unified physics. Understanding gravitational force unification through neutrinos.",
+    icon: <Brain className="h-6 w-6 text-alien-gold" />,
+    modules: [
+      { name: "Tesla & Unified Physics", topics: ["Tesla Equations & Scalar Waves", "Magnetic Field Flux", "Neutrino Unification Theory", "Gravitational Synergy"] },
+      { name: "Consciousness & Perception", topics: ["Attention & Concentration", "Subconscious Mapping", "Reality Tunnels", "Neuro-Acoustics"] },
+      { name: "Yoga & Sadhana", topics: ["Advanced Meditation", "Integral Yoga", "Sadhana Practice", "Bio-Homeostatic Balance"] },
+      { name: "Alchemy & TAO", topics: ["Trivium & Quadrivium", "Hermeneutics", "Spiritual Illumination", "Wu Wei & Flow State"] }
+    ]
+  },
+  {
+    id: 3,
     title: "Self-Management & Sustainability",
+    tag: "HEALTH_FLOW",
     description: "Learn to manage your life sustainably by integrating ecology, permaculture and conscious management of energy, space and time.",
     icon: <Leaf className="h-6 w-6 text-alien-gold" />,
-    color: "bg-gradient-to-r from-emerald-400 to-emerald-600",
-    modules: [{
-      name: "Ecological Foundations",
-      topics: ["Ecosystem understanding and biodiversity principles", "Climate change adaptation and mitigation strategies", "Natural resource management and conservation", "Environmental impact assessment and reduction"]
-    }, {
-      name: "Permaculture Design",
-      topics: ["Permaculture ethics and principles", "Site analysis and design methodology", "Food forest creation and management", "Water harvesting and management systems", "Soil regeneration and composting techniques"]
-    }, {
-      name: "Conscious Living",
-      topics: ["Mindful consumption and zero-waste practices", "Energy efficiency in daily life", "Sustainable transportation choices", "Community building and local resilience"]
-    }, {
-      name: "Time & Space Management",
-      topics: ["Productivity systems aligned with natural rhythms", "Sacred space creation and maintenance", "Work-life integration practices", "Digital minimalism and tech wellness"]
-    }]
-  }, {
-    title: "Harmony & Transcendence",
-    description: "Explore the deepest dimensions of being through consciousness, meditation, philosophical alchemy and sacred nutrition.",
-    icon: <Brain className="h-6 w-6 text-alien-gold" />,
-    color: "bg-gradient-to-r from-purple-400 to-purple-600",
-    modules: [{
-      name: "Consciousness & Energy",
-      topics: ["Attention & Concentration - Attitude | Aptitude", "Consciousness (Unconsciousness | Preconsciousness | Subconscious)", "Equanimity | Fullness - Focus | Perception", "Determination | Intention | Purpose | Meaning"]
-    }, {
-      name: "Meditations & Yoga",
-      topics: ["Advanced meditation techniques", "Integral yoga practice", "Body-mind-spirit integration"]
-    }, {
-      name: "Alchemy & Philosophy",
-      topics: ["Alchemy: Self-transcendence | Transcendence", "Liberal Arts (Trivium + Quadrivium)", "Hermeneutics | Heuristics", "Philosophy: Spiritual and Intellectual Illumination"]
-    }]
-  }];
-  const partners = [{
-    name: "Academia",
-    url: "https://www.academia.edu/",
-    logoUrl: "/lovable-uploads/Academy/Academia.svg"
-  }, {
-    name: "Alchemy",
-    url: "https://www.alchemy.com/",
-    logoUrl: "/lovable-uploads/Academy/Alchemy.png"
-  }, {
-    name: "Bitcoin",
-    url: "https://bitcoin.org",
-    logoUrl: "https://upload.wikimedia.org/wikipedia/commons/4/46/Bitcoin.svg"
-  }, {
-    name: "AulaFacil",
-    url: "https://www.aulafacil.com/",
-    logoUrl: "https://www.aulafacil.com/favicon.ico"
-  }, {
-    name: "Climate Reanalyzer",
-    url: "https://climatereanalyzer.org/",
-    logoUrl: "/lovable-uploads/Academy/ClimateReanalyzer.svg"
-  }, {
-    name: "Coursera",
-    url: "https://www.coursera.org/",
-    logoUrl: "https://upload.wikimedia.org/wikipedia/commons/9/97/Coursera-Logo_600x600.svg"
-  }, {
-    name: "Cursa",
-    url: "https://cursa.app/",
-    logoUrl: "/lovable-uploads/Academy/Cursa.webp"
-  }, {
-    name: "edX",
-    url: "https://www.edx.org/",
-    logoUrl: "/lovable-uploads/Academy/edX.png"
-  }, {
-    name: "ESA",
-    url: "https://www.esa.int/",
-    logoUrl: "/lovable-uploads/Academy/ESA.svg"
-  }, {
-    name: "Explore",
-    url: "https://explore.org/",
-    logoUrl: "/lovable-uploads/Academy/Explore.png"
-  }, {
-    name: "FutureLearn",
-    url: "https://www.futurelearn.com/",
-    logoUrl: "https://www.futurelearn.com/favicon.ico"
-  }, {
-    name: "Google for Education",
-    url: "https://edu.google.com/",
-    logoUrl: "https://upload.wikimedia.org/wikipedia/commons/2/2f/Google_2015_logo.svg"
-  }, {
-    name: "Google Growth",
-    url: "https://grow.google/",
-    logoUrl: "/lovable-uploads/Academy/GrowGoogle.png"
-  }, {
-        name: "HackerRank",
-    url: "https://www.hackerrank.com/",
-    logoUrl: "/lovable-uploads/Academy/HackerRank.svg"
-  }, {
-    name: "HackMD",
-    url: "https://hackmd.io/",
-    logoUrl: "/lovable-uploads/Academy/HackMD.svg"
-  }, {
-    name: "Hotmart",
-    url: "https://www.hotmart.com/",
-    logoUrl: "/lovable-uploads/Academy/Hotmart.png"
-  }, {
-    name: "KAGRA",
-    url: "https://khanacademy.org/",
-    logoUrl: "https://cdn.kastatic.org/images/khan-logo-dark-background.png"
-  }, {
-    name: "Khan Academy",
-    url: "https://gwcenter.icrr.u-tokyo.ac.jp/",
-    logoUrl: "/lovable-uploads/Academy/KAGRA.svg"
-  }, {
-    name: "LIGO",
-    url: "https://www.ligo.caltech.edu/",
-    logoUrl: "/lovable-uploads/Academy/LIGO.png"
-  }, {
-    name: "LSC-Canfranc",
-    url: "https://lsc-canfranc.es/",
-    logoUrl: "/lovable-uploads/Academy/LSC.png"
-  }, {
-     name: "Map of the Universe",
-    url: "https://mapoftheuniverse.net/",
-    logoUrl: "/lovable-uploads/Academy/Universe.jpg"
-  }, {
-    name: "MasterClass",
-    url: "https://masterclass.com/",
-    logoUrl: "/lovable-uploads/Academy/MasterClass.jpeg"
-  }, {
-    name: "MOOC",
-    url: "https://mooc.org/",
-    logoUrl: "/lovable-uploads/Academy/Mooc.png"
-  }, {
-    name: "NASA Eyes",
-    url: "https://eyes.nasa.gov/apps/solar-system/#/home",
-    logoUrl: "https://upload.wikimedia.org/wikipedia/commons/e/e5/NASA_logo.svg"
-  }, {
-    name: "OEGlobal",
-    url: "https://oeglobal.org/",
-    logoUrl: "/lovable-uploads/OEGlobalLogo.jpeg"
-  }, {
-    name: "OpenUpEd",
-    url: "https://openuped.eu/",
-    logoUrl: "/lovable-uploads/OpenUpEdLogo.jpeg"
-  }, {
-    name: "Skillshare",
-    url: "https://www.skillshare.com/",
-    logoUrl: "/lovable-uploads/SkillShareLogo.jpeg"
-  }, {
-    name: "Udacity",
-    url: "https://www.udacity.com/",
-    logoUrl: "/lovable-uploads/UdacityLogo.svg"
-  }, {
-    name: "Udemy",
-    url: "https://www.udemy.com/",
-    logoUrl: "https://upload.wikimedia.org/wikipedia/commons/e/e3/Udemy_logo.svg"
-  }, {
-    name: "UNED",
-    url: "https://iedra.uned.es/",
-    logoUrl: "/lovable-uploads/Academy/UNED.png"
-  }, {
-    name: "UNESCO",
-    url: "https://www.unesco.org/",
-    logoUrl: "/lovable-uploads/UnescoLogo.svg"
-  }, {
-    name: "Unity Learn",
-    url: "https://learn.unity.com/",
-    logoUrl: "/lovable-uploads/UnityLearnLogo.svg"
-  }, {
-    name: "Unreal Engine",
-    url: "https://www.unrealengine.com/en-US/learn",
-    logoUrl: "https://upload.wikimedia.org/wikipedia/commons/d/da/Unreal_Engine_Logo.svg"
-  }, {
-    name: "UNSSC",
-    url: "https://unssc.org/",
-    logoUrl: "/lovable-uploads/UNSSCLogo.png"
-  }, {
-    name: "Virgo-GW",
-    url: "https://www.virgo-gw.eu/",
-    logoUrl: "/lovable-uploads/VirgoLogo.svg"
-  }];
-  return <div className="relative flex flex-col flex-1">
-      {/* Academy Background Image */}
-      <main className="relative z-10 flex-grow container mx-auto px-4 pt-20 pb-16">
-        <div className="max-w-6xl mx-auto">
-          <div className="text-center mb-12">
-            <div className="inline-flex items-center justify-center w-20 h-20 bg-alien-gold/20 rounded-full mb-6 border-2 border-alien-gold/40 backdrop-blur-md">
-              <img src="/lovable-uploads/AcademyLogo.png" alt="Academy Official Logo" className="h-14 w-14 object-contain" />
-            </div>
-            <h1 className="text-4xl md:text-5xl font-bold mb-6 font-nasalization text-glow text-alien-green">
-              Academy
-            </h1>
-            <p className="max-w-4xl mx-auto font-[Exo] leading-relaxed text-[alien-gold-dark] text-alien-gold font-medium">
-              Acquire complete attention capabilities to connect, discover and expand knowledge and skills. 
-              This helps you evolve and propels you towards an optimal experience with fullness of flow, 
-              as well as increase the benefits of your quality of life and more sustainable gains, with complete wellbeing.
-            </p>
-          </div>
+    modules: [
+      { name: "Ecological Foundations", topics: ["Biodiversity Principles", "Climate Adaptation", "Resource Management", "Mitigation Strategies"] },
+      { name: "Permaculture Design", topics: ["Syntropic Farming", "Water Harvesting", "Soil Regeneration", "Food Forest Design"] },
+      { name: "Conscious Living", topics: ["Daily Mudras", "Prana Breathing", "Energy Channels", "Zero-Waste & Nutrition"] },
+      { name: "Time & Space Management", topics: ["Circadian Rhythms", "Feng Shui", "Digital Minimalism", "Sacred Space Design"] }
+    ]
+  }
+];
 
-          {/* Featured Program */}
-          <Card className="mb-16 bg-alien-space-dark/70 backdrop-blur-lg border-alien-gold/40 overflow-hidden">
-            <div className="grid grid-cols-1 md:grid-cols-2">
-              <CardContent className="p-8 md:p-12">
-                <h2 className="text-3xl font-bold mb-4 font-nasalization text-alien-green">
-                  Master Certification Program
-                </h2>
-                <CardDescription className="text-gray-300 mb-6 font-[Exo] text-base leading-relaxed">
-                  Become a certified Explorer and Navigator of the ╬ölie╧ÇFl╬ªw $pacΓé¼ and unlock exclusive opportunities in our expanding cosmic ecosystem.
-                </CardDescription>
-                <div className="space-y-4 mb-8">
-                  {["3 integrated main courses", "8 specialized modules", "Bootcamps with live mentoring sessions", "On-chain NFT credential"].map((feature, index) => <div key={index} className="flex items-center">
-                      <div className="w-2 h-2 bg-alien-green rounded-full mr-3 flex-shrink-0"></div>
-                      <p className="text-alien-green font-medium">{feature}</p>
-                    </div>)}
-                </div>
-                <Button className="hover:bg-alien-gold-light text-alien-space-dark font-[Exo] font-semibold bg-alien-gold text-[alien-gold-dark] text-alien-green text-center">
-                  <Users className="w-4 h-4 mr-2" />
-                  Join Waitlist
-                </Button>
-              </CardContent>
-              <div className="bg-gradient-to-br from-alien-green/20 via-alien-gold/20 to-purple-500/20 p-8 flex items-center justify-center">
-                <div className="relative">
-                  <GraduationCap className="h-24 w-24 text-alien-gold" />
-                  <div className="absolute -top-2 -right-2 w-6 h-6 bg-alien-green rounded-full flex items-center justify-center">
-                    <Sparkles className="w-3 h-3 text-alien-space-dark" />
-                  </div>
+// --- PARTNERS POR CATEGOR├ìAS (ALFAB├ëTICO) ---
+const partnerCategories = [
+  { 
+    label: 'ACADEMY PARTNERS', 
+    partners: [
+      { name: "Academia", url: "https://www.academia.edu/", logo: "Academia.svg" }, 
+      { name: "Coursera", url: "https://www.coursera.org/", logo: "Coursera.svg" }, 
+      { name: "UNESCO", url: "https://www.unesco.org/", logo: "UnescoLogo.svg" }
+    ] 
+  },
+  { 
+    label: 'DATAFLOW', 
+    partners: [
+      { name: "Alchemy", url: "https://www.alchemy.com/", logo: "Alchemy.png" }, 
+      { name: "Bitcoin", url: "https://bitcoin.org", logo: "Bitcoin.svg" }
+    ] 
+  },
+  { 
+    label: 'ECOFLOW', 
+    partners: [
+      { name: "Ecology", url: "https://www.ecology.org/", logo: "Ecology.png" }
+    ] 
+  },
+  { 
+    label: 'GAMEFLOW', 
+    partners: [
+      { name: "GameTheory", url: "https://plato.stanford.edu/entries/game-theory/", logo: "GameTheory.png" }
+    ] 
+  },
+  { 
+    label: 'HEALTHFLOW', 
+    partners: [
+      { name: "Yazio", url: "https://www.yazio.com/", logo: "Yazio.png" }
+    ] 
+  },
+  { 
+    label: 'SPACEFLOW', 
+    partners: [
+      { name: "ESA", url: "https://www.esa.int/", logo: "ESA.svg" }, 
+      { name: "NASA Eyes", url: "https://eyes.nasa.gov/", logo: "NASA_logo.svg" }, 
+      { name: "Virgo", url: "https://www.virgo-gw.eu/", logo: "VirgoLogo.svg" }
+    ] 
+  }
+];
+
+const Academy = () => {
+  const [expandedModule, setExpandedModule] = useState<number | null>(null);
+
+  return (
+    <div className="min-h-screen bg-transparent text-white font-exo pb-32">
+      
+      {/* 1. HERO ORIGINAL (RESTAURADO) */}
+      <header className="pt-16 pb-20 text-center px-4">
+        <motion.div initial={{ scale: 0 }} animate={{ scale: 1 }} className="w-24 h-24 mx-auto mb-8 relative">
+          <div className="absolute inset-0 bg-alien-gold/10 blur-3xl rounded-full" />
+          <img src="/lovable-uploads/AcademyLogo.png" alt="Logo" className="w-full h-full object-contain relative z-10 drop-shadow-[0_0_20px_rgba(212,175,55,0.5)]" />
+        </motion.div>
+        
+        <h1 className="text-6xl md:text-8xl font-nasalization mb-8 tracking-widest text-[#39FF14] drop-shadow-[0_0_15px_rgba(212,175,55,0.7)] uppercase">
+          Academy
+        </h1>
+        
+        <p className="max-w-3xl mx-auto text-alien-gold italic text-base md:text-lg mb-10 leading-relaxed opacity-90">
+          "Acquire complete attention capabilities to connect, discover and expand knowledge and skills. Evolve towards an optimal experience with fullness of flow."
+        </p>
+        
+        <div className="inline-flex items-center gap-3 px-6 py-3 rounded-full border border-[#39FF14]/30 bg-[#39FF14]/5 text-[#39FF14] text-[11px] font-mono tracking-[0.3em] uppercase animate-pulse shadow-[0_0_20px_rgba(57,255,20,0.1)]">
+          <Zap className="w-4 h-4" /> Ready to evolve? Join the decentralized learning revolution
+        </div>
+      </header>
+
+      {/* 2. M├ôDULOS (GRID HORIZONTAL CON EXPANSI├ôN) */}
+      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-8 mb-28 items-start">
+        {academyModules.map((module) => (
+          <motion.div 
+            key={module.id}
+            layout
+            className="flex flex-col bg-black/40 backdrop-blur-2xl rounded-[2.5rem] border border-white/10 hover:border-alien-gold/40 transition-all duration-500 shadow-2xl relative overflow-hidden group"
+          >
+            <div 
+              onClick={() => setExpandedModule(expandedModule === module.id ? null : module.id)}
+              className="p-10 cursor-pointer"
+            >
+              <div className="flex justify-between items-start mb-6">
+                <div className="p-4 rounded-2xl bg-white/5 border border-white/10 group-hover:bg-alien-gold/10 group-hover:border-alien-gold/30 transition-all duration-500">
+                  {module.icon}
                 </div>
+                <ChevronDown className={`w-6 h-6 text-alien-gold transition-transform duration-500 ${expandedModule === module.id ? 'rotate-180' : ''}`} />
               </div>
+              
+              <h3 className="text-3xl font-nasalization mb-4 text-white tracking-tight">{module.title}</h3>
+              <p className="text-gray-400 text-sm italic leading-relaxed mb-2 opacity-80">{module.description}</p>
+              
+              <AnimatePresence>
+                {expandedModule === module.id && (
+                  <motion.div 
+                    initial={{ height: 0, opacity: 0 }} 
+                    animate={{ height: 'auto', opacity: 1 }} 
+                    exit={{ height: 0, opacity: 0 }} 
+                    className="pt-8 space-y-8 border-t border-white/10 mt-6"
+                  >
+                    {module.modules.map((sub, i) => (
+                      <div key={i} className="space-y-3">
+                        <h4 className="text-[#39FF14] text-[11px] font-bold tracking-[0.2em] uppercase flex items-center gap-3">
+                          <CheckCircle2 className="w-4 h-4 text-alien-gold" /> {sub.name}
+                        </h4>
+                        <ul className="grid grid-cols-1 gap-2 pl-7">
+                          {sub.topics.map((topic, j) => (
+                            <li key={j} className="text-[11px] text-gray-500 hover:text-alien-gold transition-colors leading-relaxed">
+                              ΓÇó {topic}
+                            </li>
+                          ))}
+                        </ul>
+                      </div>
+                    ))}
+                    <Button className="w-full mt-4 bg-transparent border border-alien-gold/30 text-alien-gold hover:bg-alien-gold hover:text-black font-bold tracking-widest text-[10px] h-12 rounded-xl">
+                      ENTER MODULE
+                    </Button>
+                  </motion.div>
+                )}
+              </AnimatePresence>
             </div>
-          </Card>
-
-          {/* Course Grid */}
-          <div className="mb-16">
-            <h2 className="text-3xl font-bold mb-2 font-nasalization text-center text-glow text-alien-green">
-              Main Courses
-            </h2>
-            <p className="text-gray-300 text-center mb-12 font-[Exo]">
-              Explore our comprehensive training programs
-            </p>
-            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
-              {courses.map((course, index) => <CourseCard key={index} {...course} />)}
-            </div>
-          </div>
+          </motion.div>
+        ))}
+      </div>
 
-          {/* Enhanced Partners Section */}
-          <div className="mb-12">
-            <h2 className="text-3xl font-bold mb-2 font-nasalization text-center text-glow text-alien-green">
-              Educational Partners
-            </h2>
-            <p className="text-center mb-12 font-[Exo] text-alien-gold font-medium">
-              We collaborate with the world's best educational platforms
-            </p>
-            <div className="grid grid-cols-3 md:grid-cols-4 lg:grid-cols-6 xl:grid-cols-7 gap-4">
-              {partners.map((partner, index) => <PartnerCard key={index} {...partner} />)}
+      {/* 3. MASTER CERTIFICATION (ORIGINAL) */}
+      <section className="max-w-6xl mx-auto px-6 mb-32">
+        <div className="relative p-[1px] bg-gradient-to-r from-transparent via-alien-gold/40 to-transparent rounded-[3rem]">
+          <div className="bg-black/80 backdrop-blur-xl rounded-[2.95rem] p-12 flex flex-col md:flex-row items-center justify-between gap-10 border border-white/5 shadow-2xl">
+            <div className="flex items-center gap-8">
+              <div className="w-20 h-20 rounded-3xl bg-alien-gold/5 flex items-center justify-center border border-alien-gold/20 shadow-[0_0_30px_rgba(212,175,55,0.1)]">
+                <Award className="w-10 h-10 text-alien-gold" />
+              </div>
+              <div className="text-center md:text-left">
+                <h2 className="text-4xl font-nasalization text-white uppercase tracking-tighter">Master Certification</h2>
+                <p className="text-alien-gold/70 text-sm italic mt-2 font-medium tracking-wide">On-chain validation of your evolutionary journey through the flow.</p>
+              </div>
             </div>
+            <Button className="bg-alien-gold text-black font-black px-12 h-14 rounded-full hover:bg-[#39FF14] transition-all uppercase text-[11px] tracking-[0.2em] shadow-xl shadow-alien-gold/20">
+              MINT CREDENTIAL
+            </Button>
           </div>
+        </div>
+      </section>
 
-          {/* CTA Section */}
-          <Card className="text-center bg-alien-space-dark/70 backdrop-blur-lg border-alien-gold/30">
-            <CardContent className="p-8">
-              <h2 className="text-2xl font-bold text-alien-gold mb-4 font-nasalization">
-                Ready to Expand Your Cosmic Knowledge?
-              </h2>
-              <CardDescription className="text-gray-300 mb-6 max-w-2xl mx-auto font-[Exo] text-base">
-                Join thousands of space navigators on their journey to master the principles of the decentralized multiverse.
-              </CardDescription>
-              <div className="flex flex-wrap justify-center gap-4">
-                <Button className="bg-alien-gold hover:bg-alien-gold-light text-alien-space-dark font-[Exo] font-semibold">
-                  <BookOpen className="w-4 h-4 mr-2" />
-                  Explore All Courses
-                </Button>
-                <Button variant="outline" className="border-alien-green text-alien-green hover:bg-alien-green/20 font-[Exo] font-semibold">
-                  <Users className="w-4 h-4 mr-2" />
-                  Join Community
-                </Button>
+      {/* 4. PARTNERS (FUNCIONALIDAD TOTAL) */}
+      <footer className="max-w-7xl mx-auto px-8">
+        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-12">
+          {partnerCategories.map((cat, i) => (
+            <div key={i} className="space-y-6">
+              <h5 className="text-[11px] font-nasalization text-alien-gold tracking-[0.3em] border-b border-white/10 pb-4 uppercase opacity-70">
+                {cat.label}
+              </h5>
+              <div className="flex flex-col gap-4">
+                {cat.partners.sort((a,b) => a.name.localeCompare(b.name)).map((p, j) => (
+                  <a 
+                    key={j} 
+                    href={p.url} 
+                    target="_blank" 
+                    rel="noopener noreferrer" 
+                    className="flex items-center gap-3 group"
+                  >
+                    <div className="w-8 h-8 rounded-xl bg-white/5 p-1.5 border border-white/5 group-hover:border-[#39FF14]/40 group-hover:bg-[#39FF14]/10 transition-all duration-300 flex items-center justify-center overflow-hidden">
+                      <img 
+                        src={`/lovable-uploads/Academy/${p.logo}`} 
+                        alt={p.name} 
+                        className="w-full h-full object-contain grayscale group-hover:grayscale-0 transition-all duration-500 scale-90 group-hover:scale-100"
+                        onError={(e) => { e.currentTarget.style.opacity = '0.2'; }} 
+                      />
+                    </div>
+                    <span className="text-[12px] text-gray-500 group-hover:text-white transition-colors tracking-tight font-medium">
+                      {p.name}
+                    </span>
+                    <ExternalLink className="w-2.5 h-2.5 text-white/0 group-hover:text-[#39FF14] transition-all" />
+                  </a>
+                ))}
               </div>
-            </CardContent>
-          </Card>
+            </div>
+          ))}
         </div>
-      </main>
-    </div>;
+      </footer>
+    </div>
+  );
 };
+
 export default Academy;
