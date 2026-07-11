import Image from "next/image";
import Header from "../../../components/header";
import Footer from "../../../components/footer";

export default function academico(){
    return(
        <div className="w-full min-h-screen flex flex-col overflow-x-hidden">
            <Header />
            <main className="flex-1 flex flex-col md:flex-row justify-between w-full px-8 md:px-20 gap-8">
              
              <div className="flex-1 flex flex-col justify-center items-start border-b md:border-b-0 md:border-r border-gray-100 py-10 md:py-0 md:pr-12">
  
                  <div className="mb-8 w-full">
                    <h1 className="text-4xl md:text-5xl font-bold text-gray-900 font-sans select-none leading-tight mb-2">
                      Universidade Católica de Pernambuco
                    </h1>
                    
                    <h2 className="text-2xl font-semibold text-gray-700 font-sans select-none mb-1">
                      Sistemas para a Internet
                    </h2>
                    
                    <p className="text-lg text-gray-500 font-sans select-none">
                      Atualmente cursando o 4º Período.
                    </p>
                  </div>

                  <div className="w-full">
                    <div className="relative w-full h-64 md:h-80 overflow-hidden rounded-2xl shadow-xl transition-transform hover:scale-[1.02] duration-300">
                      <Image
                        src="/img/vista-aerea.jpg" 
                        alt="Campus da Unicap"
                        fill
                        className="object-cover"
                      />
                    </div>
                    
                    <p className="mt-3 text-xs text-gray-400 font-sans text-right">
                      Imagem: <a href="https://portal.unicap.br/documents/475032/669018/vista-aerea.jpg/e546dd3b-c273-ea45-946c-531f3fb7653a?t=1604927704399" target="_blank" rel="noopener noreferrer" className="hover:text-gray-600 underline transition-colors">Acervo Unicap</a>
                    </p>
                  </div>

                </div>
        
              <div className="flex-1 flex flex-col items-center justify-center p-8 md:pr-8 text-left">

              <div className="flex-1 flex flex-col items-end justify-center p-8 md:pr-8">
                
                <div className="flex flex-col items-start text-left w-full max-w-md">
                  
                  <div className="mb-12 w-full">
                    <h2 className="text-3xl font-bold text-black font-sans select-none mb-6">
                      Matérias em Destaque
                    </h2>
                    <ul className="flex flex-col gap-3">
                      <li className="text-2xl font-sans text-gray-600 select-none hover:text-gray-900 transition-colors">
                        Banco de Dados Relacionais
                      </li>
                      <li className="text-2xl font-sans text-gray-600 select-none hover:text-gray-900 transition-colors">
                        Desenvolvimento Web (React)
                      </li>
                      <li className="text-2xl font-sans text-gray-600 select-none hover:text-gray-900 transition-colors">
                        Programação Orientada a Objetos (Java)
                      </li>
                      <li className="text-2xl font-sans text-gray-600 select-none hover:text-gray-900 transition-colors">
                        Lógica de Programação com Python
                      </li>
                    </ul>
                  </div>

                  <div className="w-full">
                    <h2 className="text-3xl font-bold text-black font-sans select-none mb-6">
                      Cursos e Certificações
                    </h2>
                    <ul className="flex flex-col gap-3">
                      <li className="text-xl font-sans text-gray-500 select-none">
                        
                      </li>
                      <li className="text-xl font-sans text-gray-500 select-none">
                        
                      </li>
                    </ul>
                  </div>

                </div>

              </div>

              </div>
              
            </main>
            <Footer />
        </div>
    );
}