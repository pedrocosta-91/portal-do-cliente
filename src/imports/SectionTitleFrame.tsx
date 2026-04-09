import svgPaths from "./svg-xlkidhgjgk";

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
        <p className="font-['Poppins:Medium',sans-serif] leading-[40px] not-italic relative shrink-0 text-[#1c2024] text-[35px] tracking-[-0.16px] whitespace-nowrap">Hospedagens escolhidas a dedo para você</p>
      </div>
      <SectionActions />
    </div>
  );
}

function SectionTabs() {
  return (
    <div className="content-stretch flex gap-[16px] items-center relative shrink-0" data-name="Section Tabs">
      <div className="bg-[rgba(0,71,241,0.07)] h-[32px] opacity-92 relative rounded-[9999px] shrink-0" data-name="Button">
        <div className="content-stretch flex gap-[8px] h-full items-center justify-center overflow-clip px-[12px] relative rounded-[inherit]">
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
        <div aria-hidden="true" className="absolute border border-[rgba(0,52,220,0.45)] border-solid inset-0 pointer-events-none rounded-[9999px]" />
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

export default function SectionTitleFrame() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-start relative size-full" data-name="Section Title Frame">
      <SectionTitle />
      <SectionTabs />
    </div>
  );
}