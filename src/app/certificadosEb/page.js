import Image from "next/image"; 
import Link from "next/link"; 
import { FaArrowLeft, FaDownload } from "react-icons/fa"; 

const meusCertificados = [
  {
    id: 1,
    titulo: "Formação de Oficiais - CPOR",
    descricao: "Certificado de conclusão do curso de formação pelo Centro de Preparação de Oficiais da Reserva, com atuação no Serviço de Intendência.",
    imagemCapa: "/img/cc/WhatsApp Image 2026-07-09 at 11.50.44 (2).jpeg",
    linkPdf: "/certificados/Certificado de Conclusão de Curso.pdf"
  },
  {
    id: 2,
    titulo: "Certificado de Honra ao Mérito",
    descricao: "Certificado ao mérito por meu comportamento exemplar e excelente desempenho dos encargos que me foram atribuídos.",
    imagemCapa: "/img/hm/WhatsApp Image 2026-07-09 at 11.50.44.jpeg",
    linkPdf: "/certificados/Certificado de Honra ao Mérito .pdf"
  },
  {
    id: 3,
    titulo: "Gestão de Almoxarifado",
    descricao: "Estágio setorial de gestão de almoxarifado.",
    imagemCapa: "/img/galmox/Captura de tela 2026-07-09 120359.png",
    linkPdf: "/certificados/galmox/2024.2___IEFEx___SEF___ESGA___Estágio_Setorial_de_Gestão_de_Almoxarifado-Certificado_de_conclusão_282162.pdf"
  },
  {
    id: 4,
    titulo: "Pregoeiro",
    descricao: "Estágio setorial de pregoeiro.",
    imagemCapa: "/img/preg/Captura de tela 2026-07-09 120606.png",
    linkPdf: "/certificados/preg/2024.2___IEFEx___SEF___ESFP__Estágio_Setorial_de_Formação_de_Pregoeiro-Certificado_de_Conclusão_284419.pdf"
  },
  {
    id: 5,
    titulo: "Auxiliar de Setor Financeiro",
    descricao: "Estágio setorial de auxiliar de setor financeiro.",
    imagemCapa: "/img/auxfin/Captura de tela 2026-07-09 120806.png",
    linkPdf: "/certificados/auxfin/2024.2___IEFEx___SEF___ESASF___Estágio_Setorial_para_Auxiliar_de_Setor_Financeiro-Certificado_de_conclusão_300944.pdf"
  },
  {
    id: 6,
    titulo: "Auxiliar de Almoxarifado",
    descricao: "Estágio setorial de auxiliar de almoxarifado.",
    imagemCapa: "/img/auxalmox/Captura de tela 2026-07-09 120941.png",
    linkPdf: "/certificados/auxalmox/2024.2___IEFEx___SEF__ESAA__Estágio_Setorial_para_Auxiliar_de_Almoxarifado-Certificado_de_conclusão_282153.pdf"
  },
  {
    id: 7,
    titulo: "Gestão de Estoque",
    descricao: "Estágio setorial de gestão de estoque.",
    imagemCapa: "/img/gestoque/Captura de tela 2026-07-09 121121.png",
    linkPdf: "/certificados/gestoque/2024.2___IEFEx___SEF___ESGE___Estágio_Setorial_de_Gestão_de_Estoques-Certificado_de_conclusão_281834 (1).pdf"
  },
  {
    id: 8,
    titulo: "Aquisições, Licitações e Contratos",
    descricao: "Estágio setorial de aquisições, licitações e contratos.",
    imagemCapa: "/img/lic/Captura de tela 2026-07-09 121246.png",
    linkPdf: "/certificados/lic/2024.2___IEFEx___SEF___ESALC___Estágio_Setorial_de_Aquisições,_Licitações_e_Contratos_(Lei_14.13321)-Certificado_de_Conclusão_281886.pdf"
  },
  {
    id: 9,
    titulo: "Gestão de Serviços de Aprovisionamento",
    descricao: "Estágio setorial de gestão de serviços de aprovisionamento.",
    imagemCapa: "/img/gaprov/Captura de tela 2026-07-09 121618.png",
    linkPdf: "/certificados/gaprov/2024.2___IEFEx___SEF___ESGSA___Estágio_Setorial_de_Gestão_de_Serviço_de_Aprovisionamento-Certificado_de_conclusão_277715.pdf"
  }
];

export default function CertificadosEb() {
    return(
        <div className="w-full min-h-screen flex flex-col overflow-x-hidden bg-[url('/img/camo-speckled-army-print-4jwhifv2ng29aoqj.jpg')] bg-cover bg-center bg-fixed text-white">
            
            <div className="w-full max-w-7xl mx-auto px-6 md:px-12 pt-8">
                <Link 
                    href="/profissional" 
                    className="inline-flex items-center gap-2 px-6 py-3 bg-white text-black font-bold font-sans border-4 border-black hover:-translate-y-1 hover:shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] transition-all duration-300 w-fit"
                >
                    <FaArrowLeft />
                    Voltar ao Portfólio
                </Link>
            </div>

            <main className="flex-1 w-full max-w-7xl mx-auto px-6 md:px-12 py-16 pb-32">
                
                <div className="text-center mb-16">
                    <h1 className="text-4xl md:text-5xl font-bold select-none mb-4 uppercase tracking-wider text-white drop-shadow-[0_4px_4px_rgba(0,0,0,1)]">
                        Meus Certificados do Exército
                    </h1>
                    <div className="w-24 h-1 bg-white mx-auto mt-6 shadow-[0_2px_4px_rgba(0,0,0,0.8)]"></div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          
                  {meusCertificados.map((cert) => (
                    <div 
                      key={cert.id} 
                      className="flex flex-col border-4 border-black bg-white text-black group transition-all duration-300 hover:-translate-y-2 hover:shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]"
                    >
                      
                      <div className="relative w-full h-56 md:h-64 border-b-4 border-black overflow-hidden bg-gray-100 p-4 flex items-center justify-center">
                        <div className="relative w-full h-full shadow-md transition-transform duration-500 group-hover:scale-105">
                          <Image
                            src={cert.imagemCapa}
                            alt={`Capa do certificado: ${cert.titulo}`}
                            fill
                            className="object-contain"
                          />
                        </div>
                      </div>

                      <div className="flex flex-col flex-1 p-6 text-left">
                        <h2 className="text-2xl font-bold font-sans text-black mb-2 leading-tight">
                          {cert.titulo}
                        </h2>
                        <p className="text-gray-600 font-sans text-sm md:text-base mb-6">
                          {cert.descricao}
                        </p>

                        <a 
                          href={cert.linkPdf}
                          download 
                          target="_blank"
                          rel="noopener noreferrer"
                          className="mt-auto flex items-center justify-center gap-2 px-4 py-3 bg-black text-white font-bold font-sans border-2 border-black hover:bg-white hover:text-black transition-all duration-300"
                        >
                          <FaDownload />
                          Baixar PDF
                        </a>
                      </div>

                    </div>
                  ))} 
                </div> 

            </main>
        </div>
    );
}