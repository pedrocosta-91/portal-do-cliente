import svgPaths from "./svg-e4g1j3fmuj";
import imgMainImage from "figma:asset/ef6ba38842cc601c9fc1b3b6d093c99003988949.png";
import imgGalleryImage from "figma:asset/2ca3cf5ce770290c7d020d373c699125519ed8e9.png";
import imgGalleryImage1 from "figma:asset/9b0d3d9eaf9ee9a56e6e2ffbc89f624036a8c0eb.png";
import imgGalleryImage2 from "figma:asset/05c8db44ca455e3352d7d646f9d41ef27b12c355.png";
import imgGalleryImage3 from "figma:asset/e76400e1d5a17e79fc032a1843500f17f10e8e2f.png";

function GalleryImage() {
  return (
    <div className="content-stretch flex flex-col h-[342px] items-end justify-end pb-[16px] pr-[16px] relative shrink-0 w-[336px]" data-name="Gallery Image">
      <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgGalleryImage3} />
      <div className="bg-[#e8e8ec] content-stretch flex gap-[12px] h-[40px] items-center justify-center px-[16px] relative rounded-[9999px] shrink-0" data-name="Button">
        <div className="overflow-clip relative shrink-0 size-[18px]" data-name="Icon / layout-grid">
          <div className="absolute inset-[9.38%]" data-name="Vector">
            <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14.625 14.625">
              <g id="Vector">
                <path d={svgPaths.p45d6f70} fill="var(--fill-0, #60646C)" />
                <path d={svgPaths.p1e266700} fill="var(--fill-0, #60646C)" />
                <path d={svgPaths.p26a9d200} fill="var(--fill-0, #60646C)" />
                <path d={svgPaths.p6818900} fill="var(--fill-0, #60646C)" />
              </g>
            </svg>
          </div>
        </div>
        <div className="flex flex-col font-['Poppins:Medium',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#1c2024] text-[16px] whitespace-nowrap">
          <p className="leading-[24px]">Mostrar todas as fotos</p>
        </div>
      </div>
    </div>
  );
}

function GalleryContainer() {
  return (
    <div className="content-start flex flex-wrap gap-[16px] items-start relative shrink-0 w-[688px]" data-name="Gallery Container">
      <div className="h-[342px] relative shrink-0 w-[336px]" data-name="Gallery Image">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgGalleryImage} />
      </div>
      <div className="h-[342px] relative shrink-0 w-[336px]" data-name="Gallery Image">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgGalleryImage1} />
      </div>
      <div className="h-[342px] relative shrink-0 w-[336px]" data-name="Gallery Image">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgGalleryImage2} />
      </div>
      <GalleryImage />
    </div>
  );
}

export default function HeroSectionHotel() {
  return (
    <div className="content-stretch flex gap-[16px] items-center relative size-full" data-name="Hero Section Hotel">
      <div className="h-[700px] relative shrink-0 w-[672px]" data-name="Main Image">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgMainImage} />
      </div>
      <GalleryContainer />
    </div>
  );
}