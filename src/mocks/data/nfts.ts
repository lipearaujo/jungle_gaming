import type ICategory from '#/types/category'
import type INfts from '#/types/nfts'
import { Edition, Network } from '#/types/nfts'

const categoryDefinitions = [
  {
    name: 'Arte digital',
    slug: 'arte-digital',
    items: [
      'Emerald Dreams',
      'Neon Portrait',
      'Golden Horizon',
      'Digital Bloom',
      'Abstract Motion',
      'Crimson Echo',
      'Silent Geometry',
      'Liquid Colors',
      'Midnight Canvas',
      'Ethereal Forms',
      'Chromatic Soul',
      'Infinite Shapes',
      'Velvet Pixels',
      'Prismatic Vision',
      'Urban Illusion',
      'Celestial Portrait',
      'Fragmented Reality',
      'Dreamscape',
    ],
    collections: ['Digital Dreams', 'Abstract Worlds', 'Neon Visions'],
    description:
      'Explore um mundo de criatividade digital, onde artistas transformam cores, formas e ideias em obras de arte únicas.',
    attributes: [
      {
        traitType: 'Paleta de cores',
        values: ['Quente', 'Fria', 'Monocromática', 'Vibrante', 'Pastel'],
      },
      {
        traitType: 'Estilo artístico',
        values: [
          'Abstrato',
          'Minimalista',
          'Surrealista',
          'Futurista',
          'Psicodélico',
        ],
      },
      {
        traitType: 'Raridade',
        values: ['Comum', 'Incomum', 'Raro', 'Épico', 'Lendário'],
      },
      {
        traitType: 'Técnica',
        values: [
          'Pintura digital',
          'Colagem',
          'Pixel art',
          'Ilustração',
          'Arte vetorial',
        ],
      },
      {
        traitType: 'Atmosfera',
        values: ['Serena', 'Misteriosa', 'Sombria', 'Alegre', 'Onírica'],
      },
    ],
  },
  {
    name: 'Fotografia',
    slug: 'fotografia',
    items: [
      'Silent Mountains',
      'Urban Reflections',
      'Golden Coast',
      'Midnight Streets',
      'Desert Silence',
      'Frozen Horizon',
      'Ocean Memories',
      'Concrete Jungle',
      'Wild Encounters',
      'Shadows of Tokyo',
      'Morning Mist',
      'Forgotten Places',
      'Northern Lights',
      'Hidden Corners',
      'Last Sunset',
      'Rainy Windows',
      'Beyond the Clouds',
      'Still Moments',
    ],
    collections: ['Urban Frames', "Nature's Lens", 'Human Stories'],
    description:
      'Descubra momentos cativantes congelados no tempo, desde paisagens de tirar o fôlego até retratos íntimos e perspectivas urbanas.',
    attributes: [
      {
        traitType: 'Iluminação',
        values: ['Natural', 'Dramática', 'Suave', 'Contraluz', 'Neon'],
      },
      {
        traitType: 'Estilo fotográfico',
        values: ['Retrato', 'Paisagem', 'Urbano', 'Macro', 'Documental'],
      },
      {
        traitType: 'Período do dia',
        values: ['Amanhecer', 'Manhã', 'Tarde', 'Pôr do sol', 'Noite'],
      },
      {
        traitType: 'Tonalidade',
        values: [
          'Colorida',
          'Preto e branco',
          'Sépia',
          'Desaturada',
          'Alto contraste',
        ],
      },
      {
        traitType: 'Composição',
        values: [
          'Simétrica',
          'Minimalista',
          'Regra dos terços',
          'Centralizada',
          'Panorâmica',
        ],
      },
    ],
  },
  {
    name: 'Música',
    slug: 'musica',
    items: [
      'Midnight Symphony',
      'Electric Dreams',
      'Bass Dimension',
      'Golden Frequencies',
      'Lost Melody',
      'Neon Rhythm',
      'Echoes of Space',
      'Velvet Sound',
      'Digital Harmony',
      'Deep Blue Notes',
      'Cosmic Beat',
      'Silent Orchestra',
      'Rhythm Machine',
      'Afterglow',
      'Sonic Waves',
      'Moonlight Session',
      'Infinite Loop',
      'Final Chord',
    ],
    collections: ['Neon Frequencies', 'Sonic Realms', 'Echo Archives'],
    description:
      'Vivencie a música em uma nova dimensão por meio de criações de áudio exclusivas, lançamentos digitais e itens musicais colecionáveis ​​únicos.',
    attributes: [
      {
        traitType: 'Gênero musical',
        values: ['Eletrônica', 'Ambient', 'Rock', 'Hip-hop', 'Clássica'],
      },
      {
        traitType: 'Atmosfera sonora',
        values: [
          'Relaxante',
          'Energética',
          'Melancólica',
          'Épica',
          'Experimental',
        ],
      },
      {
        traitType: 'Duração',
        values: ['Curta', 'Média', 'Longa', 'Estendida'],
      },
      {
        traitType: 'Instrumento principal',
        values: ['Sintetizador', 'Piano', 'Guitarra', 'Violino', 'Bateria'],
      },
      {
        traitType: 'Ritmo',
        values: ['Lento', 'Moderado', 'Acelerado', 'Variável'],
      },
    ],
  },
  {
    name: 'Arte 3D',
    slug: 'arte-3d',
    items: [
      'Crystal Dragon',
      'Floating Temple',
      'Chrome Panther',
      'Orbital Structure',
      'Liquid Sculpture',
      'Obsidian Tower',
      'Cyber Samurai',
      'Golden Guardian',
      'Neon Architecture',
      'Quantum Sphere',
      'Marble Spirit',
      'Mechanical Bloom',
      'Holographic Mask',
      'Prismatic Cube',
      'Celestial Engine',
      'Fractal Monument',
      'Digital Colossus',
      'Future Relic',
    ],
    collections: ['Beyond Dimensions', 'Virtual Forms', 'Dreamscapes'],
    description:
      'Entre em mundos digitais imersivos, repletos de esculturas 3D impressionantes, ambientes criativos e designs virtuais extraordinários.',
    attributes: [
      {
        traitType: 'Material',
        values: ['Metal', 'Cristal', 'Madeira', 'Pedra', 'Plástico'],
      },
      {
        traitType: 'Estilo de renderização',
        values: ['Realista', 'Cartunesco', 'Low poly', 'Futurista', 'Abstrato'],
      },
      {
        traitType: 'Iluminação',
        values: ['Estúdio', 'Natural', 'Neon', 'Dramática', 'Volumétrica'],
      },
      {
        traitType: 'Complexidade',
        values: ['Simples', 'Moderada', 'Detalhada', 'Muito detalhada'],
      },
      {
        traitType: 'Ambiente',
        values: ['Espacial', 'Urbano', 'Natural', 'Fantástico', 'Industrial'],
      },
    ],
  },
  {
    name: 'Colecionáveis',
    slug: 'colecionaveis',
    items: [
      'Emerald Ape',
      'Ruby Fox',
      'Golden Penguin',
      'Cosmic Cat',
      'Pixel Knight',
      'Diamond Turtle',
      'Shadow Wolf',
      'Lucky Robot',
      'Crystal Owl',
      'Neon Panda',
      'Ancient Golem',
      'Silver Phoenix',
      'Cyber Rabbit',
      'Mystic Whale',
      'Royal Frog',
      'Turbo Raccoon',
      'Stellar Bear',
      'Legendary Lynx',
    ],
    collections: ['Rare Finds', 'Pixel Legends', 'Iconic Pieces'],
    description:
      'Encontre tesouros digitais raros, personagens icônicos e itens colecionáveis ​​exclusivos criados para entusiastas e colecionadores apaixonados.',
    attributes: [
      {
        traitType: 'Raridade',
        values: ['Comum', 'Incomum', 'Raro', 'Épico', 'Lendário'],
      },
      {
        traitType: 'Série',
        values: [
          'Clássica',
          'Especial',
          'Limitada',
          'Comemorativa',
          'Fundadores',
        ],
      },
      {
        traitType: 'Condição',
        values: ['Padrão', 'Preservada', 'Premium', 'Impecável'],
      },
      {
        traitType: 'Edição',
        values: ['1 de 1', '1 de 10', '1 de 50', '1 de 100', 'Aberta'],
      },
      {
        traitType: 'Acabamento',
        values: [
          'Fosco',
          'Brilhante',
          'Metálico',
          'Holográfico',
          'Translúcido',
        ],
      },
    ],
  },
  {
    name: 'Generativa',
    slug: 'generativa',
    items: [
      'Fractal Bloom',
      'Algorithmic Garden',
      'Infinite Spiral',
      'Procedural Dawn',
      'Random Symmetry',
      'Chaos Theory',
      'Recursive Dreams',
      'Geometric Pulse',
      'Organic Patterns',
      'Synthetic Nature',
      'Data Garden',
      'Evolving Forms',
      'Parametric Waves',
      'Digital Mycelium',
      'Cellular Worlds',
      'Emergent Order',
      'Infinite Variation',
      'Code in Motion',
    ],
    collections: ['Algorithmic Bloom', 'Fractal Universe', 'Random Realms'],
    description:
      'Descubra a arte moldada por algoritmos, onde código, aleatoriedade e criatividade humana se unem para criar experiências digitais únicas.',
    attributes: [
      {
        traitType: 'Algoritmo',
        values: [
          'Fractal',
          'Ruído procedural',
          'Autômato celular',
          'Geometria',
          'Partículas',
        ],
      },
      {
        traitType: 'Complexidade',
        values: ['Baixa', 'Média', 'Alta', 'Extrema'],
      },
      {
        traitType: 'Paleta de cores',
        values: [
          'Quente',
          'Fria',
          'Monocromática',
          'Complementar',
          'Aleatória',
        ],
      },
      {
        traitType: 'Geometria',
        values: ['Orgânica', 'Poligonal', 'Simétrica', 'Caótica', 'Radial'],
      },
      {
        traitType: 'Densidade visual',
        values: ['Esparsa', 'Equilibrada', 'Densa', 'Muito densa'],
      },
    ],
  },
  {
    name: 'Jogos',
    slug: 'jogos',
    items: [
      'Shadow Assassin',
      'Neon Racer',
      'Pixel Kingdom',
      'Battle Warden',
      'Arcane Blade',
      'Cyber Pilot',
      'Storm Archer',
      'Void Commander',
      'Frost Warrior',
      'Plasma Cannon',
      'Dungeon Keeper',
      'Quantum Hacker',
      'Skybound Hero',
      'Iron Colossus',
      'Phantom Rider',
      'Mystic Ranger',
      'Starship Ace',
      'Electric Beast',
    ],
    collections: ['Mythic Realms', 'Battleforge', 'Pixel Quest'],
    description:
      'Explore ativos digitais inspirados em universos de jogos, desde personagens e equipamentos lendários até itens criados para aventuras virtuais.',
    attributes: [
      {
        traitType: 'Classe',
        values: ['Guerreiro', 'Mago', 'Arqueiro', 'Assassino', 'Curandeiro'],
      },
      {
        traitType: 'Nível',
        values: [
          'Iniciante',
          'Intermediário',
          'Avançado',
          'Mestre',
          'Lendário',
        ],
      },
      {
        traitType: 'Poder',
        values: ['Fogo', 'Gelo', 'Raio', 'Terra', 'Sombras'],
      },
      {
        traitType: 'Equipamento',
        values: ['Espada', 'Arco', 'Cajado', 'Adagas', 'Escudo'],
      },
      {
        traitType: 'Raridade',
        values: ['Comum', 'Incomum', 'Raro', 'Épico', 'Lendário'],
      },
    ],
  },
  {
    name: 'Assinaturas',
    slug: 'assinaturas',
    items: [
      'Creator Pass',
      'Gold Membership',
      'Studio Access',
      'Music Club Pass',
      'Premium Gallery',
      'Collector Circle',
      'Digital Lounge',
      'VIP Experience',
      'Artist Insider',
      'Exclusive Drops',
      'Season Access',
      'Founders Club',
      'Elite Community',
      'Creative Pass',
      'Backstage Key',
      'Royal Membership',
      'Inner Circle',
      'Genesis Pass',
    ],
    collections: ['Creator Circle', 'Inner Studio', "The Collector's Club"],
    description:
      'Desbloqueie conteúdo exclusivo, privilégios especiais e experiências únicas por meio de assinaturas digitais criadas para comunidades dedicadas.',
    attributes: [
      {
        traitType: 'Plano',
        values: ['Básico', 'Essencial', 'Premium', 'VIP', 'Vitalício'],
      },
      {
        traitType: 'Duração',
        values: ['Mensal', 'Trimestral', 'Semestral', 'Anual', 'Vitalícia'],
      },
      {
        traitType: 'Benefício',
        values: [
          'Acesso antecipado',
          'Conteúdo exclusivo',
          'Descontos',
          'Eventos privados',
          'Acesso completo',
        ],
      },
      {
        traitType: 'Prioridade',
        values: ['Padrão', 'Preferencial', 'Alta', 'VIP'],
      },
      {
        traitType: 'Acesso',
        values: ['Limitado', 'Expandido', 'Completo', 'Exclusivo'],
      },
    ],
  },
  {
    name: 'Utilidade',
    slug: 'utilidade',
    items: [
      'Event Access Key',
      'Governance Pass',
      'VIP Ticket',
      'Metaverse Land Key',
      'Voting Rights',
      'Creator License',
      'Early Access Pass',
      'Digital Identity',
      'Community Key',
      'Tournament Entry',
      'Workspace Access',
      'Reward Booster',
      'Virtual Property Key',
      'Membership Token',
      'Trade Permit',
      'Exclusive Access',
      'Achievement Badge',
      'Priority Pass',
    ],
    collections: ['Access Pass', 'VIP Universe', 'Member Vault'],
    description:
      'Vá além da simples propriedade com NFTs que oferecem benefícios no mundo real, acesso exclusivo, privilégios especiais e experiências digitais práticas.',
    attributes: [
      {
        traitType: 'Tipo de utilidade',
        values: ['Ingresso', 'Certificado', 'Passe', 'Licença', 'Recompensa'],
      },
      {
        traitType: 'Nível de acesso',
        values: ['Básico', 'Intermediário', 'Avançado', 'Exclusivo'],
      },
      {
        traitType: 'Validade',
        values: ['24 horas', '30 dias', '1 ano', 'Permanente'],
      },
      {
        traitType: 'Benefício',
        values: [
          'Desconto',
          'Acesso especial',
          'Recompensa',
          'Conteúdo exclusivo',
          'Participação em eventos',
        ],
      },
      {
        traitType: 'Disponibilidade',
        values: [
          'Limitada',
          'Por convite',
          'Pública',
          'Exclusiva para membros',
        ],
      },
    ],
  },
] as const

export const categories: ICategory[] = categoryDefinitions.map(
  ({ name, slug }) => ({
    id: slug,
    name,
  }),
)

const nftImages = [
  '/assets/NFT_artwork_01.png',
  '/assets/NFT_artwork_02.png',
  '/assets/NFT_artwork_03.png',
  '/assets/NFT_artwork_04.png',
]

const creators = [
  'Alex Morgan',
  'Sophia Chen',
  'Lucas Bennett',
  'Maya Rodriguez',
  'Ethan Brooks',
  'Olivia Parker',
]

//ETH 0x71C95911E9a5d330f4D621812C38448A08157A42
//POL 0x1234567890abcdef1234567890abcdef12345678
const contractAddresses = {
  Ethereum: ['0x1111111111111111111111111111111111111111'],
  Polygon: ['0x9999999999999999999999999999999999999999'],
  Solana: ['AmX4vY5z1A2b3C4d5E6f7G8h9I0j1K2l3M4n5O6p7Q8r'],
}

export const nfts: INfts[] = categoryDefinitions.flatMap(
  ({ name, slug, items, collections, description, attributes }) =>
    items.map((item, index) => {
      const date = new Date('2026-10-12T12:00:00Z')
      date.setDate(date.getDate() - index * 5)

      const editionValues = Object.values(Edition)
      const networkValues = Object.values(Network)
      const network = networkValues[index % networkValues.length]

      const attributesCopy = attributes
        .slice()
        .sort(() => Math.random() - 0.5)
        .slice(0, 3)
      const nftAttributes = attributesCopy.map((attribute) => {
        const i = Math.floor(Math.random() * attribute.values.length)

        return {
          traitType: attribute.traitType,
          value: attribute.values[i],
        }
      })

      return {
        id: `${slug}-${String(index + 1).padStart(3, '0')}`,
        name: item,
        price: (0.02 + ((index * 37 + slug.length * 11) % 1499) / 100).toFixed(
          2,
        ),
        imageUrl: nftImages[index % nftImages.length],
        category: name,
        available: index !== 7 && index !== 14,
        createdAt: date.toISOString(),
        isTrending: index % 3 === 0,
        description: `${item} - ${description}`,
        collection: collections[index % collections.length],
        edition: editionValues[index % editionValues.length],
        creator: creators[index % creators.length],
        network,
        contractAddress: contractAddresses[network][0],
        attributes: nftAttributes,
      }
    }),
)
