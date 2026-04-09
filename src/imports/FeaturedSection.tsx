import svgPaths from "./svg-p83dxue155";
import imgFeaturedItem from "figma:asset/45402de8f3ac3aea3263c62e12201403da6f5cd0.png";
import imgFeaturedItem1 from "figma:asset/c368d5f1135e5809efca832c10ebeae9b0f6f734.png";

function SecondarySectionTitleFrame() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0 w-full" data-name="Secondary Section Title Frame">
      <div className="bg-[rgba(255,255,255,0)] content-stretch flex items-start relative shrink-0 w-full" data-name="Heading">
        <div className="flex-[1_0_0] font-['Poppins:Medium',sans-serif] leading-[60px] min-h-px min-w-px not-italic relative text-[#1c2024] text-[60px] tracking-[-0.4px] whitespace-pre-wrap">
          <p className="mb-0">{`Hospedagem `}</p>
          <p>com padrão de excelência.</p>
        </div>
      </div>
      <div className="bg-[rgba(255,255,255,0)] content-stretch flex items-start relative shrink-0 w-full" data-name="Text">
        <div className="flex-[1_0_0] font-['Poppins:Light',sans-serif] leading-[30px] min-h-px min-w-px not-italic relative text-[#60646c] text-[24px] tracking-[-0.1px]">
          <p className="mb-0">Curadoria especializada para garantir</p>
          <p>o seu conforto.</p>
        </div>
      </div>
    </div>
  );
}

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

function FilterIconFrame() {
  return (
    <div className="content-stretch flex gap-[16px] items-center relative shrink-0" data-name="Filter Icon Frame">
      <div className="bg-[rgba(255,255,255,0)] content-stretch flex flex-col items-start relative rounded-[9999px] shrink-0" data-name="Icon Button">
        <ContentContainer />
      </div>
      <div className="bg-[rgba(255,255,255,0)] content-stretch flex flex-col items-start relative rounded-[9999px] shrink-0" data-name="Icon Button">
        <ContentContainer1 />
      </div>
    </div>
  );
}

function SecondarySectionFilters() {
  return (
    <div className="content-stretch flex items-start justify-between relative shrink-0 w-full" data-name="Secondary Section Filters">
      <FilterIconFrame />
      <div className="bg-[rgba(255,255,255,0)] content-stretch flex items-start relative shrink-0 w-[400px]" data-name="Text">
        <p className="flex-[1_0_0] font-['Poppins:Light',sans-serif] leading-[24px] min-h-px min-w-px not-italic relative text-[#60646c] text-[16px]">Esqueça as surpresas desagradáveis. Selecionamos propriedades que entregam a melhor infraestrutura e atendimento, chanceladas por nossos 30 anos de expertise em turismo.</p>
      </div>
    </div>
  );
}

function SecondarySectionFrame() {
  return (
    <div className="relative self-stretch shrink-0 w-[576px]" data-name="Secondary Section Frame">
      <div className="content-stretch flex flex-col items-start justify-between py-[16px] relative size-full">
        <SecondarySectionTitleFrame />
        <SecondarySectionFilters />
      </div>
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
    <div className="content-stretch flex items-center justify-end relative shrink-0 w-full" data-name="Featured Item Info Frame">
      <div className="bg-[rgba(255,255,255,0)] content-stretch flex flex-col items-start relative shrink-0" data-name="Icon Button">
        <ContentContainer2 />
      </div>
    </div>
  );
}

function FeaturedItemSubtitleFrame() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-start relative shrink-0 w-full" data-name="Featured Item Subtitle Frame">
      <div className="bg-[rgba(255,255,255,0)] content-stretch flex items-start relative shrink-0 w-full" data-name="Heading">
        <p className="flex-[1_0_0] font-['Poppins:Medium',sans-serif] leading-[16px] min-h-px min-w-px not-italic relative text-[#1c2024] text-[12px] tracking-[0.04px]">Hospedagens</p>
      </div>
      <div className="bg-[rgba(255,255,255,0)] content-stretch flex h-[26px] items-start relative shrink-0 w-full" data-name="Heading">
        <p className="flex-[1_0_0] font-['Poppins:Medium',sans-serif] h-[26px] leading-[26px] min-h-px min-w-px not-italic relative text-[#1c2024] text-[18px] tracking-[-0.04px]">Los Angeles Bay Hotel</p>
      </div>
    </div>
  );
}

function RatingsFrameInner() {
  return (
    <div className="content-stretch flex gap-[4px] items-center relative shrink-0" data-name="Ratings Frame Inner">
      <div className="bg-[rgba(255,255,255,0)] relative shrink-0 size-[16px]" data-name="Star Icon">
        <div className="absolute inset-[3.21%_5.4%_11.76%_5.4%]" data-name="Vector">
          <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14.2729 13.6058">
            <path d={svgPaths.pf7aa300} fill="var(--fill-0, #E2A336)" id="Vector" />
          </svg>
        </div>
      </div>
      <div className="bg-[rgba(255,255,255,0)] relative shrink-0 size-[16px]" data-name="Star Icon">
        <div className="absolute inset-[3.21%_5.4%_11.76%_5.4%]" data-name="Vector">
          <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14.2729 13.6058">
            <path d={svgPaths.pf7aa300} fill="var(--fill-0, #E2A336)" id="Vector" />
          </svg>
        </div>
      </div>
      <div className="bg-[rgba(255,255,255,0)] relative shrink-0 size-[16px]" data-name="Star Icon">
        <div className="absolute inset-[3.21%_5.4%_11.76%_5.4%]" data-name="Vector">
          <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14.2729 13.6058">
            <path d={svgPaths.pf7aa300} fill="var(--fill-0, #E2A336)" id="Vector" />
          </svg>
        </div>
      </div>
      <div className="bg-[rgba(255,255,255,0)] relative shrink-0 size-[16px]" data-name="Star Icon">
        <div className="absolute inset-[3.21%_5.4%_11.76%_5.4%]" data-name="Vector">
          <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14.2729 13.6058">
            <path d={svgPaths.pf7aa300} fill="var(--fill-0, #E2A336)" id="Vector" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function FeaturedItemRatingsFrame() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0 w-full" data-name="Featured Item Ratings Frame">
      <div className="bg-[#3e63dd] content-stretch flex gap-[6px] items-center justify-center overflow-clip px-[6px] py-[2px] relative shrink-0" data-name="Badge">
        <div className="flex flex-col font-['Poppins:Medium',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[12px] text-white tracking-[0.04px] whitespace-nowrap">
          <p className="leading-[16px]">7,1</p>
        </div>
      </div>
      <RatingsFrameInner />
    </div>
  );
}

function FeaturedItemDetailsFrame1() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-start relative shrink-0 w-full" data-name="Featured Item Details Frame">
      <div className="bg-[rgba(255,255,255,0)] content-stretch flex items-start relative shrink-0" data-name="Text">
        <p className="font-['Poppins:Light',sans-serif] leading-[16px] not-italic relative shrink-0 text-[#60646c] text-[12px] tracking-[0.04px] whitespace-nowrap">A 3,94 km do centro</p>
      </div>
      <div className="bg-[rgba(255,255,255,0)] content-stretch flex items-start relative shrink-0" data-name="Text">
        <p className="font-['Poppins:Light',sans-serif] leading-[16px] not-italic relative shrink-0 text-[#60646c] text-[12px] tracking-[0.04px] whitespace-nowrap">Estadia em Los Angeles</p>
      </div>
      <FeaturedItemRatingsFrame />
    </div>
  );
}

function FeaturedItemPriceFrame() {
  return (
    <div className="content-stretch flex gap-[4px] items-center relative shrink-0" data-name="Featured Item Price Frame">
      <div className="bg-[rgba(255,255,255,0)] content-stretch flex items-center relative shrink-0" data-name="Text">
        <p className="font-['Poppins:Medium',sans-serif] leading-[30px] not-italic relative shrink-0 text-[#60646c] text-[24px] tracking-[-0.1px] whitespace-nowrap">29.235</p>
      </div>
      <div className="bg-[rgba(255,255,255,0)] content-stretch flex items-start relative shrink-0" data-name="Text">
        <p className="font-['Poppins:Light',sans-serif] leading-[16px] not-italic relative shrink-0 text-[#60646c] text-[12px] tracking-[0.04px] whitespace-nowrap">Tribz</p>
      </div>
    </div>
  );
}

function FeaturedItemDescriptionFrame() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-start pt-[8px] relative shrink-0 w-full" data-name="Featured Item Description Frame">
      <div aria-hidden="true" className="absolute border-[#d9d9e0] border-solid border-t inset-0 pointer-events-none" />
      <div className="bg-[rgba(255,255,255,0)] content-stretch flex items-start relative shrink-0" data-name="Text">
        <p className="font-['Poppins:Light',sans-serif] leading-[0] not-italic relative shrink-0 text-[#60646c] text-[0px] text-[12px] tracking-[0.04px] whitespace-nowrap">
          <span className="leading-[16px]">{`1 noite, 2 pessoas a partir de `}</span>
          <span className="[text-decoration-skip-ink:none] decoration-solid leading-[16px] line-through">33.432 Tribz</span>
        </p>
      </div>
      <FeaturedItemPriceFrame />
    </div>
  );
}

function FeaturedItemTextFrame() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0 w-full" data-name="Featured Item Text Frame">
      <FeaturedItemSubtitleFrame />
      <FeaturedItemDetailsFrame1 />
      <FeaturedItemDescriptionFrame />
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
        <div className="absolute inset-0 overflow-hidden">
          <img alt="" className="absolute h-full left-[-1.26%] max-w-none top-0 w-[202.52%]" src={imgFeaturedItem} />
        </div>
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
    <div className="content-stretch flex items-center justify-end relative shrink-0 w-full" data-name="Featured Item Info Frame">
      <div className="bg-[rgba(255,255,255,0)] content-stretch flex flex-col items-start relative shrink-0" data-name="Icon Button">
        <ContentContainer3 />
      </div>
    </div>
  );
}

function FeaturedItemSubtitleFrame1() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-start relative shrink-0 w-full" data-name="Featured Item Subtitle Frame">
      <div className="bg-[rgba(255,255,255,0)] content-stretch flex items-start relative shrink-0 w-full" data-name="Heading">
        <p className="flex-[1_0_0] font-['Poppins:Medium',sans-serif] leading-[16px] min-h-px min-w-px not-italic relative text-[#1c2024] text-[12px] tracking-[0.04px]">Hospedagens</p>
      </div>
      <div className="bg-[rgba(255,255,255,0)] content-stretch flex items-start relative shrink-0 w-full" data-name="Heading">
        <p className="flex-[1_0_0] font-['Poppins:Medium',sans-serif] leading-[26px] min-h-px min-w-px not-italic relative text-[#1c2024] text-[18px] tracking-[-0.04px]">Hotel Atlântico Business</p>
      </div>
    </div>
  );
}

function RatingsFrameInner1() {
  return (
    <div className="content-stretch flex gap-[4px] items-center relative shrink-0" data-name="Ratings Frame Inner">
      <div className="bg-[rgba(255,255,255,0)] relative shrink-0 size-[16px]" data-name="Star Icon">
        <div className="absolute inset-[3.21%_5.4%_11.76%_5.4%]" data-name="Vector">
          <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14.2729 13.6058">
            <path d={svgPaths.pf7aa300} fill="var(--fill-0, #E2A336)" id="Vector" />
          </svg>
        </div>
      </div>
      <div className="bg-[rgba(255,255,255,0)] relative shrink-0 size-[16px]" data-name="Star Icon">
        <div className="absolute inset-[3.21%_5.4%_11.76%_5.4%]" data-name="Vector">
          <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14.2729 13.6058">
            <path d={svgPaths.pf7aa300} fill="var(--fill-0, #E2A336)" id="Vector" />
          </svg>
        </div>
      </div>
      <div className="bg-[rgba(255,255,255,0)] relative shrink-0 size-[16px]" data-name="Star Icon">
        <div className="absolute inset-[3.21%_5.4%_11.76%_5.4%]" data-name="Vector">
          <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14.2729 13.6058">
            <path d={svgPaths.pf7aa300} fill="var(--fill-0, #E2A336)" id="Vector" />
          </svg>
        </div>
      </div>
      <div className="bg-[rgba(255,255,255,0)] relative shrink-0 size-[16px]" data-name="Star Icon">
        <div className="absolute inset-[3.21%_5.4%_11.76%_5.4%]" data-name="Vector">
          <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14.2729 13.6058">
            <path d={svgPaths.pf7aa300} fill="var(--fill-0, #E2A336)" id="Vector" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function FeaturedItemRatingsFrame1() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0 w-full" data-name="Featured Item Ratings Frame">
      <div className="bg-[#3e63dd] content-stretch flex gap-[6px] items-center justify-center overflow-clip px-[6px] py-[2px] relative shrink-0" data-name="Badge">
        <div className="flex flex-col font-['Poppins:Medium',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[12px] text-white tracking-[0.04px] whitespace-nowrap">
          <p className="leading-[16px]">7,1</p>
        </div>
      </div>
      <RatingsFrameInner1 />
    </div>
  );
}

function FeaturedItemDetailsFrame3() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-start relative shrink-0 w-full" data-name="Featured Item Details Frame">
      <div className="bg-[rgba(255,255,255,0)] content-stretch flex items-start relative shrink-0" data-name="Text">
        <p className="font-['Poppins:Light',sans-serif] leading-[16px] not-italic relative shrink-0 text-[#60646c] text-[12px] tracking-[0.04px] whitespace-nowrap">A 3,94 km do centro</p>
      </div>
      <div className="bg-[rgba(255,255,255,0)] content-stretch flex items-start relative shrink-0" data-name="Text">
        <p className="font-['Poppins:Light',sans-serif] leading-[16px] not-italic relative shrink-0 text-[#60646c] text-[12px] tracking-[0.04px] whitespace-nowrap">Estadia em Rio de Janeiro</p>
      </div>
      <FeaturedItemRatingsFrame1 />
    </div>
  );
}

function FeaturedItemPriceFrame1() {
  return (
    <div className="content-stretch flex gap-[4px] items-center relative shrink-0" data-name="Featured Item Price Frame">
      <div className="bg-[rgba(255,255,255,0)] content-stretch flex items-center relative shrink-0" data-name="Text">
        <p className="font-['Poppins:Medium',sans-serif] leading-[30px] not-italic relative shrink-0 text-[#60646c] text-[24px] tracking-[-0.1px] whitespace-nowrap">31.481</p>
      </div>
      <div className="bg-[rgba(255,255,255,0)] content-stretch flex items-start relative shrink-0" data-name="Text">
        <p className="font-['Poppins:Light',sans-serif] leading-[16px] not-italic relative shrink-0 text-[#60646c] text-[12px] tracking-[0.04px] whitespace-nowrap">Tribz</p>
      </div>
    </div>
  );
}

function FeaturedItemDescriptionFrame1() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-start pt-[8px] relative shrink-0 w-full" data-name="Featured Item Description Frame">
      <div aria-hidden="true" className="absolute border-[#d9d9e0] border-solid border-t inset-0 pointer-events-none" />
      <div className="bg-[rgba(255,255,255,0)] content-stretch flex items-start relative shrink-0" data-name="Text">
        <p className="font-['Poppins:Light',sans-serif] leading-[0] not-italic relative shrink-0 text-[#60646c] text-[0px] text-[12px] tracking-[0.04px] whitespace-nowrap">
          <span className="leading-[16px]">{`1 noite, 2 pessoas a partir de `}</span>
          <span className="[text-decoration-skip-ink:none] decoration-solid leading-[16px] line-through">35.432 Tribz</span>
        </p>
      </div>
      <FeaturedItemPriceFrame1 />
    </div>
  );
}

function FeaturedItemTextFrame1() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0 w-full" data-name="Featured Item Text Frame">
      <FeaturedItemSubtitleFrame1 />
      <FeaturedItemDetailsFrame3 />
      <FeaturedItemDescriptionFrame1 />
    </div>
  );
}

function FeaturedItemDetailsFrame2() {
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
        <div className="absolute inset-0 overflow-hidden">
          <img alt="" className="absolute h-[123.19%] left-0 max-w-none top-[-11.6%] w-full" src={imgFeaturedItem1} />
        </div>
      </div>
      <div className="content-stretch flex flex-col items-start justify-between p-[24px] relative size-full">
        <FeaturedItemInfoFrame1 />
        <FeaturedItemDetailsFrame2 />
      </div>
    </div>
  );
}

function FeaturedContent() {
  return (
    <div className="content-stretch flex gap-[16px] h-[480px] items-center relative shrink-0 w-full" data-name="Featured Content">
      <FeaturedItem />
      <FeaturedItem1 />
    </div>
  );
}

function SecondarySectionContentFrame() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-h-px min-w-px relative" data-name="Secondary Section Content Frame">
      <FeaturedContent />
    </div>
  );
}

export default function FeaturedSection() {
  return (
    <div className="bg-[#fcfcfd] content-stretch flex gap-[32px] items-start relative size-full" data-name="Featured Section">
      <SecondarySectionFrame />
      <SecondarySectionContentFrame />
    </div>
  );
}