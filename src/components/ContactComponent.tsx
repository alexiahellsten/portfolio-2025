import { useContext } from "react";
import { LanguageContext } from "../contexts/LanguageContext";
import { Button } from "./Button";
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
      className='section section-centered'
      aria-labelledby='contact-title'
    >
      <div className='section-inner'>
        <div className='grid gap-4 md:gap-6 lg:grid-cols-[1.05fr_0.95fr]'>
          <div className='flex flex-col justify-between rounded-3xl border border-brand-border bg-brand-surface p-5 md:p-6'>
            <div>
              <p className='mb-3 text-sm font-semibold uppercase tracking-[0.32em] text-accent-primary'>
                {contact.label}
              </p>
              <h1 id='contact-title' className='text-3xl font-bold sm:text-4xl'>
                {contact.heading}
              </h1>
              <div className='mt-6 space-y-2 text-base leading-relaxed text-brand-muted md:mt-8'>
                <p>{contact.text1}</p>
                <p>{contact.text2}</p>
              </div>
            </div>
          </div>

          <form
            className='rounded-3xl border border-brand-border bg-brand-surface p-5 md:p-6'
            action={import.meta.env.VITE_CONTACT_FORM_ENDPOINT}
            method='POST'
            aria-label={contact.formAriaLabel}
          >
            <div className='mb-6 md:mb-8'>
              <h2 className='text-sm font-semibold uppercase tracking-[0.32em] text-accent-primary'>
                {contact.formTitle}
              </h2>
            </div>

            <div className='space-y-4 md:space-y-5'>
              <div className='flex flex-col gap-2'>
                <label
                  htmlFor='name'
                  className='text-sm font-medium text-brand-fg'
                >
                  {contact.nameLabel}
                </label>
                <input
                  type='text'
                  id='name'
                  name='name'
                  placeholder={contact.namePlaceholder}
                  required
                  autoComplete='name'
                  className='rounded-2xl border border-brand-border bg-brand-surface-alt px-4 py-3 text-brand-fg placeholder:text-brand-muted focus:outline-none focus-visible:ring-2 focus-visible:ring-accent-primary'
                />
              </div>

              <div className='flex flex-col gap-2'>
                <label
                  htmlFor='email'
                  className='text-sm font-medium text-brand-fg'
                >
                  {contact.emailLabel}
                </label>
                <input
                  type='email'
                  id='email'
                  name='email'
                  placeholder={contact.emailPlaceholder}
                  required
                  autoComplete='email'
                  className='rounded-2xl border border-brand-border bg-brand-surface-alt px-4 py-3 text-brand-fg placeholder:text-brand-muted focus:outline-none focus-visible:ring-2 focus-visible:ring-accent-primary'
                />
              </div>

              <div className='flex flex-col gap-2'>
                <label
                  htmlFor='message'
                  className='text-sm font-medium text-brand-fg'
                >
                  {contact.messageLabel}
                </label>
                <textarea
                  id='message'
                  name='message'
                  placeholder={contact.messagePlaceholder}
                  required
                  className='min-h-40 resize-none rounded-2xl border border-brand-border bg-brand-surface-alt px-4 py-3 text-brand-fg placeholder:text-brand-muted focus:outline-none focus-visible:ring-2 focus-visible:ring-accent-primary'
                ></textarea>
              </div>
            </div>

            <Button type='submit' className='mt-8 w-full'>
              {contact.buttonLabel}
            </Button>
          </form>
        </div>
      </div>
    </section>
  );
}

export default ContactComponent;
