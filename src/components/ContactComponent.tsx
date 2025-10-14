import { useContext } from "react"
import { LanguageContext } from "../contexts/LanguageContext" 
import { translations } from "../translations/translations";

function ContactComponent() {
  const context = useContext(LanguageContext);
  if (!context) {
    return null;
  }
  const { language } = context;

  const contact = translations[language].contact;

  // TODO: Uppdatera formuläret så att det skickar email via formspree + översätt till svenska
  return (
    <section id="contact" className="min-h-screen min-w-full py-50 px-6 bg-[#172025] text-white">
    <h3 className="text-3xl font-bold mb-6 text-center">{contact.heading}</h3>

    <div className="max-w-2xl mx-auto mb-12 text-center">
      <p>{contact.text1}</p>
      <p>{contact.text2}</p>
    </div>

      <form className="max-w-md mx-auto flex flex-col gap-4">
        <div className="flex flex-col gap-2">
          <label htmlFor="name" className="text-sm font-medium">
            Name
          </label>
          <input
            type="text"
            id="name"
            name="name"
            placeholder="Your name"
            required
            className="p-3 rounded bg-[#2f3e46] text-white placeholder-stone-300 focus:outline-none focus:ring-2 focus:ring-[#ef798a]"
          />
        </div>
        
        <div className="flex flex-col gap-2">
          <label htmlFor="email" className="text-sm font-medium">
            Email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            placeholder="Your email"
            required
            className="p-3 rounded bg-[#2f3e46] text-white placeholder-stone-300 focus:outline-none focus:ring-2 focus:ring-[#ef798a]"
          />
        </div>
        
        <div className="flex flex-col gap-2">
          <label htmlFor="message" className="text-sm font-medium">
            Message
          </label>
          <textarea
            id="message"
            name="message"
            placeholder="Your message"
            required
            className="p-3 rounded bg-[#2f3e46] text-white placeholder-stone-300 focus:outline-none focus:ring-2 focus:ring-[#ef798a] h-32 resize-none"
          ></textarea>
        </div>
        <button
          type="submit"
          className="rounded-full p-3 font-semibold text-black bg-red-300 hover:bg-[#FFFFFF] transition-colors"
        >
          Send
        </button>
      </form>
    </section>
  )
}
export default ContactComponent;