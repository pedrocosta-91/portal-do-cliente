import { Header, NavCategory } from "../components/Header";
import { SearchSection } from "../components/SearchSection";
import { HotelCard } from "../components/HotelCard";
import { Footer } from "../components/Footer";
import { SectionTitle } from "../components/SectionTitle";
import { FlightCard } from "../components/FlightCard";
import { useState, useCallback } from "react";
import useEmblaCarousel from "embla-carousel-react";

const imgHeroImage = "/hero-image.jpg";

export default function HomePage() {
  const [activeTab, setActiveTab] = useState("Todos");
  const [activeFlightTab, setActiveFlightTab] = useState("Todos");
  const [searchTab, setSearchTab] = useState<"Hospedagem" | "Passagem aérea">("Hospedagem");
  const navCategory: NavCategory = searchTab === "Passagem aérea" ? "passagens" : "hospedagem";
  const [emblaRef, emblaApi] = useEmblaCarousel({ align: "start", loop: true, watchDrag: false });
  const scrollPrev = useCallback(() => emblaApi?.scrollPrev(), [emblaApi]);
  const scrollNext = useCallback(() => emblaApi?.scrollNext(), [emblaApi]);

  const [emblaBannerRef, emblaBannerApi] = useEmblaCarousel({ align: "start", loop: true, watchDrag: false });
  const scrollBannerPrev = useCallback(() => emblaBannerApi?.scrollPrev(), [emblaBannerApi]);
  const scrollBannerNext = useCallback(() => emblaBannerApi?.scrollNext(), [emblaBannerApi]);

  const [emblaFlightsRef, emblaFlightsApi] = useEmblaCarousel({ align: "start", loop: true, watchDrag: false });
  const scrollFlightsPrev = useCallback(() => emblaFlightsApi?.scrollPrev(), [emblaFlightsApi]);
  const scrollFlightsNext = useCallback(() => emblaFlightsApi?.scrollNext(), [emblaFlightsApi]);
  
  const featuredHotels = [
    {
      image: "https://images.unsplash.com/photo-1729673766571-2409a89a3f64?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjBob3RlbCUyMHJlc29ydCUyMHBvb2x8ZW58MXx8fHwxNzczODIxODYwfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      title: "Resort Vista Mar",
      location: "Bali, Indonésia",
      price: "11.497",
      originalPrice: "16.321",
      rating: "7.1",
      distance: "A 2,15 km do centro"
    },
    {
      image: "https://images.unsplash.com/photo-1572177215152-32f247303126?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBob3RlbCUyMGJlZHJvb20lMjBpbnRlcmlvcnxlbnwxfHx8fDE3NzM5NDIxNTR8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      title: "Hotel Boutique Premium",
      location: "Paris, França",
      price: "15.200",
      originalPrice: "19.800",
      rating: "8.5",
      distance: "A 1,5 km do centro"
    },
    {
      image: "https://images.unsplash.com/photo-1765978372751-aa89dc6d30e5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxiZWFjaCUyMHJlc29ydCUyMHRyb3BpY2FsJTIwZGVzdGluYXRpb258ZW58MXx8fHwxNzczOTQyMTU0fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      title: "Paraíso Tropical",
      location: "Maldivas",
      price: "21.500",
      originalPrice: "28.000",
      rating: "9.2",
      distance: "Resort privado"
    },
    {
      image: "https://images.unsplash.com/photo-1759476421593-a2f0b514abb9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb3VudGFpbiUyMGxvZGdlJTIwaG90ZWwlMjB2aWV3fGVufDF8fHx8MTc3Mzk0MjE1NXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      title: "Lodge Montanha Nevada",
      location: "Aspen, EUA",
      price: "14.450",
      originalPrice: "18.900",
      rating: "8.1",
      distance: "A 5,2 km do centro"
    },
    {
      image: "https://images.unsplash.com/photo-1688933758128-83d40ab10b4e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjaXR5JTIwaG90ZWwlMjBza3lsaW5lJTIwdmlld3xlbnwxfHx8fDE3NzM5NDIxNTZ8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      title: "Sky Suites Tokio",
      location: "Tóquio, Japão",
      price: "17.890",
      originalPrice: "22.500",
      rating: "9.0",
      distance: "A 1,8 km do centro"
    },
    {
      image: "https://images.unsplash.com/photo-1483729558449-99ef09a8c325?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxyaW8lMjBkZSUyMGphbmVpcm8lMjBiZWFjaHxlbnwxfHx8fDE3NzM5NDIxNTh8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      title: "Grand Copacabana Hotel",
      location: "Rio de Janeiro, Brasil",
      price: "8.750",
      originalPrice: "11.200",
      rating: "8.6",
      distance: "A 0,3 km da praia"
    }
  ];

  const popularDestinations = [
    {
      image: "https://images.unsplash.com/photo-1688933758128-83d40ab10b4e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjaXR5JTIwaG90ZWwlMjBza3lsaW5lJTIwdmlld3xlbnwxfHx8fDE3NzM5NDIxNTZ8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      title: "Grand Hotel Central",
      location: "Nova York, EUA",
      price: "9.800",
      originalPrice: "12.500",
      rating: "7.9",
      distance: "A 0,8 km do centro"
    },
    {
      image: "https://images.unsplash.com/photo-1760385737098-0b555a75b2ba?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxib3V0aXF1ZSUyMGhvdGVsJTIwZW50cmFuY2UlMjBkZXNpZ258ZW58MXx8fHwxNzczOTQyMTU2fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      title: "Casa Heritage",
      location: "Lisboa, Portugal",
      price: "6.500",
      originalPrice: "8.900",
      rating: "8.3",
      distance: "A 2,3 km do centro"
    },
    {
      image: "https://images.unsplash.com/photo-1768697358705-c1b60333da35?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxob3RlbCUyMHJlc3RhdXJhbnQlMjBkaW5pbmclMjBlbGVnYW50fGVufDF8fHx8MTc3MzkzNzAzMnww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      title: "Palazzo Elegante",
      location: "Roma, Itália",
      price: "11.100",
      originalPrice: "14.200",
      rating: "8.4",
      distance: "A 1,2 km do centro"
    },
    {
      image: "https://images.unsplash.com/photo-1751699123652-c2c585e19d97?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0cm9waWNhbCUyMHZhY2F0aW9uJTIwcmVzb3J0JTIwYWVyaWFsfGVufDF8fHx8MTc3Mzk0MjE1N3ww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      title: "Island Paradise Resort",
      location: "Phuket, Tailândia",
      price: "7.500",
      originalPrice: "9.800",
      rating: "8.0",
      distance: "A 4,5 km do centro"
    }
  ];

  const bannerHotels = [
    {
      image: "https://images.unsplash.com/photo-1759476421593-a2f0b514abb9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb3VudGFpbiUyMGxvZGdlJTIwaG90ZWwlMjB2aWV3fGVufDF8fHx8MTc3Mzk0MjE1NXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      title: "Los Angeles Bay Hotel",
      location: "Los Angeles",
      distance: "A 3,94 km do centro",
      price: "29.235",
      originalPrice: "33.432",
      rating: "7.1"
    },
    {
      image: "https://images.unsplash.com/photo-1572177215152-32f247303126?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBob3RlbCUyMGJlZHJvb20lMjBpbnRlcmlvcnxlbnwxfHx8fDE3NzM5NDIxNTR8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      title: "Hotel Atlântico Business",
      location: "Rio de Janeiro",
      distance: "A 3,94 km do centro",
      price: "31.481",
      originalPrice: "35.432",
      rating: "7.1"
    },
    {
      image: "https://images.unsplash.com/photo-1729673766571-2409a89a3f64?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjBob3RlbCUyMHJlc29ydCUyMHBvb2x8ZW58MXx8fHwxNzczODIxODYwfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      title: "Riviera Palace Hotel",
      location: "Mônaco",
      distance: "A 0,5 km do centro",
      price: "42.100",
      originalPrice: "51.300",
      rating: "9.4"
    },
    {
      image: "https://images.unsplash.com/photo-1765978372751-aa89dc6d30e5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxiZWFjaCUyMHJlc29ydCUyMHRyb3BpY2FsJTIwZGVzdGluYXRpb258ZW58MXx8fHwxNzczOTQyMTU0fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      title: "Coral Bay Resort",
      location: "Cancún, México",
      distance: "A 1,2 km da praia",
      price: "18.650",
      originalPrice: "23.900",
      rating: "8.8"
    }
  ];

  const featuredFlights = [
    {
      image: "https://images.unsplash.com/photo-1765978372751-aa89dc6d30e5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxiZWFjaCUyMHJlc29ydCUyMHRyb3BpY2FsJTIwZGVzdGluYXRpb258ZW58MXx8fHwxNzczOTQyMTU0fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      destination: "Voos para São Paulo",
      origin: "Saindo de Brasília",
      airline: "Por Azul",
      price: "13.685",
      dateRange: "29 Abril 2026 - 19 Maio 2026"
    },
    {
      image: "https://images.unsplash.com/photo-1483729558449-99ef09a8c325?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxyaW8lMjBkZSUyMGphbmVpcm8lMjBiZWFjaHxlbnwxfHx8fDE3NzM5NDIxNTh8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      destination: "Voos para Rio de Janeiro",
      origin: "Saindo de Brasília",
      airline: "Por Azul",
      price: "25.987",
      dateRange: "29 Abril 2026 - 19 Maio 2026"
    },
    {
      image: "https://images.unsplash.com/photo-1610296669228-602fa827fc1f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxyZWNpZmUlMjBiZWFjaHxlbnwxfHx8fDE3NzM5NDIxNTl8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      destination: "Voos para Recife",
      origin: "Saindo de Brasília",
      airline: "Por Azul",
      price: "32.523",
      dateRange: "29 Abril 2026 - 19 Maio 2026"
    },
    {
      image: "https://images.unsplash.com/photo-1729673766571-2409a89a3f64?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjBob3RlbCUyMHJlc29ydCUyMHBvb2x8ZW58MXx8fHwxNzczODIxODYwfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      destination: "Voos para Salvador",
      origin: "Saindo de Brasília",
      airline: "Por Azul",
      price: "8.743",
      dateRange: "29 Abril 2026 - 19 Maio 2026"
    },
    {
      image: "https://images.unsplash.com/photo-1751699123652-c2c585e19d97?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0cm9waWNhbCUyMHZhY2F0aW9uJTIwcmVzb3J0JTIwYWVyaWFsfGVufDF8fHx8MTc3Mzk0MjE1N3ww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      destination: "Voos para Fortaleza",
      origin: "Saindo de Brasília",
      airline: "Por Latam",
      price: "11.290",
      dateRange: "29 Abril 2026 - 19 Maio 2026"
    },
    {
      image: "https://images.unsplash.com/photo-1759476421593-a2f0b514abb9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb3VudGFpbiUyMGxvZGdlJTIwaG90ZWwlMjB2aWV3fGVufDF8fHx8MTc3Mzk0MjE1NXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      destination: "Voos para Manaus",
      origin: "Saindo de Brasília",
      airline: "Por Gol",
      price: "19.450",
      dateRange: "29 Abril 2026 - 19 Maio 2026"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <div className="relative min-h-[700px] rounded-bl-2xl rounded-br-2xl">
        <div className="absolute inset-0 rounded-bl-2xl rounded-br-2xl overflow-hidden">
          <img
            src={imgHeroImage}
            alt="Hero"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/20 to-black/40" />
        </div>
        <div className="relative z-10 flex flex-col justify-between min-h-[700px]">
          <Header
            onHospedagensClick={() => setSearchTab("Hospedagem")}
            onPassagensClick={() => setSearchTab("Passagem aérea")}
            activeCategory={navCategory}
          />
          <div className="pb-8">
            <SearchSection tab={searchTab} />
          </div>
        </div>
      </div>

      {/* Content Sections */}
      <div className="max-w-[1440px] mx-auto px-8 py-12">
        {/* Featured Hotels */}
        <section className="mb-16">
          <SectionTitle
            title="Hospedagens escolhidas a dedo para você"
            tabs={["Todos", "Praia", "Urbano", "Cultural", "Econômico"]}
            activeTab={activeTab}
            onTabChange={setActiveTab}
            onPrevious={scrollPrev}
            onNext={scrollNext}
          />
          <div className="overflow-hidden mt-6" ref={emblaRef}>
            <div className="flex gap-6">
              {featuredHotels.map((hotel, index) => (
                <div key={index} className="flex-[0_0_calc(25%-18px)] min-w-0 shrink-0">
                  <HotelCard {...hotel} />
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Banner Section */}
        <section className="mb-16 bg-[#fcfcfd] rounded-2xl p-8">
          <div className="flex gap-8 items-start">
            {/* Left Column - Text Content */}
            <div className="w-[576px] flex flex-col items-start justify-between py-4">
              {/* Title and Description */}
              <div className="flex flex-col gap-4 items-start w-full mb-8">
                <div className="w-full">
                  <h2 className="text-[60px] font-medium text-foreground leading-[60px] tracking-[-0.4px] mb-0">
                    Hospedagem
                  </h2>
                  <h2 className="text-[60px] font-medium text-foreground leading-[60px] tracking-[-0.4px]">
                    com padrão de excelência.
                  </h2>
                </div>
                <div className="w-full">
                  <p className="text-2xl font-light text-muted-foreground leading-[30px] tracking-[-0.1px] mb-0">
                    Curadoria especializada para garantir
                  </p>
                  <p className="text-2xl font-light text-muted-foreground leading-[30px] tracking-[-0.1px]">
                    o seu conforto.
                  </p>
                </div>
              </div>

              {/* Navigation Buttons and Description */}
              <div className="flex items-start justify-between w-full">
                <div className="flex gap-4 items-center">
                  <button onClick={scrollBannerPrev} className="relative rounded-full shrink-0 size-8 border border-[rgba(0,8,48,0.27)] hover:bg-muted transition-colors">
                    <div className="flex items-center justify-center overflow-clip size-full">
                      <div className="overflow-clip relative shrink-0 size-4">
                        <div className="absolute inset-[21.88%_34.38%]">
                          <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 4.99992 8.99992">
                            <path d="M4.14645 0.146447C4.34171 -0.0488155 4.65822 -0.0488155 4.85348 0.146447C5.04874 0.341709 5.04874 0.658216 4.85348 0.853478L1.20699 4.49996L4.85348 8.14645C5.04874 8.34171 5.04874 8.65822 4.85348 8.85348C4.65822 9.04874 4.34171 9.04874 4.14645 8.85348L0.146447 4.85348C-0.0488155 4.65822 -0.0488155 4.34171 0.146447 4.14645L4.14645 0.146447Z" fill="#60646C" />
                          </svg>
                        </div>
                      </div>
                    </div>
                  </button>
                  <button onClick={scrollBannerNext} className="relative rounded-full shrink-0 size-8 border border-[rgba(0,8,48,0.27)] hover:bg-muted transition-colors">
                    <div className="flex items-center justify-center overflow-clip size-full">
                      <div className="overflow-clip relative shrink-0 size-4">
                        <div className="absolute inset-[21.88%_34.38%]">
                          <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 4.99992 8.99992">
                            <path d="M0.146447 0.146447C0.341709 -0.0488155 0.658216 -0.0488155 0.853478 0.146447L4.85348 4.14645C5.04874 4.34171 5.04874 4.65822 4.85348 4.85348L0.853478 8.85348C0.658216 9.04874 0.341709 9.04874 0.146447 8.85348C-0.0488155 8.65822 -0.0488155 8.34171 0.146447 8.14645L3.79293 4.49996L0.146447 0.853478C-0.0488155 0.658216 -0.0488155 0.341709 0.146447 0.146447Z" fill="#60646C" />
                          </svg>
                        </div>
                      </div>
                    </div>
                  </button>
                </div>
                <div className="w-[400px]">
                  <p className="font-light text-muted-foreground leading-6">
                    Esqueça as surpresas desagradáveis. Selecionamos propriedades que entregam a melhor infraestrutura e atendimento, chanceladas por nossos 30 anos de expertise em turismo.
                  </p>
                </div>
              </div>
            </div>

            {/* Right Column - Hotel Cards Carousel */}
            <div className="flex-1 overflow-hidden" ref={emblaBannerRef}>
              <div className="flex -ml-4">
                {bannerHotels.map((hotel, index) => (
                  <div key={index} className="flex-[0_0_50%] pl-4 min-w-0 shrink-0">
                    <HotelCard {...hotel} />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Popular Flights */}
        <section className="mb-16">
          <SectionTitle
            title="Passagens aéreas baratas para destinos populares"
            tabs={["Todos", "Praia", "Urbano", "Cultural", "Econômico"]}
            activeTab={activeFlightTab}
            onTabChange={setActiveFlightTab}
            onPrevious={scrollFlightsPrev}
            onNext={scrollFlightsNext}
          />
          <div className="overflow-hidden mt-6" ref={emblaFlightsRef}>
            <div className="flex -ml-6">
              {featuredFlights.map((flight, index) => (
                <div key={index} className="flex-[0_0_25%] pl-6 min-w-0 shrink-0">
                  <FlightCard {...flight} />
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Divider Image */}
        <section className="mb-16 relative h-[540px] overflow-hidden flex items-center pl-8 rounded-2xl">
          <div className="absolute inset-0 overflow-hidden">
            <img
              src="/divider-image.jpg"
              alt="Divider"
              className="absolute w-full max-w-none object-cover"
              style={{ height: "169.88%", top: "-20.12%" }}
            />
          </div>
          <div className="absolute inset-0 bg-black/40" />
          <div className="relative z-10 flex flex-col gap-8 w-[480px]">
            <div className="flex flex-col gap-4">
              <h2
                className="text-white"
                style={{
                  fontFamily: "'Poppins', sans-serif",
                  fontSize: "60px",
                  fontWeight: 500,
                  lineHeight: "60px",
                  letterSpacing: "-0.4px",
                }}
              >
                Eleve o nível da sua próxima estadia
              </h2>
              <p
                className="text-white"
                style={{
                  fontFamily: "'Poppins', sans-serif",
                  fontSize: "16px",
                  fontWeight: 300,
                  lineHeight: "24px",
                }}
              >
                Cadastre-se para acessar benefícios exclusivos e a segurança de quem tem 30 anos de expertise em turismo.
              </p>
            </div>
            <button
              className="self-start flex items-center justify-center h-10 px-4 rounded-full text-white font-medium transition-colors hover:opacity-90"
              style={{
                backgroundColor: "#03867B",
                fontFamily: "'Poppins', sans-serif",
                fontSize: "16px",
                fontWeight: 500,
              }}
            >
              Acessar benefícios
            </button>
          </div>
        </section>

        {/* Footer Frame — Vá além do hotel */}
        <section className="mb-16 flex flex-col items-center gap-16">

          {/* Título da seção */}
          <div className="flex flex-col items-center gap-4 text-center">
            <h2 style={{ fontSize: "35px", fontWeight: 500, lineHeight: "40px", letterSpacing: "-0.16px", color: "#1c2024" }}>
              Vá além do hotel: viva o destino
            </h2>
            <p style={{ fontSize: "16px", fontWeight: 300, lineHeight: "24px", color: "#60646c" }}>
              Complete seu planejamento adicionando tours e passeios<br />
              avaliados por nossos especialistas.
            </p>
          </div>

          {/* Cards sobrepostos com rotação */}
          <div className="relative" style={{ width: "750px", height: "507px" }}>
            {/* Card esquerdo — -5deg */}
            <div
              className="absolute flex items-center justify-center"
              style={{ left: 0, top: "29.51px", width: "369.957px", height: "477.223px" }}
            >
              <div
                style={{
                  transform: "rotate(-5deg)",
                  width: "332px",
                  borderRadius: "16px",
                  overflow: "hidden",
                  boxShadow: "0px 4px 16px 0px rgba(0,0,0,0.1), 0px 3px 12px 0px rgba(0,0,0,0.1), 0px 2px 3px 0px rgba(0,0,51,0.06)",
                }}
              >
                <img src="/promo-natureza.jpg" alt="Imersão na Natureza" className="w-full object-cover" style={{ height: "324px", display: "block" }} />
                <div style={{ backgroundColor: "#fcfcfd", padding: "16px", display: "flex", flexDirection: "column", gap: "8px" }}>
                  <h3 style={{ fontSize: "18px", fontWeight: 700, lineHeight: "26px", letterSpacing: "-0.04px", color: "#1c2024" }}>
                    Imersão na Natureza
                  </h3>
                  <p style={{ fontSize: "14px", fontWeight: 300, lineHeight: "20px", color: "#60646c" }}>
                    Conecte-se com o meio ambiente em passeios estruturados, com guias certificados e total segurança.
                  </p>
                </div>
              </div>
            </div>

            {/* Card direito — +5deg */}
            <div
              className="absolute flex items-center justify-center"
              style={{ left: "380.21px", top: "29.51px", width: "369.957px", height: "477.223px" }}
            >
              <div
                style={{
                  transform: "rotate(5deg)",
                  width: "332px",
                  borderRadius: "16px",
                  overflow: "hidden",
                  boxShadow: "0px 4px 16px 0px rgba(0,0,0,0.1), 0px 3px 12px 0px rgba(0,0,0,0.1), 0px 2px 3px 0px rgba(0,0,51,0.06)",
                }}
              >
                <img src="/promo-bem-estar.jpg" alt="Bem-estar e Descanso Absoluto" className="w-full object-cover" style={{ height: "324px", display: "block" }} />
                <div style={{ backgroundColor: "#fcfcfd", padding: "16px", display: "flex", flexDirection: "column", gap: "8px" }}>
                  <h3 style={{ fontSize: "18px", fontWeight: 700, lineHeight: "26px", letterSpacing: "-0.04px", color: "#1c2024" }}>
                    Bem-estar e Descanso Absoluto
                  </h3>
                  <p style={{ fontSize: "14px", fontWeight: 300, lineHeight: "20px", color: "#60646c" }}>
                    Reserve spas, resorts e atividades projetadas exclusivamente para o seu conforto e desconexão.
                  </p>
                </div>
              </div>
            </div>

            {/* Card central — sem rotação, acima dos outros */}
            <div
              className="absolute"
              style={{
                left: "214.05px",
                top: 0,
                width: "332px",
                zIndex: 10,
                borderRadius: "16px",
                overflow: "hidden",
                boxShadow: "0px 4px 16px 0px rgba(0,0,0,0.1), 0px 3px 12px 0px rgba(0,0,0,0.1), 0px 2px 3px 0px rgba(0,0,51,0.06)",
              }}
            >
              <img src="/promo-gastronomia.jpg" alt="Cultura e Gastronomia Local" className="w-full object-cover" style={{ height: "324px", display: "block" }} />
              <div style={{ backgroundColor: "#fcfcfd", padding: "16px", display: "flex", flexDirection: "column", gap: "8px" }}>
                <h3 style={{ fontSize: "18px", fontWeight: 700, lineHeight: "26px", letterSpacing: "-0.04px", color: "#1c2024" }}>
                  Cultura e Gastronomia Local
                </h3>
                <p style={{ fontSize: "14px", fontWeight: 300, lineHeight: "20px", color: "#60646c" }}>
                  Descubra a essência do seu destino através de roteiros históricos e alta gastronomia.
                </p>
              </div>
            </div>
          </div>

          {/* Newsletter CTA */}
          <div className="flex flex-col items-center gap-8 w-full">
            <div className="flex flex-col items-center gap-2">
              <h3 style={{ fontSize: "24px", fontWeight: 500, lineHeight: "30px", letterSpacing: "-0.1px", color: "#1c2024", textAlign: "center" }}>
                Receba inspirações para o seu próximo destino
              </h3>
              <p style={{ fontSize: "16px", fontWeight: 300, lineHeight: "24px", color: "#60646c", textAlign: "center" }}>
                Você receberá e-mails promocionais.
              </p>
            </div>
            <div className="flex items-center gap-2">
              <input
                type="email"
                placeholder="Insira seu e-mail"
                className="outline-none focus:border-[#008573]"
                style={{
                  width: "320px",
                  height: "32px",
                  border: "1px solid #d9d9e0",
                  borderRadius: "9999px",
                  padding: "0 16px",
                  fontSize: "14px",
                  color: "#60646c",
                  backgroundColor: "rgba(255,255,255,0.9)",
                }}
              />
              <button
                style={{
                  height: "32px",
                  padding: "0 12px",
                  borderRadius: "9999px",
                  backgroundColor: "#03867B",
                  color: "#fff",
                  fontSize: "14px",
                  fontWeight: 500,
                  whiteSpace: "nowrap",
                  border: "none",
                  cursor: "pointer",
                }}
              >
                Encontrar hotéis
              </button>
            </div>
          </div>

        </section>
      </div>

      <Footer />
    </div>
  );
}