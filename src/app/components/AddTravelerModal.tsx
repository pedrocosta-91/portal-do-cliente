import { useState } from "react";
import { X, ChevronDown } from "lucide-react";
import { Input } from "./ui/input";

// ---------------------------------------------------------------------------
// Types
// ---------------------------------------------------------------------------

interface AddTravelerModalProps {
  isOpen: boolean;
  onClose: () => void;
}

// ---------------------------------------------------------------------------
// Helpers
// ---------------------------------------------------------------------------

function formatBirthdate(value: string): string {
  const digits = value.replace(/\D/g, "").slice(0, 8);
  if (digits.length >= 5) return `${digits.slice(0, 2)}/${digits.slice(2, 4)}/${digits.slice(4)}`;
  if (digits.length >= 3) return `${digits.slice(0, 2)}/${digits.slice(2)}`;
  return digits;
}

function formatCPF(value: string): string {
  const digits = value.replace(/\D/g, "").slice(0, 11);
  if (digits.length >= 10) return `${digits.slice(0, 3)}.${digits.slice(3, 6)}.${digits.slice(6, 9)}-${digits.slice(9)}`;
  if (digits.length >= 7) return `${digits.slice(0, 3)}.${digits.slice(3, 6)}.${digits.slice(6)}`;
  if (digits.length >= 4) return `${digits.slice(0, 3)}.${digits.slice(3)}`;
  return digits;
}

function formatPhone(value: string): string {
  const digits = value.replace(/\D/g, "").slice(0, 11);
  if (digits.length >= 7) return `(${digits.slice(0, 2)}) ${digits.slice(2, 7)}-${digits.slice(7)}`;
  if (digits.length >= 3) return `(${digits.slice(0, 2)}) ${digits.slice(2)}`;
  return digits;
}

function getInitials(nome: string, sobrenome: string): string {
  const f = nome.trim()[0] ?? "";
  const l = sobrenome.trim()[0] ?? "";
  return (f + l).toUpperCase() || "?";
}

const PARENTESCO_OPTIONS = ["Cônjuge", "Filho(a)", "Filha(o)", "Pai", "Mãe", "Irmão", "Irmã", "Outro"];

// ---------------------------------------------------------------------------
// Sub-components
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

function SelectField({
  label,
  value,
  onChange,
}: {
  label: string;
  value: string;
  onChange: (v: string) => void;
}) {
  return (
    <div className="flex flex-col gap-2 items-start w-full">
      <span className="text-[14px] font-medium leading-5 text-foreground">{label}</span>
      <div className="relative w-full">
        <select
          value={value}
          onChange={(e) => onChange(e.target.value)}
          className="appearance-none h-8 w-full rounded-[4px] border border-border bg-[rgba(255,255,255,0.9)] px-2 text-[14px] leading-5 focus:outline-none focus:ring-1 focus:ring-primary"
          style={{ color: value ? "var(--foreground)" : "rgba(0,5,29,0.45)" }}
        >
          <option value="" disabled>
            Selecione uma opção
          </option>
          {PARENTESCO_OPTIONS.map((opt) => (
            <option key={opt} value={opt} style={{ color: "var(--foreground)" }}>
              {opt}
            </option>
          ))}
        </select>
        <div className="pointer-events-none absolute right-1 top-1/2 -translate-y-1/2 flex items-center justify-center size-6">
          <ChevronDown size={16} className="text-muted-foreground" strokeWidth={1.5} />
        </div>
      </div>
    </div>
  );
}

// ---------------------------------------------------------------------------
// Modal
// ---------------------------------------------------------------------------

export function AddTravelerModal({ isOpen, onClose }: AddTravelerModalProps) {
  const [nome, setNome] = useState("");
  const [sobrenome, setSobrenome] = useState("");
  const [birthdate, setBirthdate] = useState("");
  const [cpf, setCpf] = useState("");
  const [telefone, setTelefone] = useState("");
  const [email, setEmail] = useState("");
  const [parentesco, setParentesco] = useState("");

  if (!isOpen) return null;

  const initials = getInitials(nome, sobrenome);

  function handleBirthdate(raw: string) {
    setBirthdate(formatBirthdate(raw));
  }

  function handleCPF(raw: string) {
    setCpf(formatCPF(raw));
  }

  function handlePhone(raw: string) {
    setTelefone(formatPhone(raw));
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
        className="relative bg-[#f9f9fb] flex flex-col gap-4 items-center rounded-2xl shadow-[0px_4px_16px_0px_rgba(0,0,0,0.1),0px_3px_12px_0px_rgba(0,0,0,0.1),0px_2px_3px_0px_rgba(0,0,51,0.06)] p-6 w-[400px] max-h-[90vh] overflow-y-auto"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="flex gap-[10px] items-center justify-end w-full">
          <span className="flex-1 text-[18px] font-medium leading-[26px] tracking-[-0.04px] text-foreground whitespace-nowrap">
            Adicionar Viajante
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
          {/* Avatar preview */}
          <div className="bg-primary flex items-center justify-center overflow-hidden rounded-full shrink-0 size-16">
            <span className="text-[24px] font-medium leading-[30px] tracking-[-0.1px] text-white">
              {initials}
            </span>
          </div>

          {/* Form fields */}
          <div className="flex flex-col gap-2 items-start w-full">
            <Field
              label="Nome"
              placeholder="Nome"
              value={nome}
              onChange={setNome}
            />
            <Field
              label="Sobrenome"
              placeholder="Sobrenome"
              value={sobrenome}
              onChange={setSobrenome}
            />
            <Field
              label="Data de Nascimento"
              placeholder="DD/MM/AA"
              value={birthdate}
              onChange={handleBirthdate}
            />
            <Field
              label="CPF"
              placeholder="000.000.000-00"
              value={cpf}
              onChange={handleCPF}
            />
            <Field
              label="Telefone"
              placeholder="(00) 00000-0000"
              value={telefone}
              onChange={handlePhone}
            />
            <Field
              label="E-mail"
              placeholder="seu melhor e-mail"
              value={email}
              onChange={setEmail}
              type="email"
            />
            <SelectField
              label="Parentesco"
              value={parentesco}
              onChange={setParentesco}
            />
          </div>
        </div>

        {/* CTA */}
        <button
          onClick={handleSubmit}
          className="flex h-8 items-center justify-center rounded-full bg-primary px-3 text-[14px] font-medium text-white w-[240px] hover:opacity-90 transition-opacity"
        >
          Adicionar viajante
        </button>
      </div>
    </div>
  );
}
