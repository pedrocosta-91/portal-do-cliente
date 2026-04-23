import { createContext, useContext, useEffect, useState } from "react"

export type HotelCartItem = {
  id: string
  type: "hotel"
  hotelName: string
  hotelRating: number
  hotelCity: string
  roomName: string
  hasFreeCancel: boolean
  hasBreakfast: boolean
  destino: string
  checkIn: string
  checkOut: string
  adultos: string
  noites: string
  quarto: string
  price: string
  currency: string
  offerExpiresAt: number
}

export type FlightCartItem = {
  id: string
  type: "flight"
  airline: string
  origin: string
  destination: string
  departDate: string
  returnDate: string
  tripType: string
  tarifa: string
  passengers: string
  price: string
  currency: string
  idaVoo: string
  voltaVoo: string
  offerExpiresAt: number
}

export type CartItem = HotelCartItem | FlightCartItem

interface CartCtx {
  items: CartItem[]
  addItem: (item: CartItem) => void
  removeItem: (id: string) => void
  clearCart: () => void
  servicesParam: string
  totalPrice: number
}

const CartContext = createContext<CartCtx | null>(null)

function computeServicesParam(items: CartItem[]): string {
  const types = [...new Set(items.map((i) => i.type))]
  return types.join(",")
}

function loadFromSession(): CartItem[] {
  try {
    const raw = sessionStorage.getItem("cart")
    if (!raw) return []
    return JSON.parse(raw) as CartItem[]
  } catch {
    return []
  }
}

export function CartProvider({ children }: { children: React.ReactNode }) {
  const [items, setItems] = useState<CartItem[]>(loadFromSession)

  useEffect(() => {
    sessionStorage.setItem("cart", JSON.stringify(items))
  }, [items])

  function addItem(item: CartItem) {
    setItems((prev) => {
      const filtered = prev.filter((i) => i.type !== item.type)
      return [...filtered, item]
    })
  }

  function removeItem(id: string) {
    setItems((prev) => prev.filter((i) => i.id !== id))
  }

  function clearCart() {
    setItems([])
  }

  const servicesParam = computeServicesParam(items)
  const totalPrice = items.reduce((sum, i) => sum + parseFloat(i.price.replace(/\./g, "").replace(",", ".")), 0)

  return (
    <CartContext.Provider value={{ items, addItem, removeItem, clearCart, servicesParam, totalPrice }}>
      {children}
    </CartContext.Provider>
  )
}

export function useCart(): CartCtx {
  const ctx = useContext(CartContext)
  if (!ctx) throw new Error("useCart must be used within CartProvider")
  return ctx
}
