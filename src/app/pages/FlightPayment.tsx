import { useState, useEffect } from "react";
import { useSearchParams, useNavigate } from "react-router";
import { Footer } from "../components/Footer";
import { Button } from "../components/ui/button";
import { Badge } from "../components/ui/badge";
import { Separator } from "../components/ui/separator";
import {
  ChevronLeft,
  ChevronDown,
  ChevronUp,
  Clock,
  Info,
  PlaneTakeoff,
  PlaneLanding,
  Plane,
} from "lucide-react";
import {
  FlightResultsHeader,
  type FlightResult,
  MOCK_FLIGHTS_IDA,
  MOCK_FLIGHTS_VOLTA,
} from "./FlightResults";

// ── Types ─────────────────────────────────────────────────────────────────────

interface PassengerFormData {
  nome: string;
  sobrenome: string;
  dataNascimento: string;
  nacionalidade: string;
  cpf: string;
}


// ── Helpers ───────────────────────────────────────────────────────────────────

function formatTimer(seconds: number): string {
  const m = Math.floor(seconds / 60);
  const s = seconds % 60;
  return `${String(m).padStart(2, "0")}:${String(s).padStart(2, "0")}`;
}

function formatFlightDuration(hours: number, mins: number): string {
  return `${hours}h${mins > 0 ? String(mins).padStart(2, "0") : ""}`;
}

function formatFlightDate(dateStr: string): string {
  if (!dateStr) return "";
  try {
    const d = new Date(dateStr + "T12:00:00");
    return d
      .toLocaleDateString("pt-BR", {
        day: "numeric",
        month: "short",
        weekday: "short",
      })
      .replace(/\./g, "");
  } catch {
    return dateStr;
  }
}

function formatPrice(price: number): string {
  return price.toLocaleString("pt-BR") + " Tribz";
}

// ── Passenger Form ────────────────────────────────────────────────────────────

function PassengerFormField({
  id,
  label,
  placeholder,
  value,
  onChange,
  hasDropdown = false,
}: {
  id: string;
  label: string;
  placeholder: string;
  value: string;
  onChange: (v: string) => void;
  hasDropdown?: boolean;
}) {
  return (
    <div className="w-full">
      <label htmlFor={id} className="block text-sm font-medium text-[#1c2024] leading-5 mb-2">
        {label}
      </label>
      {hasDropdown ? (
        <select
          id={id}
          value={value}
          onChange={(e) => onChange(e.target.value)}
          className="w-full h-8 px-1 border border-[#d9d9e0] rounded bg-[rgba(255,255,255,0.9)] text-sm text-[rgba(0,5,29,0.45)] leading-5"
        >
          <option value="">{placeholder}</option>
          <option value="Brasileiro">Brasileiro</option>
          <option value="Estrangeiro">Estrangeiro</option>
        </select>
      ) : (
        <input
          id={id}
          type="text"
          placeholder={placeholder}
          value={value}
          onChange={(e) => onChange(e.target.value)}
          className="w-full h-8 px-1 border border-[#d9d9e0] rounded bg-[rgba(255,255,255,0.9)] text-sm text-[rgba(0,5,29,0.45)] placeholder:text-[rgba(0,5,29,0.45)] leading-5"
        />
      )}
    </div>
  );
}

function PassengerForm({
  index,
  data,
  onChange,
}: {
  index: number;
  data: PassengerFormData;
  onChange: (data: PassengerFormData) => void;
}) {
  const update = (field: keyof PassengerFormData, value: string) => {
    onChange({ ...data, [field]: value });
  };
  const prefix = `adulto-${index}`;

  return (
    <div className="flex flex-col gap-[8px] items-start w-full">
      <span className="text-[18px] font-normal leading-[26px] tracking-[-0.04px] text-foreground">
        Adulto {index}
      </span>
      <div className="grid grid-cols-2 gap-x-[32px] gap-y-[16px] w-full">
        <PassengerFormField
          id={`${prefix}-nome`}
          label="Nome"
          placeholder="Digite o nome"
          value={data.nome}
          onChange={(v) => update("nome", v)}
        />
        <PassengerFormField
          id={`${prefix}-sobrenome`}
          label="Sobrenome"
          placeholder="Digite o sobrenome"
          value={data.sobrenome}
          onChange={(v) => update("sobrenome", v)}
        />
        <PassengerFormField
          id={`${prefix}-nascimento`}
          label="Data de Nascimento"
          placeholder="dd/mm/aaaa"
          value={data.dataNascimento}
          onChange={(v) => update("dataNascimento", v)}
        />
        <PassengerFormField
          id={`${prefix}-nacionalidade`}
          label="Nacionalidade"
          placeholder="Selecione a nacionalidade"
          value={data.nacionalidade}
          onChange={(v) => update("nacionalidade", v)}
          hasDropdown
        />
        <PassengerFormField
          id={`${prefix}-cpf`}
          label="CPF"
          placeholder="000.000.000-00"
          value={data.cpf}
          onChange={(v) => update("cpf", v)}
        />
      </div>
    </div>
  );
}

// ── Booking Flight Row ────────────────────────────────────────────────────────

function BookingFlightRow({
  flight,
  flightType,
  flightDate,
}: {
  flight: FlightResult;
  flightType: "Ida" | "Volta";
  flightDate: string;
}) {
  const isVolta = flightType === "Volta";
  const originCity = isVolta ? flight.destinationCity : flight.originCity;
  const originCode = isVolta ? flight.destinationCode : flight.originCode;
  const destCity = isVolta ? flight.originCity : flight.destinationCity;
  const destCode = isVolta ? flight.originCode : flight.destinationCode;
  const departTime = isVolta ? flight.arrivalTime : flight.departureTime;
  const arrivalTime = isVolta ? flight.departureTime : flight.arrivalTime;

  const formattedDate = formatFlightDate(flightDate);
  const duration = formatFlightDuration(flight.durationHours, flight.durationMins);
  const stops =
    flight.stops === 0
      ? "Direto"
      : `${flight.stops} parada${flight.stops > 1 ? "s" : ""}`;

  return (
    <div className="flex flex-col gap-[16px] items-start w-full">
      {/* Label + airline */}
      <div className="flex flex-col items-start">
        <span className="text-[16px] font-normal leading-[24px] tracking-[0px] text-[#60646c] whitespace-nowrap">
          {flightType} — {formattedDate}
        </span>
        <span className="text-[18px] font-normal leading-[26px] tracking-[-0.04px] text-foreground whitespace-nowrap">
          {flight.airline} · {flight.flightNumber}
        </span>
      </div>

      {/* Timeline row */}
      <div className="flex items-center justify-between w-full">
        {/* Origin */}
        <div className="flex flex-col gap-px items-end w-[120px]">
          <span className="text-[14px] font-medium leading-[20px] text-foreground text-right w-full">
            {originCity} ({originCode})
          </span>
          <span className="text-[12px] font-light leading-[16px] tracking-[0.04px] text-[#60646c] text-right w-full">
            {formattedDate}
          </span>
          <span className="text-[18px] font-medium leading-[26px] tracking-[-0.04px] text-[#60646c] whitespace-nowrap">
            {departTime}
          </span>
        </div>

        {/* Middle: icons + duration */}
        <div className="flex gap-[8px] items-center shrink-0">
          <div className="flex items-center justify-center size-[24px]">
            <PlaneTakeoff size={16} color="#60646c" strokeWidth={1.5} />
          </div>
          <div className="flex flex-col items-center justify-center shrink-0">
            <div className="w-[80px] h-[20px] flex items-center">
              <div className="w-full border-t border-dashed border-border" />
            </div>
            <div className="flex flex-col items-center">
              <span className="text-[12px] font-light leading-[16px] tracking-[0.04px] text-[#60646c] whitespace-nowrap">
                {duration}
              </span>
              <span className="text-[12px] font-medium leading-[16px] tracking-[0.04px] text-[#60646c] whitespace-nowrap">
                {stops}
              </span>
            </div>
          </div>
          <div className="flex items-center justify-center size-[24px]">
            <PlaneLanding size={16} color="#60646c" strokeWidth={1.5} />
          </div>
        </div>

        {/* Destination */}
        <div className="flex flex-col gap-px items-start w-[120px]">
          <span className="text-[14px] font-medium leading-[20px] text-foreground w-full">
            {destCity} ({destCode})
          </span>
          <span className="text-[12px] font-light leading-[16px] tracking-[0.04px] text-[#60646c] w-full">
            {formattedDate}
          </span>
          <span className="text-[18px] font-medium leading-[26px] tracking-[-0.04px] text-[#60646c] whitespace-nowrap">
            {arrivalTime}
          </span>
        </div>
      </div>

      {/* Badges — usando o componente Badge do DS com className override */}
      <div className="flex gap-[16px] items-start flex-wrap">
        <Badge className="bg-[rgba(0,71,241,0.07)] text-[rgba(0,43,183,0.77)] border-none rounded-none px-[6px] py-[2px] text-[12px] font-medium">
          Classe: Econômica
        </Badge>
        <Badge className="bg-[rgba(0,71,241,0.07)] text-[rgba(0,43,183,0.77)] border-none rounded-none px-[6px] py-[2px] text-[12px] font-medium">
          Bagagem: 1 mala 23kg
        </Badge>
      </div>
    </div>
  );
}

// ── Booking Widget ────────────────────────────────────────────────────────────

function BookingWidget({
  adults,
  tripType,
  idaFlight,
  voltaFlight,
  departDate,
  returnDate,
}: {
  adults: number;
  tripType: string;
  idaFlight: FlightResult | null;
  voltaFlight: FlightResult | null;
  departDate: string;
  returnDate: string;
}) {
  const isRoundTrip = tripType === "Ida e Volta";

  const pricePerAdult =
    (idaFlight?.totalPrice ?? 0) +
    (isRoundTrip ? (voltaFlight?.totalPrice ?? 0) : 0);
  const subtotal = pricePerAdult * adults;
  const taxes =
    (idaFlight?.taxes ?? 0) + (isRoundTrip ? (voltaFlight?.taxes ?? 0) : 0);
  const total = subtotal + taxes;

  const routeTitle = idaFlight
    ? `${idaFlight.originCity} (${idaFlight.originCode}) → ${idaFlight.destinationCity} (${idaFlight.destinationCode})`
    : "Origem → Destino";

  return (
    <div className="bg-[#fcfcfd] flex flex-col gap-[24px] items-start p-[16px] rounded-2xl shadow-[0px_4px_16px_0px_rgba(0,0,0,0.1),0px_3px_12px_0px_rgba(0,0,0,0.1),0px_2px_3px_0px_rgba(0,0,51,0.06)] w-full">
      {/* Header */}
      <div className="flex items-center opacity-90">
        <div className="flex items-center justify-center size-[40px]">
          <Plane size={18} color="#1c2024" strokeWidth={1.5} />
        </div>
        <span className="text-[24px] font-normal leading-[30px] tracking-[-0.1px] text-foreground">
          Aéreo
        </span>
      </div>

      {/* Route info */}
      <div className="flex flex-col gap-[4px] items-start w-full">
        <span className="text-[24px] font-normal leading-[30px] tracking-[-0.1px] text-foreground">
          {routeTitle}
        </span>
        <span className="text-[18px] font-light leading-[26px] tracking-[-0.04px] text-[#60646c] whitespace-nowrap">
          {isRoundTrip ? "Ida e Volta" : "Somente Ida"} · {adults}{" "}
          {adults === 1 ? "passageiro" : "passageiros"}
        </span>
      </div>

      <Separator />

      {/* Ida flight */}
      {idaFlight && (
        <BookingFlightRow
          flight={idaFlight}
          flightType="Ida"
          flightDate={departDate}
        />
      )}

      {/* Volta flight */}
      {isRoundTrip && voltaFlight && (
        <>
          <Separator />
          <BookingFlightRow
            flight={voltaFlight}
            flightType="Volta"
            flightDate={returnDate}
          />
        </>
      )}

      <Separator />

      {/* Price table */}
      <div className="flex flex-col gap-[16px] items-end w-full">
        <div className="flex flex-col gap-[8px] items-start w-full">
          {/* Header row */}
          <div className="flex gap-[24px] items-start w-full">
            <span className="flex-1 text-[14px] font-normal leading-[20px] text-foreground">
              Itens
            </span>
            <span className="w-[48px] text-[14px] font-normal leading-[20px] text-foreground">
              Qtd
            </span>
            <span className="w-[90px] text-[14px] font-normal leading-[20px] text-foreground">
              Preço
            </span>
            <span className="w-[90px] text-[14px] font-normal leading-[20px] text-foreground text-right">
              Total
            </span>
          </div>

          {/* Passenger rows */}
          {Array.from({ length: adults }, (_, i) => (
            <div
              key={i}
              className="flex gap-[24px] items-start py-[8px] border-b border-border w-full"
            >
              <span className="flex-1 text-[14px] font-light leading-[20px] text-[#60646c]">
                Passagem (1 adulto)
              </span>
              <span className="w-[48px] text-[14px] font-light leading-[20px] text-[#60646c]">
                1
              </span>
              <span className="w-[90px] text-[14px] font-light leading-[20px] text-[#60646c]">
                {formatPrice(pricePerAdult)}
              </span>
              <span className="w-[90px] text-[14px] font-light leading-[20px] text-[#60646c] text-right">
                {formatPrice(pricePerAdult)}
              </span>
            </div>
          ))}
        </div>

        {/* Summary */}
        <div className="flex flex-col gap-[8px] items-start w-[276px]">
          <div className="flex gap-[24px] items-start w-full">
            <span className="flex-1 text-[14px] font-normal leading-[20px] text-foreground">
              Subtotal
            </span>
            <span className="w-[90px] text-[14px] font-light leading-[20px] text-[#60646c] text-right">
              {formatPrice(subtotal)}
            </span>
          </div>
          <div className="flex gap-[24px] items-start w-full">
            <span className="flex-1 text-[14px] font-normal leading-[20px] text-foreground">
              Taxas
            </span>
            <span className="w-[90px] text-[14px] font-light leading-[20px] text-[#60646c] text-right">
              {formatPrice(taxes)}
            </span>
          </div>
          <Separator />
          <div className="flex gap-[24px] items-start w-full">
            <span className="flex-1 text-[16px] font-normal leading-[24px] text-foreground">
              Total Final
            </span>
            <span className="flex-1 text-[16px] font-normal leading-[24px] text-foreground text-right">
              {formatPrice(total)}
            </span>
          </div>
        </div>
      </div>

      {/* Callout */}
      <div className="bg-[rgba(0,0,85,0.02)] border border-[rgba(0,0,47,0.15)] flex gap-[8px] items-start overflow-hidden p-[12px] w-full">
        <div className="flex h-[20px] items-center shrink-0">
          <Info size={16} color="#60646c" strokeWidth={1.5} />
        </div>
        <span className="flex-1 text-[14px] font-normal leading-[20px] text-[#60646c]">
          Cancelamento gratuito antes de 19 de março
        </span>
      </div>
    </div>
  );
}

// ── Main Page ─────────────────────────────────────────────────────────────────

export default function FlightPayment() {
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();

  const origin = searchParams.get("origem") || "São Paulo";
  const destination = searchParams.get("destino") || "Brasília";
  const departDate = searchParams.get("ida") || "";
  const returnDate = searchParams.get("volta") || "";
  const adults = searchParams.get("adultos") || "1";
  const tripType = searchParams.get("tipo") || "Ida e Volta";
  const idaFlightId = searchParams.get("idaVoo") || "";
  const voltaFlightId = searchParams.get("voltaVoo") || "";

  const numAdults = parseInt(adults) || 1;
  const isRoundTrip = tripType === "Ida e Volta";

  const idaFlight =
    MOCK_FLIGHTS_IDA.find((f) => f.id === idaFlightId) || MOCK_FLIGHTS_IDA[0];
  const voltaFlight = isRoundTrip
    ? MOCK_FLIGHTS_VOLTA.find((f) => f.id === voltaFlightId) || MOCK_FLIGHTS_VOLTA[0]
    : null;

  // Countdown timer: 20 minutos
  const [timeLeft, setTimeLeft] = useState(20 * 60);
  useEffect(() => {
    if (timeLeft <= 0) return;
    const timer = setInterval(() => setTimeLeft((t) => t - 1), 1000);
    return () => clearInterval(timer);
  }, [timeLeft]);
  const timerIsWarning = timeLeft <= 5 * 60;

  // Accordion states
  const [personalDataOpen, setPersonalDataOpen] = useState(true);
  const [paymentMethodOpen, setPaymentMethodOpen] = useState(false);
  const [invoiceOpen, setInvoiceOpen] = useState(false);
  const [personalDataComplete, setPersonalDataComplete] = useState(false);
  const [paymentMethodComplete, setPaymentMethodComplete] = useState(false);
  const [invoiceComplete, setInvoiceComplete] = useState(false);

  // Payment state
  const [selectedPaymentMethod, setSelectedPaymentMethod] = useState("");
  const [tribzAmount, setTribzAmount] = useState(18500);

  // Passenger form state
  const emptyPassenger = (): PassengerFormData => ({
    nome: "", sobrenome: "", dataNascimento: "", nacionalidade: "", cpf: "",
  });
  const [passengers, setPassengers] = useState<PassengerFormData[]>(() =>
    Array.from({ length: numAdults }, emptyPassenger)
  );
  const updatePassenger = (index: number, data: PassengerFormData) => {
    setPassengers((prev) => prev.map((p, i) => (i === index ? data : p)));
  };

  const handleNextPersonalData = () => {
    setPersonalDataComplete(true);
    setPersonalDataOpen(false);
    setPaymentMethodOpen(true);
  };
  const handleNextPaymentMethod = () => {
    setPaymentMethodComplete(true);
    setPaymentMethodOpen(false);
    setInvoiceOpen(true);
  };
  const handleNextInvoice = () => {
    setInvoiceComplete(true);
    setInvoiceOpen(false);
  };

  const CheckIcon = () => (
    <div className="w-10 h-10 flex items-center justify-center flex-shrink-0">
      <svg className="w-4.5 h-4.5" fill="none" preserveAspectRatio="none" viewBox="0 0 15.8947 15.8948">
        <path clipRule="evenodd" d="M7.9474 0C3.55817 0 0 3.55817 0 7.9474C0 12.3365 3.55817 15.8948 7.9474 15.8948C12.3366 15.8948 15.8947 12.3365 15.8947 7.9474C15.8947 3.55817 12.3366 0 7.9474 0ZM1.14001 7.9474C1.14001 4.18778 4.18778 1.13999 7.9474 1.13999C11.707 1.13999 14.7547 4.18778 14.7547 7.9474C14.7547 11.707 11.707 14.7548 7.9474 14.7548C4.18778 14.7548 1.14001 11.707 1.14001 7.9474ZM11.1382 5.59283C11.3289 5.32184 11.2638 4.94756 10.9929 4.75685C10.7218 4.56615 10.3476 4.63125 10.1569 4.90225L6.77123 9.71339L5.37568 8.29202C5.14352 8.05557 4.76363 8.05208 4.52719 8.28424C4.29073 8.51639 4.28725 8.89628 4.51941 9.13273L6.41941 11.0679C6.54416 11.195 6.71891 11.26 6.89639 11.2455C7.07387 11.2311 7.23574 11.1385 7.33822 10.9928L11.1382 5.59283Z" fill="rgba(0,43,183,0.77)" fillRule="evenodd" />
      </svg>
    </div>
  );

  return (
    <div className="min-h-screen flex flex-col bg-[#f9f9fb]">
      {/* Header */}
      <FlightResultsHeader
        origin={origin}
        destination={destination}
        departDate={departDate}
        returnDate={returnDate}
        adults={adults}
        tripType={tripType}
        onEdit={() => navigate(`/resultados-aereo?${searchParams.toString()}`)}
      />

      {/* Main content */}
      <div className="flex-1 w-full max-w-[1440px] mx-auto px-8 py-8">
        {/* Back + Timer row */}
        <div className="flex items-center justify-between mb-8">
          <button
            onClick={() => navigate(-1)}
            className="flex items-center gap-3 text-[#60646c] hover:text-[#1c2024] transition-colors px-4 py-2 rounded-md"
          >
            <ChevronLeft size={16} strokeWidth={1.5} />
            <span className="text-base leading-6">Voltar para busca</span>
          </button>
          <div className={`flex items-center gap-2 px-2.5 py-1 rounded flex items-center gap-2 ${timerIsWarning ? "bg-[rgba(255,222,0,0.24)]" : "bg-[rgba(243,0,13,0.08)]"}`}>
            <Clock size={16} className={timerIsWarning ? "text-[#ab6400]" : "text-[rgba(196,0,6,0.83)]"} />
            <span className={`text-sm font-medium leading-5 ${timerIsWarning ? "text-[#ab6400]" : "text-[rgba(196,0,6,0.83)]"}`}>
              Oferta válida por {formatTimer(timeLeft)}
            </span>
          </div>
        </div>

        {/* Two-column layout */}
        <div className="flex gap-8 items-start">
          {/* Left column: Accordions */}
          <div className="flex-1 flex flex-col gap-4">

            {/* Dados pessoais */}
            <div className="border border-[#d9d9e0] rounded-2xl">
              <div className="p-4 flex flex-col gap-4">
                <button
                  onClick={() => setPersonalDataOpen(!personalDataOpen)}
                  className="flex items-center w-full"
                >
                  {personalDataComplete && <CheckIcon />}
                  <h2 className="flex-1 text-2xl text-[#1c2024] leading-[30px] tracking-[-0.1px] text-left">Dados pessoais</h2>
                  {personalDataOpen
                    ? <ChevronUp size={16} strokeWidth={1.5} className="shrink-0 text-muted-foreground" />
                    : <ChevronDown size={16} strokeWidth={1.5} className="shrink-0 text-muted-foreground" />}
                </button>
                {personalDataOpen && (
                  <>
                    <div className="flex flex-col gap-8">
                      {passengers.map((passenger, i) => (
                        <PassengerForm
                          key={i}
                          index={i + 1}
                          data={passenger}
                          onChange={(data) => updatePassenger(i, data)}
                        />
                      ))}
                    </div>
                    <button
                      onClick={handleNextPersonalData}
                      className="bg-primary text-primary-foreground px-4 h-10 rounded-full font-medium text-base leading-6 w-60 hover:opacity-90 transition-opacity"
                    >
                      Próximo
                    </button>
                  </>
                )}
              </div>
            </div>

            {/* Como você quer pagar */}
            <div className="border border-[#d9d9e0] rounded-2xl">
              <div className="p-4 flex flex-col gap-4">
                <button
                  onClick={() => setPaymentMethodOpen(!paymentMethodOpen)}
                  className="flex items-center w-full"
                >
                  {paymentMethodComplete && <CheckIcon />}
                  <h2 className="flex-1 text-2xl text-[#1c2024] leading-[30px] tracking-[-0.1px] text-left">Como você quer pagar?</h2>
                  {paymentMethodOpen
                    ? <ChevronUp size={16} strokeWidth={1.5} className="shrink-0 text-muted-foreground" />
                    : <ChevronDown size={16} strokeWidth={1.5} className="shrink-0 text-muted-foreground" />}
                </button>
                {paymentMethodOpen && (
                  <>
                    <div className="mb-4">
                      <h3 className="text-base text-[#1c2024] leading-6 mb-4">Destaques</h3>
                      <div className="border border-[#d9d9e0] rounded-lg p-4">
                        <label className="flex items-center gap-4 cursor-pointer">
                          <div className="w-4 h-4 rounded-full border-2 border-[rgba(0,6,46,0.2)] bg-white flex items-center justify-center flex-shrink-0">
                            {selectedPaymentMethod === "pix" && <div className="w-2.5 h-2.5 rounded-full bg-[#12a594]"></div>}
                          </div>
                          <input type="radio" name="fp-payment" value="pix" checked={selectedPaymentMethod === "pix"} onChange={(e) => setSelectedPaymentMethod(e.target.value)} className="sr-only" />
                          <span className="text-xs text-[#1c2024] leading-4 tracking-[0.04px]">Pix</span>
                        </label>
                      </div>
                    </div>
                    <div className="mb-4">
                      <h3 className="text-base text-[#1c2024] leading-6 mb-4">Mais usados</h3>
                      <div className="space-y-4">
                        <div className="border border-[#d9d9e0] rounded-lg p-4">
                          <label className="flex items-center gap-4 cursor-pointer">
                            <div className="w-4 h-4 rounded-full border-2 border-[rgba(0,6,46,0.2)] bg-white flex items-center justify-center flex-shrink-0">
                              {selectedPaymentMethod === "credit" && <div className="w-2.5 h-2.5 rounded-full bg-[#12a594]"></div>}
                            </div>
                            <input type="radio" name="fp-payment" value="credit" checked={selectedPaymentMethod === "credit"} onChange={(e) => setSelectedPaymentMethod(e.target.value)} className="sr-only" />
                            <span className="text-xs text-[#1c2024] leading-4 tracking-[0.04px]">Cartão de Crédito</span>
                          </label>
                        </div>
                        <div className="border border-[#d9d9e0] rounded-lg p-4">
                          <label className="flex items-center gap-4 cursor-pointer">
                            <div className="w-4 h-4 rounded-full border-2 border-[rgba(0,6,46,0.2)] bg-white flex items-center justify-center flex-shrink-0">
                              {selectedPaymentMethod === "debit" && <div className="w-2.5 h-2.5 rounded-full bg-[#12a594]"></div>}
                            </div>
                            <input type="radio" name="fp-payment" value="debit" checked={selectedPaymentMethod === "debit"} onChange={(e) => setSelectedPaymentMethod(e.target.value)} className="sr-only" />
                            <span className="text-xs text-[#1c2024] leading-4 tracking-[0.04px]">2 cartões de crédito</span>
                          </label>
                        </div>
                      </div>
                    </div>
                    <div className="mb-4">
                      <h3 className="text-base text-[#1c2024] leading-6 mb-4">Pontos</h3>
                      <div className="border border-[#d9d9e0] rounded-lg p-4 space-y-4">
                        <label className="flex items-center gap-4 cursor-pointer">
                          <div className="w-4 h-4 rounded-full border-2 border-[rgba(0,6,46,0.2)] bg-white flex items-center justify-center flex-shrink-0">
                            {selectedPaymentMethod === "tribz" && <div className="w-2.5 h-2.5 rounded-full bg-[#12a594]"></div>}
                          </div>
                          <input type="radio" name="fp-payment" value="tribz" checked={selectedPaymentMethod === "tribz"} onChange={(e) => setSelectedPaymentMethod(e.target.value)} className="sr-only" />
                          <span className="text-xs text-[#1c2024] leading-4 tracking-[0.04px]">Tribz</span>
                        </label>
                        <label className="flex items-center gap-4 cursor-pointer">
                          <div className="w-4 h-4 rounded-full border-2 border-[rgba(0,6,46,0.2)] bg-white flex items-center justify-center flex-shrink-0">
                            {selectedPaymentMethod === "tribz-card" && <div className="w-2.5 h-2.5 rounded-full bg-[#12a594]"></div>}
                          </div>
                          <input type="radio" name="fp-payment" value="tribz-card" checked={selectedPaymentMethod === "tribz-card"} onChange={(e) => setSelectedPaymentMethod(e.target.value)} className="sr-only" />
                          <span className="text-xs text-[#1c2024] leading-4 tracking-[0.04px]">Tribz + Cartão</span>
                        </label>
                      </div>
                    </div>
                    {selectedPaymentMethod === "tribz-card" && (
                      <div className="mb-4 border border-[#d9d9e0] rounded-2xl p-4">
                        <h3 className="text-lg text-[#1c2024] leading-[26px] tracking-[-0.04px] mb-4">Complete com os dados do cartão</h3>
                        <div className="mb-6">
                          <h4 className="text-base text-[#1c2024] leading-6 mb-3">Como você quer pagar?</h4>
                          <div className="mb-4">
                            <label className="block text-sm text-[#1c2024] leading-5 mb-2">Resumo da compra</label>
                            <div className="flex gap-4 mb-2">
                              <div className="flex-1">
                                <div className="text-xs text-[#60646c] leading-4 mb-1">Tribz</div>
                                <div className="text-2xl font-semibold text-[#1c2024] leading-8">{tribzAmount.toLocaleString('pt-BR')} tribz</div>
                              </div>
                              <div className="flex-1">
                                <div className="text-xs text-[#60646c] leading-4 mb-1 text-right">+</div>
                                <div className="text-2xl font-semibold text-[#1c2024] leading-8 text-right">R$ {(1750.68).toLocaleString('pt-BR')}</div>
                              </div>
                            </div>
                            <div className="text-xs text-[#60646c] leading-4">Nos cartões 10.000 tribz</div>
                          </div>
                          <div className="mb-4">
                            <input type="range" min="0" max="37000" step="100" value={tribzAmount} onChange={(e) => setTribzAmount(parseInt(e.target.value))} className="w-full h-2 bg-[#e5e7eb] rounded-lg appearance-none cursor-pointer" style={{ background: `linear-gradient(to right, #008573 0%, #008573 ${(tribzAmount / 37000) * 100}%, #e5e7eb ${(tribzAmount / 37000) * 100}%, #e5e7eb 100%)` }} />
                          </div>
                          <div className="mb-4">
                            <label className="block text-sm text-[#1c2024] leading-5 mb-2">Total</label>
                            <div className="text-2xl font-semibold text-[#1c2024] leading-8">{(37000).toLocaleString('pt-BR')} tribz</div>
                          </div>
                        </div>
                        <div className="grid grid-cols-2 gap-x-8 gap-y-4 mb-6">
                          <div><label className="block text-sm font-medium text-[#1c2024] leading-5 mb-2">Número do cartão</label><input type="text" placeholder="0000 0000 0000 0000" className="w-full h-8 px-1 border border-[#d9d9e0] rounded bg-[rgba(255,255,255,0.9)] text-sm leading-5" /></div>
                          <div><label className="block text-sm font-medium text-[#1c2024] leading-5 mb-2">Titular</label><input type="text" placeholder="Como aparece no cartão" className="w-full h-8 px-1 border border-[#d9d9e0] rounded bg-[rgba(255,255,255,0.9)] text-sm leading-5" /></div>
                          <div><label className="block text-sm font-medium text-[#1c2024] leading-5 mb-2">Vencimento</label><input type="text" placeholder="MM/AA" className="w-full h-8 px-1 border border-[#d9d9e0] rounded bg-[rgba(255,255,255,0.9)] text-sm leading-5" /></div>
                          <div><label className="block text-sm font-medium text-[#1c2024] leading-5 mb-2">Código de segurança</label><input type="text" placeholder="321" className="w-full h-8 px-1 border border-[#d9d9e0] rounded bg-[rgba(255,255,255,0.9)] text-sm leading-5" /></div>
                          <div className="col-span-2"><label className="block text-sm font-medium text-[#1c2024] leading-5 mb-2">CPF</label><input type="text" placeholder="000.000.000-00" className="w-full h-8 px-1 border border-[#d9d9e0] rounded bg-[rgba(255,255,255,0.9)] text-sm leading-5" /></div>
                        </div>
                        <div className="mb-4">
                          <h4 className="text-base text-[#1c2024] leading-6 mb-3">Em quantas parcelas você quer pagar?</h4>
                          <div className="space-y-3">
                            {[{ label: "À vista (R$ 1.827)", value: "1x" }, { label: "2 x sem juros de R$ 913", value: "2x" }, { label: "3 x sem juros de R$ 627", value: "3x" }, { label: "4 x com juros de R$ 595", value: "4x" }, { label: "5 x com juros de R$ 578", value: "5x" }, { label: "6 x com juros de R$ 540", value: "6x" }].map((option) => (
                              <label key={option.value} className="flex items-center gap-3 cursor-pointer">
                                <div className="w-5 h-5 rounded-full border-2 border-[rgba(0,6,46,0.2)] bg-white flex items-center justify-center flex-shrink-0"><div className="w-3 h-3 rounded-full bg-white"></div></div>
                                <input type="radio" name="fp-installment" value={option.value} className="sr-only" />
                                <span className="text-base text-[#1c2024] leading-6">{option.label}</span>
                              </label>
                            ))}
                          </div>
                        </div>
                      </div>
                    )}
                    <button onClick={handleNextPaymentMethod} className="bg-primary text-primary-foreground px-4 h-10 rounded-full font-medium text-base leading-6 w-60 hover:opacity-90 transition-opacity">
                      Próximo
                    </button>
                  </>
                )}
              </div>
            </div>

            {/* Em nome de quem emitimos a nota fiscal */}
            <div className="border border-[#d9d9e0] rounded-2xl">
              <div className="p-4 flex flex-col gap-4">
                <button
                  onClick={() => setInvoiceOpen(!invoiceOpen)}
                  className="flex items-center w-full"
                >
                  {invoiceComplete && <CheckIcon />}
                  <h2 className="flex-1 text-2xl text-[#1c2024] leading-[30px] tracking-[-0.1px] text-left">Em nome de quem emitimos a nota fiscal</h2>
                  {invoiceOpen
                    ? <ChevronUp size={16} strokeWidth={1.5} className="shrink-0 text-muted-foreground" />
                    : <ChevronDown size={16} strokeWidth={1.5} className="shrink-0 text-muted-foreground" />}
                </button>
                {invoiceOpen && (
                  <>
                    <div className="mb-4">
                      <h3 className="text-base text-[#1c2024] leading-6 mb-2">Emissão fiscal</h3>
                      <div className="grid grid-cols-2 gap-x-8 gap-y-4 mb-4">
                        <div>
                          <label className="block text-sm font-medium text-[#1c2024] leading-5 mb-2">Tipo de Cadastro</label>
                          <select className="w-full h-8 px-1 border border-[#d9d9e0] rounded bg-[rgba(255,255,255,0.9)] text-sm leading-5">
                            <option>Pessoa Física</option>
                            <option>Pessoa Jurídica</option>
                          </select>
                        </div>
                        <div>
                          <label className="block text-sm font-medium text-[#1c2024] leading-5 mb-2">Nome completo</label>
                          <input type="text" placeholder="Digite o nome completo" className="w-full h-8 px-1 border border-[#d9d9e0] rounded bg-[rgba(255,255,255,0.9)] text-sm text-[rgba(0,5,29,0.45)] placeholder:text-[rgba(0,5,29,0.45)] leading-5" />
                        </div>
                        <div className="col-span-2">
                          <label className="block text-sm font-medium text-[#1c2024] leading-5 mb-2">CPF</label>
                          <input type="text" placeholder="000.000.000-00" className="w-full h-8 px-1 border border-[#d9d9e0] rounded bg-[rgba(255,255,255,0.9)] text-sm leading-5" />
                        </div>
                      </div>
                    </div>
                    <button onClick={handleNextInvoice} className="bg-primary text-primary-foreground px-4 h-10 rounded-full font-medium text-base leading-6 w-60 hover:opacity-90 transition-opacity">
                      Próximo
                    </button>
                  </>
                )}
              </div>
            </div>

            {/* Efetuar Reserva */}
            <button
              onClick={() => navigate("/confirmacao-aereo")}
              className="bg-primary text-primary-foreground px-4 h-10 rounded-full font-medium text-base leading-6 w-60 hover:opacity-90 transition-opacity"
            >
              Efetuar Reserva
            </button>
          </div>

          {/* Right column: Booking Widget — não alterado */}
          <div className="w-[480px] shrink-0 sticky top-8">
            <BookingWidget
              adults={numAdults}
              tripType={tripType}
              idaFlight={idaFlight}
              voltaFlight={voltaFlight}
              departDate={departDate}
              returnDate={returnDate}
            />
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}
