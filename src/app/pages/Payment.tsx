import { useState } from "react";
import { useNavigate, useSearchParams } from "react-router";
import { SearchResultsHeader } from "../components/SearchResultsHeader";
import { Footer } from "../components/Footer";
import { ChevronLeft, Clock, ChevronUp, ChevronDown, MapPin } from "lucide-react";

export default function Payment() {
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();

  // Get search parameters from URL
  const destination = searchParams.get("destino") || "Miami";
  const checkIn = searchParams.get("checkIn") || "2026-03-25";
  const checkOut = searchParams.get("checkOut") || "2026-03-30";
  const adults = searchParams.get("adultos") || "2";
  const nights = searchParams.get("noites") || "3";
  const rooms = searchParams.get("acomodacoes") || "1";

  // Section states
  const [personalDataOpen, setPersonalDataOpen] = useState(true);
  const [paymentMethodOpen, setPaymentMethodOpen] = useState(false);
  const [invoiceOpen, setInvoiceOpen] = useState(false);

  // Completion states
  const [personalDataComplete, setPersonalDataComplete] = useState(false);
  const [paymentMethodComplete, setPaymentMethodComplete] = useState(false);
  const [invoiceComplete, setInvoiceComplete] = useState(false);

  // Form states
  const [selectedPaymentMethod, setSelectedPaymentMethod] = useState("");
  const [tribzAmount, setTribzAmount] = useState(18500); // Default value for slider

  const formatDateRange = () => {
    if (!checkIn || !checkOut) return "";
    const startDate = new Date(checkIn);
    const endDate = new Date(checkOut);
    const start = startDate.getDate();
    const end = endDate.getDate();
    const month = endDate.toLocaleDateString("pt-BR", { month: "short" });
    return `${start} - ${end} ${month}`;
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

  // Check icon SVG component
  const CheckIcon = () => (
    <div className="w-10 h-10 flex items-center justify-center flex-shrink-0">
      <svg className="w-4.5 h-4.5" fill="none" preserveAspectRatio="none" viewBox="0 0 15.8947 15.8948">
        <path 
          clipRule="evenodd" 
          d="M7.9474 0C3.55817 0 0 3.55817 0 7.9474C0 12.3365 3.55817 15.8948 7.9474 15.8948C12.3366 15.8948 15.8947 12.3365 15.8947 7.9474C15.8947 3.55817 12.3366 0 7.9474 0ZM1.14001 7.9474C1.14001 4.18778 4.18778 1.13999 7.9474 1.13999C11.707 1.13999 14.7547 4.18778 14.7547 7.9474C14.7547 11.707 11.707 14.7548 7.9474 14.7548C4.18778 14.7548 1.14001 11.707 1.14001 7.9474ZM11.1382 5.59283C11.3289 5.32184 11.2638 4.94756 10.9929 4.75685C10.7218 4.56615 10.3476 4.63125 10.1569 4.90225L6.77123 9.71339L5.37568 8.29202C5.14352 8.05557 4.76363 8.05208 4.52719 8.28424C4.29073 8.51639 4.28725 8.89628 4.51941 9.13273L6.41941 11.0679C6.54416 11.195 6.71891 11.26 6.89639 11.2455C7.07387 11.2311 7.23574 11.1385 7.33822 10.9928L11.1382 5.59283Z" 
          fill="rgba(0,43,183,0.77)"
          fillRule="evenodd" 
        />
      </svg>
    </div>
  );

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
        {/* Back button and timer */}
        <div className="flex items-center justify-between mb-8">
          <button 
            onClick={() => navigate(-1)}
            className="flex items-center gap-3 text-[#60646c] hover:text-[#1c2024] transition-colors px-4 py-2 rounded-md"
          >
            <ChevronLeft className="w-4.5 h-4.5" />
            <span className="text-base leading-6">Voltar para busca</span>
          </button>
          <div className="bg-[rgba(243,0,13,0.08)] px-2.5 py-1 rounded flex items-center gap-2">
            <Clock className="w-4 h-4 text-[rgba(196,0,6,0.83)]" />
            <span className="text-sm font-medium text-[rgba(196,0,6,0.83)] leading-5">Oferta válida por 20:00</span>
          </div>
        </div>

        {/* Two Column Layout */}
        <div className="flex gap-8 items-start">
          {/* Left Column - Forms */}
          <div className="flex-1 flex flex-col gap-4">
            {/* Personal Data Section */}
            <div className="border border-[#d9d9e0] rounded-2xl">
              <div className="p-4 flex flex-col gap-4">
                <button
                  onClick={() => setPersonalDataOpen(!personalDataOpen)}
                  className="flex items-center w-full"
                >
                  {personalDataComplete && <CheckIcon />}
                  <h2 className="flex-1 text-2xl text-[#1c2024] leading-[30px] tracking-[-0.1px] text-left">Dados pessoais</h2>
                  {personalDataOpen ? (
                    <ChevronUp size={16} strokeWidth={1.5} className="shrink-0 text-muted-foreground" />
                  ) : (
                    <ChevronDown size={16} strokeWidth={1.5} className="shrink-0 text-muted-foreground" />
                  )}
                </button>

                {personalDataOpen && (
                  <>
                    {/* Adult 1 */}
                    <div className="mb-4">
                      <h3 className="text-lg text-[#1c2024] leading-[26px] tracking-[-0.04px] mb-2">Adulto 1</h3>
                      <div className="grid grid-cols-2 gap-x-8 gap-y-4">
                        <div>
                          <label className="block text-sm font-medium text-[#1c2024] leading-5 mb-2">Nome</label>
                          <input
                            type="text"
                            placeholder="Digite o nome"
                            className="w-full h-8 px-1 border border-[#d9d9e0] rounded bg-[rgba(255,255,255,0.9)] text-sm text-[rgba(0,5,29,0.45)] placeholder:text-[rgba(0,5,29,0.45)] leading-5"
                          />
                        </div>
                        <div>
                          <label className="block text-sm font-medium text-[#1c2024] leading-5 mb-2">Sobrenome</label>
                          <input
                            type="text"
                            placeholder="Digite o sobrenome"
                            className="w-full h-8 px-1 border border-[#d9d9e0] rounded bg-[rgba(255,255,255,0.9)] text-sm text-[rgba(0,5,29,0.45)] placeholder:text-[rgba(0,5,29,0.45)] leading-5"
                          />
                        </div>
                        <div>
                          <label className="block text-sm font-medium text-[#1c2024] leading-5 mb-2">Data de Nascimento</label>
                          <input
                            type="text"
                            placeholder="dd/mm/aaaa"
                            className="w-full h-8 px-1 border border-[#d9d9e0] rounded bg-[rgba(255,255,255,0.9)] text-sm text-[rgba(0,5,29,0.45)] placeholder:text-[rgba(0,5,29,0.45)] leading-5"
                          />
                        </div>
                        <div>
                          <label className="block text-sm font-medium text-[#1c2024] leading-5 mb-2">Nacionalidade</label>
                          <select className="w-full h-8 px-1 border border-[#d9d9e0] rounded bg-[rgba(255,255,255,0.9)] text-sm text-[rgba(0,5,29,0.45)] leading-5">
                            <option>Selecione a nacionalidade</option>
                          </select>
                        </div>
                        <div>
                          <label className="block text-sm font-medium text-[#1c2024] leading-5 mb-2">CPF</label>
                          <input
                            type="text"
                            placeholder="000.000.000-00"
                            className="w-full h-8 px-1 border border-[#d9d9e0] rounded bg-[rgba(255,255,255,0.9)] text-sm text-[rgba(0,5,29,0.45)] placeholder:text-[rgba(0,5,29,0.45)] leading-5"
                          />
                        </div>
                      </div>
                    </div>

                    {/* Adult 2 */}
                    <div className="mb-4">
                      <h3 className="text-lg text-[#1c2024] leading-[26px] tracking-[-0.04px] mb-2">Adulto 2</h3>
                      <div className="grid grid-cols-2 gap-x-8 gap-y-4">
                        <div>
                          <label className="block text-sm font-medium text-[#1c2024] leading-5 mb-2">Nome</label>
                          <input
                            type="text"
                            placeholder="Digite o nome"
                            className="w-full h-8 px-1 border border-[#d9d9e0] rounded bg-[rgba(255,255,255,0.9)] text-sm text-[rgba(0,5,29,0.45)] placeholder:text-[rgba(0,5,29,0.45)] leading-5"
                          />
                        </div>
                        <div>
                          <label className="block text-sm font-medium text-[#1c2024] leading-5 mb-2">Sobrenome</label>
                          <input
                            type="text"
                            placeholder="Digite o sobrenome"
                            className="w-full h-8 px-1 border border-[#d9d9e0] rounded bg-[rgba(255,255,255,0.9)] text-sm text-[rgba(0,5,29,0.45)] placeholder:text-[rgba(0,5,29,0.45)] leading-5"
                          />
                        </div>
                        <div>
                          <label className="block text-sm font-medium text-[#1c2024] leading-5 mb-2">Data de Nascimento</label>
                          <input
                            type="text"
                            placeholder="dd/mm/aaaa"
                            className="w-full h-8 px-1 border border-[#d9d9e0] rounded bg-[rgba(255,255,255,0.9)] text-sm text-[rgba(0,5,29,0.45)] placeholder:text-[rgba(0,5,29,0.45)] leading-5"
                          />
                        </div>
                        <div>
                          <label className="block text-sm font-medium text-[#1c2024] leading-5 mb-2">Nacionalidade</label>
                          <select className="w-full h-8 px-1 border border-[#d9d9e0] rounded bg-[rgba(255,255,255,0.9)] text-sm text-[rgba(0,5,29,0.45)] leading-5">
                            <option>Selecione a nacionalidade</option>
                          </select>
                        </div>
                        <div>
                          <label className="block text-sm font-medium text-[#1c2024] leading-5 mb-2">CPF</label>
                          <input
                            type="text"
                            placeholder="000.000.000-00"
                            className="w-full h-8 px-1 border border-[#d9d9e0] rounded bg-[rgba(255,255,255,0.9)] text-sm text-[rgba(0,5,29,0.45)] placeholder:text-[rgba(0,5,29,0.45)] leading-5"
                          />
                        </div>
                      </div>
                    </div>

                    {/* Next Button */}
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

            {/* Payment Method Section */}
            <div className="border border-[#d9d9e0] rounded-2xl">
              <div className="p-4 flex flex-col gap-4">
                <button
                  onClick={() => setPaymentMethodOpen(!paymentMethodOpen)}
                  className="flex items-center w-full"
                >
                  {paymentMethodComplete && <CheckIcon />}
                  <h2 className="flex-1 text-2xl text-[#1c2024] leading-[30px] tracking-[-0.1px] text-left">Como você quer pagar?</h2>
                  {paymentMethodOpen ? (
                    <ChevronUp size={16} strokeWidth={1.5} className="shrink-0 text-muted-foreground" />
                  ) : (
                    <ChevronDown size={16} strokeWidth={1.5} className="shrink-0 text-muted-foreground" />
                  )}
                </button>

                {paymentMethodOpen && (
                  <>
                    {/* Destaques */}
                    <div className="mb-4">
                      <h3 className="text-base text-[#1c2024] leading-6 mb-4">Destaques</h3>
                      <div className="border border-[#d9d9e0] rounded-lg p-4">
                        <label className="flex items-center gap-4 cursor-pointer">
                          <div className="w-4 h-4 rounded-full border-2 border-[rgba(0,6,46,0.2)] bg-white flex items-center justify-center flex-shrink-0">
                            {selectedPaymentMethod === "pix" && <div className="w-2.5 h-2.5 rounded-full bg-[#12a594]"></div>}
                          </div>
                          <input
                            type="radio"
                            name="payment"
                            value="pix"
                            checked={selectedPaymentMethod === "pix"}
                            onChange={(e) => setSelectedPaymentMethod(e.target.value)}
                            className="sr-only"
                          />
                          <span className="text-xs text-[#1c2024] leading-4 tracking-[0.04px]">Pix</span>
                        </label>
                      </div>
                    </div>

                    {/* Mais usados */}
                    <div className="mb-4">
                      <h3 className="text-base text-[#1c2024] leading-6 mb-4">Mais usados</h3>
                      <div className="space-y-4">
                        <div className="border border-[#d9d9e0] rounded-lg p-4">
                          <label className="flex items-center gap-4 cursor-pointer">
                            <div className="w-4 h-4 rounded-full border-2 border-[rgba(0,6,46,0.2)] bg-white flex items-center justify-center flex-shrink-0">
                              {selectedPaymentMethod === "credit" && <div className="w-2.5 h-2.5 rounded-full bg-[#12a594]"></div>}
                            </div>
                            <input
                              type="radio"
                              name="payment"
                              value="credit"
                              checked={selectedPaymentMethod === "credit"}
                              onChange={(e) => setSelectedPaymentMethod(e.target.value)}
                              className="sr-only"
                            />
                            <span className="text-xs text-[#1c2024] leading-4 tracking-[0.04px]">Cartão de Crédito</span>
                          </label>
                        </div>

                        <div className="border border-[#d9d9e0] rounded-lg p-4">
                          <label className="flex items-center gap-4 cursor-pointer">
                            <div className="w-4 h-4 rounded-full border-2 border-[rgba(0,6,46,0.2)] bg-white flex items-center justify-center flex-shrink-0">
                              {selectedPaymentMethod === "debit" && <div className="w-2.5 h-2.5 rounded-full bg-[#12a594]"></div>}
                            </div>
                            <input
                              type="radio"
                              name="payment"
                              value="debit"
                              checked={selectedPaymentMethod === "debit"}
                              onChange={(e) => setSelectedPaymentMethod(e.target.value)}
                              className="sr-only"
                            />
                            <span className="text-xs text-[#1c2024] leading-4 tracking-[0.04px]">2 cartões de crédito</span>
                          </label>
                        </div>
                      </div>
                    </div>

                    {/* Pontos */}
                    <div className="mb-4">
                      <h3 className="text-base text-[#1c2024] leading-6 mb-4">Pontos</h3>
                      <div className="border border-[#d9d9e0] rounded-lg p-4 space-y-4">
                        <label className="flex items-center gap-4 cursor-pointer">
                          <div className="w-4 h-4 rounded-full border-2 border-[rgba(0,6,46,0.2)] bg-white flex items-center justify-center flex-shrink-0">
                            {selectedPaymentMethod === "tribz" && <div className="w-2.5 h-2.5 rounded-full bg-[#12a594]"></div>}
                          </div>
                          <input
                            type="radio"
                            name="payment"
                            value="tribz"
                            checked={selectedPaymentMethod === "tribz"}
                            onChange={(e) => setSelectedPaymentMethod(e.target.value)}
                            className="sr-only"
                          />
                          <span className="text-xs text-[#1c2024] leading-4 tracking-[0.04px]">Tribz</span>
                        </label>
                        <label className="flex items-center gap-4 cursor-pointer">
                          <div className="w-4 h-4 rounded-full border-2 border-[rgba(0,6,46,0.2)] bg-white flex items-center justify-center flex-shrink-0">
                            {selectedPaymentMethod === "tribz-card" && <div className="w-2.5 h-2.5 rounded-full bg-[#12a594]"></div>}
                          </div>
                          <input
                            type="radio"
                            name="payment"
                            value="tribz-card"
                            checked={selectedPaymentMethod === "tribz-card"}
                            onChange={(e) => setSelectedPaymentMethod(e.target.value)}
                            className="sr-only"
                          />
                          <span className="text-xs text-[#1c2024] leading-4 tracking-[0.04px]">Tribz + Cartão</span>
                        </label>
                      </div>
                    </div>

                    {/* Tribz + Card Form */}
                    {selectedPaymentMethod === "tribz-card" && (
                      <div className="mb-4 border border-[#d9d9e0] rounded-2xl p-4">
                        <h3 className="text-lg text-[#1c2024] leading-[26px] tracking-[-0.04px] mb-4">Complete com os dados do cartão</h3>
                        
                        {/* Tribz Slider */}
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
                          
                          {/* Slider */}
                          <div className="mb-4">
                            <input
                              type="range"
                              min="0"
                              max="37000"
                              step="100"
                              value={tribzAmount}
                              onChange={(e) => setTribzAmount(parseInt(e.target.value))}
                              className="w-full h-2 bg-[#e5e7eb] rounded-lg appearance-none cursor-pointer"
                              style={{
                                background: `linear-gradient(to right, #008573 0%, #008573 ${(tribzAmount / 37000) * 100}%, #e5e7eb ${(tribzAmount / 37000) * 100}%, #e5e7eb 100%)`
                              }}
                            />
                          </div>

                          {/* Total */}
                          <div className="mb-4">
                            <label className="block text-sm text-[#1c2024] leading-5 mb-2">Total</label>
                            <div className="text-2xl font-semibold text-[#1c2024] leading-8">{(37000).toLocaleString('pt-BR')} tribz</div>
                          </div>
                        </div>

                        {/* Card Fields */}
                        <div className="grid grid-cols-2 gap-x-8 gap-y-4 mb-6">
                          <div>
                            <label className="block text-sm font-medium text-[#1c2024] leading-5 mb-2">Número do cartão</label>
                            <input
                              type="text"
                              placeholder="0000 0000 0000 0000"
                              className="w-full h-8 px-1 border border-[#d9d9e0] rounded bg-[rgba(255,255,255,0.9)] text-sm leading-5"
                            />
                          </div>
                          <div>
                            <label className="block text-sm font-medium text-[#1c2024] leading-5 mb-2">Titular</label>
                            <input
                              type="text"
                              placeholder="Como aparece no cartão"
                              className="w-full h-8 px-1 border border-[#d9d9e0] rounded bg-[rgba(255,255,255,0.9)] text-sm leading-5"
                            />
                          </div>
                          <div>
                            <label className="block text-sm font-medium text-[#1c2024] leading-5 mb-2">Vencimento</label>
                            <input
                              type="text"
                              placeholder="MM/AA"
                              className="w-full h-8 px-1 border border-[#d9d9e0] rounded bg-[rgba(255,255,255,0.9)] text-sm leading-5"
                            />
                          </div>
                          <div>
                            <label className="block text-sm font-medium text-[#1c2024] leading-5 mb-2">Código de segurança</label>
                            <input
                              type="text"
                              placeholder="321"
                              className="w-full h-8 px-1 border border-[#d9d9e0] rounded bg-[rgba(255,255,255,0.9)] text-sm leading-5"
                            />
                          </div>
                          <div className="col-span-2">
                            <label className="block text-sm font-medium text-[#1c2024] leading-5 mb-2">CPF</label>
                            <input
                              type="text"
                              placeholder="000.000.000-00"
                              className="w-full h-8 px-1 border border-[#d9d9e0] rounded bg-[rgba(255,255,255,0.9)] text-sm leading-5"
                            />
                          </div>
                        </div>

                        {/* Installments */}
                        <div className="mb-4">
                          <h4 className="text-base text-[#1c2024] leading-6 mb-3">Em quantas parcelas você quer pagar?</h4>
                          <div className="space-y-3">
                            {[
                              { label: "À vista (R$ 1.827)", value: "1x" },
                              { label: "2 x sem juros de R$ 913", value: "2x" },
                              { label: "3 x sem juros de R$ 627", value: "3x" },
                              { label: "4 x com juros de R$ 595", value: "4x" },
                              { label: "5 x com juros de R$ 578", value: "5x" },
                              { label: "6 x com juros de R$ 540", value: "6x" }
                            ].map((option) => (
                              <label key={option.value} className="flex items-center gap-3 cursor-pointer">
                                <div className="w-5 h-5 rounded-full border-2 border-[rgba(0,6,46,0.2)] bg-white flex items-center justify-center flex-shrink-0">
                                  <div className="w-3 h-3 rounded-full bg-white"></div>
                                </div>
                                <input
                                  type="radio"
                                  name="installment"
                                  value={option.value}
                                  className="sr-only"
                                />
                                <span className="text-base text-[#1c2024] leading-6">{option.label}</span>
                              </label>
                            ))}
                          </div>
                        </div>
                      </div>
                    )}

                    {/* Next Button */}
                    <button 
                      onClick={handleNextPaymentMethod}
                      className="bg-primary text-primary-foreground px-4 h-10 rounded-full font-medium text-base leading-6 w-60 hover:opacity-90 transition-opacity"
                    >
                      Próximo
                    </button>
                  </>
                )}
              </div>
            </div>

            {/* Invoice Section */}
            <div className="border border-[#d9d9e0] rounded-2xl">
              <div className="p-4 flex flex-col gap-4">
                <button
                  onClick={() => setInvoiceOpen(!invoiceOpen)}
                  className="flex items-center w-full"
                >
                  {invoiceComplete && <CheckIcon />}
                  <h2 className="flex-1 text-2xl text-[#1c2024] leading-[30px] tracking-[-0.1px] text-left">Em nome de quem emitimos a nota fiscal</h2>
                  {invoiceOpen ? (
                    <ChevronUp size={16} strokeWidth={1.5} className="shrink-0 text-muted-foreground" />
                  ) : (
                    <ChevronDown size={16} strokeWidth={1.5} className="shrink-0 text-muted-foreground" />
                  )}
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
                          <input
                            type="text"
                            placeholder="Digite o nome completo"
                            className="w-full h-8 px-1 border border-[#d9d9e0] rounded bg-[rgba(255,255,255,0.9)] text-sm text-[rgba(0,5,29,0.45)] placeholder:text-[rgba(0,5,29,0.45)] leading-5"
                          />
                        </div>
                        <div className="col-span-2">
                          <label className="block text-sm font-medium text-[#1c2024] leading-5 mb-2">CPF</label>
                          <input
                            type="text"
                            placeholder="000.000.000-00"
                            className="w-full h-8 px-1 border border-[#d9d9e0] rounded bg-[rgba(255,255,255,0.9)] text-sm leading-5"
                          />
                        </div>
                      </div>
                    </div>

                    {/* Reserve Button */}
                    <button 
                      onClick={handleNextInvoice}
                      className="bg-primary text-primary-foreground px-4 h-10 rounded-full font-medium text-base leading-6 w-60 hover:opacity-90 transition-opacity"
                    >
                      Próximo
                    </button>
                  </>
                )}
              </div>
            </div>
          </div>

          {/* Right Column - Booking Summary */}
          <div className="w-[480px] flex-shrink-0">
            <div className="bg-white border border-[#d9d9e0] rounded-2xl p-4 shadow-[0px_4px_16px_0px_rgba(0,0,0,0.1),0px_3px_12px_0px_rgba(0,0,0,0.1),0px_2px_3px_0px_rgba(0,0,51,0.06)] sticky top-8">
              {/* Hotel Section */}
              <div className="mb-6">
                <div className="flex items-center gap-2 mb-2">
                  <MapPin className="w-4 h-4 text-[#60646c]" />
                  <span className="text-sm text-[#1c2024] leading-5">Hotel</span>
                </div>
                <h3 className="text-lg font-semibold text-[#1c2024] leading-[26px] tracking-[-0.04px] mb-1">Quality Paulista São Paulo Jardins</h3>
                <p className="text-sm text-[#60646c] leading-5">Centro, São Paulo</p>
              </div>

              <div className="border-t border-[#d9d9e0] pt-4 mb-4">
                {/* Dates */}
                <div className="grid grid-cols-2 gap-4 mb-4">
                  <div>
                    <p className="text-sm text-[#60646c] leading-5 mb-1">Check-in</p>
                    <p className="text-base text-[#1c2024] leading-6">Qui, 29 dez 2023</p>
                    <p className="text-xs text-[#60646c] leading-4">A partir da 15h</p>
                  </div>
                  <div>
                    <p className="text-sm text-[#60646c] leading-5 mb-1">Check-out</p>
                    <p className="text-base text-[#1c2024] leading-6">Qu, 3 jan 2026</p>
                    <p className="text-xs text-[#60646c] leading-4">Até às 12h</p>
                  </div>
                </div>

                {/* Room Info */}
                <div className="mb-4">
                  <p className="text-sm text-[#60646c] leading-5 mb-1">1 quarto, 2 adultos</p>
                  <p className="text-base text-[#1c2024] leading-6 font-medium">Apartamento Standard</p>
                </div>
              </div>

              <div className="border-t border-[#d9d9e0] pt-4 mb-4">
                {/* Items Table */}
                <div className="space-y-2 mb-4">
                  <div className="flex gap-6 text-sm font-medium text-[#1c2024] leading-5 pb-2">
                    <div className="flex-1">Itens</div>
                    <div className="w-12">Qtd</div>
                    <div className="w-[90px]">Preço</div>
                    <div className="w-[90px] text-right">Total</div>
                  </div>
                  
                  <div className="flex gap-6 text-sm text-[#60646c] leading-5 border-b border-[#d9d9e0] py-2">
                    <div className="flex-1 font-light">Apartamento luxo</div>
                    <div className="w-12 font-light">1</div>
                    <div className="w-[90px] font-light">1.600 tribz</div>
                    <div className="w-[90px] text-right font-light">3.000 tribz</div>
                  </div>
                  
                  <div className="flex gap-6 text-sm text-[#60646c] leading-5 border-b border-[#d9d9e0] py-2">
                    <div className="flex-1 font-light">Apartamento luxo</div>
                    <div className="w-12 font-light">1</div>
                    <div className="w-[90px] font-light">1.400 tribz</div>
                    <div className="w-[90px] text-right font-light">3.200 tribz</div>
                  </div>
                </div>

                {/* Totals */}
                <div className="space-y-2 w-[276px] ml-auto mb-4">
                  <div className="flex justify-between text-sm leading-5">
                    <span className="text-[#1c2024]">Subtotal</span>
                    <span className="text-[#60646c] font-light">6,200 tribz</span>
                  </div>
                  <div className="flex justify-between text-sm leading-5 pb-2">
                    <span className="text-[#1c2024]">Taxas</span>
                    <span className="text-[#60646c] font-light">10% (620)</span>
                  </div>
                  <div className="border-t border-[#d9d9e0] pt-2 flex justify-between text-base font-medium leading-6">
                    <span className="text-[#1c2024]">Total Final</span>
                    <span className="text-[#1c2024]">6.880 tribz</span>
                  </div>
                </div>
              </div>

              {/* Cancellation Info */}
              <div className="bg-[#f9f9fb] border border-[rgba(0,0,47,0.15)] rounded-md p-3 flex gap-2 mb-4">
                <svg className="w-4 h-4 text-[#60646c] flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <circle cx="12" cy="12" r="10" strokeWidth="2"/>
                  <path strokeLinecap="round" strokeWidth="2" d="M12 16v-4M12 8h.01"/>
                </svg>
                <p className="text-sm text-[#60646c] leading-5">Cancelamento gratuito antes de 19 de março</p>
              </div>

              {/* Reserve Button */}
              <button 
                onClick={() => navigate(`/confirmacao?destino=${destination}&checkIn=${checkIn}&checkOut=${checkOut}&adultos=${adults}&acomodacoes=${rooms}&noites=${nights}`)}
                className="w-60 bg-primary text-primary-foreground h-10 rounded-full font-medium text-base leading-6 hover:opacity-90 transition-opacity mx-auto block"
              >
                Efetuar Reserva
              </button>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}