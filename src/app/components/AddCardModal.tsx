import { useState } from "react";
import { X } from "lucide-react";
import { Input } from "./ui/input";

// ---------------------------------------------------------------------------
// Types
// ---------------------------------------------------------------------------

type CardType = "credito" | "debito";

interface AddCardModalProps {
  isOpen: boolean;
  onClose: () => void;
}

// ---------------------------------------------------------------------------
// Helpers
// ---------------------------------------------------------------------------

function formatCardNumber(value: string): string {
  const digits = value.replace(/\D/g, "").slice(0, 16);
  return digits.replace(/(.{4})/g, "$1 ").trim();
}

function formatExpiry(value: string): string {
  const digits = value.replace(/\D/g, "").slice(0, 4);
  if (digits.length >= 3) return `${digits.slice(0, 2)}/${digits.slice(2)}`;
  return digits;
}

function detectBrand(number: string): "mastercard" | "visa" | null {
  const digits = number.replace(/\s/g, "");
  if (/^5/.test(digits)) return "mastercard";
  if (/^4/.test(digits)) return "visa";
  return null;
}

function groupedNumber(raw: string): string[] {
  const digits = raw.replace(/\s/g, "").padEnd(16, "0");
  return [digits.slice(0, 4), digits.slice(4, 8), digits.slice(8, 12), digits.slice(12, 16)];
}

// ---------------------------------------------------------------------------
// Card Preview
// ---------------------------------------------------------------------------

function MastercardBrand() {
  return (
    <div className="flex items-center gap-1">
      <div className="flex items-center shrink-0">
        <div className="w-4 h-4 rounded-full bg-[#EB001B]" />
        <div className="w-4 h-4 rounded-full bg-[#F79E1B] -ml-2" />
      </div>
      <span className="text-[12px] font-light leading-4 tracking-[0.04px] text-muted-foreground">
        Mastercard
      </span>
    </div>
  );
}

function VisaBrand() {
  return (
    <div className="flex items-center gap-1">
      <span className="text-[14px] font-bold italic text-[#1a1f71] leading-none">VISA</span>
    </div>
  );
}

function CardPreview({
  cardNumber,
  cardName,
  expiry,
}: {
  cardNumber: string;
  cardName: string;
  expiry: string;
}) {
  const brand = detectBrand(cardNumber);
  const groups = groupedNumber(cardNumber);
  const displayName = cardName.trim() || "Nome igual a do cartão";
  const displayExpiry = expiry || "MM/AA";

  return (
    <div className="bg-card flex flex-col gap-6 items-start p-4 rounded-lg shadow-[0px_4px_16px_0px_rgba(0,0,0,0.1),0px_3px_12px_0px_rgba(0,0,0,0.1),0px_2px_3px_0px_rgba(0,0,51,0.06)] w-full">
      {/* Brand row */}
      <div className="flex items-center gap-1">
        {brand === "mastercard" || brand === null ? <MastercardBrand /> : <VisaBrand />}
      </div>

      {/* Number row */}
      <div className="flex gap-[10px] items-center">
        {groups.map((group, i) => (
          <span
            key={i}
            className="text-[18px] font-normal leading-[26px] tracking-[-0.04px] text-muted-foreground"
          >
            {group}
          </span>
        ))}
      </div>

      {/* Name + Expiry row */}
      <div className="flex gap-[18px] items-center">
        <span className="text-[14px] font-light leading-5 text-muted-foreground truncate max-w-[180px]">
          {displayName}
        </span>
        <span className="text-[14px] font-light leading-5 text-muted-foreground">
          {displayExpiry}
        </span>
      </div>
    </div>
  );
}

// ---------------------------------------------------------------------------
// Field
// ---------------------------------------------------------------------------

function Field({
  label,
  placeholder,
  value,
  onChange,
  type = "text",
}: {
  label: string;
  placeholder: string;
  value: string;
  onChange: (v: string) => void;
  type?: string;
}) {
  return (
    <div className="flex flex-col gap-2 items-start w-full">
      <span className="text-[14px] font-medium leading-5 text-foreground">{label}</span>
      <Input
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="h-8 rounded-[4px] border-border bg-[rgba(255,255,255,0.9)] text-[14px] placeholder:text-[rgba(0,5,29,0.45)] focus-visible:ring-1 focus-visible:ring-primary"
      />
    </div>
  );
}

// ---------------------------------------------------------------------------
// Segmented Control (compact — 180px, h-24px)
// ---------------------------------------------------------------------------

function CardTypeControl({
  value,
  onChange,
}: {
  value: CardType;
  onChange: (v: CardType) => void;
}) {
  return (
    <div
      className="flex h-6 items-center justify-center rounded-full shrink-0 w-[180px]"
      style={{
        background:
          "linear-gradient(90deg, rgba(0,0,51,0.059) 0%, rgba(0,0,51,0.059) 100%), linear-gradient(90deg, rgba(255,255,255,0.9) 0%, rgba(255,255,255,0.9) 100%)",
      }}
    >
      {(["credito", "debito"] as CardType[]).map((type) => {
        const active = value === type;
        return (
          <button
            key={type}
            onClick={() => onChange(type)}
            className={`flex flex-1 h-full items-center justify-center px-3 rounded-full transition-all ${
              active
                ? "bg-white border border-[rgba(0,0,45,0.09)] shadow-sm"
                : ""
            }`}
          >
            <span
              className={`text-[12px] leading-4 tracking-[0.04px] text-[rgba(0,5,9,0.89)] whitespace-nowrap ${
                active ? "font-medium" : "font-normal"
              }`}
            >
              {type === "credito" ? "Crédito" : "Débito"}
            </span>
          </button>
        );
      })}
    </div>
  );
}

// ---------------------------------------------------------------------------
// Modal
// ---------------------------------------------------------------------------

export function AddCardModal({ isOpen, onClose }: AddCardModalProps) {
  const [cardType, setCardType] = useState<CardType>("credito");
  const [cardNumber, setCardNumber] = useState("");
  const [cardName, setCardName] = useState("");
  const [expiry, setExpiry] = useState("");
  const [cvv, setCvv] = useState("");

  if (!isOpen) return null;

  function handleCardNumber(raw: string) {
    setCardNumber(formatCardNumber(raw));
  }

  function handleExpiry(raw: string) {
    setExpiry(formatExpiry(raw));
  }

  function handleSubmit() {
    // TODO: integrate with API
    onClose();
  }

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center"
      onClick={onClose}
    >
      {/* Backdrop */}
      <div className="absolute inset-0 bg-[rgba(0,0,0,0.5)]" />

      {/* Modal card */}
      <div
        className="relative bg-[#f9f9fb] flex flex-col gap-4 items-center rounded-2xl shadow-[0px_4px_16px_0px_rgba(0,0,0,0.1),0px_3px_12px_0px_rgba(0,0,0,0.1),0px_2px_3px_0px_rgba(0,0,51,0.06)] p-6 w-[400px]"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="flex gap-[10px] items-center justify-end w-full">
          <span className="flex-1 text-[18px] font-medium leading-[26px] tracking-[-0.04px] text-foreground whitespace-nowrap">
            Adicionar Cartão
          </span>
          <button
            onClick={onClose}
            className="flex items-center justify-center overflow-hidden rounded-md size-10 hover:bg-muted transition-colors shrink-0"
          >
            <X size={18} className="text-foreground" strokeWidth={1.5} />
          </button>
        </div>

        {/* Body */}
        <div className="flex flex-col gap-8 items-center w-full">
          {/* Card type segmented control */}
          <CardTypeControl value={cardType} onChange={setCardType} />

          {/* Card preview */}
          <CardPreview cardNumber={cardNumber} cardName={cardName} expiry={expiry} />

          {/* Form fields */}
          <div className="flex flex-col gap-2 items-start w-full">
            <Field
              label="Número do Cartão"
              placeholder="0000 0000 0000 0000"
              value={cardNumber}
              onChange={handleCardNumber}
            />
            <Field
              label="Nome"
              placeholder="Nome igual a do cartão"
              value={cardName}
              onChange={setCardName}
            />
            <Field
              label="Data de Vencimento"
              placeholder="MM/AA"
              value={expiry}
              onChange={handleExpiry}
            />
            <Field
              label="Código de Segurança"
              placeholder="CVC"
              value={cvv}
              onChange={(v) => setCvv(v.replace(/\D/g, "").slice(0, 4))}
              type="password"
            />
          </div>
        </div>

        {/* CTA */}
        <button
          onClick={handleSubmit}
          className="flex h-8 items-center justify-center rounded-full bg-primary px-3 text-[14px] font-medium text-white w-[240px] hover:opacity-90 transition-opacity"
        >
          Adicionar cartão
        </button>
      </div>
    </div>
  );
}
