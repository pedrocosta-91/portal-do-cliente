# Componentes — [Nome da Jornada]

**Jornada:** [Nome]  
**Versão:** 1.0  
**Última atualização:** [Mês Ano]

> Lista de componentes utilizados e criados nesta jornada. Verificar sempre `src/app/components/ui/` antes de criar um novo componente.

---

## Componentes criados nesta jornada

### `[NomeDoComponente]`

**Arquivo:** `src/app/components/[NomeDoComponente].tsx`  
**Reutilizável:** Sim / Não  
**Usado em:** [lista de telas]

#### Props


| Prop       | Tipo         | Obrigatório | Default | Descrição |
| ---------- | ------------ | ----------- | ------- | --------- |
| `propName` | `string`     | Sim         | —       | Descrição |
| `onAction` | `() => void` | Não         | —       | Callback  |


#### Variantes


| Variante    | Aparência | Quando usar |
| ----------- | --------- | ----------- |
| `default`   |           |             |
| `secondary` |           |             |


#### Exemplo de uso

```tsx
<NomeDoComponente
  propName="valor"
  onAction={() => {}}
/>
```

---

## Componentes reutilizados de outras jornadas


| Componente            | Origem                                       | Notas de uso nesta jornada |
| --------------------- | -------------------------------------------- | -------------------------- |
| `Header`              | `src/app/components/Header.tsx`              | Estado logado / deslogado  |
| `Footer`              | `src/app/components/Footer.tsx`              | Padrão                     |
| `SearchResultsHeader` | `src/app/components/SearchResultsHeader.tsx` |                            |


---

## Componentes de UI base utilizados

> De `src/app/components/ui/`


| Componente  | Uso nesta jornada             |
| ----------- | ----------------------------- |
| `Button`    | CTAs principais e secundários |
| `Input`     | Campos de formulário          |
| `Select`    | Dropdowns de seleção          |
| `Dialog`    | Modais                        |
| `Accordion` | Checkout em etapas            |
| `Skeleton`  | Loading states                |


---

## Decisões de componentes

> Registrar aqui decisões sobre criação de novos componentes vs. reuso de existentes.


| Decisão                | Opção escolhida                | Motivo                       |
| ---------------------- | ------------------------------ | ---------------------------- |
| [ex: Galeria de fotos] | Componente novo `PhotoGallery` | Não havia equivalente em ui/ |


