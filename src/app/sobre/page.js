import Header from "../../../components/header";
import Footer from "../../../components/footer";
import BotaoCurriculo from "../../../components/botaoCurriculo";

export default function Sobre() {
  return (
    // h-screen e overflow-hidden cravam o tamanho exato do monitor e removem a barra de rolagem
    <div className="w-full h-screen flex flex-col overflow-hidden bg-white text-black">
      <Header />

      {/* flex-1 ocupa o miolo. justify-center centraliza todo o conteúdo no meio da tela */}
      <main className="flex-1 w-full max-w-7xl mx-auto px-6 md:px-12 flex flex-col justify-center">
        
        <div className="mb-12">
          <h1 className="text-4xl md:text-6xl font-bold font-sans select-none mb-2">
            Sobre Mim
          </h1>
          <h2 className="text-xl md:text-2xl text-gray-500 font-bold font-sans">
            Disciplina militar aplicada ao desenvolvimento de software.
          </h2>
        </div>

        {/* 
          Grid divide o texto em 2 colunas no PC (md:grid-cols-2).
          Isso evita que o texto fique muito longo para baixo e crie barra de rolagem.
        */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16 text-lg md:text-xl font-sans text-gray-800 leading-relaxed text-justify">
          
          {/* LADO ESQUERDO: História e Base */}
          <div className="flex flex-col gap-6">
            <p>
              Sou Adriano, desenvolvedor full-stack em formação pelo curso de Sistemas para a Internet, focado em unir planejamento rigoroso e inovação tecnológica para criar aplicações eficientes.
            </p>
            <p>
              Minha base de caráter e liderança foi forjada no Exército Brasileiro (CPOR), atuando na intendência. Essa vivência desenvolveu em mim uma forte disciplina, organização logística e foco em resultados sob pressão — características que aplico até os dias de hoje.
            </p>
          </div>

          {/* LADO DIREITO: Tecnologia, Hobbies e Objetivos */}
          <div className="flex flex-col gap-10">
            <p>
              Atualmente estou buscando uma oportunida de por em prática o que aprendi no curso e me desenvolver cada vez mais como profissional na área.
            </p>
            <BotaoCurriculo />
          </div>

        </div>

      </main>

      <Footer />
    </div>
  );
}