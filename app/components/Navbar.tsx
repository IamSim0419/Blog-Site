
import Link from "next/link"
import { FaYoutube, FaInstagram, FaGithub, FaTwitter } from "react-icons/fa"

const Navbar = () => {
  return (
    <nav className='bg-cyan-500 p-4 sticky top-0 drop-shadow-xl z-10'>
        <div className='prose prose-xl mx-auto flex justify-between flex-col md:flex-row'>
            <h1 className="text-3xl font-bold text-slate-50 grid place-content-center mb-4 md:mb-0">
            <Link 
                className="text-slate-50 no-underline hover:text-slate-300"
                href="/">
                    Mio Imada
            </Link>
            </h1>
            <div className="flex flex-row justify-center items-center md:justify-evenly align-middle gap-4 text-slate-50 text-3xl lg:text-3xl">
                <Link 
                    className="text-red-600 hover:opacity-80"
                    href="https://youtu.be/H-3vZiB3xJI?si=IV_lN9V_-u0M7RtA"
                >
                    <FaYoutube />
                </Link>
                <Link
                    className="text-slate-200 hover:opacity:80"
                    href="https://www.instagram.com/imada_mio/?hl=en"
                >
                    <FaInstagram />
                </Link>
                <Link
                    className="text-slate-200 hover:opacity-80"
                    href="#"
                >
                    <FaGithub />
                </Link>
                <Link
                    className="text-blue-500 hover:opacity-80"
                    href="https://twitter.com/imada0305_mio?lang=en"
                >
                    <FaTwitter />
                </Link>
            </div>
        </div>
    </nav>
  )
}

export default Navbar