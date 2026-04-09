import { useEffect } from "react";
import { X, MapPin, Building2, Users, Wifi, BedDouble } from "lucide-react";
import svgPaths from "../../imports/svg-785rsacjux";
import { useNavigate } from "react-router";

export interface RoomFacility {
  type: "view" | "guests" | "wifi" | "bed";
  label: string;
}

export interface Room {
  id: string;
  name: string;
  image: string;
  price: string;
  totalPrice: string;
  facilities: RoomFacility[];
}

interface HotelRoomsDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  hotel: {
    name: string;
    image: string;
    rating: string;
    ratingText: string;
    stars: number;
    location: string;
    distance: string;
  };
  rooms: Room[];
  searchParams?: {
    destino?: string;
    checkIn?: string;
    checkOut?: string;
    adultos?: string;
    acomodacoes?: string;
  };
}

function FacilityIcon({ type }: { type: RoomFacility["type"] }) {
  const cls = "shrink-0";
  switch (type) {
    case "view":   return <Building2 size={12} className={cls} color="rgba(0,7,20,0.62)" />;
    case "guests": return <Users size={12} className={cls} color="rgba(0,7,20,0.62)" />;
    case "wifi":   return <Wifi size={12} className={cls} color="rgba(0,7,20,0.62)" />;
    case "bed":    return <BedDouble size={12} className={cls} color="rgba(0,7,20,0.62)" />;
  }
}

export function HotelRoomsDrawer({
  isOpen,
  onClose,
  hotel,
  rooms,
  searchParams,
}: HotelRoomsDrawerProps) {
  const navigate = useNavigate();

  // Bloqueia scroll do body enquanto drawer está aberto
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => { document.body.style.overflow = ""; };
  }, [isOpen]);

  // Fecha com Escape
  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, [onClose]);

  const handleViewDetails = () => {
    const params = new URLSearchParams();
    if (searchParams?.destino) params.append("destino", searchParams.destino);
    if (searchParams?.checkIn) params.append("checkIn", searchParams.checkIn);
    if (searchParams?.checkOut) params.append("checkOut", searchParams.checkOut);
    if (searchParams?.adultos) params.append("adultos", searchParams.adultos);
    if (searchParams?.acomodacoes) params.append("acomodacoes", searchParams.acomodacoes);
    navigate(`/hotel?${params.toString()}`);
    onClose();
  };

  return (
    <>
      {/* Overlay escuro */}
      <div
        className={`fixed inset-0 z-40 bg-black/40 transition-opacity duration-300 ${
          isOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
        onClick={onClose}
      />

      {/* Painel flutuante — 16px de margem em todos os lados, rounded em todos os cantos */}
      <div
        className={`fixed top-4 right-4 bottom-4 z-50 w-[560px] flex flex-col bg-[#f9f9fb] rounded-2xl shadow-[0px_4px_16px_0px_rgba(0,0,0,0.1),0px_3px_12px_0px_rgba(0,0,0,0.1),0px_2px_3px_0px_rgba(0,0,51,0.06)] transition-transform duration-300 ease-in-out ${
          isOpen ? "translate-x-0" : "translate-x-[calc(100%+16px)]"
        }`}
      >
        {/* Botão fechar */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-10 bg-white/80 rounded-full size-8 flex items-center justify-center hover:bg-white transition-colors shadow-sm"
        >
          <X size={16} color="#60646C" />
        </button>

        {/* Conteúdo com padding de 16px em todos os lados (igual ao Figma) */}
        <div className="flex flex-col h-full p-[16px] min-h-0">

          {/* ── Imagem principal do hotel ── com margem e border radius */}
          <div className="relative h-[240px] shrink-0 rounded-2xl overflow-hidden w-full">
            <div className="absolute inset-0 bg-[#d9d9d9]" />
            <img
              src={hotel.image}
              alt={hotel.name}
              className="absolute inset-0 w-full h-full object-cover rounded-2xl"
            />
          </div>

          {/* ── Info do hotel ── */}
          <div className="flex flex-col gap-[8px] items-start px-[16px] py-[16px] shrink-0 w-full">
            {/* Nome */}
            <p className="text-[#1c2024] text-[16px] font-medium leading-[24px] tracking-[0px] whitespace-nowrap">
              {hotel.name}
            </p>

            {/* Rating + estrelas */}
            <div className="flex gap-[8px] items-center w-full">
              {/* Badge nota */}
              <div className="flex gap-[6px] items-center justify-center overflow-clip px-[6px] py-[2px] rounded-[3px] bg-[#12a594]">
                <p className="text-white text-[12px] font-medium leading-[16px] tracking-[0.04px] whitespace-nowrap">
                  {hotel.rating}
                </p>
              </div>
              <p className="text-[#60646c] text-[12px] font-light leading-[16px] tracking-[0.04px] whitespace-nowrap">
                {hotel.ratingText}
              </p>
              {/* Divisor vertical */}
              <div className="flex h-[16px] items-center shrink-0">
                <div className="w-px h-full bg-[#D9D9E0]" />
              </div>
              {/* Estrelas */}
              <div className="flex gap-[4px] items-center">
                {[...Array(hotel.stars)].map((_, i) => (
                  <div key={i} className="relative shrink-0 size-[16px]">
                    <div className="absolute inset-[3.21%_5.4%_11.76%_5.4%]">
                      <svg className="absolute block size-full" fill="none" viewBox="0 0 14.2729 13.6058">
                        <path d={svgPaths.pf7aa300} fill="#E2A336" />
                      </svg>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Localização */}
            <div className="flex gap-[8px] items-center">
              <div className="flex items-center justify-center shrink-0 size-[24px]">
                <MapPin size={16} color="#60646C" />
              </div>
              <p className="text-[#60646c] text-[12px] font-light leading-[16px] tracking-[0.04px]">
                {hotel.location}, {hotel.distance}
              </p>
            </div>
          </div>

          {/* ── Lista de quartos — scrollável ── */}
          <div className="flex flex-col flex-1 min-h-0 py-[16px]">
            {/* Título */}
            <div className="px-[16px] pb-[8px] shrink-0">
              <p className="text-[#1c2024] text-[14px] font-normal leading-[20px]">
                Quartos disponíveis
              </p>
            </div>

            {/* Área de scroll */}
            <div className="flex-1 overflow-y-auto">
              {rooms.map((room, index) => (
                <div key={room.id}>
                  {/* Item do quarto */}
                  <div className="flex gap-[16px] items-center p-[16px] w-full">
                    {/* Imagem + info */}
                    <div className="flex flex-1 gap-[16px] items-center min-w-0">
                      <div className="relative rounded-[8px] shrink-0 size-[80px] overflow-hidden bg-[#d9d9d9]">
                        <img
                          src={room.image}
                          alt={room.name}
                          className="absolute inset-0 w-full h-full object-cover rounded-[8px]"
                        />
                      </div>

                      {/* Info do quarto */}
                      <div className="flex flex-1 flex-col gap-[8px] items-start min-w-0">
                        <p className="text-[#1c2024] text-[14px] font-normal leading-[20px] tracking-[0px]">
                          {room.name}
                        </p>
                        {/* Facility badges */}
                        <div className="flex flex-wrap gap-[8px] items-start w-full">
                          {room.facilities.map((f, fi) => (
                            <div
                              key={fi}
                              className="flex gap-[6px] items-center justify-center overflow-clip px-[6px] py-[2px] rounded-full"
                              style={{ backgroundColor: "rgba(0,0,51,0.06)" }}
                            >
                              <FacilityIcon type={f.type} />
                              <p
                                className="text-[12px] font-medium leading-[16px] tracking-[0.04px] whitespace-nowrap"
                                style={{ color: "rgba(0,7,20,0.62)" }}
                              >
                                {f.label}
                              </p>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>

                    {/* Preço + botão Reservar */}
                    <div className="flex flex-col gap-[16px] items-end justify-center shrink-0 w-[120px]">
                      <div className="flex flex-col gap-[4px] items-end w-full">
                        <div className="flex gap-[4px] items-center">
                          <p className="text-[#1c2024] text-[16px] font-medium leading-[24px] tracking-[0px] whitespace-nowrap">
                            {room.price}
                          </p>
                          <p className="text-[#1c2024] text-[16px] font-normal leading-[24px] tracking-[0px] whitespace-nowrap">
                            Tribz
                          </p>
                        </div>
                        <p className="text-[#60646c] text-[12px] font-light leading-[16px] tracking-[0.04px] whitespace-nowrap">
                          Total: {room.totalPrice} Tribz
                        </p>
                      </div>
                      <button className="bg-[#12a594] flex gap-[4px] h-[24px] items-center justify-center px-[8px] rounded-full w-full hover:opacity-90 transition-opacity cursor-pointer">
                        <p className="text-white text-[12px] font-medium leading-[16px] tracking-[0.04px] whitespace-nowrap">
                          Reservar
                        </p>
                      </button>
                    </div>
                  </div>

                  {/* Divisor */}
                  {index < rooms.length - 1 && (
                    <div className="mx-[16px] h-px bg-[#d9d9e0]" />
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* ── Botão "ver todos os detalhes" ── */}
          <div className="flex flex-col items-center py-[8px] shrink-0 w-full">
            <button
              onClick={handleViewDetails}
              className="bg-[#12a594] flex gap-[8px] h-[32px] items-center justify-center px-[12px] rounded-full w-full hover:opacity-90 transition-opacity cursor-pointer"
            >
              <p className="text-white text-[14px] font-medium leading-[20px] tracking-[0px] whitespace-nowrap">
                ver todos os detalhes do hotel
              </p>
            </button>
          </div>

        </div>
      </div>
    </>
  );
}
