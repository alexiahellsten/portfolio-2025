export const translations: Record<string, any> = {
  en: {
    meta: {
      titles: {
        home: "Alexia Hellsten | Fullstack Developer - Stockholm",
        about: "About | Alexia Hellsten",
        projects: "Projects | Alexia Hellsten",
        contact: "Contact | Alexia Hellsten",
        notFound: "Page not found | Alexia Hellsten",
      },
    },
    menu: {
      about: "About",
      projects: "Projects",
      contact: "Contact",
      navAriaLabel: "Main navigation",
      toggleMenu: "Toggle menu",
      switchLanguage: "Switch language to Swedish",
    },
    hero: {
      badge: "Portfolio / 2026",
      title: "Hi! My name is Alexia",
      subtitle: "I'm a fullstack developer looking for a junior position.",
      location: "Stockholm, SE",
      availability: "Available now",
      button: "View my projects",
    },
    about: {
      label: "About me",
      title: "Fullstack developer based in Stockholm",
      highlights: [
        "I graduated from EC Utbildning's Front End Developer program in June 2026.",
        "I worked on a real world application during a 6-month LIA internship at Hitract.",
        "I care deeply about accessible, human focused products and user experiences.",
        "I'm looking for a junior role where I can continue to grow while contributing across the stack.",
      ],
      aside:
        "Outside of code, I'm usually found working on a creative project, making the perfect playlist or solving problems on the climbing wall.",
      link: "View my projects",
    },
    projects: {
      label: "Selected works",
      heading: "My Projects",
      subheading: "These are some projects I've been working on recently",
      githubAria: (title: string) =>
        `View ${title} on GitHub (opens in new tab)`,
      demoAria: (title: string) => `View ${title} live demo (opens in new tab)`,
      items: [
        {
          title: "Portfolio Website",
          desc: "My personal portfolio website built with React, TypeScript and Tailwind CSS.",
          imageAlt: "Screenshot of the portfolio website homepage",
          GithubText: "GitHub",
          demoText: "Demo",
        },
        {
          title: "Freaky Fashion",
          desc: "A fullstack e-commerce store built with React, JavaScript, Tailwind CSS, Express and SQLite.",
          imageAlt: "Screenshot of the Freaky Fashion e-commerce storefront",
          GithubText: "GitHub",
          demoText: "Demo",
        },
        {
          title: "Airbnb Clone",
          desc: "A school project where we made a clone of Airbnb using Angular, TypeScript, Express and SQLite.",
          imageAlt: "Screenshot of the Airbnb clone app",
          GithubText: "GitHub",
          demoText: "Demo",
        },
      ],
    },
    techgarden: {
      label: "Tech garden",
      heading: "My digital toolkit",
      intro: "An overview of the languages, tools, and workflows that I use.",
      groups: [
        {
          title: "Frontend",
          items: [
            "JavaScript",
            "TypeScript",
            "HTML",
            "CSS",
            "Sass",
            "Tailwind CSS",
            "Material UI",
            "React",
            "Next.js",
            "Angular",
          ],
        },
        {
          title: "Backend & data",
          items: [
            "Node.js (Express)",
            "ASP.NET Core",
            "C#",
            "MongoDB (Mongoose)",
            "SQLite",
          ],
        },
        {
          title: "Tools & workflow",
          items: [
            "Git",
            "GitHub",
            "Azure DevOps",
            "Postman",
            "Cypress",
            "Figma",
          ],
        },
        {
          title: "Content & templating",
          items: ["Eleventy (11ty)", "Handlebars", "Nunjucks", "EJS"],
        },
      ],
    },
    services: {
      label: "What I do",
      title: "Strengths I bring to a team",
      contactText:
        "An overview of how I work and things I focus on as a developer.",
      cards: [
        {
          title: "Fullstack development",
          text: "I build modern web applications across the stack, from React, Next.js, and Angular on the frontend to Node.js, ASP.NET Core, SQL and C# on the backend.",
        },
        {
          title: "Accessible UI",
          text: "I design and build interfaces that are clear, usable, and accessible so that more people can actually use what we ship.",
        },
        {
          title: "Collaboration & learning",
          text: "I learn quickly, communicate clearly, and enjoy working with others to solve real problems and improve over time.",
        },
      ],
    },
    contact: {
      label: "Let's connect",
      formTitle: "Send a message",
      heading: "Contact me",
      text1: "Do you have any questions or want to collaborate on a project?",
      text2:
        "Feel free to reach out and I'll get back to you as soon as possible!",
      nameLabel: "Name",
      emailLabel: "Email",
      messageLabel: "Message",
      namePlaceholder: "Your name",
      emailPlaceholder: "Your email",
      messagePlaceholder: "Your message",
      buttonLabel: "Send",
      formAriaLabel: "Contact form",
    },
    footer: {
      contactHeading: "Contact",
      email: "hello@alexiahellsten.dev",
      copyright: (year: number) =>
        `Built with {heart} by Alexia Hellsten © ${year}`,
      emailAria: "Send an email",
      socialAria: "Social media links",
      githubAria: "View Alexia Hellsten on GitHub (opens in new tab)",
      linkedinAria: "View Alexia Hellsten on LinkedIn (opens in new tab)",
    },
    notFound: {
      label: "404",
      heading: "Page not found",
      text: "The page you're looking for does not exist or may have been moved.",
      button: "Back to home",
    },
  },
  sv: {
    meta: {
      titles: {
        home: "Alexia Hellsten | Fullstackutvecklare - Stockholm",
        about: "Om mig | Alexia Hellsten",
        projects: "Projekt | Alexia Hellsten",
        contact: "Kontakt | Alexia Hellsten",
        notFound: "Sidan hittades inte | Alexia Hellsten",
      },
    },
    menu: {
      about: "Om mig",
      projects: "Projekt",
      contact: "Kontakt",
      navAriaLabel: "Huvudnavigering",
      toggleMenu: "Öppna eller stäng meny",
      switchLanguage: "Byt språk till engelska",
    },
    hero: {
      badge: "Portfolio / 2026",
      title: "Hej! Jag heter Alexia",
      subtitle: "Jag är en fullstackutvecklare som söker en junior position.",
      location: "Stockholm, SE",
      availability: "Tillgänglig nu",
      button: "Se mina projekt",
    },
    about: {
      label: "Om mig",
      title: "Fullstackutvecklare baserad i Stockholm",
      highlights: [
        "Jag tog examen från EC Utbildnings 2-åriga program i Frontendutveckling i juni 2026.",
        "Jag arbetade med en verklig applikation under en 6-månaders LIA-praktik på Hitract.",
        "Jag lägger stort värde i att skapa tillgängliga produkter som fokuserar på människan och användarupplevelsen.",
        "Just nu söker jag en junior roll där jag kan fortsätta växa och bidra över hela stacken.",
      ],
      aside:
        "När jag inte kodar hittar du mig oftast med ett kreativt projekt, skapandes den perfekta spellistan eller upptagen med att lösa problem på klätterväggen.",
      link: "Se mina projekt",
    },
    projects: {
      label: "Utvalda arbeten",
      heading: "Mina Projekt",
      subheading: "Här är några projekt jag har arbetat på nyligen",
      githubAria: (title: string) =>
        `Visa ${title} på GitHub (öppnas i ny flik)`,
      demoAria: (title: string) =>
        `Visa live-demo av ${title} (öppnas i ny flik)`,
      items: [
        {
          title: "Portfolio",
          desc: "Min personliga portfoliohemsida skapad med React, TypeScript och Tailwind CSS.",
          imageAlt: "Bild av portfoliohemsidans startsida",
          GithubText: "GitHub",
          demoText: "Demo",
        },
        {
          title: "Freaky Fashion",
          desc: "En fullstack e-handelsbutik byggd med React, JavaScript, Tailwind CSS, Express och SQLite.",
          imageAlt: "Bild av e-handelsbutiken Freaky Fashion",
          GithubText: "GitHub",
          demoText: "Demo",
        },
        {
          title: "Airbnb-klon",
          desc: "Ett skolprojekt där vi skapade en klon av Airbnb med Angular, TypeScript, Express och SQLite.",
          imageAlt: "Bild av Airbnb-klonen",
          GithubText: "GitHub",
          demoText: "Demo",
        },
      ],
    },
    services: {
      label: "Det här gör jag",
      title: "Styrkor jag bidrar med",
      contactText:
        "En översikt av hur jag arbetar och vad jag fokuserar på som utvecklare.",
      cards: [
        {
          title: "Fullstackutveckling",
          text: "Jag bygger moderna webbapplikationer över hela stacken, från React, Next.js och Angular i frontend till Node.js, ASP.NET Core, SQL och C# i backend.",
        },
        {
          title: "Tillgänglig UI",
          text: "Jag designar och bygger gränssnitt som är tydliga, användbara och tillgängliga så att fler faktiskt kan använda det vi levererar.",
        },
        {
          title: "Samarbete & lärande",
          text: "Jag lär mig snabbt, kommunicerar tydligt och trivs med att lösa verkliga problem tillsammans med andra.",
        },
      ],
    },
    contact: {
      label: "Kontakta mig",
      formTitle: "Skicka ett meddelande",
      heading: "Kontakta mig",
      text1: "Har du några frågor eller vill samarbeta på ett projekt?",
      text2: "Hör gärna av dig så återkommer jag så snart jag kan!",
      nameLabel: "Namn",
      emailLabel: "Email",
      messageLabel: "Meddelande",
      namePlaceholder: "Ditt namn",
      emailPlaceholder: "Din email",
      messagePlaceholder: "Ditt meddelande",
      buttonLabel: "Skicka",
      formAriaLabel: "Kontaktformulär",
    },
    footer: {
      contactHeading: "Kontakt",
      email: "hello@alexiahellsten.dev",
      copyright: (year: number) =>
        `Built with {heart} by Alexia Hellsten © ${year}`,
      emailAria: "Skicka e-post",
      socialAria: "Länkar till sociala medier",
      githubAria: "Visa Alexia Hellsten på GitHub (öppnas i ny flik)",
      linkedinAria: "Visa Alexia Hellsten på LinkedIn (öppnas i ny flik)",
    },
    notFound: {
      label: "404",
      heading: "Sidan hittades inte",
      text: "Sidan du letar efter finns inte eller kan ha flyttats.",
      button: "Tillbaka till startsidan",
    },
    techgarden: {
      label: "Tech garden",
      heading: "Min digitala verktygslåda",
      intro:
        "En översikt över de språk, verktyg och arbetsflöden jag använder mig av.",
      groups: [
        {
          title: "Frontend",
          items: [
            "JavaScript",
            "TypeScript",
            "HTML",
            "CSS",
            "Sass",
            "Tailwind CSS",
            "Material UI",
            "React",
            "Next.js",
            "Angular",
          ],
        },
        {
          title: "Backend & data",
          items: [
            "Node.js (Express)",
            "ASP.NET Core",
            "C#",
            "MongoDB (Mongoose)",
            "SQLite",
          ],
        },
        {
          title: "Verktyg & arbetsflöde",
          items: [
            "Git",
            "GitHub",
            "Azure DevOps",
            "Postman",
            "Cypress",
            "Figma",
          ],
        },
        {
          title: "Innehåll & templating",
          items: ["Eleventy (11ty)", "Handlebars", "Nunjucks", "EJS"],
        },
      ],
    },
  },
};
export default translations;
