export const translations: Record<string, any> = {
  en: {
    menu: {
      about: "About",
      projects: "Projects",
      lia: "LIA",
      contact: "Contact",
    },
    hero: {
      title: "Hi! My name is Alexia",
      subtitle: "I'm a full-stack developer looking for a junior position in ",
      location: "📌 Stockholm, SE",
      period: "When? Fall of 2026",
      button: "View my projects",
    },
    about: {
      title: "About me",
      text: `
        I'm a 30 year old frontend development student from Stockholm, graduating this june.
        
        Currently I'm on my LIA period where I've been gaining valuable hands-on experience in developing real-world applications, which I'll be taking with me to my new role. 
        
        I'm looking for a junior position this fall, where I can continue to create company value and grow as a developer, preferrably working across the whole stack. 
        
        The reason I fell in love with programming was because it's fun and creative, and there is always something new to learn. I also care deeply about the human experience behind the tech. 

        When I’m not developing, I'm most likely sketching an art project, curating the perfect playlist or falling off the climbing wall (I guess you can't be good at everything, but I'm trying!).
      `,
      link: "Take a look at my projects!",
    },
    lia: {
      heading: "About LIA",
      sections: [
        {
          title: "LIA - What is it?",
          text: "LIA (Lärande i Arbete) is a practical training period for students. It lets us apply the theoretical knowledge we’ve learned by gaining real experience and building industry contacts.",
        },
        {
          title: "What can we as a company expect from you?",
          text: "That I see the LIA internship as an opportunity to deepen my skills and grow, while also contributing with my knowledge and perspective to your organisation. I certainly don’t know everything when I begin my LIA, which is why I’ll need regular support and feedback from my supervisor (approx. 2 hours/week) during the internship.",
        },
        {
          title: "About the LIA process",
          steps: [
            "I apply and we schedule a meeting to see if we're a good match.",
            "We start planning potential projects and you assign me a supervisor/mentor.",
            "I start the internship by working on real tasks and gaining hands-on experience while adding value to your team.",
            "My mentor and I have regular check-ins about my work and how I'm making progress during the internship.",
            "After 25 weeks, the internship ends with my supervisor writing a short evaluation and I write a final report about my experience.",
            "We celebrate the end of our collaboration and discuss future opportunities (hopefully a job offer is on the horizon!)",
          ],
        },
      ],
    },
    projects: {
      heading: "My Projects",
      subheading: "These are some projects I've been working on recently",
      items: [
        {
          title: "Portfolio Website",
          desc: "My personal portfolio website built with React, TypeScript and Tailwind CSS.",
          videodemo: "Video demo available on the GitHub page",
        },
        {
          title: "Freaky Fashion",
          desc: "A full-stack e-commerce store built with React, JavaScript, Tailwind CSS, Express and SQLite.",
          videodemo: "Video demo available on the GitHub page",
        },
        {
          title: "Airbnb Clone",
          desc: "A school project where we made a clone of Airbnb using Angular, TypeScript, Express and SQLite.",
          videodemo: "Video demo available on the GitHub page",
        },
      ],
    },
    techgarden: {
      heading: "My digital toolkit",
      subheading1: "Languages & Styling Frameworks:",
      subheading2: "Frameworks & Libraries:",
      subheading3: "Back-End, API & Databases:",
      subheading4: "Tools & Collaboration:",
      subheading5: "Testing:",
      subheading6: "Design & UX:",
      subheading7: "Templating & Static Site Generation:",
    },
    contact: {
      heading: "Contact me",
      text1: "Do you have any questions or want to collaborate on a project?",
      text2:
        "Feel free to reach out, I'll get back to you as soon as possible!",
      nameLabel: "Name",
      emailLabel: "Email",
      messageLabel: "Message",
      namePlaceholder: "Your name",
      emailPlaceholder: "Your email",
      messagePlaceholder: "Your message",
      buttonLabel: "Send",
    },
    footer: {
      contactHeading: "Let's get in touch!",
      email: "alexia.hellsten@utb.ecutbildning.se",
      copyright: (year: number) => `Built with ❤️ by Alexia Hellsten © ${year}`,
    },
  },
  sv: {
    menu: {
      about: "Om mig",
      projects: "Projekt",
      lia: "LIA",
      contact: "Kontakt",
    },
    hero: {
      title: "Hej! Jag heter Alexia",
      subtitle:
        "Jag är en fullstack-utvecklare som söker en junior position i ",
      location: "📌 Stockholm, SE",
      period: "När? Hösten 2026",
      button: "Se mina projekt",
    },
    about: {
      title: "Om mig",
      text: `
        Jag är en 30-årig student i frontendutveckling som bor i Stockholm och tar examen i juni.

        Just nu är jag ute på min LIA-period där jag får värdefull raktisk erfarenhet av att utveckla verkliga applikationer, som jag tar med mig in i min nya roll.

        Till hösten söker jag en junior position där jag kan fortsätta skapa värde för företag samtidigt som jag utvecklas inom rollen, gärna med möjlighet att arbeta över hela stacken.

        Jag fastnade för programmering för att det är roligt och kreativt, och att det alltid finns något nytt att lära sig. Samtidigt bryr jag mig mycket om människorna bakom tekniken och upplevelsen den skapar. 
        
        När jag inte utvecklar sitter jag troligtvis och skissar på ett konstprojekt, skapar den perfekta spellistan eller ramlar ned från klätterväggen (man kan ju inte vara bra på allt, men jag försöker!).
      `,
      link: "Ta en titt på mina projekt!",
    },
    lia: {
      heading: "Om LIA",
      sections: [
        {
          title: "LIA - Vad är det?",
          text: "LIA (Lärande i Arbete) är en praktisk utbildningsperiod för studenter som ger oss möjlighet att omsätta det teoretiska vi lärt oss under utbildningen i praktiken, genom att få verklig erfarenhet och bygga kontakter i branschen.",
        },
        {
          title: "Vad kan vi som företag förvänta oss av dig?",
          text: "Att jag ser LIA-praktiken som en chans för mig att lära mig mer och utvecklas, samtidigt som jag bidrar med mina kunskaper och perspektiv till er verksamhet. Jag kan långt ifrån allt när jag går ut på LIA och behöver få stöd och feedback från min handledare (ca 2 h/vecka) under praktikperioden.",
        },
        {
          title: "LIA-processen",
          steps: [
            "Jag ansöker och vi bokar in ett möte för att se om vi är en bra match.",
            "Vi börjar planera potentiella projekt och ni tilldelar mig en handledare/mentor.",
            "Jag börjar praktiken och får praktisk erfarenhet, samtidigt som jag bidrar med värde till ert team.",
            "Min handledare och jag har regelbundna avstämningar kring mitt arbete under praktikperioden.",
            "Efter 25 veckor avslutas praktiken, ni skriver en kort utvärdering om mitt arbete och jag skriver en rapport om mina erfarenheter.",
            "Vi firar avslutningen av vårt samarbete och diskuterar framtida möjligheter (förhoppningsvis med ett jobberbjudande!)",
          ],
        },
      ],
    },
    projects: {
      heading: "Mina Projekt",
      subheading: "Här är några projekt jag har arbetat på nyligen",
      items: [
        {
          title: "Portfolio",
          desc: "Min personliga portfoliohemsida skapad med React, TypeScript och Tailwind CSS.",
          videodemo: "Video demo finns på GitHub-sidan",
        },
        {
          title: "Freaky Fashion",
          desc: "En fullstack e-handelsbutik byggd med React, JavaScript, Tailwind CSS, Express och SQLite.",
          videodemo: "Video demo finns på GitHub-sidan",
        },
        {
          title: "Airbnb-klon",
          desc: "Ett skolprojekt där vi skapade en klon av Airbnb med Angular, TypeScript, Express och SQLite.",
          videodemo: "Video demo finns på GitHub-sidan",
        },
      ],
    },
    contact: {
      heading: "Kontakta mig",
      text1: "Har du några frågor eller vill samarbeta på ett projekt?",
      text2: "Hör gärna av er så återkommer jag så snart jag kan!",
      nameLabel: "Namn",
      emailLabel: "Email",
      messageLabel: "Meddelande",
      namePlaceholder: "Ditt namn",
      emailPlaceholder: "Din email",
      messagePlaceholder: "Ditt meddelande",
      buttonLabel: "Skicka",
    },
    footer: {
      contactHeading: "Kontakta mig!",
      email: "alexia.hellsten@utb.ecutbildning.se",
      copyright: (year: number) => `Byggd med ❤️ av Alexia Hellsten © ${year}`,
    },
    techgarden: {
      heading: "Min digitala verktygslåda",
      subheading1: "Språk & Stilmallar:",
      subheading2: "Ramverk och bibliotek:",
      subheading3: "Back-End, API & Databaser:",
      subheading4: "Verktyg & Samarbete:",
      subheading5: "Testning:",
      subheading6: "Design & UX:",
      subheading7: "Templating & Statiska Webbplatser:",
    },
  },
};
export default translations;
