import { Mail } from "lucide-react"

export default function Footer() {
  const email = "alexia.hellsten@utb.ecutbildning.se"

  return (
    <footer className="bg-[#172025] text-white py-6 text-center bottom-0 w-full">
      <section className="flex flex-col md:flex-row justify-center md:justify-between mb-4 px-4">
        <div className="flex flex-col items-center md:items-start mb-4 md:mb-0">
            <a href={`mailto:${email}`} className="flex items-center gap-x-2 mb-1">
              <Mail className="h-5 w-5" />
              <h3 className="text-lg font-semibold">Let's get in touch!</h3>
            </a>
            <a href={`mailto:${email}`}><p>{email}</p></a>
        </div>

        <div className="text-center md:text-right">
          <p>
            Built with ❤️ by Alexia Hellsten &copy; {new Date().getFullYear()}
          </p>
        </div>
      </section>
    </footer>
  )
}
