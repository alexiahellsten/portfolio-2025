import { useContext } from "react";
import { Link } from "react-router-dom";
import { LanguageContext } from "../contexts/LanguageContext";
// import { translations } from "../translations/translations";

function ServicesComponent() {
  const context = useContext(LanguageContext);
  if (!context) {
    return null;
  }
  const { language } = context;

  //   const services = translations[language].services;

  return (
    <section
      id='services'
      className='min-h-screen flex flex-col items-center justify-center bg-[#172025] text-white px-4 py-16'
    >
      <div className='mb-8 max-w-2xl text-center'>
        <h3 className='text-3xl md:text-4xl font-bold mb-8 text-center'>
          {/* {services.title} */}
          Tjänster jag erbjuder
        </h3>
        <p className='text-small'>Saknas den tjänst ni söker här?</p>
        <p>
          Kontakta mig så kan vi diskutera hur jag kan hjälpa er förverkliga era
          idéer.
        </p>
      </div>
      <article className='flex flex-col md:flex-row gap-10 mb-12 text-lg md:text-xl text-center'>
        <div className='flex flex-1 flex-col max-w-sm mx-auto bg-[#1e2a33] p-6 rounded-lg justify-center align-center'>
          <h4 className='font-semibold'>Webbutveckling</h4>
          <p className='text-base md:text-lg leading-relaxed whitespace-pre-line'>
            Jag utvecklar moderna webbplatser och fullstackapplikationer med
            tekniker som rör sig över hela stacken, från frontend med React,
            Next.js och Angular till backend med ASP.NET Core, C# eller Node.js.
          </p>
        </div>
        <div className='flex flex-1 flex-col max-w-sm mx-auto bg-[#1e2a33] p-6 rounded-lg justify-center align-center'>
          <h4 className='font-semibold'>UX och UI</h4>
          <p className='text-base md:text-lg leading-relaxed whitespace-pre-line'>
            Design och utveckling av användargränssnitt och webbplatser som är
            både visuellt tilltalande, funktionella och användarvänliga. Det är
            viktigt för mig att alla ska kunna ta del av innehållet på en
            webbplats.
          </p>
        </div>
        <div className='flex flex-1 flex-col max-w-sm mx-auto bg-[#1e2a33] p-6 rounded-lg justify-center align-center'>
          <h4 className='font-semibold'>Konsultation</h4>
          <p className='text-base md:text-lg leading-relaxed whitespace-pre-line'>
            Jag erbjuder rådgivning gällande er nuvarande hemsida samt tekniska
            lösningar anpassade för att möta era specifika behov. Oavsett om ni
            behöver hjälp med att förbättra prestanda, öka säkerheten eller
            implementera nya funktioner, så finns jag här för att ta er
            webbplats till nästa nivå.
          </p>
        </div>
      </article>

      <p className='max-w-2xl mx-auto text-base md:text-lg text-left leading-relaxed whitespace-pre-line'>
        {/* {services.text} */}
        {/* Jag erbjuder en rad tjänster inom utveckling, inklusive
        webbapplikationer, mobilappar och anpassade programvarulösningar.
        Oavsett om du behöver en enkel hemsida eller en komplex applikation, kan
        jag hjälpa dig att förverkliga dina idéer och skapa en produkt som
        uppfyller dina behov. */}
      </p>
      <Link to='/projects' className='text-red-300 mt-14'>
        {/* {services.link} */}
      </Link>
    </section>
  );
}

export default ServicesComponent;
