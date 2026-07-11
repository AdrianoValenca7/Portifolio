import Image from "next/image";
import Footer from "../../components/footer";
import Header from "../../components/header";
import BotaoCurriculo from "../../components/botaoCurriculo";

export default function Home() {
  return (
    <div className="w-full min-h-screen flex flex-col bg-white">
      <Header />
      <main className="max-w-6xl w-full mx-auto flex flex-col md:flex-row items-center justify-center flex-1 px-6 gap-12 py-10">
        
        <div className="relative w-64 h-64 md:w-80 md:h-80 flex-shrink-0 overflow-hidden rounded-full shadow-xl border-4 border-black">
          <Image
            src="/img/Gemini_Generated_Image_gsch64gsch64gsch.png"
            alt="Minha foto de perfil"
            fill
            className="object-cover object-[60%_45%] scale-125 pt-2" 
            priority
          />
        </div>
        
        <div className="flex flex-col items-center md:items-start text-center md:text-left gap-4">
          
          <h1 className="font-bold text-5xl text-black select-none">
            Adriano Valença
          </h1>
          
          <div className="text-gray-600 text-xl md:text-2xl font-sans">
            <p>Estudante de Sistemas para a Internet.</p>
            <p>Iniciando na carreira de Dev e buscando me aperfeiçoar.</p>
          </div>
          
          <div className="mt-4">
            <BotaoCurriculo />
          </div>

        </div>

      </main>
      
      <Footer />
    </div>
  );
}