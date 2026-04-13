# Componentes — Jornada de Hotel

**Jornada:** Hotel  
**Versão:** 1.0  
**Última atualização:** Abril 2026

---

## Componentes criados nesta jornada

### `HotelResultCard` (Card Hotel/Horizontal)

**Arquivo:** `src/app/components/HotelResultCard.tsx`  
**Reutilizável:** Sim  
**Usado em:** SearchResults, Home (carrossel de destaques)  
**Dimensões:** 760×210px (horizontal)

#### Props


| Prop             | Tipo                        | Obrigatório | Descrição                          |
| ---------------- | --------------------------- | ----------- | ---------------------------------- |
| `hotel`          | `HotelResult`               | Sim         | Dados do hotel                     |
| `currencyConfig` | `CurrencyConfig`            | Sim         | Configuração de moeda da instância |
| `onViewRooms`    | `(hotelId: string) => void` | Sim         | Callback ao clicar "Ver quartos"   |


#### Estrutura visual

```
[imagem ~240px] [nome + localização + rating + features] [preço + CTA]
```

---

### `HotelRoomsDrawer` *(novo — identificado no Figma)*

**Arquivo:** `src/app/components/HotelRoomsDrawer.tsx`  
**Reutilizável:** Sim  
**Usado em:** SearchResults  
**Dimensões:** 560px largura × 884px altura  
**Posição:** `fixed right-[17px] top-[126px]`

> Este componente **não estava no PRD original** — foi identificado na análise do Figma (node `447:9878`). É um overlay que exibe os quartos disponíveis do hotel diretamente na página de listagem, sem navegar para o PDP.

#### Props


| Prop             | Tipo                       | Obrigatório | Descrição                          |
| ---------------- | -------------------------- | ----------- | ---------------------------------- |
| `hotel`          | `HotelDetails`             | Sim         | Dados completos do hotel + quartos |
| `isOpen`         | `boolean`                  | Sim         | Controla visibilidade              |
| `onClose`        | `() => void`               | Sim         | Fecha o drawer                     |
| `onBook`         | `(roomId: string) => void` | Sim         | Reservar quarto → /pagamento-hotel |
| `onViewDetails`  | `() => void`               | Sim         | Ver todos os detalhes → /hotel     |
| `currencyConfig` | `CurrencyConfig`           | Sim         | Configuração de moeda              |


#### Estrutura visual

```
[imagem do hotel — 240px altura]
[hotel info: nome + rating + localização]
[lista de quartos: imagem 80×80 + info + facilidades badges + preço + botão Reservar]
[CTA full-width: "ver todos os detalhes do hotel"]
```

#### Badges de facilidades (por quarto)

Badges `rounded-full`, `bg-[rgba(0,0,51,0.06)]`, ícone 12px `lucide-react` + texto 12px:


| Facilidade          | Ícone lucide-react |
| ------------------- | ------------------ |
| Vista para a cidade | `Building2`        |
| N pessoas           | `Users`            |
| Wi-fi               | `Wifi`             |
| Tipo de cama        | `BedDouble`        |


---

### `PhotoGallery`

**Arquivo:** `src/app/components/PhotoGallery.tsx`  
**Reutilizável:** Sim  
**Usado em:** HotelDetails (PDP)

#### Props


| Prop        | Tipo       | Obrigatório | Descrição              |
| ----------- | ---------- | ----------- | ---------------------- |
| `photos`    | `string[]` | Sim         | Array de URLs (mín. 5) |
| `hotelName` | `string`   | Sim         | Para atributo alt      |


#### Comportamento

- Layout de grid: 1 foto grande + 2 empilhadas + 3 em fila (ver spec-telas.md)
- Modal fullscreen ao clicar em qualquer foto ou "Mostrar todas as fotos"
- `document.body.style.overflow = 'hidden'` ao abrir modal
- Navegação: ArrowLeft, ArrowRight, Escape para fechar

---

### `RoomTypeCard`

**Arquivo:** `src/app/components/RoomTypeCard.tsx`  
**Reutilizável:** Sim  
**Usado em:** HotelDetails (PDP)

#### Props


| Prop             | Tipo             | Obrigatório | Descrição                     |
| ---------------- | ---------------- | ----------- | ----------------------------- |
| `room`           | `RoomType`       | Sim         | Dados do quarto               |
| `currencyConfig` | `CurrencyConfig` | Sim         | Configuração de moeda         |
| `onBook`         | `() => void`     | Sim         | Callback ao clicar "Reservar" |


---

### `BookingStickyCard`

**Arquivo:** `src/app/components/BookingStickyCard.tsx`  
**Reutilizável:** Não (específico do PDP)  
**Usado em:** HotelDetails (PDP)

- `sticky top-[80px]`, 320px, `rounded-2xl`, `border border-border`, `bg-white`
- Preço + campos (Check-in / Check-out / Hóspedes) + badge cancelamento + CTA "Reservar"

---

## Componentes reutilizados de outras jornadas / globais


| Componente            | Arquivo                                      | Notas de uso nesta jornada                     |
| --------------------- | -------------------------------------------- | ---------------------------------------------- |
| `Header`              | `src/app/components/Header.tsx`              | Deslogado em resultados; logado na confirmação |
| `Footer`              | `src/app/components/Footer.tsx`              | Padrão em todas as telas                       |
| `SearchResultsHeader` | `src/app/components/SearchResultsHeader.tsx` | Resultados e pagamento                         |
| `Banner Editorial`    | Inline nos arquivos de página                | Home, PDP, Confirmação                         |


---

## Componentes de UI base utilizados


| Componente   | Uso nesta jornada                                                                                         |
| ------------ | --------------------------------------------------------------------------------------------------------- |
| `Button`     | CTAs primários (Buscar, Reservar, Confirmar) e secundários                                                |
| `Input`      | Campos de formulário no checkout                                                                          |
| `Select`     | Dropdown de hóspedes, acomodações, ordenação                                                              |
| `Tabs`       | Tabs Hotel/Aéreo na Home; tipos de quarto no PDP                                                          |
| `Slider`     | Filtro de preço; slider de Tribz no checkout                                                              |
| `Checkbox`   | Filtros de avaliação, categoria, comodidades                                                              |
| `Switch`     | Filtros de toggle (cancelamento, disponibilidade)                                                         |
| `Accordion`  | Checkout em 3 etapas: "Dados pessoais", "Como você quer pagar?", "Em nome de quem emitimos a nota fiscal" |
| `RadioGroup` | Opções de parcelamento no checkout (À vista / 2× / 3× ...)                                                |
| `Dialog`     | Modal fullscreen da galeria de fotos                                                                      |
| `Skeleton`   | Loading states de cards e imagens                                                                         |
| `Badge`      | Rating, disponibilidade, desconto, facilidades, cancelamento                                              |
| `Separator`  | Divisores no drawer de quartos e confirmação                                                              |


---

## Decisões de componentes


| Decisão                | Escolha                             | Motivo                                                                                          |
| ---------------------- | ----------------------------------- | ----------------------------------------------------------------------------------------------- |
| Drawer de Quartos      | Componente novo `HotelRoomsDrawer`  | Não havia overlay equivalente em `ui/`. Posicionamento fixo e conteúdo específico da jornada    |
| Galeria de fotos       | Componente novo `PhotoGallery`      | Layout de grid customizado + modal fullscreen com comportamento específico (bloqueio de scroll) |
| Card de resultado      | Componente novo `HotelResultCard`   | Layout horizontal 760px com composição específica de hotel                                      |
| Card sticky de reserva | Componente novo `BookingStickyCard` | Comportamento sticky específico do PDP                                                          |


