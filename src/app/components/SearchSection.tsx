import svgPaths from "../../imports/svg-4cv1bqd2th";
import { useState, useRef, useEffect } from "react";
import { useNavigate } from "react-router";
import { DatePicker } from "./DatePicker";
import { Plane, Users, ChevronDown } from "lucide-react";

const BRAZILIAN_CITIES = [
  "São Paulo, SP",
  "Rio de Janeiro, RJ",
  "Brasília, DF",
  "Salvador, BA",
  "Fortaleza, CE",
  "Belo Horizonte, MG",
  "Manaus, AM",
  "Curitiba, PR",
  "Recife, PE",
  "Goiânia, GO",
  "Porto Alegre, RS",
  "Belém, PA",
  "Guarulhos, SP",
  "Campinas, SP",
  "São Luís, MA",
  "São Gonçalo, RJ",
  "Maceió, AL",
  "Duque de Caxias, RJ",
  "Natal, RN",
  "Teresina, PI",
  "Campo Grande, MS",
  "Nova Iguaçu, RJ",
  "São Bernardo do Campo, SP",
  "João Pessoa, PB",
  "Santo André, SP",
  "Osasco, SP",
  "Jaboatão dos Guararapes, PE",
  "Ribeirão Preto, SP",
  "Uberlândia, MG",
  "Sorocaba, SP",
  "Contagem, MG",
  "Aracaju, SE",
  "Feira de Santana, BA",
  "Cuiabá, MT",
  "Joinville, SC",
  "Juiz de Fora, MG",
  "Londrina, PR",
  "Aparecida de Goiânia, GO",
  "Porto Velho, RO",
  "Niterói, RJ",
  "Florianópolis, SC",
  "Campos dos Goytacazes, RJ",
  "Mauá, SP",
  "Vila Velha, ES",
  "São José dos Campos, SP",
  "Olinda, PE",
  "Carapicuíba, SP",
  "Santos, SP",
  "Mogi das Cruzes, SP",
  "Betim, MG",
];

interface Hotel {
  name: string;
  location: string;
}

const HOTELS: Hotel[] = [
  { name: "Resort Vista Mar", location: "Bali, Indonésia" },
  { name: "Hotel Boutique Premium", location: "Paris, França" },
  { name: "Paraíso Tropical", location: "Maldivas" },
  { name: "Lodge Montanha Nevada", location: "Aspen, EUA" },
  { name: "Sky Suites Tokio", location: "Tóquio, Japão" },
  { name: "Grand Copacabana Hotel", location: "Rio de Janeiro, RJ" },
  { name: "Los Angeles Bay Hotel", location: "Los Angeles, EUA" },
  { name: "Hotel Atlântico Business", location: "Rio de Janeiro, RJ" },
  { name: "Riviera Palace Hotel", location: "Mônaco" },
  { name: "Coral Bay Resort", location: "Cancún, México" },
  { name: "Grand Hotel Central", location: "Nova York, EUA" },
  { name: "Casa Heritage", location: "Lisboa, Portugal" },
  { name: "Palazzo Elegante", location: "Roma, Itália" },
  { name: "Island Paradise Resort", location: "Phuket, Tailândia" },
];

const normalize = (text: string) =>
  text.normalize("NFD").replace(/[\u0300-\u036f]/g, "").toLowerCase();

interface DestinationSuggestions {
  hotels: Hotel[];
  cities: string[];
}

const TABS = ["Hospedagem", "Passagem aérea", "Aluguel de carro"] as const;
type Tab = typeof TABS[number];

export function SearchSection() {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState<Tab>("Hospedagem");

  // ── Estado: Hospedagem ──────────────────────────────────────────────────────
  const [destination, setDestination] = useState("");
  const [showCityDropdown, setShowCityDropdown] = useState(false);
  const [checkInDate, setCheckInDate] = useState<Date | null>(null);
  const [checkOutDate, setCheckOutDate] = useState<Date | null>(null);
  const [showCheckInPicker, setShowCheckInPicker] = useState(false);
  const [showCheckOutPicker, setShowCheckOutPicker] = useState(false);
  const [adults, setAdults] = useState(2);
  const [rooms, setRooms] = useState(1);
  const [showGuestsDropdown, setShowGuestsDropdown] = useState(false);

  const destinationRef = useRef<HTMLDivElement>(null);
  const guestsRef = useRef<HTMLDivElement>(null);
  const checkInRef = useRef<HTMLDivElement>(null);
  const checkOutRef = useRef<HTMLDivElement>(null);
  const checkInButtonRef = useRef<HTMLButtonElement>(null);
  const checkOutButtonRef = useRef<HTMLButtonElement>(null);

  // ── Estado: Passagem aérea ──────────────────────────────────────────────────
  const [origin, setOrigin] = useState("");
  const [showOriginDropdown, setShowOriginDropdown] = useState(false);
  const [filteredOriginCities, setFilteredOriginCities] = useState<string[]>([]);

  const [flightDestination, setFlightDestination] = useState("");
  const [showFlightDestDropdown, setShowFlightDestDropdown] = useState(false);
  const [filteredFlightDestCities, setFilteredFlightDestCities] = useState<string[]>([]);

  const [departDate, setDepartDate] = useState<Date | null>(null);
  const [returnDate, setReturnDate] = useState<Date | null>(null);
  const [showDepartPicker, setShowDepartPicker] = useState(false);
  const [showReturnPicker, setShowReturnPicker] = useState(false);

  const [tripType, setTripType] = useState("Ida e Volta");
  const [showTripTypeDropdown, setShowTripTypeDropdown] = useState(false);
  const [flightAdults, setFlightAdults] = useState(1);
  const [showFlightPassengersDropdown, setShowFlightPassengersDropdown] = useState(false);

  const originRef = useRef<HTMLDivElement>(null);
  const flightDestRef = useRef<HTMLDivElement>(null);
  const departRef = useRef<HTMLDivElement>(null);
  const returnRef = useRef<HTMLDivElement>(null);
  const departButtonRef = useRef<HTMLButtonElement>(null);
  const returnButtonRef = useRef<HTMLButtonElement>(null);
  const tripTypeRef = useRef<HTMLDivElement>(null);
  const flightPassengersRef = useRef<HTMLDivElement>(null);

  // ── Click outside ───────────────────────────────────────────────────────────
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (destinationRef.current && !destinationRef.current.contains(event.target as Node)) setShowCityDropdown(false);
      if (guestsRef.current && !guestsRef.current.contains(event.target as Node)) setShowGuestsDropdown(false);
      if (checkInRef.current && !checkInRef.current.contains(event.target as Node)) setShowCheckInPicker(false);
      if (checkOutRef.current && !checkOutRef.current.contains(event.target as Node)) setShowCheckOutPicker(false);
      if (originRef.current && !originRef.current.contains(event.target as Node)) setShowOriginDropdown(false);
      if (flightDestRef.current && !flightDestRef.current.contains(event.target as Node)) setShowFlightDestDropdown(false);
      if (departRef.current && !departRef.current.contains(event.target as Node)) setShowDepartPicker(false);
      if (returnRef.current && !returnRef.current.contains(event.target as Node)) setShowReturnPicker(false);
      if (tripTypeRef.current && !tripTypeRef.current.contains(event.target as Node)) setShowTripTypeDropdown(false);
      if (flightPassengersRef.current && !flightPassengersRef.current.contains(event.target as Node)) setShowFlightPassengersDropdown(false);
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  // ── Helpers ─────────────────────────────────────────────────────────────────
  const filterCities = (value: string) =>
    BRAZILIAN_CITIES.filter(c => normalize(c).includes(normalize(value)));

  const getDestinationSuggestions = (value: string): DestinationSuggestions => {
    const q = normalize(value);
    return {
      hotels: HOTELS.filter(h => normalize(h.name).includes(q) || normalize(h.location).includes(q)).slice(0, 5),
      cities: BRAZILIAN_CITIES.filter(c => normalize(c).includes(q)).slice(0, 6),
    };
  };

  const [destinationSuggestions, setDestinationSuggestions] = useState<DestinationSuggestions>({ hotels: [], cities: [] });

  const formatDate = (dateString: string) => {
    if (!dateString) return "";
    const date = new Date(dateString);
    const days = ["Dom", "Seg", "Ter", "Qua", "Qui", "Sex", "Sáb"];
    const day = days[date.getDay()];
    const dateNum = String(date.getDate()).padStart(2, "0");
    const month = String(date.getMonth() + 1).padStart(2, "0");
    return `${day}, ${dateNum}/${month}`;
  };

  const handleSearch = () => {
    const searchParams = new URLSearchParams();
    if (destination) searchParams.set("destino", destination);
    if (checkInDate) searchParams.set("checkIn", checkInDate.toISOString().split("T")[0]);
    if (checkOutDate) searchParams.set("checkOut", checkOutDate.toISOString().split("T")[0]);
    searchParams.set("adultos", adults.toString());
    searchParams.set("acomodacoes", rooms.toString());
    navigate(`/resultados?${searchParams.toString()}`);
  };

  const handleFlightSearch = () => {
    const params = new URLSearchParams();
    if (origin) params.set("origem", origin);
    if (flightDestination) params.set("destino", flightDestination);
    if (departDate) params.set("ida", departDate.toISOString().split("T")[0]);
    if (returnDate) params.set("volta", returnDate.toISOString().split("T")[0]);
    params.set("adultos", flightAdults.toString());
    params.set("tipo", tripType);
    navigate(`/resultados-aereo?${params.toString()}`);
  };

  // ── Segmented Control ───────────────────────────────────────────────────────
  const segmentedControl = (
    <div
      className="flex h-10 items-center justify-center w-full max-w-[640px] rounded-lg overflow-hidden"
      style={{ backgroundImage: "linear-gradient(90deg, rgba(0, 0, 51, 0.06) 0%, rgba(0, 0, 51, 0.06) 100%), linear-gradient(90deg, rgba(255, 255, 255, 0.9) 0%, rgba(255, 255, 255, 0.9) 100%)" }}
    >
      {TABS.map((tab) => {
        const isActive = activeTab === tab;
        return (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`flex-1 h-full flex items-center justify-center gap-2 px-4 transition-colors cursor-pointer ${
              isActive
                ? "bg-white rounded-lg border border-[rgba(0,0,45,0.09)]"
                : "bg-transparent rounded-md hover:bg-white/50"
            }`}
          >
            <span className={`text-[16px] leading-[24px] tracking-[0px] ${
              isActive ? "font-medium text-[#3358d4]" : "font-normal text-[#60646c]"
            }`}>
              {tab}
            </span>
          </button>
        );
      })}
    </div>
  );

  // ── Formulário: Hospedagem ───────────────────────────────────────────────────
  const hotelForm = (
    <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 w-full">
      <div className="flex gap-2 items-start w-full flex-wrap relative">
        {/* Destination Field */}
        <div className="bg-white/90 flex-1 min-w-[250px] rounded-lg px-4 py-2 relative" ref={destinationRef} style={{ zIndex: showCityDropdown ? 200 : 1 }}>
          <label className="block text-xs font-medium text-foreground mb-1">
            Para onde você quer ir?
          </label>
          <input
            type="text"
            placeholder="Digite o destino ou nome do hotel"
            className="w-full bg-transparent rounded text-xs text-muted-foreground border-0 focus:outline-none focus:ring-0 p-1"
            value={destination}
            onChange={(e) => {
              const val = e.target.value;
              setDestination(val);
              if (val.trim()) {
                setDestinationSuggestions(getDestinationSuggestions(val));
                setShowCityDropdown(true);
              } else {
                setShowCityDropdown(false);
              }
            }}
          />
          {showCityDropdown && (destinationSuggestions.hotels.length > 0 || destinationSuggestions.cities.length > 0) && (
            <div className="absolute left-0 right-0 top-full mt-1 bg-white rounded-lg shadow-lg max-h-72 overflow-y-auto z-[200] border border-border">
              {destinationSuggestions.hotels.length > 0 && (
                <>
                  <div className="px-4 py-2 bg-muted">
                    <span className="text-[16px] font-medium text-muted-foreground uppercase tracking-wide">Hotéis</span>
                  </div>
                  {destinationSuggestions.hotels.map(hotel => (
                    <button
                      key={hotel.name}
                      className="w-full text-left px-4 py-2.5 hover:bg-muted transition-colors flex flex-col gap-0.5"
                      onClick={() => { setDestination(hotel.name); setShowCityDropdown(false); }}
                    >
                      <span className="text-sm text-foreground">{hotel.name}</span>
                      <span className="text-xs text-muted-foreground">{hotel.location}</span>
                    </button>
                  ))}
                </>
              )}
              {destinationSuggestions.cities.length > 0 && (
                <>
                  <div className="px-4 py-2 bg-muted">
                    <span className="text-[16px] font-medium text-muted-foreground uppercase tracking-wide">Cidades</span>
                  </div>
                  {destinationSuggestions.cities.map(city => (
                    <button
                      key={city}
                      className="w-full text-left px-4 py-2.5 text-sm text-foreground hover:bg-muted transition-colors"
                      onClick={() => { setDestination(city); setShowCityDropdown(false); }}
                    >
                      {city}
                    </button>
                  ))}
                </>
              )}
            </div>
          )}
        </div>

        {/* Check-in Field */}
        <div className="bg-white/90 flex flex-col px-4 py-2 rounded-lg w-[140px] relative" ref={checkInRef} style={{ zIndex: showCheckInPicker ? 200 : 1 }}>
          <label className="block text-xs font-medium text-foreground mb-1">Check-in</label>
          <button className="relative h-6 w-full cursor-pointer" onClick={() => setShowCheckInPicker(!showCheckInPicker)} ref={checkInButtonRef}>
            <div className="absolute inset-0 flex items-center gap-2 rounded px-1">
              <div className="relative shrink-0 size-[14px]">
                <div className="absolute inset-[6.67%]">
                  <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12.1333 12.1333">
                    <path clipRule="evenodd" d={svgPaths.p3adbe580} fill="#60646C" fillRule="evenodd" />
                  </svg>
                </div>
              </div>
              <span className="text-xs text-muted-foreground">{checkInDate ? formatDate(checkInDate.toISOString()) : "Selecionar"}</span>
            </div>
          </button>
          {showCheckInPicker && (
            <DatePicker value={checkInDate} onChange={(date) => setCheckInDate(date)} show={showCheckInPicker} setShow={setShowCheckInPicker} triggerRect={checkInButtonRef.current?.getBoundingClientRect() || null} />
          )}
        </div>

        {/* Check-out Field */}
        <div className="bg-white/90 flex flex-col px-4 py-2 rounded-lg w-[140px] relative" ref={checkOutRef} style={{ zIndex: showCheckOutPicker ? 200 : 1 }}>
          <label className="block text-xs font-medium text-foreground mb-1">Check-out</label>
          <button className="relative h-6 w-full cursor-pointer" onClick={() => setShowCheckOutPicker(!showCheckOutPicker)} ref={checkOutButtonRef}>
            <div className="absolute inset-0 flex items-center gap-2 rounded px-1">
              <div className="relative shrink-0 size-[14px]">
                <div className="absolute inset-[6.67%]">
                  <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12.1333 12.1333">
                    <path clipRule="evenodd" d={svgPaths.p3adbe580} fill="#60646C" fillRule="evenodd" />
                  </svg>
                </div>
              </div>
              <span className="text-xs text-muted-foreground">{checkOutDate ? formatDate(checkOutDate.toISOString()) : "Selecionar"}</span>
            </div>
          </button>
          {showCheckOutPicker && (
            <DatePicker value={checkOutDate} onChange={(date) => setCheckOutDate(date)} show={showCheckOutPicker} setShow={setShowCheckOutPicker} triggerRect={checkOutButtonRef.current?.getBoundingClientRect() || null} />
          )}
        </div>

        {/* Guests Field */}
        <div className="bg-white/90 flex flex-col px-4 py-2 rounded-lg relative" ref={guestsRef} style={{ zIndex: showGuestsDropdown ? 200 : 1 }}>
          <label className="block text-xs font-medium text-foreground mb-1 whitespace-nowrap">Hospedes e acomodações</label>
          <button className="bg-transparent flex items-center rounded px-1 h-6 cursor-pointer text-left" onClick={() => setShowGuestsDropdown(!showGuestsDropdown)}>
            <span className="text-xs text-muted-foreground whitespace-nowrap">{adults} {adults === 1 ? "adulto" : "adultos"}, {rooms} {rooms === 1 ? "acomodação" : "acomodações"}</span>
          </button>
          {showGuestsDropdown && (
            <div className="absolute left-0 top-full mt-1 bg-white rounded-lg shadow-lg z-[200] border border-border p-4 min-w-[280px]">
              <div className="flex items-center justify-between mb-4">
                <div>
                  <p className="text-sm font-medium text-foreground">Adultos</p>
                  <p className="text-xs text-muted-foreground">A partir de 18 anos</p>
                </div>
                <div className="flex items-center gap-3">
                  <button className="w-8 h-8 rounded-full border border-border flex items-center justify-center hover:bg-muted transition-colors disabled:opacity-50 disabled:cursor-not-allowed" onClick={() => setAdults(Math.max(1, adults - 1))} disabled={adults <= 1}><span className="text-lg font-medium">−</span></button>
                  <span className="w-8 text-center font-medium">{adults}</span>
                  <button className="w-8 h-8 rounded-full border border-border flex items-center justify-center hover:bg-muted transition-colors" onClick={() => setAdults(adults + 1)}><span className="text-lg font-medium">+</span></button>
                </div>
              </div>
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-foreground">Acomodações</p>
                  <p className="text-xs text-muted-foreground">Quartos ou unidades</p>
                </div>
                <div className="flex items-center gap-3">
                  <button className="w-8 h-8 rounded-full border border-border flex items-center justify-center hover:bg-muted transition-colors disabled:opacity-50 disabled:cursor-not-allowed" onClick={() => setRooms(Math.max(1, rooms - 1))} disabled={rooms <= 1}><span className="text-lg font-medium">−</span></button>
                  <span className="w-8 text-center font-medium">{rooms}</span>
                  <button className="w-8 h-8 rounded-full border border-border flex items-center justify-center hover:bg-muted transition-colors" onClick={() => setRooms(rooms + 1)}><span className="text-lg font-medium">+</span></button>
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Search Button */}
        <button onClick={handleSearch} className="bg-[#12a594] flex gap-3 h-10 items-center justify-center px-4 rounded-full hover:bg-[#0f8c7d] transition-colors self-start mt-[18px] cursor-pointer">
          <span className="font-medium text-white">Buscar hotéis</span>
        </button>
      </div>
    </div>
  );

  // ── Formulário: Passagem aérea ───────────────────────────────────────────────
  const flightForm = (
    <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-[24px] w-full flex flex-col gap-[16px]">

      {/* Linha 1: Selects (Ida e Volta + Adultos) */}
      <div className="flex gap-[16px] items-center">

        {/* Ida e Volta */}
        <div className="relative w-[160px]" ref={tripTypeRef}>
          <button
            onClick={() => setShowTripTypeDropdown(!showTripTypeDropdown)}
            className="flex gap-[8px] h-[32px] items-center overflow-hidden px-[12px] w-full cursor-pointer hover:bg-white/50 transition-colors"
          >
            <Plane size={16} color="#60646c" className="shrink-0" />
            <span className="flex-1 text-[14px] leading-[20px] tracking-[0px] text-[#1f2d5c] opacity-50 truncate text-left">
              {tripType}
            </span>
            <ChevronDown size={16} color="#60646c" className="shrink-0" />
          </button>
          {showTripTypeDropdown && (
            <div className="absolute left-0 top-full mt-1 bg-white rounded-lg shadow-lg z-[200] border border-border min-w-[160px]">
              {["Ida e Volta", "Somente Ida"].map((option) => (
                <button
                  key={option}
                  className="w-full text-left px-4 py-2 text-sm hover:bg-muted transition-colors"
                  onClick={() => { setTripType(option); setShowTripTypeDropdown(false); }}
                >
                  {option}
                </button>
              ))}
            </div>
          )}
        </div>

        {/* Adultos */}
        <div className="relative w-[160px]" ref={flightPassengersRef}>
          <button
            onClick={() => setShowFlightPassengersDropdown(!showFlightPassengersDropdown)}
            className="flex gap-[8px] h-[32px] items-center overflow-hidden px-[12px] w-full cursor-pointer hover:bg-white/50 transition-colors"
          >
            <Users size={16} color="#60646c" className="shrink-0" />
            <span className="flex-1 text-[14px] leading-[20px] tracking-[0px] text-[#1f2d5c] opacity-50 truncate text-left">
              {flightAdults} {flightAdults === 1 ? "Adulto" : "Adultos"}
            </span>
            <ChevronDown size={16} color="#60646c" className="shrink-0" />
          </button>
          {showFlightPassengersDropdown && (
            <div className="absolute left-0 top-full mt-1 bg-white rounded-lg shadow-lg z-[200] border border-border p-4 min-w-[220px]">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-foreground">Adultos</p>
                  <p className="text-xs text-muted-foreground">A partir de 12 anos</p>
                </div>
                <div className="flex items-center gap-3">
                  <button className="w-8 h-8 rounded-full border border-border flex items-center justify-center hover:bg-muted transition-colors disabled:opacity-50 disabled:cursor-not-allowed" onClick={() => setFlightAdults(Math.max(1, flightAdults - 1))} disabled={flightAdults <= 1}><span className="text-lg font-medium">−</span></button>
                  <span className="w-8 text-center font-medium">{flightAdults}</span>
                  <button className="w-8 h-8 rounded-full border border-border flex items-center justify-center hover:bg-muted transition-colors" onClick={() => setFlightAdults(flightAdults + 1)}><span className="text-lg font-medium">+</span></button>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Linha 2: Campos de busca + botão */}
      <div className="flex gap-[8px] items-center w-full">

        {/* Cidade de Partida */}
        <div className="bg-white/90 flex-1 min-w-[200px] rounded-2xl px-[16px] py-[8px] relative" ref={originRef} style={{ zIndex: showOriginDropdown ? 200 : 1 }}>
          <p className="text-[12px] font-medium leading-[16px] tracking-[0.04px] text-[#1c2024] mb-[4px]">
            Cidade de Partida
          </p>
          <input
            type="text"
            placeholder="Digite a cidade de partida"
            className="w-full bg-transparent text-[12px] leading-[16px] tracking-[0.04px] text-[#60646c] border-0 focus:outline-none focus:ring-0 px-[4px] h-[24px]"
            value={origin}
            onChange={(e) => {
              setOrigin(e.target.value);
              if (e.target.value.trim()) {
                setFilteredOriginCities(filterCities(e.target.value));
                setShowOriginDropdown(true);
              } else {
                setShowOriginDropdown(false);
              }
            }}
          />
          {showOriginDropdown && filteredOriginCities.length > 0 && (
            <div className="absolute left-0 right-0 top-full mt-1 bg-white rounded-lg shadow-lg max-h-60 overflow-y-auto z-[200] border border-border">
              <div className="px-4 py-2 bg-muted">
                <span className="text-[16px] font-medium text-muted-foreground uppercase tracking-wide">Cidades</span>
              </div>
              {filteredOriginCities.map(city => (
                <button key={city} className="w-full text-left px-4 py-2.5 text-sm text-foreground hover:bg-muted transition-colors" onClick={() => { setOrigin(city); setShowOriginDropdown(false); }}>
                  {city}
                </button>
              ))}
            </div>
          )}
        </div>

        {/* Cidade de Destino */}
        <div className="bg-white/90 flex-1 min-w-[200px] rounded-2xl px-[16px] py-[8px] relative" ref={flightDestRef} style={{ zIndex: showFlightDestDropdown ? 200 : 1 }}>
          <p className="text-[12px] font-medium leading-[16px] tracking-[0.04px] text-[#1c2024] mb-[4px]">
            Cidade de Destino
          </p>
          <input
            type="text"
            placeholder="Digite a cidade de destino"
            className="w-full bg-transparent text-[12px] leading-[16px] tracking-[0.04px] text-[#60646c] border-0 focus:outline-none focus:ring-0 px-[4px] h-[24px]"
            value={flightDestination}
            onChange={(e) => {
              setFlightDestination(e.target.value);
              if (e.target.value.trim()) {
                setFilteredFlightDestCities(filterCities(e.target.value));
                setShowFlightDestDropdown(true);
              } else {
                setShowFlightDestDropdown(false);
              }
            }}
          />
          {showFlightDestDropdown && filteredFlightDestCities.length > 0 && (
            <div className="absolute left-0 right-0 top-full mt-1 bg-white rounded-lg shadow-lg max-h-60 overflow-y-auto z-[200] border border-border">
              <div className="px-4 py-2 bg-muted">
                <span className="text-[16px] font-medium text-muted-foreground uppercase tracking-wide">Cidades</span>
              </div>
              {filteredFlightDestCities.map(city => (
                <button key={city} className="w-full text-left px-4 py-2.5 text-sm text-foreground hover:bg-muted transition-colors" onClick={() => { setFlightDestination(city); setShowFlightDestDropdown(false); }}>
                  {city}
                </button>
              ))}
            </div>
          )}
        </div>

        {/* Ida */}
        <div className="bg-white/90 flex flex-col rounded-2xl px-[16px] py-[8px] w-[140px] relative" ref={departRef} style={{ zIndex: showDepartPicker ? 200 : 1 }}>
          <p className="text-[12px] font-medium leading-[16px] tracking-[0.04px] text-[#1c2024] mb-[4px]">Ida</p>
          <button className="relative h-[24px] w-full cursor-pointer" onClick={() => setShowDepartPicker(!showDepartPicker)} ref={departButtonRef}>
            <div className="absolute inset-0 flex items-center gap-[4px] px-[4px]">
              <div className="relative shrink-0 size-[14px]">
                <div className="absolute inset-[6.67%]">
                  <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12.1333 12.1333">
                    <path clipRule="evenodd" d={svgPaths.p3adbe580} fill="#60646C" fillRule="evenodd" />
                  </svg>
                </div>
              </div>
              <span className="text-[12px] leading-[16px] tracking-[0.04px] text-[#60646c]">
                {departDate ? formatDate(departDate.toISOString()) : "Selecionar"}
              </span>
            </div>
          </button>
          {showDepartPicker && (
            <DatePicker value={departDate} onChange={(date) => setDepartDate(date)} show={showDepartPicker} setShow={setShowDepartPicker} triggerRect={departButtonRef.current?.getBoundingClientRect() || null} />
          )}
        </div>

        {/* Volta */}
        {tripType === "Ida e Volta" && (
          <div className="bg-white/90 flex flex-col rounded-2xl px-[16px] py-[8px] w-[140px] relative" ref={returnRef} style={{ zIndex: showReturnPicker ? 200 : 1 }}>
            <p className="text-[12px] font-medium leading-[16px] tracking-[0.04px] text-[#1c2024] mb-[4px]">Volta</p>
            <button className="relative h-[24px] w-full cursor-pointer" onClick={() => setShowReturnPicker(!showReturnPicker)} ref={returnButtonRef}>
              <div className="absolute inset-0 flex items-center gap-[4px] px-[4px]">
                <div className="relative shrink-0 size-[14px]">
                  <div className="absolute inset-[6.67%]">
                    <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12.1333 12.1333">
                      <path clipRule="evenodd" d={svgPaths.p3adbe580} fill="#60646C" fillRule="evenodd" />
                    </svg>
                  </div>
                </div>
                <span className="text-[12px] leading-[16px] tracking-[0.04px] text-[#60646c]">
                  {returnDate ? formatDate(returnDate.toISOString()) : "Selecionar"}
                </span>
              </div>
            </button>
            {showReturnPicker && (
              <DatePicker value={returnDate} onChange={(date) => setReturnDate(date)} show={showReturnPicker} setShow={setShowReturnPicker} triggerRect={returnButtonRef.current?.getBoundingClientRect() || null} />
            )}
          </div>
        )}

        {/* Botão Buscar */}
        <button onClick={handleFlightSearch} className="bg-[#12a594] flex gap-3 h-10 items-center justify-center px-4 rounded-full hover:bg-[#0f8c7d] transition-colors self-end cursor-pointer whitespace-nowrap shrink-0">
          <span className="font-medium text-white text-[16px] leading-[24px]">Buscar voos</span>
        </button>
      </div>
    </div>
  );

  return (
    <div className="flex flex-col gap-4 w-full max-w-[1440px] mx-auto px-8">
      {segmentedControl}
      {activeTab === "Hospedagem" && hotelForm}
      {activeTab === "Passagem aérea" && flightForm}
      {activeTab === "Aluguel de carro" && (
        <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 w-full">
          <p className="text-[14px] text-[#60646c]">Em breve: busca de aluguel de carro.</p>
        </div>
      )}
    </div>
  );
}
