import { useContext } from "react";
import { LanguageContext } from "../contexts/LanguageContext";
import { translations } from "../translations/translations";

function ContactComponent() {
  const context = useContext(LanguageContext);
  if (!context) {
    return null;
  }
  const { language } = context;

  const contact = translations[language].contact;

  return (
    <section
      id='contact'
      className='min-h-screen min-w-full py-50 px-6 bg-brand-bg text-white'
    >
      <h3 className='text-3xl font-bold mb-6 text-center'>{contact.heading}</h3>

      <div className='max-w-2xl mx-auto mb-12 text-center'>
        <p>{contact.text1}</p>
        <p>{contact.text2}</p>
      </div>

      <form
        className='max-w-md mx-auto flex flex-col gap-4'
        action='https://formsubmit.co/f1f5dddfcb8879ac51af158cede5744e'
        method='POST'
      >
        <div className='flex flex-col gap-2'>
          <label htmlFor='name' className='text-sm font-medium'>
            {contact.nameLabel}
          </label>
          <input
            type='text'
            id='name'
            name='name'
            placeholder={contact.namePlaceholder}
            required
            className='p-3 rounded bg-brand-surface-alt text-white placeholder-stone-300 focus:outline-none focus:ring-2 focus:ring-accent'
          />
        </div>

        <div className='flex flex-col gap-2'>
          <label htmlFor='email' className='text-sm font-medium'>
            {contact.emailLabel}
          </label>
          <input
            type='email'
            id='email'
            name='email'
            placeholder={contact.emailPlaceholder}
            required
            className='p-3 rounded bg-brand-surface-alt text-white placeholder-stone-300 focus:outline-none focus:ring-2 focus:ring-accent'
          />
        </div>

        <div className='flex flex-col gap-2'>
          <label htmlFor='message' className='text-sm font-medium'>
            {contact.messageLabel}
          </label>
          <textarea
            id='message'
            name='message'
            placeholder={contact.messagePlaceholder}
            required
            className='p-3 rounded bg-brand-surface-alt text-white placeholder-stone-300 focus:outline-none focus:ring-2 focus:ring-accent h-32 resize-none'
          ></textarea>
        </div>
        <button
          type='submit'
          className='rounded-full p-3 font-semibold text-black bg-accent hover:bg-white transition-colors'
        >
          {contact.buttonLabel}
        </button>
      </form>
    </section>
  );
}
export default ContactComponent;
