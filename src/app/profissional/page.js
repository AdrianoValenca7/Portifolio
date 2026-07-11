import Image from "next/image";
import Header from "../../../components/header";
import Footer from "../../../components/footer";
import Link from "next/link";

export default function profissional(){
    return(
        <div className="w-full min-h-screen flex flex-col overflow-x-hidden">
            <Header />
            <main className="flex-1 flex flex-col items-center justify-center w-full max-w-6xl mx-auto px-6 py-20">
                <h1 className="text-4xl font-bold font-sans mb-16 select-none text-center">
                    Minha Trajetória
                </h1>
                <div className="flex flex-col md:flex-row items-start justify-center gap-8 w-full">
                <div className="group w-full md:w-72 bg-white border-4 border-black transition-all duration-500 ease-in-out hover:shadow-2xl">
                <div className="h-20 w-full flex items-center justify-center">
                    <h2 className="text-xl font-bold font-sans select-none">Construtora Ingazeira</h2>
                </div>
                <div className="max-h-0 opacity-0 overflow-hidden transition-all duration-500 ease-in-out group-hover:max-h-[600px] group-hover:opacity-100 flex flex-col items-center px-6 group-hover:pb-6">
                <p className="text-sm text-black-500 text-center mb-4 mt-2">
                    Aux. Administrativo
                </p>
                <p className="text-sm text-black-500 text-center mb-4 mt-2">
                    Jovem Aprendiz
                </p>
                <p className="text-sm text-gray-600 text-center mb-4 mt-2">
                    Atuava no contato com fornecedores, documentos e planilhas. Ficava responsável pela organização de materiais e documentos.
                </p>
                <p className="text-sm text-black-600 text-center mb-4 mt-2">
                    Fev 2023 - Fev 2024
                </p>
                </div>
                </div>
                <div className="group w-full md:w-72 bg-white border-4 border-black transition-all duration-500 ease-in-out hover:shadow-2xl">
            
            <div className="h-20 w-full flex items-center justify-center">
              <h2 className="text-xl font-bold font-sans select-none">Exército</h2>
            </div>

            <div className="max-h-0 opacity-0 overflow-hidden transition-all duration-500 ease-in-out group-hover:max-h-[600px] group-hover:opacity-100 flex flex-col items-center px-6 group-hover:pb-6">
              
              <div className="relative w-full h-52 mb-4 border-2 border-black rounded-md overflow-hidden">
                <Image
                  src="/img/WhatsApp Image 2026-07-04 at 18.27.28.jpeg" 
                  alt="Foto no Exército"
                  fill
                  className="object-cover"
                />
              </div>

              <h3 className="font-bold text-lg font-sans">Centro de Preparação de Oficiais da Reserva - CPOR</h3>
              <p className="text-sm text-gray-500 font-sans mb-3">1 ano de serviço</p>
              
              <p className="text-sm text-gray-700 font-sans text-center mb-6">
                Atuei no serviço de intendência, onde desenvolvi forte disciplina, capacidade de organização logística e liderança sob pressão.
              </p>

              <Link 
                href="/certificadosEb" className="w-full text-center px-4 py-2 bg-black text-white font-bold font-sans border-2 border-black hover:bg-white hover:text-black transition-colors duration-300"
              >
                Ver Certificados
              </Link>

            </div>
          </div>
                </div>
                
            </main>
            <Footer />
        </div>
    );
}