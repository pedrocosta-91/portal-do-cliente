import { useState } from "react";
import svgPaths from "../../imports/svg-785rsacjux";
import { useNavigate } from "react-router";
import { HotelRoomsDrawer, type Room } from "./HotelRoomsDrawer";
import { useCart } from "../../lib/cartContext";

// Imagens de quartos de exemplo (diferentes para cada tipo de quarto)
const roomImages = [
  "https://www.figma.com/api/mcp/asset/73096f4e-3ce0-4ba3-8989-11fe6380d583",
  "https://www.figma.com/api/mcp/asset/2a715be1-ee31-4513-9333-0ad00e606c1e",
  "https://www.figma.com/api/mcp/asset/73096f4e-3ce0-4ba3-8989-11fe6380d583",
];

interface HotelResultCardProps {
  image: string;
  title: string;
  location: string;
  distance: string;
  rating: string;
  ratingText: string;
  stars: number;
  price: string;
  totalPrice: string;
  badges?: { text: string; color: string }[];
  features: string[];
  searchParams?: {
    destino?: string;
    checkIn?: string;
    checkOut?: string;
    adultos?: string;
    acomodacoes?: string;
  };
}

export function HotelResultCard({
  image,
  title,
  location,
  distance,
  rating,
  ratingText,
  stars,
  price,
  totalPrice,
  badges = [],
  features,
  searchParams,
}: HotelResultCardProps) {
  const navigate = useNavigate();
  const { addItem } = useCart();
  const [drawerOpen, setDrawerOpen] = useState(false);

  function handleReserve(room: Room) {
    addItem({
      id: `hotel-${Date.now()}`,
      type: "hotel",
      hotelName: title,
      hotelRating: parseFloat(rating),
      hotelCity: searchParams?.destino || location,
      roomName: room.name,
      hasFreeCancel: true,
      hasBreakfast: false,
      destino: searchParams?.destino || "",
      checkIn: searchParams?.checkIn || "",
      checkOut: searchParams?.checkOut || "",
      adultos: searchParams?.adultos || "2",
      noites: (() => {
        if (!searchParams?.checkIn || !searchParams?.checkOut) return "1";
        const diff = Math.ceil(
          (new Date(searchParams.checkOut).getTime() - new Date(searchParams.checkIn).getTime()) / 86400000
        );
        return String(diff);
      })(),
      quarto: room.name,
      price: room.totalPrice || room.price,
      currency: "Tribz",
      offerExpiresAt: Date.now() + 20 * 60 * 1000,
    });
    navigate("/carrinho?services=hotel");
  }

  // Quartos de exemplo baseados nos dados do hotel
  const rooms: Room[] = [
    {
      id: "1",
      name: "Quarto, 1 cama King, vista para a cidade",
      image: roomImages[0],
      price: price,
      totalPrice: totalPrice,
      facilities: [
        { type: "view", label: "Vista para a cidade" },
        { type: "guests", label: `${Math.max(2, parseInt(searchParams?.adultos || "2"))} pessoas` },
        { type: "wifi", label: "wi-fi" },
        { type: "bed", label: "king size" },
      ],
    },
    {
      id: "2",
      name: "Quarto Deluxe, 2 camas Queen, vista para o mar",
      image: roomImages[1],
      price: price,
      totalPrice: totalPrice,
      facilities: [
        { type: "view", label: "Vista para o mar" },
        { type: "guests", label: "4 pessoas" },
        { type: "wifi", label: "wi-fi" },
        { type: "bed", label: "queen size" },
      ],
    },
    {
      id: "3",
      name: "Suite Premium, 1 cama King, varanda privativa",
      image: roomImages[2],
      price: price,
      totalPrice: totalPrice,
      facilities: [
        { type: "view", label: "Vista panorâmica" },
        { type: "guests", label: "2 pessoas" },
        { type: "wifi", label: "wi-fi" },
        { type: "bed", label: "king size" },
      ],
    },
  ];

  const handleNavigateToHotel = () => {
    const params = new URLSearchParams();
    if (searchParams?.destino) params.append("destino", searchParams.destino);
    if (searchParams?.checkIn) params.append("checkIn", searchParams.checkIn);
    if (searchParams?.checkOut) params.append("checkOut", searchParams.checkOut);
    if (searchParams?.adultos) params.append("adultos", searchParams.adultos);
    if (searchParams?.acomodacoes) params.append("acomodacoes", searchParams.acomodacoes);
    navigate(`/hotel?${params.toString()}`);
  };

  return (
    <>
    <div className="bg-white rounded-2xl overflow-hidden border border-[#d9d9e0] flex w-full shadow-[0px_4px_16px_0px_rgba(0,0,0,0.1),0px_3px_12px_0px_rgba(0,0,0,0.1),0px_2px_3px_0px_rgba(0,0,51,0.06)]">

      {/* ── Imagem + navegação ── */}
      <div className="relative w-[180px] h-[210px] flex-shrink-0">
        <img src={image} alt={title} className="w-full h-full object-cover" />
        {/* Botões carrossel */}
        <div className="absolute top-1/2 -translate-y-1/2 left-2 right-2 flex items-center justify-between pointer-events-none">
          <button className="bg-[#f0f0f3] rounded-full size-6 flex items-center justify-center hover:bg-[#e0e0e6] transition-colors pointer-events-auto">
            <div className="relative size-4">
              <div className="absolute inset-[27%_40.33%_27%_33.67%]">
                <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 4.16 7.35999">
                  <path clipRule="evenodd" d={svgPaths.p3f5b9200} fill="#60646C" fillRule="evenodd" />
                </svg>
              </div>
            </div>
          </button>
          <button className="bg-[#f0f0f3] rounded-full size-6 flex items-center justify-center hover:bg-[#e0e0e6] transition-colors pointer-events-auto">
            <div className="relative size-4">
              <div className="absolute inset-[27%_33.67%_27%_40.33%]">
                <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 4.16 7.36001">
                  <path clipRule="evenodd" d={svgPaths.p203c6480} fill="#60646C" fillRule="evenodd" />
                </svg>
              </div>
            </div>
          </button>
        </div>
      </div>

      {/* ── Info central ── */}
      <div className="flex-1 p-4 flex flex-col gap-4">

        {/* Nome + rating + localização */}
        <div className="flex flex-col gap-[8px] items-start">
          {/* Nome */}
          <p className="text-[#1c2024] text-[16px] font-medium leading-[24px] whitespace-nowrap">
            {title}
          </p>

          {/* Badge de nota + texto + divisor + estrelas */}
          <div className="flex gap-[8px] items-center w-full">
            {/* Badge nota */}
            <div className="bg-primary flex gap-[6px] items-center justify-center overflow-clip px-[6px] py-[2px]">
              <p className="text-white text-[12px] font-medium leading-[16px] tracking-[0.04px] whitespace-nowrap">
                {rating}
              </p>
            </div>
            {/* Texto rating */}
            <p className="text-[#60646c] text-[12px] font-light leading-[16px] tracking-[0.04px] whitespace-nowrap">
              {ratingText}
            </p>
            {/* Divisor vertical */}
            <div className="flex h-[16px] items-center justify-center shrink-0 w-0">
              <div className="-rotate-90 flex-none">
                <div className="h-0 relative w-[16px]">
                  <div className="absolute inset-[-1px_0_0_0]">
                    <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 1">
                      <line stroke="#D9D9E0" x2="16" y1="0.5" y2="0.5" />
                    </svg>
                  </div>
                </div>
              </div>
            </div>
            {/* Estrelas */}
            <div className="flex gap-[4px] items-center">
              {[...Array(stars)].map((_, i) => (
                <div key={i} className="relative shrink-0 size-[16px]">
                  <div className="absolute inset-[3.21%_5.4%_11.76%_5.4%]">
                    <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14.2729 13.6058">
                      <path d={svgPaths.pf7aa300} fill="#E2A336" />
                    </svg>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Localização */}
          <div className="flex gap-[8px] items-center">
            <div className="flex items-center justify-center overflow-clip shrink-0 size-[24px]">
              <div className="overflow-clip shrink-0 size-[16px] relative">
                <div className="absolute inset-[5.21%_13.54%]">
                  <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 11.6667 14.3333">
                    <g>
                      <path d={svgPaths.p3d5d7980} fill="#60646C" />
                      <path d={svgPaths.p339c0280} fill="#60646C" />
                    </g>
                  </svg>
                </div>
              </div>
            </div>
            <p className="text-[#60646c] text-[12px] font-light leading-[16px] tracking-[0.04px] whitespace-nowrap">
              {location}, {distance}
            </p>
          </div>
        </div>

        {/* Badges (Oferta por tempo limitado / Apenas X disponíveis) */}
        {badges.length > 0 && (
          <div className="flex gap-[16px] items-start">
            {badges.map((badge, index) => (
              <div
                key={index}
                className="flex gap-[6px] items-center justify-center overflow-clip px-[6px] py-[2px]"
                style={{ backgroundColor: badge.color }}
              >
                <p className="text-white text-[12px] font-medium leading-[16px] tracking-[0.04px] whitespace-nowrap">
                  {badge.text}
                </p>
              </div>
            ))}
          </div>
        )}

        {/* Benefícios (cancelamento grátis, parcelamento) */}
        <div className="flex gap-[16px] items-start">
          {features.slice(0, 2).map((feature, index) => (
            <div key={index} className="flex gap-[8px] items-center">
              <div className="flex items-center justify-center overflow-clip shrink-0 size-[24px]">
                {feature === "Cancelamento grátis" && (
                  <div className="overflow-clip relative shrink-0 size-[16px]">
                    <div className="absolute inset-[21.88%_13.54%_26.04%_13.54%]">
                      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 11.6666 8.33326">
                        <path d={svgPaths.p3234c680} fill="#60646C" />
                      </svg>
                    </div>
                  </div>
                )}
                {feature === "Pague em 12x sem juros" && (
                  <div className="overflow-clip relative shrink-0 size-[16px]">
                    <div className="absolute inset-[17.71%_5.21%]">
                      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14.3333 10.3333">
                        <g>
                          <path d={svgPaths.p113ca480} fill="#60646C" />
                          <path d={svgPaths.p3ee9d580} fill="#60646C" />
                        </g>
                      </svg>
                    </div>
                  </div>
                )}
              </div>
              <p className="text-[#60646c] text-[12px] font-light leading-[16px] tracking-[0.04px] whitespace-nowrap">
                {feature}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* ── Preço + botões ── */}
      <div className="h-full w-[169px] flex-shrink-0 relative">
        {/* Borda esquerda */}
        <div aria-hidden="true" className="absolute border-[#d9d9e0] border-l border-solid inset-0 pointer-events-none" />
        <div className="flex flex-col gap-[32px] items-end justify-center h-full p-[16px]">

          {/* Bloco de preço */}
          <div className="flex flex-col gap-[4px] items-end w-full">
            {/* Total acima — conforme Figma */}
            <p className="text-[#60646c] text-[12px] font-light leading-[16px] tracking-[0.04px] whitespace-nowrap">
              Total: {totalPrice} tribz
            </p>
            {/* Preço principal */}
            <div className="flex gap-[4px] items-center">
              <p className="text-[#1c2024] text-[24px] font-medium leading-[30px] tracking-[-0.1px] whitespace-nowrap">
                {price}
              </p>
              <p className="text-[#1c2024] text-[24px] font-normal leading-[30px] tracking-[-0.1px] whitespace-nowrap">
                Tribz
              </p>
            </div>
            {/* Total abaixo */}
            <p className="text-[#60646c] text-[12px] font-light leading-[16px] tracking-[0.04px] whitespace-nowrap">
              Total: {totalPrice} Tribz
            </p>
            <p className="text-[#60646c] text-[12px] font-light leading-[16px] tracking-[0.04px] whitespace-nowrap">
              Inclui impostos e taxas
            </p>
          </div>

          {/* Botões */}
          <div className="flex flex-col gap-[8px] items-start w-full">
            {/* Ver quartos — abre o drawer */}
            <button
              onClick={() => setDrawerOpen(true)}
              className="bg-primary flex gap-[4px] h-[24px] items-center justify-center px-[8px] rounded-full w-full hover:opacity-90 transition-opacity cursor-pointer"
            >
              <p className="text-white text-[12px] font-medium leading-[16px] tracking-[0.04px] whitespace-nowrap">
                Ver quartos
              </p>
            </button>
            {/* Ver mais — navega para detalhes */}
            <button
              onClick={handleNavigateToHotel}
              className="border border-primary flex gap-[4px] h-[24px] items-center justify-center px-[8px] rounded-full w-full hover:bg-primary/5 transition-colors cursor-pointer"
            >
              <p className="text-primary text-[12px] font-medium leading-[16px] tracking-[0.04px] whitespace-nowrap">
                Ver mais
              </p>
            </button>
          </div>

        </div>
      </div>
    </div>

    {/* Drawer de quartos */}
    <HotelRoomsDrawer
      isOpen={drawerOpen}
      onClose={() => setDrawerOpen(false)}
      onReserve={handleReserve}
      hotel={{
        name: title,
        image: image,
        rating: rating,
        ratingText: ratingText,
        stars: stars,
        location: location,
        distance: distance,
      }}
      rooms={rooms}
      searchParams={searchParams}
    />
    </>
  );
}
