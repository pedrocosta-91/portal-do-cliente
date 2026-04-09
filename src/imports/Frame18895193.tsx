import svgPaths from "./svg-3rph9qoi06";

function Frame() {
  return (
    <div className="content-stretch flex items-start relative shrink-0 w-full">
      <div className="bg-[rgba(255,255,255,0)] content-stretch flex flex-[1_0_0] items-start min-h-px min-w-px relative" data-name="Heading">
        <p className="font-['Poppins:Medium',sans-serif] leading-[26px] not-italic relative shrink-0 text-[#1c2024] text-[18px] tracking-[-0.04px] whitespace-nowrap">Miami: 1.708 acomodações encontradas</p>
      </div>
    </div>
  );
}

function HotelCard() {
  return (
    <div className="content-stretch flex flex-col gap-[5px] items-start relative shrink-0 w-full" data-name="Hotel Card">
      <Frame />
      <div className="bg-[rgba(255,255,255,0)] content-stretch flex items-start relative shrink-0 w-full" data-name="Text">
        <p className="flex-[1_0_0] font-['Poppins:Light',sans-serif] leading-[16px] min-h-px min-w-px not-italic relative text-[#60646c] text-[12px] tracking-[0.04px]">Todas as opções de hotéis passam por uma curadoria nossa para te oferecer a melhor experiência</p>
      </div>
    </div>
  );
}

function ContentContainer() {
  return (
    <div className="bg-[rgba(0,0,51,0.06)] h-[32px] opacity-92 relative shrink-0" data-name="content-container">
      <div className="content-stretch flex gap-[8px] h-full items-center overflow-clip px-[12px] relative rounded-[inherit]">
        <div className="flex flex-col font-['Poppins:Regular',sans-serif] justify-center leading-[0] not-italic overflow-hidden relative shrink-0 text-[14px] text-[rgba(0,7,27,0.5)] text-ellipsis whitespace-nowrap">
          <p className="leading-[20px] overflow-hidden">Ordenar por: Mais relevantes</p>
        </div>
        <div className="bg-[rgba(255,255,255,0)] relative shrink-0 size-[16px]" data-name="Arrows / chevron-down">
          <div className="absolute inset-[40%_20%_28.33%_20%]" data-name="Vector">
            <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 9.59999 5.0667">
              <path clipRule="evenodd" d={svgPaths.p238d500} fill="var(--fill-0, #1C2024)" fillRule="evenodd" id="Vector" />
            </svg>
          </div>
        </div>
      </div>
      <div aria-hidden="true" className="absolute border border-[rgba(0,8,48,0.27)] border-solid inset-0 pointer-events-none" />
    </div>
  );
}

function Frame1() {
  return (
    <div className="content-stretch flex items-start justify-between relative shrink-0 w-full">
      <div className="bg-[rgba(255,255,255,0)] content-stretch flex flex-col items-start relative shrink-0" data-name="Select Trigger">
        <ContentContainer />
      </div>
      <div className="content-stretch flex gap-[8px] h-[32px] items-center justify-center px-[12px] relative shrink-0" data-name="Button">
        <div className="flex flex-col font-['Poppins:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#60646c] text-[14px] whitespace-nowrap">
          <p className="leading-[20px]">Explorar no mapa</p>
        </div>
        <div className="bg-[rgba(255,255,255,0)] relative shrink-0 size-[16px]" data-name="Arrows / caret-right">
          <div className="absolute inset-[27%_33.67%_27%_40.33%]" data-name="Vector">
            <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 4.16 7.36001">
              <path clipRule="evenodd" d={svgPaths.p203c6480} fill="var(--fill-0, #60646C)" fillRule="evenodd" id="Vector" />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function Frame2() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-start relative size-full">
      <HotelCard />
      <Frame1 />
    </div>
  );
}