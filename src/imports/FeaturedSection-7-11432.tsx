import svgPaths from "./svg-60854sz0xs";
import imgFeaturedItem from "figma:asset/c9dbd0b0db235d20d7d694558631950619ad45c7.png";
import imgFeaturedItem1 from "figma:asset/9a8aae4d55170af51681dc2e7379499420ea2a2a.png";
import imgFeaturedItem2 from "figma:asset/749e2db75f5beb5cdf1b48c8f3e7a948dae83f1e.png";
import imgFeaturedItem3 from "figma:asset/36152e306b7c847172b2bcef16202df868ea9808.png";

function ContentContainer() {
  return (
    <div className="relative rounded-[9999px] shrink-0 size-[32px]" data-name="content-container">
      <div className="content-stretch flex items-center justify-center overflow-clip relative rounded-[inherit] size-full">
        <div className="overflow-clip relative shrink-0 size-[16px]" data-name="Icon / chevron-left">
          <div className="absolute inset-[21.88%_34.38%]" data-name="Vector">
            <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 4.99992 8.99992">
              <path d={svgPaths.pec87f0} fill="var(--fill-0, #60646C)" id="Vector" />
            </svg>
          </div>
        </div>
      </div>
      <div aria-hidden="true" className="absolute border border-[rgba(0,8,48,0.27)] border-solid inset-0 pointer-events-none rounded-[9999px]" />
    </div>
  );
}

function ContentContainer1() {
  return (
    <div className="relative rounded-[9999px] shrink-0 size-[32px]" data-name="content-container">
      <div className="content-stretch flex items-center justify-center overflow-clip relative rounded-[inherit] size-full">
        <div className="overflow-clip relative shrink-0 size-[16px]" data-name="Icon / chevron-right">
          <div className="absolute inset-[21.88%_34.38%]" data-name="Vector">
            <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 4.99992 8.99992">
              <path d={svgPaths.p1957980} fill="var(--fill-0, #60646C)" id="Vector" />
            </svg>
          </div>
        </div>
      </div>
      <div aria-hidden="true" className="absolute border border-[rgba(0,8,48,0.27)] border-solid inset-0 pointer-events-none rounded-[9999px]" />
    </div>
  );
}

function SectionActions() {
  return (
    <div className="content-stretch flex gap-[16px] items-center relative shrink-0" data-name="Section Actions">
      <div className="bg-[rgba(255,255,255,0)] content-stretch flex flex-col items-start relative rounded-[9999px] shrink-0" data-name="Icon Button">
        <ContentContainer />
      </div>
      <div className="bg-[rgba(255,255,255,0)] content-stretch flex flex-col items-start relative rounded-[9999px] shrink-0" data-name="Icon Button">
        <ContentContainer1 />
      </div>
    </div>
  );
}

function SectionTitle() {
  return (
    <div className="content-stretch flex items-center justify-between relative shrink-0 w-full" data-name="Section Title">
      <div className="bg-[rgba(255,255,255,0)] content-stretch flex items-start relative shrink-0" data-name="Heading">
        <p className="font-['Poppins:Medium',sans-serif] leading-[40px] not-italic relative shrink-0 text-[#1c2024] text-[35px] tracking-[-0.16px] whitespace-nowrap">Passagens aéreas baratas para destinos populares</p>
      </div>
      <SectionActions />
    </div>
  );
}

function SectionTabs() {
  return (
    <div className="content-stretch flex gap-[16px] items-center relative shrink-0" data-name="Section Tabs">
      <div className="bg-[rgba(0,71,241,0.07)] content-stretch flex gap-[8px] h-[32px] items-center justify-center opacity-92 px-[12px] relative rounded-[9999px] shrink-0" data-name="Button">
        <div aria-hidden="true" className="absolute border border-[rgba(0,52,220,0.45)] border-solid inset-0 pointer-events-none rounded-[9999px]" />
        <div className="overflow-clip relative shrink-0 size-[16px]" data-name="Icon / layout-grid">
          <div className="absolute inset-[9.38%]" data-name="Vector">
            <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 13 13">
              <g id="Vector">
                <path d={svgPaths.p22d2dc00} fill="var(--fill-0, #002BB7)" fillOpacity="0.772549" />
                <path d={svgPaths.p4987580} fill="var(--fill-0, #002BB7)" fillOpacity="0.772549" />
                <path d={svgPaths.p279d1fa0} fill="var(--fill-0, #002BB7)" fillOpacity="0.772549" />
                <path d={svgPaths.p38866000} fill="var(--fill-0, #002BB7)" fillOpacity="0.772549" />
              </g>
            </svg>
          </div>
        </div>
        <div className="flex flex-col font-['Poppins:Medium',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[14px] text-[rgba(0,43,183,0.77)] whitespace-nowrap">
          <p className="leading-[20px]">Todos</p>
        </div>
      </div>
      <div className="content-stretch flex gap-[8px] h-[32px] items-center justify-center px-[12px] relative rounded-[9999px] shrink-0" data-name="Button">
        <div aria-hidden="true" className="absolute border border-[#d9d9e0] border-solid inset-0 pointer-events-none rounded-[9999px]" />
        <div className="overflow-clip relative shrink-0 size-[16px]" data-name="Icon / tree-palm">
          <div className="absolute inset-[9.38%_5.21%_5.21%_5.21%]" data-name="Vector">
            <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14.3333 13.6667">
              <g id="Vector">
                <path d={svgPaths.p3f112100} fill="var(--fill-0, #60646C)" />
                <path d={svgPaths.p2183500} fill="var(--fill-0, #60646C)" />
                <path d={svgPaths.pca56380} fill="var(--fill-0, #60646C)" />
                <path d={svgPaths.p9fcd080} fill="var(--fill-0, #60646C)" />
              </g>
            </svg>
          </div>
        </div>
        <div className="flex flex-col font-['Poppins:Medium',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#60646c] text-[14px] whitespace-nowrap">
          <p className="leading-[20px]">Praia</p>
        </div>
      </div>
      <div className="content-stretch flex gap-[8px] h-[32px] items-center justify-center px-[12px] relative rounded-[9999px] shrink-0" data-name="Button">
        <div aria-hidden="true" className="absolute border border-[#d9d9e0] border-solid inset-0 pointer-events-none rounded-[9999px]" />
        <div className="overflow-clip relative shrink-0 size-[16px]" data-name="Icon / building-2">
          <div className="absolute inset-[5.21%]" data-name="Vector">
            <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14.3333 14.3333">
              <g id="Vector">
                <path d={svgPaths.p2fb5b680} fill="var(--fill-0, #60646C)" />
                <path d={svgPaths.p30d67000} fill="var(--fill-0, #60646C)" />
                <path d={svgPaths.p20f1f780} fill="var(--fill-0, #60646C)" />
                <path d={svgPaths.p22a03e00} fill="var(--fill-0, #60646C)" />
                <path d={svgPaths.p2fe9580} fill="var(--fill-0, #60646C)" />
                <path d={svgPaths.p1a268af2} fill="var(--fill-0, #60646C)" />
                <path d={svgPaths.pbfd0770} fill="var(--fill-0, #60646C)" />
              </g>
            </svg>
          </div>
        </div>
        <div className="flex flex-col font-['Poppins:Medium',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#60646c] text-[14px] whitespace-nowrap">
          <p className="leading-[20px]">Urbano</p>
        </div>
      </div>
      <div className="content-stretch flex gap-[8px] h-[32px] items-center justify-center px-[12px] relative rounded-[9999px] shrink-0" data-name="Button">
        <div aria-hidden="true" className="absolute border border-[#d9d9e0] border-solid inset-0 pointer-events-none rounded-[9999px]" />
        <div className="overflow-clip relative shrink-0 size-[16px]" data-name="Icon / drama">
          <div className="absolute inset-[5.21%_5.21%_5.34%_5.04%]" data-name="Vector">
            <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14.36 14.3118">
              <g id="Vector">
                <path d={svgPaths.p383db400} fill="var(--fill-0, #60646C)" />
                <path d={svgPaths.p812900} fill="var(--fill-0, #60646C)" />
                <path d={svgPaths.p33fbec80} fill="var(--fill-0, #60646C)" />
                <path d={svgPaths.p9fb1980} fill="var(--fill-0, #60646C)" />
                <path d={svgPaths.p21144600} fill="var(--fill-0, #60646C)" />
                <path d={svgPaths.p1af1a380} fill="var(--fill-0, #60646C)" />
                <path d={svgPaths.p3193a00} fill="var(--fill-0, #60646C)" />
                <path d={svgPaths.p735cf0} fill="var(--fill-0, #60646C)" />
              </g>
            </svg>
          </div>
        </div>
        <div className="flex flex-col font-['Poppins:Medium',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#60646c] text-[14px] whitespace-nowrap">
          <p className="leading-[20px]">Cultural</p>
        </div>
      </div>
      <div className="content-stretch flex gap-[8px] h-[32px] items-center justify-center px-[12px] relative rounded-[9999px] shrink-0" data-name="Button">
        <div aria-hidden="true" className="absolute border border-[#d9d9e0] border-solid inset-0 pointer-events-none rounded-[9999px]" />
        <div className="overflow-clip relative shrink-0 size-[16px]" data-name="Icon / piggy-bank">
          <div className="absolute inset-[9.38%_5.21%_13.54%_5.21%]" data-name="Vector">
            <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14.3333 12.3333">
              <g id="Vector">
                <path d={svgPaths.p2746bf00} fill="var(--fill-0, #60646C)" />
                <path d={svgPaths.p35489000} fill="var(--fill-0, #60646C)" />
                <path d={svgPaths.p276bae80} fill="var(--fill-0, #60646C)" />
              </g>
            </svg>
          </div>
        </div>
        <div className="flex flex-col font-['Poppins:Medium',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#60646c] text-[14px] whitespace-nowrap">
          <p className="leading-[20px]">Econômico</p>
        </div>
      </div>
    </div>
  );
}

function SectionTitleFrame() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0 w-full" data-name="Section Title Frame">
      <SectionTitle />
      <SectionTabs />
    </div>
  );
}

function ContentContainer2() {
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
        <ContentContainer2 />
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

function FeaturedItem() {
  return (
    <div className="flex-[1_0_0] h-full min-h-px min-w-px relative" data-name="Featured Item">
      <div aria-hidden="true" className="absolute inset-0 pointer-events-none">
        <div className="absolute bg-[#e8e8ec] inset-0" />
        <img alt="" className="absolute max-w-none object-cover size-full" src={imgFeaturedItem} />
      </div>
      <div className="content-stretch flex flex-col items-start justify-between p-[24px] relative size-full">
        <FeaturedItemInfoFrame />
        <FeaturedItemDetailsFrame />
      </div>
    </div>
  );
}

function ContentContainer3() {
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

function FeaturedItemInfoFrame1() {
  return (
    <div className="content-stretch flex items-center justify-between relative shrink-0 w-full" data-name="Featured Item Info Frame">
      <div className="bg-[rgba(255,255,255,0)] content-stretch flex flex-col items-start relative shrink-0" data-name="Icon Button">
        <ContentContainer3 />
      </div>
      <div className="bg-[#3e63dd] content-stretch flex gap-[8px] items-center justify-center overflow-clip px-[10px] py-[4px] relative shrink-0" data-name="Badge">
        <div className="flex flex-col font-['Poppins:Medium',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[14px] text-white whitespace-nowrap">
          <p className="leading-[20px]">Ida e Volta</p>
        </div>
      </div>
    </div>
  );
}

function Frame1() {
  return (
    <div className="content-stretch flex gap-[4px] items-center relative shrink-0">
      <div className="bg-[rgba(255,255,255,0)] content-stretch flex items-start relative shrink-0" data-name="Text">
        <p className="font-['Poppins:Regular',sans-serif] leading-[30px] not-italic relative shrink-0 text-[#60646c] text-[24px] tracking-[-0.1px] whitespace-nowrap">25.987</p>
      </div>
      <div className="bg-[rgba(255,255,255,0)] content-stretch flex items-start relative shrink-0" data-name="Text">
        <p className="font-['Poppins:Regular',sans-serif] leading-[16px] not-italic relative shrink-0 text-[#60646c] text-[12px] tracking-[0.04px] whitespace-nowrap">Tribz</p>
      </div>
    </div>
  );
}

function FeaturedItemTextFrame1() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full" data-name="Featured Item Text Frame">
      <div className="bg-[rgba(255,255,255,0)] content-stretch flex items-start relative shrink-0 w-full" data-name="Heading">
        <p className="flex-[1_0_0] font-['Poppins:Medium',sans-serif] leading-[16px] min-h-px min-w-px not-italic relative text-[#1c2024] text-[12px] tracking-[0.04px]">Passagem</p>
      </div>
      <div className="bg-[rgba(255,255,255,0)] content-stretch flex items-start relative shrink-0 w-full" data-name="Heading">
        <p className="flex-[1_0_0] font-['Poppins:Medium',sans-serif] leading-[26px] min-h-px min-w-px not-italic relative text-[#1c2024] text-[18px] tracking-[-0.04px]">Voos para Rio de Janeiro</p>
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
      <Frame1 />
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

function FeaturedItemDetailsFrame1() {
  return (
    <div className="bg-[rgba(255,255,255,0.8)] relative shrink-0 w-full" data-name="Featured Item Details Frame">
      <div className="content-stretch flex flex-col gap-[24px] items-start p-[16px] relative w-full">
        <FeaturedItemTextFrame1 />
      </div>
    </div>
  );
}

function FeaturedItem1() {
  return (
    <div className="flex-[1_0_0] h-full min-h-px min-w-px relative" data-name="Featured Item">
      <div aria-hidden="true" className="absolute inset-0 pointer-events-none">
        <div className="absolute bg-[#e8e8ec] inset-0" />
        <img alt="" className="absolute max-w-none object-cover size-full" src={imgFeaturedItem1} />
      </div>
      <div className="content-stretch flex flex-col items-start justify-between p-[24px] relative size-full">
        <FeaturedItemInfoFrame1 />
        <FeaturedItemDetailsFrame1 />
      </div>
    </div>
  );
}

function ContentContainer4() {
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

function FeaturedItemInfoFrame2() {
  return (
    <div className="content-stretch flex items-center justify-between relative shrink-0 w-full" data-name="Featured Item Info Frame">
      <div className="bg-[rgba(255,255,255,0)] content-stretch flex flex-col items-start relative shrink-0" data-name="Icon Button">
        <ContentContainer4 />
      </div>
      <div className="bg-[#3e63dd] content-stretch flex gap-[8px] items-center justify-center overflow-clip px-[10px] py-[4px] relative shrink-0" data-name="Badge">
        <div className="flex flex-col font-['Poppins:Medium',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[14px] text-white whitespace-nowrap">
          <p className="leading-[20px]">Ida e Volta</p>
        </div>
      </div>
    </div>
  );
}

function Frame2() {
  return (
    <div className="content-stretch flex gap-[4px] items-center relative shrink-0">
      <div className="bg-[rgba(255,255,255,0)] content-stretch flex items-start relative shrink-0" data-name="Text">
        <p className="font-['Poppins:Regular',sans-serif] leading-[30px] not-italic relative shrink-0 text-[#60646c] text-[24px] tracking-[-0.1px] whitespace-nowrap">32.523</p>
      </div>
      <div className="bg-[rgba(255,255,255,0)] content-stretch flex items-start relative shrink-0" data-name="Text">
        <p className="font-['Poppins:Regular',sans-serif] leading-[16px] not-italic relative shrink-0 text-[#60646c] text-[12px] tracking-[0.04px] whitespace-nowrap">Tribz</p>
      </div>
    </div>
  );
}

function FeaturedItemTextFrame2() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full" data-name="Featured Item Text Frame">
      <div className="bg-[rgba(255,255,255,0)] content-stretch flex items-start relative shrink-0 w-full" data-name="Heading">
        <p className="flex-[1_0_0] font-['Poppins:Medium',sans-serif] leading-[16px] min-h-px min-w-px not-italic relative text-[#1c2024] text-[12px] tracking-[0.04px]">Passagem</p>
      </div>
      <div className="bg-[rgba(255,255,255,0)] content-stretch flex items-start relative shrink-0 w-full" data-name="Heading">
        <p className="flex-[1_0_0] font-['Poppins:Medium',sans-serif] leading-[26px] min-h-px min-w-px not-italic relative text-[#1c2024] text-[18px] tracking-[-0.04px]">Voos para Recife</p>
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
      <Frame2 />
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

function FeaturedItemDetailsFrame2() {
  return (
    <div className="bg-[rgba(255,255,255,0.8)] relative shrink-0 w-full" data-name="Featured Item Details Frame">
      <div className="content-stretch flex flex-col gap-[24px] items-start p-[16px] relative w-full">
        <FeaturedItemTextFrame2 />
      </div>
    </div>
  );
}

function FeaturedItem2() {
  return (
    <div className="flex-[1_0_0] h-full min-h-px min-w-px relative" data-name="Featured Item">
      <div aria-hidden="true" className="absolute inset-0 pointer-events-none">
        <div className="absolute bg-[#e8e8ec] inset-0" />
        <img alt="" className="absolute max-w-none object-cover size-full" src={imgFeaturedItem2} />
      </div>
      <div className="content-stretch flex flex-col items-start justify-between p-[24px] relative size-full">
        <FeaturedItemInfoFrame2 />
        <FeaturedItemDetailsFrame2 />
      </div>
    </div>
  );
}

function ContentContainer5() {
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

function FeaturedItemInfoFrame3() {
  return (
    <div className="content-stretch flex items-center justify-between relative shrink-0 w-full" data-name="Featured Item Info Frame">
      <div className="bg-[rgba(255,255,255,0)] content-stretch flex flex-col items-start relative shrink-0" data-name="Icon Button">
        <ContentContainer5 />
      </div>
      <div className="bg-[#3e63dd] content-stretch flex gap-[8px] items-center justify-center overflow-clip px-[10px] py-[4px] relative shrink-0" data-name="Badge">
        <div className="flex flex-col font-['Poppins:Medium',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[14px] text-white whitespace-nowrap">
          <p className="leading-[20px]">Ida e Volta</p>
        </div>
      </div>
    </div>
  );
}

function Frame3() {
  return (
    <div className="content-stretch flex gap-[4px] items-center relative shrink-0">
      <div className="bg-[rgba(255,255,255,0)] content-stretch flex items-start relative shrink-0" data-name="Text">
        <p className="font-['Poppins:Regular',sans-serif] leading-[30px] not-italic relative shrink-0 text-[#60646c] text-[24px] tracking-[-0.1px] whitespace-nowrap">8,743</p>
      </div>
      <div className="bg-[rgba(255,255,255,0)] content-stretch flex items-start relative shrink-0" data-name="Text">
        <p className="font-['Poppins:Regular',sans-serif] leading-[16px] not-italic relative shrink-0 text-[#60646c] text-[12px] tracking-[0.04px] whitespace-nowrap">Tribz</p>
      </div>
    </div>
  );
}

function FeaturedItemTextFrame3() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full" data-name="Featured Item Text Frame">
      <div className="bg-[rgba(255,255,255,0)] content-stretch flex items-start relative shrink-0 w-full" data-name="Heading">
        <p className="flex-[1_0_0] font-['Poppins:Medium',sans-serif] leading-[16px] min-h-px min-w-px not-italic relative text-[#1c2024] text-[12px] tracking-[0.04px]">Passagem</p>
      </div>
      <div className="bg-[rgba(255,255,255,0)] content-stretch flex items-start relative shrink-0 w-full" data-name="Heading">
        <p className="flex-[1_0_0] font-['Poppins:Medium',sans-serif] leading-[26px] min-h-px min-w-px not-italic relative text-[#1c2024] text-[18px] tracking-[-0.04px]">Voos para Salvador</p>
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
      <Frame3 />
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

function FeaturedItemDetailsFrame3() {
  return (
    <div className="bg-[rgba(255,255,255,0.8)] relative shrink-0 w-full" data-name="Featured Item Details Frame">
      <div className="content-stretch flex flex-col gap-[24px] items-start p-[16px] relative w-full">
        <FeaturedItemTextFrame3 />
      </div>
    </div>
  );
}

function FeaturedItem3() {
  return (
    <div className="flex-[1_0_0] h-full min-h-px min-w-px relative" data-name="Featured Item">
      <div aria-hidden="true" className="absolute inset-0 pointer-events-none">
        <div className="absolute bg-[#e8e8ec] inset-0" />
        <img alt="" className="absolute max-w-none object-cover size-full" src={imgFeaturedItem3} />
      </div>
      <div className="content-stretch flex flex-col items-start justify-between p-[24px] relative size-full">
        <FeaturedItemInfoFrame3 />
        <FeaturedItemDetailsFrame3 />
      </div>
    </div>
  );
}

function FeaturedContent() {
  return (
    <div className="content-stretch flex gap-[16px] h-[404px] items-center relative shrink-0 w-full" data-name="Featured Content">
      <FeaturedItem />
      <FeaturedItem1 />
      <FeaturedItem2 />
      <FeaturedItem3 />
    </div>
  );
}

export default function FeaturedSection() {
  return (
    <div className="content-stretch flex flex-col gap-[32px] items-start relative size-full" data-name="Featured Section">
      <SectionTitleFrame />
      <FeaturedContent />
    </div>
  );
}