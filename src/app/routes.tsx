import { createBrowserRouter, Navigate } from "react-router";
import HomePage from "./pages/HomePage";
import SearchResults from "./pages/SearchResults";
import HotelDetails from "./pages/HotelDetails";
import Payment from "./pages/Payment";
import BookingConfirmation from "./pages/BookingConfirmation";
import FlightResults from "./pages/FlightResults";
import FlightPayment from "./pages/FlightPayment";
import FlightBookingConfirmation from "./pages/FlightBookingConfirmation";
import ProfilePage from "./pages/ProfilePage";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: HomePage,
  },
  {
    path: "/minha-conta",
    element: <Navigate to="/minha-conta/perfil" replace />,
  },
  {
    path: "/minha-conta/perfil",
    Component: ProfilePage,
  },
  {
    path: "/resultados",
    Component: SearchResults,
  },
  {
    path: "/resultados-aereo",
    Component: FlightResults,
  },
  {
    path: "/hotel",
    Component: HotelDetails,
  },
  {
    path: "/pagamento",
    Component: Payment,
  },
  {
    path: "/pagamento-aereo",
    Component: FlightPayment,
  },
  {
    path: "/confirmacao-hotel",
    Component: BookingConfirmation,
  },
  {
    path: "/confirmacao-aereo",
    Component: FlightBookingConfirmation,
  },
]);