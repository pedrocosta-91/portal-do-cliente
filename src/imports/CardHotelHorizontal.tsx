import svgPaths from "./svg-785rsacjux";
import imgHotelImage from "figma:asset/2e15993b8e2766144f2ba1c930236032745cc793.png";

function ContentContainer() {
  return (
    <div className="bg-[#f0f0f3] content-stretch flex items-center justify-center overflow-clip relative rounded-[9999px] shrink-0 size-[24px]" data-name="content-container">
      <div className="bg-[rgba(255,255,255,0)] relative shrink-0 size-[16px]" data-name="Arrows / caret-left">
        <div className="absolute inset-[27%_40.33%_27%_33.67%]" data-name="Vector">
          <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 4.16 7.35999">
            <path clipRule="evenodd" d={svgPaths.p3f5b9200} fill="var(--fill-0, #60646C)" fillRule="evenodd" id="Vector" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function ContentContainer1() {
  return (
    <div className="bg-[#f0f0f3] content-stretch flex items-center justify-center overflow-clip relative rounded-[9999px] shrink-0 size-[24px]" data-name="content-container">
      <div className="bg-[rgba(255,255,255,0)] relative shrink-0 size-[16px]" data-name="Arrows / caret-right">
        <div className="absolute inset-[27%_33.67%_27%_40.33%]" data-name="Vector">
          <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 4.16 7.36001">
            <path clipRule="evenodd" d={svgPaths.p203c6480} fill="var(--fill-0, #60646C)" fillRule="evenodd" id="Vector" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Frame1() {
  return (
    <div className="col-1 content-stretch flex h-[25.6px] items-center justify-between ml-[8px] mt-[83.2px] relative row-1 w-[164px]">
      <div className="bg-[rgba(255,255,255,0)] content-stretch flex flex-col items-start relative rounded-[9999px] shrink-0" data-name="Icon Button">
        <ContentContainer />
      </div>
      <div className="bg-[rgba(255,255,255,0)] content-stretch flex flex-col items-start relative rounded-[9999px] shrink-0" data-name="Icon Button">
        <ContentContainer1 />
      </div>
    </div>
  );
}

function Group() {
  return (
    <div className="grid-cols-[max-content] grid-rows-[max-content] h-full inline-grid leading-[0] place-items-start relative shrink-0">
      <div className="col-1 h-[192px] ml-0 mt-0 relative row-1 w-[180px]" data-name="Hotel Image">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <img alt="" className="absolute h-full left-0 max-w-none top-0 w-[150%]" src={imgHotelImage} />
        </div>
      </div>
      <Frame1 />
    </div>
  );
}

function Frame2() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0">
      <div className="bg-[#12a594] content-stretch flex gap-[6px] items-center justify-center overflow-clip px-[6px] py-[2px] relative shrink-0" data-name="Badge">
        <div className="flex flex-col font-['Poppins:Medium',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[12px] text-white tracking-[0.04px] whitespace-nowrap">
          <p className="leading-[16px]">8.4</p>
        </div>
      </div>
      <div className="bg-[rgba(255,255,255,0)] content-stretch flex items-start relative shrink-0" data-name="Text">
        <p className="font-['Poppins:Light',sans-serif] leading-[16px] not-italic relative shrink-0 text-[#60646c] text-[12px] tracking-[0.04px] whitespace-nowrap">Muito Bom</p>
      </div>
    </div>
  );
}

function Frame() {
  return (
    <div className="content-stretch flex gap-[4px] items-center relative shrink-0">
      <div className="bg-[rgba(255,255,255,0)] relative shrink-0 size-[16px]" data-name="Objects / star-filled">
        <div className="absolute inset-[3.21%_5.4%_11.76%_5.4%]" data-name="Vector">
          <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14.2729 13.6058">
            <path d={svgPaths.pf7aa300} fill="var(--fill-0, #E2A336)" id="Vector" />
          </svg>
        </div>
      </div>
      <div className="bg-[rgba(255,255,255,0)] relative shrink-0 size-[16px]" data-name="Objects / star-filled">
        <div className="absolute inset-[3.21%_5.4%_11.76%_5.4%]" data-name="Vector">
          <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14.2729 13.6058">
            <path d={svgPaths.pf7aa300} fill="var(--fill-0, #E2A336)" id="Vector" />
          </svg>
        </div>
      </div>
      <div className="bg-[rgba(255,255,255,0)] relative shrink-0 size-[16px]" data-name="Objects / star-filled">
        <div className="absolute inset-[3.21%_5.4%_11.76%_5.4%]" data-name="Vector">
          <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14.2729 13.6058">
            <path d={svgPaths.pf7aa300} fill="var(--fill-0, #E2A336)" id="Vector" />
          </svg>
        </div>
      </div>
      <div className="bg-[rgba(255,255,255,0)] relative shrink-0 size-[16px]" data-name="Objects / star-filled">
        <div className="absolute inset-[3.21%_5.4%_11.76%_5.4%]" data-name="Vector">
          <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14.2729 13.6058">
            <path d={svgPaths.pf7aa300} fill="var(--fill-0, #E2A336)" id="Vector" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Frame3() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0 w-full">
      <Frame2 />
      <div className="flex flex-row items-center self-stretch">
        <div className="flex h-0 items-center justify-center relative self-center shrink-0 w-0" style={{ "--transform-inner-width": "1200", "--transform-inner-height": "21" } as React.CSSProperties}>
          <div className="-rotate-90 flex-none h-full">
            <div className="h-full relative w-[20px]">
              <div className="absolute inset-[-1px_0_0_0]">
                <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 1">
                  <line id="Line 1" stroke="var(--stroke-0, #D9D9E0)" x2="20" y1="0.5" y2="0.5" />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Frame />
    </div>
  );
}

function ContentContainer2() {
  return (
    <div className="content-stretch flex items-center justify-center overflow-clip relative shrink-0 size-[24px]" data-name="content-container">
      <div className="overflow-clip relative shrink-0 size-[16px]" data-name="Icon / map-pin">
        <div className="absolute inset-[5.21%_13.54%]" data-name="Vector">
          <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 11.6667 14.3333">
            <g id="Vector">
              <path d={svgPaths.p3d5d7980} fill="var(--fill-0, #60646C)" />
              <path d={svgPaths.p339c0280} fill="var(--fill-0, #60646C)" />
            </g>
          </svg>
        </div>
      </div>
    </div>
  );
}

function RatingItem() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0" data-name="Rating Item">
      <div className="bg-[rgba(255,255,255,0)] content-stretch flex flex-col items-start relative shrink-0" data-name="Icon Button">
        <ContentContainer2 />
      </div>
      <div className="bg-[rgba(255,255,255,0)] content-stretch flex items-start relative shrink-0" data-name="Text">
        <p className="font-['Poppins:Light',sans-serif] leading-[16px] not-italic relative shrink-0 text-[#60646c] text-[12px] tracking-[0.04px] whitespace-nowrap">{`Miami, Miami International Airport Area, a 3.4km do centro. `}</p>
      </div>
    </div>
  );
}

function Frame4() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0">
      <div className="bg-[rgba(255,255,255,0)] content-stretch flex items-start relative shrink-0" data-name="Heading">
        <p className="font-['Poppins:Medium',sans-serif] leading-[24px] not-italic relative shrink-0 text-[#1c2024] text-[16px] whitespace-nowrap">Kimpton Epic Hotel</p>
      </div>
      <Frame3 />
      <RatingItem />
    </div>
  );
}

function Frame5() {
  return (
    <div className="content-stretch flex gap-[16px] items-start relative shrink-0">
      <div className="bg-[#30a46c] content-stretch flex gap-[6px] items-center justify-center overflow-clip px-[6px] py-[2px] relative shrink-0" data-name="Badge">
        <div className="flex flex-col font-['Poppins:Medium',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[12px] text-white tracking-[0.04px] whitespace-nowrap">
          <p className="leading-[16px]">Oferta por tempo limitado</p>
        </div>
      </div>
      <div className="bg-[#e5484d] content-stretch flex gap-[6px] items-center justify-center overflow-clip px-[6px] py-[2px] relative shrink-0" data-name="Badge">
        <div className="flex flex-col font-['Poppins:Medium',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[12px] text-white tracking-[0.04px] whitespace-nowrap">
          <p className="leading-[16px]">Apenas 2 disponíveis</p>
        </div>
      </div>
    </div>
  );
}

function ContentContainer3() {
  return (
    <div className="content-stretch flex items-center justify-center overflow-clip relative shrink-0 size-[24px]" data-name="content-container">
      <div className="overflow-clip relative shrink-0 size-[16px]" data-name="Icon / check">
        <div className="absolute inset-[21.88%_13.54%_26.04%_13.54%]" data-name="Vector">
          <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 11.6666 8.33326">
            <path d={svgPaths.p3234c680} fill="var(--fill-0, #60646C)" id="Vector" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function RatingItem1() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0" data-name="Rating Item">
      <div className="bg-[rgba(255,255,255,0)] content-stretch flex flex-col items-start relative shrink-0" data-name="Icon Button">
        <ContentContainer3 />
      </div>
      <div className="bg-[rgba(255,255,255,0)] content-stretch flex items-start relative shrink-0" data-name="Text">
        <p className="font-['Poppins:Light',sans-serif] leading-[16px] not-italic relative shrink-0 text-[#60646c] text-[12px] tracking-[0.04px] whitespace-nowrap">Cancelamento grátis</p>
      </div>
    </div>
  );
}

function ContentContainer4() {
  return (
    <div className="content-stretch flex items-center justify-center overflow-clip relative shrink-0 size-[24px]" data-name="content-container">
      <div className="overflow-clip relative shrink-0 size-[16px]" data-name="Icon / credit-card">
        <div className="absolute inset-[17.71%_5.21%]" data-name="Vector">
          <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14.3333 10.3333">
            <g id="Vector">
              <path d={svgPaths.p113ca480} fill="var(--fill-0, #60646C)" />
              <path d={svgPaths.p3ee9d580} fill="var(--fill-0, #60646C)" />
            </g>
          </svg>
        </div>
      </div>
    </div>
  );
}

function RatingItem2() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0" data-name="Rating Item">
      <div className="bg-[rgba(255,255,255,0)] content-stretch flex flex-col items-start relative shrink-0" data-name="Icon Button">
        <ContentContainer4 />
      </div>
      <div className="bg-[rgba(255,255,255,0)] content-stretch flex items-start relative shrink-0" data-name="Text">
        <p className="font-['Poppins:Light',sans-serif] leading-[16px] not-italic relative shrink-0 text-[#60646c] text-[12px] tracking-[0.04px] whitespace-nowrap">Pague em 12x sem juros</p>
      </div>
    </div>
  );
}

function HotelRatings() {
  return (
    <div className="content-stretch flex gap-[16px] items-start relative shrink-0 w-[379px]" data-name="Hotel Ratings">
      <RatingItem1 />
      <RatingItem2 />
    </div>
  );
}

function HotelInfo() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-start p-[16px] relative shrink-0" data-name="Hotel Info">
      <Frame4 />
      <Frame5 />
      <HotelRatings />
    </div>
  );
}

function PriceSection() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-end relative shrink-0 w-full" data-name="Price Section">
      <div className="content-stretch flex gap-[4px] items-center relative shrink-0" data-name="Currency">
        <div className="bg-[rgba(255,255,255,0)] content-stretch flex items-start relative shrink-0" data-name="Heading">
          <p className="font-['Poppins:Medium',sans-serif] leading-[30px] not-italic relative shrink-0 text-[#1c2024] text-[24px] tracking-[-0.1px] whitespace-nowrap">1.000</p>
        </div>
        <div className="bg-[rgba(255,255,255,0)] content-stretch flex items-start relative shrink-0" data-name="Heading">
          <p className="font-['Poppins:Regular',sans-serif] leading-[30px] not-italic relative shrink-0 text-[#1c2024] text-[24px] tracking-[-0.1px] whitespace-nowrap">Tribz</p>
        </div>
      </div>
      <div className="bg-[rgba(255,255,255,0)] content-stretch flex items-start relative shrink-0" data-name="Text">
        <p className="font-['Poppins:Light',sans-serif] leading-[16px] not-italic relative shrink-0 text-[#60646c] text-[12px] tracking-[0.04px] whitespace-nowrap">Total: 26.207 tribz</p>
      </div>
      <div className="bg-[rgba(255,255,255,0)] content-stretch flex items-start relative shrink-0" data-name="Text">
        <p className="font-['Poppins:Light',sans-serif] leading-[16px] not-italic relative shrink-0 text-[#60646c] text-[12px] tracking-[0.04px] whitespace-nowrap">Inclui impostos e taxas</p>
      </div>
    </div>
  );
}

function HotelPriceContainer() {
  return (
    <div className="h-full relative shrink-0 w-[169px]" data-name="Hotel Price Container">
      <div aria-hidden="true" className="absolute border-[#d9d9e0] border-l border-solid inset-0 pointer-events-none" />
      <div className="flex flex-col items-end justify-center size-full">
        <div className="content-stretch flex flex-col gap-[32px] items-end justify-center p-[16px] relative size-full">
          <PriceSection />
          <div className="bg-[#12a594] h-[32px] relative rounded-[9999px] shrink-0 w-full" data-name="Button">
            <div className="flex flex-row items-center justify-center size-full">
              <div className="content-stretch flex gap-[8px] items-center justify-center px-[12px] relative size-full">
                <div className="flex flex-col font-['Poppins:Medium',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[14px] text-white whitespace-nowrap">
                  <p className="leading-[20px]">Conhecer Hotel</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function CardHotelHorizontal() {
  return (
    <div className="bg-[rgba(255,255,255,0.9)] content-stretch flex items-center relative shadow-[0px_4px_16px_0px_rgba(0,0,0,0.1),0px_3px_12px_0px_rgba(0,0,0,0.1),0px_2px_3px_0px_rgba(0,0,51,0.06)] size-full" data-name="Card Hotel/Horizontal">
      <div className="flex flex-row items-center self-stretch">
        <Group />
      </div>
      <HotelInfo />
      <div className="flex flex-row items-center self-stretch">
        <HotelPriceContainer />
      </div>
    </div>
  );
}