import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

const resources = {
  en: {
    translation: {
      nav: {
        about: 'About',
        services: 'Services',
        portfolio: 'Portfolio',
        skills: 'Skills',
        contact: 'Contact',
        blog: 'Blog'
      },
      hero: {
        title: 'Building Scalable AI & Systems',
        subtitle: 'Software Engineer | Product Engineering | Backend / Full Stack',
        cta: "Let's Connect",
        walletConnect: 'Connect'
      },
      about: {
        title: 'About Me',
        name: 'Anurag Anand',
        education: 'B.Tech in Computer Science Engineering (2022-2026)',
        university: 'BML Munjal University',
        specialization: 'Product Engineering, Backend Systems & AI Platforms',
        achievements: '75% Merit Scholarship; Head of Design, led teams for TEDx, Hult Prize, and BMUMUN. Shipped core features for 25,000+ users at WeCatchAI.',
        traits: 'Driven by high-concurrency architecture, product excellence, and clean engineering execution.'
      },
      services: {
        title: 'Services Offered',
        items: [
          'Cybersecurity Audits & Vulnerability Assessment',
          'Blockchain Development & Secure Messaging Systems',
          'Web3 & Decentralized Application Development',
          'IoT Solutions & Smart Devices',
          'Full-Stack Web Development',
          'AI & Machine Learning Integration'
        ]
      },
      portfolio: {
        title: 'Portfolio & Projects',
        viewDetails: 'View Details',
        closeModal: 'Close'
      },
      skills: {
        title: 'Skills & Tools',
        programming: 'Programming',
        frameworks: 'Frameworks',
        databases: 'Databases',
        cybersecurity: 'Cybersecurity',
        cryptography: 'Cryptography',
        cloud: 'Cloud & Deployment',
        languages: 'Languages & Teaching'
      },
      contact: {
        title: 'Contact Me',
        subtitle: "Let's collaborate and build the future!",
        name: 'Name',
        email: 'Email',
        message: 'Message',
        send: 'Send Message'
      }
    }
  },
  fr: {
    translation: {
      nav: {
        about: 'À Propos',
        services: 'Services',
        portfolio: 'Portfolio',
        skills: 'Compétences',
        contact: 'Contact',
        blog: 'Blog'
      },
      hero: {
        title: 'Je Construis des Avenirs Sécurisés et Décentralisés',
        subtitle: 'Étudiant B.Tech CSE | Spécialiste Blockchain & Cybersécurité | Innovateur & Développeur',
        cta: 'Connectons-nous',
        walletConnect: 'Connecter Portefeuille'
      },
      about: {
        title: 'À Propos de Moi',
        name: 'Anurag Anand',
        age: '20 ans',
        education: 'B.Tech en Ingénierie Informatique (2022-2026)',
        university: 'Université BML Munjal',
        specialization: 'Spécialisé en Cybersécurité et Blockchain',
        achievements: 'Diplômé B.Ed et M.Ed; compétent en cryptographie, tests logiciels et communication sécurisée.',
        traits: 'Honnête, concentré, soucieux du détail, aime apprendre et passionné par les technologies décentralisées et l\'IA.'
      },
      services: {
        title: 'Services Offerts',
        items: [
          'Audits de Cybersécurité et Évaluation des Vulnérabilités',
          'Développement Blockchain et Systèmes de Messagerie Sécurisés',
          'Développement Web3 et Applications Décentralisées',
          'Solutions IoT et Appareils Intelligents',
          'Développement Web Full-Stack',
          'Intégration IA et Apprentissage Automatique'
        ]
      },
      portfolio: {
        title: 'Portfolio et Projets',
        viewDetails: 'Voir Détails',
        closeModal: 'Fermer'
      },
      skills: {
        title: 'Compétences et Outils',
        programming: 'Programmation',
        frameworks: 'Frameworks',
        databases: 'Bases de Données',
        cybersecurity: 'Cybersécurité',
        cryptography: 'Cryptographie',
        cloud: 'Cloud et Déploiement',
        languages: 'Langues et Enseignement'
      },
      contact: {
        title: 'Me Contacter',
        subtitle: 'Collaborons et construisons l\'avenir !',
        name: 'Nom',
        email: 'Email',
        message: 'Message',
        send: 'Envoyer Message'
      }
    }
  },
  es: {
    translation: {
      nav: {
        about: 'Acerca de',
        services: 'Servicios',
        portfolio: 'Portafolio',
        skills: 'Habilidades',
        contact: 'Contacto',
        blog: 'Blog'
      },
      hero: {
        title: 'Construyo Futuros Seguros y Descentralizados',
        subtitle: 'Estudiante B.Tech CSE | Especialista en Blockchain y Ciberseguridad | Innovador y Desarrollador',
        cta: 'Conectemos',
        walletConnect: 'Conectar Billetera'
      },
      about: {
        title: 'Acerca de Mí',
        name: 'Anurag Anand',
        age: '20 años',
        education: 'B.Tech en Ingeniería en Ciencias de la Computación (2022-2026)',
        university: 'Universidad BML Munjal',
        specialization: 'Especializado en Ciberseguridad y Blockchain',
        achievements: 'Completó B.Ed y M.Ed; hábil en criptografía, pruebas de software y comunicación segura.',
        traits: 'Honesto, enfocado, orientado al detalle, ama aprender y apasionado por las tecnologías descentralizadas y la IA.'
      },
      services: {
        title: 'Servicios Ofrecidos',
        items: [
          'Auditorías de Ciberseguridad y Evaluación de Vulnerabilidades',
          'Desarrollo Blockchain y Sistemas de Mensajería Segura',
          'Desarrollo Web3 y Aplicaciones Descentralizadas',
          'Soluciones IoT y Dispositivos Inteligentes',
          'Desarrollo Web Full-Stack',
          'Integración de IA y Aprendizaje Automático'
        ]
      },
      portfolio: {
        title: 'Portafolio y Proyectos',
        viewDetails: 'Ver Detalles',
        closeModal: 'Cerrar'
      },
      skills: {
        title: 'Habilidades y Herramientas',
        programming: 'Programación',
        frameworks: 'Frameworks',
        databases: 'Bases de Datos',
        cybersecurity: 'Ciberseguridad',
        cryptography: 'Criptografía',
        cloud: 'Nube y Despliegue',
        languages: 'Idiomas y Enseñanza'
      },
      contact: {
        title: 'Contáctame',
        subtitle: '¡Colaboremos y construyamos el futuro!',
        name: 'Nombre',
        email: 'Correo',
        message: 'Mensaje',
        send: 'Enviar Mensaje'
      }
    }
  }
};

i18n
  .use(initReactI18next)
  .init({
    resources,
    lng: 'en',
    interpolation: {
      escapeValue: false
    }
  });

export default i18n;