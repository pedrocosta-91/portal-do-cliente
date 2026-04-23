import { useState, useEffect } from "react";
import { useNavigate, useSearchParams } from "react-router";
import { useCart } from "../../lib/cartContext";
import { SearchResultsHeader } from "../components/SearchResultsHeader";
import { Footer } from "../components/Footer";
import { HotelCard } from "../components/HotelCard";
import {
  Wifi,
  Dumbbell,
  Waves,
  Wind,
  Laptop,
  WavesLadder,
  Martini,
  BedDouble,
  BedSingle,
  Building2,
  Users,
  CreditCard,
  Ruler,
  DoorClosed,
  LayoutGrid as LayoutGridIcon,
  MapPin,
  Clock,
  Star,
  Check,
  Eye,
  Bed,
  ChevronRight,
  ChevronLeft,
  ChevronUp,
  Calendar,
  Info,
  X,
  LayoutGrid
} from "lucide-react";

// Imagens do hero/galeria do hotel (salvas localmente de /public)
const imgMainImage = "/hotel-hero-main.jpg";
const imgGalleryImage = "/hotel-gallery-1.jpg";
const imgGalleryImage1 = "/hotel-gallery-2.jpg";
const imgGalleryImage2 = "/hotel-gallery-3.jpg";
const imgGalleryImage3 = "/hotel-gallery-4.jpg";
const imgRoomImage = "https://www.figma.com/api/mcp/asset/73096f4e-3ce0-4ba3-8989-11fe6380d583";

export default function HotelDetails() {
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();

  // Get search parameters from URL
  const destination = searchParams.get("destino") || "Miami";
  const checkIn = searchParams.get("checkIn") || "2026-03-25";
  const checkOut = searchParams.get("checkOut") || "2026-03-30";
  const adults = searchParams.get("adultos") || "2";
  const rooms = searchParams.get("acomodacoes") || "1";

  // Calculate nights
  const calculateNights = () => {
    if (!checkIn || !checkOut) return 0;
    const start = new Date(checkIn);
    const end = new Date(checkOut);
    const diff = Math.ceil((end.getTime() - start.getTime()) / (1000 * 60 * 60 * 24));
    return diff;
  };

  const nights = calculateNights();

  const { addItem } = useCart();

  const [selectedRoomTab, setSelectedRoomTab] = useState("Todos");
  const [galleryOpen, setGalleryOpen] = useState(false);
  const [selectedRoom, setSelectedRoom] = useState("");
  const [dropdownOpen, setDropdownOpen] = useState(false);

  // Bloqueia scroll do body enquanto a galeria fullscreen está aberta
  useEffect(() => {
    if (galleryOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => { document.body.style.overflow = ""; };
  }, [galleryOpen]);

  // Fecha galeria com tecla Escape
  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if (e.key === "Escape") setGalleryOpen(false);
    };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, []);

  // Hotel data
  const hotel = {
    name: "Kimpton Epic Hotel by IHG",
    location: "Miami, Estados Unidos",
    distance: "4,16 km do centro",
    stars: 5,
    rating: "8.4",
    ratingText: "Muito bom",
    reviewCount: 809,
    checkInTime: "A partir das 16h",
    checkOutTime: "Até às 12h",
    price: "3.695",
    pricePerNight: "1.232",
    quote: "um dos hotéis que mais fazem sucesso com os hóspedes",
    gallery: [
      imgMainImage,
      imgGalleryImage,
      imgGalleryImage1,
      imgGalleryImage2,
      imgGalleryImage3
    ],
    amenities: [
      { icon: Wifi, label: "Wi-Fi grátis" },
      { icon: Dumbbell, label: "Academia" },
      { icon: Waves, label: "Piscina" },
      { icon: Wind, label: "Ar condicionado" },
      { icon: Wifi, label: "Wi-Fi 5GHz" },
      { icon: Laptop, label: "Coworking/Lounge" }
    ],
    rooms: [
      {
        id: 1,
        name: "Quarto, 1 cama King, vista para a cidade",
        image: imgRoomImage,
        amenitiesCol1: [
          { icon: Building2, text: "Vista para a cidade" },
          { icon: Users,     text: "Acomoda 2 pessoas" },
          { icon: CreditCard,text: "Pague em 12x sem juros" },
        ],
        amenitiesCol2: [
          { icon: Ruler,      text: "44 m²" },
          { icon: DoorClosed, text: "1 quarto" },
          { icon: BedDouble,  text: "1 cama King" },
        ],
        discount: "15% OFF",
        discountStyle: "green",
        price: "1.000",
        totalPrice: "26.207",
        availability: "Apenas 4 disponíveis",
        availabilityStyle: "warning",
      },
      {
        id: 2,
        name: "Quarto, 1 cama King, vista para a cidade",
        image: imgRoomImage,
        amenitiesCol1: [
          { icon: Building2, text: "Vista para a cidade" },
          { icon: Users,     text: "Acomoda 2 pessoas" },
          { icon: CreditCard,text: "Pague em 12x sem juros" },
        ],
        amenitiesCol2: [
          { icon: Ruler,      text: "44 m²" },
          { icon: DoorClosed, text: "1 quarto" },
          { icon: BedDouble,  text: "1 cama King" },
        ],
        discount: "",
        discountStyle: "",
        price: "869",
        totalPrice: "26.207",
        availability: "",
        availabilityStyle: "",
      },
      {
        id: 3,
        name: "Quarto, 1 cama King, vista para a cidade",
        image: imgRoomImage,
        amenitiesCol1: [
          { icon: Building2, text: "Vista para a cidade" },
          { icon: Users,     text: "Acomoda 2 pessoas" },
          { icon: CreditCard,text: "Pague em 12x sem juros" },
        ],
        amenitiesCol2: [
          { icon: Ruler,      text: "44 m²" },
          { icon: DoorClosed, text: "1 quarto" },
          { icon: BedDouble,  text: "1 cama King" },
        ],
        discount: "",
        discountStyle: "",
        price: "2.658",
        totalPrice: "26.207",
        availability: "Último disponível",
        availabilityStyle: "error",
      },
    ]
  };

  const formatDate = (dateStr: string) => {
    const date = new Date(dateStr);
    return date.toLocaleDateString("pt-BR");
  };

  const formatDateRange = () => {
    if (!checkIn || !checkOut) return "";
    const startDate = new Date(checkIn);
    const endDate = new Date(checkOut);
    const start = startDate.getDate();
    const end = endDate.getDate();
    const month = endDate.toLocaleDateString("pt-BR", { month: "short" });
    return `${start} - ${end} ${month}`;
  };

  return (
    <div className="min-h-screen bg-[#f9fafb]">
      {/* Header */}
      <SearchResultsHeader 
        destination={destination}
        dateRange={formatDateRange()}
        guests={parseInt(adults)}
        rooms={parseInt(rooms)}
        nights={nights}
        onEdit={() => navigate('/')}
      />

      {/* Main Content */}
      <div className="max-w-[1440px] mx-auto px-8 py-6">
        {/* Photo Gallery - Layout: 1 grande à esquerda + 4 menores em grid 2x2 à direita */}
        <div className="mb-6">
          <div className="flex gap-[16px]">
            {/* Main Large Image - Left side */}
            <div className="h-[700px] relative shrink-0 w-[672px] rounded-[16px] overflow-hidden">
              <img
                src={hotel.gallery[0]}
                alt="Hotel main view"
                className="absolute inset-0 object-cover size-full"
              />
            </div>
            
            {/* Gallery Container - Right side: 4 images in 2x2 grid */}
            <div className="flex flex-wrap gap-[16px] items-start w-[688px] shrink-0">
              <div className="h-[342px] relative w-[336px] rounded-[16px] overflow-hidden">
                <img
                  src={hotel.gallery[1]}
                  alt="Hotel view"
                  className="absolute inset-0 object-cover size-full"
                />
              </div>
              <div className="h-[342px] relative w-[336px] rounded-[16px] overflow-hidden">
                <img
                  src={hotel.gallery[2]}
                  alt="Hotel view"
                  className="absolute inset-0 object-cover size-full"
                />
              </div>
              <div className="h-[342px] relative w-[336px] rounded-[16px] overflow-hidden">
                <img
                  src={hotel.gallery[3]}
                  alt="Hotel view"
                  className="absolute inset-0 object-cover size-full"
                />
              </div>
              {/* Last image with button */}
              <div className="h-[342px] relative w-[336px] rounded-[16px] overflow-hidden flex flex-col items-end justify-end pb-[16px] pr-[16px]">
                <img
                  src={hotel.gallery[4]}
                  alt="Hotel view"
                  className="absolute inset-0 object-cover size-full"
                />
                <button
                  onClick={() => setGalleryOpen(true)}
                  className="bg-[#e8e8ec] hover:bg-[#d9d9e0] flex gap-[12px] h-[40px] items-center justify-center px-[16px] relative rounded-[9999px] transition-colors z-10 cursor-pointer"
                >
                  <LayoutGrid size={18} color="#60646C" />
                  <span className="text-[#1c2024] text-[16px] font-medium leading-[24px]">
                    Mostrar todas as fotos
                  </span>
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Two Column Layout */}
        <div className="flex gap-[48px] items-start">
          {/* Left Column - Main Content */}
          <div className="w-[848px] flex-shrink-0">
            {/* Hotel Identity */}
            <div className="mb-8">
              <h1 className="text-[24px] font-semibold text-[#1c2024] mb-2">
                {hotel.name}
              </h1>
              <div className="flex items-center gap-2 mb-3">
                {[...Array(hotel.stars)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-[#fbbf24] text-[#fbbf24]" />
                ))}
              </div>
              <div className="flex items-center gap-2 text-[14px] text-[#60646c] mb-4">
                <MapPin className="w-4 h-4" />
                <span>{hotel.location}. A {hotel.distance}</span>
              </div>
              <div className="flex items-center gap-6 text-[13px] text-[#60646c] mb-6">
                <div className="flex items-center gap-2">
                  <Clock className="w-4 h-4" />
                  <span>Check in: {hotel.checkInTime}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Clock className="w-4 h-4" />
                  <span>Check out: {hotel.checkOutTime}</span>
                </div>
              </div>

              {/* Detail Section — Figma node 38-6963 */}
              <div className="flex gap-[32px] items-center p-[24px] border border-[#d9d9e0] rounded-xl">

                {/* ── Quote ── */}
                <div className="flex-1 min-w-0">
                  <p className="text-[#60646c] text-[18px] font-light leading-[26px] tracking-[-0.04px]">
                    {hotel.quote}
                  </p>
                </div>

                {/* ── Nota numérica + estrelas ── */}
                <div className="flex flex-col gap-[4px] items-center shrink-0 w-[96px]">
                  <p className="text-[#1c2024] text-[24px] font-bold leading-[30px] tracking-[-0.1px]">
                    {hotel.stars}
                  </p>
                  <div className="flex gap-[4px] items-center w-full justify-center">
                    {[...Array(hotel.stars)].map((_, i) => (
                      <Star key={i} size={16} className="fill-[#E2A336] text-[#E2A336] shrink-0" />
                    ))}
                  </div>
                </div>

                {/* ── Divisor vertical ── */}
                <div className="w-px h-[45px] bg-[#d9d9e0] shrink-0" />

                {/* ── Badge + texto de avaliação ── */}
                <div className="flex gap-[16px] items-center shrink-0">
                  {/* Badge quadrado teal */}
                  <div className="flex items-center justify-center p-[16px] bg-[#12a594] overflow-clip shrink-0 rounded-[4px]">
                    <p className="text-white text-[14px] font-medium leading-[20px] tracking-[0px] whitespace-nowrap">
                      {hotel.rating}
                    </p>
                  </div>
                  {/* Texto lado direito do badge */}
                  <div className="flex flex-col items-start w-[146px]">
                    <p className="text-[#1c2024] text-[18px] font-bold leading-[26px] tracking-[-0.04px] whitespace-nowrap">
                      {hotel.ratingText}
                    </p>
                    <button className="flex gap-[4px] h-[24px] items-center justify-center px-[8px] hover:underline cursor-pointer">
                      <p className="text-[#ce2c31] text-[12px] font-normal leading-[16px] tracking-[0.04px] whitespace-nowrap">
                        Ver {hotel.reviewCount} comentários
                      </p>
                    </button>
                  </div>
                </div>

              </div>
            </div>

            {/* Amenities Section — Figma node 38-6979 */}
            <div className="mb-8 flex flex-col gap-[16px] items-start">
              {/* Cabeçalho: título + "Ver tudo" */}
              <div className="flex gap-[16px] items-center w-full">
                <h2 className="flex-1 text-[#1c2024] text-[24px] font-medium leading-[30px] tracking-[-0.1px]">
                  A hospedagem oferece
                </h2>
                <button className="flex gap-[8px] h-[32px] items-center justify-center px-[12px] cursor-pointer hover:opacity-70 transition-opacity">
                  <span className="text-[#60646c] text-[14px] font-normal leading-[20px] tracking-[0px] whitespace-nowrap">
                    Ver tudo
                  </span>
                  <ChevronRight size={16} color="#60646c" />
                </button>
              </div>

              {/* Linha de ícones: 6 itens, justify-between, h-[104px] */}
              <div className="flex h-[104px] items-center justify-between w-full">
                {[
                  { icon: Wifi,         label: "Wi-fi grátis nas\náreas comuns" },
                  { icon: Dumbbell,     label: "Academia" },
                  { icon: WavesLadder,  label: "Piscina" },
                  { icon: Martini,      label: "Bar" },
                  { icon: Wifi,         label: "Wi-fi grátis nas\náreas comuns" },
                  { icon: BedDouble,    label: "Camas King size" },
                ].map(({ icon: Icon, label }, idx) => (
                  <div
                    key={idx}
                    className="flex flex-col gap-[16px] h-full items-center justify-center w-[108px] shrink-0"
                  >
                    {/* Ícone 48×48 com ícone interno 20×20 */}
                    <div className="flex items-center justify-center size-[48px]">
                      <Icon size={20} color="#60646c" strokeWidth={1.5} />
                    </div>
                    {/* Label centralizada, light 14px */}
                    <p className="text-[#60646c] text-[14px] font-light leading-[20px] tracking-[0px] text-center whitespace-pre-line w-full">
                      {label}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* ── Linha divisória ── */}
            <div className="w-full h-px bg-[#d9d9e0] mb-8" />

            {/* Room Types Section — Figma node 38-7020 */}
            <div className="mb-8 flex flex-col gap-[16px]">

              {/* Cabeçalho com filtros */}
              <div className="flex gap-[16px] items-start w-full">
                <h2 className="flex-1 text-[#1c2024] text-[24px] font-medium leading-[30px] tracking-[-0.1px]">
                  Tipos de quarto
                </h2>
                <div className="flex gap-[16px] items-center shrink-0">
                  {/* Todos — ativo */}
                  <button
                    onClick={() => setSelectedRoomTab("Todos")}
                    className={`flex gap-[8px] h-[32px] items-center justify-center px-[12px] rounded-full border text-[14px] font-medium leading-[20px] transition-colors cursor-pointer ${
                      selectedRoomTab === "Todos"
                        ? "bg-[rgba(0,71,241,0.07)] border-[rgba(0,52,220,0.45)] text-[rgba(0,43,183,0.77)]"
                        : "border-[#d9d9e0] text-[#60646c]"
                    }`}
                  >
                    <LayoutGridIcon size={16} />
                    Todos
                  </button>
                  {/* 2 camas */}
                  <button
                    onClick={() => setSelectedRoomTab("2 camas")}
                    className={`flex gap-[8px] h-[32px] items-center justify-center px-[12px] rounded-full border text-[14px] font-medium leading-[20px] transition-colors cursor-pointer ${
                      selectedRoomTab === "2 camas"
                        ? "bg-[rgba(0,71,241,0.07)] border-[rgba(0,52,220,0.45)] text-[rgba(0,43,183,0.77)]"
                        : "border-[#d9d9e0] text-[#60646c]"
                    }`}
                  >
                    <BedDouble size={16} />
                    2 camas
                  </button>
                  {/* 1 cama */}
                  <button
                    onClick={() => setSelectedRoomTab("1 cama")}
                    className={`flex gap-[8px] h-[32px] items-center justify-center px-[12px] rounded-full border text-[14px] font-medium leading-[20px] transition-colors cursor-pointer ${
                      selectedRoomTab === "1 cama"
                        ? "bg-[rgba(0,71,241,0.07)] border-[rgba(0,52,220,0.45)] text-[rgba(0,43,183,0.77)]"
                        : "border-[#d9d9e0] text-[#60646c]"
                    }`}
                  >
                    <BedSingle size={16} />
                    1 cama
                  </button>
                </div>
              </div>

              {/* Cards de quarto */}
              <div className="flex flex-col gap-[0px]">
                {hotel.rooms.map((room) => (
                  <div
                    key={room.id}
                    className="flex h-[190px] items-center bg-[#fcfcfd] rounded-2xl overflow-hidden shadow-[0px_4px_16px_0px_rgba(0,0,0,0.1),0px_3px_12px_0px_rgba(0,0,0,0.1),0px_2px_3px_0px_rgba(0,0,51,0.06)] mb-[16px] last:mb-0"
                  >
                    {/* Imagem do quarto — 190×190 */}
                    <div className="relative shrink-0 h-full w-[190px] overflow-hidden">
                      <img
                        src={room.image}
                        alt={room.name}
                        className="absolute inset-0 w-full h-full object-cover"
                      />
                    </div>

                    {/* Detalhes do quarto */}
                    <div className="flex flex-1 flex-col gap-[16px] h-full items-start p-[16px] min-w-0">
                      <p className="text-[#1c2024] text-[18px] font-medium leading-[26px] tracking-[-0.04px]">
                        {room.name}
                      </p>
                      {/* 2 colunas de amenities */}
                      <div className="flex gap-[16px] items-start w-full">
                        {/* Coluna 1 */}
                        <div className="flex flex-1 flex-col gap-[8px]">
                          {room.amenitiesCol1.map((a, i) => (
                            <div key={i} className="flex gap-[8px] items-center">
                              <div className="flex items-center justify-center shrink-0 size-[24px]">
                                <a.icon size={16} color="#60646c" strokeWidth={1.5} />
                              </div>
                              <p className="text-[#60646c] text-[12px] font-light leading-[16px] tracking-[0.04px] whitespace-nowrap">
                                {a.text}
                              </p>
                            </div>
                          ))}
                        </div>
                        {/* Coluna 2 */}
                        <div className="flex flex-1 flex-col gap-[8px]">
                          {room.amenitiesCol2.map((a, i) => (
                            <div key={i} className="flex gap-[8px] items-center">
                              <div className="flex items-center justify-center shrink-0 size-[24px]">
                                <a.icon size={16} color="#60646c" strokeWidth={1.5} />
                              </div>
                              <p className="text-[#60646c] text-[12px] font-light leading-[16px] tracking-[0.04px] whitespace-nowrap">
                                {a.text}
                              </p>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>

                    {/* Preço + botão — 230px, borda esquerda */}
                    <div className="flex flex-col gap-[16px] items-end p-[16px] shrink-0 w-[230px] h-full border-l border-[#d9d9e0]">
                      {/* Preço */}
                      <div className="flex flex-col gap-[4px] items-end w-full">
                        <div className="flex gap-[16px] items-center">
                          {room.discount && (
                            <div className="flex items-center justify-center overflow-clip px-[6px] py-[2px] bg-[rgba(0,164,51,0.1)]">
                              <p className="text-[rgba(0,113,63,0.87)] text-[12px] font-medium leading-[16px] tracking-[0.04px] whitespace-nowrap">
                                {room.discount}
                              </p>
                            </div>
                          )}
                          <div className="flex gap-[4px] items-center">
                            <p className="text-[#1c2024] text-[24px] font-medium leading-[30px] tracking-[-0.1px] whitespace-nowrap">
                              {room.price}
                            </p>
                            <p className="text-[#1c2024] text-[24px] font-normal leading-[30px] tracking-[-0.1px] whitespace-nowrap">
                              Tribz
                            </p>
                          </div>
                        </div>
                        <p className="text-[#60646c] text-[12px] font-light leading-[16px] tracking-[0.04px] whitespace-nowrap">
                          Total: {room.totalPrice} Tribz
                        </p>
                        <p className="text-[#60646c] text-[12px] font-light leading-[16px] tracking-[0.04px] whitespace-nowrap">
                          Inclui impostos e taxas
                        </p>
                      </div>

                      {/* Badge de disponibilidade */}
                      {room.availability && (
                        <div className={`flex items-center justify-center overflow-clip px-[8px] py-[4px] w-full ${
                          room.availabilityStyle === "warning"
                            ? "bg-[rgba(255,222,0,0.24)]"
                            : "bg-[rgba(243,0,13,0.08)]"
                        }`}>
                          <p className={`text-[12px] font-medium leading-[16px] tracking-[0.04px] whitespace-nowrap ${
                            room.availabilityStyle === "warning"
                              ? "text-[#ab6400]"
                              : "text-[rgba(196,0,6,0.83)]"
                          }`}>
                            {room.availability}
                          </p>
                        </div>
                      )}

                      {/* Botão Reservar */}
                      <button className="flex gap-[8px] h-[32px] items-center justify-center px-[12px] rounded-full w-full bg-primary hover:opacity-90 transition-opacity cursor-pointer">
                        <p className="text-white text-[14px] font-medium leading-[20px] tracking-[0px] whitespace-nowrap">
                          Reservar
                        </p>
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* ── Divisor ── */}
            <div className="w-full h-px bg-[#d9d9e0] mb-8" />

            {/* Conheça um pouco mais — Figma node 38-7003 */}
            <div className="mb-8 flex flex-col gap-[16px]">
              <h2 className="text-[#1c2024] text-[24px] font-medium leading-[30px] tracking-[-0.1px]">
                Conheça um pouco mais
              </h2>
              <div className="flex flex-col gap-[12px]">
                <p className="text-[#60646c] text-[12px] font-light leading-[20px] tracking-[0.04px]">
                  O Kimpton Epic Hotel está localizado no coração de Miami, oferecendo vistas espetaculares da cidade e do oceano. Com quartos luxuosos e modernos, o hotel proporciona uma experiência única de hospedagem.
                </p>
                <p className="text-[#60646c] text-[12px] font-light leading-[20px] tracking-[0.04px]">
                  Desfrute de nossas comodidades premium, incluindo piscina no rooftop, academia completa, spa de classe mundial e diversos restaurantes com culinária internacional.
                </p>
                <p className="text-[#60646c] text-[12px] font-light leading-[20px] tracking-[0.04px]">
                  • Estação de metrô Miami Central a 800m de distância
                </p>
                <p className="text-[#60646c] text-[12px] font-light leading-[20px] tracking-[0.04px]">
                  • Serviço de transfer para o aeroporto disponível mediante taxa adicional
                </p>
                <p className="text-[#60646c] text-[12px] font-light leading-[20px] tracking-[0.04px]">
                  • Check-in antecipado e late checkout sujeitos à disponibilidade
                </p>
                <p className="text-[#60646c] text-[12px] font-light leading-[20px] tracking-[0.04px]">
                  • Aceita cartões de crédito e débito
                </p>
              </div>
            </div>

            {/* Não encontrou o que buscava? — Figma node 461-7006 */}
            <div className="mb-8 flex flex-col gap-[16px]">
              {/* Header */}
              <div className="flex flex-col gap-[8px]">
                <div className="flex items-center justify-between">
                  <h2 className="text-[#1c2024] text-[24px] font-medium leading-[30px] tracking-[-0.1px]">
                    Não encontrou o que buscava?
                  </h2>
                  <div className="flex gap-[16px] items-center">
                    <button className="flex items-center justify-center size-[32px] rounded-full border border-[rgba(0,8,48,0.27)] hover:bg-[#f0f0f3] transition-colors cursor-pointer">
                      <ChevronLeft size={16} color="#60646c" />
                    </button>
                    <button className="flex items-center justify-center size-[32px] rounded-full border border-[rgba(0,8,48,0.27)] hover:bg-[#f0f0f3] transition-colors cursor-pointer">
                      <ChevronRight size={16} color="#60646c" />
                    </button>
                  </div>
                </div>
                <p className="text-[#60646c] text-[14px] font-light leading-[20px] tracking-[0px]">
                  Encontre hotéis similares atrés da nossa curadoria
                </p>
              </div>

              {/* Cards — mesmo componente HotelCard da home */}
              <div className="flex gap-[16px]">
                <HotelCard
                  image={imgMainImage}
                  title="Kimpton Epic Hotel"
                  location="Miami, EUA"
                  distance="A 4,16 km do centro"
                  price="3.695"
                  originalPrice="4.200"
                  rating="8.4"
                  category="Hospedagens"
                />
                <HotelCard
                  image={imgGalleryImage}
                  title="Four Seasons Miami"
                  location="Miami Beach, EUA"
                  distance="A 2,8 km do centro"
                  price="4.500"
                  originalPrice="5.100"
                  rating="9.1"
                  category="Hospedagens"
                />
                <HotelCard
                  image={imgGalleryImage1}
                  title="W South Beach"
                  location="Miami Beach, EUA"
                  distance="A 1,5 km do centro"
                  price="3.200"
                  originalPrice="3.800"
                  rating="8.8"
                  category="Hospedagens"
                />
              </div>
            </div>

            {/* ── Divisor ── */}
            <div className="w-full h-px bg-[#d9d9e0] mb-8" />

            {/* Conheça a localização do hotel — Figma node 38-7130 */}
            <div className="mb-8 flex flex-col gap-[24px]">
              {/* Header */}
              <div className="flex items-center justify-between">
                <h2 className="text-[#1c2024] text-[24px] font-medium leading-[30px] tracking-[-0.1px]">
                  Conheça a localização do hotel
                </h2>
                <button className="flex gap-[8px] h-[32px] items-center justify-center px-[12px] cursor-pointer hover:opacity-70 transition-opacity">
                  <span className="text-[#60646c] text-[14px] font-normal leading-[20px] tracking-[0px] whitespace-nowrap">
                    Explorar no mapa
                  </span>
                  <ChevronRight size={16} color="#60646c" />
                </button>
              </div>

              {/* Conteúdo: bullets à esquerda + mapa à direita */}
              <div className="flex gap-[32px] items-start">
                {/* Nas proximidades */}
                <div className="flex flex-col gap-[8px] w-[220px] shrink-0">
                  <p className="text-[#1c2024] text-[14px] font-medium leading-[20px]">
                    Nas proximidades
                  </p>
                  <ul className="list-disc list-inside flex flex-col gap-[6px]">
                    {[
                      "Shopping São Conrado - 936 m",
                      "Praia da Barra - 794 m",
                      "Estação Miami Central - 800 m",
                      "São Conrado Fitness - 1,2 km",
                      "Aeroporto Internacional - 18 km",
                    ].map((item, i) => (
                      <li
                        key={i}
                        className="text-[#60646c] text-[12px] font-light leading-[20px] tracking-[0.04px]"
                      >
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Mapa placeholder */}
                <div className="flex-1 h-[480px] rounded-[20px] bg-[#e5e3df] flex items-center justify-center">
                  <div className="text-center text-[#9ca3af]">
                    <MapPin className="w-12 h-12 mx-auto mb-2" />
                    <p className="text-sm">Mapa interativo</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column - Sticky Booking Widget */}
          <div className="w-[480px] flex-shrink-0 self-stretch">
            <div className="sticky top-6 flex flex-col gap-[14px]">

              {/* Card 1 — Header "Os preços incluem todas as taxas" */}
              <div className="bg-[#fcfcfd] flex items-center justify-center p-[16px] rounded-2xl shadow-[0px_4px_16px_0px_rgba(0,0,0,0.1),0px_3px_12px_0px_rgba(0,0,0,0.1),0px_2px_3px_0px_rgba(0,0,51,0.06)]">
                <p className="text-[#1c2024] text-[18px] font-medium leading-[26px] tracking-[-0.04px] whitespace-nowrap">
                  Os preços incluem todas as taxas
                </p>
              </div>

              {/* Card 2 — Detalhes da reserva */}
              <div className="bg-[#fcfcfd] flex flex-col gap-[24px] items-start p-[16px] rounded-2xl shadow-[0px_4px_16px_0px_rgba(0,0,0,0.1),0px_3px_12px_0px_rgba(0,0,0,0.1),0px_2px_3px_0px_rgba(0,0,51,0.06)]">

                {/* Preço + noites */}
                <div className="flex gap-[10px] items-end">
                  <div className="flex gap-[4px] items-baseline">
                    <p className="text-[#1c2024] text-[35px] font-medium leading-[40px] tracking-[-0.16px] whitespace-nowrap">
                      {hotel.price}
                    </p>
                    <p className="text-[#1c2024] text-[35px] font-normal leading-[40px] tracking-[-0.16px] whitespace-nowrap">
                      Tribz
                    </p>
                  </div>
                  <p className="text-[#60646c] text-[16px] font-normal leading-[24px] tracking-[0px] whitespace-nowrap">
                    por {nights} noites
                  </p>
                </div>

                {/* Campos */}
                <div className="flex flex-col gap-[8px] w-full">

                  {/* Check-in + Check-out */}
                  <div className="flex gap-[10px] w-full">
                    {/* Check-in */}
                    <div className="flex-1 flex flex-col gap-[4px] px-[16px] py-[8px] rounded-2xl bg-[rgba(255,255,255,0.9)] shadow-[0px_4px_16px_0px_rgba(0,0,0,0.1),0px_3px_12px_0px_rgba(0,0,0,0.1),0px_2px_3px_0px_rgba(0,0,51,0.06)]">
                      <p className="text-[#1c2024] text-[12px] font-medium leading-[16px] tracking-[0.04px]">
                        Check-in
                      </p>
                      <div className="flex items-center gap-[4px] h-[24px]">
                        <Calendar size={14} color="#60646c" className="shrink-0" />
                        <p className="text-[#60646c] text-[12px] font-normal leading-[16px] tracking-[0.04px]">
                          {formatDate(checkIn)}
                        </p>
                      </div>
                    </div>
                    {/* Check-out */}
                    <div className="flex-1 flex flex-col gap-[4px] px-[16px] py-[8px] rounded-2xl bg-[rgba(255,255,255,0.9)] shadow-[0px_4px_16px_0px_rgba(0,0,0,0.1),0px_3px_12px_0px_rgba(0,0,0,0.1),0px_2px_3px_0px_rgba(0,0,51,0.06)]">
                      <p className="text-[#1c2024] text-[12px] font-medium leading-[16px] tracking-[0.04px]">
                        Check-out
                      </p>
                      <div className="flex items-center gap-[4px] h-[24px]">
                        <Calendar size={14} color="#60646c" className="shrink-0" />
                        <p className="text-[#60646c] text-[12px] font-normal leading-[16px] tracking-[0.04px]">
                          {formatDate(checkOut)}
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Hóspedes */}
                  <div className="flex flex-col gap-[4px] px-[16px] py-[8px] w-full rounded-2xl bg-[rgba(255,255,255,0.9)] shadow-[0px_4px_16px_0px_rgba(0,0,0,0.1),0px_3px_12px_0px_rgba(0,0,0,0.1),0px_2px_3px_0px_rgba(0,0,51,0.06)]">
                    <p className="text-[#1c2024] text-[12px] font-medium leading-[16px] tracking-[0.04px]">
                      Hóspedes
                    </p>
                    <div className="flex items-center gap-[4px] h-[24px]">
                      <Users size={14} color="#60646c" className="shrink-0" />
                      <p className="text-[#60646c] text-[12px] font-normal leading-[16px] tracking-[0.04px]">
                        {adults} Hóspedes
                      </p>
                    </div>
                  </div>

                  {/* Quarto — dropdown customizado */}
                  <div className="flex flex-col gap-[10px] w-full">

                    {/* Trigger */}
                    {selectedRoom && !dropdownOpen ? (
                      /* Estado: quarto selecionado — mostra card com imagem + nome + amenidades */
                      (() => {
                        const room = hotel.rooms.find(r => String(r.id) === selectedRoom);
                        return (
                          <div
                            onClick={() => setDropdownOpen(true)}
                            className="flex gap-[10px] items-center px-[8px] py-[8px] w-full rounded-2xl bg-[rgba(255,255,255,0.9)] shadow-[0px_4px_16px_0px_rgba(0,0,0,0.1),0px_3px_12px_0px_rgba(0,0,0,0.1),0px_2px_3px_0px_rgba(0,0,51,0.06)] cursor-pointer select-none"
                          >
                            {/* Imagem do quarto */}
                            <div className="relative shrink-0 size-[64px] overflow-hidden rounded-lg">
                              <img
                                src={room?.image}
                                alt={room?.name}
                                className="absolute inset-0 w-full h-full object-cover"
                              />
                            </div>
                            {/* Info */}
                            <div className="flex flex-col gap-[10px] items-start flex-1 min-w-0">
                              <p className="text-[#1c2024] text-[16px] font-normal leading-[24px] tracking-[0px] truncate w-full">
                                {room?.name}
                              </p>
                              <div className="flex gap-[10px] items-center">
                                {/* Hóspedes */}
                                <div className="flex gap-[8px] items-center">
                                  <div className="flex items-center justify-center size-[24px]">
                                    <Users size={16} color="#60646c" />
                                  </div>
                                  <p className="text-[#60646c] text-[12px] font-light leading-[16px] tracking-[0.04px] whitespace-nowrap">
                                    Acomoda 2 pessoas
                                  </p>
                                </div>
                                {/* Tamanho */}
                                <div className="flex gap-[8px] items-center">
                                  <div className="flex items-center justify-center size-[24px]">
                                    <Ruler size={16} color="#60646c" />
                                  </div>
                                  <p className="text-[#60646c] text-[12px] font-light leading-[16px] tracking-[0.04px] whitespace-nowrap">
                                    44 m²
                                  </p>
                                </div>
                              </div>
                            </div>
                          </div>
                        );
                      })()
                    ) : (
                      /* Estado: nenhum quarto selecionado (ou dropdown aberto) — mostra placeholder com chevron */
                      <div
                        onClick={() => setDropdownOpen(!dropdownOpen)}
                        className="flex items-center justify-between px-[12px] py-[12px] w-full rounded-2xl bg-[rgba(255,255,255,0.9)] shadow-[0px_4px_16px_0px_rgba(0,0,0,0.1),0px_3px_12px_0px_rgba(0,0,0,0.1),0px_2px_3px_0px_rgba(0,0,51,0.06)] cursor-pointer select-none"
                      >
                        <p className="text-[14px] font-normal leading-[20px] tracking-[0px] truncate text-[#1f2d5c] opacity-50">
                          Escolha o seu quarto
                        </p>
                        <ChevronUp
                          size={16}
                          color="#60646c"
                          className={`shrink-0 transition-transform duration-200 ${dropdownOpen ? "" : "rotate-180"}`}
                        />
                      </div>
                    )}

                    {/* Lista de quartos (aberta) */}
                    {dropdownOpen && (
                      <div className="flex flex-col gap-[12px] px-[8px] py-[8px] w-full rounded-2xl bg-[rgba(255,255,255,0.9)] shadow-[0px_4px_16px_0px_rgba(0,0,0,0.1),0px_3px_12px_0px_rgba(0,0,0,0.1),0px_2px_3px_0px_rgba(0,0,51,0.06)]">
                        {hotel.rooms.map((room) => (
                          <div
                            key={room.id}
                            onClick={() => { setSelectedRoom(String(room.id)); setDropdownOpen(false); }}
                            className="flex gap-[10px] items-center cursor-pointer hover:bg-[#f0f0f3] px-[4px] py-[4px] transition-colors"
                          >
                            {/* Imagem do quarto */}
                            <div className="relative shrink-0 size-[64px] overflow-hidden rounded">
                              <img
                                src={room.image}
                                alt={room.name}
                                className="absolute inset-0 w-full h-full object-cover"
                              />
                            </div>
                            {/* Detalhes */}
                            <div className="flex flex-1 flex-col gap-[10px] min-w-0">
                              <p className="text-[#1c2024] text-[16px] font-normal leading-[24px] tracking-[0px]">
                                {room.name}
                              </p>
                              <div className="flex items-end justify-between w-full">
                                {/* Amenidades */}
                                <div className="flex gap-[8px] items-center">
                                  <div className="flex gap-[4px] items-center">
                                    <div className="flex items-center justify-center size-[24px]">
                                      <Users size={16} color="#60646c" />
                                    </div>
                                    <p className="text-[#60646c] text-[12px] font-light leading-[16px] tracking-[0.04px]">2</p>
                                  </div>
                                  <div className="flex gap-[4px] items-center">
                                    <div className="flex items-center justify-center size-[24px]">
                                      <Ruler size={16} color="#60646c" />
                                    </div>
                                    <p className="text-[#60646c] text-[12px] font-light leading-[16px] tracking-[0.04px]">44 m²</p>
                                  </div>
                                </div>
                                {/* Preço */}
                                <div className="flex gap-[4px] items-baseline shrink-0">
                                  <p className="text-[#60646c] text-[16px] font-normal leading-[24px] tracking-[0px]">Valor:</p>
                                  <p className="text-[#60646c] text-[16px] font-medium leading-[24px] tracking-[0px] whitespace-nowrap">{room.price} Tribz</p>
                                </div>
                              </div>
                            </div>
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                </div>

                {/* Callout — cancelamento */}
                <div className="flex gap-[8px] items-start p-[12px] w-full rounded-2xl bg-[#e8e8ec] border border-[rgba(0,0,47,0.15)] overflow-hidden">
                  <div className="flex items-center h-[20px] shrink-0">
                    <Info size={16} color="#60646c" />
                  </div>
                  <p className="flex-1 text-[#60646c] text-[14px] font-normal leading-[20px] tracking-[0px]">
                    Cancelamento gratuito antes de 19 de março
                  </p>
                </div>

                {/* Botão Reservar */}
                <button
                  onClick={() => {
                    addItem({
                      id: `hotel-${Date.now()}`,
                      type: "hotel",
                      hotelName: hotel.name,
                      hotelRating: parseFloat(hotel.rating),
                      hotelCity: destination,
                      roomName: selectedRoom || "Quarto Standard",
                      hasFreeCancel: true,
                      hasBreakfast: false,
                      destino: destination,
                      checkIn,
                      checkOut,
                      adultos: adults,
                      noites: String(nights),
                      quarto: selectedRoom || "",
                      price: hotel.price,
                      currency: "Tribz",
                      offerExpiresAt: Date.now() + 20 * 60 * 1000,
                    });
                    navigate("/carrinho?services=hotel");
                  }}
                  className="w-full h-[40px] bg-primary hover:opacity-90 text-white rounded-full text-[16px] font-medium leading-[24px] tracking-[0px] transition-opacity cursor-pointer"
                >
                  Reservar
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />

      {/* ── Galeria Fullscreen ── */}
      {galleryOpen && (
        <div className="fixed inset-0 z-[200] bg-black overflow-y-auto">
          {/* Cabeçalho fixo */}
          <div className="sticky top-0 z-10 flex items-center justify-between px-8 py-5 bg-black/90 backdrop-blur-sm border-b border-white/10">
            <div className="flex items-center gap-3">
              <LayoutGrid size={20} color="white" />
              <span className="text-white text-[18px] font-medium">
                {hotel.name} — {hotel.gallery.length} fotos
              </span>
            </div>
            <button
              onClick={() => setGalleryOpen(false)}
              className="flex items-center justify-center size-10 rounded-full bg-white/10 hover:bg-white/20 transition-colors cursor-pointer"
            >
              <X size={20} color="white" />
            </button>
          </div>

          {/* Lista de imagens empilhadas */}
          <div className="max-w-[960px] mx-auto py-10 px-6 flex flex-col gap-6">
            {hotel.gallery.map((src, i) => (
              <div key={i} className="relative w-full rounded-2xl overflow-hidden bg-[#111]">
                <img
                  src={src}
                  alt={`${hotel.name} — foto ${i + 1}`}
                  className="w-full h-auto object-contain block"
                  style={{ maxHeight: "80vh" }}
                />
                <div className="absolute bottom-3 left-4 text-white/50 text-[12px] font-medium select-none">
                  {i + 1} / {hotel.gallery.length}
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}