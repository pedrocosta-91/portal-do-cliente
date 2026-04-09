import svgPaths from "../../imports/svg-60854sz0xs";

interface FlightCardProps {
  image: string;
  destination: string;
  origin: string;
  airline: string;
  price: string;
  dateRange: string;
}

export function FlightCard({ image, destination, origin, airline, price, dateRange }: FlightCardProps) {
  return (
    <div className="flex-1 h-full min-h-[400px] relative rounded-lg overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute bg-[#e8e8ec] inset-0" />
        <img alt="" className="absolute max-w-none object-cover size-full" src={image} />
      </div>
      
      {/* Content */}
      <div className="flex flex-col items-start justify-between p-6 relative size-full">
        {/* Top Section - Heart Icon and Badge */}
        <div className="flex items-center justify-between w-full">
          <button className="bg-primary flex items-center justify-center overflow-clip rounded-full shrink-0 size-12 hover:opacity-90 transition-opacity">
            <div className="relative shrink-0 size-5">
              <div className="absolute inset-[9.02%]">
                <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16.3935 16.3935">
                  <path clipRule="evenodd" d={svgPaths.p1e54ee00} fill="white" fillRule="evenodd" />
                </svg>
              </div>
            </div>
          </button>
          <div className="bg-primary flex gap-2 items-center justify-center overflow-clip px-2.5 py-1 rounded">
            <p className="font-medium text-sm text-primary-foreground leading-5">Ida e Volta</p>
          </div>
        </div>

        {/* Bottom Section - Flight Details */}
        <div className="bg-[rgba(255,255,255,0.8)] backdrop-blur-sm w-full rounded">
          <div className="flex flex-col gap-6 p-4">
            <div className="flex flex-col gap-2 w-full">
              <p className="font-medium text-xs text-foreground leading-4 tracking-[0.04px]">Passagem</p>
              <h3 className="font-medium text-lg text-foreground leading-[26px] tracking-[-0.04px]">{destination}</h3>
              <p className="font-light text-xs text-muted-foreground leading-4 tracking-[0.04px]">{origin}</p>
              <p className="font-light text-xs text-muted-foreground leading-4 tracking-[0.04px]">{airline}</p>
              
              {/* Divider */}
              <div className="h-px w-full bg-border my-2" />
              
              <p className="text-xs text-muted-foreground leading-4 tracking-[0.04px]">Preço de ida e volta</p>
              
              {/* Price */}
              <div className="flex gap-1 items-center">
                <span className="text-2xl text-muted-foreground leading-[30px] tracking-[-0.1px]">{price}</span>
                <span className="text-xs text-muted-foreground leading-4 tracking-[0.04px]">Tribz</span>
              </div>
              
              {/* Divider */}
              <div className="h-px w-full bg-border my-2" />
              
              <p className="text-xs text-muted-foreground leading-4 tracking-[0.04px]">Data de referência:</p>
              <p className="font-light text-xs text-muted-foreground leading-4 tracking-[0.04px]">{dateRange}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}