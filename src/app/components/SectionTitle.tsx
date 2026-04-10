import svgPaths from "../../imports/svg-xlkidhgjgk";

interface SectionTitleProps {
  title: string;
  onPrevious?: () => void;
  onNext?: () => void;
  tabs?: string[];
  activeTab?: string;
  onTabChange?: (tab: string) => void;
}

const tabIcons: Record<string, any> = {
  Todos: {
    paths: [svgPaths.p22d2dc00, svgPaths.p4987580, svgPaths.p279d1fa0, svgPaths.p38866000],
    viewBox: "0 0 13 13",
    inset: "inset-[9.38%]"
  },
  Praia: {
    paths: [svgPaths.p3f112100, svgPaths.p2183500, svgPaths.pca56380, svgPaths.p9fcd080],
    viewBox: "0 0 14.3333 13.6667",
    inset: "inset-[9.38%_5.21%_5.21%_5.21%]"
  },
  Urbano: {
    paths: [svgPaths.p2fb5b680, svgPaths.p30d67000, svgPaths.p20f1f780, svgPaths.p22a03e00, svgPaths.p2fe9580, svgPaths.p1a268af2, svgPaths.pbfd0770],
    viewBox: "0 0 14.3333 14.3333",
    inset: "inset-[5.21%]"
  },
  Cultural: {
    paths: [svgPaths.p383db400, svgPaths.p812900, svgPaths.p33fbec80, svgPaths.p9fb1980, svgPaths.p21144600, svgPaths.p1af1a380, svgPaths.p3193a00, svgPaths.p735cf0],
    viewBox: "0 0 14.36 14.3118",
    inset: "inset-[5.21%_5.21%_5.34%_5.04%]"
  },
  Econômico: {
    paths: [svgPaths.p2746bf00, svgPaths.p35489000, svgPaths.p276bae80],
    viewBox: "0 0 14.3333 12.3333",
    inset: "inset-[9.38%_5.21%_13.54%_5.21%]"
  }
};

export function SectionTitle({ 
  title, 
  onPrevious, 
  onNext, 
  tabs = [], 
  activeTab = "Todos",
  onTabChange 
}: SectionTitleProps) {
  return (
    <div className="flex flex-col gap-4 items-start w-full">
      {/* Title and Navigation Buttons */}
      <div className="flex items-center justify-between w-full">
        <h2 className="text-[35px] font-medium text-foreground leading-[40px] tracking-[-0.16px]">
          {title}
        </h2>
        <div className="flex gap-4 items-center">
          <button 
            onClick={onPrevious}
            className="relative rounded-full shrink-0 size-8 border border-[rgba(0,8,48,0.27)] hover:bg-muted transition-colors"
          >
            <div className="flex items-center justify-center overflow-clip size-full">
              <div className="overflow-clip relative shrink-0 size-4">
                <div className="absolute inset-[21.88%_34.38%]">
                  <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 4.99992 8.99992">
                    <path d={svgPaths.pec87f0} fill="#60646C" />
                  </svg>
                </div>
              </div>
            </div>
          </button>
          <button 
            onClick={onNext}
            className="relative rounded-full shrink-0 size-8 border border-[rgba(0,8,48,0.27)] hover:bg-muted transition-colors"
          >
            <div className="flex items-center justify-center overflow-clip size-full">
              <div className="overflow-clip relative shrink-0 size-4">
                <div className="absolute inset-[21.88%_34.38%]">
                  <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 4.99992 8.99992">
                    <path d={svgPaths.p1957980} fill="#60646C" />
                  </svg>
                </div>
              </div>
            </div>
          </button>
        </div>
      </div>

      {/* Tabs */}
      {tabs.length > 0 && (
        <div className="flex gap-4 items-center">
          {tabs.map((tab) => {
            const isActive = tab === activeTab;
            const icon = tabIcons[tab];
            
            return (
              <button
                key={tab}
                onClick={() => onTabChange?.(tab)}
                className={`flex gap-2 h-8 items-center justify-center px-3 relative rounded-full transition-colors ${
                  isActive 
                    ? 'bg-[rgba(18,165,148,0.1)] border border-[rgba(18,165,148,0.45)]'
                    : 'border border-[#d9d9e0] hover:bg-muted'
                }`}
              >
                {icon && (
                  <div className="overflow-clip relative shrink-0 size-4">
                    <div className={`absolute ${icon.inset}`}>
                      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox={icon.viewBox}>
                        <g>
                          {icon.paths.map((path: string, index: number) => (
                            <path 
                              key={index} 
                              d={path} 
                              fill={isActive ? "#12a594" : "#60646C"}
                              fillOpacity={1}
                            />
                          ))}
                        </g>
                      </svg>
                    </div>
                  </div>
                )}
                <span className={`text-sm font-medium leading-5 ${
                  isActive ? 'text-[#12a594]' : 'text-muted-foreground'
                }`}>
                  {tab}
                </span>
              </button>
            );
          })}
        </div>
      )}
    </div>
  );
}
