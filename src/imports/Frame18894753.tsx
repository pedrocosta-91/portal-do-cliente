import svgPaths from "./svg-hubliczufj";

function ContentContainer() {
  return (
    <div className="content-stretch flex items-center justify-center overflow-clip relative shrink-0 size-[40px]" data-name="content-container">
      <div className="bg-[rgba(255,255,255,0)] relative shrink-0 size-[18px]" data-name="Abstract / check-circled">
        <div className="absolute inset-[5.85%]" data-name="Vector">
          <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 15.8947 15.8948">
            <path clipRule="evenodd" d={svgPaths.p208e51b0} fill="var(--fill-0, #002BB7)" fillOpacity="0.772549" fillRule="evenodd" id="Vector" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function ContentContainer1() {
  return (
    <div className="content-stretch flex items-center justify-center overflow-clip relative shrink-0 size-[32px]" data-name="content-container">
      <div className="bg-[rgba(255,255,255,0)] relative shrink-0 size-[16px]" data-name="Arrows / chevron-down">
        <div className="absolute inset-[40%_20%_28.33%_20%]" data-name="Vector">
          <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 9.59999 5.0667">
            <path clipRule="evenodd" d={svgPaths.p238d500} fill="var(--fill-0, #60646C)" fillRule="evenodd" id="Vector" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Frame1() {
  return (
    <div className="content-stretch flex items-center relative shrink-0 w-full">
      <div className="bg-[rgba(255,255,255,0)] content-stretch flex flex-col items-start relative shrink-0" data-name="Icon Button">
        <ContentContainer />
      </div>
      <div className="bg-[rgba(255,255,255,0)] content-stretch flex flex-[1_0_0] items-start min-h-px min-w-px relative" data-name="Heading">
        <p className="font-['Poppins:Regular',sans-serif] leading-[30px] not-italic relative shrink-0 text-[#1c2024] text-[24px] tracking-[-0.1px] whitespace-nowrap">Como você quer pagar</p>
      </div>
      <div className="bg-[rgba(255,255,255,0)] content-stretch flex flex-col items-start relative shrink-0" data-name="Icon Button">
        <ContentContainer1 />
      </div>
    </div>
  );
}

export default function Frame() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-start px-[8px] py-[16px] relative size-full">
      <div aria-hidden="true" className="absolute border border-[#d9d9e0] border-solid inset-0 pointer-events-none" />
      <Frame1 />
    </div>
  );
}