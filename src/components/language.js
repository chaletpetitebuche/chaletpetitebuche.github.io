// This file manages language detection and translations

// Helper function to extract language information from the URL path
export function getLanguageInfo(location, langs, defaultLangKey) {
  const { pathname } = location;

  // Default language (French)
  let langKey = defaultLangKey;

  // Detect if we're on an English page
  if (pathname.startsWith("/en") || pathname.includes(".en.")) {
    langKey = "en";
  }

  // Create menu options for language selection
  const langsMenu = langs.map((lang) => {
    const selected = lang === langKey;

    // Generate the equivalent link in the other language
    let link;
    if (lang === defaultLangKey) {
      // For default language (French), remove '/en' from path
      link = pathname.replace(/^\/en/, "");
      if (link === "") link = "/";
    } else {
      // For English, add '/en' to path if not already present
      if (pathname.startsWith("/en")) {
        link = pathname;
      } else {
        link = pathname === "/" ? "/en/" : `/en${pathname}`;
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
        "Chalet La Petite Bûche is a charming micro-cabin offering an authentic retreat experience. Built with sustainable materials and comfortable year-round, our cabin provides the perfect balance of rustic charm and modern comfort.",
    },
    amenities: {
      title: "Amenities",
      subtitle: "Everything you need for a comfortable stay.",
      wifi: "High Speed ​​Fiber Internet",
      heating: "Heating and air conditioning",
      kitchen: "Fully equiped kitchen",
      tv: "Smart TV & games",
      porch: "Private Porch with Spa",
      firepit: "Outdoor Fireplace",
    },
    activities: {
      title: "Nearby Activities",
      subtitle: "Explore the natural beauty surrounding our cabin.",
      hiking: {
        title: "Hiking Trails",
        description:
          "Kilometers of beautiful hiking trails just steps from your door.",
      },
      fishing: {
        title: "Fishing",
        description: "Try your luck at the village lake, stocked with trout.",
      },
      wildlife: {
        title: "Wildlife Viewing",
        description:
          "Spot deer, chipmunks, and various bird species around the property.",
      },
    },
    location: {
      title: "Location",
      description:
        "Nestled in a peaceful forest, a few minutes drive from the village where you will find a micro-brewery with restaurant, a snack bar, a hunting and fishing and outdoor supplies store, a grocery store, a pharmacy and a few other amenities.",
    },
    guests: {
      title: "Guest Information",
      welcome: "Welcome to Chalet La Petite Bûche!",
      intro:
        "We're delighted you've chosen our cabin for your getaway. Here you'll find all the information you need for a comfortable and enjoyable stay.",
      checkin: {
        title: "Check-in & Check-out",
        info: "Check-in: 4:00 PM | Check-out: 11:00 AM",
        process:
          "Entry to the cabin is independent, the code for the key box will be communicated to you before your arrival.",
      },
      emergency: {
        title: "Contact",
        contact:
          "For questions, please use the Airbnb messaging system. In case of emergency, call 911.",
      },
      amenities: {
        title: "Cabin Amenities",
        description: `Our cabin is equipped with everything you need for a comfortable stay.
          The water is from a well and is drinkable, but it can have a metallic taste. You can use the provided Brita filter if you prefer.`,
      },
      rules: {
        title: "House Rules",
        smoking:
          "No smoking inside the cabin. Use the outdoors ashtray located on the porch.",
        silence: `At all times, occupants must cease any outdoor activity that could generate noise from 11:00 p.m. until 8:00 a.m. the following morning.`,
        rince:
          "Please rinse off in the shower before using the spa to keep the water clean for everyone to enjoy.",
        flora:
          "Please respect the wildlife and natural surroundings. The forest floor is fragile, avoid walking outside of the paths. Enjoy picking — and eating — blueberries but please do not pick other plants.",
        fire: "No open fires are allowed outside of the outdoor fireplace.",
        dishes: "Please wash and put away all dishes before leaving the cabin.",
        grease:
          "Do not throw away cooking grease in the plumbing. Dispose of it in the trash.",
        glass:
          "Do not use glass cups in the spa. If you drop something in the spa, cleaning fees will apply.",
        tents:
          "Setting up tents, trailers, or other recreational vehicles on the property is not allowed.",
        pets: "Pets are not allowed on the grounds or in the cabin.",
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
      registration: "Quebec Registration Number: 308255",
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
        "Découvrez la sérénité dans notre douillet micro-chalet niché dans la forêt.",
      cta: "Réservez Votre Séjour",
    },
    about: {
      title: "Notre Chalet",
      description:
        "Le Chalet La Petite Bûche est un charmant micro-chalet offrant une expérience de relaxation en nature. Construit avec des matériaux durables et confortable toute l'année, notre chalet offre l'équilibre parfait entre charme rustique et confort moderne.",
    },
    amenities: {
      title: "Commodités",
      subtitle: "Tout ce dont vous avez besoin pour un séjour confortable.",
      wifi: "Internet Fibre haute vitesse",
      heating: "Chauffage et climatisation ",
      kitchen: "Cuisine entièrement équipée ",
      tv: "Télévision intelligente & jeux de société",
      porch: "Terrasse privée avec Spa",
      firepit: "Foyer extérieur",
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
          "Tentez votre chance au lac du village, ensemensé de truites.",
      },
      wildlife: {
        title: "Observation de la Faune",
        description:
          "Repérez des cerfs, des suisses et diverses espèces d'oiseaux autour de la propriété.",
      },
    },
    location: {
      title: "Emplacement",
      description:
        "Niché dans une forêt paisible, à quelques minutes en voiture du village où vous retrouverez une micro-brasserie avec restaurant, un casse-croûte, une boutique d'articles de chasse et pêche et de plein-air, une épicerie, une pharmacie et quelques autres commodités.",
    },
    guests: {
      title: "Information pour les Invités",
      welcome: "Bienvenue au Chalet La Petite Bûche!",
      intro:
        "Nous sommes ravis que vous ayez choisi notre chalet pour votre escapade. Vous trouverez ici toutes les informations nécessaires pour un séjour confortable et agréable.",
      checkin: {
        title: "Arrivée et Départ",
        info: "Arrivée: 16h00 | Départ: 11h00",
        process:
          "L’entrée dans le chalet se fait de façon autonome, le code de la boite à clef vous sera communiqué avant votre arrivée.",
      },
      emergency: {
        title: "Contact",
        contact:
          "Pour les questions, veuillez utiliser le système de messagerie Airbnb. En cas d'urgence, appelez le 911.",
      },
      amenities: {
        title: "Commodités du Chalet",
        description:
          "Notre chalet est équipé de tout ce dont vous avez besoin pour un séjour confortable. L'eau vient d'un puit et est potable. Par contre, elle peut avoir un goût métallique. Vous pouvez utiliser le filtre Brita mis à votre disposition si vous préférez.",
      },
      rules: {
        title: "Règles de la Maison",
        smoking:
          "Interdiction de fumer à l'intérieur du chalet. Utilisez le cendrier extérieur situé sur la terrasse.",
        silence: `En tout temps, les occupants doivent cesser toute 
activité extérieure pouvant générer du bruit à partir de 23h00 jusqu’à 8h00 le 
lendemain matin.`,
        rince:
          "Veuillez vous rincer dans la douche avant d'utiliser le spa pour garder l'eau propre pour que tous puissent en profiter.",
        flora:
          "Veuillez respecter la faune et l'environnement naturel. Le sol de la forêt est fragile; évitez de marcher hors des sentiers. Profitez de la cueillette de bleuets en saison, mais ne cueillez pas d'autres plantes ou fleurs.",
        fire: "Feux d'artifices et feux à ciel ouvert interdits en tout temps (les feux le foyer extérieur sont permis)",
        dishes:
          "Bien nettoyer la vaisselle et la ranger dans avant de quitter le chalet.",
        grease:
          "Ne jetez pas de graisse de cuisson dans les éviers ou la toilette. Jetez-la à la poubelle.",
        glass:
          "Ne pas utiliser de verre ou coupe en verre dans le spa. Si vous échappez quelque chose dans le spa des frais de nettoyage seront applicables.",
        tents:
          "Il est interdit d’installer une tente ou tente-roulotte ou autre véhicule récréatif sur le terrain.",
        pets: "Les animaux de compagnie ne sont pas admis sur le terrain ni dans le chalet.",
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
      registration: "No. enregistrement Québec: 308255",
    },
  },
};
