import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

export default function Footer(){
    return(
        <footer className="fixed bottom-0 left-0 w-full bg-transparent text-gray-900 hover:bg-gray-500 hover:text-white transition-all duration-800 ease-in-out">
            
            <div className="mx-auto px-6 h-30 flex items-center gap-6 text-4xl flex items-center justify-center">

                <a 
                        href="https://github.com/AdrianoValenca7" 
                        target="_blank" 
                        rel="noopener noreferrer" 
                        className="hover:scale-125 transition-transform duration-200"
                        title="Meu GitHub"
                    >
                        <FaGithub />
                    </a>
                    
                    <a 
                        href="https://www.linkedin.com/in/adriano-valen%C3%A7a-8a1811349/" 
                        target="_blank" 
                        rel="noopener noreferrer" 
                        className="hover:scale-125 transition-transform duration-200"
                        title="Meu LinkedIn"
                    >
                        <FaLinkedin />
                    </a>
                    
                    <a 
                        href="mailto:adrianovalenca2004@gmail.com" 
                        className="hover:scale-125 transition-transform duration-200"
                        title="Me mande um E-mail"
                    >
                        <FaEnvelope />
                    </a>

            </div>
        </footer>
    );
}