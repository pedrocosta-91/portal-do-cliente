import { useState, useRef, useEffect } from "react";
import svgPaths from "../../imports/svg-prp94fobv4";
import { BedDouble, MapPin } from "lucide-react";
import { format } from "date-fns";
import { pt } from "date-fns/locale";
import type { DateRange } from "react-day-picker";
import { Popover, PopoverContent, PopoverTrigger } from "./ui/popover";
import { Calendar } from "./ui/calendar";

// ── Destination data (shared with SearchSection) ─────────────────────────────

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

const BRAZILIAN_CITIES = [
  "São Paulo, SP", "Rio de Janeiro, RJ", "Brasília, DF", "Salvador, BA",
  "Fortaleza, CE", "Belo Horizonte, MG", "Manaus, AM", "Curitiba, PR",
  "Recife, PE", "Goiânia, GO", "Porto Alegre, RS", "Belém, PA",
  "Guarulhos, SP", "Campinas, SP", "São Luís, MA", "Natal, RN",
  "Teresina, PI", "Campo Grande, MS", "João Pessoa, PB", "Maceió, AL",
  "Ribeirão Preto, SP", "Uberlândia, MG", "Sorocaba, SP", "Aracaju, SE",
  "Feira de Santana, BA", "Cuiabá, MT", "Joinville, SC", "Juiz de Fora, MG",
  "Londrina, PR", "Florianópolis, SC", "Niterói, RJ", "Vila Velha, ES",
  "São José dos Campos, SP", "Santos, SP", "Porto Velho, RO",
];

const normalize = (text: string) =>
  text.normalize("NFD").replace(/[\u0300-\u036f]/g, "").toLowerCase();

function getDestinationSuggestions(value: string) {
  const q = normalize(value);
  return {
    hotels: HOTELS.filter(h => normalize(h.name).includes(q) || normalize(h.location).includes(q)).slice(0, 5),
    cities: BRAZILIAN_CITIES.filter(c => normalize(c).includes(q)).slice(0, 6),
  };
}

interface SearchResultsHeaderProps {
  destination: string;
  dateRange: string;
  guests: number;
  adultos?: number;
  criancas?: number;
  bebes?: number;
  rooms: number;
  nights: number;
  checkIn?: string;
  checkOut?: string;
  onEdit?: () => void;
  onDatesChange?: (checkIn: string, checkOut: string) => void;
  onGuestsChange?: (adultos: number, criancas: number, bebes: number) => void;
  onDestinationChange?: (destination: string) => void;
}

function Group() {
  return (
    <div className="absolute inset-[83.02%_2.01%_0_73.11%]" data-name="Group">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 22.5968 6.79278">
        <g id="Group">
          <path d={svgPaths.p17c3dd80} fill="var(--color-primary, #03867B)" id="Vector" />
          <path d={svgPaths.p3868780} fill="var(--color-primary, #03867B)" id="Vector_2" />
          <path d={svgPaths.p5390880} fill="var(--color-primary, #03867B)" id="Vector_3" />
          <path d={svgPaths.p31a51f00} fill="var(--color-primary, #03867B)" id="Vector_4" />
        </g>
      </svg>
    </div>
  );
}

function Group1() {
  return (
    <div className="absolute inset-[11.16%_0_29.61%_41.08%]" data-name="Group">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 53.5163 23.6919">
        <g id="Group">
          <path d={svgPaths.p131ac300} fill="var(--color-primary, #03867B)" id="Vector" />
          <path d={svgPaths.p1d114ff0} fill="var(--color-primary, #03867B)" id="Vector_2" />
          <path d={svgPaths.p9447f00} fill="var(--color-primary, #03867B)" id="Vector_3" />
          <path d={svgPaths.p15edf000} fill="var(--color-primary, #03867B)" id="Vector_4" />
          <path d={svgPaths.pfc16400} fill="var(--color-primary, #03867B)" id="Vector_5" />
        </g>
      </svg>
    </div>
  );
}

function Group4() {
  return (
    <div className="absolute inset-[0_72.13%_70.77%_8.03%]" data-name="Group">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18.0213 11.6931">
        <g id="Group">
          <path d={svgPaths.p1c67ba80} fill="var(--color-primary, #03867B)" id="Vector" />
          <path d={svgPaths.p28dcd600} fill="var(--color-primary, #03867B)" id="Vector_2" />
        </g>
      </svg>
    </div>
  );
}

function Group5() {
  return (
    <div className="absolute inset-[52.3%_72.13%_18.46%_8.03%]" data-name="Group">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18.0213 11.6946">
        <g id="Group">
          <path d={svgPaths.p2311e700} fill="var(--color-primary, #03867B)" id="Vector" />
          <path d={svgPaths.p28bc3800} fill="var(--color-primary, #03867B)" id="Vector_2" />
        </g>
      </svg>
    </div>
  );
}

function Group3() {
  return (
    <div className="absolute contents inset-[0_72.13%_18.46%_8.03%]" data-name="Group">
      <Group4 />
      <Group5 />
    </div>
  );
}

function Group7() {
  return (
    <div className="absolute inset-[18.24%_64.09%_36.7%_23.04%]" data-name="Group">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 11.6932 18.023">
        <g id="Group">
          <path d={svgPaths.p3daa7d00} fill="var(--color-primary, #03867B)" id="Vector" />
          <path d={svgPaths.pa9ab080} fill="var(--color-primary, #03867B)" id="Vector_2" />
        </g>
      </svg>
    </div>
  );
}

function Group8() {
  return (
    <div className="absolute inset-[18.24%_87.13%_36.7%_0]" data-name="Group">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 11.6946 18.0231">
        <g id="Group">
          <path d={svgPaths.p3fff9180} fill="var(--color-primary, #03867B)" id="Vector" />
          <path d={svgPaths.p245b2380} fill="var(--color-primary, #03867B)" id="Vector_2" />
        </g>
      </svg>
    </div>
  );
}

function Group6() {
  return (
    <div className="absolute contents inset-[18.24%_64.09%_36.7%_0]" data-name="Group">
      <Group7 />
      <Group8 />
    </div>
  );
}

function Group2() {
  return (
    <div className="absolute contents inset-[0_64.09%_18.46%_0]" data-name="Group">
      <Group3 />
      <Group6 />
    </div>
  );
}

function BrandLogo() {
  return (
    <div className="h-[40px] relative shrink-0 w-[90.831px]" data-name="Brand">
      <Group />
      <Group1 />
      <Group2 />
    </div>
  );
}

function LocationFilters({
  destination,
  onDestinationChange,
}: {
  destination: string;
  onDestinationChange?: (destination: string) => void;
}) {
  const [open, setOpen] = useState(false);
  const [query, setQuery] = useState(destination);
  const [suggestions, setSuggestions] = useState({ hotels: [] as Hotel[], cities: [] as string[] });
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    setQuery(destination);
  }, [destination]);

  function handleOpenChange(next: boolean) {
    setOpen(next);
    if (next) {
      setQuery(destination);
      setSuggestions(destination.trim() ? getDestinationSuggestions(destination) : { hotels: [], cities: [] });
      setTimeout(() => inputRef.current?.focus(), 50);
    }
  }

  function handleInput(value: string) {
    setQuery(value);
    setSuggestions(value.trim() ? getDestinationSuggestions(value) : { hotels: [], cities: [] });
  }

  function handleSelect(value: string) {
    setQuery(value);
    setOpen(false);
    onDestinationChange?.(value);
  }

  const hasSuggestions = suggestions.hotels.length > 0 || suggestions.cities.length > 0;

  return (
    <div className="content-stretch flex items-center relative shrink-0" data-name="Location Filters">
      <Popover open={open} onOpenChange={handleOpenChange}>
        <PopoverTrigger asChild>
          <button
            className="content-stretch flex gap-[8px] h-[32px] items-center justify-center px-[12px] relative rounded-[4px] shrink-0 hover:bg-muted transition-colors cursor-pointer"
            data-name="Button"
          >
            <div className="overflow-clip relative shrink-0 size-[16px]" data-name="Icon / map-pin">
              <div className="absolute inset-[5.21%_13.54%]" data-name="Vector">
                <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 11.6667 14.3333">
                  <g id="Vector">
                    <path d={svgPaths.p3d5d7980} fill="#60646C" />
                    <path d={svgPaths.p339c0280} fill="#60646C" />
                  </g>
                </svg>
              </div>
            </div>
            <div className="flex flex-col justify-center leading-[0] not-italic relative shrink-0 text-[#60646c] text-[14px] whitespace-nowrap">
              <p className="leading-[20px]">{destination || "Destino"}</p>
            </div>
          </button>
        </PopoverTrigger>
        <PopoverContent
          className="w-[340px] p-0 bg-white text-foreground border-border rounded-2xl shadow-[0px_4px_16px_0px_rgba(0,0,0,0.1),0px_3px_12px_0px_rgba(0,0,0,0.1),0px_2px_3px_0px_rgba(0,0,51,0.06)] overflow-hidden"
          align="start"
          sideOffset={24}
        >
          {/* Input */}
          <div className="flex items-center gap-2 px-4 py-3 border-b border-[#d9d9e0]">
            <MapPin size={16} color="#60646c" strokeWidth={1.5} className="shrink-0" />
            <input
              ref={inputRef}
              type="text"
              value={query}
              onChange={e => handleInput(e.target.value)}
              placeholder="Destino ou nome do hotel"
              className="flex-1 bg-transparent text-[14px] text-[#1c2024] placeholder:text-[#60646c] border-0 outline-none focus:ring-0"
            />
          </div>

          {/* Suggestions */}
          {hasSuggestions && (
            <div className="max-h-72 overflow-y-auto">
              {suggestions.hotels.length > 0 && (
                <>
                  <div className="px-4 py-2 bg-[rgba(0,0,51,0.03)]">
                    <span className="text-[11px] font-medium text-[#60646c] uppercase tracking-[0.04px]">Hotéis</span>
                  </div>
                  {suggestions.hotels.map(hotel => (
                    <button
                      key={hotel.name}
                      className="w-full text-left px-4 py-2.5 hover:bg-[rgba(0,0,51,0.04)] transition-colors flex items-center gap-3"
                      onClick={() => handleSelect(hotel.name)}
                    >
                      <div className="size-8 rounded-lg bg-[rgba(3,134,123,0.08)] flex items-center justify-center shrink-0">
                        <BedDouble size={14} color="#03867b" strokeWidth={1.5} />
                      </div>
                      <div className="flex flex-col gap-0.5 min-w-0">
                        <span className="text-[14px] text-[#1c2024] leading-[20px] truncate">{hotel.name}</span>
                        <span className="text-[12px] text-[#60646c] leading-[16px] truncate">{hotel.location}</span>
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
                    <button
                      key={city}
                      className="w-full text-left px-4 py-2.5 hover:bg-[rgba(0,0,51,0.04)] transition-colors flex items-center gap-3"
                      onClick={() => handleSelect(city)}
                    >
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

          {/* Empty state */}
          {!hasSuggestions && query.trim() && (
            <div className="px-4 py-6 text-center">
              <p className="text-[14px] text-[#60646c]">Nenhum resultado para "{query}"</p>
            </div>
          )}

          {/* Hint when empty */}
          {!query.trim() && (
            <div className="px-4 py-4">
              <p className="text-[12px] text-[#60646c] leading-[16px]">Digite o nome de uma cidade ou hotel para buscar</p>
            </div>
          )}
        </PopoverContent>
      </Popover>
    </div>
  );
}

function Divider() {
  return (
    <div className="flex h-[16px] items-center justify-center relative shrink-0 w-0">
      <div className="flex-none rotate-90">
        <div className="h-0 relative w-[16px]">
          <div className="absolute inset-[-1px_0_0_0]">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 1">
              <line stroke="#D9D9D9" x2="16" y1="0.5" y2="0.5" />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
}

function GuestCounter({
  label,
  description,
  value,
  min,
  onChange,
}: {
  label: string;
  description: string;
  value: number;
  min: number;
  onChange: (next: number) => void;
}) {
  return (
    <div className="flex items-center justify-between py-4">
      <div className="flex flex-col gap-0.5">
        <span className="text-[14px] font-medium text-[#1c2024] leading-[20px]">{label}</span>
        <span className="text-[12px] text-[#60646c] leading-[16px]">{description}</span>
      </div>
      <div className="flex items-center gap-3">
        <button
          onClick={() => onChange(Math.max(min, value - 1))}
          disabled={value <= min}
          className="size-8 rounded-full border border-[#d9d9e0] flex items-center justify-center text-[#1c2024] hover:border-[#1c2024] transition-colors disabled:opacity-30 disabled:cursor-not-allowed"
        >
          <span className="text-[18px] leading-none font-light">−</span>
        </button>
        <span className="text-[14px] font-medium text-[#1c2024] w-4 text-center tabular-nums">{value}</span>
        <button
          onClick={() => onChange(value + 1)}
          className="size-8 rounded-full border border-[#d9d9e0] flex items-center justify-center text-[#1c2024] hover:border-[#1c2024] transition-colors"
        >
          <span className="text-[18px] leading-none font-light">+</span>
        </button>
      </div>
    </div>
  );
}

function SearchFilters({
  destination,
  dateRange,
  guests,
  adultos: initAdultos = 1,
  criancas: initCriancas = 0,
  bebes: initBebes = 0,
  rooms,
  nights,
  checkIn,
  checkOut,
  onDatesChange,
  onGuestsChange,
  onDestinationChange,
}: {
  destination: string;
  dateRange: string;
  guests: number;
  adultos?: number;
  criancas?: number;
  bebes?: number;
  rooms: number;
  nights: number;
  checkIn?: string;
  checkOut?: string;
  onDatesChange?: (checkIn: string, checkOut: string) => void;
  onGuestsChange?: (adultos: number, criancas: number, bebes: number) => void;
  onDestinationChange?: (destination: string) => void;
}) {
  const [datePickerOpen, setDatePickerOpen] = useState(false);
  const [selectedRange, setSelectedRange] = useState<DateRange | undefined>(() => {
    if (checkIn && checkOut) {
      return { from: new Date(checkIn), to: new Date(checkOut) };
    }
    return undefined;
  });
  // Controls two-click logic: undefined = waiting for 1st click, Date = waiting for 2nd click
  const [pendingFrom, setPendingFrom] = useState<Date | undefined>(undefined);

  // Guest picker state
  const [guestPickerOpen, setGuestPickerOpen] = useState(false);
  const [adultos, setAdultos] = useState(initAdultos);
  const [criancas, setCriancas] = useState(initCriancas);
  const [bebes, setBebes] = useState(initBebes);

  const totalGuests = adultos + criancas + bebes;

  function handleGuestPickerClose(open: boolean) {
    setGuestPickerOpen(open);
    if (!open) {
      onGuestsChange?.(adultos, criancas, bebes);
    }
  }

  const displayDateRange = (() => {
    if (selectedRange?.from && selectedRange?.to) {
      return `${format(selectedRange.from, "d", { locale: pt })} - ${format(selectedRange.to, "d MMM", { locale: pt })}`;
    }
    return dateRange || "Datas";
  })();

  function handleOpenChange(open: boolean) {
    setDatePickerOpen(open);
    if (open) setPendingFrom(undefined);
  }

  function handleDayClick(day: Date, modifiers: { disabled?: boolean }) {
    if (modifiers.disabled) return;

    if (!pendingFrom) {
      // 1st click: always the exact day the user clicked
      setPendingFrom(day);
      setSelectedRange({ from: day, to: undefined });
    } else {
      // 2nd click: build the range, swap if needed
      const [from, to] = day >= pendingFrom
        ? [pendingFrom, day]
        : [day, pendingFrom];
      setSelectedRange({ from, to });
      setPendingFrom(undefined);
      onDatesChange?.(
        format(from, "yyyy-MM-dd"),
        format(to, "yyyy-MM-dd"),
      );
      setDatePickerOpen(false);
    }
  }

  return (
    <div className="content-stretch flex gap-[10px] items-center relative shrink-0" data-name="Search Filters">
      {/* Destino */}
      <LocationFilters destination={destination} onDestinationChange={onDestinationChange} />
      <Divider />
      {/* Datas */}
      <Popover open={datePickerOpen} onOpenChange={handleOpenChange}>
        <PopoverTrigger asChild>
          <button
            className="content-stretch flex gap-[8px] h-[32px] items-center justify-center px-[12px] relative rounded-[4px] shrink-0 hover:bg-muted transition-colors cursor-pointer"
            data-name="Button"
          >
            <div className="overflow-clip relative shrink-0 size-[16px]" data-name="Icon / calendar-days">
              <div className="absolute inset-[5.21%_9.38%]" data-name="Vector">
                <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 13 14.3333">
                  <g id="Vector">
                    <path d={svgPaths.p3913d730} fill="#60646C" />
                    <path d={svgPaths.p29619000} fill="#60646C" />
                    <path d={svgPaths.p219c5c00} fill="#60646C" />
                    <path d={svgPaths.p3447e800} fill="#60646C" />
                    <path d={svgPaths.p83a0100} fill="#60646C" />
                    <path d={svgPaths.p16f9cb00} fill="#60646C" />
                    <path d={svgPaths.p20320440} fill="#60646C" />
                    <path d={svgPaths.p13835d00} fill="#60646C" />
                    <path d={svgPaths.p383b5600} fill="#60646C" />
                    <path d={svgPaths.pf1caa80} fill="#60646C" />
                  </g>
                </svg>
              </div>
            </div>
            <div className="flex flex-col justify-center leading-[0] not-italic relative shrink-0 text-[#60646c] text-[14px] whitespace-nowrap">
              <p className="leading-[20px]">{displayDateRange}</p>
            </div>
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
      <Divider />
      {/* Pessoas */}
      <Popover open={guestPickerOpen} onOpenChange={handleGuestPickerClose}>
        <PopoverTrigger asChild>
          <button
            className="content-stretch flex gap-[8px] h-[32px] items-center justify-center px-[12px] relative rounded-[4px] shrink-0 hover:bg-muted transition-colors cursor-pointer"
            data-name="Button"
          >
            <div className="overflow-clip relative shrink-0 size-[16px]" data-name="Icon / user-round">
              <div className="absolute inset-[9.38%_13.54%]" data-name="Vector">
                <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 11.6667 13">
                  <g id="Vector">
                    <path d={svgPaths.p1bb8c500} fill="#60646C" />
                    <path d={svgPaths.p32fb3800} fill="#60646C" />
                  </g>
                </svg>
              </div>
            </div>
            <div className="flex flex-col justify-center leading-[0] not-italic relative shrink-0 text-[#60646c] text-[14px] whitespace-nowrap">
              <p className="leading-[20px]">{totalGuests} {totalGuests === 1 ? 'pessoa' : 'pessoas'}</p>
            </div>
          </button>
        </PopoverTrigger>
        <PopoverContent
          className="w-[320px] bg-white text-foreground border-border rounded-2xl shadow-[0px_4px_16px_0px_rgba(0,0,0,0.1),0px_3px_12px_0px_rgba(0,0,0,0.1),0px_2px_3px_0px_rgba(0,0,51,0.06)] p-4"
          align="center"
          sideOffset={24}
        >
          <GuestCounter
            label="Adultos"
            description="13 anos ou mais"
            value={adultos}
            min={1}
            onChange={setAdultos}
          />
          <div className="h-px bg-[#d9d9e0]" />
          <GuestCounter
            label="Crianças"
            description="De 2 a 12 anos"
            value={criancas}
            min={0}
            onChange={setCriancas}
          />
          <div className="h-px bg-[#d9d9e0]" />
          <GuestCounter
            label="Bebês"
            description="Menor de 2 anos"
            value={bebes}
            min={0}
            onChange={setBebes}
          />
        </PopoverContent>
      </Popover>
      <Divider />
      {/* Acomodação — campo ausente no header original */}
      <div className="content-stretch flex gap-[8px] h-[32px] items-center justify-center px-[12px] relative rounded-[4px] shrink-0" data-name="Button">
        <BedDouble size={16} color="#60646C" strokeWidth={1.5} />
        <div className="flex flex-col justify-center leading-[0] not-italic relative shrink-0 text-[#60646c] text-[14px] whitespace-nowrap">
          <p className="leading-[20px]">{rooms} {rooms === 1 ? 'acomodação' : 'acomodações'}</p>
        </div>
      </div>
      <Divider />
      {/* Noites */}
      <div className="content-stretch flex gap-[8px] h-[32px] items-center justify-center px-[12px] relative rounded-[4px] shrink-0" data-name="Button">
        <div className="overflow-clip relative shrink-0 size-[16px]" data-name="Icon / moon">
          <div className="absolute inset-[9.38%]" data-name="Vector">
            <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12.9999 12.9999">
              <path d={svgPaths.p19a9df00} fill="#60646C" id="Vector" />
            </svg>
          </div>
        </div>
        <div className="flex flex-col justify-center leading-[0] not-italic relative shrink-0 text-[#60646c] text-[14px] whitespace-nowrap">
          <p className="leading-[20px]">{nights} {nights === 1 ? 'noite' : 'noites'}</p>
        </div>
      </div>
    </div>
  );
}

function ContentContainer({ onEdit }: { onEdit?: () => void }) {
  return (
    <button 
      onClick={onEdit}
      className="bg-[#12a594] content-stretch flex items-center justify-center overflow-clip relative rounded-[9999px] shrink-0 size-[32px] hover:bg-[#0f8c7d] transition-colors" 
      data-name="content-container"
    >
      <div className="overflow-clip relative shrink-0 size-[16px]" data-name="Icon / pencil">
        <div className="absolute inset-[5.21%]" data-name="Vector">
          <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14.3333 14.3329">
            <g id="Vector">
              <path d={svgPaths.p295a2a80} fill="white" />
              <path d={svgPaths.p15a4cb80} fill="white" />
            </g>
          </svg>
        </div>
      </div>
    </button>
  );
}

function SearchContainer({ destination, dateRange, guests, adultos, criancas, bebes, rooms, nights, checkIn, checkOut, onEdit, onDatesChange, onGuestsChange, onDestinationChange }: { destination: string; dateRange: string; guests: number; adultos?: number; criancas?: number; bebes?: number; rooms: number; nights: number; checkIn?: string; checkOut?: string; onEdit?: () => void; onDatesChange?: (checkIn: string, checkOut: string) => void; onGuestsChange?: (adultos: number, criancas: number, bebes: number) => void; onDestinationChange?: (destination: string) => void }) {
  return (
    <div className="bg-[#fcfcfd] content-stretch flex gap-[16px] items-center px-[16px] py-[14px] relative rounded-[9999px] shadow-[0px_4px_16px_0px_rgba(0,0,0,0.1),0px_3px_12px_0px_rgba(0,0,0,0.1),0px_2px_3px_0px_rgba(0,0,51,0.06)] shrink-0" data-name="Search Container">
      <SearchFilters destination={destination} dateRange={dateRange} guests={guests} adultos={adultos} criancas={criancas} bebes={bebes} rooms={rooms} nights={nights} checkIn={checkIn} checkOut={checkOut} onDatesChange={onDatesChange} onGuestsChange={onGuestsChange} onDestinationChange={onDestinationChange} />
      <div className="bg-[rgba(255,255,255,0)] content-stretch flex flex-col items-start relative shrink-0" data-name="Icon Button">
        <ContentContainer onEdit={onEdit} />
      </div>
    </div>
  );
}

function ContentContainer1() {
  return (
    <div className="bg-[#f9f9fb] content-stretch flex items-center justify-center overflow-clip relative rounded-[9999px] shrink-0 size-[48px]" data-name="content-container">
      <div className="bg-[rgba(255,255,255,0)] relative shrink-0 size-[20px]" data-name="Objects / bell">
        <div className="absolute inset-[1%_13.33%_1.67%_13.33%]" data-name="Vector">
          <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14.6668 19.4661">
            <path clipRule="evenodd" d={svgPaths.p1cb983f0} fill="var(--color-accent, #008573)" fillRule="evenodd" id="Vector" />
          </svg>
        </div>
      </div>
    </div>
  );
}

export function SearchResultsHeader({ destination, dateRange, guests, adultos, criancas, bebes, rooms, nights, checkIn, checkOut, onEdit, onDatesChange, onGuestsChange, onDestinationChange }: SearchResultsHeaderProps) {
  return (
    <div className="content-stretch flex items-center justify-between p-[32px] relative size-full" data-name="Header">
      <BrandLogo />
      <SearchContainer destination={destination} dateRange={dateRange} guests={guests} adultos={adultos} criancas={criancas} bebes={bebes} rooms={rooms} nights={nights} checkIn={checkIn} checkOut={checkOut} onEdit={onEdit} onDatesChange={onDatesChange} onGuestsChange={onGuestsChange} onDestinationChange={onDestinationChange} />
      <div className="content-stretch flex gap-[12px] items-center relative shrink-0" data-name="User Actions">
        <div className="bg-[#12a594] content-stretch flex gap-[12px] h-[40px] items-center justify-center px-[16px] relative rounded-[9999px] shrink-0 hover:bg-[#0f8c7d] transition-colors cursor-pointer" data-name="Button">
          <div className="flex flex-col justify-center leading-[0] not-italic relative shrink-0 text-[16px] text-white whitespace-nowrap">
            <p className="leading-[24px]">Criar conta / Login</p>
          </div>
        </div>
        <div className="bg-[rgba(255,255,255,0)] content-stretch flex flex-col items-start relative shrink-0" data-name="Icon Button">
          <ContentContainer1 />
        </div>
      </div>
    </div>
  );
}
