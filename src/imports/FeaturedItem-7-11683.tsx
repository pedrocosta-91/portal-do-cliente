import svgPaths from "./svg-rqe35p55jc";
import imgFeaturedItem from "figma:asset/c9dbd0b0db235d20d7d694558631950619ad45c7.png";

function ContentContainer() {
  return (
    <div className="bg-[#3e63dd] content-stretch flex items-center justify-center overflow-clip relative rounded-[9999px] shrink-0 size-[48px]" data-name="content-container">
      <div className="bg-[rgba(255,255,255,0)] relative shrink-0 size-[20px]" data-name="Objects / heart">
        <div className="absolute inset-[9.02%]" data-name="Vector">
          <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16.3935 16.3935">
            <path clipRule="evenodd" d={svgPaths.p1e54ee00} fill="var(--fill-0, white)" fillRule="evenodd" id="Vector" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function FeaturedItemInfoFrame() {
  return (
    <div className="content-stretch flex items-center justify-between relative shrink-0 w-full" data-name="Featured Item Info Frame">
      <div className="bg-[rgba(255,255,255,0)] content-stretch flex flex-col items-start relative shrink-0" data-name="Icon Button">
        <ContentContainer />
      </div>
      <div className="bg-[#3e63dd] content-stretch flex gap-[8px] items-center justify-center overflow-clip px-[10px] py-[4px] relative shrink-0" data-name="Badge">
        <div className="flex flex-col font-['Poppins:Medium',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[14px] text-white whitespace-nowrap">
          <p className="leading-[20px]">Ida e Volta</p>
        </div>
      </div>
    </div>
  );
}

function Frame() {
  return (
    <div className="content-stretch flex gap-[4px] items-center relative shrink-0">
      <div className="bg-[rgba(255,255,255,0)] content-stretch flex items-start relative shrink-0" data-name="Text">
        <p className="font-['Poppins:Regular',sans-serif] leading-[30px] not-italic relative shrink-0 text-[#60646c] text-[24px] tracking-[-0.1px] whitespace-nowrap">13.685</p>
      </div>
      <div className="bg-[rgba(255,255,255,0)] content-stretch flex items-start relative shrink-0" data-name="Text">
        <p className="font-['Poppins:Regular',sans-serif] leading-[16px] not-italic relative shrink-0 text-[#60646c] text-[12px] tracking-[0.04px] whitespace-nowrap">Tribz</p>
      </div>
    </div>
  );
}

function FeaturedItemTextFrame() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full" data-name="Featured Item Text Frame">
      <div className="bg-[rgba(255,255,255,0)] content-stretch flex items-start relative shrink-0 w-full" data-name="Heading">
        <p className="flex-[1_0_0] font-['Poppins:Medium',sans-serif] leading-[16px] min-h-px min-w-px not-italic relative text-[#1c2024] text-[12px] tracking-[0.04px]">Passagem</p>
      </div>
      <div className="bg-[rgba(255,255,255,0)] content-stretch flex items-start relative shrink-0 w-full" data-name="Heading">
        <p className="flex-[1_0_0] font-['Poppins:Medium',sans-serif] leading-[26px] min-h-px min-w-px not-italic relative text-[#1c2024] text-[18px] tracking-[-0.04px]">Voos para São Paulo</p>
      </div>
      <div className="bg-[rgba(255,255,255,0)] content-stretch flex items-start relative shrink-0 w-full" data-name="Text">
        <p className="flex-[1_0_0] font-['Poppins:Light',sans-serif] leading-[16px] min-h-px min-w-px not-italic relative text-[#60646c] text-[12px] tracking-[0.04px]">Saindo de Brasília</p>
      </div>
      <div className="bg-[rgba(255,255,255,0)] content-stretch flex items-start relative shrink-0" data-name="Text">
        <p className="font-['Poppins:Light',sans-serif] leading-[16px] not-italic relative shrink-0 text-[#60646c] text-[12px] tracking-[0.04px] whitespace-nowrap">Por Azul</p>
      </div>
      <div className="h-0 relative shrink-0 w-full">
        <div className="absolute inset-[-1px_0_0_0]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 252 1">
            <line id="Line 2" stroke="var(--stroke-0, #D9D9E0)" x2="252" y1="0.5" y2="0.5" />
          </svg>
        </div>
      </div>
      <div className="bg-[rgba(255,255,255,0)] content-stretch flex items-start relative shrink-0" data-name="Text">
        <p className="font-['Poppins:Regular',sans-serif] leading-[16px] not-italic relative shrink-0 text-[#60646c] text-[12px] tracking-[0.04px] whitespace-nowrap">Preço de ida e volta</p>
      </div>
      <Frame />
      <div className="h-0 relative shrink-0 w-full">
        <div className="absolute inset-[-1px_0_0_0]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 252 1">
            <line id="Line 2" stroke="var(--stroke-0, #D9D9E0)" x2="252" y1="0.5" y2="0.5" />
          </svg>
        </div>
      </div>
      <div className="bg-[rgba(255,255,255,0)] content-stretch flex items-start relative shrink-0" data-name="Text">
        <p className="font-['Poppins:Regular',sans-serif] leading-[16px] not-italic relative shrink-0 text-[#60646c] text-[12px] tracking-[0.04px] whitespace-nowrap">Data de referência:</p>
      </div>
      <div className="bg-[rgba(255,255,255,0)] content-stretch flex items-start relative shrink-0" data-name="Text">
        <p className="font-['Poppins:Light',sans-serif] leading-[16px] not-italic relative shrink-0 text-[#60646c] text-[12px] tracking-[0.04px] whitespace-nowrap">29 Abril 2026 - 19 Maio 2026</p>
      </div>
    </div>
  );
}

function FeaturedItemDetailsFrame() {
  return (
    <div className="bg-[rgba(255,255,255,0.8)] relative shrink-0 w-full" data-name="Featured Item Details Frame">
      <div className="content-stretch flex flex-col gap-[24px] items-start p-[16px] relative w-full">
        <FeaturedItemTextFrame />
      </div>
    </div>
  );
}

export default function FeaturedItem() {
  return (
    <div className="content-stretch flex flex-col items-start justify-between p-[24px] relative size-full" data-name="Featured Item">
      <div aria-hidden="true" className="absolute inset-0 pointer-events-none">
        <div className="absolute bg-[#e8e8ec] inset-0" />
        <img alt="" className="absolute max-w-none object-cover size-full" src={imgFeaturedItem} />
      </div>
      <FeaturedItemInfoFrame />
      <FeaturedItemDetailsFrame />
    </div>
  );
}