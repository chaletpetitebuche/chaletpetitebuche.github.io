// This file manages language detection and translations

// Helper function to extract language information from the URL path
export function getLanguageInfo(location, langs, defaultLangKey) {
  const { pathname } = location;

  // Default language (English)
  let langKey = defaultLangKey;

  // Detect if we're on a French page
  if (pathname.startsWith("/fr") || pathname.includes(".fr.")) {
    langKey = "fr";
  }

  // Create menu options for language selection
  const langsMenu = langs.map((lang) => {
    const selected = lang === langKey;

    // Generate the equivalent link in the other language
    let link;
    if (lang === defaultLangKey) {
      // For default language (English), remove '/fr' from path
      link = pathname.replace(/^\/fr/, "");
      if (link === "") link = "/";
    } else {
      // For French, add '/fr' to path if not already present
      if (pathname.startsWith("/fr")) {
        link = pathname;
      } else {
        link = pathname === "/" ? "/fr/" : `/fr${pathname}`;
      }
    }

    return { langKey: lang, link, selected };
  });

  return { langKey, langsMenu };
}

// Translations for both languages
export const translations = {
  en: {
    site: {
      title: "Chalet La Petite Bûche",
      description: "A cozy micro-cabin retreat in the heart of the forest.",
    },
    nav: {
      home: "Home",
      guests: "Guest Information",
      book: "Book Now",
      theme: "Theme",
      language: "Language",
    },
    hero: {
      title: "Escape to Nature",
      subtitle:
        "Experience serenity in our cozy micro-cabin nestled in the forest.",
      cta: "Book Your Stay",
    },
    about: {
      title: "Our Cabin",
      description:
        "Chalet La Petite Bûche is a charming micro-cabin offering an authentic retreat experience. Built with sustainable materials and powered by solar energy, our cabin provides the perfect balance of rustic charm and modern comfort.",
    },
    amenities: {
      title: "Amenities",
      subtitle: "Everything you need for a comfortable stay.",
      wifi: "Free WiFi",
      heating: "Heating",
      kitchen: "Kitchenette",
      bathroom: "Full Bathroom",
      porch: "Private Porch",
      firepit: "Fire Pit",
    },
    activities: {
      title: "Nearby Activities",
      subtitle: "Explore the natural beauty surrounding our cabin.",
      hiking: {
        title: "Hiking Trails",
        description:
          "Miles of beautiful hiking trails just steps from your door.",
      },
      fishing: {
        title: "Fishing",
        description:
          "Try your luck at the nearby lake, stocked with trout and bass.",
      },
      wildlife: {
        title: "Wildlife Viewing",
        description:
          "Spot deer, rabbits, and various bird species around the property.",
      },
    },
    location: {
      title: "Location",
      description:
        "Nestled in a peaceful forest, yet just a 15-minute drive from town with restaurants, shops, and amenities.",
    },
    guests: {
      title: "Guest Information",
      welcome: "Welcome to La Petite Bûche!",
      intro:
        "We're delighted you've chosen our cabin for your getaway. Here you'll find all the information you need for a comfortable and enjoyable stay.",
      checkin: {
        title: "Check-in & Check-out",
        info: "Check-in: 3:00 PM | Check-out: 11:00 AM",
        process:
          "The cabin features a keyless entry system. We'll send you the access code prior to your arrival.",
      },
      emergency: {
        title: "Emergency Contact",
        contact:
          "For urgent matters, please call or text (555) 123-4567. For non-urgent questions, please use the Airbnb messaging system.",
      },
      amenities: {
        title: "Cabin Amenities",
        description:
          "Our cabin is equipped with everything you need for a comfortable stay.",
      },
      rules: {
        title: "House Rules",
        item1: "No smoking inside the cabin.",
        item2: "Quiet hours are from 10:00 PM to 8:00 AM.",
        item3: "Please respect the wildlife and natural surroundings.",
      },
      local: {
        title: "Local Recommendations",
        description: "Here are some of our favorite spots in the area.",
      },
    },
    footer: {
      description: "A cozy micro-cabin retreat in the heart of the forest.",
      contact: "Contact",
      email: "Email",
      follow: "Follow Us",
      rights: "All rights reserved.",
    },
  },
  fr: {
    site: {
      title: "Chalet La Petite Bûche",
      description:
        "Une retraite chaleureuse dans un micro-chalet au cœur de la forêt.",
    },
    nav: {
      home: "Accueil",
      guests: "Information",
      book: "Réserver",
      theme: "Thème",
      language: "Langue",
    },
    hero: {
      title: "Évadez-vous dans la Nature",
      subtitle:
        "Découvrez la sérénité dans notre confortable micro-chalet niché dans la forêt.",
      cta: "Réservez Votre Séjour",
    },
    about: {
      title: "Notre Chalet",
      description:
        "Le Chalet La Petite Bûche est un charmant micro-chalet offrant une expérience de retraite authentique. Construit avec des matériaux durables et alimenté par l'énergie solaire, notre chalet offre l'équilibre parfait entre charme rustique et confort moderne.",
    },
    amenities: {
      title: "Commodités",
      subtitle: "Tout ce dont vous avez besoin pour un séjour confortable.",
      wifi: "WiFi Gratuit",
      heating: "Chauffage",
      kitchen: "Kitchenette",
      bathroom: "Salle de Bain Complète",
      porch: "Porche Privé",
      firepit: "Foyer Extérieur",
    },
    activities: {
      title: "Activités à Proximité",
      subtitle: "Explorez la beauté naturelle qui entoure notre chalet.",
      hiking: {
        title: "Sentiers de Randonnée",
        description:
          "Des kilomètres de magnifiques sentiers à quelques pas de votre porte.",
      },
      fishing: {
        title: "Pêche",
        description:
          "Tentez votre chance au lac voisin, peuplé de truites et d'achigans.",
      },
      wildlife: {
        title: "Observation de la Faune",
        description:
          "Repérez des cerfs, des lapins et diverses espèces d'oiseaux autour de la propriété.",
      },
    },
    location: {
      title: "Emplacement",
      description:
        "Niché dans une forêt paisible, mais à seulement 15 minutes en voiture de la ville avec ses restaurants, boutiques et commodités.",
    },
    guests: {
      title: "Information pour les Invités",
      welcome: "Bienvenue au Chalet La Petite Bûche!",
      intro:
        "Nous sommes ravis que vous ayez choisi notre chalet pour votre escapade. Vous trouverez ici toutes les informations nécessaires pour un séjour confortable et agréable.",
      checkin: {
        title: "Arrivée et Départ",
        info: "Arrivée: 15h00 | Départ: 11h00",
        process:
          "Le chalet dispose d'un système d'entrée sans clé. Nous vous enverrons le code d'accès avant votre arrivée.",
      },
      emergency: {
        title: "Contact d'Urgence",
        contact:
          "Pour les questions urgentes, veuillez appeler ou envoyer un SMS au (555) 123-4567. Pour les questions non urgentes, veuillez utiliser le système de messagerie Airbnb.",
      },
      amenities: {
        title: "Commodités du Chalet",
        description:
          "Notre chalet est équipé de tout ce dont vous avez besoin pour un séjour confortable.",
      },
      rules: {
        title: "Règles de la Maison",
        item1: "Interdiction de fumer à l'intérieur du chalet.",
        item2: "Les heures de silence sont de 22h00 à 8h00.",
        item3: "Veuillez respecter la faune et l'environnement naturel.",
      },
      local: {
        title: "Recommandations Locales",
        description:
          "Voici quelques-uns de nos endroits préférés dans la région.",
      },
    },
    footer: {
      description:
        "Une retraite chaleureuse dans un micro-chalet au cœur de la forêt.",
      contact: "Contact",
      email: "Courriel",
      follow: "Suivez-nous",
      rights: "Tous droits réservés.",
    },
  },
};
