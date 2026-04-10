import { useState, useEffect, useRef } from "react";
import { Header } from "../components/Header";
import { Footer } from "../components/Footer";
import { Separator } from "../components/ui/separator";
import { AddCardModal } from "../components/AddCardModal";
import { AddTravelerModal } from "../components/AddTravelerModal";
import {
  Plus,
  MoreVertical,
  Pencil,
  Trash2,
  PlaneTakeoff,
  PlaneLanding,
  Building2,
  ChevronRight,
  ChevronLeft,
} from "lucide-react";

// ---------------------------------------------------------------------------
// Types
// ---------------------------------------------------------------------------

interface PaymentCard {
  id: string;
  brand: string;
  type: string;
  lastFour: string;
}

interface BillingContact {
  id: string;
  name: string;
  initials: string;
  cpf: string;
}

type TripService = "flight-out" | "hotel" | "flight-in";

interface Trip {
  id: string;
  date: string;
  destination: string;
  services: TripService[];
  avatarCount: number;
  image: string;
}

interface Traveler {
  id: string;
  name: string;
  initials: string;
  cpf: string;
  relationship: string;
}

type ActiveTab = "meus-dados" | "minhas-viagens";

// ---------------------------------------------------------------------------
// Mock data
// ---------------------------------------------------------------------------

const user = {
  name: "Pedro Costa",
  initials: "PC",
  sexo: "Masculino",
  dataNascimento: "04/09/1991",
  cpf: "043.987.165-50",
  telefone: "(61) 99279-6391",
  email: "pedro.costa@bancorbras.com.br",
};

const mockCards: PaymentCard[] = [
  { id: "1", brand: "Mastercard", type: "Débito", lastFour: "1234" },
  { id: "2", brand: "Mastercard", type: "Débito", lastFour: "1234" },
];

const mockBillingContact: BillingContact = {
  id: "1",
  name: "Jéssyca Leão",
  initials: "JL",
  cpf: "098.896.456-50",
};

const mockTravelers: Traveler[] = [
  { id: "1", name: "Jéssyca Leão", initials: "JL", cpf: "098.869.785-63", relationship: "Cônjuge" },
  { id: "2", name: "Bernardo Costa", initials: "BC", cpf: "098.869.785-63", relationship: "Filho" },
];

const mockTripsAtivas: Trip[] = [
  {
    id: "1",
    date: "23 Agosto",
    destination: "Rio de Janeiro - RJ",
    services: ["flight-out", "hotel", "flight-in"],
    avatarCount: 3,
    image: "/hotel-gallery-1.jpg",
  },
  {
    id: "2",
    date: "04 Setembro",
    destination: "São Paulo - SP",
    services: ["hotel"],
    avatarCount: 1,
    image: "/hotel-gallery-2.jpg",
  },
  {
    id: "3",
    date: "15 Outubro",
    destination: "Salvador - BA",
    services: ["flight-out", "flight-in"],
    avatarCount: 1,
    image: "/hotel-gallery-3.jpg",
  },
  {
    id: "4",
    date: "20 Novembro",
    destination: "Recife - PE",
    services: ["flight-out", "flight-in"],
    avatarCount: 2,
    image: "/hotel-gallery-4.jpg",
  },
];

const mockTripsPassadas: Trip[] = [
  {
    id: "5",
    date: "10 Março",
    destination: "Florianópolis - SC",
    services: ["flight-out", "hotel", "flight-in"],
    avatarCount: 2,
    image: "/promo-natureza.jpg",
  },
];

// ---------------------------------------------------------------------------
// Sub-components
// ---------------------------------------------------------------------------

function ProfilePanel() {
  return (
    <div className="bg-[#fcfcfd] flex flex-col gap-6 items-start p-4 rounded-2xl shadow-[0px_4px_16px_0px_rgba(0,0,0,0.1),0px_3px_12px_0px_rgba(0,0,0,0.1),0px_2px_3px_0px_rgba(0,0,51,0.06)] shrink-0 self-stretch w-[400px]">
      {/* Avatar + Name */}
      <div className="flex gap-[13px] items-center w-full">
        <div className="bg-primary flex items-center justify-center overflow-hidden rounded-full shrink-0 size-12">
          <span className="text-[18px] font-medium leading-[26px] tracking-[-0.04px] text-white">
            {user.initials}
          </span>
        </div>
        <span className="text-[24px] font-medium leading-[30px] tracking-[-0.1px] text-foreground">
          {user.name}
        </span>
      </div>

      <Separator />

      {/* Data grid */}
      <div className="flex flex-wrap gap-6 items-start w-full">
        <DataField label="Sexo" value={user.sexo} />
        <DataField label="Data de Nascimento" value={user.dataNascimento} />
        <DataField label="CPF" value={user.cpf} />
        <DataField label="Telefone" value={user.telefone} />
        <div className="flex flex-col gap-2 items-start">
          <span className="text-[14px] font-normal leading-5 text-muted-foreground">E-mail</span>
          <span className="text-[14px] font-normal leading-5 text-foreground">{user.email}</span>
        </div>
      </div>
    </div>
  );
}

function DataField({ label, value }: { label: string; value: string }) {
  return (
    <div className="flex flex-col gap-2 items-start w-[145px]">
      <span className="text-[14px] font-normal leading-5 text-muted-foreground whitespace-nowrap">{label}</span>
      <span className="text-[14px] font-normal leading-5 text-foreground whitespace-nowrap">{value}</span>
    </div>
  );
}

function SegmentedControl({
  activeTab,
  onTabChange,
}: {
  activeTab: ActiveTab;
  onTabChange: (tab: ActiveTab) => void;
}) {
  return (
    <div
      className="flex h-10 items-center justify-center rounded-full shrink-0 w-[560px]"
      style={{
        background:
          "linear-gradient(90deg, rgba(0,0,51,0.059) 0%, rgba(0,0,51,0.059) 100%), linear-gradient(90deg, rgba(255,255,255,0.9) 0%, rgba(255,255,255,0.9) 100%)",
      }}
    >
      <button
        onClick={() => onTabChange("meus-dados")}
        className={`flex flex-1 gap-2 h-full items-center justify-center px-4 rounded-full transition-all ${
          activeTab === "meus-dados"
            ? "bg-white border border-[rgba(0,0,45,0.09)] shadow-sm"
            : ""
        }`}
      >
        <span
          className={`text-base leading-6 whitespace-nowrap text-[rgba(0,5,9,0.89)] ${
            activeTab === "meus-dados" ? "font-medium" : "font-normal"
          }`}
        >
          Meus dados
        </span>
      </button>
      <button
        onClick={() => onTabChange("minhas-viagens")}
        className={`flex flex-1 gap-2 h-full items-center justify-center px-4 rounded-md transition-all ${
          activeTab === "minhas-viagens"
            ? "bg-white border border-[rgba(0,0,45,0.09)] rounded-full shadow-sm"
            : ""
        }`}
      >
        <span
          className={`text-base leading-6 whitespace-nowrap text-[rgba(0,5,9,0.89)] ${
            activeTab === "minhas-viagens" ? "font-medium" : "font-normal"
          }`}
        >
          Minhas Viagens
        </span>
      </button>
    </div>
  );
}

function MastercardIcon() {
  return (
    <div className="flex items-center justify-center shrink-0 size-8">
      <div className="flex items-center">
        <div className="w-5 h-5 rounded-full bg-[#EB001B] opacity-90" />
        <div className="w-5 h-5 rounded-full bg-[#F79E1B] opacity-90 -ml-2.5" />
      </div>
    </div>
  );
}

function PaymentCardItem({ card }: { card: PaymentCard }) {
  const [isOpen, setIsOpen] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!isOpen) return;
    function handleClickOutside(e: MouseEvent) {
      if (containerRef.current && !containerRef.current.contains(e.target as Node)) {
        setIsOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [isOpen]);

  return (
    <div ref={containerRef} className="flex items-center gap-2 w-full">
      {/* Card */}
      <div className="bg-card flex items-center justify-between p-4 rounded-lg shadow-[0px_4px_16px_0px_rgba(0,0,0,0.1),0px_3px_12px_0px_rgba(0,0,0,0.1),0px_2px_3px_0px_rgba(0,0,51,0.06)] flex-1 min-w-0 transition-all duration-200">
        <div className="flex gap-2 items-center min-w-0">
          <MastercardIcon />
          <div className="flex flex-col items-start">
            <span className="text-[14px] font-normal leading-5 text-muted-foreground whitespace-nowrap">
              {card.brand} {card.type}
            </span>
            <span className="text-[14px] font-normal leading-5 text-foreground whitespace-nowrap">
              ****{card.lastFour}
            </span>
          </div>
        </div>
        <button
          onClick={() => setIsOpen(true)}
          className={`flex items-center justify-center rounded-full size-6 hover:bg-muted transition-all duration-200 shrink-0 ${
            isOpen ? "opacity-0 w-0 overflow-hidden pointer-events-none" : "opacity-100"
          }`}
        >
          <MoreVertical size={16} className="text-muted-foreground" strokeWidth={1.5} />
        </button>
      </div>

      {/* Action buttons — slide in from right */}
      <div
        className="flex gap-1 items-center shrink-0 overflow-hidden transition-all duration-200"
        style={{ maxWidth: isOpen ? "72px" : "0px", opacity: isOpen ? 1 : 0 }}
      >
        <button className="flex items-center justify-center rounded-full size-8 hover:bg-muted transition-colors">
          <Pencil size={16} className="text-muted-foreground" strokeWidth={1.5} />
        </button>
        <button
          className="flex items-center justify-center rounded-full size-8 hover:bg-muted transition-colors"
          onClick={() => setIsOpen(false)}
        >
          <Trash2 size={16} className="text-muted-foreground" strokeWidth={1.5} />
        </button>
      </div>
    </div>
  );
}

function FormasDePagamento({ onAddCard }: { onAddCard: () => void }) {
  return (
    <div className="bg-[#fcfcfd] flex flex-1 items-start p-4 rounded-2xl shadow-[0px_4px_16px_0px_rgba(0,0,0,0.1),0px_3px_12px_0px_rgba(0,0,0,0.1),0px_2px_3px_0px_rgba(0,0,51,0.06)] h-[256px]">
      <div className="flex flex-1 flex-col gap-2 items-start h-full">
        {/* Header */}
        <div className="flex items-center justify-between w-full">
          <span className="text-base font-medium leading-6 text-foreground whitespace-nowrap">
            Formas de Pagamento
          </span>
          <button
            onClick={onAddCard}
            className="flex items-center justify-center rounded-full size-8 hover:bg-muted transition-colors"
          >
            <Plus size={16} className="text-foreground" strokeWidth={1.5} />
          </button>
        </div>

        {/* Card list */}
        <div className="flex flex-1 flex-col gap-2 items-start w-full">
          {mockCards.map((card) => (
            <PaymentCardItem key={card.id} card={card} />
          ))}
        </div>

        {/* Ver todos */}
        <button className="flex gap-1 h-6 items-center justify-center px-2 rounded-[3px] hover:bg-muted transition-colors">
          <span className="text-[12px] font-normal leading-4 tracking-[0.04px] text-primary whitespace-nowrap">
            Ver todos
          </span>
        </button>
      </div>
    </div>
  );
}

function Faturamento() {
  return (
    <div className="bg-[#fcfcfd] flex flex-1 items-start p-4 rounded-2xl shadow-[0px_4px_16px_0px_rgba(0,0,0,0.1),0px_3px_12px_0px_rgba(0,0,0,0.1),0px_2px_3px_0px_rgba(0,0,51,0.06)] h-[256px]">
      <div className="flex flex-1 flex-col gap-2 items-start h-full">
        {/* Header */}
        <div className="flex items-center justify-between w-full">
          <span className="text-base font-medium leading-6 text-foreground whitespace-nowrap">
            Faturamento
          </span>
          <button className="flex items-center justify-center rounded-full size-8 hover:bg-muted transition-colors">
            <Plus size={16} className="text-foreground" strokeWidth={1.5} />
          </button>
        </div>

        {/* Billing contact */}
        <div className="bg-card flex items-center justify-between p-4 rounded-lg shadow-[0px_4px_16px_0px_rgba(0,0,0,0.1),0px_3px_12px_0px_rgba(0,0,0,0.1),0px_2px_3px_0px_rgba(0,0,51,0.06)] w-full">
          <div className="flex gap-2 items-center">
            <div className="bg-primary flex items-center justify-center overflow-hidden rounded-full shrink-0 size-10">
              <span className="text-base font-medium leading-6 text-white text-center">
                {mockBillingContact.initials}
              </span>
            </div>
            <div className="flex flex-col items-start">
              <span className="text-[14px] font-normal leading-5 text-muted-foreground whitespace-nowrap">
                {mockBillingContact.name}
              </span>
              <span className="text-[14px] font-normal leading-5 text-foreground whitespace-nowrap">
                CPF: {mockBillingContact.cpf}
              </span>
            </div>
          </div>
          <button className="flex items-center justify-center rounded-[3px] size-6 hover:bg-muted transition-colors">
            <MoreVertical size={16} className="text-muted-foreground" strokeWidth={1.5} />
          </button>
        </div>
      </div>
    </div>
  );
}

function TravelerCard({ traveler }: { traveler: Traveler }) {
  return (
    <div className="relative bg-card flex flex-col gap-2 items-start p-4 rounded-lg shadow-[0px_4px_16px_0px_rgba(0,0,0,0.1),0px_3px_12px_0px_rgba(0,0,0,0.1),0px_2px_3px_0px_rgba(0,0,51,0.06)] shrink-0 w-[200px]">
      {/* Relationship badge — outside the card, top right */}
      <div className="absolute -top-[10px] right-4 bg-primary flex gap-[6px] items-center overflow-hidden px-[6px] py-[2px] rounded-[3px]">
        <span className="text-[12px] font-medium leading-4 tracking-[0.04px] text-white whitespace-nowrap">
          {traveler.relationship}
        </span>
      </div>

      <div className="bg-primary flex items-center justify-center overflow-hidden rounded-full shrink-0 size-10">
        <span className="text-base font-medium leading-6 text-white text-center">
          {traveler.initials}
        </span>
      </div>
      <span className="text-[14px] font-normal leading-5 text-muted-foreground whitespace-nowrap">
        {traveler.name}
      </span>
      <span className="text-[14px] font-normal leading-5 text-foreground whitespace-nowrap">
        CPF: {traveler.cpf}
      </span>
    </div>
  );
}

function AddTravelerCard({ onClick }: { onClick: () => void }) {
  return (
    <div
      onClick={onClick}
      className="border border-dashed border-border flex flex-col gap-2 items-start p-4 rounded-lg shrink-0 w-[200px] cursor-pointer hover:bg-muted/50 transition-colors"
    >
      <button className="flex items-center justify-center rounded-md size-10 hover:bg-muted transition-colors" tabIndex={-1}>
        <Plus size={18} className="text-foreground" strokeWidth={1.5} />
      </button>
      <span className="text-[14px] font-normal leading-5 text-muted-foreground">Cadastrar</span>
      <span className="text-[14px] font-normal leading-5 text-foreground">novo viajante</span>
    </div>
  );
}

function Viajantes({ onAddTraveler }: { onAddTraveler: () => void }) {
  return (
    <div className="flex flex-col gap-4 items-start w-full">
      <span className="text-[18px] font-medium leading-[26px] tracking-[-0.04px] text-foreground whitespace-nowrap">
        Viajantes
      </span>

      <div className="bg-[#fcfcfd] flex items-start p-4 rounded-2xl shadow-[0px_4px_16px_0px_rgba(0,0,0,0.1),0px_3px_12px_0px_rgba(0,0,0,0.1),0px_2px_3px_0px_rgba(0,0,51,0.06)] w-full">
        <div className="flex flex-1 flex-col gap-2 items-start">
          <span className="text-base font-medium leading-6 text-foreground whitespace-nowrap">
            Quem viaja com você com frequência
          </span>

          <div className="flex gap-4 items-center w-full overflow-x-auto pb-1">
            <AddTravelerCard onClick={onAddTraveler} />
            {mockTravelers.map((traveler) => (
              <TravelerCard key={traveler.id} traveler={traveler} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

function MeusDadosTab({
  onAddCard,
  onAddTraveler,
}: {
  onAddCard: () => void;
  onAddTraveler: () => void;
}) {
  return (
    <div className="flex flex-col gap-6 items-start w-full">
      {/* Dados de Pagamento */}
      <div className="flex flex-col gap-4 items-start w-full">
        <span className="text-[18px] font-medium leading-[26px] tracking-[-0.04px] text-foreground whitespace-nowrap">
          Dados de Pagamento
        </span>
        <div className="flex gap-4 items-start w-full h-[256px]">
          <FormasDePagamento onAddCard={onAddCard} />
          <Faturamento />
        </div>
      </div>

      {/* Viajantes */}
      <Viajantes onAddTraveler={onAddTraveler} />
    </div>
  );
}

// Service icon pill: blue circle bg + lucide icon
function ServiceIcon({ type }: { type: TripService }) {
  const icon = {
    "flight-out": <PlaneTakeoff size={14} color="white" strokeWidth={1.5} />,
    hotel: <Building2 size={14} color="white" strokeWidth={1.5} />,
    "flight-in": <PlaneLanding size={14} color="white" strokeWidth={1.5} />,
  }[type];

  return (
    <div className="flex items-center justify-center size-6 rounded-sm bg-primary shrink-0">
      {icon}
    </div>
  );
}

// Stacked avatars row
function StackedAvatars({ count }: { count: number }) {
  const colors = ["bg-primary", "bg-[#12a594]", "bg-[#9333ea]"];
  const shown = Math.min(count, 3);
  return (
    <div className="flex items-center">
      {Array.from({ length: shown }).map((_, i) => (
        <div
          key={i}
          className={`${colors[i % colors.length]} flex items-center justify-center overflow-hidden rounded-full shrink-0 size-8 border-2 border-white`}
          style={{ marginLeft: i === 0 ? 0 : -10 }}
        >
          <span className="text-[10px] font-medium text-white">
            {["PC", "JL", "BC"][i]}
          </span>
        </div>
      ))}
    </div>
  );
}

// Interleave services with ChevronRight separators
function ServiceIcons({ services }: { services: TripService[] }) {
  return (
    <div className="flex gap-2 items-center flex-wrap">
      {services.map((service, i) => (
        <div key={i} className="flex items-center gap-2">
          <ServiceIcon type={service} />
          {i < services.length - 1 && (
            <ChevronRight size={14} className="text-muted-foreground" strokeWidth={1.5} />
          )}
        </div>
      ))}
    </div>
  );
}

function FeaturedTripCard({ trip }: { trip: Trip }) {
  return (
    <div className="relative flex flex-col items-start justify-between shrink-0 w-[263px] h-[320px] overflow-hidden rounded-2xl">
      {/* Background photo */}
      <div aria-hidden="true" className="absolute inset-0 pointer-events-none">
        <div className="absolute inset-0 bg-card" />
        <div className="absolute inset-0 overflow-hidden">
          <img
            alt=""
            className="absolute w-full max-w-none left-0"
            style={{ height: "123.19%", top: "-11.6%" }}
            src={trip.image}
          />
        </div>
      </div>

      {/* Info panel — bottom of card */}
      <div className="absolute bottom-0 left-0 right-0 bg-[rgba(255,255,255,0.8)] flex flex-col gap-6 items-start p-4">
        {/* Text block */}
        <div className="flex flex-col gap-2 items-start w-full">
          <span className="text-[12px] font-medium leading-4 tracking-[0.04px] text-foreground">
            {trip.date}
          </span>
          <span className="text-[18px] font-medium leading-[26px] tracking-[-0.04px] text-foreground">
            {trip.destination}
          </span>
          <span className="text-[12px] font-normal leading-4 tracking-[0.04px] text-muted-foreground">
            Serviços
          </span>
          <ServiceIcons services={trip.services} />
        </div>

        {/* Divider + stacked avatars */}
        <div className="border-t border-border flex items-center pt-2 w-full">
          <StackedAvatars count={trip.avatarCount} />
        </div>
      </div>
    </div>
  );
}

function TripSection({
  title,
  trips,
}: {
  title: string;
  trips: Trip[];
}) {
  const [offset, setOffset] = useState(0);
  const visible = 3;
  const canPrev = offset > 0;
  const canNext = offset + visible < trips.length;

  return (
    <div className="flex flex-col gap-4 items-start w-full">
      {/* Header: title + nav arrows */}
      <div className="flex items-center justify-between w-full">
        <span className="text-[18px] font-medium leading-[26px] tracking-[-0.04px] text-foreground whitespace-nowrap">
          {title}
        </span>
        <div className="flex gap-4 items-center">
          <button
            onClick={() => setOffset((o) => Math.max(0, o - 1))}
            disabled={!canPrev}
            className="flex items-center justify-center overflow-hidden rounded-full size-8 border border-[rgba(0,8,48,0.27)] disabled:opacity-40 hover:bg-muted transition-colors"
          >
            <ChevronLeft size={16} className="text-foreground" strokeWidth={1.5} />
          </button>
          <button
            onClick={() => setOffset((o) => (canNext ? o + 1 : o))}
            disabled={!canNext}
            className="flex items-center justify-center overflow-hidden rounded-full size-8 border border-[rgba(0,8,48,0.27)] disabled:opacity-40 hover:bg-muted transition-colors"
          >
            <ChevronRight size={16} className="text-foreground" strokeWidth={1.5} />
          </button>
        </div>
      </div>

      {/* Cards row */}
      <div className="flex gap-4 items-start overflow-hidden w-full">
        {trips.slice(offset, offset + visible).map((trip) => (
          <FeaturedTripCard key={trip.id} trip={trip} />
        ))}
      </div>
    </div>
  );
}

function MinhasViagensTab() {
  return (
    <div className="bg-[#fcfcfd] rounded-2xl shadow-[0px_4px_16px_0px_rgba(0,0,0,0.1),0px_3px_12px_0px_rgba(0,0,0,0.1),0px_2px_3px_0px_rgba(0,0,51,0.06)] w-full">
      <div className="flex flex-col gap-6 items-start p-4">
        <TripSection title="Ativas" trips={mockTripsAtivas} />
        <TripSection title="Passadas" trips={mockTripsPassadas} />
      </div>
    </div>
  );
}

// ---------------------------------------------------------------------------
// Page
// ---------------------------------------------------------------------------

export default function ProfilePage() {
  const [activeTab, setActiveTab] = useState<ActiveTab>("meus-dados");
  const [isAddCardOpen, setIsAddCardOpen] = useState(false);
  const [isAddTravelerOpen, setIsAddTravelerOpen] = useState(false);

  return (
    <div className="min-h-screen flex flex-col bg-[#f9f9fb]">
      <Header />

      <main className="flex gap-12 items-start p-8 w-full max-w-[1440px] mx-auto">
        {/* Left panel — profile */}
        <ProfilePanel />

        {/* Right panel — segmented control + content */}
        <div className="flex flex-1 flex-col gap-8 items-start min-w-0">
          <SegmentedControl activeTab={activeTab} onTabChange={setActiveTab} />

          {activeTab === "meus-dados" ? (
            <MeusDadosTab
              onAddCard={() => setIsAddCardOpen(true)}
              onAddTraveler={() => setIsAddTravelerOpen(true)}
            />
          ) : (
            <MinhasViagensTab />
          )}
        </div>
      </main>

      <Footer />

      <AddCardModal isOpen={isAddCardOpen} onClose={() => setIsAddCardOpen(false)} />
      <AddTravelerModal isOpen={isAddTravelerOpen} onClose={() => setIsAddTravelerOpen(false)} />
    </div>
  );
}
