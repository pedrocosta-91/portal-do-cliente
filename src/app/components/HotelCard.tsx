import svgPaths from "../../imports/svg-mqs7ggyilf";

interface HotelCardProps {
  image: string;
  title: string;
  location: string;
  distance?: string;
  price: string;
  originalPrice?: string;
  rating: string;
  category?: string;
}

export function HotelCard({ 
  image, 
  title, 
  location, 
  distance = "A 3,94 km do centro",
  price, 
  originalPrice,
  rating,
  category = "Hospedagens"
}: HotelCardProps) {
  return (
    <div className="relative h-[500px] w-full rounded-2xl overflow-hidden group">
      {/* Background Image */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute bg-[#e8e8ec] inset-0" />
        <div className="absolute inset-0 overflow-hidden">
          <img 
            alt={title} 
            className="absolute h-[123.19%] left-0 max-w-none top-[-11.6%] w-full object-cover group-hover:scale-105 transition-transform duration-300" 
            src={image} 
          />
        </div>
      </div>

      {/* Content */}
      <div className="relative flex flex-col items-start justify-between p-6 size-full">
        {/* Heart Button */}
        <div className="flex items-center justify-end w-full">
          <button className="bg-primary flex items-center justify-center overflow-clip rounded-full shrink-0 size-12 hover:opacity-90 transition-opacity">
            <div className="relative shrink-0 size-5">
              <div className="absolute inset-[9.02%]">
                <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16.3935 16.3935">
                  <path clipRule="evenodd" d={svgPaths.p1e54ee00} fill="white" fillRule="evenodd" />
                </svg>
              </div>
            </div>
          </button>
        </div>

        {/* Details Frame */}
        <div className="bg-white/80 backdrop-blur-sm w-full rounded-lg">
          <div className="flex flex-col gap-6 items-start p-4 w-full">
            {/* Text Frame */}
            <div className="flex flex-col gap-2 items-start w-full">
              <p className="text-xs font-medium text-foreground">{category}</p>
              <h3 className="text-lg font-medium text-foreground leading-[26px] tracking-[-0.04px]">{title}</h3>
              <p className="text-xs font-light text-muted-foreground">{distance}</p>
              <p className="text-xs font-light text-muted-foreground whitespace-nowrap">Estadia em {location}</p>
              
              {/* Ratings Frame */}
              <div className="flex gap-2 items-center w-full">
                <div className="bg-primary flex gap-[6px] items-center justify-center overflow-clip px-[6px] py-[2px]">
                  <p className="text-xs font-medium text-white leading-4 tracking-[0.04px]">{rating}</p>
                </div>
                <div className="flex gap-1 items-center">
                  {[...Array(4)].map((_, i) => (
                    <div key={i} className="relative shrink-0 size-4">
                      <div className="absolute inset-[3.21%_5.4%_11.76%_5.4%]">
                        <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14.2729 13.6058">
                          <path d={svgPaths.pf7aa300} fill="#E2A336" />
                        </svg>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Price Frame */}
            <div className="flex flex-col gap-1 items-start pt-2 w-full border-t border-[#d9d9e0]">
              <p className="text-xs font-light text-muted-foreground leading-4 tracking-[0.04px]">
                <span>1 noite, 2 pessoas a partir de </span>
                {originalPrice && (
                  <span className="line-through decoration-solid">{originalPrice} Tribz</span>
                )}
              </p>
              <div className="flex gap-1 items-center">
                <p className="text-2xl font-medium text-muted-foreground leading-[30px] tracking-[-0.1px]">{price}</p>
                <p className="text-xs font-light text-muted-foreground leading-4 tracking-[0.04px]">Tribz</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}