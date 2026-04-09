import svgPaths from "./svg-4ur42vwck6";

function Frame() {
  return (
    <div className="content-stretch flex items-center justify-between relative shrink-0 w-full">
      <div className="content-stretch flex gap-[12px] h-[40px] items-center justify-center px-[16px] relative shrink-0" data-name="Button">
        <div className="bg-[rgba(255,255,255,0)] relative shrink-0 size-[18px]" data-name="Arrows / caret-left">
          <div className="absolute inset-[27%_40.33%_27%_33.67%]" data-name="Vector">
            <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 4.67999 8.27999">
              <path clipRule="evenodd" d={svgPaths.p18a55380} fill="var(--fill-0, #60646C)" fillRule="evenodd" id="Vector" />
            </svg>
          </div>
        </div>
        <div className="flex flex-col font-['Poppins:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#60646c] text-[16px] whitespace-nowrap">
          <p className="leading-[24px]">Voltar para busca</p>
        </div>
      </div>
      <div className="bg-[rgba(243,0,13,0.08)] content-stretch flex gap-[8px] items-center justify-center overflow-clip px-[10px] py-[4px] relative shrink-0" data-name="Badge">
        <div className="bg-[rgba(255,255,255,0)] relative shrink-0 size-[16px]" data-name="Objects / clock">
          <div className="absolute inset-[5.85%]" data-name="Vector">
            <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14.1287 14.1287">
              <path clipRule="evenodd" d={svgPaths.p2aa39300} fill="var(--fill-0, #C40006)" fillOpacity="0.827451" fillRule="evenodd" id="Vector" />
            </svg>
          </div>
        </div>
        <div className="flex flex-col font-['Poppins:Medium',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[14px] text-[rgba(196,0,6,0.83)] whitespace-nowrap">
          <p className="leading-[20px]">Oferta válida por 20:00</p>
        </div>
      </div>
    </div>
  );
}

function ContentContainer() {
  return (
    <div className="content-stretch flex items-center justify-center overflow-clip relative shrink-0 size-[32px]" data-name="content-container">
      <div className="bg-[rgba(255,255,255,0)] relative shrink-0 size-[16px]" data-name="Arrows / caret-up">
        <div className="absolute inset-[33.67%_27%_40.33%_27%]" data-name="Vector">
          <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 7.35999 4.16">
            <path clipRule="evenodd" d={svgPaths.p4689670} fill="var(--fill-0, #60646C)" fillRule="evenodd" id="Vector" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Frame47() {
  return (
    <div className="content-stretch flex items-center relative shrink-0 w-full">
      <div className="bg-[rgba(255,255,255,0)] content-stretch flex flex-[1_0_0] items-start min-h-px min-w-px relative" data-name="Heading">
        <p className="font-['Poppins:Regular',sans-serif] leading-[30px] not-italic relative shrink-0 text-[#1c2024] text-[24px] tracking-[-0.1px] whitespace-nowrap">Dados pessoais</p>
      </div>
      <div className="bg-[rgba(255,255,255,0)] content-stretch flex flex-col items-start relative shrink-0" data-name="Icon Button">
        <ContentContainer />
      </div>
    </div>
  );
}

function InputContainer() {
  return (
    <div className="flex-[1_0_0] h-full min-h-px min-w-px relative" data-name="input-container">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center px-[4px] relative size-full">
          <p className="flex-[1_0_0] font-['Poppins:Regular',sans-serif] leading-[20px] min-h-px min-w-px not-italic relative text-[14px] text-[rgba(0,5,29,0.45)]">Digite o nome</p>
        </div>
      </div>
    </div>
  );
}

function Root() {
  return (
    <div className="bg-[rgba(255,255,255,0.9)] h-[32px] relative shrink-0 w-full" data-name="root">
      <div aria-hidden="true" className="absolute border border-[#d9d9e0] border-solid inset-0 pointer-events-none" />
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center px-[4px] relative size-full">
          <InputContainer />
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
          <p className="flex-[1_0_0] font-['Poppins:Regular',sans-serif] leading-[20px] min-h-px min-w-px not-italic relative text-[14px] text-[rgba(0,5,29,0.45)]">Digite o sobrenome</p>
        </div>
      </div>
    </div>
  );
}

function Root1() {
  return (
    <div className="bg-[rgba(255,255,255,0.9)] h-[32px] relative shrink-0 w-full" data-name="root">
      <div aria-hidden="true" className="absolute border border-[#d9d9e0] border-solid inset-0 pointer-events-none" />
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center px-[4px] relative size-full">
          <InputContainer1 />
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
          <p className="flex-[1_0_0] font-['Poppins:Regular',sans-serif] leading-[20px] min-h-px min-w-px not-italic relative text-[14px] text-[rgba(0,5,29,0.45)]">dd/mm/aaaa</p>
        </div>
      </div>
    </div>
  );
}

function Root2() {
  return (
    <div className="bg-[rgba(255,255,255,0.9)] h-[32px] relative shrink-0 w-full" data-name="root">
      <div aria-hidden="true" className="absolute border border-[#d9d9e0] border-solid inset-0 pointer-events-none" />
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center px-[4px] relative size-full">
          <InputContainer2 />
        </div>
      </div>
    </div>
  );
}

function InputContainer3() {
  return (
    <div className="flex-[1_0_0] h-full min-h-px min-w-px relative" data-name="input-container">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center px-[4px] relative size-full">
          <p className="flex-[1_0_0] font-['Poppins:Regular',sans-serif] leading-[20px] min-h-px min-w-px not-italic relative text-[14px] text-[rgba(0,5,29,0.45)]">Selecione a nacionalidade</p>
        </div>
      </div>
    </div>
  );
}

function ContentContainer1() {
  return (
    <div className="content-stretch flex items-center justify-center overflow-clip relative shrink-0 size-[24px]" data-name="content-container">
      <div className="bg-[rgba(255,255,255,0)] relative shrink-0 size-[16px]" data-name="Arrows / caret-down">
        <div className="absolute inset-[40.33%_27%_33.67%_27%]" data-name="Vector">
          <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 7.35999 4.16">
            <path clipRule="evenodd" d={svgPaths.p6939480} fill="var(--fill-0, #60646C)" fillRule="evenodd" id="Vector" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function ButtonContainer() {
  return (
    <div className="content-stretch flex items-center pl-[4px] relative shrink-0" data-name="button-container">
      <div className="bg-[rgba(255,255,255,0)] content-stretch flex flex-col items-start relative shrink-0" data-name="Icon Button">
        <ContentContainer1 />
      </div>
    </div>
  );
}

function Root3() {
  return (
    <div className="bg-[rgba(255,255,255,0.9)] h-[32px] relative shrink-0 w-full" data-name="root">
      <div aria-hidden="true" className="absolute border border-[#d9d9e0] border-solid inset-0 pointer-events-none" />
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center px-[4px] relative size-full">
          <InputContainer3 />
          <ButtonContainer />
        </div>
      </div>
    </div>
  );
}

function InputContainer4() {
  return (
    <div className="flex-[1_0_0] h-full min-h-px min-w-px relative" data-name="input-container">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center px-[4px] relative size-full">
          <p className="flex-[1_0_0] font-['Poppins:Regular',sans-serif] leading-[20px] min-h-px min-w-px not-italic relative text-[14px] text-[rgba(0,5,29,0.45)]">000.000.000-00</p>
        </div>
      </div>
    </div>
  );
}

function Root4() {
  return (
    <div className="bg-[rgba(255,255,255,0.9)] h-[32px] relative shrink-0 w-full" data-name="root">
      <div aria-hidden="true" className="absolute border border-[#d9d9e0] border-solid inset-0 pointer-events-none" />
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center px-[4px] relative size-full">
          <InputContainer4 />
        </div>
      </div>
    </div>
  );
}

function Frame2() {
  return (
    <div className="content-start flex flex-wrap gap-[16px_32px] items-start relative shrink-0 w-full">
      <div className="bg-[rgba(255,255,255,0)] content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-[376px]" data-name="Text Field">
        <p className="font-['Poppins:Medium',sans-serif] leading-[20px] not-italic relative shrink-0 text-[#1c2024] text-[14px] w-full">Nome</p>
        <Root />
      </div>
      <div className="bg-[rgba(255,255,255,0)] content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-[376px]" data-name="Text Field">
        <p className="font-['Poppins:Medium',sans-serif] leading-[20px] not-italic relative shrink-0 text-[#1c2024] text-[14px] w-full">Sobrenome</p>
        <Root1 />
      </div>
      <div className="bg-[rgba(255,255,255,0)] content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-[376px]" data-name="Text Field">
        <p className="font-['Poppins:Medium',sans-serif] leading-[20px] not-italic relative shrink-0 text-[#1c2024] text-[14px] w-full">Data de Nascimento</p>
        <Root2 />
      </div>
      <div className="bg-[rgba(255,255,255,0)] content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-[376px]" data-name="Text Field">
        <p className="font-['Poppins:Medium',sans-serif] leading-[20px] not-italic relative shrink-0 text-[#1c2024] text-[14px] w-full">Nacionalidade</p>
        <Root3 />
      </div>
      <div className="bg-[rgba(255,255,255,0)] content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-[376px]" data-name="Text Field">
        <p className="font-['Poppins:Medium',sans-serif] leading-[20px] not-italic relative shrink-0 text-[#1c2024] text-[14px] w-full">CPF</p>
        <Root4 />
      </div>
    </div>
  );
}

function Frame1() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full">
      <div className="bg-[rgba(255,255,255,0)] content-stretch flex items-start relative shrink-0 w-full" data-name="Heading">
        <p className="font-['Poppins:Regular',sans-serif] leading-[26px] not-italic relative shrink-0 text-[#1c2024] text-[18px] tracking-[-0.04px] whitespace-nowrap">Adulto 1</p>
      </div>
      <Frame2 />
    </div>
  );
}

function InputContainer5() {
  return (
    <div className="flex-[1_0_0] h-full min-h-px min-w-px relative" data-name="input-container">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center px-[4px] relative size-full">
          <p className="flex-[1_0_0] font-['Poppins:Regular',sans-serif] leading-[20px] min-h-px min-w-px not-italic relative text-[14px] text-[rgba(0,5,29,0.45)]">Digite o nome</p>
        </div>
      </div>
    </div>
  );
}

function Root5() {
  return (
    <div className="bg-[rgba(255,255,255,0.9)] h-[32px] relative shrink-0 w-full" data-name="root">
      <div aria-hidden="true" className="absolute border border-[#d9d9e0] border-solid inset-0 pointer-events-none" />
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center px-[4px] relative size-full">
          <InputContainer5 />
        </div>
      </div>
    </div>
  );
}

function InputContainer6() {
  return (
    <div className="flex-[1_0_0] h-full min-h-px min-w-px relative" data-name="input-container">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center px-[4px] relative size-full">
          <p className="flex-[1_0_0] font-['Poppins:Regular',sans-serif] leading-[20px] min-h-px min-w-px not-italic relative text-[14px] text-[rgba(0,5,29,0.45)]">Digite o sobrenome</p>
        </div>
      </div>
    </div>
  );
}

function Root6() {
  return (
    <div className="bg-[rgba(255,255,255,0.9)] h-[32px] relative shrink-0 w-full" data-name="root">
      <div aria-hidden="true" className="absolute border border-[#d9d9e0] border-solid inset-0 pointer-events-none" />
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center px-[4px] relative size-full">
          <InputContainer6 />
        </div>
      </div>
    </div>
  );
}

function InputContainer7() {
  return (
    <div className="flex-[1_0_0] h-full min-h-px min-w-px relative" data-name="input-container">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center px-[4px] relative size-full">
          <p className="flex-[1_0_0] font-['Poppins:Regular',sans-serif] leading-[20px] min-h-px min-w-px not-italic relative text-[14px] text-[rgba(0,5,29,0.45)]">dd/mm/aaaa</p>
        </div>
      </div>
    </div>
  );
}

function Root7() {
  return (
    <div className="bg-[rgba(255,255,255,0.9)] h-[32px] relative shrink-0 w-full" data-name="root">
      <div aria-hidden="true" className="absolute border border-[#d9d9e0] border-solid inset-0 pointer-events-none" />
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center px-[4px] relative size-full">
          <InputContainer7 />
        </div>
      </div>
    </div>
  );
}

function InputContainer8() {
  return (
    <div className="flex-[1_0_0] h-full min-h-px min-w-px relative" data-name="input-container">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center px-[4px] relative size-full">
          <p className="flex-[1_0_0] font-['Poppins:Regular',sans-serif] leading-[20px] min-h-px min-w-px not-italic relative text-[14px] text-[rgba(0,5,29,0.45)]">Selecione a nacionalidade</p>
        </div>
      </div>
    </div>
  );
}

function ContentContainer2() {
  return (
    <div className="content-stretch flex items-center justify-center overflow-clip relative shrink-0 size-[24px]" data-name="content-container">
      <div className="bg-[rgba(255,255,255,0)] relative shrink-0 size-[16px]" data-name="Arrows / caret-down">
        <div className="absolute inset-[40.33%_27%_33.67%_27%]" data-name="Vector">
          <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 7.35999 4.16">
            <path clipRule="evenodd" d={svgPaths.p6939480} fill="var(--fill-0, #60646C)" fillRule="evenodd" id="Vector" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function ButtonContainer1() {
  return (
    <div className="content-stretch flex items-center pl-[4px] relative shrink-0" data-name="button-container">
      <div className="bg-[rgba(255,255,255,0)] content-stretch flex flex-col items-start relative shrink-0" data-name="Icon Button">
        <ContentContainer2 />
      </div>
    </div>
  );
}

function Root8() {
  return (
    <div className="bg-[rgba(255,255,255,0.9)] h-[32px] relative shrink-0 w-full" data-name="root">
      <div aria-hidden="true" className="absolute border border-[#d9d9e0] border-solid inset-0 pointer-events-none" />
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center px-[4px] relative size-full">
          <InputContainer8 />
          <ButtonContainer1 />
        </div>
      </div>
    </div>
  );
}

function InputContainer9() {
  return (
    <div className="flex-[1_0_0] h-full min-h-px min-w-px relative" data-name="input-container">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center px-[4px] relative size-full">
          <p className="flex-[1_0_0] font-['Poppins:Regular',sans-serif] leading-[20px] min-h-px min-w-px not-italic relative text-[14px] text-[rgba(0,5,29,0.45)]">000.000.000-00</p>
        </div>
      </div>
    </div>
  );
}

function Root9() {
  return (
    <div className="bg-[rgba(255,255,255,0.9)] h-[32px] relative shrink-0 w-full" data-name="root">
      <div aria-hidden="true" className="absolute border border-[#d9d9e0] border-solid inset-0 pointer-events-none" />
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center px-[4px] relative size-full">
          <InputContainer9 />
        </div>
      </div>
    </div>
  );
}

function Frame7() {
  return (
    <div className="content-start flex flex-wrap gap-[16px_32px] items-start relative shrink-0 w-full">
      <div className="bg-[rgba(255,255,255,0)] content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-[376px]" data-name="Text Field">
        <p className="font-['Poppins:Medium',sans-serif] leading-[20px] not-italic relative shrink-0 text-[#1c2024] text-[14px] w-full">Nome</p>
        <Root5 />
      </div>
      <div className="bg-[rgba(255,255,255,0)] content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-[376px]" data-name="Text Field">
        <p className="font-['Poppins:Medium',sans-serif] leading-[20px] not-italic relative shrink-0 text-[#1c2024] text-[14px] w-full">Sobrenome</p>
        <Root6 />
      </div>
      <div className="bg-[rgba(255,255,255,0)] content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-[376px]" data-name="Text Field">
        <p className="font-['Poppins:Medium',sans-serif] leading-[20px] not-italic relative shrink-0 text-[#1c2024] text-[14px] w-full">Data de Nascimento</p>
        <Root7 />
      </div>
      <div className="bg-[rgba(255,255,255,0)] content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-[376px]" data-name="Text Field">
        <p className="font-['Poppins:Medium',sans-serif] leading-[20px] not-italic relative shrink-0 text-[#1c2024] text-[14px] w-full">Nacionalidade</p>
        <Root8 />
      </div>
      <div className="bg-[rgba(255,255,255,0)] content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-[376px]" data-name="Text Field">
        <p className="font-['Poppins:Medium',sans-serif] leading-[20px] not-italic relative shrink-0 text-[#1c2024] text-[14px] w-full">CPF</p>
        <Root9 />
      </div>
    </div>
  );
}

function Frame6() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full">
      <div className="bg-[rgba(255,255,255,0)] content-stretch flex items-start relative shrink-0 w-full" data-name="Heading">
        <p className="font-['Poppins:Regular',sans-serif] leading-[26px] not-italic relative shrink-0 text-[#1c2024] text-[18px] tracking-[-0.04px] whitespace-nowrap">Adulto 2</p>
      </div>
      <Frame7 />
    </div>
  );
}

function Frame11() {
  return (
    <div className="content-stretch flex flex-col gap-[32px] items-start relative shrink-0 w-full">
      <Frame1 />
      <Frame6 />
    </div>
  );
}

function Frame3() {
  return (
    <div className="relative shrink-0 w-full">
      <div aria-hidden="true" className="absolute border border-[#d9d9e0] border-solid inset-0 pointer-events-none" />
      <div className="content-stretch flex flex-col gap-[16px] items-start p-[16px] relative w-full">
        <Frame47 />
        <Frame11 />
        <div className="bg-[#3e63dd] content-stretch flex gap-[12px] h-[40px] items-center justify-center px-[16px] relative rounded-[9999px] shrink-0 w-[240px]" data-name="Button">
          <div className="flex flex-col font-['Poppins:Medium',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[16px] text-white whitespace-nowrap">
            <p className="leading-[24px]">Próximo</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function Radio() {
  return (
    <div className="bg-[rgba(255,255,255,0.9)] pointer-events-none relative rounded-[9999px] shrink-0 size-[14px]" data-name="radio">
      <div className="absolute inset-0 rounded-[inherit] shadow-[inset_0px_1.5px_2px_0px_rgba(0,0,0,0.1),inset_0px_1.5px_2px_0px_rgba(0,0,85,0.02)]" />
      <div aria-hidden="true" className="absolute border border-[rgba(0,6,46,0.2)] border-solid inset-0 rounded-[9999px]" />
    </div>
  );
}

function RadioContainer() {
  return (
    <div className="content-stretch flex h-[16px] items-center relative shrink-0" data-name="radio-container">
      <Radio />
    </div>
  );
}

function Frame26() {
  return (
    <div className="content-stretch flex gap-[16px] items-center relative shrink-0">
      <div className="bg-[rgba(255,255,255,0)] content-stretch flex gap-[8px] items-start relative shrink-0" data-name="Radio">
        <RadioContainer />
        <p className="font-['Poppins:Regular',sans-serif] leading-[16px] not-italic relative shrink-0 text-[#1c2024] text-[12px] tracking-[0.04px] whitespace-nowrap">Pix</p>
      </div>
      <div className="bg-[rgba(0,164,51,0.1)] content-stretch flex gap-[6px] items-center justify-center overflow-clip px-[6px] py-[2px] relative shrink-0" data-name="Badge">
        <div className="flex flex-col font-['Poppins:Medium',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[12px] text-[rgba(0,113,63,0.87)] tracking-[0.04px] whitespace-nowrap">
          <p className="leading-[16px]">Até 3% OFF</p>
        </div>
      </div>
    </div>
  );
}

function Radio1() {
  return (
    <div className="bg-[rgba(255,255,255,0.9)] pointer-events-none relative rounded-[9999px] shrink-0 size-[14px]" data-name="radio">
      <div className="absolute inset-0 rounded-[inherit] shadow-[inset_0px_1.5px_2px_0px_rgba(0,0,0,0.1),inset_0px_1.5px_2px_0px_rgba(0,0,85,0.02)]" />
      <div aria-hidden="true" className="absolute border border-[rgba(0,6,46,0.2)] border-solid inset-0 rounded-[9999px]" />
    </div>
  );
}

function RadioContainer1() {
  return (
    <div className="content-stretch flex h-[16px] items-center relative shrink-0" data-name="radio-container">
      <Radio1 />
    </div>
  );
}

function Frame28() {
  return (
    <div className="content-stretch flex gap-[16px] items-center relative shrink-0">
      <div className="bg-[rgba(255,255,255,0)] content-stretch flex gap-[8px] items-start relative shrink-0" data-name="Radio">
        <RadioContainer1 />
        <p className="font-['Poppins:Regular',sans-serif] leading-[16px] not-italic relative shrink-0 text-[#1c2024] text-[12px] tracking-[0.04px] whitespace-nowrap">Boleto</p>
      </div>
      <div className="bg-[rgba(0,164,51,0.1)] content-stretch flex gap-[6px] items-center justify-center overflow-clip px-[6px] py-[2px] relative shrink-0" data-name="Badge">
        <div className="flex flex-col font-['Poppins:Medium',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[12px] text-[rgba(0,113,63,0.87)] tracking-[0.04px] whitespace-nowrap">
          <p className="leading-[16px]">Até 70% de cashback</p>
        </div>
      </div>
    </div>
  );
}

function Frame27() {
  return (
    <div className="relative shrink-0 w-full">
      <div aria-hidden="true" className="absolute border border-[#d9d9e0] border-solid inset-0 pointer-events-none" />
      <div className="content-stretch flex flex-col gap-[16px] items-start p-[16px] relative w-full">
        <Frame26 />
        <Frame28 />
      </div>
    </div>
  );
}

function Radio2() {
  return (
    <div className="bg-[rgba(255,255,255,0.9)] pointer-events-none relative rounded-[9999px] shrink-0 size-[14px]" data-name="radio">
      <div className="absolute inset-0 rounded-[inherit] shadow-[inset_0px_1.5px_2px_0px_rgba(0,0,0,0.1),inset_0px_1.5px_2px_0px_rgba(0,0,85,0.02)]" />
      <div aria-hidden="true" className="absolute border border-[rgba(0,6,46,0.2)] border-solid inset-0 rounded-[9999px]" />
    </div>
  );
}

function RadioContainer2() {
  return (
    <div className="content-stretch flex h-[16px] items-center relative shrink-0" data-name="radio-container">
      <Radio2 />
    </div>
  );
}

function Frame30() {
  return (
    <div className="content-stretch flex gap-[16px] items-center relative shrink-0">
      <div className="bg-[rgba(255,255,255,0)] content-stretch flex gap-[8px] items-start relative shrink-0" data-name="Radio">
        <RadioContainer2 />
        <p className="font-['Poppins:Regular',sans-serif] leading-[16px] not-italic relative shrink-0 text-[#1c2024] text-[12px] tracking-[0.04px] whitespace-nowrap">Cartão de Crédito</p>
      </div>
      <div className="bg-[rgba(0,0,51,0.06)] content-stretch flex gap-[6px] items-center justify-center overflow-clip px-[6px] py-[2px] relative shrink-0" data-name="Badge">
        <div className="flex flex-col font-['Poppins:Medium',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[12px] text-[rgba(0,7,20,0.62)] tracking-[0.04px] whitespace-nowrap">
          <p className="leading-[16px]">Pague em até 6x sem juros</p>
        </div>
      </div>
    </div>
  );
}

function Radio3() {
  return (
    <div className="bg-[rgba(255,255,255,0.9)] pointer-events-none relative rounded-[9999px] shrink-0 size-[14px]" data-name="radio">
      <div className="absolute inset-0 rounded-[inherit] shadow-[inset_0px_1.5px_2px_0px_rgba(0,0,0,0.1),inset_0px_1.5px_2px_0px_rgba(0,0,85,0.02)]" />
      <div aria-hidden="true" className="absolute border border-[rgba(0,6,46,0.2)] border-solid inset-0 rounded-[9999px]" />
    </div>
  );
}

function RadioContainer3() {
  return (
    <div className="content-stretch flex h-[16px] items-center relative shrink-0" data-name="radio-container">
      <Radio3 />
    </div>
  );
}

function Frame31() {
  return (
    <div className="content-stretch flex gap-[16px] items-center relative shrink-0">
      <div className="bg-[rgba(255,255,255,0)] content-stretch flex gap-[8px] items-start relative shrink-0" data-name="Radio">
        <RadioContainer3 />
        <p className="font-['Poppins:Regular',sans-serif] leading-[16px] not-italic relative shrink-0 text-[#1c2024] text-[12px] tracking-[0.04px] whitespace-nowrap">2 cartões de crédito</p>
      </div>
      <div className="bg-[rgba(0,0,51,0.06)] content-stretch flex gap-[6px] items-center justify-center overflow-clip px-[6px] py-[2px] relative shrink-0" data-name="Badge">
        <div className="flex flex-col font-['Poppins:Medium',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[12px] text-[rgba(0,7,20,0.62)] tracking-[0.04px] whitespace-nowrap">
          <p className="leading-[16px]">Pague em até 6x sem juros</p>
        </div>
      </div>
    </div>
  );
}

function Frame29() {
  return (
    <div className="relative shrink-0 w-full">
      <div aria-hidden="true" className="absolute border border-[#d9d9e0] border-solid inset-0 pointer-events-none" />
      <div className="content-stretch flex flex-col gap-[16px] items-start p-[16px] relative w-full">
        <Frame30 />
        <Frame31 />
      </div>
    </div>
  );
}

function Radio4() {
  return (
    <div className="bg-[rgba(255,255,255,0.9)] pointer-events-none relative rounded-[9999px] shrink-0 size-[14px]" data-name="radio">
      <div className="absolute inset-0 rounded-[inherit] shadow-[inset_0px_1.5px_2px_0px_rgba(0,0,0,0.1),inset_0px_1.5px_2px_0px_rgba(0,0,85,0.02)]" />
      <div aria-hidden="true" className="absolute border border-[rgba(0,6,46,0.2)] border-solid inset-0 rounded-[9999px]" />
    </div>
  );
}

function RadioContainer4() {
  return (
    <div className="content-stretch flex h-[16px] items-center relative shrink-0" data-name="radio-container">
      <Radio4 />
    </div>
  );
}

function Frame33() {
  return (
    <div className="content-stretch flex gap-[16px] items-center relative shrink-0">
      <div className="bg-[rgba(255,255,255,0)] content-stretch flex gap-[8px] items-start relative shrink-0" data-name="Radio">
        <RadioContainer4 />
        <p className="font-['Poppins:Regular',sans-serif] leading-[16px] not-italic relative shrink-0 text-[#1c2024] text-[12px] tracking-[0.04px] whitespace-nowrap">Tribz</p>
      </div>
    </div>
  );
}

function Radio5() {
  return (
    <div className="relative shrink-0 size-[14px]" data-name="radio">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14 14">
        <g filter="url(#filter0_ii_23_16762)" id="radio">
          <path d={svgPaths.p337bf200} fill="var(--fill-0, #3E63DD)" />
          <circle cx="7" cy="7" fill="var(--fill-0, white)" id="indicator" r="3" />
        </g>
        <defs>
          <filter colorInterpolationFilters="sRGB" filterUnits="userSpaceOnUse" height="15.5" id="filter0_ii_23_16762" width="14" x="0" y="0">
            <feFlood floodOpacity="0" result="BackgroundImageFix" />
            <feBlend in="SourceGraphic" in2="BackgroundImageFix" mode="normal" result="shape" />
            <feColorMatrix in="SourceAlpha" result="hardAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" />
            <feOffset dy="1.5" />
            <feGaussianBlur stdDeviation="1" />
            <feComposite in2="hardAlpha" k2="-1" k3="1" operator="arithmetic" />
            <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.333333 0 0 0 0.0235294 0" />
            <feBlend in2="shape" mode="normal" result="effect1_innerShadow_23_16762" />
            <feColorMatrix in="SourceAlpha" result="hardAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" />
            <feOffset dy="1.5" />
            <feGaussianBlur stdDeviation="1" />
            <feComposite in2="hardAlpha" k2="-1" k3="1" operator="arithmetic" />
            <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.1 0" />
            <feBlend in2="effect1_innerShadow_23_16762" mode="normal" result="effect2_innerShadow_23_16762" />
          </filter>
        </defs>
      </svg>
    </div>
  );
}

function RadioContainer5() {
  return (
    <div className="content-stretch flex h-[16px] items-center relative shrink-0" data-name="radio-container">
      <Radio5 />
    </div>
  );
}

function Frame34() {
  return (
    <div className="content-stretch flex gap-[16px] items-center relative shrink-0">
      <div className="bg-[rgba(255,255,255,0)] content-stretch flex gap-[8px] items-start relative shrink-0" data-name="Radio">
        <RadioContainer5 />
        <p className="font-['Poppins:Regular',sans-serif] leading-[16px] not-italic relative shrink-0 text-[#1c2024] text-[12px] tracking-[0.04px] whitespace-nowrap">Tribz + Cartão</p>
      </div>
    </div>
  );
}

function Frame32() {
  return (
    <div className="relative shrink-0 w-full">
      <div aria-hidden="true" className="absolute border border-[#d9d9e0] border-solid inset-0 pointer-events-none" />
      <div className="content-stretch flex flex-col gap-[16px] items-start p-[16px] relative w-full">
        <Frame33 />
        <Frame34 />
      </div>
    </div>
  );
}

function Frame8() {
  return (
    <div className="relative shrink-0 w-full">
      <div aria-hidden="true" className="absolute border border-[#d9d9e0] border-solid inset-0 pointer-events-none" />
      <div className="content-stretch flex flex-col gap-[16px] items-start p-[16px] relative w-full">
        <div className="bg-[rgba(255,255,255,0)] content-stretch flex items-start relative shrink-0 w-full" data-name="Heading">
          <p className="font-['Poppins:Regular',sans-serif] leading-[30px] not-italic relative shrink-0 text-[#1c2024] text-[24px] tracking-[-0.1px] whitespace-nowrap">Como você quer pagar?</p>
        </div>
        <div className="bg-[rgba(255,255,255,0)] content-stretch flex items-start relative shrink-0" data-name="Heading">
          <p className="font-['Poppins:Regular',sans-serif] leading-[24px] not-italic relative shrink-0 text-[#1c2024] text-[16px] whitespace-nowrap">Destaques</p>
        </div>
        <Frame27 />
        <div className="bg-[rgba(255,255,255,0)] content-stretch flex items-start relative shrink-0" data-name="Heading">
          <p className="font-['Poppins:Regular',sans-serif] leading-[24px] not-italic relative shrink-0 text-[#1c2024] text-[16px] whitespace-nowrap">Mais usados</p>
        </div>
        <Frame29 />
        <div className="bg-[rgba(255,255,255,0)] content-stretch flex items-start relative shrink-0" data-name="Heading">
          <p className="font-['Poppins:Regular',sans-serif] leading-[24px] not-italic relative shrink-0 text-[#1c2024] text-[16px] whitespace-nowrap">Pontos</p>
        </div>
        <Frame32 />
      </div>
    </div>
  );
}

function Frame41() {
  return (
    <div className="content-stretch flex items-start justify-between relative shrink-0 w-full">
      <div className="bg-[rgba(255,255,255,0)] content-stretch flex items-start relative shrink-0" data-name="Text">
        <p className="font-['Poppins:Light',sans-serif] leading-[16px] not-italic relative shrink-0 text-[#60646c] text-[12px] tracking-[0.04px] whitespace-nowrap">Hospedagem para 2 pessoas</p>
      </div>
      <div className="bg-[rgba(255,255,255,0)] content-stretch flex items-start relative shrink-0" data-name="Text">
        <p className="font-['Poppins:Light',sans-serif] leading-[16px] not-italic relative shrink-0 text-[#60646c] text-[12px] tracking-[0.04px] whitespace-nowrap">36.000 tribz</p>
      </div>
    </div>
  );
}

function Frame42() {
  return (
    <div className="content-stretch flex items-start justify-between relative shrink-0 w-full">
      <div className="bg-[rgba(255,255,255,0)] content-stretch flex items-start relative shrink-0" data-name="Text">
        <p className="font-['Poppins:Light',sans-serif] leading-[16px] not-italic relative shrink-0 text-[#60646c] text-[12px] tracking-[0.04px] whitespace-nowrap">Taxas e impostos</p>
      </div>
      <div className="bg-[rgba(255,255,255,0)] content-stretch flex items-start relative shrink-0" data-name="Text">
        <p className="font-['Poppins:Light',sans-serif] leading-[16px] not-italic relative shrink-0 text-[#60646c] text-[12px] tracking-[0.04px] whitespace-nowrap">1.000 tribz</p>
      </div>
    </div>
  );
}

function Frame43() {
  return (
    <div className="content-stretch flex items-start justify-between relative shrink-0 w-full">
      <div className="bg-[rgba(255,255,255,0)] content-stretch flex items-start relative shrink-0" data-name="Heading">
        <p className="font-['Poppins:Regular',sans-serif] leading-[26px] not-italic relative shrink-0 text-[#1c2024] text-[18px] tracking-[-0.04px] whitespace-nowrap">Total</p>
      </div>
      <div className="bg-[rgba(255,255,255,0)] content-stretch flex items-start relative shrink-0" data-name="Heading">
        <p className="font-['Poppins:Regular',sans-serif] leading-[26px] not-italic relative shrink-0 text-[#1c2024] text-[18px] tracking-[-0.04px] whitespace-nowrap">37.000 tribz</p>
      </div>
    </div>
  );
}

function Frame39() {
  return (
    <div className="bg-[#f0f0f0] content-stretch flex flex-col gap-[16px] items-start p-[16px] relative shrink-0 w-[360px]">
      <div className="bg-[rgba(255,255,255,0)] content-stretch flex items-start relative shrink-0" data-name="Heading">
        <p className="font-['Poppins:Regular',sans-serif] leading-[26px] not-italic relative shrink-0 text-[#1c2024] text-[18px] tracking-[-0.04px] whitespace-nowrap">Resumo da compra</p>
      </div>
      <Frame41 />
      <Frame42 />
      <div className="h-0 relative shrink-0 w-full">
        <div className="absolute inset-[-1px_0_0_0]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 328 1">
            <line id="Line 55" stroke="var(--stroke-0, #D9D9E0)" x2="328" y1="0.5" y2="0.5" />
          </svg>
        </div>
      </div>
      <Frame43 />
    </div>
  );
}

function Frame37() {
  return (
    <div className="content-stretch flex gap-[16px] items-start relative shrink-0">
      <div className="bg-[rgba(255,255,255,0)] content-stretch flex items-start relative shrink-0" data-name="Heading">
        <p className="font-['Poppins:Regular',sans-serif] leading-[26px] not-italic relative shrink-0 text-[#1c2024] text-[18px] tracking-[-0.04px] whitespace-nowrap">18.500 tribz</p>
      </div>
      <div className="bg-[rgba(255,255,255,0)] content-stretch flex items-start relative shrink-0" data-name="Heading">
        <p className="font-['Poppins:Regular',sans-serif] leading-[26px] not-italic relative shrink-0 text-[#1c2024] text-[18px] tracking-[-0.04px] whitespace-nowrap">+</p>
      </div>
      <div className="bg-[rgba(255,255,255,0)] content-stretch flex items-start relative shrink-0" data-name="Heading">
        <p className="font-['Poppins:Regular',sans-serif] leading-[26px] not-italic relative shrink-0 text-[#1c2024] text-[18px] tracking-[-0.04px] whitespace-nowrap">R$ 1.750,59</p>
      </div>
    </div>
  );
}

function Thumb() {
  return (
    <div className="-translate-y-1/2 absolute bg-white right-[-4px] size-[10px] top-1/2" data-name="thumb">
      <div aria-hidden="true" className="absolute border border-[#cdced6] border-solid inset-[-1px] pointer-events-none" />
    </div>
  );
}

function Range() {
  return (
    <div className="-translate-y-1/2 absolute bg-[#3e63dd] h-[6px] left-0 right-3/4 top-1/2" data-name="range">
      <div aria-hidden="true" className="absolute border border-[rgba(0,9,50,0.12)] border-solid inset-0 pointer-events-none" />
      <Thumb />
    </div>
  );
}

function Track() {
  return (
    <div className="bg-[rgba(0,0,51,0.06)] content-stretch flex flex-[1_0_0] h-[6px] items-start min-h-px min-w-px relative" data-name="track">
      <div aria-hidden="true" className="absolute border border-[rgba(0,9,50,0.12)] border-solid inset-0 pointer-events-none" />
      <Range />
    </div>
  );
}

function Frame38() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[16px] h-full items-center justify-center min-h-px min-w-px relative">
      <Frame37 />
      <div className="bg-[rgba(255,255,255,0)] content-stretch flex h-[6px] items-center justify-center relative shrink-0 w-[300px]" data-name="Slider">
        <Track />
      </div>
      <div className="bg-[rgba(255,255,255,0)] content-stretch flex items-start relative shrink-0" data-name="Text">
        <p className="font-['Poppins:Light',sans-serif] leading-[16px] not-italic relative shrink-0 text-[#60646c] text-[12px] tracking-[0.04px] whitespace-nowrap">Seu saldo: 134.000 tribz</p>
      </div>
    </div>
  );
}

function Frame40() {
  return (
    <div className="content-stretch flex gap-[32px] items-center relative shrink-0 w-full">
      <Frame39 />
      <div className="flex flex-[1_0_0] flex-row items-center self-stretch">
        <Frame38 />
      </div>
    </div>
  );
}

function InputContainer10() {
  return (
    <div className="flex-[1_0_0] h-full min-h-px min-w-px relative" data-name="input-container">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center px-[4px] relative size-full">
          <p className="flex-[1_0_0] font-['Poppins:Regular',sans-serif] leading-[20px] min-h-px min-w-px not-italic relative text-[14px] text-[rgba(0,5,29,0.45)]">Informe o número do cartão</p>
        </div>
      </div>
    </div>
  );
}

function Root10() {
  return (
    <div className="bg-[rgba(255,255,255,0.9)] h-[32px] relative shrink-0 w-full" data-name="root">
      <div aria-hidden="true" className="absolute border border-[#d9d9e0] border-solid inset-0 pointer-events-none" />
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center px-[4px] relative size-full">
          <InputContainer10 />
        </div>
      </div>
    </div>
  );
}

function InputContainer11() {
  return (
    <div className="flex-[1_0_0] h-full min-h-px min-w-px relative" data-name="input-container">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center px-[4px] relative size-full">
          <p className="flex-[1_0_0] font-['Poppins:Regular',sans-serif] leading-[20px] min-h-px min-w-px not-italic relative text-[14px] text-[rgba(0,5,29,0.45)]">Como aparece no cartão</p>
        </div>
      </div>
    </div>
  );
}

function Root11() {
  return (
    <div className="bg-[rgba(255,255,255,0.9)] h-[32px] relative shrink-0 w-full" data-name="root">
      <div aria-hidden="true" className="absolute border border-[#d9d9e0] border-solid inset-0 pointer-events-none" />
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center px-[4px] relative size-full">
          <InputContainer11 />
        </div>
      </div>
    </div>
  );
}

function InputContainer12() {
  return (
    <div className="flex-[1_0_0] h-full min-h-px min-w-px relative" data-name="input-container">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center px-[4px] relative size-full">
          <p className="flex-[1_0_0] font-['Poppins:Regular',sans-serif] leading-[20px] min-h-px min-w-px not-italic relative text-[14px] text-[rgba(0,5,29,0.45)]">MM/AA</p>
        </div>
      </div>
    </div>
  );
}

function Root12() {
  return (
    <div className="bg-[rgba(255,255,255,0.9)] h-[32px] relative shrink-0 w-full" data-name="root">
      <div aria-hidden="true" className="absolute border border-[#d9d9e0] border-solid inset-0 pointer-events-none" />
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center px-[4px] relative size-full">
          <InputContainer12 />
        </div>
      </div>
    </div>
  );
}

function InputContainer13() {
  return (
    <div className="flex-[1_0_0] h-full min-h-px min-w-px relative" data-name="input-container">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center px-[4px] relative size-full">
          <p className="flex-[1_0_0] font-['Poppins:Regular',sans-serif] leading-[20px] min-h-px min-w-px not-italic relative text-[14px] text-[rgba(0,5,29,0.45)]">321</p>
        </div>
      </div>
    </div>
  );
}

function Root13() {
  return (
    <div className="bg-[rgba(255,255,255,0.9)] h-[32px] relative shrink-0 w-full" data-name="root">
      <div aria-hidden="true" className="absolute border border-[#d9d9e0] border-solid inset-0 pointer-events-none" />
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center px-[4px] relative size-full">
          <InputContainer13 />
        </div>
      </div>
    </div>
  );
}

function InputContainer14() {
  return (
    <div className="flex-[1_0_0] h-full min-h-px min-w-px relative" data-name="input-container">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center px-[4px] relative size-full">
          <p className="flex-[1_0_0] font-['Poppins:Regular',sans-serif] leading-[20px] min-h-px min-w-px not-italic relative text-[14px] text-[rgba(0,5,29,0.45)]">000.000.000-00</p>
        </div>
      </div>
    </div>
  );
}

function Root14() {
  return (
    <div className="bg-[rgba(255,255,255,0.9)] h-[32px] relative shrink-0 w-full" data-name="root">
      <div aria-hidden="true" className="absolute border border-[#d9d9e0] border-solid inset-0 pointer-events-none" />
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center px-[4px] relative size-full">
          <InputContainer14 />
        </div>
      </div>
    </div>
  );
}

function Frame10() {
  return (
    <div className="content-start flex flex-wrap gap-[16px_32px] items-start relative shrink-0 w-full">
      <div className="bg-[rgba(255,255,255,0)] content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-[376px]" data-name="Text Field">
        <p className="font-['Poppins:Medium',sans-serif] leading-[20px] not-italic relative shrink-0 text-[#1c2024] text-[14px] w-full">Número do cartão</p>
        <Root10 />
      </div>
      <div className="bg-[rgba(255,255,255,0)] content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-[376px]" data-name="Text Field">
        <p className="font-['Poppins:Medium',sans-serif] leading-[20px] not-italic relative shrink-0 text-[#1c2024] text-[14px] w-full">Titular</p>
        <Root11 />
      </div>
      <div className="bg-[rgba(255,255,255,0)] content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-[172px]" data-name="Text Field">
        <p className="font-['Poppins:Medium',sans-serif] leading-[20px] not-italic relative shrink-0 text-[#1c2024] text-[14px] w-full">Vencimento</p>
        <Root12 />
      </div>
      <div className="bg-[rgba(255,255,255,0)] content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-[172px]" data-name="Text Field">
        <p className="font-['Poppins:Medium',sans-serif] leading-[20px] not-italic relative shrink-0 text-[#1c2024] text-[14px] w-full">Código de segurança</p>
        <Root13 />
      </div>
      <div className="bg-[rgba(255,255,255,0)] content-stretch flex flex-[1_0_0] flex-col gap-[8px] items-start min-h-px min-w-px relative" data-name="Text Field">
        <p className="font-['Poppins:Medium',sans-serif] leading-[20px] not-italic relative shrink-0 text-[#1c2024] text-[14px] w-full">CPF</p>
        <Root14 />
      </div>
    </div>
  );
}

function Radio6() {
  return (
    <div className="bg-[rgba(255,255,255,0.9)] pointer-events-none relative rounded-[9999px] shrink-0 size-[20px]" data-name="radio">
      <div className="absolute inset-0 rounded-[inherit] shadow-[inset_0px_1.5px_2px_0px_rgba(0,0,0,0.1),inset_0px_1.5px_2px_0px_rgba(0,0,85,0.02)]" />
      <div aria-hidden="true" className="absolute border border-[rgba(0,6,46,0.2)] border-solid inset-0 rounded-[9999px]" />
    </div>
  );
}

function RadioContainer6() {
  return (
    <div className="content-stretch flex h-[24px] items-center relative shrink-0" data-name="radio-container">
      <Radio6 />
    </div>
  );
}

function Frame44() {
  return (
    <div className="content-stretch flex gap-[4px] items-center relative shrink-0">
      <div className="bg-[rgba(255,255,255,0)] content-stretch flex gap-[12px] items-start relative shrink-0" data-name="Radio">
        <RadioContainer6 />
        <p className="font-['Poppins:Regular',sans-serif] leading-[24px] not-italic relative shrink-0 text-[#1c2024] text-[16px] whitespace-nowrap">Á vista</p>
      </div>
      <div className="bg-[rgba(255,255,255,0)] content-stretch flex items-start relative shrink-0" data-name="Text">
        <p className="font-['Poppins:Light',sans-serif] leading-[20px] not-italic relative shrink-0 text-[#60646c] text-[14px] whitespace-nowrap">R$ 3.922</p>
      </div>
    </div>
  );
}

function Frame36() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-start relative shrink-0">
      <Frame44 />
      <div className="bg-[rgba(255,255,255,0)] content-stretch flex items-start relative shrink-0" data-name="Text">
        <p className="font-['Poppins:Light',sans-serif] leading-[16px] not-italic relative shrink-0 text-[#60646c] text-[12px] tracking-[0.04px] whitespace-nowrap">Total R$ 3.922</p>
      </div>
    </div>
  );
}

function Radio7() {
  return (
    <div className="bg-[rgba(255,255,255,0.9)] pointer-events-none relative rounded-[9999px] shrink-0 size-[20px]" data-name="radio">
      <div className="absolute inset-0 rounded-[inherit] shadow-[inset_0px_1.5px_2px_0px_rgba(0,0,0,0.1),inset_0px_1.5px_2px_0px_rgba(0,0,85,0.02)]" />
      <div aria-hidden="true" className="absolute border border-[rgba(0,6,46,0.2)] border-solid inset-0 rounded-[9999px]" />
    </div>
  );
}

function RadioContainer7() {
  return (
    <div className="content-stretch flex h-[24px] items-center relative shrink-0" data-name="radio-container">
      <Radio7 />
    </div>
  );
}

function Frame46() {
  return (
    <div className="content-stretch flex gap-[4px] items-center relative shrink-0">
      <div className="bg-[rgba(255,255,255,0)] content-stretch flex gap-[12px] items-start relative shrink-0" data-name="Radio">
        <RadioContainer7 />
        <p className="font-['Poppins:Regular',sans-serif] leading-[24px] not-italic relative shrink-0 text-[#1c2024] text-[16px] whitespace-nowrap">2 x sem juros</p>
      </div>
      <div className="bg-[rgba(255,255,255,0)] content-stretch flex items-start relative shrink-0" data-name="Text">
        <p className="font-['Poppins:Light',sans-serif] leading-[20px] not-italic relative shrink-0 text-[#60646c] text-[14px] whitespace-nowrap">de R$ 1.961</p>
      </div>
    </div>
  );
}

function Frame45() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-start relative shrink-0">
      <Frame46 />
      <div className="bg-[rgba(255,255,255,0)] content-stretch flex items-start relative shrink-0" data-name="Text">
        <p className="font-['Poppins:Light',sans-serif] leading-[16px] not-italic relative shrink-0 text-[#60646c] text-[12px] tracking-[0.04px] whitespace-nowrap">Total R$ 3.922</p>
      </div>
    </div>
  );
}

function Radio8() {
  return (
    <div className="bg-[rgba(255,255,255,0.9)] pointer-events-none relative rounded-[9999px] shrink-0 size-[20px]" data-name="radio">
      <div className="absolute inset-0 rounded-[inherit] shadow-[inset_0px_1.5px_2px_0px_rgba(0,0,0,0.1),inset_0px_1.5px_2px_0px_rgba(0,0,85,0.02)]" />
      <div aria-hidden="true" className="absolute border border-[rgba(0,6,46,0.2)] border-solid inset-0 rounded-[9999px]" />
    </div>
  );
}

function RadioContainer8() {
  return (
    <div className="content-stretch flex h-[24px] items-center relative shrink-0" data-name="radio-container">
      <Radio8 />
    </div>
  );
}

function Frame49() {
  return (
    <div className="content-stretch flex gap-[4px] items-center relative shrink-0">
      <div className="bg-[rgba(255,255,255,0)] content-stretch flex gap-[12px] items-start relative shrink-0" data-name="Radio">
        <RadioContainer8 />
        <p className="font-['Poppins:Regular',sans-serif] leading-[24px] not-italic relative shrink-0 text-[#1c2024] text-[16px] whitespace-nowrap">3 x sem juros</p>
      </div>
      <div className="bg-[rgba(255,255,255,0)] content-stretch flex items-start relative shrink-0" data-name="Text">
        <p className="font-['Poppins:Light',sans-serif] leading-[20px] not-italic relative shrink-0 text-[#60646c] text-[14px] whitespace-nowrap">de R$ 1.307</p>
      </div>
    </div>
  );
}

function Frame48() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-start relative shrink-0">
      <Frame49 />
      <div className="bg-[rgba(255,255,255,0)] content-stretch flex items-start relative shrink-0" data-name="Text">
        <p className="font-['Poppins:Light',sans-serif] leading-[16px] not-italic relative shrink-0 text-[#60646c] text-[12px] tracking-[0.04px] whitespace-nowrap">Total R$ 3.922</p>
      </div>
    </div>
  );
}

function Radio9() {
  return (
    <div className="bg-[rgba(255,255,255,0.9)] pointer-events-none relative rounded-[9999px] shrink-0 size-[20px]" data-name="radio">
      <div className="absolute inset-0 rounded-[inherit] shadow-[inset_0px_1.5px_2px_0px_rgba(0,0,0,0.1),inset_0px_1.5px_2px_0px_rgba(0,0,85,0.02)]" />
      <div aria-hidden="true" className="absolute border border-[rgba(0,6,46,0.2)] border-solid inset-0 rounded-[9999px]" />
    </div>
  );
}

function RadioContainer9() {
  return (
    <div className="content-stretch flex h-[24px] items-center relative shrink-0" data-name="radio-container">
      <Radio9 />
    </div>
  );
}

function Frame51() {
  return (
    <div className="content-stretch flex gap-[4px] items-center relative shrink-0">
      <div className="bg-[rgba(255,255,255,0)] content-stretch flex gap-[12px] items-start relative shrink-0" data-name="Radio">
        <RadioContainer9 />
        <p className="font-['Poppins:Regular',sans-serif] leading-[24px] not-italic relative shrink-0 text-[#1c2024] text-[16px] whitespace-nowrap">4 x sem juros</p>
      </div>
      <div className="bg-[rgba(255,255,255,0)] content-stretch flex items-start relative shrink-0" data-name="Text">
        <p className="font-['Poppins:Light',sans-serif] leading-[20px] not-italic relative shrink-0 text-[#60646c] text-[14px] whitespace-nowrap">de R$ 981</p>
      </div>
    </div>
  );
}

function Frame50() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-start relative shrink-0">
      <Frame51 />
      <div className="bg-[rgba(255,255,255,0)] content-stretch flex items-start relative shrink-0" data-name="Text">
        <p className="font-['Poppins:Light',sans-serif] leading-[16px] not-italic relative shrink-0 text-[#60646c] text-[12px] tracking-[0.04px] whitespace-nowrap">Total R$ 3.922</p>
      </div>
    </div>
  );
}

function Radio10() {
  return (
    <div className="bg-[rgba(255,255,255,0.9)] pointer-events-none relative rounded-[9999px] shrink-0 size-[20px]" data-name="radio">
      <div className="absolute inset-0 rounded-[inherit] shadow-[inset_0px_1.5px_2px_0px_rgba(0,0,0,0.1),inset_0px_1.5px_2px_0px_rgba(0,0,85,0.02)]" />
      <div aria-hidden="true" className="absolute border border-[rgba(0,6,46,0.2)] border-solid inset-0 rounded-[9999px]" />
    </div>
  );
}

function RadioContainer10() {
  return (
    <div className="content-stretch flex h-[24px] items-center relative shrink-0" data-name="radio-container">
      <Radio10 />
    </div>
  );
}

function Frame53() {
  return (
    <div className="content-stretch flex gap-[4px] items-center relative shrink-0">
      <div className="bg-[rgba(255,255,255,0)] content-stretch flex gap-[12px] items-start relative shrink-0" data-name="Radio">
        <RadioContainer10 />
        <p className="font-['Poppins:Regular',sans-serif] leading-[24px] not-italic relative shrink-0 text-[#1c2024] text-[16px] whitespace-nowrap">5 x sem juros</p>
      </div>
      <div className="bg-[rgba(255,255,255,0)] content-stretch flex items-start relative shrink-0" data-name="Text">
        <p className="font-['Poppins:Light',sans-serif] leading-[20px] not-italic relative shrink-0 text-[#60646c] text-[14px] whitespace-nowrap">de R$ 784</p>
      </div>
    </div>
  );
}

function Frame52() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-start relative shrink-0">
      <Frame53 />
      <div className="bg-[rgba(255,255,255,0)] content-stretch flex items-start relative shrink-0" data-name="Text">
        <p className="font-['Poppins:Light',sans-serif] leading-[16px] not-italic relative shrink-0 text-[#60646c] text-[12px] tracking-[0.04px] whitespace-nowrap">Total R$ 3.922</p>
      </div>
    </div>
  );
}

function Radio11() {
  return (
    <div className="bg-[rgba(255,255,255,0.9)] pointer-events-none relative rounded-[9999px] shrink-0 size-[20px]" data-name="radio">
      <div className="absolute inset-0 rounded-[inherit] shadow-[inset_0px_1.5px_2px_0px_rgba(0,0,0,0.1),inset_0px_1.5px_2px_0px_rgba(0,0,85,0.02)]" />
      <div aria-hidden="true" className="absolute border border-[rgba(0,6,46,0.2)] border-solid inset-0 rounded-[9999px]" />
    </div>
  );
}

function RadioContainer11() {
  return (
    <div className="content-stretch flex h-[24px] items-center relative shrink-0" data-name="radio-container">
      <Radio11 />
    </div>
  );
}

function Frame55() {
  return (
    <div className="content-stretch flex gap-[4px] items-center relative shrink-0">
      <div className="bg-[rgba(255,255,255,0)] content-stretch flex gap-[12px] items-start relative shrink-0" data-name="Radio">
        <RadioContainer11 />
        <p className="font-['Poppins:Regular',sans-serif] leading-[24px] not-italic relative shrink-0 text-[#1c2024] text-[16px] whitespace-nowrap">6 x sem juros</p>
      </div>
      <div className="bg-[rgba(255,255,255,0)] content-stretch flex items-start relative shrink-0" data-name="Text">
        <p className="font-['Poppins:Light',sans-serif] leading-[20px] not-italic relative shrink-0 text-[#60646c] text-[14px] whitespace-nowrap">de R$ 654</p>
      </div>
    </div>
  );
}

function Frame54() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-start relative shrink-0">
      <Frame55 />
      <div className="bg-[rgba(255,255,255,0)] content-stretch flex items-start relative shrink-0" data-name="Text">
        <p className="font-['Poppins:Light',sans-serif] leading-[16px] not-italic relative shrink-0 text-[#60646c] text-[12px] tracking-[0.04px] whitespace-nowrap">Total R$ 3.922</p>
      </div>
    </div>
  );
}

function Frame35() {
  return (
    <div className="relative shrink-0 w-full">
      <div aria-hidden="true" className="absolute border border-[#d9d9e0] border-solid inset-0 pointer-events-none" />
      <div className="content-stretch flex flex-col gap-[16px] items-start p-[16px] relative w-full">
        <div className="bg-[rgba(255,255,255,0)] content-stretch flex items-start relative shrink-0 w-full" data-name="Heading">
          <p className="font-['Poppins:Regular',sans-serif] leading-[24px] not-italic relative shrink-0 text-[#1c2024] text-[16px] whitespace-nowrap">Em quantas parcelas você quer pagar?</p>
        </div>
        <Frame36 />
        <Frame45 />
        <Frame48 />
        <Frame50 />
        <Frame52 />
        <Frame54 />
      </div>
    </div>
  );
}

function Frame9() {
  return (
    <div className="relative shrink-0 w-full">
      <div aria-hidden="true" className="absolute border border-[#d9d9e0] border-solid inset-0 pointer-events-none" />
      <div className="content-stretch flex flex-col gap-[16px] items-start p-[16px] relative w-full">
        <div className="bg-[rgba(255,255,255,0)] content-stretch flex items-start relative shrink-0 w-full" data-name="Heading">
          <p className="font-['Poppins:Regular',sans-serif] leading-[30px] not-italic relative shrink-0 text-[#1c2024] text-[24px] tracking-[-0.1px] whitespace-nowrap">Complete com os dados do cartão</p>
        </div>
        <div className="bg-[rgba(255,255,255,0)] content-stretch flex items-start relative shrink-0" data-name="Heading">
          <p className="font-['Poppins:Regular',sans-serif] leading-[26px] not-italic relative shrink-0 text-[#1c2024] text-[18px] tracking-[-0.04px] whitespace-nowrap">Como você quer pagar?</p>
        </div>
        <Frame40 />
        <Frame10 />
        <Frame35 />
        <div className="bg-[#3e63dd] content-stretch flex gap-[12px] h-[40px] items-center justify-center px-[16px] relative rounded-[9999px] shrink-0 w-[240px]" data-name="Button">
          <div className="flex flex-col font-['Poppins:Medium',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[16px] text-white whitespace-nowrap">
            <p className="leading-[24px]">Próximo</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function ContentContainer3() {
  return (
    <div className="content-stretch flex items-center justify-center overflow-clip relative shrink-0 size-[32px]" data-name="content-container">
      <div className="bg-[rgba(255,255,255,0)] relative shrink-0 size-[16px]" data-name="Arrows / caret-down">
        <div className="absolute inset-[40.33%_27%_33.67%_27%]" data-name="Vector">
          <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 7.35999 4.16">
            <path clipRule="evenodd" d={svgPaths.p6939480} fill="var(--fill-0, #60646C)" fillRule="evenodd" id="Vector" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Frame56() {
  return (
    <div className="content-stretch flex gap-[16px] items-start relative shrink-0 w-full">
      <div className="bg-[rgba(255,255,255,0)] content-stretch flex flex-[1_0_0] items-start min-h-px min-w-px relative" data-name="Heading">
        <p className="font-['Poppins:Regular',sans-serif] leading-[30px] not-italic relative shrink-0 text-[#1c2024] text-[24px] tracking-[-0.1px] whitespace-nowrap">Em nome de quem emitimos a nota fiscal</p>
      </div>
      <div className="bg-[rgba(255,255,255,0)] content-stretch flex flex-col items-start relative shrink-0" data-name="Icon Button">
        <ContentContainer3 />
      </div>
    </div>
  );
}

function InputContainer15() {
  return (
    <div className="flex-[1_0_0] h-full min-h-px min-w-px relative" data-name="input-container">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center px-[4px] relative size-full">
          <p className="flex-[1_0_0] font-['Poppins:Regular',sans-serif] leading-[20px] min-h-px min-w-px not-italic relative text-[#1c2024] text-[14px] text-left">Pessoa Física</p>
        </div>
      </div>
    </div>
  );
}

function ContentContainer4() {
  return (
    <div className="content-stretch flex items-center justify-center overflow-clip relative shrink-0 size-[24px]" data-name="content-container">
      <div className="bg-[rgba(255,255,255,0)] relative shrink-0 size-[16px]" data-name="Arrows / caret-down">
        <div className="absolute inset-[40.33%_27%_33.67%_27%]" data-name="Vector">
          <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 7.35999 4.16">
            <path clipRule="evenodd" d={svgPaths.p6939480} fill="var(--fill-0, #60646C)" fillRule="evenodd" id="Vector" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function ButtonContainer2() {
  return (
    <div className="content-stretch flex items-center pl-[4px] relative shrink-0" data-name="button-container">
      <div className="bg-[rgba(255,255,255,0)] content-stretch flex flex-col items-start relative shrink-0" data-name="Icon Button">
        <ContentContainer4 />
      </div>
    </div>
  );
}

function Root15() {
  return (
    <div className="bg-[rgba(255,255,255,0.9)] h-[32px] relative shrink-0 w-full" data-name="root">
      <div aria-hidden="true" className="absolute border border-[#d9d9e0] border-solid inset-0 pointer-events-none" />
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center px-[4px] relative size-full">
          <InputContainer15 />
          <ButtonContainer2 />
        </div>
      </div>
    </div>
  );
}

function InputContainer16() {
  return (
    <div className="flex-[1_0_0] h-full min-h-px min-w-px relative" data-name="input-container">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center px-[4px] relative size-full">
          <p className="flex-[1_0_0] font-['Poppins:Regular',sans-serif] leading-[20px] min-h-px min-w-px not-italic relative text-[#1c2024] text-[14px] text-left">Jessyca Araujo Leão</p>
        </div>
      </div>
    </div>
  );
}

function ContentContainer5() {
  return (
    <div className="content-stretch flex items-center justify-center overflow-clip relative shrink-0 size-[24px]" data-name="content-container">
      <div className="bg-[rgba(255,255,255,0)] relative shrink-0 size-[16px]" data-name="Arrows / caret-down">
        <div className="absolute inset-[40.33%_27%_33.67%_27%]" data-name="Vector">
          <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 7.35999 4.16">
            <path clipRule="evenodd" d={svgPaths.p6939480} fill="var(--fill-0, #60646C)" fillRule="evenodd" id="Vector" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function ButtonContainer3() {
  return (
    <div className="content-stretch flex items-center pl-[4px] relative shrink-0" data-name="button-container">
      <div className="bg-[rgba(255,255,255,0)] content-stretch flex flex-col items-start relative shrink-0" data-name="Icon Button">
        <ContentContainer5 />
      </div>
    </div>
  );
}

function Root16() {
  return (
    <div className="bg-[rgba(255,255,255,0.9)] h-[32px] relative shrink-0 w-full" data-name="root">
      <div aria-hidden="true" className="absolute border border-[#d9d9e0] border-solid inset-0 pointer-events-none" />
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center px-[4px] relative size-full">
          <InputContainer16 />
          <ButtonContainer3 />
        </div>
      </div>
    </div>
  );
}

function InputContainer17() {
  return (
    <div className="flex-[1_0_0] h-full min-h-px min-w-px relative" data-name="input-container">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center px-[4px] relative size-full">
          <p className="flex-[1_0_0] font-['Poppins:Regular',sans-serif] leading-[20px] min-h-px min-w-px not-italic relative text-[#1c2024] text-[14px] text-left">123.123.123-50</p>
        </div>
      </div>
    </div>
  );
}

function ContentContainer6() {
  return (
    <div className="content-stretch flex items-center justify-center overflow-clip relative shrink-0 size-[24px]" data-name="content-container">
      <div className="bg-[rgba(255,255,255,0)] relative shrink-0 size-[16px]" data-name="Arrows / caret-down">
        <div className="absolute inset-[40.33%_27%_33.67%_27%]" data-name="Vector">
          <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 7.35999 4.16">
            <path clipRule="evenodd" d={svgPaths.p6939480} fill="var(--fill-0, #60646C)" fillRule="evenodd" id="Vector" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function ButtonContainer4() {
  return (
    <div className="content-stretch flex items-center pl-[4px] relative shrink-0" data-name="button-container">
      <div className="bg-[rgba(255,255,255,0)] content-stretch flex flex-col items-start relative shrink-0" data-name="Icon Button">
        <ContentContainer6 />
      </div>
    </div>
  );
}

function Root17() {
  return (
    <div className="bg-[rgba(255,255,255,0.9)] h-[32px] relative shrink-0 w-full" data-name="root">
      <div aria-hidden="true" className="absolute border border-[#d9d9e0] border-solid inset-0 pointer-events-none" />
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center px-[4px] relative size-full">
          <InputContainer17 />
          <ButtonContainer4 />
        </div>
      </div>
    </div>
  );
}

function InputContainer18() {
  return (
    <div className="flex-[1_0_0] h-full min-h-px min-w-px relative" data-name="input-container">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center px-[4px] relative size-full">
          <p className="flex-[1_0_0] font-['Poppins:Regular',sans-serif] leading-[20px] min-h-px min-w-px not-italic relative text-[#1c2024] text-[14px] text-left">70670-311</p>
        </div>
      </div>
    </div>
  );
}

function ContentContainer7() {
  return (
    <div className="content-stretch flex items-center justify-center overflow-clip relative shrink-0 size-[24px]" data-name="content-container">
      <div className="bg-[rgba(255,255,255,0)] relative shrink-0 size-[16px]" data-name="Arrows / caret-down">
        <div className="absolute inset-[40.33%_27%_33.67%_27%]" data-name="Vector">
          <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 7.35999 4.16">
            <path clipRule="evenodd" d={svgPaths.p6939480} fill="var(--fill-0, #60646C)" fillRule="evenodd" id="Vector" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function ButtonContainer5() {
  return (
    <div className="content-stretch flex items-center pl-[4px] relative shrink-0" data-name="button-container">
      <div className="bg-[rgba(255,255,255,0)] content-stretch flex flex-col items-start relative shrink-0" data-name="Icon Button">
        <ContentContainer7 />
      </div>
    </div>
  );
}

function Root18() {
  return (
    <div className="bg-[rgba(255,255,255,0.9)] h-[32px] relative shrink-0 w-full" data-name="root">
      <div aria-hidden="true" className="absolute border border-[#d9d9e0] border-solid inset-0 pointer-events-none" />
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center px-[4px] relative size-full">
          <InputContainer18 />
          <ButtonContainer5 />
        </div>
      </div>
    </div>
  );
}

function Frame57() {
  return (
    <div className="content-stretch cursor-pointer flex gap-[16px] items-start relative shrink-0 w-full">
      <button className="bg-[rgba(255,255,255,0)] content-stretch flex flex-[1_0_0] flex-col gap-[8px] items-start min-h-px min-w-px relative" data-name="Text Field">
        <p className="font-['Poppins:Medium',sans-serif] leading-[20px] not-italic relative shrink-0 text-[#1c2024] text-[14px] text-left w-full">CPF</p>
        <Root17 />
      </button>
      <button className="bg-[rgba(255,255,255,0)] content-stretch flex flex-[1_0_0] flex-col gap-[8px] items-start min-h-px min-w-px relative" data-name="Text Field">
        <p className="font-['Poppins:Medium',sans-serif] leading-[20px] not-italic relative shrink-0 text-[#1c2024] text-[14px] text-left w-full">CEP</p>
        <Root18 />
      </button>
    </div>
  );
}

function Frame12() {
  return (
    <div className="relative shrink-0 w-full">
      <div aria-hidden="true" className="absolute border border-[#d9d9e0] border-solid inset-0 pointer-events-none" />
      <div className="content-stretch flex flex-col gap-[16px] items-start p-[16px] relative w-full">
        <Frame56 />
        <button className="bg-[rgba(255,255,255,0)] content-stretch cursor-pointer flex flex-col gap-[8px] items-start relative shrink-0 w-[376px]" data-name="Text Field">
          <p className="font-['Poppins:Medium',sans-serif] leading-[20px] not-italic relative shrink-0 text-[#1c2024] text-[14px] text-left w-full">Situação Fiscal</p>
          <Root15 />
        </button>
        <button className="bg-[rgba(255,255,255,0)] content-stretch cursor-pointer flex flex-col gap-[8px] items-start relative shrink-0 w-full" data-name="Text Field">
          <p className="font-['Poppins:Medium',sans-serif] leading-[20px] not-italic relative shrink-0 text-[#1c2024] text-[14px] text-left w-full">Nome completo</p>
          <Root16 />
        </button>
        <Frame57 />
      </div>
    </div>
  );
}

function Frame4() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0 w-[848px]">
      <Frame />
      <Frame3 />
      <Frame8 />
      <Frame9 />
      <Frame12 />
      <div className="bg-[#3e63dd] content-stretch flex gap-[12px] h-[40px] items-center justify-center px-[16px] relative rounded-[9999px] shrink-0 w-[240px]" data-name="Button">
        <div className="flex flex-col font-['Poppins:Medium',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[16px] text-white whitespace-nowrap">
          <p className="leading-[24px]">Efetuar Reserva</p>
        </div>
      </div>
    </div>
  );
}

function ContentContainer8() {
  return (
    <div className="content-stretch flex items-center justify-center overflow-clip relative shrink-0 size-[40px]" data-name="content-container">
      <div className="overflow-clip relative shrink-0 size-[18px]" data-name="Icon / building">
        <div className="absolute inset-[5.21%_13.54%]" data-name="Vector">
          <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 13.125 16.125">
            <g id="Vector">
              <path d={svgPaths.p32adae00} fill="var(--fill-0, #60646C)" />
              <path d={svgPaths.p2472e300} fill="var(--fill-0, #60646C)" />
              <path d={svgPaths.p3f5e6770} fill="var(--fill-0, #60646C)" />
              <path d={svgPaths.p1c53bf80} fill="var(--fill-0, #60646C)" />
              <path d={svgPaths.p4c713c0} fill="var(--fill-0, #60646C)" />
              <path d={svgPaths.p2e9a8e00} fill="var(--fill-0, #60646C)" />
              <path d={svgPaths.p19899600} fill="var(--fill-0, #60646C)" />
              <path d={svgPaths.p203c1500} fill="var(--fill-0, #60646C)" />
              <path d={svgPaths.p33afd00} fill="var(--fill-0, #60646C)" />
              <path d={svgPaths.p3ea0870} fill="var(--fill-0, #60646C)" />
              <path d={svgPaths.p25641d00} fill="var(--fill-0, #60646C)" />
            </g>
          </svg>
        </div>
      </div>
    </div>
  );
}

function Amenity() {
  return (
    <div className="content-stretch flex items-center opacity-90 relative shrink-0" data-name="Amenity">
      <div className="bg-[rgba(255,255,255,0)] content-stretch flex flex-col items-start relative shrink-0" data-name="Icon Button">
        <ContentContainer8 />
      </div>
      <div className="bg-[rgba(255,255,255,0)] content-stretch flex items-start relative shrink-0" data-name="Heading">
        <p className="font-['Poppins:Regular',sans-serif] leading-[30px] not-italic relative shrink-0 text-[#1c2024] text-[24px] tracking-[-0.1px] whitespace-nowrap">Hotel</p>
      </div>
    </div>
  );
}

function ContentContainer9() {
  return (
    <div className="content-stretch flex items-center justify-center overflow-clip relative shrink-0 size-[40px]" data-name="content-container">
      <div className="overflow-clip relative shrink-0 size-[18px]" data-name="Icon / map-pin">
        <div className="absolute inset-[5.21%_13.54%]" data-name="Vector">
          <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 13.125 16.125">
            <g id="Vector">
              <path d={svgPaths.p3cceed40} fill="var(--fill-0, #60646C)" />
              <path d={svgPaths.p3d6ad500} fill="var(--fill-0, #60646C)" />
            </g>
          </svg>
        </div>
      </div>
    </div>
  );
}

function Amenity1() {
  return (
    <div className="content-stretch flex items-center relative shrink-0 w-full" data-name="Amenity">
      <div className="bg-[rgba(255,255,255,0)] content-stretch flex flex-col items-start relative shrink-0" data-name="Icon Button">
        <ContentContainer9 />
      </div>
      <div className="bg-[rgba(255,255,255,0)] content-stretch flex flex-[1_0_0] items-start min-h-px min-w-px relative" data-name="Text">
        <p className="font-['Poppins:Light',sans-serif] leading-[26px] not-italic relative shrink-0 text-[#60646c] text-[18px] tracking-[-0.04px] whitespace-nowrap">Centro, São Paulo</p>
      </div>
    </div>
  );
}

function Frame13() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-start relative shrink-0 w-full">
      <div className="bg-[rgba(255,255,255,0)] content-stretch flex items-start relative shrink-0 w-full" data-name="Heading">
        <p className="font-['Poppins:Regular',sans-serif] leading-[30px] not-italic relative shrink-0 text-[#1c2024] text-[24px] tracking-[-0.1px] whitespace-nowrap">Quality Paulista São Paulo Jardins</p>
      </div>
      <Amenity1 />
    </div>
  );
}

function PassengerRowContainer() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[8px] items-start min-h-px min-w-px relative" data-name="Passenger Row Container">
      <div className="bg-[rgba(255,255,255,0)] content-stretch flex items-start relative shrink-0" data-name="Text">
        <p className="font-['Poppins:Regular',sans-serif] leading-[28px] not-italic relative shrink-0 text-[#60646c] text-[20px] tracking-[-0.08px] whitespace-nowrap">Check-in</p>
      </div>
      <div className="bg-[rgba(255,255,255,0)] content-stretch flex items-start relative shrink-0" data-name="Heading">
        <p className="font-['Poppins:Regular',sans-serif] leading-[30px] not-italic relative shrink-0 text-[#1c2024] text-[24px] tracking-[-0.1px] whitespace-nowrap">Qui, 28 dez 2023</p>
      </div>
      <div className="bg-[rgba(255,255,255,0)] content-stretch flex items-start relative shrink-0" data-name="Text">
        <p className="font-['Poppins:Regular',sans-serif] leading-[28px] not-italic relative shrink-0 text-[#60646c] text-[20px] tracking-[-0.08px] whitespace-nowrap">A partir de 15h</p>
      </div>
    </div>
  );
}

function PassengerRowContainer1() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[8px] items-start min-h-px min-w-px relative" data-name="Passenger Row Container">
      <div className="bg-[rgba(255,255,255,0)] content-stretch flex items-start relative shrink-0" data-name="Text">
        <p className="font-['Poppins:Regular',sans-serif] leading-[28px] not-italic relative shrink-0 text-[#60646c] text-[20px] tracking-[-0.08px] whitespace-nowrap">Check-out</p>
      </div>
      <div className="bg-[rgba(255,255,255,0)] content-stretch flex items-start relative shrink-0" data-name="Heading">
        <p className="font-['Poppins:Regular',sans-serif] leading-[30px] not-italic relative shrink-0 text-[#1c2024] text-[24px] tracking-[-0.1px] whitespace-nowrap">Qu, 3 jan 2026</p>
      </div>
      <div className="bg-[rgba(255,255,255,0)] content-stretch flex items-start relative shrink-0" data-name="Text">
        <p className="font-['Poppins:Regular',sans-serif] leading-[28px] not-italic relative shrink-0 text-[#60646c] text-[20px] tracking-[-0.08px] whitespace-nowrap">Até as 12h</p>
      </div>
    </div>
  );
}

function Frame14() {
  return (
    <div className="content-stretch flex gap-[24px] items-start relative shrink-0 w-full">
      <PassengerRowContainer />
      <div className="flex h-0 items-center justify-center relative self-center shrink-0 w-0" style={{ "--transform-inner-width": "1185", "--transform-inner-height": "21" } as React.CSSProperties}>
        <div className="-rotate-90 flex-none h-full">
          <div className="h-full relative w-[102px]">
            <div className="absolute inset-[-1px_0_0_0]">
              <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 102 1">
                <line id="Line 40" stroke="var(--stroke-0, #D9D9E0)" x2="102" y1="0.5" y2="0.5" />
              </svg>
            </div>
          </div>
        </div>
      </div>
      <PassengerRowContainer1 />
    </div>
  );
}

function Frame16() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full">
      <div className="bg-[rgba(255,255,255,0)] content-stretch flex h-[26px] items-start relative shrink-0 w-[408px]" data-name="Text">
        <p className="font-['Poppins:Light',sans-serif] leading-[26px] not-italic relative shrink-0 text-[#60646c] text-[18px] tracking-[-0.04px] whitespace-nowrap">3 noites, 4 adultos</p>
      </div>
      <div className="bg-[rgba(255,255,255,0)] content-stretch flex items-start relative shrink-0 w-full" data-name="Heading">
        <p className="font-['Poppins:Regular',sans-serif] leading-[26px] not-italic relative shrink-0 text-[#1c2024] text-[18px] tracking-[-0.04px] whitespace-nowrap">Apartamento Standard</p>
      </div>
    </div>
  );
}

function Frame18() {
  return (
    <div className="content-stretch flex gap-[24px] items-start relative shrink-0 w-full">
      <div className="bg-[rgba(255,255,255,0)] content-stretch flex flex-[1_0_0] items-start min-h-px min-w-px relative" data-name="Heading">
        <p className="font-['Poppins:Regular',sans-serif] leading-[20px] not-italic relative shrink-0 text-[#1c2024] text-[14px] whitespace-nowrap">Itens</p>
      </div>
      <div className="bg-[rgba(255,255,255,0)] content-stretch flex items-start relative shrink-0 w-[48px]" data-name="Heading">
        <p className="font-['Poppins:Regular',sans-serif] leading-[20px] not-italic relative shrink-0 text-[#1c2024] text-[14px] whitespace-nowrap">Qtd</p>
      </div>
      <div className="bg-[rgba(255,255,255,0)] content-stretch flex items-start relative shrink-0 w-[90px]" data-name="Heading">
        <p className="font-['Poppins:Regular',sans-serif] leading-[20px] not-italic relative shrink-0 text-[#1c2024] text-[14px] whitespace-nowrap">Preço</p>
      </div>
      <div className="bg-[rgba(255,255,255,0)] content-stretch flex items-start justify-end relative shrink-0 w-[90px]" data-name="Heading">
        <p className="font-['Poppins:Regular',sans-serif] leading-[20px] not-italic relative shrink-0 text-[#1c2024] text-[14px] whitespace-nowrap">Total</p>
      </div>
    </div>
  );
}

function Frame19() {
  return (
    <div className="content-stretch flex gap-[24px] items-start py-[8px] relative shrink-0 w-full">
      <div aria-hidden="true" className="absolute border-[#d9d9e0] border-b border-solid inset-0 pointer-events-none" />
      <div className="bg-[rgba(255,255,255,0)] content-stretch flex flex-[1_0_0] h-[20px] items-start min-h-px min-w-px relative" data-name="Text">
        <p className="flex-[1_0_0] font-['Poppins:Light',sans-serif] leading-[20px] min-h-px min-w-px not-italic relative text-[#60646c] text-[14px]">Apartamento Standard</p>
      </div>
      <div className="bg-[rgba(255,255,255,0)] content-stretch flex h-[20px] items-start relative shrink-0 w-[48px]" data-name="Text">
        <p className="font-['Poppins:Light',sans-serif] leading-[20px] not-italic relative shrink-0 text-[#60646c] text-[14px] whitespace-nowrap">1</p>
      </div>
      <div className="bg-[rgba(255,255,255,0)] content-stretch flex h-[20px] items-start relative shrink-0 w-[90px]" data-name="Text">
        <p className="font-['Poppins:Light',sans-serif] leading-[20px] not-italic relative shrink-0 text-[#60646c] text-[14px] whitespace-nowrap">1,000 tribz</p>
      </div>
      <div className="bg-[rgba(255,255,255,0)] content-stretch flex h-[20px] items-start justify-end relative shrink-0 w-[90px]" data-name="Text">
        <p className="font-['Poppins:Light',sans-serif] leading-[20px] not-italic relative shrink-0 text-[#60646c] text-[14px] whitespace-nowrap">3,000 tribz</p>
      </div>
    </div>
  );
}

function Frame20() {
  return (
    <div className="content-stretch flex gap-[24px] items-start py-[8px] relative shrink-0 w-full">
      <div aria-hidden="true" className="absolute border-[#d9d9e0] border-b border-solid inset-0 pointer-events-none" />
      <div className="bg-[rgba(255,255,255,0)] content-stretch flex flex-[1_0_0] h-[20px] items-start min-h-px min-w-px relative" data-name="Text">
        <p className="flex-[1_0_0] font-['Poppins:Light',sans-serif] leading-[20px] min-h-px min-w-px not-italic relative text-[#60646c] text-[14px]">Apartamento Luxo</p>
      </div>
      <div className="bg-[rgba(255,255,255,0)] content-stretch flex h-[20px] items-start relative shrink-0 w-[48px]" data-name="Text">
        <p className="font-['Poppins:Light',sans-serif] leading-[20px] not-italic relative shrink-0 text-[#60646c] text-[14px] whitespace-nowrap">1</p>
      </div>
      <div className="bg-[rgba(255,255,255,0)] content-stretch flex h-[20px] items-start relative shrink-0 w-[90px]" data-name="Text">
        <p className="font-['Poppins:Light',sans-serif] leading-[20px] not-italic relative shrink-0 text-[#60646c] text-[14px] whitespace-nowrap">1,400 tribz</p>
      </div>
      <div className="bg-[rgba(255,255,255,0)] content-stretch flex h-[20px] items-start relative shrink-0 w-[90px]" data-name="Text">
        <p className="flex-[1_0_0] font-['Poppins:Light',sans-serif] leading-[20px] min-h-px min-w-px not-italic relative text-[#60646c] text-[14px] text-right">3,200 tribz</p>
      </div>
    </div>
  );
}

function Frame25() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full">
      <Frame18 />
      <Frame19 />
      <Frame20 />
    </div>
  );
}

function Frame21() {
  return (
    <div className="content-stretch flex gap-[24px] items-start relative shrink-0 w-full">
      <div className="bg-[rgba(255,255,255,0)] content-stretch flex flex-[1_0_0] items-start min-h-px min-w-px relative" data-name="Heading">
        <p className="font-['Poppins:Regular',sans-serif] leading-[20px] not-italic relative shrink-0 text-[#1c2024] text-[14px] whitespace-nowrap">Subtotal</p>
      </div>
      <div className="bg-[rgba(255,255,255,0)] content-stretch flex h-[20px] items-start relative shrink-0 w-[90px]" data-name="Text">
        <p className="flex-[1_0_0] font-['Poppins:Light',sans-serif] leading-[20px] min-h-px min-w-px not-italic relative text-[#60646c] text-[14px] text-right">6,200 tribz</p>
      </div>
    </div>
  );
}

function Frame22() {
  return (
    <div className="content-stretch flex gap-[24px] items-start relative shrink-0 w-full">
      <div className="bg-[rgba(255,255,255,0)] content-stretch flex flex-[1_0_0] items-start min-h-px min-w-px relative" data-name="Heading">
        <p className="font-['Poppins:Regular',sans-serif] leading-[20px] not-italic relative shrink-0 text-[#1c2024] text-[14px] whitespace-nowrap">Taxas</p>
      </div>
      <div className="bg-[rgba(255,255,255,0)] content-stretch flex h-[20px] items-start relative shrink-0 w-[90px]" data-name="Text">
        <p className="flex-[1_0_0] font-['Poppins:Light',sans-serif] leading-[20px] min-h-px min-w-px not-italic relative text-[#60646c] text-[14px] text-right">10% (620)</p>
      </div>
    </div>
  );
}

function Frame23() {
  return (
    <div className="content-stretch flex gap-[24px] items-start relative shrink-0 w-full">
      <div className="bg-[rgba(255,255,255,0)] content-stretch flex flex-[1_0_0] items-start min-h-px min-w-px relative" data-name="Heading">
        <p className="font-['Poppins:Regular',sans-serif] leading-[24px] not-italic relative shrink-0 text-[#1c2024] text-[16px] whitespace-nowrap">Total Final</p>
      </div>
      <div className="bg-[rgba(255,255,255,0)] content-stretch flex flex-[1_0_0] items-start min-h-px min-w-px relative" data-name="Heading">
        <p className="flex-[1_0_0] font-['Poppins:Regular',sans-serif] leading-[24px] min-h-px min-w-px not-italic relative text-[#1c2024] text-[16px] text-right">6.880 tribz</p>
      </div>
    </div>
  );
}

function Frame24() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-[276px]">
      <Frame21 />
      <Frame22 />
      <div className="h-0 relative shrink-0 w-full">
        <div className="absolute inset-[-1px_0_0_0]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 276 1">
            <line id="Line 55" stroke="var(--stroke-0, #D9D9E0)" x2="276" y1="0.5" y2="0.5" />
          </svg>
        </div>
      </div>
      <Frame23 />
    </div>
  );
}

function Frame17() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-end relative shrink-0 w-full">
      <Frame25 />
      <Frame24 />
    </div>
  );
}

function Frame15() {
  return (
    <div className="content-stretch flex flex-col gap-[24px] items-start relative shrink-0 w-full">
      <Frame16 />
      <Frame17 />
    </div>
  );
}

function IconContainer() {
  return (
    <div className="content-stretch flex h-[20px] items-center relative shrink-0" data-name="icon-container">
      <div className="bg-[rgba(255,255,255,0)] relative shrink-0 size-[16px]" data-name="Abstract / info-circled">
        <div className="absolute inset-[5.85%]" data-name="Vector">
          <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14.1287 14.1288">
            <path clipRule="evenodd" d={svgPaths.p3e789c00} fill="var(--fill-0, #60646C)" fillRule="evenodd" id="Vector" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function BookingDetails() {
  return (
    <div className="bg-[#fcfcfd] relative shadow-[0px_4px_16px_0px_rgba(0,0,0,0.1),0px_3px_12px_0px_rgba(0,0,0,0.1),0px_2px_3px_0px_rgba(0,0,51,0.06)] shrink-0 w-full" data-name="Booking Details">
      <div className="content-stretch flex flex-col gap-[24px] items-start p-[16px] relative w-full">
        <Amenity />
        <Frame13 />
        <div className="h-0 relative shrink-0 w-full">
          <div className="absolute inset-[-1px_0_0_0]">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 448 1">
              <line id="Line 41" stroke="var(--stroke-0, #D9D9E0)" x2="448" y1="0.5" y2="0.5" />
            </svg>
          </div>
        </div>
        <Frame14 />
        <div className="h-0 relative shrink-0 w-full">
          <div className="absolute inset-[-1px_0_0_0]">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 448 1">
              <line id="Line 41" stroke="var(--stroke-0, #D9D9E0)" x2="448" y1="0.5" y2="0.5" />
            </svg>
          </div>
        </div>
        <Frame15 />
        <div className="bg-[#e8e8ec] relative shrink-0 w-full" data-name="Callout">
          <div className="overflow-clip rounded-[inherit] size-full">
            <div className="content-stretch flex gap-[8px] items-start p-[12px] relative w-full">
              <IconContainer />
              <p className="flex-[1_0_0] font-['Poppins:Regular',sans-serif] leading-[20px] min-h-px min-w-px not-italic relative text-[#60646c] text-[14px]">Cancelamento gratuito antes de 19 de março</p>
            </div>
          </div>
          <div aria-hidden="true" className="absolute border border-[rgba(0,0,47,0.15)] border-solid inset-0 pointer-events-none" />
        </div>
      </div>
    </div>
  );
}

function BookingWidgetContainer() {
  return (
    <div className="content-stretch flex flex-col items-start pt-[56px] relative shrink-0 w-[480px]" data-name="Booking Widget Container">
      <BookingDetails />
    </div>
  );
}

export default function Frame5() {
  return (
    <div className="content-stretch flex gap-[32px] items-start px-[32px] relative size-full">
      <Frame4 />
      <BookingWidgetContainer />
    </div>
  );
}