import { useState, useEffect } from "react";
import { useSearchParams, useNavigate } from "react-router";
import { SearchResultsHeader } from "../components/SearchResultsHeader";
import { Footer } from "../components/Footer";
import { HotelResultCard } from "../components/HotelResultCard";
import { ChevronDown, Bell, Pencil, Moon } from "lucide-react";
import { format } from "date-fns";
import { pt } from "date-fns/locale";
import svgPaths from "../../imports/svg-gjkmzh0y8m";
import svgPathsInfo from "../../imports/svg-3rph9qoi06";

export default function SearchResults() {
  const [searchParams, setSearchParams] = useSearchParams();
  const navigate = useNavigate();

  // Get search parameters from URL
  const destination = searchParams.get("destino") || "";
  const checkIn = searchParams.get("checkIn") || "";
  const checkOut = searchParams.get("checkOut") || "";
  const adults = searchParams.get("adultos") || "2";
  const criancas = searchParams.get("criancas") || "0";
  const bebes = searchParams.get("bebes") || "0";
  const rooms = searchParams.get("acomodacoes") || "1";

  // Calculate nights
  const calculateNights = () => {
    if (!checkIn || !checkOut) return 0;
    const start = new Date(checkIn);
    const end = new Date(checkOut);
    const diff = Math.ceil((end.getTime() - start.getTime()) / (1000 * 60 * 60 * 24));
    return diff;
  };

  const nights = calculateNights();

  // Format dates for display
  const formatDisplayDate = (dateStr: string) => {
    if (!dateStr) return "";
    try {
      const date = new Date(dateStr);
      return format(date, "d 'de' MMMM", { locale: pt });
    } catch {
      return "";
    }
  };

  // Format date range for header
  const formatDateRange = () => {
    if (!checkIn || !checkOut) return "";
    try {
      const startDate = new Date(checkIn);
      const endDate = new Date(checkOut);
      return `${format(startDate, "d", { locale: pt })} - ${format(endDate, "d MMM", { locale: pt })}`;
    } catch {
      return "";
    }
  };

  // Mock hotel data
  const hotels = [
    {
      image: "https://images.unsplash.com/photo-1744782996368-dc5b7e697f4c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjBob3RlbCUyMGxvYmJ5JTIwaW50ZXJpb3J8ZW58MXx8fHwxNzczODM3MTM1fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      title: "Kimpton Epic Hotel",
      location: `${destination}, Miami International Airport Area`,
      distance: "3.4km do centro",
      rating: "8.4",
      ratingText: "Muito Bom",
      stars: 4,
      price: "1.000",
      totalPrice: "26.207",
      badges: [
        { text: "Oferta por tempo limitado", color: "#30a46c" },
        { text: "Apenas 2 disponíveis", color: "#e5484d" },
      ],
      features: ["Cancelamento grátis", "Pague em 12x sem juros"],
    },
    {
      image: "https://images.unsplash.com/photo-1758448755969-8791367cf5c5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBob3RlbCUyMGJlZHJvb20lMjBzdWl0ZXxlbnwxfHx8fDE3NzM5NDY3MjV8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      title: "Hotel Boutique Premium",
      location: `${destination}`,
      distance: "1.2km do centro",
      rating: "8.9",
      ratingText: "Excelente",
      stars: 5,
      price: "1.520",
      totalPrice: "39.824",
      badges: [],
      features: ["Cancelamento grátis", "Pague em 12x sem juros"],
    },
    {
      image: "https://images.unsplash.com/photo-1565548182543-8d8852e6acc0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxyZXNvcnQlMjBob3RlbCUyMHBvb2wlMjB2aWV3fGVufDF8fHx8MTc3Mzk0Nzk5MXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      title: "Resort & Spa Exclusive",
      location: `${destination}`,
      distance: "5.8km do centro",
      rating: "9.1",
      ratingText: "Maravilhoso",
      stars: 5,
      price: "2.100",
      totalPrice: "55.020",
      badges: [{ text: "Recomendado", color: "#12a594" }],
      features: ["Cancelamento grátis", "Pague em 12x sem juros"],
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <SearchResultsHeader
        destination={destination}
        dateRange={formatDateRange()}
        guests={parseInt(adults) + parseInt(criancas) + parseInt(bebes)}
        adultos={parseInt(adults)}
        criancas={parseInt(criancas)}
        bebes={parseInt(bebes)}
        rooms={parseInt(rooms)}
        nights={nights}
        checkIn={checkIn}
        checkOut={checkOut}
        onEdit={() => navigate('/')}
        onDatesChange={(newCheckIn, newCheckOut) => {
          const next = new URLSearchParams(searchParams);
          next.set("checkIn", newCheckIn);
          next.set("checkOut", newCheckOut);
          setSearchParams(next);
        }}
        onGuestsChange={(newAdultos, newCriancas, newBebes) => {
          const next = new URLSearchParams(searchParams);
          next.set("adultos", String(newAdultos));
          next.set("criancas", String(newCriancas));
          next.set("bebes", String(newBebes));
          setSearchParams(next);
        }}
        onDestinationChange={(newDestination) => {
          const next = new URLSearchParams(searchParams);
          next.set("destino", newDestination);
          setSearchParams(next);
        }}
      />

      {/* Main Content */}
      <div className="max-w-[1440px] mx-auto px-8 py-6">
        <div className="flex gap-8 items-start">
          {/* Filter Section - Left Sidebar */}
          <aside className="w-[280px] flex-shrink-0">
            <div className="bg-white rounded-2xl p-4 sticky top-24">
              <div className="content-stretch flex flex-col gap-[32px] items-start relative w-full">
                {/* Tipos de estadia */}
                <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0 w-full">
                  <div className="content-stretch flex gap-[12px] h-[40px] items-center overflow-clip relative shrink-0 w-full">
                    <div className="flex flex-[1_0_0] flex-col justify-center leading-[0] min-h-px min-w-px not-italic overflow-hidden relative text-[#1c2024] text-[16px] text-ellipsis whitespace-nowrap">
                      <p className="leading-[24px] overflow-hidden">Tipos de estadia</p>
                    </div>
                    <div className="bg-[rgba(255,255,255,0)] relative shrink-0 size-[18px]">
                      <div className="absolute inset-[40%_20%_28.33%_20%]">
                        <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 10.8 5.70003">
                          <path clipRule="evenodd" d={svgPaths.p32a02600} fill="#1C2024" fillRule="evenodd" />
                        </svg>
                      </div>
                    </div>
                  </div>
                  <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full">
                    {/* Cancelamento grátis */}
                    <div className="content-stretch flex items-center justify-between relative shrink-0 w-full">
                      <div className="content-stretch flex gap-[8px] items-center relative shrink-0">
                        <div className="content-stretch flex flex-col h-[20px] items-start justify-center relative shrink-0">
                          <div className="bg-[#e8e8ec] content-stretch flex h-[16px] items-center p-px relative rounded-[9999px] shrink-0 w-[28px]">
                            <div aria-hidden="true" className="absolute border border-[rgba(0,0,47,0.15)] border-solid inset-0 pointer-events-none rounded-[9999px]" />
                            <div className="bg-white relative rounded-[9999px] shrink-0 size-[14px]">
                              <div aria-hidden="true" className="absolute border border-[#d9d9e0] border-solid inset-[-1px] pointer-events-none rounded-[10000px]" />
                            </div>
                            <div className="absolute inset-0 pointer-events-none rounded-[inherit] shadow-[inset_0px_1.5px_2px_0px_rgba(0,0,0,0.1),inset_0px_1.5px_2px_0px_rgba(0,0,85,0.02)]" />
                          </div>
                        </div>
                        <p className="leading-[16px] not-italic relative shrink-0 text-[#60646c] text-[12px] tracking-[0.04px] whitespace-nowrap">Canelamento grátis</p>
                      </div>
                      <p className="leading-[16px] not-italic relative shrink-0 text-[#60646c] text-[12px] tracking-[0.04px] whitespace-nowrap">148</p>
                    </div>
                    {/* Pagar no destino */}
                    <div className="content-stretch flex items-center justify-between relative shrink-0 w-full">
                      <div className="content-stretch flex gap-[8px] items-center relative shrink-0">
                        <div className="content-stretch flex flex-col h-[20px] items-start justify-center relative shrink-0">
                          <div className="bg-[#e8e8ec] content-stretch flex h-[16px] items-center p-px relative rounded-[9999px] shrink-0 w-[28px]">
                            <div aria-hidden="true" className="absolute border border-[rgba(0,0,47,0.15)] border-solid inset-0 pointer-events-none rounded-[9999px]" />
                            <div className="bg-white relative rounded-[9999px] shrink-0 size-[14px]">
                              <div aria-hidden="true" className="absolute border border-[#d9d9e0] border-solid inset-[-1px] pointer-events-none rounded-[10000px]" />
                            </div>
                            <div className="absolute inset-0 pointer-events-none rounded-[inherit] shadow-[inset_0px_1.5px_2px_0px_rgba(0,0,0,0.1),inset_0px_1.5px_2px_0px_rgba(0,0,85,0.02)]" />
                          </div>
                        </div>
                        <p className="leading-[16px] not-italic relative shrink-0 text-[#60646c] text-[12px] tracking-[0.04px] whitespace-nowrap">Pagar no destino</p>
                      </div>
                      <p className="leading-[16px] not-italic relative shrink-0 text-[#60646c] text-[12px] tracking-[0.04px] whitespace-nowrap">105</p>
                    </div>
                    {/* Pagar parcelado */}
                    <div className="content-stretch flex items-center justify-between relative shrink-0 w-full">
                      <div className="content-stretch flex gap-[8px] items-center relative shrink-0">
                        <div className="content-stretch flex flex-col h-[20px] items-start justify-center relative shrink-0">
                          <div className="bg-[#e8e8ec] content-stretch flex h-[16px] items-center p-px relative rounded-[9999px] shrink-0 w-[28px]">
                            <div aria-hidden="true" className="absolute border border-[rgba(0,0,47,0.15)] border-solid inset-0 pointer-events-none rounded-[9999px]" />
                            <div className="bg-white relative rounded-[9999px] shrink-0 size-[14px]">
                              <div aria-hidden="true" className="absolute border border-[#d9d9e0] border-solid inset-[-1px] pointer-events-none rounded-[10000px]" />
                            </div>
                            <div className="absolute inset-0 pointer-events-none rounded-[inherit] shadow-[inset_0px_1.5px_2px_0px_rgba(0,0,0,0.1),inset_0px_1.5px_2px_0px_rgba(0,0,85,0.02)]" />
                          </div>
                        </div>
                        <p className="leading-[16px] not-italic relative shrink-0 text-[#60646c] text-[12px] tracking-[0.04px] whitespace-nowrap">Pagar parcelado</p>
                      </div>
                      <p className="leading-[16px] not-italic relative shrink-0 text-[#60646c] text-[12px] tracking-[0.04px] whitespace-nowrap">220</p>
                    </div>
                  </div>
                </div>

                {/* Preço total da estadia */}
                <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0 w-full">
                  <div className="content-stretch flex gap-[12px] h-[40px] items-center overflow-clip relative shrink-0 w-full">
                    <div className="flex flex-[1_0_0] flex-col justify-center leading-[0] min-h-px min-w-px not-italic overflow-hidden relative text-[#1c2024] text-[16px] text-ellipsis whitespace-nowrap">
                      <p className="leading-[24px] overflow-hidden">Preço total da estadia</p>
                    </div>
                    <div className="bg-[rgba(255,255,255,0)] relative shrink-0 size-[18px]">
                      <div className="absolute inset-[40%_20%_28.33%_20%]">
                        <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 10.8 5.70003">
                          <path clipRule="evenodd" d={svgPaths.p32a02600} fill="#1C2024" fillRule="evenodd" />
                        </svg>
                      </div>
                    </div>
                  </div>
                  <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full">
                    {/* Slider */}
                    <div className="content-stretch flex h-[6px] items-center justify-center relative shrink-0 w-full">
                      <div className="bg-[rgba(0,0,51,0.06)] content-stretch flex flex-[1_0_0] h-[6px] items-start min-h-px min-w-px relative">
                        <div aria-hidden="true" className="absolute border border-[rgba(0,9,50,0.12)] border-solid inset-0 pointer-events-none" />
                        <div className="-translate-y-1/2 absolute bg-primary h-[6px] left-[12.33%] right-[12.67%] top-1/2">
                          <div aria-hidden="true" className="absolute border border-[rgba(0,9,50,0.12)] border-solid inset-0 pointer-events-none" />
                          <div className="-translate-y-1/2 absolute bg-white right-[-4px] size-[10px] top-1/2">
                            <div aria-hidden="true" className="absolute border border-[#cdced6] border-solid inset-[-1px] pointer-events-none" />
                          </div>
                          <div className="-translate-y-1/2 absolute bg-white left-[-5px] size-[10px] top-1/2">
                            <div aria-hidden="true" className="absolute border border-[#cdced6] border-solid inset-[-1px] pointer-events-none" />
                          </div>
                        </div>
                      </div>
                    </div>
                    {/* Min/Max inputs */}
                    <div className="content-stretch flex gap-[24px] items-center relative shrink-0 w-full">
                      <div className="content-stretch flex flex-[1_0_0] flex-col gap-[4px] items-start min-h-px min-w-px relative">
                        <p className="leading-[16px] not-italic relative shrink-0 text-[#1c2024] text-[12px] tracking-[0.04px] w-full font-medium">Mínimo</p>
                        <div className="bg-[rgba(255,255,255,0.9)] h-[24px] relative shrink-0 w-full">
                          <div aria-hidden="true" className="absolute border border-[#d9d9e0] border-solid inset-0 pointer-events-none" />
                          <div className="flex flex-row items-center size-full">
                            <div className="content-stretch flex items-center px-[4px] relative size-full">
                              <p className="flex-[1_0_0] leading-[16px] min-h-px min-w-px not-italic relative text-[#60646c] text-[12px] tracking-[0.04px]">R$ 1.387</p>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="content-stretch flex flex-[1_0_0] flex-col gap-[4px] items-start min-h-px min-w-px relative">
                        <p className="leading-[16px] not-italic relative shrink-0 text-[#1c2024] text-[12px] tracking-[0.04px] w-full font-medium">Máximo</p>
                        <div className="bg-[rgba(255,255,255,0.9)] h-[24px] relative shrink-0 w-full">
                          <div aria-hidden="true" className="absolute border border-[#d9d9e0] border-solid inset-0 pointer-events-none" />
                          <div className="flex flex-row items-center size-full">
                            <div className="content-stretch flex items-center px-[4px] relative size-full">
                              <p className="flex-[1_0_0] leading-[16px] min-h-px min-w-px not-italic relative text-[#60646c] text-[12px] tracking-[0.04px]">R$ 2.932</p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Filtros Populares */}
                <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0 w-full">
                  <div className="content-stretch flex gap-[12px] h-[40px] items-center overflow-clip relative shrink-0 w-full">
                    <div className="flex flex-[1_0_0] flex-col justify-center leading-[0] min-h-px min-w-px not-italic overflow-hidden relative text-[#1c2024] text-[16px] text-ellipsis whitespace-nowrap">
                      <p className="leading-[24px] overflow-hidden">Filtros Populares</p>
                    </div>
                    <div className="bg-[rgba(255,255,255,0)] relative shrink-0 size-[18px]">
                      <div className="absolute inset-[40%_20%_28.33%_20%]">
                        <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 10.8 5.70003">
                          <path clipRule="evenodd" d={svgPaths.p32a02600} fill="#1C2024" fillRule="evenodd" />
                        </svg>
                      </div>
                    </div>
                  </div>
                  <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full">
                    {/* Café da manhã - checked */}
                    <div className="content-stretch flex gap-[8px] items-start relative shrink-0 w-full">
                      <div className="content-stretch flex h-[20px] items-center relative shrink-0">
                        <div className="bg-primary content-stretch flex items-center justify-center overflow-clip relative shrink-0 size-[16px]">
                          <div className="flex-[1_0_0] h-full min-h-px min-w-px relative">
                            <div className="absolute inset-[24.17%_21.67%_24.17%_23.33%]">
                              <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 8.80008 8.26673">
                                <path clipRule="evenodd" d={svgPaths.p1a06bc70} fill="white" fillRule="evenodd" />
                              </svg>
                            </div>
                          </div>
                        </div>
                      </div>
                      <p className="flex-[1_0_0] leading-[20px] min-h-px min-w-px not-italic relative text-[#1c2024] text-[14px]">Café da manhã</p>
                    </div>
                    {/* Hotéis */}
                    <div className="content-stretch flex gap-[8px] items-start relative shrink-0 w-full">
                      <div className="content-stretch flex h-[20px] items-center relative shrink-0">
                        <div className="bg-[#e8e8ec] relative shrink-0 size-[16px]">
                          <div aria-hidden="true" className="absolute border border-[rgba(0,6,46,0.2)] border-solid inset-0 pointer-events-none" />
                        </div>
                      </div>
                      <p className="flex-[1_0_0] leading-[20px] min-h-px min-w-px not-italic relative text-[#1c2024] text-[14px]">Hotéis</p>
                    </div>
                    {/* 5 estrelas */}
                    <div className="content-stretch flex gap-[8px] items-start relative shrink-0 w-full">
                      <div className="content-stretch flex h-[20px] items-center relative shrink-0">
                        <div className="bg-[#e8e8ec] relative shrink-0 size-[16px]">
                          <div aria-hidden="true" className="absolute border border-[rgba(0,6,46,0.2)] border-solid inset-0 pointer-events-none" />
                        </div>
                      </div>
                      <p className="flex-[1_0_0] leading-[20px] min-h-px min-w-px not-italic relative text-[#1c2024] text-[14px]">5 estrelas</p>
                    </div>
                    {/* 4 estrelas */}
                    <div className="content-stretch flex gap-[8px] items-start relative shrink-0 w-full">
                      <div className="content-stretch flex h-[20px] items-center relative shrink-0">
                        <div className="bg-[#e8e8ec] relative shrink-0 size-[16px]">
                          <div aria-hidden="true" className="absolute border border-[rgba(0,6,46,0.2)] border-solid inset-0 pointer-events-none" />
                        </div>
                      </div>
                      <p className="flex-[1_0_0] leading-[20px] min-h-px min-w-px not-italic relative text-[#1c2024] text-[14px]">4 estrelas</p>
                    </div>
                  </div>
                </div>

                {/* Pontuação */}
                <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0 w-full">
                  <div className="content-stretch flex gap-[12px] h-[40px] items-center overflow-clip relative shrink-0 w-full">
                    <div className="flex flex-[1_0_0] flex-col justify-center leading-[0] min-h-px min-w-px not-italic overflow-hidden relative text-[#1c2024] text-[16px] text-ellipsis whitespace-nowrap">
                      <p className="leading-[24px] overflow-hidden">Pontuação</p>
                    </div>
                    <div className="bg-[rgba(255,255,255,0)] relative shrink-0 size-[18px]">
                      <div className="absolute inset-[40%_20%_28.33%_20%]">
                        <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 10.8 5.70003">
                          <path clipRule="evenodd" d={svgPaths.p32a02600} fill="#1C2024" fillRule="evenodd" />
                        </svg>
                      </div>
                    </div>
                  </div>
                  <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full">
                    <div className="content-stretch flex gap-[8px] items-start relative shrink-0 w-full">
                      <div className="content-stretch flex h-[20px] items-center relative shrink-0">
                        <div className="bg-[#e8e8ec] relative shrink-0 size-[16px]">
                          <div aria-hidden="true" className="absolute border border-[rgba(0,6,46,0.2)] border-solid inset-0 pointer-events-none" />
                        </div>
                      </div>
                      <p className="flex-[1_0_0] leading-[20px] min-h-px min-w-px not-italic relative text-[#1c2024] text-[14px]">9 ou mais - Excellente</p>
                    </div>
                    <div className="content-stretch flex gap-[8px] items-start relative shrink-0 w-full">
                      <div className="content-stretch flex h-[20px] items-center relative shrink-0">
                        <div className="bg-[#e8e8ec] relative shrink-0 size-[16px]">
                          <div aria-hidden="true" className="absolute border border-[rgba(0,6,46,0.2)] border-solid inset-0 pointer-events-none" />
                        </div>
                      </div>
                      <p className="flex-[1_0_0] leading-[20px] min-h-px min-w-px not-italic relative text-[#1c2024] text-[14px]">8 ou mais - Muito bom</p>
                    </div>
                    <div className="content-stretch flex gap-[8px] items-start relative shrink-0 w-full">
                      <div className="content-stretch flex h-[20px] items-center relative shrink-0">
                        <div className="bg-[#e8e8ec] relative shrink-0 size-[16px]">
                          <div aria-hidden="true" className="absolute border border-[rgba(0,6,46,0.2)] border-solid inset-0 pointer-events-none" />
                        </div>
                      </div>
                      <p className="flex-[1_0_0] leading-[20px] min-h-px min-w-px not-italic relative text-[#1c2024] text-[14px]">7 ou mais - Confortável</p>
                    </div>
                    <div className="content-stretch flex gap-[8px] items-start relative shrink-0 w-full">
                      <div className="content-stretch flex h-[20px] items-center relative shrink-0">
                        <div className="bg-[#e8e8ec] relative shrink-0 size-[16px]">
                          <div aria-hidden="true" className="absolute border border-[rgba(0,6,46,0.2)] border-solid inset-0 pointer-events-none" />
                        </div>
                      </div>
                      <p className="flex-[1_0_0] leading-[20px] min-h-px min-w-px not-italic relative text-[#1c2024] text-[14px]">6 ou mais - Bom</p>
                    </div>
                  </div>
                </div>

                {/* Tipo de hospedagem */}
                <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0 w-full">
                  <div className="content-stretch flex gap-[12px] h-[40px] items-center overflow-clip relative shrink-0 w-full">
                    <div className="flex flex-[1_0_0] flex-col justify-center leading-[0] min-h-px min-w-px not-italic overflow-hidden relative text-[#1c2024] text-[16px] text-ellipsis whitespace-nowrap">
                      <p className="leading-[24px] overflow-hidden">Tipo de hospedagem</p>
                    </div>
                    <div className="bg-[rgba(255,255,255,0)] relative shrink-0 size-[18px]">
                      <div className="absolute inset-[40%_20%_28.33%_20%]">
                        <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 10.8 5.70003">
                          <path clipRule="evenodd" d={svgPaths.p32a02600} fill="#1C2024" fillRule="evenodd" />
                        </svg>
                      </div>
                    </div>
                  </div>
                  <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full">
                    <div className="content-stretch flex gap-[8px] items-start relative shrink-0 w-full">
                      <div className="content-stretch flex h-[20px] items-center relative shrink-0">
                        <div className="bg-[#e8e8ec] relative shrink-0 size-[16px]">
                          <div aria-hidden="true" className="absolute border border-[rgba(0,6,46,0.2)] border-solid inset-0 pointer-events-none" />
                        </div>
                      </div>
                      <p className="flex-[1_0_0] leading-[20px] min-h-px min-w-px not-italic relative text-[#1c2024] text-[14px]">Apart-Hotéis</p>
                    </div>
                    <div className="content-stretch flex gap-[8px] items-start relative shrink-0 w-full">
                      <div className="content-stretch flex h-[20px] items-center relative shrink-0">
                        <div className="bg-[#e8e8ec] relative shrink-0 size-[16px]">
                          <div aria-hidden="true" className="absolute border border-[rgba(0,6,46,0.2)] border-solid inset-0 pointer-events-none" />
                        </div>
                      </div>
                      <p className="flex-[1_0_0] leading-[20px] min-h-px min-w-px not-italic relative text-[#1c2024] text-[14px]">Bed and Breakfasts</p>
                    </div>
                    <div className="content-stretch flex gap-[8px] items-start relative shrink-0 w-full">
                      <div className="content-stretch flex h-[20px] items-center relative shrink-0">
                        <div className="bg-[#e8e8ec] relative shrink-0 size-[16px]">
                          <div aria-hidden="true" className="absolute border border-[rgba(0,6,46,0.2)] border-solid inset-0 pointer-events-none" />
                        </div>
                      </div>
                      <p className="flex-[1_0_0] leading-[20px] min-h-px min-w-px not-italic relative text-[#1c2024] text-[14px]">Hostels</p>
                    </div>
                    <div className="content-stretch flex gap-[8px] items-start relative shrink-0 w-full">
                      <div className="content-stretch flex h-[20px] items-center relative shrink-0">
                        <div className="bg-[#e8e8ec] relative shrink-0 size-[16px]">
                          <div aria-hidden="true" className="absolute border border-[rgba(0,6,46,0.2)] border-solid inset-0 pointer-events-none" />
                        </div>
                      </div>
                      <p className="flex-[1_0_0] leading-[20px] min-h-px min-w-px not-italic relative text-[#1c2024] text-[14px]">Hotéis</p>
                    </div>
                  </div>
                </div>

                {/* Serviços */}
                <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0 w-full">
                  <div className="content-stretch flex gap-[12px] h-[40px] items-center overflow-clip relative shrink-0 w-full">
                    <div className="flex flex-[1_0_0] flex-col justify-center leading-[0] min-h-px min-w-px not-italic overflow-hidden relative text-[#1c2024] text-[16px] text-ellipsis whitespace-nowrap">
                      <p className="leading-[24px] overflow-hidden">Serviços</p>
                    </div>
                    <div className="bg-[rgba(255,255,255,0)] relative shrink-0 size-[18px]">
                      <div className="absolute inset-[40%_20%_28.33%_20%]">
                        <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 10.8 5.70003">
                          <path clipRule="evenodd" d={svgPaths.p32a02600} fill="#1C2024" fillRule="evenodd" />
                        </svg>
                      </div>
                    </div>
                  </div>
                  <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full">
                    <div className="content-stretch flex gap-[8px] items-start relative shrink-0 w-full">
                      <div className="content-stretch flex h-[20px] items-center relative shrink-0">
                        <div className="bg-[#e8e8ec] relative shrink-0 size-[16px]">
                          <div aria-hidden="true" className="absolute border border-[rgba(0,6,46,0.2)] border-solid inset-0 pointer-events-none" />
                        </div>
                      </div>
                      <p className="flex-[1_0_0] leading-[20px] min-h-px min-w-px not-italic relative text-[#1c2024] text-[14px]">Estacionamento</p>
                    </div>
                    <div className="content-stretch flex gap-[8px] items-start relative shrink-0 w-full">
                      <div className="content-stretch flex h-[20px] items-center relative shrink-0">
                        <div className="bg-[#e8e8ec] relative shrink-0 size-[16px]">
                          <div aria-hidden="true" className="absolute border border-[rgba(0,6,46,0.2)] border-solid inset-0 pointer-events-none" />
                        </div>
                      </div>
                      <p className="flex-[1_0_0] leading-[20px] min-h-px min-w-px not-italic relative text-[#1c2024] text-[14px]">Piscina</p>
                    </div>
                    <div className="content-stretch flex gap-[8px] items-start relative shrink-0 w-full">
                      <div className="content-stretch flex h-[20px] items-center relative shrink-0">
                        <div className="bg-[#e8e8ec] relative shrink-0 size-[16px]">
                          <div aria-hidden="true" className="absolute border border-[rgba(0,6,46,0.2)] border-solid inset-0 pointer-events-none" />
                        </div>
                      </div>
                      <p className="flex-[1_0_0] leading-[20px] min-h-px min-w-px not-italic relative text-[#1c2024] text-[14px]">Aceita animais de estimação</p>
                    </div>
                    <div className="content-stretch flex gap-[8px] items-start relative shrink-0 w-full">
                      <div className="content-stretch flex h-[20px] items-center relative shrink-0">
                        <div className="bg-[#e8e8ec] relative shrink-0 size-[16px]">
                          <div aria-hidden="true" className="absolute border border-[rgba(0,6,46,0.2)] border-solid inset-0 pointer-events-none" />
                        </div>
                      </div>
                      <p className="flex-[1_0_0] leading-[20px] min-h-px min-w-px not-italic relative text-[#1c2024] text-[14px]">Serviços para crianças</p>
                    </div>
                    <div className="content-stretch flex gap-[8px] items-start relative shrink-0 w-full">
                      <div className="content-stretch flex h-[20px] items-center relative shrink-0">
                        <div className="bg-[#e8e8ec] relative shrink-0 size-[16px]">
                          <div aria-hidden="true" className="absolute border border-[rgba(0,6,46,0.2)] border-solid inset-0 pointer-events-none" />
                        </div>
                      </div>
                      <p className="flex-[1_0_0] leading-[20px] min-h-px min-w-px not-italic relative text-[#1c2024] text-[14px]">Recursos de acessibilidade</p>
                    </div>
                    <div className="content-stretch flex gap-[8px] items-start relative shrink-0 w-full">
                      <div className="content-stretch flex h-[20px] items-center relative shrink-0">
                        <div className="bg-[#e8e8ec] relative shrink-0 size-[16px]">
                          <div aria-hidden="true" className="absolute border border-[rgba(0,6,46,0.2)] border-solid inset-0 pointer-events-none" />
                        </div>
                      </div>
                      <p className="flex-[1_0_0] leading-[20px] min-h-px min-w-px not-italic relative text-[#1c2024] text-[14px]">Serviço de transfer</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </aside>

          {/* Hotel Results - Main Content */}
          <main className="w-[1199px] flex-shrink-0">
            <div className="flex flex-col gap-6">
              {/* Info Card */}
              <div className="content-stretch flex flex-col gap-[16px] items-start relative w-full">
                {/* Heading and Text */}
                <div className="content-stretch flex flex-col gap-[5px] items-start relative shrink-0 w-full">
                  <div className="content-stretch flex items-start relative shrink-0 w-full">
                    <p className="leading-[26px] not-italic relative shrink-0 text-[#1c2024] text-[18px] tracking-[-0.04px] whitespace-nowrap font-medium">
                      {destination}: 1.708 acomodações encontradas
                    </p>
                  </div>
                  <div className="content-stretch flex items-start relative shrink-0 w-full">
                    <p className="flex-[1_0_0] leading-[16px] min-h-px min-w-px not-italic relative text-[#60646c] text-[12px] tracking-[0.04px] font-light">
                      Todas as opções de hotéis passam por uma curadoria nossa para te oferecer a melhor experiência
                    </p>
                  </div>
                </div>

                {/* Sort and Map */}
                <div className="content-stretch flex items-start justify-between relative shrink-0 w-full">
                  <button className="bg-[rgba(0,0,51,0.06)] h-[32px] opacity-92 relative shrink-0">
                    <div className="content-stretch flex gap-[8px] h-full items-center overflow-clip px-[12px] relative rounded-[inherit]">
                      <div className="flex flex-col justify-center leading-[0] not-italic overflow-hidden relative shrink-0 text-[14px] text-[rgba(0,7,27,0.5)] text-ellipsis whitespace-nowrap">
                        <p className="leading-[20px] overflow-hidden">Ordenar por: Mais relevantes</p>
                      </div>
                      <div className="bg-[rgba(255,255,255,0)] relative shrink-0 size-[16px]">
                        <div className="absolute inset-[40%_20%_28.33%_20%]">
                          <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 10.8 5.70003">
                            <path clipRule="evenodd" d={svgPaths.p32a02600} fill="#1C2024" fillRule="evenodd" />
                          </svg>
                        </div>
                      </div>
                    </div>
                    <div aria-hidden="true" className="absolute border border-[rgba(0,8,48,0.27)] border-solid inset-0 pointer-events-none" />
                  </button>

                  <button className="content-stretch flex gap-[8px] h-[32px] items-center justify-center px-[12px] relative shrink-0">
                    <div className="flex flex-col justify-center leading-[0] not-italic relative shrink-0 text-[#60646c] text-[14px] whitespace-nowrap">
                      <p className="leading-[20px]">Explorar no mapa</p>
                    </div>
                    <div className="bg-[rgba(255,255,255,0)] relative shrink-0 size-[16px]">
                      <div className="absolute inset-[27%_33.67%_27%_40.33%]">
                        <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 4.16 7.36001">
                          <path clipRule="evenodd" d={svgPathsInfo.p203c6480} fill="#60646C" fillRule="evenodd" />
                        </svg>
                      </div>
                    </div>
                  </button>
                </div>
              </div>

              {/* Hotel Cards */}
              <div className="flex flex-col gap-6">
                {hotels.map((hotel, index) => (
                  <HotelResultCard 
                    key={index} 
                    {...hotel}
                    searchParams={{
                      destino: destination,
                      checkIn: checkIn,
                      checkOut: checkOut,
                      adultos: adults,
                      acomodacoes: rooms
                    }}
                  />
                ))}
              </div>

              {/* Pagination */}
              <div className="flex items-center justify-center gap-2 mt-4">
                <button className="size-8 rounded-full bg-[#f0f0f3] flex items-center justify-center hover:bg-[#e0e0e6] transition-colors">
                  <svg className="size-4" fill="none" viewBox="0 0 16 16">
                    <path
                      d="M10 12L6 8L10 4"
                      stroke="#60646C"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </button>
                <button className="size-8 rounded-full bg-[#12a594] flex items-center justify-center text-white font-medium text-sm">
                  1
                </button>
                <button className="size-8 rounded-full bg-[#f0f0f3] flex items-center justify-center hover:bg-[#e0e0e6] transition-colors text-sm font-medium text-muted-foreground">
                  2
                </button>
                <button className="size-8 rounded-full bg-[#f0f0f3] flex items-center justify-center hover:bg-[#e0e0e6] transition-colors text-sm font-medium text-muted-foreground">
                  3
                </button>
                <button className="size-8 rounded-full bg-[#f0f0f3] flex items-center justify-center hover:bg-[#e0e0e6] transition-colors">
                  <svg className="size-4" fill="none" viewBox="0 0 16 16">
                    <path
                      d="M6 12L10 8L6 4"
                      stroke="#60646C"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </button>
              </div>
            </div>
          </main>
        </div>
      </div>

      <Footer />
    </div>
  );
}