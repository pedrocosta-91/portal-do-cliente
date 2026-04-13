# Guia — Como implementar do Figma

**Última atualização:** Abril 2026

> Fluxo obrigatório ao implementar qualquer componente ou tela a partir do Figma.

---

## Fluxo de implementação

### 1. Obter o design

Usar o Figma MCP — chamar `get_design_context` com o `nodeId` e `fileKey` do nó.

**Extraindo IDs de URLs Figma:**

```
https://figma.com/design/aYVvwo3llX85irnjON7nVt/nome?node-id=196-27608
                          ↑ fileKey              ↑ node-id (converter "-" para ":")
```

→ `fileKey = "aYVvwo3llX85irnjON7nVt"`, `nodeId = "196:27608"`

---

### 2. Adaptar ao projeto

O código retornado pelo MCP é React + Tailwind como referência — **nunca copiar diretamente**.

Sempre:

- Substituir variáveis CSS do Figma (`var(--tokens\/colors\/...)`) pelas classes do projeto
- Substituir assets de ícones do Figma por equivalentes `lucide-react`
- Adaptar à estrutura de componentes existente em `src/app/components/ui/`
- Verificar tokens de cor, espaçamento e radius conforme `tokens.md`


| Código gerado (MCP)                            | Substituto no projeto         |
| ---------------------------------------------- | ----------------------------- |
| `var(--tokens\/colors\/page-background,white)` | `bg-white` ou `bg-background` |
| `var(--spacing\/space-lg,16px)`                | `gap-4` / `p-4`               |
| `var(--radius\/6,16px)`                        | `rounded-2xl`                 |
| `var(--radius\/full,9999px)`                   | `rounded-full`                |
| `var(--colors\/accent\/accent\/9,#12a594)`     | `bg-primary`                  |
| `var(--tokens\/text\/heading,#1c2024)`         | `text-foreground`             |


---

### 3. Validar visualmente

Comparar o resultado implementado contra o screenshot retornado pelo `get_design_context` antes de marcar como concluído.

---

## Regras críticas

- **Ícones:** nunca usar URLs de asset do Figma MCP (`https://www.figma.com/api/mcp/asset/...`) — substituir por `lucide-react`
- **Imagens:** se o MCP retornar URL de imagem de conteúdo (foto de hotel, banner), usar diretamente — é válida por 7 dias
- **Cores hardcoded:** apenas quando não houver equivalente em CSS variable do projeto
- **Font family:** Poppins é global — não declarar por componente. Usar apenas `font-light`, `font-normal`, `font-medium`, `font-bold`

---

## Referência rápida — Layout padrão de página

```tsx
// Container de página
<div className="min-h-screen flex flex-col bg-[#f9f9fb]">
  <Header />
  
  {/* Conteúdo principal */}
  <main className="w-full max-w-[1440px] mx-auto px-[32px] py-[32px]">
    {/* Duas colunas (sidebar + conteúdo) */}
    <div className="flex gap-[32px] items-start">
      <aside className="w-[240px] shrink-0 sticky top-[24px]">
        {/* Filtros */}
      </aside>
      <div className="flex-1">
        {/* Conteúdo */}
      </div>
    </div>
  </main>
  
  <Footer />
</div>
```

