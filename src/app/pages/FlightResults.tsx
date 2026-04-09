import { useState, useRef, type ReactNode } from "react";
import { useSearchParams, useNavigate } from "react-router";
import { Footer } from "../components/Footer";
import { BrandLogo } from "../components/Header";
import {
  PlaneTakeoff,
  PlaneLanding,
  ChevronLeft,
  ChevronRight,
  ChevronDown,
  Backpack,
  Briefcase,
  Luggage,
  ArrowRight,
  CalendarDays,
  UserRound,
  Pencil,
  X,
  Clock,
  Check,
  MapPin,
  BedDouble,
} from "lucide-react";
import svgPaths from "../../imports/svg-prp94fobv4";
import { format } from "date-fns";
import { pt } from "date-fns/locale";
import type { DateRange } from "react-day-picker";
import { Popover, PopoverContent, PopoverTrigger } from "../components/ui/popover";
import { Calendar } from "../components/ui/calendar";

// ── Destination data ──────────────────────────────────────────────────────────

interface DestHotel { name: string; location: string; }

const DEST_HOTELS: DestHotel[] = [
  { name: "Resort Vista Mar", location: "Bali, Indonésia" },
  { name: "Hotel Boutique Premium", location: "Paris, França" },
  { name: "Grand Copacabana Hotel", location: "Rio de Janeiro, RJ" },
  { name: "Los Angeles Bay Hotel", location: "Los Angeles, EUA" },
  { name: "Hotel Atlântico Business", location: "Rio de Janeiro, RJ" },
  { name: "Riviera Palace Hotel", location: "Mônaco" },
  { name: "Grand Hotel Central", location: "Nova York, EUA" },
  { name: "Casa Heritage", location: "Lisboa, Portugal" },
];

const DEST_CITIES = [
  "São Paulo, SP", "Rio de Janeiro, RJ", "Brasília, DF", "Salvador, BA",
  "Fortaleza, CE", "Belo Horizonte, MG", "Manaus, AM", "Curitiba, PR",
  "Recife, PE", "Goiânia, GO", "Porto Alegre, RS", "Belém, PA",
  "Guarulhos, SP", "Campinas, SP", "Natal, RN", "João Pessoa, PB",
  "Florianópolis, SC", "Niterói, RJ", "Santos, SP", "Maceió, AL",
];

const normalizeStr = (t: string) =>
  t.normalize("NFD").replace(/[\u0300-\u036f]/g, "").toLowerCase();

function getFlightSuggestions(value: string) {
  const q = normalizeStr(value);
  return {
    hotels: DEST_HOTELS.filter(h => normalizeStr(h.name).includes(q) || normalizeStr(h.location).includes(q)).slice(0, 4),
    cities: DEST_CITIES.filter(c => normalizeStr(c).includes(q)).slice(0, 6),
  };
}

// ── CityPopover — shared between origin and destination ───────────────────────

function CityPopover({
  value,
  icon,
  placeholder,
  citiesOnly = false,
  onChange,
}: {
  value: string;
  icon: ReactNode;
  placeholder: string;
  citiesOnly?: boolean;
  onChange?: (v: string) => void;
}) {
  const [open, setOpen] = useState(false);
  const [query, setQuery] = useState(value);
  const [suggestions, setSuggestions] = useState({ hotels: [] as DestHotel[], cities: [] as string[] });
  const inputRef = useRef<HTMLInputElement>(null);

  function handleOpenChange(next: boolean) {
    setOpen(next);
    if (next) {
      setQuery(value);
      const raw = value.trim() ? getFlightSuggestions(value) : { hotels: [], cities: [] };
      setSuggestions(citiesOnly ? { hotels: [], cities: raw.cities } : raw);
      setTimeout(() => inputRef.current?.focus(), 50);
    }
  }

  function handleInput(v: string) {
    setQuery(v);
    const raw = v.trim() ? getFlightSuggestions(v) : { hotels: [], cities: [] };
    setSuggestions(citiesOnly ? { hotels: [], cities: raw.cities } : raw);
  }

  function handleSelect(v: string) {
    setOpen(false);
    onChange?.(v);
  }

  const hasSuggestions = suggestions.hotels.length > 0 || suggestions.cities.length > 0;

  return (
    <Popover open={open} onOpenChange={handleOpenChange}>
      <PopoverTrigger asChild>
        <button className="flex gap-[8px] h-[32px] items-center justify-center px-[12px] rounded-[4px] hover:bg-muted transition-colors cursor-pointer">
          {icon}
          <span className="text-[14px] leading-[20px] text-[#60646c] whitespace-nowrap">{value || placeholder}</span>
        </button>
      </PopoverTrigger>
      <PopoverContent
        className="w-[320px] p-0 bg-white text-foreground border-border rounded-2xl shadow-[0px_4px_16px_0px_rgba(0,0,0,0.1),0px_3px_12px_0px_rgba(0,0,0,0.1),0px_2px_3px_0px_rgba(0,0,51,0.06)] overflow-hidden"
        align="start"
        sideOffset={24}
      >
        <div className="flex items-center gap-2 px-4 py-3 border-b border-[#d9d9e0]">
          <MapPin size={16} color="#60646c" strokeWidth={1.5} className="shrink-0" />
          <input
            ref={inputRef}
            type="text"
            value={query}
            onChange={e => handleInput(e.target.value)}
            placeholder={placeholder}
            className="flex-1 bg-transparent text-[14px] text-[#1c2024] placeholder:text-[#60646c] border-0 outline-none focus:ring-0"
          />
        </div>
        {hasSuggestions && (
          <div className="max-h-72 overflow-y-auto">
            {suggestions.hotels.length > 0 && (
              <>
                <div className="px-4 py-2 bg-[rgba(0,0,51,0.03)]">
                  <span className="text-[11px] font-medium text-[#60646c] uppercase tracking-[0.04px]">Hotéis</span>
                </div>
                {suggestions.hotels.map(h => (
                  <button key={h.name} className="w-full text-left px-4 py-2.5 hover:bg-[rgba(0,0,51,0.04)] transition-colors flex items-center gap-3" onClick={() => handleSelect(h.name)}>
                    <div className="size-8 rounded-lg bg-[rgba(3,134,123,0.08)] flex items-center justify-center shrink-0">
                      <BedDouble size={14} color="#03867b" strokeWidth={1.5} />
                    </div>
                    <div className="flex flex-col gap-0.5 min-w-0">
                      <span className="text-[14px] text-[#1c2024] leading-[20px] truncate">{h.name}</span>
                      <span className="text-[12px] text-[#60646c] leading-[16px] truncate">{h.location}</span>
                    </div>
                  </button>
                ))}
              </>
            )}
            {suggestions.cities.length > 0 && (
              <>
                <div className="px-4 py-2 bg-[rgba(0,0,51,0.03)]">
                  <span className="text-[11px] font-medium text-[#60646c] uppercase tracking-[0.04px]">Cidades</span>
                </div>
                {suggestions.cities.map(city => (
                  <button key={city} className="w-full text-left px-4 py-2.5 hover:bg-[rgba(0,0,51,0.04)] transition-colors flex items-center gap-3" onClick={() => handleSelect(city)}>
                    <div className="size-8 rounded-lg bg-[rgba(0,0,51,0.06)] flex items-center justify-center shrink-0">
                      <MapPin size={14} color="#60646c" strokeWidth={1.5} />
                    </div>
                    <span className="text-[14px] text-[#1c2024] leading-[20px]">{city}</span>
                  </button>
                ))}
              </>
            )}
          </div>
        )}
        {!hasSuggestions && query.trim() && (
          <div className="px-4 py-6 text-center">
            <p className="text-[14px] text-[#60646c]">Nenhum resultado para "{query}"</p>
          </div>
        )}
        {!query.trim() && (
          <div className="px-4 py-4">
            <p className="text-[12px] text-[#60646c] leading-[16px]">Digite o nome de uma cidade para buscar</p>
          </div>
        )}
      </PopoverContent>
    </Popover>
  );
}

// ── Types ─────────────────────────────────────────────────────────────────────

export interface FlightResult {
  id: string;
  airline: string;
  airlineCode: string;
  flightNumber: string;
  airlineColor: string;
  originCode: string;
  originCity: string;
  departureTime: string;
  destinationCode: string;
  destinationCity: string;
  arrivalTime: string;
  durationHours: number;
  durationMins: number;
  stops: number;
  hasCabinBag: boolean;
  hasCheckedBag: boolean;
  hasLargeBag: boolean;
  totalPrice: number;
  taxes: number;
  departureDate?: string;
  arrivalDate?: string;
  tags?: string[];
}

// ── Mock Data ─────────────────────────────────────────────────────────────────

export const MOCK_FLIGHTS_IDA: FlightResult[] = [
  {
    id: "1",
    airline: "Emirates",
    airlineCode: "EK",
    flightNumber: "EK 204",
    airlineColor: "#C60C30",
    originCode: "GRU",
    originCity: "São Paulo",
    departureTime: "08:30",
    destinationCode: "BSB",
    destinationCity: "Brasília",
    arrivalTime: "10:30",
    durationHours: 2,
    durationMins: 0,
    stops: 0,
    hasCabinBag: true,
    hasCheckedBag: true,
    hasLargeBag: false,
    totalPrice: 20643,
    taxes: 1000,
  },
  {
    id: "2",
    airline: "Azul",
    airlineCode: "AD",
    flightNumber: "AD 5502",
    airlineColor: "#1A4BA0",
    originCode: "GRU",
    originCity: "São Paulo",
    departureTime: "11:15",
    destinationCode: "BSB",
    destinationCity: "Brasília",
    arrivalTime: "13:05",
    durationHours: 1,
    durationMins: 50,
    stops: 0,
    hasCabinBag: true,
    hasCheckedBag: false,
    hasLargeBag: false,
    totalPrice: 18200,
    taxes: 850,
  },
  {
    id: "3",
    airline: "LATAM",
    airlineCode: "LA",
    flightNumber: "LA 3301",
    airlineColor: "#E31937",
    originCode: "GRU",
    originCity: "São Paulo",
    departureTime: "15:45",
    destinationCode: "BSB",
    destinationCity: "Brasília",
    arrivalTime: "17:30",
    durationHours: 1,
    durationMins: 45,
    stops: 0,
    hasCabinBag: true,
    hasCheckedBag: true,
    hasLargeBag: true,
    totalPrice: 22890,
    taxes: 1100,
  },
];

export const MOCK_FLIGHTS_VOLTA: FlightResult[] = [
  {
    id: "4",
    airline: "GOL",
    airlineCode: "G3",
    flightNumber: "G3 1420",
    airlineColor: "#F26522",
    originCode: "BSB",
    originCity: "Brasília",
    departureTime: "07:00",
    destinationCode: "GRU",
    destinationCity: "São Paulo",
    arrivalTime: "09:00",
    durationHours: 2,
    durationMins: 0,
    stops: 0,
    hasCabinBag: true,
    hasCheckedBag: false,
    hasLargeBag: false,
    totalPrice: 17500,
    taxes: 780,
  },
  {
    id: "5",
    airline: "LATAM",
    airlineCode: "LA",
    flightNumber: "LA 3408",
    airlineColor: "#E31937",
    originCode: "BSB",
    originCity: "Brasília",
    departureTime: "14:20",
    destinationCode: "GRU",
    destinationCity: "São Paulo",
    arrivalTime: "16:05",
    durationHours: 1,
    durationMins: 45,
    stops: 0,
    hasCabinBag: true,
    hasCheckedBag: true,
    hasLargeBag: false,
    totalPrice: 19800,
    taxes: 920,
  },
  {
    id: "6",
    airline: "Azul",
    airlineCode: "AD",
    flightNumber: "AD 5618",
    airlineColor: "#1A4BA0",
    originCode: "BSB",
    originCity: "Brasília",
    departureTime: "18:50",
    destinationCode: "GRU",
    destinationCity: "São Paulo",
    arrivalTime: "20:45",
    durationHours: 1,
    durationMins: 55,
    stops: 0,
    hasCabinBag: true,
    hasCheckedBag: true,
    hasLargeBag: true,
    totalPrice: 24100,
    taxes: 1150,
  },
];

// ── Date Carousel ─────────────────────────────────────────────────────────────

function generateDates(startDateStr: string, count: number): Date[] {
  const dates: Date[] = [];
  const base = startDateStr ? new Date(startDateStr + "T12:00:00") : new Date();
  base.setDate(base.getDate() - 2);
  for (let i = 0; i < count; i++) {
    const d = new Date(base);
    d.setDate(base.getDate() + i);
    dates.push(d);
  }
  return dates;
}

const DAY_SHORT = ["Dom", "Seg", "Ter", "Qua", "Qui", "Sex", "Sáb"];
const MONTH_SHORT = ["Jan", "Fev", "Mar", "Abr", "Mai", "Jun", "Jul", "Ago", "Set", "Out", "Nov", "Dez"];

// Mock prices per date index
const DATE_PRICES = ["1.500", "1.500", "1.500", "1.500", "1.500", "1.500", "1.500", "1.500"];

function DateCarousel({ startDate, selectedIndex, onSelect }: { startDate: string; selectedIndex: number; onSelect: (i: number) => void }) {
  const dates = generateDates(startDate, 7);

  const fmtLabel = (d: Date) =>
    `${DAY_SHORT[d.getDay()]}, ${d.getDate()} ${MONTH_SHORT[d.getMonth()]}`;

  return (
    <div className="bg-[#fcfcfd] flex gap-[32px] items-center p-[16px] w-full rounded-2xl shadow-[0px_4px_16px_0px_rgba(0,0,0,0.1),0px_3px_12px_0px_rgba(0,0,0,0.1),0px_2px_3px_0px_rgba(0,0,51,0.06)]">

      {/* Left arrow */}
      <div className="shrink-0">
        <button
          onClick={() => onSelect(Math.max(0, selectedIndex - 1))}
          className="border border-[rgba(0,8,48,0.27)] flex items-center justify-center overflow-clip rounded-full size-[24px] hover:bg-[rgba(0,0,0,0.04)] transition-colors"
        >
          <ChevronLeft size={14} color="#1c2024" strokeWidth={2} />
        </button>
      </div>

      {/* Date items */}
      <div className="flex flex-1 items-end justify-between min-w-0">
        {dates.map((date, i) => {
          const isSelected = i === selectedIndex;
          // Hide divider before/after selected item
          const showDividerAfter = i < dates.length - 1 && i !== selectedIndex && (i + 1) !== selectedIndex;

          return (
            <div key={i} className="flex items-end self-stretch">
              {/* Date cell */}
              <button
                onClick={() => onSelect(i)}
                className={`flex flex-col items-center p-[8px] w-[120px] cursor-pointer transition-all ${
                  isSelected
                    ? "bg-[rgba(255,255,255,0.8)] self-stretch rounded-lg shadow-[0px_4px_16px_0px_rgba(0,0,0,0.1),0px_3px_12px_0px_rgba(0,0,0,0.1),0px_2px_3px_0px_rgba(0,0,51,0.06)]"
                    : "hover:bg-[rgba(255,255,255,0.4)]"
                }`}
              >
                <p className="font-medium text-[16px] leading-[24px] text-[#60646c] whitespace-nowrap">
                  {fmtLabel(date)}
                </p>
                <p className="text-[12px] leading-[16px] tracking-[0.04px] text-[#60646c] whitespace-nowrap">
                  {DATE_PRICES[i]} Tribz
                </p>
              </button>

              {/* Vertical divider */}
              {showDividerAfter && (
                <div className="flex h-[44px] items-center justify-center self-end shrink-0 w-0 mx-0">
                  <div className="flex-none rotate-90">
                    <svg width="44" height="1" viewBox="0 0 44 1" fill="none">
                      <line x1="0" y1="0.5" x2="44" y2="0.5" stroke="#D9D9D9" />
                    </svg>
                  </div>
                </div>
              )}
            </div>
          );
        })}
      </div>

      {/* Right arrow */}
      <div className="shrink-0">
        <button
          onClick={() => onSelect(Math.min(dates.length - 1, selectedIndex + 1))}
          className="border border-[rgba(0,8,48,0.27)] flex items-center justify-center overflow-clip rounded-full size-[24px] hover:bg-[rgba(0,0,0,0.04)] transition-colors"
        >
          <ChevronRight size={14} color="#1c2024" strokeWidth={2} />
        </button>
      </div>
    </div>
  );
}

// ── Flight Result Row ─────────────────────────────────────────────────────────

function FlightResultRow({
  flight,
  selected,
  onSelect,
  onDetails,
  onAddFlight,
}: {
  flight: FlightResult;
  selected: boolean;
  onSelect: () => void;
  onDetails: () => void;
  onAddFlight: () => void;
}) {
  const durationLabel = `${flight.durationHours}h${flight.durationMins > 0 ? String(flight.durationMins).padStart(2, "0") : "00"}`;
  const stopsLabel = flight.stops === 0 ? "Direto" : flight.stops === 1 ? "1 parada" : `${flight.stops} paradas`;
  const tags = flight.tags ?? ["Voo mais curto", "Cancelamento grátis", "Pague em 12x sem juros"];
  const depDate = flight.departureDate ?? "25 Dez, Sex";
  const arrDate = flight.arrivalDate ?? "25 Dez, Sex";

  return (
    <div
      onClick={onSelect}
      className="bg-[#e8e8ec] flex flex-col items-center rounded-2xl shadow-[0px_4px_16px_0px_rgba(0,0,0,0.1),0px_3px_12px_0px_rgba(0,0,0,0.1),0px_2px_3px_0px_rgba(0,0,51,0.06)] w-full cursor-pointer"
    >
      {/* ── Row 1: main flight info ─────────────────────────────────── */}
      <div className="bg-[#fcfcfd] border-b border-dashed border-[#d9d9e0] flex items-center justify-between px-[16px] py-[8px] w-full rounded-t-2xl">

        {/* Left: Radio + Avatar + Airline */}
        <div className="flex gap-[16px] items-center shrink-0">
          {/* Radio */}
          <div className="flex h-[16px] items-center shrink-0">
            <div className={`size-[14px] rounded-full border-2 flex items-center justify-center transition-colors ${selected ? "border-[#12a594]" : "border-[rgba(0,0,45,0.27)]"}`}>
              {selected && <div className="size-[6px] rounded-full bg-[#12a594]" />}
            </div>
          </div>
          {/* Avatar + info */}
          <div className="flex gap-[8px] items-center shrink-0">
            <div
              className="size-[40px] rounded-full flex items-center justify-center text-white text-[12px] font-bold shrink-0"
              style={{ backgroundColor: flight.airlineColor }}
            >
              {flight.airlineCode}
            </div>
            <div className="flex flex-col gap-[4px] items-start w-[121px]">
              <p className="text-[14px] font-medium leading-[20px] text-[#1c2024] whitespace-nowrap">{flight.airline}</p>
              <p className="text-[12px] font-medium leading-[16px] tracking-[0.04px] text-[#60646c] whitespace-nowrap">{flight.flightNumber}</p>
            </div>
          </div>
        </div>

        {/* Center: Origin — line — Destination */}
        <div className="flex gap-[32px] items-center shrink-0">

          {/* Origin */}
          <div className="flex flex-col gap-px items-end shrink-0">
            <div className="flex items-center">
              <p className="text-[14px] font-medium leading-[20px] text-[#1c2024] whitespace-nowrap">{flight.originCode}</p>
              <p className="text-[18px] font-medium leading-[26px] tracking-[-0.04px] text-[#60646c] whitespace-nowrap ml-[2px]">{flight.departureTime}</p>
            </div>
            <p className="text-[12px] font-light leading-[16px] tracking-[0.04px] text-[#60646c] text-right whitespace-nowrap">{depDate}</p>
          </div>

          {/* Flight path */}
          <div className="flex gap-[8px] items-center w-[180px] shrink-0">
            {/* Takeoff icon */}
            <div className="size-[24px] flex items-center justify-center shrink-0">
              <PlaneTakeoff size={16} color="#60646c" strokeWidth={1.5} />
            </div>
            {/* Line + duration/stops */}
            <div className="flex flex-1 flex-col items-center justify-center min-w-0">
              {/* Dashed line */}
              <div className="w-full h-[1px] border-t border-dashed border-[rgba(0,0,45,0.25)] relative mb-[2px]">
                {flight.stops > 0 && (
                  <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[6px] h-[6px] rounded-full bg-[#f76b15] border border-white" />
                )}
              </div>
              <div className="flex flex-col items-center">
                <p className="text-[12px] font-light leading-[16px] tracking-[0.04px] text-[#60646c] whitespace-nowrap">{durationLabel}</p>
                <p className="text-[12px] font-medium leading-[16px] tracking-[0.04px] text-[#60646c] whitespace-nowrap">{stopsLabel}</p>
              </div>
            </div>
            {/* Landing icon */}
            <div className="size-[24px] flex items-center justify-center shrink-0">
              <PlaneLanding size={16} color="#60646c" strokeWidth={1.5} />
            </div>
          </div>

          {/* Destination */}
          <div className="flex flex-col gap-px items-start shrink-0">
            <div className="flex items-center">
              <p className="text-[18px] font-medium leading-[26px] tracking-[-0.04px] text-[#60646c] whitespace-nowrap">{flight.arrivalTime}</p>
              <p className="text-[14px] font-medium leading-[20px] text-[#1c2024] whitespace-nowrap ml-[2px]">{flight.destinationCode}</p>
            </div>
            <p className="text-[12px] font-light leading-[16px] tracking-[0.04px] text-[#60646c] whitespace-nowrap">{arrDate}</p>
          </div>
        </div>

        {/* Baggage icons */}
        <div className="flex gap-[4px] items-center shrink-0 w-[80px]">
          {/* Backpack — cabin bag — filled accent when included */}
          <div className={`size-[24px] flex items-center justify-center rounded-full ${flight.hasCabinBag ? "bg-[#12a594]" : ""}`}>
            <Backpack size={16} color={flight.hasCabinBag ? "white" : "#c8c8d0"} strokeWidth={1.5} />
          </div>
          <div className="size-[24px] flex items-center justify-center">
            <Briefcase size={16} color={flight.hasCheckedBag ? "#60646c" : "#c8c8d0"} strokeWidth={1.5} />
          </div>
          <div className="size-[24px] flex items-center justify-center">
            <Luggage size={16} color={flight.hasLargeBag ? "#60646c" : "#c8c8d0"} strokeWidth={1.5} />
          </div>
        </div>

        {/* Price */}
        <div className="flex flex-col items-end shrink-0 w-[150px]">
          <div className="flex gap-[4px] items-center">
            <p className="text-[12px] font-light leading-[16px] tracking-[0.04px] text-[#60646c] whitespace-nowrap">Valor Total:</p>
            <p className="text-[14px] font-medium leading-[20px] text-[#1c2024] whitespace-nowrap">{flight.totalPrice.toLocaleString("pt-BR")} Tribz</p>
          </div>
          <div className="flex gap-[4px] items-center">
            <p className="text-[12px] font-light leading-[16px] tracking-[0.04px] text-[#60646c] whitespace-nowrap">Taxas</p>
            <p className="text-[14px] font-medium leading-[20px] text-[#1c2024] whitespace-nowrap">{flight.taxes.toLocaleString("pt-BR")} Tribz</p>
          </div>
        </div>
      </div>

      {/* ── Row 2: badges + action buttons ─────────────────────────── */}
      <div className="flex items-center justify-between px-[16px] py-[8px] w-full">

        {/* Badges */}
        <div className="flex gap-[16px] items-center">
          {tags[0] && (
            <div className="bg-[rgba(0,164,51,0.1)] flex gap-[6px] items-center justify-center overflow-clip px-[8px] py-[4px] rounded-lg">
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none" className="shrink-0">
                <circle cx="8" cy="8" r="6.5" stroke="rgba(0,113,63,0.87)" strokeWidth="1.2" />
                <path d="M8 5v3.5l2 1.5" stroke="rgba(0,113,63,0.87)" strokeWidth="1.2" strokeLinecap="round" />
              </svg>
              <p className="text-[12px] font-medium leading-[16px] tracking-[0.04px] text-[rgba(0,113,63,0.87)] whitespace-nowrap">{tags[0]}</p>
            </div>
          )}
          {tags[1] && (
            <div className="bg-[rgba(0,0,51,0.06)] flex gap-[6px] items-center justify-center overflow-clip px-[8px] py-[4px] rounded-lg">
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none" className="shrink-0">
                <path d="M3 8.5L6.5 12L13 5" stroke="rgba(0,7,20,0.62)" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
              <p className="text-[12px] font-medium leading-[16px] tracking-[0.04px] text-[rgba(0,7,20,0.62)] whitespace-nowrap">{tags[1]}</p>
            </div>
          )}
          {tags[2] && (
            <div className="bg-[rgba(0,0,51,0.06)] flex gap-[6px] items-center justify-center overflow-clip px-[8px] py-[4px] rounded-lg">
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none" className="shrink-0">
                <rect x="1.5" y="3.5" width="13" height="9" rx="1.5" stroke="rgba(0,7,20,0.62)" strokeWidth="1.2" />
                <path d="M1.5 7h13" stroke="rgba(0,7,20,0.62)" strokeWidth="1.2" />
                <path d="M5 3.5V2.5" stroke="rgba(0,7,20,0.62)" strokeWidth="1.2" strokeLinecap="round" />
                <path d="M11 3.5V2.5" stroke="rgba(0,7,20,0.62)" strokeWidth="1.2" strokeLinecap="round" />
              </svg>
              <p className="text-[12px] font-medium leading-[16px] tracking-[0.04px] text-[rgba(0,7,20,0.62)] whitespace-nowrap">{tags[2]}</p>
            </div>
          )}
        </div>

        {/* Action buttons */}
        <div className="flex gap-[16px] items-center">
          <button
            onClick={(e) => { e.stopPropagation(); onDetails(); }}
            className="border border-[rgba(0,52,220,0.45)] flex gap-[4px] h-[24px] items-center justify-center px-[8px] rounded-full w-[120px] hover:bg-[rgba(0,52,220,0.04)] transition-colors"
          >
            <p className="text-[12px] font-medium leading-[16px] tracking-[0.04px] text-[rgba(0,43,183,0.77)] whitespace-nowrap">Detalhes do voo</p>
          </button>
          <button
            onClick={(e) => { e.stopPropagation(); onAddFlight(); }}
            className="bg-[#12a594] flex gap-[4px] h-[24px] items-center justify-center px-[8px] rounded-full w-[120px] hover:bg-[#0f8c7d] transition-colors"
          >
            <p className="text-[12px] font-medium leading-[16px] tracking-[0.04px] text-white whitespace-nowrap">Adicionar voo</p>
          </button>
        </div>
      </div>
    </div>
  );
}

// ── Filter Sidebar ────────────────────────────────────────────────────────────

interface FilterState {
  stops: string[];
  baggage: string[];
  airlines: string[];
  classes: string[];
  minPrice: number;
  maxPrice: number;
  minDuration: number;
  maxDuration: number;
  minTime: number;
  maxTime: number;
}

function FigmaCheckbox({ label, checked, onChange }: { label: string; checked: boolean; onChange: () => void }) {
  return (
    <div className="flex gap-[8px] items-start w-full cursor-pointer" onClick={onChange}>
      <div className="flex h-[20px] items-center shrink-0">
        <div className={`size-[16px] flex items-center justify-center shrink-0 ${
          checked
            ? "bg-[#12a594]"
            : "bg-[#e8e8ec] border border-[rgba(0,6,46,0.2)]"
        }`}>
          {checked && (
            <svg width="9" height="7" viewBox="0 0 9 7" fill="none">
              <path d="M1 3.5L3.5 6L8 1" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          )}
        </div>
      </div>
      <p className="flex-1 text-[14px] leading-[20px] text-[#1c2024]">{label}</p>
    </div>
  );
}

function DualSlider({
  min, max, valueMin, valueMax, unit,
  onChangeMin, onChangeMax,
}: {
  min: number; max: number; valueMin: number; valueMax: number; unit: string;
  onChangeMin: (v: number) => void; onChangeMax: (v: number) => void;
}) {
  const pctMin = ((valueMin - min) / (max - min)) * 100;
  const pctMax = ((valueMax - min) / (max - min)) * 100;
  const fmt = (v: number) => unit === "Tribz" ? `${v.toLocaleString("pt-BR")} Tribz` : `${v}h`;

  return (
    <div className="flex flex-col gap-[8px] w-full">
      {/* Track */}
      <div className="relative h-[6px] w-full">
        <div className="absolute inset-0 bg-[rgba(0,0,51,0.06)] border border-[rgba(0,9,50,0.12)]" />
        <div
          className="absolute top-0 h-full bg-[#12a594] border border-[rgba(0,9,50,0.12)]"
          style={{ left: `${pctMin}%`, right: `${100 - pctMax}%` }}
        />
        {/* Min thumb */}
        <input
          type="range" min={min} max={max} value={valueMin}
          onChange={(e) => { const v = Number(e.target.value); if (v < valueMax) onChangeMin(v); }}
          className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
          style={{ zIndex: valueMin > max - 10 ? 5 : 3 }}
        />
        {/* Max thumb */}
        <input
          type="range" min={min} max={max} value={valueMax}
          onChange={(e) => { const v = Number(e.target.value); if (v > valueMin) onChangeMax(v); }}
          className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
          style={{ zIndex: 4 }}
        />
        {/* Thumb visuals */}
        <div className="absolute top-1/2 -translate-y-1/2 size-[10px] bg-white border border-[#cdced6] pointer-events-none" style={{ left: `calc(${pctMin}% - 5px)` }} />
        <div className="absolute top-1/2 -translate-y-1/2 size-[10px] bg-white border border-[#cdced6] pointer-events-none" style={{ left: `calc(${pctMax}% - 5px)` }} />
      </div>
      {/* Min / Max inputs */}
      <div className="flex gap-[24px] items-center w-full">
        <div className="flex flex-1 flex-col gap-[4px] min-w-0">
          <p className="text-[12px] font-medium leading-[16px] tracking-[0.04px] text-[#1c2024]">Mínimo</p>
          <div className="bg-[rgba(255,255,255,0.9)] border border-[#d9d9e0] flex h-[24px] items-center px-[4px] w-full">
            <p className="text-[12px] leading-[16px] tracking-[0.04px] text-[#60646c] truncate">{fmt(valueMin)}</p>
          </div>
        </div>
        <div className="flex flex-1 flex-col gap-[4px] min-w-0">
          <p className="text-[12px] font-medium leading-[16px] tracking-[0.04px] text-[#1c2024]">Máximo</p>
          <div className="bg-[rgba(255,255,255,0.9)] border border-[#d9d9e0] flex h-[24px] items-center px-[4px] w-full">
            <p className="text-[12px] leading-[16px] tracking-[0.04px] text-[#60646c] truncate">{fmt(valueMax)}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function FilterGroup({ title, children }: { title: string; children: ReactNode }) {
  const [open, setOpen] = useState(true);
  return (
    <div className="flex flex-col gap-[16px] items-start w-full">
      <button
        onClick={() => setOpen(!open)}
        className="flex gap-[12px] h-[40px] items-center overflow-hidden w-full"
      >
        <span className="flex-1 text-[16px] leading-[24px] text-[#1c2024] text-left truncate">{title}</span>
        <div className="relative shrink-0 size-[18px]">
          <ChevronDown
            size={18}
            color="#1c2024"
            className={`transition-transform duration-200 ${open ? "" : "-rotate-90"}`}
          />
        </div>
      </button>
      {open && children}
    </div>
  );
}

function FilterSidebar({ filters, onChange }: { filters: FilterState; onChange: (f: FilterState) => void }) {
  const toggleStop = (val: string) => {
    if (val === "Todas as paradas") { onChange({ ...filters, stops: [] }); return; }
    const cur = filters.stops;
    onChange({ ...filters, stops: cur.includes(val) ? cur.filter(v => v !== val) : [...cur, val] });
  };
  const toggleBaggage = (val: string) => {
    if (val === "Todas as opções") { onChange({ ...filters, baggage: [] }); return; }
    const cur = filters.baggage;
    onChange({ ...filters, baggage: cur.includes(val) ? cur.filter(v => v !== val) : [...cur, val] });
  };
  const toggleAirline = (val: string) => {
    const cur = filters.airlines;
    onChange({ ...filters, airlines: cur.includes(val) ? cur.filter(v => v !== val) : [...cur, val] });
  };
  const toggleClass = (val: string) => {
    const cur = filters.classes;
    onChange({ ...filters, classes: cur.includes(val) ? cur.filter(v => v !== val) : [...cur, val] });
  };

  const allStops = filters.stops.length === 0;
  const allBaggage = filters.baggage.length === 0;

  return (
    <div className="flex flex-col gap-[32px] items-start w-full">

      {/* Paradas */}
      <FilterGroup title="Paradas">
        <div className="flex flex-col gap-[8px] w-full">
          <FigmaCheckbox label="Todas as paradas" checked={allStops} onChange={() => toggleStop("Todas as paradas")} />
          {["Direto", "1 parada", "2 ou mais paradas"].map(opt => (
            <FigmaCheckbox key={opt} label={opt} checked={filters.stops.includes(opt)} onChange={() => toggleStop(opt)} />
          ))}
        </div>
      </FilterGroup>

      {/* Bagagem */}
      <FilterGroup title="Bagagem">
        <div className="flex flex-col gap-[8px] w-full">
          <FigmaCheckbox label="Todas as opções" checked={allBaggage} onChange={() => toggleBaggage("Todas as opções")} />
          {["Bagagem de mão", "Bagagem para despachar"].map(opt => (
            <FigmaCheckbox key={opt} label={opt} checked={filters.baggage.includes(opt)} onChange={() => toggleBaggage(opt)} />
          ))}
        </div>
      </FilterGroup>

      {/* Preço */}
      <FilterGroup title="Preço">
        <DualSlider
          min={0} max={50000}
          valueMin={filters.minPrice} valueMax={filters.maxPrice}
          unit="Tribz"
          onChangeMin={v => onChange({ ...filters, minPrice: v })}
          onChangeMax={v => onChange({ ...filters, maxPrice: v })}
        />
      </FilterGroup>

      {/* Companhias */}
      <FilterGroup title="Companhias">
        <div className="flex flex-col gap-[8px] w-full">
          {["Emirates Airlines", "Azul Linhas Aéreas", "Latam Airlines", "Gol Linhas Aéreas"].map(opt => (
            <FigmaCheckbox key={opt} label={opt} checked={filters.airlines.includes(opt)} onChange={() => toggleAirline(opt)} />
          ))}
        </div>
      </FilterGroup>

      {/* Classe */}
      <FilterGroup title="Classe">
        <div className="flex flex-col gap-[8px] w-full">
          {["Econômica", "Executiva", "Primeira Classe", "Premium"].map(opt => (
            <FigmaCheckbox key={opt} label={opt} checked={filters.classes.includes(opt)} onChange={() => toggleClass(opt)} />
          ))}
        </div>
      </FilterGroup>

      {/* Duração */}
      <FilterGroup title="Duração">
        <DualSlider
          min={0} max={24}
          valueMin={filters.minDuration} valueMax={filters.maxDuration}
          unit="h"
          onChangeMin={v => onChange({ ...filters, minDuration: v })}
          onChangeMax={v => onChange({ ...filters, maxDuration: v })}
        />
      </FilterGroup>

      {/* Horário */}
      <FilterGroup title="Horário">
        <DualSlider
          min={0} max={24}
          valueMin={filters.minTime} valueMax={filters.maxTime}
          unit="h"
          onChangeMin={v => onChange({ ...filters, minTime: v })}
          onChangeMax={v => onChange({ ...filters, maxTime: v })}
        />
      </FilterGroup>
    </div>
  );
}

// ── Flight Details Modal ──────────────────────────────────────────────────────

function fmt12h(time: string): string {
  if (!time) return "";
  const [h, m] = time.split(":").map(Number);
  const period = h >= 12 ? "pm" : "am";
  const h12 = h % 12 === 0 ? 12 : h % 12;
  return `${String(h12).padStart(2, "0")}:${String(m).padStart(2, "0")} ${period}`;
}

function FlightDetailsModal({
  flight,
  flightType,
  onClose,
}: {
  flight: FlightResult;
  flightType: "Ida" | "Volta";
  onClose: () => void;
}) {
  const durationLabel = `${flight.durationHours}h${String(flight.durationMins).padStart(2, "0")}`;
  const depDate = flight.departureDate ?? "Ter, 20 Dez";
  const arrDate = flight.arrivalDate ?? "Ter, 20 Dez";

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center"
      onClick={onClose}
    >
      {/* Backdrop */}
      <div className="absolute inset-0 bg-[rgba(0,0,0,0.5)]" />

      {/* Modal container — 570px, p-16, gap-16, rounded-2xl */}
      <div
        className="relative bg-white rounded-2xl flex flex-col gap-[16px] p-[16px] w-[570px] max-h-[90vh] overflow-y-auto shadow-[0px_16px_64px_0px_rgba(0,0,0,0.24)]"
        onClick={(e) => e.stopPropagation()}
      >

        {/* ── Flight Details Header: X button aligned right ── */}
        <div className="flex items-center justify-end w-full">
          <button
            onClick={onClose}
            className="flex items-center justify-center overflow-clip shrink-0 size-[40px] hover:bg-[rgba(0,0,0,0.04)] rounded-lg transition-colors"
          >
            <X size={18} color="#1c2024" strokeWidth={2} />
          </button>
        </div>

        {/* ── Flight Information Container: title + route ── */}
        <div className="flex flex-col gap-[4px] items-start shrink-0">
          <p className="text-[24px] font-medium leading-[30px] tracking-[-0.1px] text-[#1c2024] whitespace-nowrap">
            Detalhes do Voo de {flightType}
          </p>
          <div className="flex gap-[8px] items-center">
            <p className="text-[14px] font-light leading-[20px] text-[#60646c] whitespace-nowrap">
              {flight.originCity} ({flight.originCode})
            </p>
            <div className="relative shrink-0 size-[16px] flex items-center justify-center">
              <ArrowRight size={12} color="#60646c" strokeWidth={1.5} />
            </div>
            <p className="text-[14px] font-light leading-[20px] text-[#60646c] whitespace-nowrap">
              {flight.destinationCity} ({flight.destinationCode})
            </p>
          </div>
        </div>

        {/* ── Flight Detail List card ── */}
        <div className="bg-[rgba(255,255,255,0.9)] flex flex-col gap-[16px] p-[16px] relative shadow-[0px_4px_16px_0px_rgba(0,0,0,0.1),0px_3px_12px_0px_rgba(0,0,0,0.1),0px_2px_3px_0px_rgba(0,0,51,0.06)] rounded-2xl w-full">

          {/* Visão Geral + route codes */}
          <div className="flex items-start justify-between w-full">
            <p className="text-[18px] font-medium leading-[26px] tracking-[-0.04px] text-[#1c2024] whitespace-nowrap">
              Visão Geral
            </p>
            <div className="flex gap-[8px] items-center">
              <p className="text-[18px] font-medium leading-[26px] tracking-[-0.04px] text-[#1c2024] whitespace-nowrap">
                {flight.originCode}
              </p>
              <div className="relative shrink-0 size-[16px] flex items-center justify-center">
                <ArrowRight size={12} color="#1c2024" strokeWidth={2} />
              </div>
              <p className="text-[18px] font-medium leading-[26px] tracking-[-0.04px] text-[#1c2024] whitespace-nowrap">
                {flight.destinationCode}
              </p>
            </div>
          </div>

          {/* Horizontal divider */}
          <div className="h-px w-full bg-[rgba(0,0,45,0.1)]" />

          {/* Flight Detail Row: airline info + class badge */}
          <div className="flex items-start justify-between w-full">
            {/* Airline Info Container */}
            <div className="flex gap-[8px] items-center shrink-0">
              <div
                className="size-[40px] rounded-full flex items-center justify-center text-white text-[12px] font-bold shrink-0"
                style={{ backgroundColor: flight.airlineColor }}
              >
                {flight.airlineCode}
              </div>
              <div className="flex flex-col gap-[4px] items-start w-[121px]">
                <p className="text-[14px] font-medium leading-[20px] text-[#1c2024] whitespace-nowrap">
                  {flight.airline}
                </p>
                <p className="text-[12px] font-medium leading-[16px] tracking-[0.04px] text-[#60646c] whitespace-nowrap">
                  {flight.flightNumber}
                </p>
              </div>
            </div>
            {/* Class badge — accent blue (per Figma: rgba(0,71,241,0.07) bg, rgba(0,43,183,0.77) text) */}
            <div className="bg-[rgba(0,71,241,0.07)] flex gap-[6px] items-center justify-center overflow-clip px-[8px] py-[4px] shrink-0">
              <p className="text-[12px] font-medium leading-[16px] tracking-[0.04px] text-[rgba(0,43,183,0.77)] whitespace-nowrap">
                Classe: Econômica
              </p>
            </div>
          </div>

          {/* ── Flight Detail Body: timeline + step info ── */}
          <div className="flex gap-[4px] items-start w-full">

            {/* Left: Flight Steps Container (radio → dashed → plane → dashed → radio) */}
            <div className="flex flex-col items-center justify-center py-[8px] shrink-0">
              {/* Top radio */}
              <div className="flex h-[16px] items-center justify-center">
                <div className="size-[14px] rounded-full border-2 border-[#12a594] bg-white flex items-center justify-center">
                  <div className="size-[5px] rounded-full bg-[#12a594]" />
                </div>
              </div>
              {/* Top dashed vertical line — 55px */}
              <div className="flex h-[55px] items-center justify-center w-0">
                <div className="-rotate-90 flex-none">
                  <svg width="55" height="1" viewBox="0 0 55 1" fill="none">
                    <line x1="0" y1="0.5" x2="55" y2="0.5" stroke="rgba(0,0,45,0.25)" strokeDasharray="3 3" />
                  </svg>
                </div>
              </div>
              {/* Plane icon rotated 135deg (diagonal takeoff) */}
              <div className="flex items-center justify-center size-[33.941px]">
                <div className="rotate-[135deg]">
                  <PlaneTakeoff size={24} color="#60646c" strokeWidth={1.5} />
                </div>
              </div>
              {/* Bottom dashed vertical line — 55px */}
              <div className="flex h-[55px] items-center justify-center w-0">
                <div className="-rotate-90 flex-none">
                  <svg width="55" height="1" viewBox="0 0 55 1" fill="none">
                    <line x1="0" y1="0.5" x2="55" y2="0.5" stroke="rgba(0,0,45,0.25)" strokeDasharray="3 3" />
                  </svg>
                </div>
              </div>
              {/* Bottom radio */}
              <div className="flex h-[16px] items-center justify-center">
                <div className="size-[14px] rounded-full border-2 border-[#12a594] bg-white flex items-center justify-center">
                  <div className="size-[5px] rounded-full bg-[#12a594]" />
                </div>
              </div>
            </div>

            {/* Right: Flight Step Info Container (justify-between, self-stretch) */}
            <div className="flex flex-1 flex-col items-start justify-between self-stretch min-w-0">

              {/* Departure row: city/airport + time/date */}
              <div className="flex gap-[16px] items-center w-full">
                <div className="flex flex-1 flex-col items-start min-w-0">
                  <p className="text-[18px] font-medium leading-[26px] tracking-[-0.04px] text-[#1c2024] whitespace-nowrap">
                    {flight.originCity} ({flight.originCode})
                  </p>
                  <p className="text-[14px] font-light leading-[20px] text-[#60646c] whitespace-nowrap">
                    Aeroporto Internacional
                  </p>
                </div>
                <div className="flex flex-col gap-px items-start w-[93px] shrink-0">
                  <p className="text-[18px] font-medium leading-[26px] tracking-[-0.04px] text-[#1c2024] whitespace-nowrap">
                    {fmt12h(flight.departureTime)}
                  </p>
                  <p className="text-[14px] font-light leading-[20px] text-[#60646c] whitespace-nowrap">
                    {depDate}
                  </p>
                </div>
              </div>

              {/* Middle: mini airline avatar + name */}
              <div className="flex gap-[8px] items-center">
                <div
                  className="size-[24px] rounded-full flex items-center justify-center text-white text-[8px] font-bold shrink-0"
                  style={{ backgroundColor: flight.airlineColor }}
                >
                  {flight.airlineCode}
                </div>
                <p className="text-[12px] font-medium leading-[16px] tracking-[0.04px] text-[#1c2024] whitespace-nowrap">
                  {flight.airline}
                </p>
              </div>

              {/* Arrival row: city/airport + time/date */}
              <div className="flex gap-[16px] items-center w-full">
                <div className="flex flex-1 flex-col items-start min-w-0">
                  <p className="text-[18px] font-medium leading-[26px] tracking-[-0.04px] text-[#1c2024] whitespace-nowrap">
                    {flight.destinationCity} ({flight.destinationCode})
                  </p>
                  <p className="text-[14px] font-light leading-[20px] text-[#60646c] whitespace-nowrap">
                    Aeroporto Internacional
                  </p>
                </div>
                <div className="flex flex-col gap-px items-start w-[93px] shrink-0">
                  <p className="text-[18px] font-medium leading-[26px] tracking-[-0.04px] text-[#1c2024] whitespace-nowrap">
                    {fmt12h(flight.arrivalTime)}
                  </p>
                  <p className="text-[14px] font-light leading-[20px] text-[#60646c] whitespace-nowrap">
                    {arrDate}
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* ── Flight Details Footer: "Mais detalhes" button ── */}
          <div className="flex flex-col gap-[4px] items-start w-full">
            <button className="border border-[rgba(0,8,48,0.27)] flex h-[32px] items-center justify-between px-[12px] w-full hover:bg-[rgba(0,0,45,0.02)] transition-colors">
              <p className="text-[14px] font-medium leading-[20px] text-[#60646c] whitespace-nowrap">
                Mais detalhes
              </p>
              <div className="relative shrink-0 size-[16px] flex items-center justify-center">
                <ChevronDown size={14} color="#60646c" strokeWidth={1.5} />
              </div>
            </button>
          </div>
        </div>

        {/* ── Callout: duration ── */}
        <div className="bg-[rgba(0,0,85,0.02)] border border-[rgba(0,0,47,0.15)] flex gap-[8px] h-[44px] items-center justify-center overflow-clip px-[12px] w-full">
          <div className="flex h-[20px] items-center shrink-0">
            <Clock size={16} color="rgba(0,7,20,0.62)" strokeWidth={1.5} />
          </div>
          <p className="text-[14px] font-normal leading-[20px] text-[rgba(0,7,20,0.62)] whitespace-nowrap">
            Duração: {durationLabel}
          </p>
        </div>

        {/* ── Trip Info Container: bagagem ── */}
        <div className="bg-[rgba(255,255,255,0.9)] flex gap-[16px] items-start p-[16px] relative shadow-[0px_4px_16px_0px_rgba(0,0,0,0.1),0px_3px_12px_0px_rgba(0,0,0,0.1),0px_2px_3px_0px_rgba(0,0,51,0.06)] rounded-2xl w-full">
          {/* Left label column — w-120, border-right */}
          <div className="border-r border-[#d9d9e0] flex flex-col items-start self-stretch shrink-0 w-[120px]">
            <p className="text-[14px] font-medium leading-[20px] tracking-[0px] text-[#60646c] whitespace-nowrap">
              Bagagem
            </p>
          </div>
          {/* Right: 3 baggage rows */}
          <div className="flex flex-col items-start w-[295px]">
            {/* Row 1 — Backpack */}
            <div className="flex gap-[8px] items-center py-[8px] w-full">
              <div className="flex flex-col items-start shrink-0">
                <div className="flex items-center justify-center overflow-clip shrink-0 size-[32px]">
                  <Backpack size={16} color="#60646c" strokeWidth={1.5} />
                </div>
              </div>
              <div className="flex flex-1 flex-col gap-[3px] items-start min-w-0">
                <p className="text-[12px] font-medium leading-[16px] tracking-[0.04px] text-[#60646c] whitespace-nowrap">
                  Inclui uma mochila ou bolsa
                </p>
                <p className="text-[12px] font-medium leading-[16px] tracking-[0.04px] text-[#60646c] whitespace-nowrap">
                  Deve caber embaixo do assento dianteiro
                </p>
              </div>
            </div>
            {/* Row 2 — Briefcase */}
            <div className="flex gap-[8px] items-center py-[8px] w-full">
              <div className="flex flex-col items-start shrink-0">
                <div className="flex items-center justify-center overflow-clip shrink-0 size-[32px]">
                  <Briefcase size={16} color="#60646c" strokeWidth={1.5} />
                </div>
              </div>
              <div className="flex flex-col gap-[3px] items-start w-[255px]">
                <p className="text-[12px] font-medium leading-[16px] tracking-[0.04px] text-[#60646c] whitespace-nowrap">
                  Inclui uma mochila ou bolsa
                </p>
                <p className="text-[12px] font-medium leading-[16px] tracking-[0.04px] text-[#60646c] whitespace-nowrap">
                  Deve caber embaixo do assento dianteiro
                </p>
              </div>
            </div>
            {/* Row 3 — Luggage */}
            <div className="flex gap-[8px] items-center py-[8px] w-full">
              <div className="flex flex-col items-start shrink-0">
                <div className="flex items-center justify-center overflow-clip shrink-0 size-[32px]">
                  <Luggage size={16} color="#60646c" strokeWidth={1.5} />
                </div>
              </div>
              <div className="flex flex-col gap-[3px] items-start w-[255px]">
                <p className="text-[12px] font-medium leading-[16px] tracking-[0.04px] text-[#60646c] whitespace-nowrap">
                  Inclui uma mochila ou bolsa
                </p>
                <p className="text-[12px] font-medium leading-[16px] tracking-[0.04px] text-[#60646c] whitespace-nowrap">
                  Deve caber embaixo do assento dianteiro
                </p>
              </div>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}

// ── Flight Fare Modal ─────────────────────────────────────────────────────────

type FareId = "light" | "classic" | "flex";

interface FareOption {
  id: FareId;
  name: string;
  badgeBg: string;
  badgeText: string;
  basePrice: string;
  extraPrice?: string;
  features: { text: string; included: boolean }[];
}

const FARE_OPTIONS: FareOption[] = [
  {
    id: "light",
    name: "Light",
    badgeBg: "rgba(0,198,157,0.12)",
    badgeText: "#008573",
    basePrice: "1.253 Tribz",
    extraPrice: undefined,
    features: [
      { text: "1 bolsa ou mochila de até 10 kg acomodada embaixo do assento à frente", included: true },
      { text: "1 Mala Pequena de até 12kg", included: true },
      { text: "1 Bagagem despachada não inclusa", included: false },
      { text: "Escolha de assento padrão não inclusa", included: false },
      { text: "Assento + Conforto não incluso", included: false },
      { text: "Antecipação de voo disponível com taxa", included: false },
      { text: "Remarcação antes do voo disponível com taxa", included: false },
      { text: "Não reembolsável", included: false },
    ],
  },
  {
    id: "classic",
    name: "Classic",
    badgeBg: "rgba(255,222,0,0.24)",
    badgeText: "#ab6400",
    basePrice: "1.253 Tribz",
    extraPrice: "R$99,00",
    features: [
      { text: "1 bolsa ou mochila de até 10 kg acomodada embaixo do assento à frente", included: true },
      { text: "1 Mala Pequena de até 12kg", included: true },
      { text: "1 Bagagem despachada não inclusa", included: true },
      { text: "Escolha de assento padrão não inclusa", included: true },
      { text: "Assento + Conforto não incluso", included: false },
      { text: "Antecipação de voo disponível com taxa", included: false },
      { text: "Remarcação antes do voo disponível com taxa", included: false },
      { text: "Não reembolsável", included: false },
    ],
  },
  {
    id: "flex",
    name: "Flex",
    badgeBg: "rgba(0,179,238,0.12)",
    badgeText: "#00749e",
    basePrice: "1.253 Tribz",
    extraPrice: "R$154,00",
    features: [
      { text: "1 bolsa ou mochila de até 10 kg acomodada embaixo do assento à frente", included: true },
      { text: "1 Mala Pequena de até 12kg", included: true },
      { text: "1 Bagagem despachada não inclusa", included: true },
      { text: "Escolha de assento padrão não inclusa", included: true },
      { text: "Assento + Conforto não incluso", included: true },
      { text: "Antecipação de voo disponível com taxa", included: true },
      { text: "Remarcação antes do voo disponível com taxa", included: true },
      { text: "Não reembolsável", included: true },
    ],
  },
];

function FeatureBadge({ text, included }: { text: string; included: boolean }) {
  return included ? (
    <div className="bg-[rgba(0,164,51,0.1)] flex gap-[6px] items-center justify-center overflow-clip px-[8px] py-[4px] rounded-[4px] w-full">
      <div className="shrink-0 size-[16px] flex items-center justify-center">
        <Check size={11} color="rgba(0,113,63,0.87)" strokeWidth={2.5} />
      </div>
      <div className="flex flex-1 flex-col justify-center min-w-0">
        <p className="text-[12px] font-medium leading-[16px] tracking-[0.04px] text-[rgba(0,113,63,0.87)]">
          {text}
        </p>
      </div>
    </div>
  ) : (
    <div className="bg-[rgba(243,0,13,0.08)] flex gap-[6px] items-center justify-center overflow-clip px-[8px] py-[4px] rounded-[4px] w-full">
      <div className="shrink-0 size-[16px] flex items-center justify-center">
        <X size={11} color="rgba(196,0,6,0.83)" strokeWidth={2.5} />
      </div>
      <div className="flex flex-1 flex-col justify-center min-w-0">
        <p className="text-[12px] font-medium leading-[16px] tracking-[0.04px] text-[rgba(196,0,6,0.83)]">
          {text}
        </p>
      </div>
    </div>
  );
}

function FlightFareModal({
  flight,
  onClose,
  onConfirm,
}: {
  flight: FlightResult;
  onClose: () => void;
  onConfirm: (fareId: FareId) => void;
}) {
  const [selectedFare, setSelectedFare] = useState<FareId>("light");

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center"
      onClick={onClose}
    >
      {/* Backdrop */}
      <div className="absolute inset-0 bg-[rgba(0,0,0,0.5)]" />

      {/* Modal container — 800px, p-16, gap-24, rounded-2xl */}
      <div
        className="relative bg-white rounded-2xl flex flex-col gap-[24px] p-[16px] w-[800px] max-h-[90vh] overflow-y-auto shadow-[0px_16px_64px_0px_rgba(0,0,0,0.24)]"
        onClick={(e) => e.stopPropagation()}
      >
        {/* ── Header ── */}
        <div className="flex flex-col items-start w-full">
          {/* X button row */}
          <div className="flex items-center justify-end w-full">
            <button
              onClick={onClose}
              className="flex items-center justify-center overflow-clip rounded-[6px] shrink-0 size-[40px] hover:bg-[rgba(0,0,0,0.04)] transition-colors"
            >
              <X size={18} color="#1c2024" strokeWidth={2} />
            </button>
          </div>
          {/* Title + subtitle */}
          <div className="flex flex-col gap-[4px] items-start w-full">
            <p className="text-[24px] font-medium leading-[30px] tracking-[-0.1px] text-[#1c2024] whitespace-nowrap">
              Escolha como quer voar
            </p>
            <p className="text-[14px] font-light leading-[20px] text-[#60646c] whitespace-nowrap">
              {FARE_OPTIONS.length} tarifas disponíveis
            </p>
          </div>
        </div>

        {/* ── Fare cards row ── */}
        <div className="flex gap-[16px] items-start w-full">
          {FARE_OPTIONS.map((fare) => {
            const isSelected = selectedFare === fare.id;
            return (
              <button
                key={fare.id}
                onClick={() => setSelectedFare(fare.id)}
                className={`bg-[rgba(255,255,255,0.9)] flex flex-1 flex-col gap-[16px] items-start p-[16px] rounded-2xl shadow-[0px_4px_16px_0px_rgba(0,0,0,0.1),0px_3px_12px_0px_rgba(0,0,0,0.1),0px_2px_3px_0px_rgba(0,0,51,0.06)] text-left transition-all ${
                  isSelected
                    ? "border-2 border-[#03867b]"
                    : "border-2 border-transparent hover:border-[rgba(3,134,123,0.3)]"
                }`}
              >
                {/* Card header: badge + price + subtitle */}
                <div className="flex flex-col gap-[8px] items-start w-full">
                  {/* Tariff badge */}
                  <div
                    className="flex gap-[8px] items-center justify-center overflow-clip px-[10px] py-[4px] rounded-[4px] shrink-0"
                    style={{ backgroundColor: fare.badgeBg }}
                  >
                    <p
                      className="text-[14px] font-medium leading-[20px] whitespace-nowrap"
                      style={{ color: fare.badgeText }}
                    >
                      {fare.name}
                    </p>
                  </div>

                  {/* Price row */}
                  <div className="flex gap-[4px] items-start">
                    <p className="text-[18px] font-medium leading-[26px] tracking-[-0.04px] text-[#1c2024] whitespace-nowrap">
                      {fare.basePrice}
                    </p>
                    {fare.extraPrice && (
                      <>
                        <p className="text-[18px] font-medium leading-[26px] tracking-[-0.04px] text-[#1c2024]">+</p>
                        <p className="text-[18px] font-medium leading-[26px] tracking-[-0.04px] text-[#1c2024] whitespace-nowrap">
                          {fare.extraPrice}
                        </p>
                      </>
                    )}
                  </div>

                  {/* Per traveler */}
                  <p className="text-[12px] font-light leading-[16px] tracking-[0.04px] text-[#60646c] whitespace-nowrap">
                    valores por viajante
                  </p>
                </div>

                {/* Divider */}
                <div className="h-px w-full bg-[rgba(0,0,45,0.1)]" />

                {/* Features list */}
                <div className="flex flex-col items-start py-[8px] gap-[8px] w-full">
                  {fare.features.map((feature, i) => (
                    <FeatureBadge key={i} text={feature.text} included={feature.included} />
                  ))}
                </div>
              </button>
            );
          })}
        </div>

        {/* ── Footer: Avançar button centered ── */}
        <div className="flex flex-col items-center w-full">
          <button
            onClick={() => onConfirm(selectedFare)}
            className="bg-[#12a594] flex gap-[8px] h-[32px] items-center justify-center px-[12px] rounded-full w-[240px] hover:bg-[#0f8c7d] transition-colors"
          >
            <p className="text-[14px] font-medium leading-[20px] text-white whitespace-nowrap">
              Avançar
            </p>
          </button>
        </div>
      </div>
    </div>
  );
}

// ── Flight Section (Ida or Volta) ─────────────────────────────────────────────

function FlightSection({
  title,
  subtitle,
  flights,
  startDate,
  selectedFlightId,
  onSelectFlight,
  onFlightDetails,
  onFlightAdd,
}: {
  title: string;
  subtitle: string;
  flights: FlightResult[];
  startDate: string;
  selectedFlightId: string | null;
  onSelectFlight: (id: string) => void;
  onFlightDetails: (flight: FlightResult) => void;
  onFlightAdd: (flight: FlightResult) => void;
}) {
  const [selectedDateIndex, setSelectedDateIndex] = useState(2);
  const [showAll, setShowAll] = useState(false);
  const visibleFlights = showAll ? flights : flights.slice(0, 3);

  return (
    <div className="flex flex-col gap-[20px]">
      {/* Section heading */}
      <div className="flex items-center justify-between">
        <div>
          <h3 className="text-[18px] font-semibold text-[#1c2024] leading-[26px]">{title}</h3>
          <p className="text-[13px] text-[#60646c] leading-[18px]">{subtitle}</p>
        </div>
      </div>

      {/* Date carousel */}
      <DateCarousel startDate={startDate} selectedIndex={selectedDateIndex} onSelect={setSelectedDateIndex} />

      {/* Flight rows */}
      <div className="flex flex-col gap-[8px]">
        {visibleFlights.map((flight) => (
          <FlightResultRow
            key={flight.id}
            flight={flight}
            selected={selectedFlightId === flight.id}
            onSelect={() => onSelectFlight(flight.id)}
            onDetails={() => onFlightDetails(flight)}
            onAddFlight={() => onFlightAdd(flight)}
          />
        ))}
      </div>

      {/* Ver mais */}
      {!showAll && flights.length > 3 && (
        <div className="flex justify-center">
          <button
            onClick={() => setShowAll(true)}
            className="flex items-center gap-[8px] px-[20px] py-[10px] rounded-full border border-[rgba(0,0,45,0.12)] text-[13px] text-[#60646c] font-medium hover:border-[#12a594] hover:text-[#12a594] transition-colors"
          >
            Ver mais voos
            <ChevronDown size={14} />
          </button>
        </div>
      )}
    </div>
  );
}

// ── Flight Results Header ─────────────────────────────────────────────────────

function HeaderDivider() {
  return (
    <div className="flex h-[16px] items-center justify-center shrink-0 w-0">
      <div className="flex-none rotate-90">
        <div className="h-0 relative w-[16px]">
          <div className="absolute inset-[-1px_0_0_0]">
            <svg className="block" fill="none" viewBox="0 0 16 1" width="16" height="1">
              <line stroke="#D9D9D9" x2="16" y1="0.5" y2="0.5" />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
}

export function FlightResultsHeader({
  origin,
  destination,
  departDate,
  returnDate,
  adults,
  tripType,
  onEdit,
  onOriginChange,
  onDestinationChange,
  onDatesChange,
  onAdultsChange,
}: {
  origin: string;
  destination: string;
  departDate: string;
  returnDate: string;
  adults: string;
  tripType: string;
  onEdit: () => void;
  onOriginChange?: (v: string) => void;
  onDestinationChange?: (v: string) => void;
  onDatesChange?: (depart: string, ret: string) => void;
  onAdultsChange?: (n: number) => void;
}) {
  const isRoundTrip = tripType === "Ida e Volta";

  // ── Date picker state ──────────────────────────────────────────────────────
  const [datePickerOpen, setDatePickerOpen] = useState(false);
  const [selectedRange, setSelectedRange] = useState<DateRange | undefined>(() => {
    if (departDate && returnDate) return { from: new Date(departDate + "T12:00:00"), to: new Date(returnDate + "T12:00:00") };
    if (departDate) return { from: new Date(departDate + "T12:00:00"), to: undefined };
    return undefined;
  });
  const [pendingFrom, setPendingFrom] = useState<Date | undefined>(undefined);

  function handleDateOpenChange(next: boolean) {
    setDatePickerOpen(next);
    if (next) setPendingFrom(undefined);
  }

  function handleDayClick(day: Date, modifiers: { disabled?: boolean }) {
    if (modifiers.disabled) return;
    if (!isRoundTrip) {
      // One-way: single click sets departure
      setSelectedRange({ from: day, to: undefined });
      onDatesChange?.(format(day, "yyyy-MM-dd"), "");
      setDatePickerOpen(false);
    } else if (!pendingFrom) {
      setPendingFrom(day);
      setSelectedRange({ from: day, to: undefined });
    } else {
      const [from, to] = day >= pendingFrom ? [pendingFrom, day] : [day, pendingFrom];
      setSelectedRange({ from, to });
      setPendingFrom(undefined);
      onDatesChange?.(format(from, "yyyy-MM-dd"), format(to, "yyyy-MM-dd"));
      setDatePickerOpen(false);
    }
  }

  const displayDates = (() => {
    const fmt = (d: Date) => format(d, "d MMM", { locale: pt });
    if (selectedRange?.from && selectedRange?.to) return `${fmt(selectedRange.from)} - ${fmt(selectedRange.to)}`;
    if (selectedRange?.from) return fmt(selectedRange.from);
    if (departDate) {
      const d = new Date(departDate + "T12:00:00");
      return returnDate ? `${fmt(d)} - ${fmt(new Date(returnDate + "T12:00:00"))}` : fmt(d);
    }
    return "Datas";
  })();

  // ── Guest picker state ─────────────────────────────────────────────────────
  const [guestOpen, setGuestOpen] = useState(false);
  const [adultCount, setAdultCount] = useState(Number(adults) || 1);
  const [criancasCount, setCriancasCount] = useState(0);
  const [bebesCount, setBebesCount] = useState(0);

  const totalGuests = adultCount + criancasCount + bebesCount;

  function handleGuestClose(open: boolean) {
    setGuestOpen(open);
    if (!open) onAdultsChange?.(adultCount);
  }

  return (
    <div className="flex items-center justify-between p-[32px]">
      <BrandLogo />

      {/* Search Container */}
      <div className="bg-[#fcfcfd] flex gap-[16px] items-center px-[16px] py-[14px] rounded-full shadow-[0px_4px_16px_0px_rgba(0,0,0,0.1),0px_3px_12px_0px_rgba(0,0,0,0.1),0px_2px_3px_0px_rgba(0,0,51,0.06)] shrink-0">

        {/* Search Filters */}
        <div className="flex gap-[10px] items-center">

          {/* Origin */}
          <CityPopover
            value={origin}
            placeholder="Origem"
            icon={<PlaneTakeoff size={16} color="#60646c" strokeWidth={1.5} />}
            citiesOnly
            onChange={onOriginChange}
          />

          {/* Destination */}
          <CityPopover
            value={destination}
            placeholder="Destino"
            icon={<PlaneLanding size={16} color="#60646c" strokeWidth={1.5} />}
            citiesOnly
            onChange={onDestinationChange}
          />

          <HeaderDivider />

          {/* Dates */}
          <Popover open={datePickerOpen} onOpenChange={handleDateOpenChange}>
            <PopoverTrigger asChild>
              <button className="flex gap-[8px] h-[32px] items-center justify-center px-[12px] rounded-[4px] hover:bg-muted transition-colors cursor-pointer">
                <CalendarDays size={16} color="#60646c" strokeWidth={1.5} />
                <span className="text-[14px] leading-[20px] text-[#60646c] whitespace-nowrap">{displayDates}</span>
              </button>
            </PopoverTrigger>
            <PopoverContent
              className="w-auto p-0 rounded-2xl bg-white text-foreground border-border shadow-[0px_4px_16px_0px_rgba(0,0,0,0.1),0px_3px_12px_0px_rgba(0,0,0,0.1),0px_2px_3px_0px_rgba(0,0,51,0.06)]"
              align="center"
              sideOffset={24}
            >
              <Calendar
                mode="range"
                selected={selectedRange}
                onDayClick={handleDayClick}
                numberOfMonths={2}
                disabled={{ before: new Date() }}
                locale={pt}
                classNames={{
                  months: "flex flex-row gap-6 p-5",
                  month: "flex flex-col gap-3",
                  caption: "flex justify-center pt-1 relative items-center w-full",
                  caption_label: "text-[14px] font-medium text-[#1c2024] capitalize",
                  nav: "flex items-center gap-1",
                  nav_button: "size-7 bg-transparent p-0 opacity-50 hover:opacity-100 inline-flex items-center justify-center rounded-md border border-[#d9d9e0] hover:bg-[rgba(0,0,51,0.06)] transition-colors",
                  nav_button_previous: "absolute left-1",
                  nav_button_next: "absolute right-1",
                  table: "w-full border-collapse",
                  head_row: "flex",
                  head_cell: "text-[#60646c] rounded-md w-9 font-normal text-[12px] text-center",
                  row: "flex w-full mt-1",
                  cell: "relative p-0 text-center text-[14px] focus-within:relative focus-within:z-20 [&:has([aria-selected])]:bg-[rgba(3,134,123,0.08)] [&:has([aria-selected].day-range-end)]:rounded-r-full [&:has(>.day-range-end)]:rounded-r-full [&:has(>.day-range-start)]:rounded-l-full first:[&:has([aria-selected])]:rounded-l-full last:[&:has([aria-selected])]:rounded-r-full",
                  day: "size-9 p-0 font-normal text-[#1c2024] aria-selected:opacity-100 inline-flex items-center justify-center rounded-full hover:bg-[rgba(0,0,51,0.06)] transition-colors cursor-pointer",
                  day_range_start: "day-range-start aria-selected:bg-primary aria-selected:text-white rounded-full",
                  day_range_end: "day-range-end aria-selected:bg-primary aria-selected:text-white rounded-full",
                  day_selected: "bg-primary text-white hover:bg-primary hover:text-white focus:bg-primary focus:text-white rounded-full",
                  day_today: "bg-[rgba(0,0,51,0.06)] text-[#1c2024] font-medium",
                  day_outside: "text-[#60646c] opacity-40",
                  day_disabled: "text-[#60646c] opacity-30 cursor-not-allowed",
                  day_range_middle: "aria-selected:bg-[rgba(3,134,123,0.08)] aria-selected:text-[#1c2024] rounded-none",
                  day_hidden: "invisible",
                }}
              />
            </PopoverContent>
          </Popover>

          <HeaderDivider />

          {/* Passengers */}
          <Popover open={guestOpen} onOpenChange={handleGuestClose}>
            <PopoverTrigger asChild>
              <button className="flex gap-[8px] h-[32px] items-center justify-center px-[12px] rounded-[4px] hover:bg-muted transition-colors cursor-pointer">
                <UserRound size={16} color="#60646c" strokeWidth={1.5} />
                <span className="text-[14px] leading-[20px] text-[#60646c] whitespace-nowrap">
                  {totalGuests} {totalGuests === 1 ? "pessoa" : "pessoas"}
                </span>
              </button>
            </PopoverTrigger>
            <PopoverContent
              className="w-[280px] bg-white text-foreground border-border rounded-2xl shadow-[0px_4px_16px_0px_rgba(0,0,0,0.1),0px_3px_12px_0px_rgba(0,0,0,0.1),0px_2px_3px_0px_rgba(0,0,51,0.06)] p-4"
              align="center"
              sideOffset={24}
            >
              {[
                { label: "Adultos", desc: "13 anos ou mais", value: adultCount, min: 1, set: setAdultCount },
                { label: "Crianças", desc: "De 2 a 12 anos", value: criancasCount, min: 0, set: setCriancasCount },
                { label: "Bebês", desc: "Menor de 2 anos", value: bebesCount, min: 0, set: setBebesCount },
              ].map(({ label, desc, value, min, set }, i, arr) => (
                <div key={label}>
                  <div className="flex items-center justify-between py-4">
                    <div className="flex flex-col gap-0.5">
                      <span className="text-[14px] font-medium text-[#1c2024] leading-[20px]">{label}</span>
                      <span className="text-[12px] text-[#60646c] leading-[16px]">{desc}</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <button
                        onClick={() => set(c => Math.max(min, c - 1))}
                        disabled={value <= min}
                        className="size-8 rounded-full border border-[#d9d9e0] flex items-center justify-center text-[#1c2024] hover:border-[#1c2024] transition-colors disabled:opacity-30 disabled:cursor-not-allowed"
                      >
                        <span className="text-[18px] leading-none font-light">−</span>
                      </button>
                      <span className="text-[14px] font-medium text-[#1c2024] w-4 text-center tabular-nums">{value}</span>
                      <button
                        onClick={() => set(c => c + 1)}
                        className="size-8 rounded-full border border-[#d9d9e0] flex items-center justify-center text-[#1c2024] hover:border-[#1c2024] transition-colors"
                      >
                        <span className="text-[18px] leading-none font-light">+</span>
                      </button>
                    </div>
                  </div>
                  {i < arr.length - 1 && <div className="h-px bg-[#d9d9e0]" />}
                </div>
              ))}
            </PopoverContent>
          </Popover>

          <HeaderDivider />

          {/* Switch + Trip type (read-only indicator) */}
          <div className="flex gap-[8px] items-center px-[12px]">
            <div className={`relative w-[28px] h-[16px] rounded-full border border-[rgba(0,6,46,0.2)] flex items-center transition-colors ${isRoundTrip ? "bg-[#12a594]" : "bg-[rgba(0,0,45,0.12)]"}`}>
              <div className={`absolute w-[14px] h-[14px] rounded-full bg-white border border-[rgba(0,0,0,0.2)] shadow-sm transition-transform ${isRoundTrip ? "translate-x-[13px]" : "translate-x-[0px]"}`} />
            </div>
            <span className="text-[14px] leading-[20px] text-[#1c2024] whitespace-nowrap">Ida e Volta</span>
          </div>
        </div>

        {/* Edit button */}
        <div className="flex flex-col items-start shrink-0">
          <button
            onClick={onEdit}
            className="bg-[#12a594] flex items-center justify-center overflow-clip rounded-full size-[32px] hover:bg-[#0f8c7d] transition-colors"
          >
            <Pencil size={16} color="white" strokeWidth={1.5} />
          </button>
        </div>
      </div>

      {/* User Actions */}
      <div className="flex gap-[12px] items-center shrink-0">
        <button className="bg-[#12a594] flex gap-[12px] h-[40px] items-center justify-center px-[16px] rounded-full hover:bg-[#0f8c7d] transition-colors cursor-pointer">
          <span className="text-[16px] font-medium text-white leading-[24px]">Criar conta / Login</span>
        </button>
        <div className="flex flex-col items-start shrink-0">
          <div className="bg-[#e8e8ec] flex items-center justify-center overflow-clip rounded-full size-[48px]">
            <div className="relative size-[20px]">
              <div className="absolute inset-[1%_13.33%_1.67%_13.33%]">
                <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14.6668 19.4661">
                  <path clipRule="evenodd" d={svgPaths.p1cb983f0} fill="#008573" fillRule="evenodd" />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

// ── Main Page ─────────────────────────────────────────────────────────────────

export default function FlightResults() {
  const [searchParams, setSearchParams] = useSearchParams();
  const navigate = useNavigate();

  const origin = searchParams.get("origem") || "São Paulo";
  const destination = searchParams.get("destino") || "Brasília";
  const departDate = searchParams.get("ida") || "";
  const returnDate = searchParams.get("volta") || "";
  const adults = searchParams.get("adultos") || "1";
  const tripType = searchParams.get("tipo") || "Ida e Volta";

  const [selectedIdaFlight, setSelectedIdaFlight] = useState<string | null>(null);
  const [selectedVoltaFlight, setSelectedVoltaFlight] = useState<string | null>(null);
  const [sortBy, setSortBy] = useState("Mais relevantes");
  const [flightDetailsModal, setFlightDetailsModal] = useState<{ flight: FlightResult; type: "Ida" | "Volta" } | null>(null);
  const [fareModal, setFareModal] = useState<{ flight: FlightResult; type: "Ida" | "Volta" } | null>(null);
  const [filters, setFilters] = useState<FilterState>({
    stops: [],
    baggage: [],
    airlines: [],
    classes: [],
    minPrice: 1387,
    maxPrice: 50000,
    minDuration: 0,
    maxDuration: 24,
    minTime: 0,
    maxTime: 24,
  });

  const handleEdit = () => {
    navigate("/");
  };

  const isRoundTrip = tripType === "Ida e Volta";

  // Apply filters
  const applyFilters = (flights: FlightResult[]) => {
    return flights.filter((f) => {
      if (filters.stops.length > 0) {
        const stopLabel = f.stops === 0 ? "Direto" : f.stops === 1 ? "1 parada" : "2+ paradas";
        if (!filters.stops.includes(stopLabel)) return false;
      }
      if (filters.airlines.length > 0 && !filters.airlines.includes(f.airline)) return false;
      if (f.totalPrice > filters.maxPrice) return false;
      const durationH = f.durationHours + f.durationMins / 60;
      if (durationH > filters.maxDuration) return false;
      return true;
    });
  };

  const filteredIda = applyFilters(MOCK_FLIGHTS_IDA);
  const filteredVolta = applyFilters(MOCK_FLIGHTS_VOLTA);

  const canContinue = selectedIdaFlight && (!isRoundTrip || selectedVoltaFlight);

  return (
    <div className="min-h-screen flex flex-col bg-[#f9f9fb]">
      {/* Flight Details Modal */}
      {flightDetailsModal && (
        <FlightDetailsModal
          flight={flightDetailsModal.flight}
          flightType={flightDetailsModal.type}
          onClose={() => setFlightDetailsModal(null)}
        />
      )}

      {/* Flight Fare Modal */}
      {fareModal && (
        <FlightFareModal
          flight={fareModal.flight}
          onClose={() => setFareModal(null)}
          onConfirm={(_fareId) => {
            if (fareModal.type === "Ida") setSelectedIdaFlight(fareModal.flight.id);
            else setSelectedVoltaFlight(fareModal.flight.id);
            setFareModal(null);
          }}
        />
      )}

      {/* Header */}
      <FlightResultsHeader
        origin={origin}
        destination={destination}
        departDate={departDate}
        returnDate={returnDate}
        adults={adults}
        tripType={tripType}
        onEdit={handleEdit}
        onOriginChange={(v) => { const n = new URLSearchParams(searchParams); n.set("origem", v); setSearchParams(n); }}
        onDestinationChange={(v) => { const n = new URLSearchParams(searchParams); n.set("destino", v); setSearchParams(n); }}
        onDatesChange={(depart, ret) => { const n = new URLSearchParams(searchParams); n.set("ida", depart); if (ret) n.set("volta", ret); else n.delete("volta"); setSearchParams(n); }}
        onAdultsChange={(count) => { const n = new URLSearchParams(searchParams); n.set("adultos", String(count)); setSearchParams(n); }}
      />

      {/* Main content */}
      <div className="flex-1 w-full max-w-[1440px] mx-auto px-[32px] py-[32px]">

        {/* Two-column layout — filter sidebar + results */}
        <div className="flex gap-[32px] items-start">

          {/* Filter sidebar (left) */}
          <div className="w-[240px] shrink-0 sticky top-[24px]">
            <FilterSidebar filters={filters} onChange={setFilters} />
          </div>

          {/* Results column (right) */}
          <div className="flex-1 flex flex-col gap-[40px] min-w-0">

            {/* Page header + sort — Figma node 262-2565, inside right column */}
            <div className="flex flex-col gap-[16px] items-start">
              <div className="flex flex-col gap-[5px] items-start w-full">
                <p className="text-[18px] font-medium leading-[26px] tracking-[-0.04px] text-[#1c2024]">
                  {destination}: {filteredIda.length} voos encontrados
                </p>
                <p className="text-[12px] font-light leading-[16px] tracking-[0.04px] text-[#60646c]">
                  Todas as opções de voos passam por uma curadoria nossa para te oferecer a melhor experiência
                </p>
              </div>
              <div className="flex items-start">
                <div className="relative">
                  <select
                    value={sortBy}
                    onChange={(e) => setSortBy(e.target.value)}
                    className="appearance-none bg-[rgba(0,0,51,0.06)] border border-[rgba(0,8,48,0.27)] h-[32px] pl-[12px] pr-[32px] text-[14px] text-[rgba(0,7,27,0.5)] cursor-pointer focus:outline-none"
                  >
                    <option value="Mais relevantes">Ordenar por: Mais relevantes</option>
                    <option value="Menor preço">Ordenar por: Menor preço</option>
                    <option value="Menor duração">Ordenar por: Menor duração</option>
                    <option value="Mais cedo">Ordenar por: Mais cedo (partida)</option>
                  </select>
                  <ChevronDown size={16} color="rgba(0,7,27,0.5)" className="absolute right-[8px] top-1/2 -translate-y-1/2 pointer-events-none" />
                </div>
              </div>
            </div>

            {/* Ida section */}
            <FlightSection
              title="Voo de Ida"
              subtitle={`${origin} → ${destination}${departDate ? ` · ${new Date(departDate + "T12:00:00").toLocaleDateString("pt-BR", { weekday: "long", day: "numeric", month: "long" })}` : ""}`}
              flights={filteredIda}
              startDate={departDate}
              selectedFlightId={selectedIdaFlight}
              onSelectFlight={setSelectedIdaFlight}
              onFlightDetails={(flight) => setFlightDetailsModal({ flight, type: "Ida" })}
              onFlightAdd={(flight) => setFareModal({ flight, type: "Ida" })}
            />

            {/* Volta section — only if round trip */}
            {isRoundTrip && (
              <>
                <div className="h-px bg-[rgba(0,0,45,0.08)]" />
                <FlightSection
                  title="Voo de Volta"
                  subtitle={`${destination} → ${origin}${returnDate ? ` · ${new Date(returnDate + "T12:00:00").toLocaleDateString("pt-BR", { weekday: "long", day: "numeric", month: "long" })}` : ""}`}
                  flights={filteredVolta}
                  startDate={returnDate || departDate}
                  selectedFlightId={selectedVoltaFlight}
                  onSelectFlight={setSelectedVoltaFlight}
                  onFlightDetails={(flight) => setFlightDetailsModal({ flight, type: "Volta" })}
                  onFlightAdd={(flight) => setFareModal({ flight, type: "Volta" })}
                />
              </>
            )}

            {/* Continue CTA */}
            {canContinue && (
              <div className="flex justify-center pt-[8px]">
                <button
                  onClick={() =>
                    navigate(
                      `/pagamento-aereo?origem=${encodeURIComponent(origin)}&destino=${encodeURIComponent(destination)}&ida=${departDate}&volta=${returnDate || ""}&adultos=${adults}&tipo=${encodeURIComponent(tripType)}&idaVoo=${selectedIdaFlight || ""}&voltaVoo=${selectedVoltaFlight || ""}`
                    )
                  }
                  className="bg-[#12a594] flex items-center gap-[8px] px-[32px] py-[14px] rounded-full hover:bg-[#0f8c7d] transition-colors shadow-lg"
                >
                  <span className="text-[16px] font-medium text-white">Continuar para pagamento</span>
                  <ArrowRight size={18} color="white" />
                </button>
              </div>
            )}
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}
