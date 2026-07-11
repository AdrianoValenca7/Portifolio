import Header from "../../../components/header";
import Footer from "../../../components/footer";
import { FaGithub, FaStar, FaCodeBranch } from "react-icons/fa";

export default async function Projetos() {

    const resposta = await fetch('https://api.github.com/users/AdrianoValenca7/repos?sort=updated&direction=desc', {
        next: { revalidate: 3600 } 
    });
        
    const repositorios = await resposta.json();

    const meusProjetos = repositorios.filter(repo => !repo.fork);

    return (
        <div className="w-full min-h-screen flex flex-col overflow-x-hidden">
            <Header />
            <main className="flex-1 w-full max-w-7xl mx-auto px-6 md:px-12 py-32">
                
                <div className="text-center mb-16">
                    <h1 className="text-4xl md:text-5xl font-bold select-none mb-4">
                        Meus Projetos
                    </h1>
                    <p className="text-xl text-gray-500 font-bold">
                        Repositórios importados automaticamente do meu GitHub.
                    </p>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    
                    {meusProjetos.map((repo) => (
                        <div
                            key={repo.id} 
                            className="flex flex-col justify-between border-4 border-black bg-white p-6 transition-all duration-300 hover:-translate-y-2 hover:shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]"
                        >
                            <div>
                                <a 
                                    href={repo.html_url} 
                                    target="_blank" 
                                    rel="noopener noreferrer"
                                    className="text-2xl font-bold font-sans hover:underline flex items-center gap-2 mb-3 text-black"
                                >
                                    <FaGithub /> {repo.name}
                                </a>
                                
                                <p className="text-gray-600 font-sans mb-6 line-clamp-3 text-left">
                                    {repo.description || "Sem descrição no momento."}
                                </p>
                            </div>
                            
                            <div className="flex items-center justify-between mt-auto pt-4 border-t-2 border-gray-100">
                                <div className="flex items-center gap-2 text-sm font-bold font-sans text-black">

                                    <span className="w-3 h-3 rounded-full bg-black"></span>
                                    {repo.language || "Várias"}
                                </div>

                                <div className="flex items-center gap-4 text-gray-500 text-sm font-sans">
                                    <span className="flex items-center gap-1">
                                        <FaStar /> {repo.stargazers_count}
                                    </span>
                                    <span className="flex items-center gap-1">
                                        <FaCodeBranch /> {repo.forks_count}
                                    </span>
                                </div>
                            </div>
                        </div>
                    ))}
                    
                </div>
            </main>
            <Footer />
        </div>
    );
}