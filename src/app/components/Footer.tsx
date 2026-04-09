import { BrandLogo } from "./Header";

const imgFinalImage = "/footer-airplane.jpg";

export function Footer() {
  return (
    <footer className="relative w-full pt-[240px] flex flex-col items-center">

      {/* Seção escura do footer */}
      <div className="bg-[#1c2024] h-[480px] relative w-full flex items-end">
        <div className="flex items-end justify-between p-[64px] w-full h-full">

          {/* Coluna esquerda — logo, endereço, contato */}
          <div className="flex flex-col gap-[32px] w-[380px]">
            <div className="flex flex-col gap-[24px]">
              <BrandLogo />
              <p className="text-[12px] font-light leading-[16px] tracking-[0.04px] text-white">
                EQN 110/111, Asa Norte, 70.753-400. They also have a consórcio
                contact point near BRB at Brasília/DF, CEP: 70.390-020
              </p>
            </div>

            {/* Telefone e E-mail — labels invisíveis (mesma cor do fundo), conforme Figma */}
            <div className="flex items-start justify-between w-full">
              <div className="flex flex-col gap-[7px] w-[180px]">
                {/* Label "Telefone" usa tokens/text/heading = #1c2024 → invisível no fundo escuro */}
                <p className="text-[18px] font-normal leading-[26px] tracking-[-0.04px] whitespace-nowrap" style={{ color: "#1c2024" }}>
                  Telefone
                </p>
                <p className="text-[12px] font-light leading-[16px] tracking-[0.04px] text-white whitespace-nowrap">
                  (61) 3314-1279
                </p>
              </div>
              <div className="flex flex-col gap-[7px] w-[180px]">
                {/* Label "E-mail" usa tokens/text/heading = #1c2024 → invisível no fundo escuro */}
                <p className="text-[18px] font-normal leading-[26px] tracking-[-0.04px] whitespace-nowrap" style={{ color: "#1c2024" }}>
                  E-mail
                </p>
                <p className="text-[12px] font-light leading-[16px] tracking-[0.04px] text-white whitespace-nowrap">
                  contato@bancorbras.com.br
                </p>
              </div>
            </div>
          </div>

          {/* Três colunas de links */}
          <div className="flex gap-[32px]">
            {/* Minha Conta */}
            <div className="flex flex-col gap-[7px] w-[200px]">
              {/* Header invisível — tokens/text/heading = #1c2024 no fundo escuro */}
              <p className="text-[18px] font-normal leading-[26px] tracking-[-0.04px] whitespace-nowrap" style={{ color: "#1c2024" }}>
                Minha Conta
              </p>
              <p className="text-[12px] font-light leading-[16px] tracking-[0.04px] text-white whitespace-nowrap">Meu Perfil</p>
              <p className="text-[12px] font-light leading-[16px] tracking-[0.04px] text-white whitespace-nowrap">Minhas Viagens</p>
              <p className="text-[12px] font-light leading-[16px] tracking-[0.04px] text-white whitespace-nowrap">Deletar minha conta</p>
            </div>

            {/* Somos a Bancorbrás */}
            <div className="flex flex-col gap-[7px] w-[200px]">
              <p className="text-[18px] font-normal leading-[26px] tracking-[-0.04px] whitespace-nowrap" style={{ color: "#1c2024" }}>
                Somos a Bancorbrás
              </p>
              <p className="text-[12px] font-light leading-[16px] tracking-[0.04px] text-white whitespace-nowrap">FAQs</p>
              <p className="text-[12px] font-light leading-[16px] tracking-[0.04px] text-white whitespace-nowrap">Quem Somos</p>
              <p className="text-[12px] font-light leading-[16px] tracking-[0.04px] text-white whitespace-nowrap">Contato com a imprensa</p>
            </div>

            {/* Compra Segura */}
            <div className="flex flex-col gap-[7px] w-[200px]">
              <p className="text-[18px] font-normal leading-[26px] tracking-[-0.04px] whitespace-nowrap" style={{ color: "#1c2024" }}>
                Compra Segura
              </p>
              <p className="text-[12px] font-light leading-[16px] tracking-[0.04px] text-white whitespace-nowrap">Termos e Condições</p>
              <p className="text-[12px] font-light leading-[16px] tracking-[0.04px] text-white whitespace-nowrap">Política de Privacidade</p>
              <p className="text-[12px] font-light leading-[16px] tracking-[0.04px] text-white whitespace-nowrap">Prevenções a Fraude</p>
            </div>
          </div>

        </div>
      </div>

      {/* Banner do avião — posicionado absolutamente sobre o topo do footer */}
      <div
        className="absolute flex flex-col gap-[32px] h-[320px] items-start justify-center left-1/2 -translate-x-1/2 p-[32px] top-[80px] w-[1312px]"
        style={{ borderRadius: "16px", overflow: "hidden", border: "1px solid #d9d9e0" }}
      >
        {/* Imagem de fundo — object-fit cover centralizada */}
        <img
          alt=""
          className="absolute inset-0 w-full h-full pointer-events-none"
          style={{ objectFit: "cover", objectPosition: "center" }}
          src={imgFinalImage}
        />

        {/* Conteúdo sobre a imagem */}
        <div className="relative z-10 flex flex-col gap-[32px] items-start">
          <div className="text-white">
            <p className="text-[35px] font-medium leading-[40px] tracking-[-0.16px]">Encontre as</p>
            <p className="text-[35px] font-medium leading-[40px] tracking-[-0.16px]">melhores passagens</p>
            <p className="text-[35px] font-medium leading-[40px] tracking-[-0.16px]">para sua viagem</p>
          </div>
          <button className="flex h-[32px] items-center justify-center rounded-full bg-primary px-[12px] text-[14px] font-medium text-white hover:opacity-90 transition-opacity">
            Pesquisar Passagens
          </button>
        </div>
      </div>

    </footer>
  );
}
