declare global {
  interface Window {
    dataLayer: Record<string, unknown>[]
  }
}

type EventParams = Record<string, string | number | boolean | null | undefined>

function track(eventName: string, params: EventParams = {}): void {
  if (typeof window === "undefined") return
  if (!window.dataLayer) window.dataLayer = []
  window.dataLayer.push({ event: eventName, ...params })
}

// ---------------------------------------------------------------------------
// Identity
// ---------------------------------------------------------------------------

export function identifyUser(userId: string, productId: string, currency: string): void {
  track("user_identified", { user_id: userId, product_id: productId, currency })
}

// ---------------------------------------------------------------------------
// app_ — Global / cross-journey events
// ---------------------------------------------------------------------------

export const appAnalytics = {
  sessionStarted: (productId: string, currency: string) =>
    track("app_session_started", { product_id: productId, currency }),

  pageViewed: (pagePath: string, pageTitle: string, journey: string) =>
    track("app_page_viewed", { page_path: pagePath, page_title: pageTitle, journey }),

  searchTabChanged: (tab: "hotel" | "aereo" | "carro") =>
    track("app_search_tab_changed", { tab }),

  notificationOpened: () =>
    track("app_notification_opened"),

  errorDisplayed: (errorCode: string, pagePath: string, journey: string) =>
    track("app_error_displayed", { error_code: errorCode, page_path: pagePath, journey }),

  balanceViewed: (balanceAmount: number, currency: string) =>
    track("app_balance_viewed", { balance_amount: balanceAmount, currency }),
}

// ---------------------------------------------------------------------------
// hotel_ — Hotel journey events
// ---------------------------------------------------------------------------

export const hotelAnalytics = {
  searchSubmitted: (params: {
    destination: string
    check_in: string
    check_out: string
    guests: number
    rooms: number
  }) => track("hotel_search_submitted", params),

  resultsViewed: (params: {
    destination: string
    result_count: number
    nights: number
  }) => track("hotel_results_viewed", params),

  filterApplied: (filterType: string, filterValue: string) =>
    track("hotel_filter_applied", { filter_type: filterType, filter_value: filterValue }),

  sortChanged: (sortBy: string) =>
    track("hotel_sort_changed", { sort_by: sortBy }),

  searchEdited: (fieldName: string) =>
    track("hotel_search_edited", { field_name: fieldName }),

  viewRoomsClicked: (hotelId: string, hotelName: string, position: number) =>
    track("hotel_view_rooms_clicked", { hotel_id: hotelId, hotel_name: hotelName, position }),

  drawerOpened: (hotelId: string, hotelName: string) =>
    track("hotel_drawer_opened", { hotel_id: hotelId, hotel_name: hotelName }),

  drawerRoomSelected: (params: {
    hotel_id: string
    room_id: string
    price: number
    currency: string
  }) => track("hotel_drawer_room_selected", params),

  drawerDetailsClicked: (hotelId: string) =>
    track("hotel_drawer_details_clicked", { hotel_id: hotelId }),

  pdpViewed: (hotelId: string, hotelName: string, destination: string) =>
    track("hotel_pdp_viewed", { hotel_id: hotelId, hotel_name: hotelName, destination }),

  galleryOpened: (hotelId: string) =>
    track("hotel_gallery_opened", { hotel_id: hotelId }),

  roomTabChanged: (tabName: string) =>
    track("hotel_room_tab_changed", { tab_name: tabName }),

  bookClicked: (params: {
    hotel_id: string
    room_id: string
    price: number
    currency: string
  }) => track("hotel_book_clicked", params),

  checkoutStarted: (params: {
    hotel_id: string
    price: number
    currency: string
    nights: number
  }) => track("hotel_checkout_started", params),

  checkoutStepCompleted: (step: 1 | 2 | 3) =>
    track("hotel_checkout_step_completed", { step }),

  checkoutCompleted: (params: {
    hotel_id: string
    price: number
    currency: string
    payment_method: string
  }) => track("hotel_checkout_completed", params),

  bookingConfirmationViewed: (params: {
    hotel_id: string
    nights: number
    currency: string
  }) => track("hotel_booking_confirmation_viewed", params),

  bookingPrintClicked: (hotelId: string) =>
    track("hotel_booking_print_clicked", { hotel_id: hotelId }),
}

// ---------------------------------------------------------------------------
// flight_ — Flight journey events
// ---------------------------------------------------------------------------

export const flightAnalytics = {
  searchSubmitted: (params: {
    origin: string
    destination: string
    departure_date: string
    return_date: string | null
    passengers: number
    trip_type: "ida_volta" | "somente_ida"
  }) => track("flight_search_submitted", params),

  resultsViewed: (params: {
    origin: string
    destination: string
    result_count: number
    trip_type: string
  }) => track("flight_results_viewed", params),

  filterApplied: (filterType: string, filterValue: string) =>
    track("flight_filter_applied", { filter_type: filterType, filter_value: filterValue }),

  dateChanged: (leg: "ida" | "volta", newDate: string) =>
    track("flight_date_changed", { leg, new_date: newDate }),

  searchEdited: (fieldName: string) =>
    track("flight_search_edited", { field_name: fieldName }),

  detailsClicked: (flightId: string, airline: string, leg: "ida" | "volta", position: number) =>
    track("flight_details_clicked", { flight_id: flightId, airline, leg, position }),

  selectClicked: (flightId: string, airline: string, leg: "ida" | "volta", position: number) =>
    track("flight_select_clicked", { flight_id: flightId, airline, leg, position }),

  detailsModalOpened: (flightId: string, airline: string, leg: "ida" | "volta") =>
    track("flight_details_modal_opened", { flight_id: flightId, airline, leg }),

  detailsExpanded: (flightId: string) =>
    track("flight_details_expanded", { flight_id: flightId }),

  classModalOpened: (flightId: string, airline: string) =>
    track("flight_class_modal_opened", { flight_id: flightId, airline }),

  classSelected: (params: {
    flight_id: string
    tarifa: "light" | "classic" | "flex"
    price: number
    currency: string
  }) => track("flight_class_selected", params),

  classAdvanced: (params: {
    flight_id: string
    tarifa: "light" | "classic" | "flex"
    price: number
    currency: string
  }) => track("flight_class_advanced", params),

  checkoutStarted: (params: {
    flight_id_ida: string
    flight_id_volta: string | null
    tarifa: string
    price: number
    currency: string
    passengers: number
  }) => track("flight_checkout_started", params),

  checkoutStepCompleted: (step: 1 | 2 | 3) =>
    track("flight_checkout_step_completed", { step }),

  paymentMethodSelected: (method: "pix" | "boleto" | "credit_card" | "tribz" | "tribz_card") =>
    track("flight_payment_method_selected", { method }),

  checkoutCompleted: (params: {
    flight_id_ida: string
    flight_id_volta: string | null
    price: number
    currency: string
    payment_method: string
    tarifa: string
  }) => track("flight_checkout_completed", params),

  bookingConfirmationViewed: (params: {
    flight_id_ida: string
    flight_id_volta: string | null
    currency: string
    passengers: number
  }) => track("flight_booking_confirmation_viewed", params),

  bookingPrintClicked: (flightIdIda: string) =>
    track("flight_booking_print_clicked", { flight_id_ida: flightIdIda }),
}

// ---------------------------------------------------------------------------
// account_ — Account / profile journey events
// ---------------------------------------------------------------------------

export const accountAnalytics = {
  profileViewed: () => track("account_profile_viewed"),
  historyViewed: () => track("account_history_viewed"),
  settingsViewed: () => track("account_settings_viewed"),

  cardAddStarted: () => track("account_card_add_started"),
  cardAddCompleted: (cardType: "credit" | "debit") =>
    track("account_card_add_completed", { card_type: cardType }),

  travelerAddStarted: () => track("account_traveler_add_started"),
  travelerAddCompleted: (relationship: string) =>
    track("account_traveler_add_completed", { relationship }),

  cardDeleted: () => track("account_card_deleted"),
}

// ---------------------------------------------------------------------------
// cart_ — Cart journey events
// ---------------------------------------------------------------------------

type CartBaseParams = {
  services: string
  item_count: number
  total_price: number
  currency: string
  has_hotel: boolean
  has_flight: boolean
  has_car: boolean
}

export const cartAnalytics = {
  viewed: (params: CartBaseParams) =>
    track("cart_viewed", params),

  itemRemoved: (params: {
    service_type: "hotel" | "flight" | "car"
    item_id: string
    item_price: number
    currency: string
    remaining_items: number
    services: string
  }) => track("cart_item_removed", params),

  upsellViewed: (upsellServices: string, services: string) =>
    track("cart_upsell_viewed", { upsell_services: upsellServices, services }),

  upsellClicked: (upsellServiceType: string, services: string) =>
    track("cart_upsell_clicked", { upsell_service_type: upsellServiceType, services }),

  checkoutStarted: (params: CartBaseParams) =>
    track("cart_checkout_started", params),

  offerExpired: (services: string, itemCount: number, expiredItemId: string) =>
    track("cart_offer_expired", { services, item_count: itemCount, expired_item_id: expiredItemId }),
}
