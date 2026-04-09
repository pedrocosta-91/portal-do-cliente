import svgPaths from "./svg-rur7jo42ah";

function ContentContainer() {
  return (
    <div className="content-stretch flex gap-[12px] h-[40px] items-center overflow-clip relative shrink-0 w-full" data-name="content-container">
      <div className="flex flex-[1_0_0] flex-col font-['Poppins:Regular',sans-serif] justify-center leading-[0] min-h-px min-w-px not-italic overflow-hidden relative text-[#1c2024] text-[16px] text-ellipsis whitespace-nowrap">
        <p className="leading-[24px] overflow-hidden">Tipos de estadia</p>
      </div>
      <div className="bg-[rgba(255,255,255,0)] relative shrink-0 size-[18px]" data-name="Arrows / chevron-down">
        <div className="absolute inset-[40%_20%_28.33%_20%]" data-name="Vector">
          <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 10.8 5.70003">
            <path clipRule="evenodd" d={svgPaths.p32a02600} fill="var(--fill-0, #1C2024)" fillRule="evenodd" id="Vector" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Switch() {
  return (
    <div className="bg-[#e8e8ec] content-stretch flex h-[16px] items-center p-px relative rounded-[9999px] shrink-0 w-[28px]" data-name="switch">
      <div aria-hidden="true" className="absolute border border-[rgba(0,0,47,0.15)] border-solid inset-0 pointer-events-none rounded-[9999px]" />
      <div className="bg-white relative rounded-[9999px] shrink-0 size-[14px]" data-name="thumb">
        <div aria-hidden="true" className="absolute border border-[#d9d9e0] border-solid inset-[-1px] pointer-events-none rounded-[10000px]" />
      </div>
      <div className="absolute inset-0 pointer-events-none rounded-[inherit] shadow-[inset_0px_1.5px_2px_0px_rgba(0,0,0,0.1),inset_0px_1.5px_2px_0px_rgba(0,0,85,0.02)]" />
    </div>
  );
}

function SwitchContainer() {
  return (
    <div className="content-stretch flex flex-col h-[20px] items-start justify-center relative shrink-0" data-name="switch-container">
      <Switch />
    </div>
  );
}

function FilterOptionsContainer() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0" data-name="Filter Options Container">
      <div className="bg-[rgba(255,255,255,0)] content-stretch flex gap-[8px] items-center relative shrink-0" data-name="Switch">
        <SwitchContainer />
      </div>
      <div className="bg-[rgba(255,255,255,0)] content-stretch flex items-start relative shrink-0" data-name="Text">
        <p className="font-['Poppins:Light',sans-serif] leading-[16px] not-italic relative shrink-0 text-[#60646c] text-[12px] tracking-[0.04px] whitespace-nowrap">Canelamento grátis</p>
      </div>
    </div>
  );
}

function FilterOptions() {
  return (
    <div className="content-stretch flex items-center justify-between relative shrink-0 w-full" data-name="Filter Options">
      <FilterOptionsContainer />
      <div className="bg-[rgba(255,255,255,0)] content-stretch flex items-start relative shrink-0" data-name="Text">
        <p className="font-['Poppins:Light',sans-serif] leading-[16px] not-italic relative shrink-0 text-[#60646c] text-[12px] tracking-[0.04px] whitespace-nowrap">148</p>
      </div>
    </div>
  );
}

function Switch1() {
  return (
    <div className="bg-[#e8e8ec] content-stretch flex h-[16px] items-center p-px relative rounded-[9999px] shrink-0 w-[28px]" data-name="switch">
      <div aria-hidden="true" className="absolute border border-[rgba(0,0,47,0.15)] border-solid inset-0 pointer-events-none rounded-[9999px]" />
      <div className="bg-white relative rounded-[9999px] shrink-0 size-[14px]" data-name="thumb">
        <div aria-hidden="true" className="absolute border border-[#d9d9e0] border-solid inset-[-1px] pointer-events-none rounded-[10000px]" />
      </div>
      <div className="absolute inset-0 pointer-events-none rounded-[inherit] shadow-[inset_0px_1.5px_2px_0px_rgba(0,0,0,0.1),inset_0px_1.5px_2px_0px_rgba(0,0,85,0.02)]" />
    </div>
  );
}

function SwitchContainer1() {
  return (
    <div className="content-stretch flex flex-col h-[20px] items-start justify-center relative shrink-0" data-name="switch-container">
      <Switch1 />
    </div>
  );
}

function FilterOptionsContainer1() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0" data-name="Filter Options Container">
      <div className="bg-[rgba(255,255,255,0)] content-stretch flex gap-[8px] items-center relative shrink-0" data-name="Switch">
        <SwitchContainer1 />
      </div>
      <div className="bg-[rgba(255,255,255,0)] content-stretch flex items-start relative shrink-0" data-name="Text">
        <p className="font-['Poppins:Light',sans-serif] leading-[16px] not-italic relative shrink-0 text-[#60646c] text-[12px] tracking-[0.04px] whitespace-nowrap">Pagar no destino</p>
      </div>
    </div>
  );
}

function FilterOptions1() {
  return (
    <div className="content-stretch flex items-center justify-between relative shrink-0 w-full" data-name="Filter Options">
      <FilterOptionsContainer1 />
      <div className="bg-[rgba(255,255,255,0)] content-stretch flex items-start relative shrink-0" data-name="Text">
        <p className="font-['Poppins:Light',sans-serif] leading-[16px] not-italic relative shrink-0 text-[#60646c] text-[12px] tracking-[0.04px] whitespace-nowrap">105</p>
      </div>
    </div>
  );
}

function Switch2() {
  return (
    <div className="bg-[#e8e8ec] content-stretch flex h-[16px] items-center p-px relative rounded-[9999px] shrink-0 w-[28px]" data-name="switch">
      <div aria-hidden="true" className="absolute border border-[rgba(0,0,47,0.15)] border-solid inset-0 pointer-events-none rounded-[9999px]" />
      <div className="bg-white relative rounded-[9999px] shrink-0 size-[14px]" data-name="thumb">
        <div aria-hidden="true" className="absolute border border-[#d9d9e0] border-solid inset-[-1px] pointer-events-none rounded-[10000px]" />
      </div>
      <div className="absolute inset-0 pointer-events-none rounded-[inherit] shadow-[inset_0px_1.5px_2px_0px_rgba(0,0,0,0.1),inset_0px_1.5px_2px_0px_rgba(0,0,85,0.02)]" />
    </div>
  );
}

function SwitchContainer2() {
  return (
    <div className="content-stretch flex flex-col h-[20px] items-start justify-center relative shrink-0" data-name="switch-container">
      <Switch2 />
    </div>
  );
}

function FilterOptionsContainer2() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0" data-name="Filter Options Container">
      <div className="bg-[rgba(255,255,255,0)] content-stretch flex gap-[8px] items-center relative shrink-0" data-name="Switch">
        <SwitchContainer2 />
      </div>
      <div className="bg-[rgba(255,255,255,0)] content-stretch flex items-start relative shrink-0" data-name="Text">
        <p className="font-['Poppins:Light',sans-serif] leading-[16px] not-italic relative shrink-0 text-[#60646c] text-[12px] tracking-[0.04px] whitespace-nowrap">Pagar parcelado</p>
      </div>
    </div>
  );
}

function FilterOptions2() {
  return (
    <div className="content-stretch flex items-center justify-between relative shrink-0 w-full" data-name="Filter Options">
      <FilterOptionsContainer2 />
      <div className="bg-[rgba(255,255,255,0)] content-stretch flex items-start relative shrink-0" data-name="Text">
        <p className="font-['Poppins:Light',sans-serif] leading-[16px] not-italic relative shrink-0 text-[#60646c] text-[12px] tracking-[0.04px] whitespace-nowrap">220</p>
      </div>
    </div>
  );
}

function FilterCategory() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full" data-name="Filter Category">
      <FilterOptions />
      <FilterOptions1 />
      <FilterOptions2 />
    </div>
  );
}

function FilterGroup() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0 w-full" data-name="Filter Group">
      <div className="bg-[rgba(255,255,255,0)] content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Select Trigger">
        <ContentContainer />
      </div>
      <FilterCategory />
    </div>
  );
}

function ContentContainer1() {
  return (
    <div className="content-stretch flex gap-[12px] h-[40px] items-center overflow-clip relative shrink-0 w-full" data-name="content-container">
      <div className="flex flex-[1_0_0] flex-col font-['Poppins:Regular',sans-serif] justify-center leading-[0] min-h-px min-w-px not-italic overflow-hidden relative text-[#1c2024] text-[16px] text-ellipsis whitespace-nowrap">
        <p className="leading-[24px] overflow-hidden">Preço total da estadia</p>
      </div>
      <div className="bg-[rgba(255,255,255,0)] relative shrink-0 size-[18px]" data-name="Arrows / chevron-down">
        <div className="absolute inset-[40%_20%_28.33%_20%]" data-name="Vector">
          <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 10.8 5.70003">
            <path clipRule="evenodd" d={svgPaths.p32a02600} fill="var(--fill-0, #1C2024)" fillRule="evenodd" id="Vector" />
          </svg>
        </div>
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

function Thumb1() {
  return (
    <div className="-translate-y-1/2 absolute bg-white left-[-5px] size-[10px] top-1/2" data-name="thumb">
      <div aria-hidden="true" className="absolute border border-[#cdced6] border-solid inset-[-1px] pointer-events-none" />
    </div>
  );
}

function Range() {
  return (
    <div className="-translate-y-1/2 absolute bg-[#3e63dd] h-[6px] left-[12.33%] right-[12.67%] top-1/2" data-name="range">
      <div aria-hidden="true" className="absolute border border-[rgba(0,9,50,0.12)] border-solid inset-0 pointer-events-none" />
      <Thumb />
      <Thumb1 />
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

function InputContainer() {
  return (
    <div className="flex-[1_0_0] h-full min-h-px min-w-px relative" data-name="input-container">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center px-[4px] relative size-full">
          <p className="flex-[1_0_0] font-['Poppins:Regular',sans-serif] leading-[16px] min-h-px min-w-px not-italic relative text-[#60646c] text-[12px] tracking-[0.04px]">R$ 1.387</p>
        </div>
      </div>
    </div>
  );
}

function Root() {
  return (
    <div className="bg-[rgba(255,255,255,0.9)] h-[24px] relative shrink-0 w-full" data-name="root">
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
          <p className="flex-[1_0_0] font-['Poppins:Regular',sans-serif] leading-[16px] min-h-px min-w-px not-italic relative text-[#60646c] text-[12px] tracking-[0.04px]">R$ 2.932</p>
        </div>
      </div>
    </div>
  );
}

function Root1() {
  return (
    <div className="bg-[rgba(255,255,255,0.9)] h-[24px] relative shrink-0 w-full" data-name="root">
      <div aria-hidden="true" className="absolute border border-[#d9d9e0] border-solid inset-0 pointer-events-none" />
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center px-[4px] relative size-full">
          <InputContainer1 />
        </div>
      </div>
    </div>
  );
}

function SliderPanel() {
  return (
    <div className="content-stretch flex gap-[24px] items-center relative shrink-0 w-full" data-name="Slider Panel">
      <div className="bg-[rgba(255,255,255,0)] content-stretch flex flex-[1_0_0] flex-col gap-[4px] items-start min-h-px min-w-px relative" data-name="Text Field">
        <p className="font-['Poppins:Medium',sans-serif] leading-[16px] not-italic relative shrink-0 text-[#1c2024] text-[12px] tracking-[0.04px] w-full">Mínimo</p>
        <Root />
      </div>
      <div className="bg-[rgba(255,255,255,0)] content-stretch flex flex-[1_0_0] flex-col gap-[4px] items-start min-h-px min-w-px relative" data-name="Text Field">
        <p className="font-['Poppins:Medium',sans-serif] leading-[16px] not-italic relative shrink-0 text-[#1c2024] text-[12px] tracking-[0.04px] w-full">Máximo</p>
        <Root1 />
      </div>
    </div>
  );
}

function SliderContainer() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full" data-name="Slider Container">
      <div className="bg-[rgba(255,255,255,0)] content-stretch flex h-[6px] items-center justify-center relative shrink-0 w-full" data-name="Slider">
        <Track />
      </div>
      <SliderPanel />
    </div>
  );
}

function FilterGroup1() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0 w-full" data-name="Filter Group">
      <div className="bg-[rgba(255,255,255,0)] content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Select Trigger">
        <ContentContainer1 />
      </div>
      <SliderContainer />
    </div>
  );
}

function ContentContainer2() {
  return (
    <div className="content-stretch flex gap-[12px] h-[40px] items-center overflow-clip relative shrink-0 w-full" data-name="content-container">
      <div className="flex flex-[1_0_0] flex-col font-['Poppins:Regular',sans-serif] justify-center leading-[0] min-h-px min-w-px not-italic overflow-hidden relative text-[#1c2024] text-[16px] text-ellipsis whitespace-nowrap">
        <p className="leading-[24px] overflow-hidden">Filtros Populares</p>
      </div>
      <div className="bg-[rgba(255,255,255,0)] relative shrink-0 size-[18px]" data-name="Arrows / chevron-down">
        <div className="absolute inset-[40%_20%_28.33%_20%]" data-name="Vector">
          <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 10.8 5.70003">
            <path clipRule="evenodd" d={svgPaths.p32a02600} fill="var(--fill-0, #1C2024)" fillRule="evenodd" id="Vector" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Checkbox() {
  return (
    <div className="bg-[#3e63dd] content-stretch flex items-center justify-center overflow-clip relative shrink-0 size-[16px]" data-name="checkbox">
      <div className="bg-[rgba(255,255,255,0)] flex-[1_0_0] h-full min-h-px min-w-px relative" data-name="Abstract / check">
        <div className="absolute inset-[24.17%_21.67%_24.17%_23.33%]" data-name="Vector">
          <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 8.80008 8.26673">
            <path clipRule="evenodd" d={svgPaths.p1a06bc70} fill="var(--fill-0, white)" fillRule="evenodd" id="Vector" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function CheckboxContainer() {
  return (
    <div className="content-stretch flex h-[20px] items-center relative shrink-0" data-name="checkbox-container">
      <Checkbox />
    </div>
  );
}

function Checkbox1() {
  return (
    <div className="bg-[#e8e8ec] relative shrink-0 size-[16px]" data-name="checkbox">
      <div aria-hidden="true" className="absolute border border-[rgba(0,6,46,0.2)] border-solid inset-0 pointer-events-none" />
    </div>
  );
}

function CheckboxContainer1() {
  return (
    <div className="content-stretch flex h-[20px] items-center relative shrink-0" data-name="checkbox-container">
      <Checkbox1 />
    </div>
  );
}

function Checkbox2() {
  return (
    <div className="bg-[#e8e8ec] relative shrink-0 size-[16px]" data-name="checkbox">
      <div aria-hidden="true" className="absolute border border-[rgba(0,6,46,0.2)] border-solid inset-0 pointer-events-none" />
    </div>
  );
}

function CheckboxContainer2() {
  return (
    <div className="content-stretch flex h-[20px] items-center relative shrink-0" data-name="checkbox-container">
      <Checkbox2 />
    </div>
  );
}

function Checkbox3() {
  return (
    <div className="bg-[#e8e8ec] relative shrink-0 size-[16px]" data-name="checkbox">
      <div aria-hidden="true" className="absolute border border-[rgba(0,6,46,0.2)] border-solid inset-0 pointer-events-none" />
    </div>
  );
}

function CheckboxContainer3() {
  return (
    <div className="content-stretch flex h-[20px] items-center relative shrink-0" data-name="checkbox-container">
      <Checkbox3 />
    </div>
  );
}

function ItemContainer() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[8px] items-start min-h-px min-w-px relative" data-name="item-container">
      <div className="bg-[rgba(255,255,255,0)] content-stretch flex gap-[8px] items-start relative shrink-0 w-full" data-name="Checkbox">
        <CheckboxContainer />
        <p className="flex-[1_0_0] font-['Poppins:Regular',sans-serif] leading-[20px] min-h-px min-w-px not-italic relative text-[#1c2024] text-[14px]">Café da manhã</p>
      </div>
      <div className="bg-[rgba(255,255,255,0)] content-stretch flex gap-[8px] items-start relative shrink-0 w-full" data-name="Checkbox">
        <CheckboxContainer1 />
        <p className="flex-[1_0_0] font-['Poppins:Regular',sans-serif] leading-[20px] min-h-px min-w-px not-italic relative text-[#1c2024] text-[14px]">Hotéis</p>
      </div>
      <div className="bg-[rgba(255,255,255,0)] content-stretch flex gap-[8px] items-start relative shrink-0 w-full" data-name="Checkbox">
        <CheckboxContainer2 />
        <p className="flex-[1_0_0] font-['Poppins:Regular',sans-serif] leading-[20px] min-h-px min-w-px not-italic relative text-[#1c2024] text-[14px]">5 estrelas</p>
      </div>
      <div className="bg-[rgba(255,255,255,0)] content-stretch flex gap-[8px] items-start relative shrink-0 w-full" data-name="Checkbox">
        <CheckboxContainer3 />
        <p className="flex-[1_0_0] font-['Poppins:Regular',sans-serif] leading-[20px] min-h-px min-w-px not-italic relative text-[#1c2024] text-[14px]">4 estrelas</p>
      </div>
    </div>
  );
}

function FilterGroup2() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0 w-full" data-name="Filter Group">
      <div className="bg-[rgba(255,255,255,0)] content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Select Trigger">
        <ContentContainer2 />
      </div>
      <div className="bg-[rgba(255,255,255,0)] content-stretch flex items-start relative shrink-0 w-full" data-name="Checkbox Group">
        <ItemContainer />
      </div>
    </div>
  );
}

function ContentContainer3() {
  return (
    <div className="content-stretch flex gap-[12px] h-[40px] items-center overflow-clip relative shrink-0 w-full" data-name="content-container">
      <div className="flex flex-[1_0_0] flex-col font-['Poppins:Regular',sans-serif] justify-center leading-[0] min-h-px min-w-px not-italic overflow-hidden relative text-[#1c2024] text-[16px] text-ellipsis whitespace-nowrap">
        <p className="leading-[24px] overflow-hidden">Pontuação</p>
      </div>
      <div className="bg-[rgba(255,255,255,0)] relative shrink-0 size-[18px]" data-name="Arrows / chevron-down">
        <div className="absolute inset-[40%_20%_28.33%_20%]" data-name="Vector">
          <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 10.8 5.70003">
            <path clipRule="evenodd" d={svgPaths.p32a02600} fill="var(--fill-0, #1C2024)" fillRule="evenodd" id="Vector" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Checkbox4() {
  return (
    <div className="bg-[#e8e8ec] relative shrink-0 size-[16px]" data-name="checkbox">
      <div aria-hidden="true" className="absolute border border-[rgba(0,6,46,0.2)] border-solid inset-0 pointer-events-none" />
    </div>
  );
}

function CheckboxContainer4() {
  return (
    <div className="content-stretch flex h-[20px] items-center relative shrink-0" data-name="checkbox-container">
      <Checkbox4 />
    </div>
  );
}

function Checkbox5() {
  return (
    <div className="bg-[#e8e8ec] relative shrink-0 size-[16px]" data-name="checkbox">
      <div aria-hidden="true" className="absolute border border-[rgba(0,6,46,0.2)] border-solid inset-0 pointer-events-none" />
    </div>
  );
}

function CheckboxContainer5() {
  return (
    <div className="content-stretch flex h-[20px] items-center relative shrink-0" data-name="checkbox-container">
      <Checkbox5 />
    </div>
  );
}

function Checkbox6() {
  return (
    <div className="bg-[#e8e8ec] relative shrink-0 size-[16px]" data-name="checkbox">
      <div aria-hidden="true" className="absolute border border-[rgba(0,6,46,0.2)] border-solid inset-0 pointer-events-none" />
    </div>
  );
}

function CheckboxContainer6() {
  return (
    <div className="content-stretch flex h-[20px] items-center relative shrink-0" data-name="checkbox-container">
      <Checkbox6 />
    </div>
  );
}

function Checkbox7() {
  return (
    <div className="bg-[#e8e8ec] relative shrink-0 size-[16px]" data-name="checkbox">
      <div aria-hidden="true" className="absolute border border-[rgba(0,6,46,0.2)] border-solid inset-0 pointer-events-none" />
    </div>
  );
}

function CheckboxContainer7() {
  return (
    <div className="content-stretch flex h-[20px] items-center relative shrink-0" data-name="checkbox-container">
      <Checkbox7 />
    </div>
  );
}

function ItemContainer1() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[8px] items-start min-h-px min-w-px relative" data-name="item-container">
      <div className="bg-[rgba(255,255,255,0)] content-stretch flex gap-[8px] items-start relative shrink-0 w-full" data-name="Checkbox">
        <CheckboxContainer4 />
        <p className="flex-[1_0_0] font-['Poppins:Regular',sans-serif] leading-[20px] min-h-px min-w-px not-italic relative text-[#1c2024] text-[14px]">9 ou mais - Excellente</p>
      </div>
      <div className="bg-[rgba(255,255,255,0)] content-stretch flex gap-[8px] items-start relative shrink-0 w-full" data-name="Checkbox">
        <CheckboxContainer5 />
        <p className="flex-[1_0_0] font-['Poppins:Regular',sans-serif] leading-[20px] min-h-px min-w-px not-italic relative text-[#1c2024] text-[14px]">8 ou mais - Muito bom</p>
      </div>
      <div className="bg-[rgba(255,255,255,0)] content-stretch flex gap-[8px] items-start relative shrink-0 w-full" data-name="Checkbox">
        <CheckboxContainer6 />
        <p className="flex-[1_0_0] font-['Poppins:Regular',sans-serif] leading-[20px] min-h-px min-w-px not-italic relative text-[#1c2024] text-[14px]">7 ou mais - Confortável</p>
      </div>
      <div className="bg-[rgba(255,255,255,0)] content-stretch flex gap-[8px] items-start relative shrink-0 w-full" data-name="Checkbox">
        <CheckboxContainer7 />
        <p className="flex-[1_0_0] font-['Poppins:Regular',sans-serif] leading-[20px] min-h-px min-w-px not-italic relative text-[#1c2024] text-[14px]">6 ou mais - Bom</p>
      </div>
    </div>
  );
}

function FilterGroup3() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0 w-full" data-name="Filter Group">
      <div className="bg-[rgba(255,255,255,0)] content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Select Trigger">
        <ContentContainer3 />
      </div>
      <div className="bg-[rgba(255,255,255,0)] content-stretch flex items-start relative shrink-0 w-full" data-name="Checkbox Group">
        <ItemContainer1 />
      </div>
    </div>
  );
}

function ContentContainer4() {
  return (
    <div className="content-stretch flex gap-[12px] h-[40px] items-center overflow-clip relative shrink-0 w-full" data-name="content-container">
      <div className="flex flex-[1_0_0] flex-col font-['Poppins:Regular',sans-serif] justify-center leading-[0] min-h-px min-w-px not-italic overflow-hidden relative text-[#1c2024] text-[16px] text-ellipsis whitespace-nowrap">
        <p className="leading-[24px] overflow-hidden">Tipo de hospedagem</p>
      </div>
      <div className="bg-[rgba(255,255,255,0)] relative shrink-0 size-[18px]" data-name="Arrows / chevron-down">
        <div className="absolute inset-[40%_20%_28.33%_20%]" data-name="Vector">
          <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 10.8 5.70003">
            <path clipRule="evenodd" d={svgPaths.p32a02600} fill="var(--fill-0, #1C2024)" fillRule="evenodd" id="Vector" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Checkbox8() {
  return (
    <div className="bg-[#e8e8ec] relative shrink-0 size-[16px]" data-name="checkbox">
      <div aria-hidden="true" className="absolute border border-[rgba(0,6,46,0.2)] border-solid inset-0 pointer-events-none" />
    </div>
  );
}

function CheckboxContainer8() {
  return (
    <div className="content-stretch flex h-[20px] items-center relative shrink-0" data-name="checkbox-container">
      <Checkbox8 />
    </div>
  );
}

function Checkbox9() {
  return (
    <div className="bg-[#e8e8ec] relative shrink-0 size-[16px]" data-name="checkbox">
      <div aria-hidden="true" className="absolute border border-[rgba(0,6,46,0.2)] border-solid inset-0 pointer-events-none" />
    </div>
  );
}

function CheckboxContainer9() {
  return (
    <div className="content-stretch flex h-[20px] items-center relative shrink-0" data-name="checkbox-container">
      <Checkbox9 />
    </div>
  );
}

function Checkbox10() {
  return (
    <div className="bg-[#e8e8ec] relative shrink-0 size-[16px]" data-name="checkbox">
      <div aria-hidden="true" className="absolute border border-[rgba(0,6,46,0.2)] border-solid inset-0 pointer-events-none" />
    </div>
  );
}

function CheckboxContainer10() {
  return (
    <div className="content-stretch flex h-[20px] items-center relative shrink-0" data-name="checkbox-container">
      <Checkbox10 />
    </div>
  );
}

function Checkbox11() {
  return (
    <div className="bg-[#e8e8ec] relative shrink-0 size-[16px]" data-name="checkbox">
      <div aria-hidden="true" className="absolute border border-[rgba(0,6,46,0.2)] border-solid inset-0 pointer-events-none" />
    </div>
  );
}

function CheckboxContainer11() {
  return (
    <div className="content-stretch flex h-[20px] items-center relative shrink-0" data-name="checkbox-container">
      <Checkbox11 />
    </div>
  );
}

function ItemContainer2() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[8px] items-start min-h-px min-w-px relative" data-name="item-container">
      <div className="bg-[rgba(255,255,255,0)] content-stretch flex gap-[8px] items-start relative shrink-0 w-full" data-name="Checkbox">
        <CheckboxContainer8 />
        <p className="flex-[1_0_0] font-['Poppins:Regular',sans-serif] leading-[20px] min-h-px min-w-px not-italic relative text-[#1c2024] text-[14px]">Apart-Hotéis</p>
      </div>
      <div className="bg-[rgba(255,255,255,0)] content-stretch flex gap-[8px] items-start relative shrink-0 w-full" data-name="Checkbox">
        <CheckboxContainer9 />
        <p className="flex-[1_0_0] font-['Poppins:Regular',sans-serif] leading-[20px] min-h-px min-w-px not-italic relative text-[#1c2024] text-[14px]">Bed and Breakfasts</p>
      </div>
      <div className="bg-[rgba(255,255,255,0)] content-stretch flex gap-[8px] items-start relative shrink-0 w-full" data-name="Checkbox">
        <CheckboxContainer10 />
        <p className="flex-[1_0_0] font-['Poppins:Regular',sans-serif] leading-[20px] min-h-px min-w-px not-italic relative text-[#1c2024] text-[14px]">Hostels</p>
      </div>
      <div className="bg-[rgba(255,255,255,0)] content-stretch flex gap-[8px] items-start relative shrink-0 w-full" data-name="Checkbox">
        <CheckboxContainer11 />
        <p className="flex-[1_0_0] font-['Poppins:Regular',sans-serif] leading-[20px] min-h-px min-w-px not-italic relative text-[#1c2024] text-[14px]">Hotéis</p>
      </div>
    </div>
  );
}

function FilterGroup4() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0 w-full" data-name="Filter Group">
      <div className="bg-[rgba(255,255,255,0)] content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Select Trigger">
        <ContentContainer4 />
      </div>
      <div className="bg-[rgba(255,255,255,0)] content-stretch flex items-start relative shrink-0 w-full" data-name="Checkbox Group">
        <ItemContainer2 />
      </div>
    </div>
  );
}

function ContentContainer5() {
  return (
    <div className="content-stretch flex gap-[12px] h-[40px] items-center overflow-clip relative shrink-0 w-full" data-name="content-container">
      <div className="flex flex-[1_0_0] flex-col font-['Poppins:Regular',sans-serif] justify-center leading-[0] min-h-px min-w-px not-italic overflow-hidden relative text-[#1c2024] text-[16px] text-ellipsis whitespace-nowrap">
        <p className="leading-[24px] overflow-hidden">Serviços</p>
      </div>
      <div className="bg-[rgba(255,255,255,0)] relative shrink-0 size-[18px]" data-name="Arrows / chevron-down">
        <div className="absolute inset-[40%_20%_28.33%_20%]" data-name="Vector">
          <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 10.8 5.70003">
            <path clipRule="evenodd" d={svgPaths.p32a02600} fill="var(--fill-0, #1C2024)" fillRule="evenodd" id="Vector" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Checkbox12() {
  return (
    <div className="bg-[#e8e8ec] relative shrink-0 size-[16px]" data-name="checkbox">
      <div aria-hidden="true" className="absolute border border-[rgba(0,6,46,0.2)] border-solid inset-0 pointer-events-none" />
    </div>
  );
}

function CheckboxContainer12() {
  return (
    <div className="content-stretch flex h-[20px] items-center relative shrink-0" data-name="checkbox-container">
      <Checkbox12 />
    </div>
  );
}

function Checkbox13() {
  return (
    <div className="bg-[#e8e8ec] relative shrink-0 size-[16px]" data-name="checkbox">
      <div aria-hidden="true" className="absolute border border-[rgba(0,6,46,0.2)] border-solid inset-0 pointer-events-none" />
    </div>
  );
}

function CheckboxContainer13() {
  return (
    <div className="content-stretch flex h-[20px] items-center relative shrink-0" data-name="checkbox-container">
      <Checkbox13 />
    </div>
  );
}

function Checkbox14() {
  return (
    <div className="bg-[#e8e8ec] relative shrink-0 size-[16px]" data-name="checkbox">
      <div aria-hidden="true" className="absolute border border-[rgba(0,6,46,0.2)] border-solid inset-0 pointer-events-none" />
    </div>
  );
}

function CheckboxContainer14() {
  return (
    <div className="content-stretch flex h-[20px] items-center relative shrink-0" data-name="checkbox-container">
      <Checkbox14 />
    </div>
  );
}

function Checkbox15() {
  return (
    <div className="bg-[#e8e8ec] relative shrink-0 size-[16px]" data-name="checkbox">
      <div aria-hidden="true" className="absolute border border-[rgba(0,6,46,0.2)] border-solid inset-0 pointer-events-none" />
    </div>
  );
}

function CheckboxContainer15() {
  return (
    <div className="content-stretch flex h-[20px] items-center relative shrink-0" data-name="checkbox-container">
      <Checkbox15 />
    </div>
  );
}

function Checkbox16() {
  return (
    <div className="bg-[#e8e8ec] relative shrink-0 size-[16px]" data-name="checkbox">
      <div aria-hidden="true" className="absolute border border-[rgba(0,6,46,0.2)] border-solid inset-0 pointer-events-none" />
    </div>
  );
}

function CheckboxContainer16() {
  return (
    <div className="content-stretch flex h-[20px] items-center relative shrink-0" data-name="checkbox-container">
      <Checkbox16 />
    </div>
  );
}

function Checkbox17() {
  return (
    <div className="bg-[#e8e8ec] relative shrink-0 size-[16px]" data-name="checkbox">
      <div aria-hidden="true" className="absolute border border-[rgba(0,6,46,0.2)] border-solid inset-0 pointer-events-none" />
    </div>
  );
}

function CheckboxContainer17() {
  return (
    <div className="content-stretch flex h-[20px] items-center relative shrink-0" data-name="checkbox-container">
      <Checkbox17 />
    </div>
  );
}

function ItemContainer3() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[8px] items-start min-h-px min-w-px relative" data-name="item-container">
      <div className="bg-[rgba(255,255,255,0)] content-stretch flex gap-[8px] items-start relative shrink-0 w-full" data-name="Checkbox">
        <CheckboxContainer12 />
        <p className="flex-[1_0_0] font-['Poppins:Regular',sans-serif] leading-[20px] min-h-px min-w-px not-italic relative text-[#1c2024] text-[14px]">Estacionamento</p>
      </div>
      <div className="bg-[rgba(255,255,255,0)] content-stretch flex gap-[8px] items-start relative shrink-0 w-full" data-name="Checkbox">
        <CheckboxContainer13 />
        <p className="flex-[1_0_0] font-['Poppins:Regular',sans-serif] leading-[20px] min-h-px min-w-px not-italic relative text-[#1c2024] text-[14px]">Piscina</p>
      </div>
      <div className="bg-[rgba(255,255,255,0)] content-stretch flex gap-[8px] items-start relative shrink-0 w-full" data-name="Checkbox">
        <CheckboxContainer14 />
        <p className="flex-[1_0_0] font-['Poppins:Regular',sans-serif] leading-[20px] min-h-px min-w-px not-italic relative text-[#1c2024] text-[14px]">Aceita animais de estimação</p>
      </div>
      <div className="bg-[rgba(255,255,255,0)] content-stretch flex gap-[8px] items-start relative shrink-0 w-full" data-name="Checkbox">
        <CheckboxContainer15 />
        <p className="flex-[1_0_0] font-['Poppins:Regular',sans-serif] leading-[20px] min-h-px min-w-px not-italic relative text-[#1c2024] text-[14px]">Serviços para crianças</p>
      </div>
      <div className="bg-[rgba(255,255,255,0)] content-stretch flex gap-[8px] items-start relative shrink-0 w-full" data-name="Checkbox">
        <CheckboxContainer16 />
        <p className="flex-[1_0_0] font-['Poppins:Regular',sans-serif] leading-[20px] min-h-px min-w-px not-italic relative text-[#1c2024] text-[14px]">Recursos de acessibilidade</p>
      </div>
      <div className="bg-[rgba(255,255,255,0)] content-stretch flex gap-[8px] items-start relative shrink-0 w-full" data-name="Checkbox">
        <CheckboxContainer17 />
        <p className="flex-[1_0_0] font-['Poppins:Regular',sans-serif] leading-[20px] min-h-px min-w-px not-italic relative text-[#1c2024] text-[14px]">Serviço de transfer</p>
      </div>
    </div>
  );
}

function FilterGroup5() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0 w-full" data-name="Filter Group">
      <div className="bg-[rgba(255,255,255,0)] content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Select Trigger">
        <ContentContainer5 />
      </div>
      <div className="bg-[rgba(255,255,255,0)] content-stretch flex items-start relative shrink-0 w-full" data-name="Checkbox Group">
        <ItemContainer3 />
      </div>
    </div>
  );
}

export default function FilterSection() {
  return (
    <div className="content-stretch flex flex-col gap-[32px] items-start relative size-full" data-name="Filter Section">
      <FilterGroup />
      <FilterGroup1 />
      <FilterGroup2 />
      <FilterGroup3 />
      <FilterGroup4 />
      <FilterGroup5 />
    </div>
  );
}