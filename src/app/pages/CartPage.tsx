import { useEffect, useState } from "react"
import { useNavigate } from "react-router"
import {
  BedDouble,
  Building2,
  Calendar,
  Car,
  ChevronLeft,
  Clock,
  PlaneLanding,
  PlaneTakeoff,
  Trash2,
  User,
} from "lucide-react"
import { BrandLogo, UserActions } from "../components/Header"
import { Separator } from "../components/ui/separator"
import { useCart, type HotelCartItem, type FlightCartItem, type CartItem } from "../../lib/cartContext"
import { cartAnalytics } from "../../lib/analytics"

// ---------------------------------------------------------------------------
// Countdown hook
// ---------------------------------------------------------------------------

function useCountdown(expiresAt: number) {
  const [remaining, setRemaining] = useState(() => Math.max(0, expiresAt - Date.now()))

  useEffect(() => {
    const id = setInterval(() => {
      setRemaining(Math.max(0, expiresAt - Date.now()))
    }, 1000)
    return () => clearInterval(id)
  }, [expiresAt])

  const mm = String(Math.floor(remaining / 60000)).padStart(2, "0")
  const ss = String(Math.floor((remaining % 60000) / 1000)).padStart(2, "0")
  return { display: `${mm}:${ss}`, expired: remaining === 0 }
}

// ---------------------------------------------------------------------------
// Countdown badge (uses the first item's expiry)
// ---------------------------------------------------------------------------

function CountdownBadge({ expiresAt }: { expiresAt: number }) {
  const { display, expired } = useCountdown(expiresAt)
  return (
    <div
      className={`flex items-center gap-1 px-3 py-1 rounded-full text-[12px] font-medium ${
        expired ? "bg-[rgba(243,0,13,0.08)] text-[rgba(196,0,6,0.83)]" : "bg-[rgba(255,222,0,0.24)] text-[#ab6400]"
      }`}
    >
      <Clock size={12} strokeWidth={1.5} />
      {expired ? "Oferta expirada" : `Oferta válida por ${display}`}
    </div>
  )
}

// ---------------------------------------------------------------------------
// Hotel card
// ---------------------------------------------------------------------------

function hotelQualityLabel(rating: number): string {
  if (rating >= 9) return "Excepcional"
  if (rating >= 8) return "Ótimo"
  if (rating >= 7) return "Muito bom"
  if (rating >= 6) return "Bom"
  return "Confortável"
}

function formatHotelDate(dateStr: string): string {
  if (!dateStr) return "—"
  const [y, m, d] = dateStr.split("-").map(Number)
  return `${String(d).padStart(2, "0")} ${MONTHS_SHORT[m - 1]} ${y}`
}

function HotelCard({ item, onRemove }: { item: HotelCartItem; onRemove: () => void }) {
  const adultos = parseInt(item.adultos) || 1
  const quartos = parseInt(item.quarto) || 1
  const checkInFmt = formatHotelDate(item.checkIn)
  const checkOutFmt = formatHotelDate(item.checkOut)
  const qualityLabel = hotelQualityLabel(item.hotelRating)

  return (
    <div className="bg-white rounded-2xl p-4 flex flex-col gap-4 shadow-[0px_4px_16px_0px_rgba(0,0,0,0.1),0px_3px_12px_0px_rgba(0,0,0,0.1),0px_2px_3px_0px_rgba(0,0,51,0.06)]">
      {/* Header row */}
      <div className="flex items-start gap-3">
        {/* Thumbnail */}
        <div className="size-[64px] shrink-0 bg-[rgba(0,0,51,0.06)] flex items-center justify-center overflow-hidden">
          <BedDouble size={24} strokeWidth={1.5} className="text-muted-foreground" />
        </div>

        {/* Hotel info */}
        <div className="flex flex-col gap-1 flex-1 min-w-0">
          <p className="text-[20px] font-medium text-foreground leading-7 tracking-[-0.08px]">{item.hotelName}</p>
          <div className="flex items-center gap-[6px]">
            <span className="text-[12px] font-medium bg-primary text-white px-[6px] py-[2px] rounded-[4px] shrink-0">
              {item.hotelRating.toFixed(1)}
            </span>
            <span className="text-[14px] text-muted-foreground leading-5 shrink-0">{qualityLabel}</span>
            <div className="w-px h-4 bg-border shrink-0" />
            <span className="text-[14px] text-muted-foreground leading-5">{item.hotelCity}</span>
          </div>
        </div>

        {/* Remove button */}
        <button
          onClick={onRemove}
          className="flex items-center justify-center size-[32px] rounded-full border border-[rgba(0,8,48,0.27)] hover:bg-muted transition-colors shrink-0"
        >
          <Trash2 size={14} strokeWidth={1.5} className="text-foreground" />
        </button>
      </div>

      <Separator />

      {/* Room details + price */}
      <div className="flex items-end gap-4">
        <div className="flex flex-col gap-3 flex-1 min-w-0">
          <p className="text-[16px] font-medium text-foreground leading-6">{item.roomName}</p>

          {/* Amenities */}
          <div className="flex items-center gap-[9px] flex-wrap">
            {item.hasFreeCancel && (
              <span className="text-[12px] font-medium px-[6px] py-[2px] rounded-[4px] bg-[rgba(0,164,51,0.1)] text-[rgba(0,113,63,0.87)]">
                Cancelamento Grátis
              </span>
            )}
            {item.hasFreeCancel && item.hasBreakfast && (
              <div className="w-px h-4 bg-border shrink-0" />
            )}
            {item.hasBreakfast && (
              <span className="text-[14px] text-muted-foreground leading-5">Café da manhã</span>
            )}
          </div>

          {/* Date + guests */}
          <div className="flex items-center gap-[9px] flex-wrap">
            <span className="flex items-center gap-[6px] text-[14px] text-muted-foreground leading-5">
              <Calendar size={14} strokeWidth={1.5} />
              {checkInFmt} - {checkOutFmt}
            </span>
            <div className="w-px h-4 bg-border shrink-0" />
            <span className="flex items-center gap-[6px] text-[14px] text-muted-foreground leading-5">
              <User size={14} strokeWidth={1.5} />
              {adultos} {adultos === 1 ? "adulto" : "adultos"} em {quartos} {quartos === 1 ? "quarto" : "quartos"}
            </span>
          </div>
        </div>

        {/* Price */}
        <p className="text-[24px] font-normal text-foreground leading-[30px] tracking-[-0.1px] text-right w-[101px] shrink-0">
          {item.currency} {item.price}
        </p>
      </div>
    </div>
  )
}

// ---------------------------------------------------------------------------
// Flight card helpers
// ---------------------------------------------------------------------------

const MONTHS_SHORT = ["Jan","Fev","Mar","Abr","Mai","Jun","Jul","Ago","Set","Out","Nov","Dez"]
const WEEKDAYS_SHORT = ["Dom","Seg","Ter","Qua","Qui","Sex","Sáb"]

function formatFlightDate(dateStr: string): string {
  if (!dateStr) return "—"
  const [y, m, d] = dateStr.split("-").map(Number)
  const date = new Date(y, m - 1, d)
  return `${d} ${MONTHS_SHORT[m - 1]}, ${WEEKDAYS_SHORT[date.getDay()]}`
}

function formatDuration(h: number, m: number): string {
  return `${h}h${String(m).padStart(2, "0")}`
}

function FlightLeg({
  label,
  originCode,
  destCode,
  date,
  departTime,
  arrivalTime,
  duration,
  stops,
}: {
  label: string
  originCode: string
  destCode: string
  date: string
  departTime: string
  arrivalTime: string
  duration: string
  stops: number
}) {
  return (
    <div className="flex flex-col gap-4 flex-1 min-w-0">
      <p className="text-[14px] text-muted-foreground leading-5">{label}</p>
      <div className="flex items-center gap-3">
        {/* Origin */}
        <div className="flex flex-col items-end gap-px shrink-0">
          <p className="text-[12px] font-medium text-foreground leading-4 tracking-[0.04px] w-[48px] text-right">{originCode}</p>
          <p className="text-[12px] font-light text-muted-foreground leading-4 tracking-[0.04px] w-[80px] text-right">{date}</p>
          <p className="text-[16px] font-medium text-muted-foreground leading-6 text-right">{departTime}</p>
        </div>

        {/* Route visualization */}
        <div className="flex items-center gap-2 shrink-0">
          <PlaneTakeoff size={16} strokeWidth={1.5} className="text-muted-foreground" />
          <div className="flex flex-col items-center gap-0.5">
            <div className="w-[60px] h-px bg-[rgba(0,0,47,0.15)]" />
            <p className="text-[12px] font-light text-muted-foreground leading-4 tracking-[0.04px]">{duration}</p>
            <p className="text-[12px] font-medium text-muted-foreground leading-4 tracking-[0.04px]">
              {stops === 0 ? "Direto" : `${stops} parada${stops > 1 ? "s" : ""}`}
            </p>
          </div>
          <PlaneLanding size={16} strokeWidth={1.5} className="text-muted-foreground" />
        </div>

        {/* Destination */}
        <div className="flex flex-col items-start gap-px shrink-0">
          <p className="text-[12px] font-medium text-foreground leading-4 tracking-[0.04px] w-[48px]">{destCode}</p>
          <p className="text-[12px] font-light text-muted-foreground leading-4 tracking-[0.04px] w-[80px]">{date}</p>
          <p className="text-[16px] font-medium text-muted-foreground leading-6">{arrivalTime}</p>
        </div>
      </div>
    </div>
  )
}

// ---------------------------------------------------------------------------
// Flight card
// ---------------------------------------------------------------------------

function FlightCard({ item, onRemove }: { item: FlightCartItem; onRemove: () => void }) {
  const isRoundTrip = item.tripType !== "somente_ida" && !!item.returnDate
  const passengers = parseInt(item.passengers)

  return (
    <div className="bg-white rounded-2xl p-4 flex flex-col gap-4 shadow-[0px_4px_16px_0px_rgba(0,0,0,0.1),0px_3px_12px_0px_rgba(0,0,0,0.1),0px_2px_3px_0px_rgba(0,0,51,0.06)]">
      {/* Header */}
      <div className="flex items-start justify-between gap-4">
        <div className="flex flex-col gap-[6px]">
          <p className="text-[20px] font-medium text-foreground leading-7 tracking-[-0.08px]">
            Voo para {item.destinationCode || item.destination}
          </p>
          <div className="flex items-center gap-[9px]">
            <p className="text-[14px] text-muted-foreground leading-5">
              {isRoundTrip ? "Ida e Volta" : "Somente Ida"}
            </p>
            <div className="w-px h-4 bg-border" />
            <p className="text-[14px] text-muted-foreground leading-5">
              {passengers} {passengers === 1 ? "pessoa" : "pessoas"}
            </p>
          </div>
        </div>
        <button
          onClick={onRemove}
          className="flex items-center justify-center size-[32px] rounded-full border border-[rgba(0,8,48,0.27)] hover:bg-muted transition-colors shrink-0"
        >
          <Trash2 size={14} strokeWidth={1.5} className="text-foreground" />
        </button>
      </div>

      <Separator />

      {/* Body */}
      <div className="flex items-end gap-4">
        <div className="flex flex-col gap-[14px] flex-1 min-w-0">
          {/* Legs */}
          <div className="flex gap-4 items-start">
            <FlightLeg
              label="Voo de Ida"
              originCode={item.originCode || item.origin.slice(0, 3).toUpperCase()}
              destCode={item.destinationCode || item.destination.slice(0, 3).toUpperCase()}
              date={formatFlightDate(item.departDate)}
              departTime={item.departureTime}
              arrivalTime={item.arrivalTime}
              duration={formatDuration(item.durationHours, item.durationMins)}
              stops={item.stops}
            />
            {isRoundTrip && (
              <>
                <div className="w-px self-stretch bg-border shrink-0" />
                <FlightLeg
                  label="Voo de Volta"
                  originCode={item.returnOriginCode || item.destinationCode || ""}
                  destCode={item.returnDestinationCode || item.originCode || ""}
                  date={formatFlightDate(item.returnDate)}
                  departTime={item.returnDepartureTime || ""}
                  arrivalTime={item.returnArrivalTime || ""}
                  duration={formatDuration(item.returnDurationHours || 0, item.returnDurationMins || 0)}
                  stops={item.returnStops ?? 0}
                />
              </>
            )}
          </div>

          {/* Badges */}
          <div className="flex gap-[14px] flex-wrap">
            <span className="text-[12px] font-medium px-[6px] py-[2px] bg-[rgba(0,71,241,0.07)] text-[rgba(0,43,183,0.77)] tracking-[0.04px] leading-4">
              Classe: {item.tarifa.charAt(0).toUpperCase() + item.tarifa.slice(1)}
            </span>
            {item.hasCheckedBag && (
              <span className="text-[12px] font-medium px-[6px] py-[2px] bg-[rgba(0,71,241,0.07)] text-[rgba(0,43,183,0.77)] tracking-[0.04px] leading-4">
                Bagagem: 1 mala 23kg
              </span>
            )}
          </div>
        </div>

        {/* Price */}
        <p className="text-[24px] font-normal text-foreground leading-[30px] tracking-[-0.1px] text-right w-[101px] shrink-0">
          {item.currency} {item.price}
        </p>
      </div>
    </div>
  )
}

// ---------------------------------------------------------------------------
// Cross-sell section
// ---------------------------------------------------------------------------

function CrossSellSection({ items }: { items: CartItem[] }) {
  const navigate = useNavigate()
  const hasHotel = items.some((i) => i.type === "hotel")
  const hasFlight = items.some((i) => i.type === "flight")

  if (hasHotel && hasFlight) return null

  return (
    <div className="flex flex-col gap-3">
      <p className="text-[14px] font-medium text-foreground">Adicione mais serviços</p>
      <div className="flex gap-3">
        {!hasHotel && (
          <div className="border border-border rounded-lg flex flex-col gap-4 p-4 flex-1">
            <div className="flex items-center gap-2">
              <BedDouble size={18} strokeWidth={1.5} className="text-primary" />
              <p className="text-[14px] font-medium text-foreground">Hospedagem</p>
            </div>
            <p className="text-[13px] text-muted-foreground">Adicione um hotel à sua viagem</p>
            <button
              onClick={() => navigate("/resultados")}
              className="bg-primary text-white rounded-full h-[32px] px-3 text-[14px] font-medium hover:opacity-90 transition-opacity"
            >
              Ver hospedagem
            </button>
          </div>
        )}
        {!hasFlight && (
          <div className="border border-border rounded-lg flex flex-col gap-4 p-4 flex-1">
            <div className="flex items-center gap-2">
              <PlaneTakeoff size={18} strokeWidth={1.5} className="text-primary" />
              <p className="text-[14px] font-medium text-foreground">Passagens aéreas</p>
            </div>
            <p className="text-[13px] text-muted-foreground">Adicione um voo à sua viagem</p>
            <button
              onClick={() => navigate("/resultados-aereo")}
              className="bg-primary text-white rounded-full h-[32px] px-3 text-[14px] font-medium hover:opacity-90 transition-opacity"
            >
              Ver passagens
            </button>
          </div>
        )}
      </div>
    </div>
  )
}

// ---------------------------------------------------------------------------
// Summary card
// ---------------------------------------------------------------------------

function CartSummaryCard({
  items,
  onCheckout,
}: {
  items: CartItem[]
  onCheckout: () => void
}) {
  const subtotal = items.reduce(
    (sum, i) => sum + parseFloat(i.price.replace(/\./g, "").replace(",", ".")),
    0
  )
  const taxes = subtotal * 0.1
  const total = subtotal + taxes
  const currency = items[0]?.currency || "Tribz"
  const fmt = (n: number) => n.toLocaleString("pt-BR", { minimumFractionDigits: 0, maximumFractionDigits: 0 })

  return (
    <div className="bg-white rounded-2xl p-6 flex flex-col gap-4 shadow-[0px_4px_16px_0px_rgba(0,0,0,0.1),0px_3px_12px_0px_rgba(0,0,0,0.1),0px_2px_3px_0px_rgba(0,0,51,0.06)]">
      <div className="flex flex-col gap-3">
        {items.map((item) => (
          <div key={item.id} className="flex justify-between text-[14px]">
            <span className="text-muted-foreground capitalize">
              {item.type === "hotel" ? (item as HotelCartItem).hotelName : `${(item as FlightCartItem).origin} → ${(item as FlightCartItem).destination}`}
            </span>
            <span className="font-medium text-foreground">{item.price}</span>
          </div>
        ))}
      </div>

      <Separator />

      <div className="flex flex-col gap-2">
        <div className="flex justify-between text-[14px]">
          <span className="text-muted-foreground">Subtotal</span>
          <span className="text-foreground">{fmt(subtotal)} {currency}</span>
        </div>
        <div className="flex justify-between text-[14px]">
          <span className="text-muted-foreground">Taxas e encargos</span>
          <span className="text-foreground">{fmt(taxes)} {currency}</span>
        </div>
      </div>

      <Separator />

      <div className="flex justify-between">
        <span className="text-[16px] font-medium text-foreground">Total</span>
        <div className="text-right">
          <p className="text-[24px] font-medium text-foreground leading-[30px]">{fmt(total)}</p>
          <p className="text-[12px] text-muted-foreground">{currency}</p>
        </div>
      </div>

      <div className="bg-[rgba(0,164,51,0.1)] rounded-lg p-3">
        <p className="text-[12px] text-[rgba(0,113,63,0.87)]">
          Os itens com cancelamento grátis podem ser cancelados sem cobrança até o prazo indicado.
        </p>
      </div>

      <button
        onClick={onCheckout}
        className="bg-primary text-white rounded-full h-10 w-full text-[14px] font-medium hover:opacity-90 transition-opacity"
      >
        Finalizar Compra
      </button>
    </div>
  )
}

// ---------------------------------------------------------------------------
// Service card (empty state)
// ---------------------------------------------------------------------------

function ServiceCard({
  icon,
  title,
  description,
  buttonLabel,
  onClick,
}: {
  icon: React.ReactNode
  title: string
  description: string
  buttonLabel: string
  onClick: () => void
}) {
  return (
    <div className="border border-border rounded-lg flex flex-col gap-6 p-4 flex-1 items-start">
      <div className="flex flex-col gap-4 w-full">
        <div className="flex gap-2 items-start w-full">
          <div className="bg-[rgba(0,198,157,0.12)] rounded-full size-[24px] flex items-center justify-center shrink-0">
            {icon}
          </div>
          <p className="text-[16px] font-medium text-foreground leading-6">{title}</p>
        </div>
        <p className="text-[12px] font-light text-muted-foreground leading-[16px] tracking-[0.04px]">{description}</p>
      </div>
      <button
        onClick={onClick}
        className="bg-primary text-white rounded-full h-[32px] px-3 text-[14px] font-medium hover:opacity-90 transition-opacity"
      >
        {buttonLabel}
      </button>
    </div>
  )
}

// ---------------------------------------------------------------------------
// CartPage
// ---------------------------------------------------------------------------

export default function CartPage() {
  const navigate = useNavigate()
  const { items, removeItem, servicesParam } = useCart()

  const firstExpiry = items.length > 0 ? Math.min(...items.map((i) => i.offerExpiresAt)) : Date.now() + 20 * 60 * 1000

  useEffect(() => {
    if (items.length === 0) return
    cartAnalytics.viewed({
      services: servicesParam,
      item_count: items.length,
      total_price: items.reduce((s, i) => s + parseFloat(i.price.replace(/\./g, "").replace(",", ".")), 0),
      currency: items[0]?.currency || "Tribz",
      has_hotel: items.some((i) => i.type === "hotel"),
      has_flight: items.some((i) => i.type === "flight"),
      has_car: false,
    })
  }, [])

  function handleRemove(item: CartItem) {
    cartAnalytics.itemRemoved({
      service_type: item.type === "hotel" ? "hotel" : "flight",
      item_id: item.id,
      item_price: parseFloat(item.price.replace(/\./g, "").replace(",", ".")),
      currency: item.currency,
      remaining_items: items.length - 1,
      services: servicesParam,
    })
    removeItem(item.id)
  }

  function handleCheckout() {
    const hotelItem = items.find((i) => i.type === "hotel") as HotelCartItem | undefined
    const flightItem = items.find((i) => i.type === "flight") as FlightCartItem | undefined

    const totalPrice = items.reduce((s, i) => s + parseFloat(i.price.replace(/\./g, "").replace(",", ".")), 0)

    cartAnalytics.checkoutStarted({
      services: servicesParam,
      item_count: items.length,
      total_price: totalPrice,
      currency: items[0]?.currency || "Tribz",
      has_hotel: !!hotelItem,
      has_flight: !!flightItem,
      has_car: false,
    })

    if (hotelItem) {
      navigate(
        `/pagamento?destino=${hotelItem.destino}&checkIn=${hotelItem.checkIn}&checkOut=${hotelItem.checkOut}` +
          `&adultos=${hotelItem.adultos}&noites=${hotelItem.noites}${hotelItem.quarto ? `&quarto=${hotelItem.quarto}` : ""}`
      )
    } else if (flightItem) {
      navigate(
        `/pagamento-aereo?origem=${encodeURIComponent(flightItem.origin)}` +
          `&destino=${encodeURIComponent(flightItem.destination)}` +
          `&ida=${flightItem.departDate}&volta=${flightItem.returnDate}` +
          `&adultos=${flightItem.passengers}&tipo=${encodeURIComponent(flightItem.tripType)}` +
          `&idaVoo=${flightItem.idaVoo}&voltaVoo=${flightItem.voltaVoo}`
      )
    }
  }

  return (
    <div className="min-h-screen flex flex-col bg-[#f9f9fb]">
      {/* Header */}
      <div className="flex items-center justify-between px-8 py-6 max-w-[1440px] mx-auto w-full">
        <button onClick={() => navigate("/")} className="shrink-0 hover:opacity-80 transition-opacity">
          <BrandLogo />
        </button>
        <UserActions />
      </div>

      {/* Content */}
      <main className="flex-1 w-full max-w-[1440px] mx-auto px-8 py-8">
        <div className="flex gap-8 items-start">
          {/* Left column */}
          <div className="flex flex-col gap-4 w-[848px] shrink-0">
            {/* Back button row */}
            <div className="flex items-center justify-between">
              <button
                onClick={() => navigate(-1)}
                className="flex items-center gap-3 h-[40px] px-4 rounded-md text-[16px] text-[#60646c] hover:text-foreground transition-colors"
              >
                <ChevronLeft size={18} strokeWidth={1.5} />
                Voltar para busca
              </button>
              {items.length > 0 && <CountdownBadge expiresAt={firstExpiry} />}
            </div>

            <h1 className="text-[24px] font-normal text-foreground leading-[30px] tracking-[-0.1px]">
              Carrinho ({items.length})
            </h1>

            {items.length === 0 ? (
              /* Empty state */
              <div className="flex flex-col gap-8">
                <div className="flex flex-col gap-2">
                  <p className="text-[18px] font-medium text-foreground leading-[26px] tracking-[-0.04px]">
                    Você ainda não adicionou produtos no seu carrinho
                  </p>
                  <p className="text-[12px] font-light text-muted-foreground leading-[16px] tracking-[0.04px]">
                    Monte a viagem do seu jeito e resolva tudo na mesma compra.
                  </p>
                </div>
                <div className="flex gap-4 items-stretch w-full">
                  <ServiceCard
                    icon={<PlaneTakeoff size={16} strokeWidth={1.5} className="text-primary" />}
                    title="Passagens"
                    description="Encontre os melhores voos disponíveis"
                    buttonLabel="Ver passagens"
                    onClick={() => navigate("/resultados-aereo")}
                  />
                  <ServiceCard
                    icon={<Building2 size={16} strokeWidth={1.5} className="text-primary" />}
                    title="Hospedagens"
                    description="Encontre as melhores opções com a nossa curadoria"
                    buttonLabel="Ver hospedagens"
                    onClick={() => navigate("/resultados")}
                  />
                  <ServiceCard
                    icon={<Car size={16} strokeWidth={1.5} className="text-primary" />}
                    title="Aluguel de Carro"
                    description="Faça o seu próprio roteiro alugando um carro."
                    buttonLabel="Ver passeios"
                    onClick={() => navigate("/")}
                  />
                </div>
              </div>
            ) : (
              /* Filled state */
              <div className="flex flex-col gap-4">
                {items.map((item) =>
                  item.type === "hotel" ? (
                    <HotelCard key={item.id} item={item as HotelCartItem} onRemove={() => handleRemove(item)} />
                  ) : (
                    <FlightCard key={item.id} item={item as FlightCartItem} onRemove={() => handleRemove(item)} />
                  )
                )}
                <CrossSellSection items={items} />
                <div className="flex justify-end">
                  <button
                    onClick={handleCheckout}
                    className="bg-primary text-white rounded-full h-10 w-[240px] text-[14px] font-medium hover:opacity-90 transition-opacity"
                  >
                    Finalizar Compra
                  </button>
                </div>
              </div>
            )}
          </div>

          {/* Right column — only when cart has items */}
          {items.length > 0 && (
            <div className="w-[400px] shrink-0 pt-[88px]">
              <p className="text-[18px] font-medium text-foreground mb-4">Resumo do pagamento</p>
              <CartSummaryCard items={items} onCheckout={handleCheckout} />
            </div>
          )}
        </div>
      </main>
    </div>
  )
}
