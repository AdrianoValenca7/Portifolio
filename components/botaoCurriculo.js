import { FaDownload } from "react-icons/fa";

export default function BotaoCurriculo({ link, titulo = "Currículo" }) {
  return (
    <a
      href={"/certificados/curriculo.pdf"}
      target="_blank"
      rel="noopener noreferrer"
      download // Sugere ao navegador que baixe o arquivo em vez de apenas abrir
      className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-gray-500 text-white font-bold font-sans border-2 border-transparent hover:bg-gray-600 hover:border-black hover:-translate-y-1 hover:shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] transition-all duration-300"
    >
      <FaDownload />
      Baixar {titulo}
    </a>
  );
}