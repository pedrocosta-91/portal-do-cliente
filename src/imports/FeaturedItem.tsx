import svgPaths from "./svg-mqs7ggyilf";
import imgFeaturedItem from "figma:asset/24a50d365595fec477b513b97d5756b88590b318.png";

function ContentContainer() {
  return (
    <div className="bg-[#12a594] content-stretch flex items-center justify-center overflow-clip relative rounded-[9999px] shrink-0 size-[48px]" data-name="content-container">
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
        <ContentContainer />
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
      <div className="bg-[#12a594] content-stretch flex gap-[6px] items-center justify-center overflow-clip px-[6px] py-[2px] relative shrink-0" data-name="Badge">
        <div className="flex flex-col font-['Poppins:Medium',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[12px] text-white tracking-[0.04px] whitespace-nowrap">
          <p className="leading-[16px]">7,1</p>
        </div>
      </div>
      <RatingsFrameInner />
    </div>
  );
}

function FeaturedItemTextFrame() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full" data-name="Featured Item Text Frame">
      <div className="bg-[rgba(255,255,255,0)] content-stretch flex items-start relative shrink-0 w-full" data-name="Heading">
        <p className="flex-[1_0_0] font-['Poppins:Medium',sans-serif] leading-[16px] min-h-px min-w-px not-italic relative text-[#1c2024] text-[12px] tracking-[0.04px]">Hospedagens</p>
      </div>
      <div className="bg-[rgba(255,255,255,0)] content-stretch flex items-start relative shrink-0 w-full" data-name="Heading">
        <p className="flex-[1_0_0] font-['Poppins:Medium',sans-serif] leading-[26px] min-h-px min-w-px not-italic relative text-[#1c2024] text-[18px] tracking-[-0.04px]">{`Hotel Atlântico Business `}</p>
      </div>
      <div className="bg-[rgba(255,255,255,0)] content-stretch flex items-start relative shrink-0 w-full" data-name="Text">
        <p className="flex-[1_0_0] font-['Poppins:Light',sans-serif] leading-[16px] min-h-px min-w-px not-italic relative text-[#60646c] text-[12px] tracking-[0.04px]">A 3,94 km do centro</p>
      </div>
      <div className="bg-[rgba(255,255,255,0)] content-stretch flex items-start relative shrink-0" data-name="Text">
        <p className="font-['Poppins:Light',sans-serif] leading-[16px] not-italic relative shrink-0 text-[#60646c] text-[12px] tracking-[0.04px] whitespace-nowrap">Estadia em Rio de Janeiro</p>
      </div>
      <FeaturedItemRatingsFrame />
    </div>
  );
}

function FeaturedItemPriceFrame() {
  return (
    <div className="content-stretch flex gap-[4px] items-center relative shrink-0" data-name="Featured Item Price Frame">
      <div className="bg-[rgba(255,255,255,0)] content-stretch flex items-center relative shrink-0" data-name="Text">
        <p className="font-['Poppins:Medium',sans-serif] leading-[30px] not-italic relative shrink-0 text-[#60646c] text-[24px] tracking-[-0.1px] whitespace-nowrap">11.497</p>
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
          <span className="[text-decoration-skip-ink:none] decoration-solid leading-[16px] line-through">16.321 Tribz</span>
        </p>
      </div>
      <FeaturedItemPriceFrame />
    </div>
  );
}

function FeaturedItemDetailsFrame() {
  return (
    <div className="bg-[rgba(255,255,255,0.8)] relative shrink-0 w-full" data-name="Featured Item Details Frame">
      <div className="content-stretch flex flex-col gap-[24px] items-start p-[16px] relative w-full">
        <FeaturedItemTextFrame />
        <FeaturedItemDescriptionFrame />
      </div>
    </div>
  );
}

export default function FeaturedItem() {
  return (
    <div className="content-stretch flex flex-col items-start justify-between p-[24px] relative size-full" data-name="Featured Item">
      <div aria-hidden="true" className="absolute inset-0 pointer-events-none">
        <div className="absolute bg-[#e8e8ec] inset-0" />
        <div className="absolute inset-0 overflow-hidden">
          <img alt="" className="absolute h-[123.19%] left-0 max-w-none top-[-11.6%] w-full" src={imgFeaturedItem} />
        </div>
      </div>
      <FeaturedItemInfoFrame />
      <FeaturedItemDetailsFrame />
    </div>
  );
}