import Link from "next/link";

export default function header(){
    return(
        <header className="fixed top-0 left-0 w-full bg-transparent text-gray-900 hover:bg-gray-500 hover:text-white transition-all duration-800 ease-in-out">
            <div className="max-w-5xl mx-auto px-6 h-20 flex items-center justify-between font-bold">
                <Link href="/" className="inline-block transition-transform duration-200 ease-out hover:scale-110">
                    Home
                </Link>
                <Link href="/academico" className="inline-block transition-transform duration-200 ease-out hover:scale-110">
                    Acadêmico
                </Link>
                <Link href="/profissional" className="inline-block transition-transform duration-200 ease-out hover:scale-110">
                    Profissional
                </Link>
                <Link href="/projetos" className="inline-block transition-transform duration-200 ease-out hover:scale-110">
                    Projetos
                </Link>
                <Link href="/sobre" className="inline-block transition-transform duration-200 ease-out hover:scale-110">
                    Sobre
                </Link>
            </div>
        </header>
        
    );
}