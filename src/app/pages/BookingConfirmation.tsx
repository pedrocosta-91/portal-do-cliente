import { useNavigate, useSearchParams } from "react-router";
import { SearchResultsHeader } from "../components/SearchResultsHeader";
import { Footer } from "../components/Footer";
import { ChevronLeft, MapPin, Printer, Star } from "lucide-react";
import { unsplash_tool } from "../../tools/unsplash";

export default function BookingConfirmation() {
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();

  // Get search parameters from URL
  const destination = searchParams.get("destino") || "Miami";
  const checkIn = searchParams.get("checkIn") || "2026-03-25";
  const checkOut = searchParams.get("checkOut") || "2026-03-30";
  const adults = searchParams.get("adultos") || "2";
  const rooms = searchParams.get("acomodacoes") || "1";
  const nights = searchParams.get("noites") || "3";

  const formatDateRange = () => {
    if (!checkIn || !checkOut) return "";
    const startDate = new Date(checkIn);
    const endDate = new Date(checkOut);
    const start = startDate.getDate();
    const end = endDate.getDate();
    const month = endDate.toLocaleDateString("pt-BR", { month: "short" });
    return `${start} - ${end} ${month}`;
  };

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="border-b border-[#e5e7eb]">
        <SearchResultsHeader 
          destination={destination}
          dateRange={formatDateRange()}
          guests={parseInt(adults)}
          rooms={parseInt(rooms)}
          nights={parseInt(nights)}
          onEdit={() => navigate('/')}
        />
      </header>

      {/* Main Content */}
      <div className="max-w-[1440px] mx-auto px-8 py-8">
        {/* Back button */}
        <div className="mb-8">
          <button 
            onClick={() => navigate(-1)}
            className="flex items-center gap-3 text-[#60646c] hover:text-[#1c2024] transition-colors px-4 py-2 rounded-md"
          >
            <ChevronLeft className="w-4.5 h-4.5" />
            <span className="text-base leading-6">Voltar para busca</span>
          </button>
        </div>

        {/* Two Column Layout */}
        <div className="flex gap-8 items-start">
          {/* Left Column - Payment Info & Travelers */}
          <div className="flex-1 flex flex-col gap-8">
            {/* Payment Information Card */}
            <div className="border border-[#d9d9e0] rounded-2xl p-6">
              {/* Header with Print Button */}
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-2xl text-[#1c2024] leading-[30px] tracking-[-0.1px]">Informações do pagamento</h2>
                <button 
                  onClick={handlePrint}
                  className="bg-primary text-primary-foreground px-4 h-10 rounded-full font-medium text-base leading-6 hover:opacity-90 transition-opacity flex items-center gap-2"
                >
                  <Printer className="w-4 h-4" />
                  Imprimir
                </button>
              </div>

              {/* Items Table */}
              <div className="mb-6">
                <div className="grid grid-cols-[1fr_80px_120px_120px] gap-4 mb-4">
                  <div className="text-sm font-medium text-[#60646c] leading-5">Itens</div>
                  <div className="text-sm font-medium text-[#60646c] leading-5 text-center">Qtd</div>
                  <div className="text-sm font-medium text-[#60646c] leading-5 text-center">Preço</div>
                  <div className="text-sm font-medium text-[#60646c] leading-5 text-right">Total</div>
                </div>

                {/* Items */}
                <div className="space-y-3">
                  <div className="grid grid-cols-[1fr_80px_120px_120px] gap-4 py-3 border-b border-[#d9d9e0]">
                    <div className="text-sm text-[#60646c] leading-5">Apartamento Standard</div>
                    <div className="text-sm text-[#60646c] leading-5 text-center">1</div>
                    <div className="text-sm text-[#60646c] leading-5 text-center">1.000 tribz</div>
                    <div className="text-sm text-[#60646c] leading-5 text-right">3.000 tribz</div>
                  </div>

                  <div className="grid grid-cols-[1fr_80px_120px_120px] gap-4 py-3 border-b border-[#d9d9e0]">
                    <div className="text-sm text-[#60646c] leading-5">Apartamento Luxo</div>
                    <div className="text-sm text-[#60646c] leading-5 text-center">1</div>
                    <div className="text-sm text-[#60646c] leading-5 text-center">1.400 tribz</div>
                    <div className="text-sm text-[#60646c] leading-5 text-right">3.200 tribz</div>
                  </div>
                </div>

                {/* Totals */}
                <div className="mt-4 space-y-2 ml-auto w-[240px]">
                  <div className="flex justify-between text-sm leading-5">
                    <span className="text-[#1c2024]">Subtotal</span>
                    <span className="text-[#60646c]">6.200 tribz</span>
                  </div>
                  <div className="flex justify-between text-sm leading-5 pb-2">
                    <span className="text-[#1c2024]">Taxas</span>
                    <span className="text-[#60646c]">10% (620)</span>
                  </div>
                  <div className="border-t border-[#d9d9e0] pt-2 flex justify-between text-lg font-semibold leading-[26px]">
                    <span className="text-[#1c2024]">Total Final</span>
                    <span className="text-[#1c2024]">6.880 tribz</span>
                  </div>
                </div>
              </div>

              {/* Payment Method Section */}
              <div className="mb-6">
                <h3 className="text-base text-[#1c2024] leading-6 mb-4">Método de pagamento</h3>
                <div className="grid grid-cols-2 gap-4">
                  {/* Tribz Block */}
                  <div className="border border-[#d9d9e0] rounded-lg p-4">
                    <p className="text-sm text-[#60646c] leading-5 mb-2">Moedas Tribz</p>
                    <p className="text-2xl font-semibold text-[#1c2024] leading-8 mb-1">6.880 Tribz</p>
                    <p className="text-sm text-[#60646c] leading-5">Seu saldo: 13.500</p>
                  </div>

                  {/* Credit Card Block */}
                  <div className="border border-[#d9d9e0] rounded-lg p-4">
                    <div className="flex items-center gap-2 mb-2">
                      <div className="w-8 h-5 rounded flex items-center justify-center">
                        <svg width="32" height="20" viewBox="0 0 32 20" fill="none">
                          <circle cx="12" cy="10" r="10" fill="#EB001B"/>
                          <circle cx="20" cy="10" r="10" fill="#F79E1B" fillOpacity="0.8"/>
                        </svg>
                      </div>
                      <span className="text-sm text-[#60646c] leading-5">Crédito final 2288</span>
                    </div>
                    <p className="text-2xl font-semibold text-[#1c2024] leading-8 mb-1">R$ 1.750,59</p>
                    <p className="text-sm text-[#60646c] leading-5">em 2x de R$ 875,59 sem juros</p>
                  </div>
                </div>
              </div>

              {/* Invoice Note */}
              <div className="text-sm text-[#60646c] leading-5">
                Nota fiscal emitida para Jessyca Araujo Leão (email: jessycaaleao@gmail.com)
              </div>
            </div>

            {/* Travelers Card */}
            <div className="border border-[#d9d9e0] rounded-2xl p-6">
              <h2 className="text-2xl text-[#1c2024] leading-[30px] tracking-[-0.1px] mb-6">Quem vai viajar</h2>
              <div className="grid grid-cols-2 gap-8">
                {/* Traveler 1 */}
                <div>
                  <p className="text-sm text-[#60646c] leading-5 mb-3">Viajante 1</p>
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 rounded-full bg-[#1c2024] flex items-center justify-center text-white font-medium flex-shrink-0">
                      JL
                    </div>
                    <div>
                      <p className="text-base font-semibold text-[#1c2024] leading-6">Jessyca Leão</p>
                      <p className="text-sm text-[#60646c] leading-5">CPF: 098.633.237-63</p>
                    </div>
                  </div>
                </div>

                {/* Traveler 2 */}
                <div>
                  <p className="text-sm text-[#60646c] leading-5 mb-3">Viajante 2</p>
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 rounded-full bg-[#1c2024] flex items-center justify-center text-white font-medium flex-shrink-0">
                      PC
                    </div>
                    <div>
                      <p className="text-base font-semibold text-[#1c2024] leading-6">Pedro Costa</p>
                      <p className="text-sm text-[#60646c] leading-5">CPF: 043.987.043-50</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column - Status & Hotel Summary */}
          <div className="w-[480px] flex-shrink-0 flex flex-col gap-6">
            {/* Success Card */}
            <div className="bg-white border border-[#d9d9e0] rounded-2xl p-6 shadow-[0px_4px_16px_0px_rgba(0,0,0,0.1)]">
              <div className="flex gap-4">
                {/* Check Icon */}
                <div className="relative flex-shrink-0">
                  <svg width="60" height="60" viewBox="0 0 60 60" fill="none">
                    <circle cx="30" cy="30" r="30" fill="#008573" fillOpacity="0.1"/>
                    <circle cx="30" cy="30" r="24" fill="#008573"/>
                    <path d="M25 30L28 33L35 26" stroke="white" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                  {/* Confetti decorations */}
                  <div className="absolute -top-2 -right-2 w-3 h-3 rounded-full bg-[#f97316]"></div>
                  <div className="absolute top-1 -left-3 w-2 h-2 rounded-full bg-[#3b82f6]"></div>
                  <div className="absolute -bottom-1 left-2 w-2.5 h-2.5 rounded-full bg-[#eab308]"></div>
                </div>

                {/* Text Content */}
                <div className="flex-1">
                  <h3 className="text-xl font-semibold text-[#1c2024] leading-[30px] tracking-[-0.1px] mb-2">
                    Parabéns pela sua reserva!
                  </h3>
                  <p className="text-sm text-[#60646c] leading-5">
                    Sua reserva está sendo processada e enviaremos a sua confirmação por email.
                  </p>
                </div>
              </div>
            </div>

            {/* Hotel Card */}
            <div className="bg-white border border-[#d9d9e0] rounded-2xl p-6 shadow-[0px_4px_16px_0px_rgba(0,0,0,0.1)] sticky top-8">
              {/* Hotel Label */}
              <div className="flex items-center gap-2 mb-3">
                <svg className="w-4 h-4 text-[#60646c]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"/>
                </svg>
                <span className="text-sm text-[#60646c] leading-5">Hotel</span>
              </div>

              {/* Hotel Name */}
              <h3 className="text-lg font-semibold text-[#1c2024] leading-[26px] tracking-[-0.04px] mb-2">
                Quality Paulista São Paulo Jardins
              </h3>

              {/* Location */}
              <div className="flex items-center gap-2 mb-4">
                <MapPin className="w-4 h-4 text-[#60646c]" />
                <span className="text-sm text-[#60646c] leading-5">Centro, São Paulo</span>
              </div>

              <div className="border-t border-[#d9d9e0] pt-4 mb-4">
                {/* Dates */}
                <div className="grid grid-cols-2 gap-4 mb-4">
                  <div>
                    <p className="text-sm text-[#60646c] leading-5 mb-1">Check-in</p>
                    <p className="text-base font-semibold text-[#1c2024] leading-6">Qui, 28 dez 2023</p>
                    <p className="text-xs text-[#60646c] leading-4">A partir de 15h</p>
                  </div>
                  <div className="border-l border-[#d9d9e0] pl-4">
                    <p className="text-sm text-[#60646c] leading-5 mb-1">Check-out</p>
                    <p className="text-base font-semibold text-[#1c2024] leading-6">Qu, 3 jan 2026</p>
                    <p className="text-xs text-[#60646c] leading-4">Até as 12h</p>
                  </div>
                </div>
              </div>

              <div className="border-t border-[#d9d9e0] pt-4 mb-4">
                {/* Hotel Mini Card */}
                <div className="flex gap-3">
                  {/* Hotel Thumbnail - using placeholder */}
                  <div className="w-[100px] h-[70px] rounded-lg bg-[#e5e7eb] flex-shrink-0 overflow-hidden">
                    <img 
                      src="https://images.unsplash.com/photo-1566073771259-6a8506099945?w=200&h=140&fit=crop" 
                      alt="Hotel"
                      className="w-full h-full object-cover"
                    />
                  </div>

                  {/* Hotel Info */}
                  <div className="flex-1">
                    <p className="text-base font-semibold text-[#1c2024] leading-6 mb-2">Kimpton Epic Hotel</p>
                    
                    {/* Rating */}
                    <div className="flex items-center gap-2 mb-2">
                      <div className="bg-primary text-primary-foreground px-1.5 py-0.5 rounded text-xs font-medium">
                        8.4
                      </div>
                      <span className="text-xs text-[#60646c]">Muito Bom</span>
                      <div className="flex gap-0.5">
                        {[1, 2, 3, 4].map((i) => (
                          <Star key={i} className="w-3 h-3 fill-[#fbbf24] text-[#fbbf24]" />
                        ))}
                      </div>
                    </div>

                    {/* Location */}
                    <div className="flex items-start gap-1">
                      <MapPin className="w-3 h-3 text-[#60646c] mt-0.5 flex-shrink-0" />
                      <p className="text-xs text-[#60646c] leading-4">
                        Miami, Miami International Airport Area, a 3.4km do centro.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Cancellation Badge */}
              <div className="bg-[#f9f9fb] border border-[rgba(0,0,47,0.15)] rounded-md p-3 flex gap-2">
                <svg className="w-4 h-4 text-[#60646c] flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"/>
                </svg>
                <p className="text-sm text-[#60646c] leading-5">Cancelamento gratuito antes de 19 de março</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}
