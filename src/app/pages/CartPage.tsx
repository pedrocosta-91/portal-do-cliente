import { useEffect, useState } from "react"
import { useNavigate } from "react-router"
import {
  ArrowLeft,
  BedDouble,
  Calendar,
  Clock,
  PlaneTakeoff,
  ShoppingCart,
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

function HotelCard({ item, onRemove }: { item: HotelCartItem; onRemove: () => void }) {
  const nights = parseInt(item.noites) || 1
  const checkInFmt = item.checkIn.split("-").reverse().join("/")
  const checkOutFmt = item.checkOut.split("-").reverse().join("/")

  return (
    <div className="bg-white rounded-2xl p-6 flex flex-col gap-4 shadow-[0px_4px_16px_0px_rgba(0,0,0,0.1),0px_3px_12px_0px_rgba(0,0,0,0.1),0px_2px_3px_0px_rgba(0,0,51,0.06)]">
      {/* Header row */}
      <div className="flex items-start justify-between gap-4">
        <div className="flex items-center gap-3">
          <div className="w-16 h-16 rounded-lg bg-[rgba(0,0,51,0.06)] shrink-0 flex items-center justify-center overflow-hidden">
            <BedDouble size={24} strokeWidth={1.5} className="text-muted-foreground" />
          </div>
          <div className="flex flex-col gap-1">
            <p className="text-[16px] font-medium text-foreground leading-6">{item.hotelName}</p>
            <div className="flex items-center gap-2">
              <span className="text-[12px] font-medium bg-primary text-white px-2 py-0.5 rounded-[4px]">
                {item.hotelRating.toFixed(1)}
              </span>
              <span className="text-[14px] text-muted-foreground">{item.hotelCity}</span>
            </div>
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

      {/* Room details */}
      <div className="flex items-start justify-between gap-4">
        <div className="flex flex-col gap-3 flex-1">
          <p className="text-[14px] font-medium text-foreground leading-5">{item.roomName}</p>
          <div className="flex flex-wrap gap-2">
            {item.hasFreeCancel && (
              <span className="text-[12px] px-2 py-0.5 rounded-[4px] bg-[rgba(0,164,51,0.1)] text-[rgba(0,113,63,0.87)] font-medium">
                Cancelamento grátis
              </span>
            )}
            {item.hasBreakfast && (
              <span className="text-[12px] px-2 py-0.5 rounded-[4px] bg-[rgba(0,179,238,0.12)] text-[#00749e] font-medium">
                Café da manhã
              </span>
            )}
          </div>
          <div className="flex flex-wrap gap-4 text-[13px] text-muted-foreground">
            <span className="flex items-center gap-1">
              <Calendar size={13} strokeWidth={1.5} />
              {checkInFmt} → {checkOutFmt} · {nights} {nights === 1 ? "noite" : "noites"}
            </span>
            <span className="flex items-center gap-1">
              <User size={13} strokeWidth={1.5} />
              {item.adultos} {parseInt(item.adultos) === 1 ? "hóspede" : "hóspedes"}
            </span>
          </div>
        </div>
        <div className="text-right shrink-0">
          <p className="text-[24px] font-normal text-foreground leading-[30px]">{item.price}</p>
          <p className="text-[12px] text-muted-foreground">{item.currency}</p>
        </div>
      </div>
    </div>
  )
}

// ---------------------------------------------------------------------------
// Flight card
// ---------------------------------------------------------------------------

function FlightCard({ item, onRemove }: { item: FlightCartItem; onRemove: () => void }) {
  const initials = item.airline.slice(0, 2).toUpperCase()
  const isRoundTrip = item.tripType !== "somente_ida" && item.returnDate

  return (
    <div className="bg-white rounded-2xl p-6 flex flex-col gap-4 shadow-[0px_4px_16px_0px_rgba(0,0,0,0.1),0px_3px_12px_0px_rgba(0,0,0,0.1),0px_2px_3px_0px_rgba(0,0,51,0.06)]">
      {/* Header row */}
      <div className="flex items-start justify-between gap-4">
        <div className="flex items-center gap-3">
          <div className="w-16 h-16 rounded-lg bg-[rgba(0,0,51,0.06)] shrink-0 flex items-center justify-center">
            <span className="text-[18px] font-medium text-foreground">{initials}</span>
          </div>
          <div className="flex flex-col gap-1">
            <p className="text-[16px] font-medium text-foreground leading-6">
              {item.origin} → {item.destination}
            </p>
            <p className="text-[14px] text-muted-foreground">{item.airline}</p>
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

      {/* Flight details */}
      <div className="flex items-start justify-between gap-4">
        <div className="flex flex-col gap-3 flex-1">
          <div className="flex flex-wrap gap-2">
            <span className="text-[12px] px-2 py-0.5 rounded-[4px] bg-primary text-white font-medium capitalize">
              {item.tarifa}
            </span>
            <span className="text-[12px] px-2 py-0.5 rounded-[4px] bg-[rgba(0,0,51,0.06)] text-foreground font-medium">
              {isRoundTrip ? "Ida e volta" : "Somente ida"}
            </span>
          </div>
          <div className="flex flex-wrap gap-4 text-[13px] text-muted-foreground">
            <span className="flex items-center gap-1">
              <Calendar size={13} strokeWidth={1.5} />
              {item.departDate}{isRoundTrip ? ` → ${item.returnDate}` : ""}
            </span>
            <span className="flex items-center gap-1">
              <User size={13} strokeWidth={1.5} />
              {item.passengers} {parseInt(item.passengers) === 1 ? "passageiro" : "passageiros"}
            </span>
          </div>
        </div>
        <div className="text-right shrink-0">
          <p className="text-[24px] font-normal text-foreground leading-[30px]">{item.price}</p>
          <p className="text-[12px] text-muted-foreground">{item.currency}</p>
        </div>
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
// Empty state
// ---------------------------------------------------------------------------

function EmptyState() {
  const navigate = useNavigate()
  return (
    <div className="flex flex-col items-center justify-center py-20 gap-6">
      <ShoppingCart size={48} strokeWidth={1} className="text-muted-foreground" />
      <div className="flex flex-col items-center gap-2">
        <p className="text-[20px] font-medium text-foreground">Seu carrinho está vazio</p>
        <p className="text-[14px] text-muted-foreground text-center max-w-[320px]">
          Adicione hospedagens ou passagens aéreas para continuar
        </p>
      </div>
      <div className="flex gap-3">
        <button
          onClick={() => navigate("/resultados")}
          className="flex items-center gap-2 bg-primary text-white rounded-full h-10 px-5 text-[14px] font-medium hover:opacity-90 transition-opacity"
        >
          <BedDouble size={16} strokeWidth={1.5} />
          Buscar hospedagem
        </button>
        <button
          onClick={() => navigate("/resultados-aereo")}
          className="flex items-center gap-2 border border-border text-foreground rounded-full h-10 px-5 text-[14px] font-medium hover:bg-muted transition-colors"
        >
          <PlaneTakeoff size={16} strokeWidth={1.5} />
          Buscar passagens
        </button>
      </div>
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
        {items.length === 0 ? (
          <EmptyState />
        ) : (
          <div className="flex gap-8 items-start">
            {/* Left column */}
            <div className="flex flex-col gap-6 flex-1 min-w-0">
              {/* Top row: back + countdown */}
              <div className="flex items-center justify-between">
                <button
                  onClick={() => navigate(-1)}
                  className="flex items-center gap-2 text-[14px] text-muted-foreground hover:text-foreground transition-colors"
                >
                  <ArrowLeft size={16} strokeWidth={1.5} />
                  Voltar para busca
                </button>
                <CountdownBadge expiresAt={firstExpiry} />
              </div>

              <h1 className="text-[24px] font-medium text-foreground leading-[30px]">
                Carrinho ({items.length})
              </h1>

              {/* Item cards */}
              <div className="flex flex-col gap-4">
                {items.map((item) =>
                  item.type === "hotel" ? (
                    <HotelCard key={item.id} item={item as HotelCartItem} onRemove={() => handleRemove(item)} />
                  ) : (
                    <FlightCard key={item.id} item={item as FlightCartItem} onRemove={() => handleRemove(item)} />
                  )
                )}
              </div>

              <CrossSellSection items={items} />

              {/* Bottom CTA */}
              <div className="flex justify-end">
                <button
                  onClick={handleCheckout}
                  className="bg-primary text-white rounded-full h-10 w-[240px] text-[14px] font-medium hover:opacity-90 transition-opacity"
                >
                  Finalizar Compra
                </button>
              </div>
            </div>

            {/* Right column */}
            <div className="w-[400px] shrink-0 pt-14">
              <p className="text-[18px] font-medium text-foreground mb-4">Resumo do pagamento</p>
              <CartSummaryCard items={items} onCheckout={handleCheckout} />
            </div>
          </div>
        )}
      </main>
    </div>
  )
}
