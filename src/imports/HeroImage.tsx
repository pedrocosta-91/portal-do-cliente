import svgPaths from "./svg-en65zlkok1";
import imgHeroImage from "figma:asset/6546de944e5f06adb7d718c7ea2199fa44f9a5b8.png";

function NavLinks() {
  return (
    <div className="content-stretch flex gap-[10px] items-center relative shrink-0" data-name="Nav Links">
      <div className="content-stretch flex gap-[8px] h-[32px] items-center justify-center px-[12px] relative shrink-0" data-name="Button">
        <div className="overflow-clip relative shrink-0 size-[16px]" data-name="Icon / tickets-plane">
          <div className="absolute inset-[8.72%_5.21%_9.37%_5.21%]" data-name="Vector">
            <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14.3333 13.1054">
              <g id="Vector">
                <path d={svgPaths.p2ba5e100} fill="var(--fill-0, #60646C)" />
                <path d={svgPaths.p22fc7f00} fill="var(--fill-0, #60646C)" />
                <path d={svgPaths.pcc90e80} fill="var(--fill-0, #60646C)" />
                <path d={svgPaths.p28bf6000} fill="var(--fill-0, #60646C)" />
                <path d={svgPaths.p24b26780} fill="var(--fill-0, #60646C)" />
                <path d={svgPaths.p2184ce00} fill="var(--fill-0, #60646C)" />
                <path d={svgPaths.p364dc270} fill="var(--fill-0, #60646C)" />
              </g>
            </svg>
          </div>
        </div>
        <div className="flex flex-col font-['Poppins:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#60646c] text-[14px] whitespace-nowrap">
          <p className="leading-[20px]">Passagens</p>
        </div>
      </div>
      <div className="content-stretch flex gap-[8px] h-[32px] items-center justify-center px-[12px] relative shrink-0" data-name="Button">
        <div className="overflow-clip relative shrink-0 size-[16px]" data-name="Icon / hotel">
          <div className="absolute inset-[5.21%_13.54%]" data-name="Vector">
            <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 11.6667 14.3335">
              <g id="Vector">
                <path d={svgPaths.peba4a00} fill="var(--fill-0, #002BB7)" fillOpacity="0.772549" />
                <path d={svgPaths.p1468ef00} fill="var(--fill-0, #002BB7)" fillOpacity="0.772549" />
                <path d={svgPaths.p1c183e80} fill="var(--fill-0, #002BB7)" fillOpacity="0.772549" />
                <path d={svgPaths.p23989270} fill="var(--fill-0, #002BB7)" fillOpacity="0.772549" />
                <path d={svgPaths.p7f8a100} fill="var(--fill-0, #002BB7)" fillOpacity="0.772549" />
                <path d={svgPaths.p1eaf1300} fill="var(--fill-0, #002BB7)" fillOpacity="0.772549" />
                <path d={svgPaths.p39a361c0} fill="var(--fill-0, #002BB7)" fillOpacity="0.772549" />
                <path d={svgPaths.p3c52f700} fill="var(--fill-0, #002BB7)" fillOpacity="0.772549" />
                <path d={svgPaths.p4c97580} fill="var(--fill-0, #002BB7)" fillOpacity="0.772549" />
                <path d={svgPaths.p1dbce00} fill="var(--fill-0, #002BB7)" fillOpacity="0.772549" />
              </g>
            </svg>
          </div>
        </div>
        <div className="flex flex-col font-['Poppins:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[14px] text-[rgba(0,43,183,0.77)] whitespace-nowrap">
          <p className="leading-[20px]">Hospedagens</p>
        </div>
      </div>
      <div className="content-stretch flex gap-[8px] h-[32px] items-center justify-center px-[12px] relative shrink-0" data-name="Button">
        <div className="overflow-clip relative shrink-0 size-[16px]" data-name="Icon / car">
          <div className="absolute inset-[26.04%_5.21%_17.71%_5.21%]" data-name="Vector">
            <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14.3333 9">
              <g id="Vector">
                <path d={svgPaths.p1ce63200} fill="var(--fill-0, #60646C)" />
                <path d={svgPaths.p2fce1380} fill="var(--fill-0, #60646C)" />
                <path d={svgPaths.p165c80} fill="var(--fill-0, #60646C)" />
                <path d={svgPaths.p39c9fa80} fill="var(--fill-0, #60646C)" />
              </g>
            </svg>
          </div>
        </div>
        <div className="flex flex-col font-['Poppins:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#60646c] text-[14px] whitespace-nowrap">
          <p className="leading-[20px]">Aluguel de Carros</p>
        </div>
      </div>
    </div>
  );
}

function Navigation() {
  return (
    <div className="bg-[#fcfcfd] content-stretch flex items-center justify-center px-[16px] py-[14px] relative rounded-[9999px] shadow-[0px_4px_16px_0px_rgba(0,0,0,0.1),0px_3px_12px_0px_rgba(0,0,0,0.1),0px_2px_3px_0px_rgba(0,0,51,0.06)] shrink-0" data-name="Navigation">
      <NavLinks />
    </div>
  );
}

function Frame3() {
  return (
    <div className="content-stretch flex gap-[4px] items-center relative shrink-0">
      <div className="bg-[rgba(255,255,255,0)] content-stretch flex items-start relative shrink-0" data-name="Heading">
        <p className="font-['Poppins:Medium',sans-serif] leading-[28px] not-italic relative shrink-0 text-[#1c2024] text-[20px] tracking-[-0.08px] whitespace-nowrap">135.000</p>
      </div>
      <div className="bg-[rgba(255,255,255,0)] content-stretch flex items-start relative shrink-0" data-name="Text">
        <p className="font-['Poppins:Light',sans-serif] leading-[16px] not-italic relative shrink-0 text-[#60646c] text-[12px] tracking-[0.04px] whitespace-nowrap">Tribz</p>
      </div>
    </div>
  );
}

function Frame2() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0">
      <div className="overflow-clip relative shrink-0 size-[16px]" data-name="Icon / eye">
        <div className="absolute inset-[17.71%_5.21%]" data-name="Vector">
          <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14.3339 10.3327">
            <g id="Vector">
              <path d={svgPaths.pa94e100} fill="var(--fill-0, #525252)" />
              <path d={svgPaths.pc75b8c0} fill="var(--fill-0, #525252)" />
            </g>
          </svg>
        </div>
      </div>
      <Frame3 />
    </div>
  );
}

function Frame() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0">
      <div className="bg-[rgba(255,255,255,0)] content-stretch flex items-start relative shrink-0 w-full" data-name="Heading">
        <p className="font-['Poppins:Regular',sans-serif] leading-[16px] not-italic relative shrink-0 text-[#1c2024] text-[12px] tracking-[0.04px] whitespace-nowrap">Olá, Pedro Costa</p>
      </div>
      <Frame2 />
    </div>
  );
}

function Frame1() {
  return (
    <div className="bg-[rgba(255,255,255,0.9)] content-stretch flex gap-[16px] items-center p-[8px] relative rounded-[9999px] shrink-0">
      <div aria-hidden="true" className="absolute border border-[#d9d9e0] border-solid inset-0 pointer-events-none rounded-[9999px]" />
      <div className="bg-[#3e63dd] content-stretch flex flex-col items-center justify-center overflow-clip relative rounded-[9999px] shrink-0 size-[40px]" data-name="Avatar">
        <div className="bg-[rgba(255,255,255,0)] relative shrink-0 size-[16px]" data-name="Objects / person">
          <div className="absolute inset-[5.83%_13.5%_6.17%_13.5%]" data-name="Vector">
            <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 11.68 14.0799">
              <path clipRule="evenodd" d={svgPaths.p3105ac00} fill="var(--fill-0, white)" fillRule="evenodd" id="Vector" />
            </svg>
          </div>
        </div>
      </div>
      <Frame />
      <div className="overflow-clip relative shrink-0 size-[32px]" data-name="Icon / menu">
        <div className="absolute inset-[21.88%_13.54%]" data-name="Vector">
          <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 23.3333 18">
            <g id="Vector">
              <path d={svgPaths.p29422c80} fill="var(--fill-0, #525252)" />
              <path d={svgPaths.p1e54f700} fill="var(--fill-0, #525252)" />
              <path d={svgPaths.p37622ef0} fill="var(--fill-0, #525252)" />
            </g>
          </svg>
        </div>
      </div>
    </div>
  );
}

function ContentContainer() {
  return (
    <div className="bg-[#e8e8ec] content-stretch flex items-center justify-center overflow-clip relative rounded-[9999px] shrink-0 size-[48px]" data-name="content-container">
      <div className="bg-[rgba(255,255,255,0)] relative shrink-0 size-[20px]" data-name="Objects / bell">
        <div className="absolute inset-[1%_13.33%_1.67%_13.33%]" data-name="Vector">
          <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14.6668 19.4661">
            <path clipRule="evenodd" d={svgPaths.p1cb983f0} fill="var(--fill-0, #3A5BC7)" fillRule="evenodd" id="Vector" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Separator() {
  return <div className="absolute bg-[rgba(0,0,45,0.09)] bottom-[3px] left-[-0.5px] top-[3px] w-px" data-name="separator" />;
}

function InputContainer() {
  return (
    <div className="flex-[1_0_0] h-full min-h-px min-w-px relative" data-name="input-container">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center px-[4px] relative size-full">
          <p className="flex-[1_0_0] font-['Poppins:Regular',sans-serif] leading-[16px] min-h-px min-w-px not-italic relative text-[#60646c] text-[12px] tracking-[0.04px]">Digite o destino ou nome do hotel</p>
        </div>
      </div>
    </div>
  );
}

function Root() {
  return (
    <div className="bg-[rgba(255,255,255,0.9)] h-[24px] relative shrink-0 w-full" data-name="root">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center px-[4px] relative size-full">
          <InputContainer />
        </div>
      </div>
    </div>
  );
}

function OriginField() {
  return (
    <div className="bg-[rgba(255,255,255,0.9)] flex-[1_0_0] min-h-px min-w-px relative" data-name="Origin Field">
      <div className="content-stretch flex flex-col items-start px-[16px] py-[8px] relative w-full">
        <div className="bg-[rgba(255,255,255,0)] content-stretch flex flex-col gap-[4px] items-start relative shrink-0 w-full" data-name="Text Field">
          <p className="font-['Poppins:Medium',sans-serif] leading-[16px] not-italic relative shrink-0 text-[#1c2024] text-[12px] tracking-[0.04px] w-full">Para onde você quer ir?</p>
          <Root />
        </div>
      </div>
    </div>
  );
}

function SearchFields() {
  return (
    <div className="content-stretch flex flex-[1_0_0] gap-[8px] items-center min-h-px min-w-px relative" data-name="Search Fields">
      <OriginField />
    </div>
  );
}

function IconContainer() {
  return (
    <div className="bg-[rgba(255,255,255,0)] content-stretch flex h-full items-center justify-center overflow-clip relative shrink-0" data-name="icon-container">
      <div className="bg-[rgba(255,255,255,0)] relative shrink-0 size-[14px]" data-name="Components / calendar">
        <div className="absolute inset-[6.67%]" data-name="Vector">
          <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12.1333 12.1333">
            <path clipRule="evenodd" d={svgPaths.p3adbe580} fill="var(--fill-0, #60646C)" fillRule="evenodd" id="Vector" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function InputContainer1() {
  return (
    <div className="flex-[1_0_0] h-full min-h-px min-w-px relative" data-name="input-container">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center px-[4px] relative size-full">
          <p className="flex-[1_0_0] font-['Poppins:Regular',sans-serif] leading-[16px] min-h-px min-w-px not-italic relative text-[#60646c] text-[12px] tracking-[0.04px]">Qui, 26/02</p>
        </div>
      </div>
    </div>
  );
}

function Root1() {
  return (
    <div className="bg-[rgba(255,255,255,0.9)] h-[24px] relative shrink-0 w-full" data-name="root">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center px-[4px] relative size-full">
          <IconContainer />
          <InputContainer1 />
        </div>
      </div>
    </div>
  );
}

function DateField() {
  return (
    <div className="bg-[rgba(255,255,255,0.9)] content-stretch flex flex-col items-start px-[16px] py-[8px] relative shrink-0 w-[140px]" data-name="Date Field">
      <div className="bg-[rgba(255,255,255,0)] content-stretch flex flex-col gap-[4px] items-start relative shrink-0 w-full" data-name="Text Field">
        <p className="font-['Poppins:Medium',sans-serif] leading-[16px] not-italic relative shrink-0 text-[#1c2024] text-[12px] tracking-[0.04px] w-full">Check-in</p>
        <Root1 />
      </div>
    </div>
  );
}

function IconContainer1() {
  return (
    <div className="bg-[rgba(255,255,255,0)] content-stretch flex h-full items-center justify-center overflow-clip relative shrink-0" data-name="icon-container">
      <div className="bg-[rgba(255,255,255,0)] relative shrink-0 size-[14px]" data-name="Components / calendar">
        <div className="absolute inset-[6.67%]" data-name="Vector">
          <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12.1333 12.1333">
            <path clipRule="evenodd" d={svgPaths.p3adbe580} fill="var(--fill-0, #60646C)" fillRule="evenodd" id="Vector" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function InputContainer2() {
  return (
    <div className="flex-[1_0_0] h-full min-h-px min-w-px relative" data-name="input-container">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center px-[4px] relative size-full">
          <p className="flex-[1_0_0] font-['Poppins:Regular',sans-serif] leading-[16px] min-h-px min-w-px not-italic relative text-[#60646c] text-[12px] tracking-[0.04px]">Qui, 26/02</p>
        </div>
      </div>
    </div>
  );
}

function Root2() {
  return (
    <div className="bg-[rgba(255,255,255,0.9)] h-[24px] relative shrink-0 w-full" data-name="root">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center px-[4px] relative size-full">
          <IconContainer1 />
          <InputContainer2 />
        </div>
      </div>
    </div>
  );
}

function PassengerField() {
  return (
    <div className="bg-[rgba(255,255,255,0.9)] content-stretch flex flex-col items-start px-[16px] py-[8px] relative shrink-0 w-[140px]" data-name="Passenger Field">
      <div className="bg-[rgba(255,255,255,0)] content-stretch flex flex-col gap-[4px] items-start relative shrink-0 w-full" data-name="Text Field">
        <p className="font-['Poppins:Medium',sans-serif] leading-[16px] not-italic relative shrink-0 text-[#1c2024] text-[12px] tracking-[0.04px] w-full">Check-out</p>
        <Root2 />
      </div>
    </div>
  );
}

function InputContainer3() {
  return (
    <div className="content-stretch flex h-full items-center px-[4px] relative shrink-0" data-name="input-container">
      <p className="font-['Poppins:Regular',sans-serif] leading-[16px] not-italic relative shrink-0 text-[#60646c] text-[12px] tracking-[0.04px] whitespace-nowrap">2 adultos, 1 acomodação</p>
    </div>
  );
}

function Root3() {
  return (
    <div className="bg-[rgba(255,255,255,0.9)] content-stretch flex h-[24px] items-center px-[4px] relative shrink-0" data-name="root">
      <InputContainer3 />
    </div>
  );
}

function PassengerField1() {
  return (
    <div className="bg-[rgba(255,255,255,0.9)] content-stretch flex flex-col items-start px-[16px] py-[8px] relative shrink-0" data-name="Passenger Field">
      <div className="bg-[rgba(255,255,255,0)] content-stretch flex flex-col gap-[4px] items-start relative shrink-0" data-name="Text Field">
        <p className="font-['Poppins:Medium',sans-serif] leading-[16px] min-w-full not-italic relative shrink-0 text-[#1c2024] text-[12px] tracking-[0.04px] w-[min-content]">Hospedes e acomodações</p>
        <Root3 />
      </div>
    </div>
  );
}

function SearchButton() {
  return (
    <div className="content-stretch flex gap-[16px] items-center relative shrink-0 w-full" data-name="Search Button">
      <SearchFields />
      <DateField />
      <PassengerField />
      <PassengerField1 />
      <div className="bg-[#3e63dd] content-stretch flex gap-[12px] h-[40px] items-center justify-center px-[16px] relative rounded-[9999px] shrink-0" data-name="Button">
        <div className="flex flex-col font-['Poppins:Medium',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[16px] text-white whitespace-nowrap">
          <p className="leading-[24px]">Buscar hotéis</p>
        </div>
      </div>
    </div>
  );
}

function SearchSection() {
  return (
    <div className="bg-[rgba(255,255,255,0.8)] relative shrink-0 w-full" data-name="Search Section">
      <div className="content-stretch flex flex-col gap-[16px] items-start p-[24px] relative w-full">
        <SearchButton />
      </div>
    </div>
  );
}

export default function HeroImage() {
  return (
    <div className="content-stretch flex flex-col items-start justify-between relative size-full" data-name="Hero Image">
      <div aria-hidden="true" className="absolute inset-0 pointer-events-none">
        <div className="absolute bg-[#d9d9d9] inset-0" />
        <img alt="" className="absolute max-w-none object-cover size-full" src={imgHeroImage} />
      </div>
      <div className="content-stretch flex items-center justify-between p-[32px] relative shrink-0 w-[1440px]" data-name="Header">
        <div className="h-[40px] relative shrink-0 w-[111px]" data-name="Brand">
          <div className="absolute inset-[13.68%_0_13.68%_41.08%]" data-name="Group">
            <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 65.3966 29.0544">
              <g id="Group">
                <path d={svgPaths.p3e1f5480} fill="var(--fill-0, #FF496A)" id="Vector" />
                <path d={svgPaths.p2f9d1500} fill="var(--fill-0, #FF496A)" id="Vector_2" />
                <path d={svgPaths.p3646f80} fill="var(--fill-0, #FF496A)" id="Vector_3" />
                <path d={svgPaths.p308a1e00} fill="var(--fill-0, #FF496A)" id="Vector_4" />
                <path d={svgPaths.p3f55a680} fill="var(--fill-0, #FF496A)" id="Vector_5" />
              </g>
            </svg>
          </div>
          <div className="absolute contents inset-[0_64.09%_0_0]" data-name="Group">
            <div className="absolute contents inset-[0_72.12%_0_8.04%]" data-name="Group">
              <div className="absolute inset-[0_72.12%_64.15%_8.04%]" data-name="Group">
                <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 22.0264 14.3406">
                  <g id="Group">
                    <path d={svgPaths.p2684c200} fill="var(--fill-0, #3DD7B9)" id="Vector" />
                    <path d={svgPaths.p121dbe00} fill="var(--fill-0, #3DD7B9)" id="Vector_2" />
                  </g>
                </svg>
              </div>
              <div className="absolute inset-[64.15%_72.12%_0_8.04%]" data-name="Group">
                <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 22.0263 14.3405">
                  <g id="Group">
                    <path d={svgPaths.p37461200} fill="var(--fill-0, #3DD7B9)" id="Vector" />
                    <path d={svgPaths.p11e54b00} fill="var(--fill-0, #3DD7B9)" id="Vector_2" />
                  </g>
                </svg>
              </div>
            </div>
            <div className="absolute contents inset-[22.37%_64.09%_22.37%_0]" data-name="Group">
              <div className="absolute inset-[22.37%_64.09%_22.37%_23.04%]" data-name="Group">
                <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14.2895 22.1034">
                  <g id="Group">
                    <path d={svgPaths.p229ef200} fill="var(--fill-0, #3DD7B9)" id="Vector" />
                    <path d={svgPaths.p1c208d00} fill="var(--fill-0, #3DD7B9)" id="Vector_2" />
                  </g>
                </svg>
              </div>
              <div className="absolute inset-[22.37%_87.13%_22.37%_0]" data-name="Group">
                <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14.2908 22.1034">
                  <g id="Group">
                    <path d={svgPaths.p12e3b500} fill="var(--fill-0, #3DD7B9)" id="Vector" />
                    <path d={svgPaths.p2799c280} fill="var(--fill-0, #3DD7B9)" id="Vector_2" />
                  </g>
                </svg>
              </div>
            </div>
          </div>
        </div>
        <Navigation />
        <div className="content-stretch flex gap-[12px] h-[48px] items-center relative shrink-0" data-name="User Actions">
          <Frame1 />
          <div className="bg-[rgba(255,255,255,0)] content-stretch flex flex-col items-start relative shrink-0" data-name="Icon Button">
            <ContentContainer />
          </div>
        </div>
      </div>
      <div className="content-stretch flex flex-col gap-[16px] items-start p-[32px] relative shrink-0 w-[1440px]" data-name="Searchbar">
        <div className="content-stretch flex h-[40px] items-center justify-center relative shrink-0 w-[640px]" data-name="Segmented Control" style={{ backgroundImage: "linear-gradient(90deg, rgba(0, 0, 51, 0.06) 0%, rgba(0, 0, 51, 0.06) 100%), linear-gradient(90deg, rgba(255, 255, 255, 0.9) 0%, rgba(255, 255, 255, 0.9) 100%)" }}>
          <div className="bg-white flex-[1_0_0] h-full min-h-px min-w-px relative" data-name="_segmented-control-item">
            <div aria-hidden="true" className="absolute border border-[rgba(0,0,45,0.09)] border-solid inset-0 pointer-events-none" />
            <div className="flex flex-row items-center justify-center size-full">
              <div className="content-stretch flex gap-[8px] items-center justify-center px-[16px] relative size-full">
                <p className="font-['Poppins:Medium',sans-serif] leading-[24px] not-italic relative shrink-0 text-[#3358d4] text-[16px] whitespace-nowrap">Hospedagem</p>
              </div>
            </div>
          </div>
          <div className="bg-[rgba(255,255,255,0)] flex-[1_0_0] h-full min-h-px min-w-px relative" data-name="_segmented-control-item">
            <div className="flex flex-row items-center justify-center size-full">
              <div className="content-stretch flex gap-[8px] items-center justify-center px-[16px] relative size-full">
                <p className="font-['Poppins:Regular',sans-serif] leading-[24px] not-italic relative shrink-0 text-[#60646c] text-[16px] whitespace-nowrap">Passagem aérea</p>
              </div>
            </div>
          </div>
          <div className="bg-[rgba(255,255,255,0)] flex-[1_0_0] h-full min-h-px min-w-px relative" data-name="_segmented-control-item">
            <div className="flex flex-row items-center justify-center size-full">
              <div className="content-stretch flex gap-[8px] items-center justify-center px-[16px] relative size-full">
                <p className="font-['Poppins:Regular',sans-serif] leading-[24px] not-italic relative shrink-0 text-[#60646c] text-[16px] whitespace-nowrap">Aluguel de carro</p>
                <Separator />
              </div>
            </div>
          </div>
        </div>
        <SearchSection />
      </div>
    </div>
  );
}