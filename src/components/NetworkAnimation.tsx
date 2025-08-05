import React, { useRef, useEffect, useState } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

interface Node {
  id: number;
  x: number;
  y: number;
  size: number;
  connections: number[];
  color: string;
}

const NetworkAnimation: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const [nodes, setNodes] = useState<Node[]>([]);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);
  const [canvasSize, setCanvasSize] = useState({ width: 800, height: 600 });
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], [0, -200]);
  const opacity = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [1, 1, 0.8, 0.6]);
  const scale = useTransform(scrollYProgress, [0, 1], [1, 0.8]);

  // Handle canvas resize
  useEffect(() => {
    const updateCanvasSize = () => {
      if (containerRef.current) {
        const rect = containerRef.current.getBoundingClientRect();
        setCanvasSize({ width: rect.width, height: rect.height });
      }
    };

    updateCanvasSize();
    window.addEventListener('resize', updateCanvasSize);
    return () => window.removeEventListener('resize', updateCanvasSize);
  }, []);

  // Generate network nodes
  useEffect(() => {
    const generateNodes = () => {
      const newNodes: Node[] = [];
      const colors = ['#FFD700', '#00FF88', '#FF6B6B', '#4ECDC4', '#45B7D1', '#96CEB4'];
      
      for (let i = 0; i < 25; i++) {
        newNodes.push({
          id: i,
          x: Math.random() * canvasSize.width,
          y: Math.random() * canvasSize.height,
          size: Math.random() * 8 + 4,
          connections: Array.from({ length: Math.floor(Math.random() * 4) + 1 }, () => 
            Math.floor(Math.random() * 25)
          ).filter(id => id !== i),
          color: colors[Math.floor(Math.random() * colors.length)]
        });
      }
      setNodes(newNodes);
    };

    if (canvasSize.width > 0 && canvasSize.height > 0) {
      generateNodes();
    }
  }, [canvasSize]);

  // Canvas animation
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas || nodes.length === 0) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    // Set canvas size
    canvas.width = canvasSize.width;
    canvas.height = canvasSize.height;

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      // Draw connections
      nodes.forEach(node => {
        node.connections.forEach(connectionId => {
          const targetNode = nodes.find(n => n.id === connectionId);
          if (targetNode) {
            ctx.beginPath();
            ctx.moveTo(node.x, node.y);
            ctx.lineTo(targetNode.x, targetNode.y);
            ctx.strokeStyle = 'rgba(255, 215, 0, 0.3)';
            ctx.lineWidth = 1;
            ctx.stroke();
          }
        });
      });

      // Draw nodes
      nodes.forEach(node => {
        const distance = Math.sqrt(
          Math.pow(mousePos.x - node.x, 2) + Math.pow(mousePos.y - node.y, 2)
        );
        
        const glowIntensity = isHovered && distance < 100 ? 1 - distance / 100 : 0;
        
        // Glow effect
        if (glowIntensity > 0) {
          ctx.beginPath();
          ctx.arc(node.x, node.y, node.size + 10, 0, Math.PI * 2);
          ctx.fillStyle = `rgba(255, 215, 0, ${glowIntensity * 0.3})`;
          ctx.fill();
        }

        // Node
        ctx.beginPath();
        ctx.arc(node.x, node.y, node.size, 0, Math.PI * 2);
        ctx.fillStyle = node.color;
        ctx.fill();
        
        // Inner glow
        ctx.beginPath();
        ctx.arc(node.x, node.y, node.size * 0.6, 0, Math.PI * 2);
        ctx.fillStyle = 'rgba(255, 255, 255, 0.8)';
        ctx.fill();
      });

      requestAnimationFrame(animate);
    };

    animate();
  }, [nodes, mousePos, isHovered, canvasSize]);

  // Mouse tracking
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (canvasRef.current) {
        const rect = canvasRef.current.getBoundingClientRect();
        setMousePos({
          x: e.clientX - rect.left,
          y: e.clientY - rect.top
        });
      }
    };

    const handleMouseEnter = () => setIsHovered(true);
    const handleMouseLeave = () => setIsHovered(false);

    const canvas = canvasRef.current;
    if (canvas) {
      canvas.addEventListener('mousemove', handleMouseMove);
      canvas.addEventListener('mouseenter', handleMouseEnter);
      canvas.addEventListener('mouseleave', handleMouseLeave);
    }

    return () => {
      if (canvas) {
        canvas.removeEventListener('mousemove', handleMouseMove);
        canvas.removeEventListener('mouseenter', handleMouseEnter);
        canvas.removeEventListener('mouseleave', handleMouseLeave);
      }
    };
  }, []);

  return (
    <motion.div 
      ref={containerRef}
      className="relative h-screen w-full overflow-hidden"
      style={{ y, opacity, scale }}
    >
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-alien-space-dark via-purple-900/20 to-alien-space-dark" />
      
      {/* Animated canvas */}
      <canvas
        ref={canvasRef}
        className="absolute inset-0 w-full h-full"
        style={{ filter: 'blur(0.5px)' }}
      />
      
      {/* Content overlay */}
      <div className="relative z-10 flex flex-col items-center justify-center h-full text-center px-4">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="mb-8"
        >
          <h1 className="text-6xl md:text-8xl font-bold text-alien-gold font-nasalization mb-4">
            AlienTrip
          </h1>
          <motion.p 
            className="text-xl md:text-2xl text-alien-green font-[Exo] max-w-3xl mx-auto"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 1 }}
          >
            Navigate the cosmic network of decentralized collaboration
          </motion.p>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 2 }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="text-alien-gold"
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M7 13l5 5 5-5" />
              <path d="M7 6l5 5 5-5" />
            </svg>
          </motion.div>
          <p className="text-sm text-alien-gold/70 mt-2 font-[Exo]">Scroll to explore</p>
        </motion.div>
      </div>

      {/* Floating particles */}
      <div className="absolute inset-0 pointer-events-none">
        {Array.from({ length: 20 }).map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-alien-gold/30 rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -100, 0],
              opacity: [0, 1, 0],
            }}
            transition={{
              duration: Math.random() * 3 + 2,
              repeat: Infinity,
              delay: Math.random() * 2,
            }}
          />
        ))}
      </div>
    </motion.div>
  );
};

export default NetworkAnimation; 