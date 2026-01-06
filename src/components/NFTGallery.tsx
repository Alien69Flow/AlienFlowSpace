import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Image as ImageIcon } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

const NFT_COLLECTIONS = [
  {
    id: 'alien69flow',
    name: 'Alien69Flow',
    description: 'Main collection featuring unique alien-themed digital art and collectibles.',
    url: 'https://opensea.io/es/Alien69Flow',
    image: '/lovable-uploads/ALogo.png',
    items: '50+ NFTs'
  },
  {
    id: 'alienflowspace',
    name: 'AlienFlowSpace',
    description: 'Exclusive DAO membership tokens and space-themed collectibles.',
    url: 'https://opensea.io/es/AlienFlowSpace',
    image: '/lovable-uploads/CoNetWorKingLogo.png',
    items: '30+ NFTs'
  }
];

const NFT_ITEMS = [
  { name: 'Cosmic Voyager #001', price: '0.05 ETH', image: '/lovable-uploads/ET.png' },
  { name: 'Space Genesis', price: '0.08 ETH', image: '/lovable-uploads/VC.png' },
  { name: 'Alien Portal', price: '0.12 ETH', image: '/lovable-uploads/AW.png' },
  { name: 'Digital Domain', price: '0.03 ETH', image: '/lovable-uploads/AP1.avif' }
];

const NFTGallery: React.FC = () => {
  return (
    <section className="py-16 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-nasalization font-bold mb-4">
            <span className="bg-gradient-to-r from-alien-green via-alien-gold to-alien-green bg-clip-text text-transparent">
              Digital Collectibles
            </span>
          </h2>
          <p className="text-muted-foreground font-exo max-w-2xl mx-auto">
            Explore our exclusive NFT collections on OpenSea. Own a piece of the AlienFlowSpace universe.
          </p>
        </motion.div>

        {/* Collections Grid */}
        <div className="grid md:grid-cols-2 gap-6 mb-12">
          {NFT_COLLECTIONS.map((collection, idx) => (
            <motion.div
              key={collection.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
            >
              <Card className="bg-alien-space-dark/80 backdrop-blur-md border-alien-gold/30 hover:border-alien-green/50 transition-all duration-300 group overflow-hidden">
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="w-20 h-20 rounded-xl overflow-hidden border-2 border-alien-gold/30 flex-shrink-0">
                      <img 
                        src={collection.image} 
                        alt={collection.name}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                      />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-nasalization text-alien-gold mb-2">
                        {collection.name}
                      </h3>
                      <p className="text-sm text-muted-foreground font-exo mb-3">
                        {collection.description}
                      </p>
                      <div className="flex items-center justify-between">
                        <span className="text-xs text-alien-green font-exo">{collection.items}</span>
                        <Button
                          variant="outline"
                          size="sm"
                          className="border-alien-gold/50 text-alien-gold hover:bg-alien-gold/20"
                          onClick={() => window.open(collection.url, '_blank')}
                        >
                          <ExternalLink className="w-4 h-4 mr-2" />
                          View on OpenSea
                        </Button>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Featured NFTs */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mb-8"
        >
          <h3 className="text-xl font-nasalization text-alien-green mb-6 text-center">
            Featured Items
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {NFT_ITEMS.map((item, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                whileHover={{ y: -5 }}
                className="group"
              >
                <div className="bg-alien-space-dark/60 rounded-xl border border-alien-gold/20 overflow-hidden hover:border-alien-green/40 transition-all">
                  <div className="aspect-square bg-gradient-to-br from-alien-space-light to-alien-space-dark flex items-center justify-center relative overflow-hidden">
                    <img 
                      src={item.image} 
                      alt={item.name}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-alien-space-dark/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                  </div>
                  <div className="p-3">
                    <p className="text-sm font-exo text-foreground truncate">{item.name}</p>
                    <p className="text-xs text-alien-gold font-nasalization">{item.price}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* CTA */}
        <div className="text-center">
          <Button
            size="lg"
            className="bg-gradient-to-r from-alien-gold to-alien-gold-dark hover:from-alien-gold-light hover:to-alien-gold text-alien-space-dark font-nasalization"
            onClick={() => window.open('https://opensea.io/es/Alien69Flow', '_blank')}
          >
            <ImageIcon className="w-5 h-5 mr-2" />
            Explore All Collections
          </Button>
        </div>
      </div>
    </section>
  );
};

export default NFTGallery;
