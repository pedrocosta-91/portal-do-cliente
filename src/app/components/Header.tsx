import { useLocation, useNavigate } from "react-router";
import { ShoppingCart } from "lucide-react";
import svgPaths from "../../imports/svg-4cv1bqd2th";
import { useCart } from "../../lib/cartContext";

// ---------------------------------------------------------------------------
// Brand logo (unchanged)
// ---------------------------------------------------------------------------

export function BrandLogo() {
  return (
    <div className="h-[40px] relative w-[90.831px]">
      <div className="absolute inset-[83.02%_2.01%_0_73.11%]">
        <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 22.5968 6.79278">
          <g>
            <path d={svgPaths.p17c3dd80} fill="#03867B" />
            <path d={svgPaths.p3868780} fill="#03867B" />
            <path d={svgPaths.p5390880} fill="#03867B" />
            <path d={svgPaths.p31a51f00} fill="#03867B" />
          </g>
        </svg>
      </div>
      <div className="absolute inset-[11.16%_0_29.61%_41.08%]">
        <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 53.5163 23.6919">
          <g>
            <path d={svgPaths.p131ac300} fill="#03867B" />
            <path d={svgPaths.p1d114ff0} fill="#03867B" />
            <path d={svgPaths.p9447f00} fill="#03867B" />
            <path d={svgPaths.p15edf000} fill="#03867B" />
            <path d={svgPaths.pfc16400} fill="#03867B" />
          </g>
        </svg>
      </div>
      <div className="absolute inset-[0_72.13%_70.77%_8.03%]">
        <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18.0213 11.6931">
          <g>
            <path d={svgPaths.p1c67ba80} fill="#03867B" />
            <path d={svgPaths.p28dcd600} fill="#03867B" />
          </g>
        </svg>
      </div>
      <div className="absolute inset-[52.3%_72.13%_18.46%_8.03%]">
        <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18.0213 11.6946">
          <g>
            <path d={svgPaths.p2311e700} fill="#03867B" />
            <path d={svgPaths.p28bc3800} fill="#03867B" />
          </g>
        </svg>
      </div>
      <div className="absolute inset-[18.24%_64.09%_36.7%_23.04%]">
        <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 11.6932 18.023">
          <g>
            <path d={svgPaths.p3daa7d00} fill="#03867B" />
            <path d={svgPaths.pa9ab080} fill="#03867B" />
          </g>
        </svg>
      </div>
      <div className="absolute inset-[18.24%_87.13%_36.7%_0]">
        <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 11.6946 18.0231">
          <g>
            <path d={svgPaths.p3fff9180} fill="#03867B" />
            <path d={svgPaths.p245b2380} fill="#03867B" />
          </g>
        </svg>
      </div>
    </div>
  );
}

// ---------------------------------------------------------------------------
// Route → active category mapping
// ---------------------------------------------------------------------------

export type NavCategory = "hospedagem" | "passagens" | "carros" | null;

const HOSPEDAGEM_ROUTES = ["/", "/resultados", "/hotel", "/pagamento", "/confirmacao-hotel"];
const PASSAGENS_ROUTES = ["/resultados-aereo", "/pagamento-aereo", "/confirmacao-aereo"];

function useActiveCategory(): NavCategory {
  const { pathname } = useLocation();
  if (HOSPEDAGEM_ROUTES.includes(pathname)) return "hospedagem";
  if (PASSAGENS_ROUTES.includes(pathname)) return "passagens";
  return null;
}

// ---------------------------------------------------------------------------
// Navigation
// ---------------------------------------------------------------------------

const ACTIVE_COLOR = "#008573";
const INACTIVE_COLOR = "#60646c";

function Navigation({
  onHospedagensClick,
  onPassagensClick,
  activeOverride,
}: {
  onHospedagensClick?: () => void;
  onPassagensClick?: () => void;
  activeOverride?: NavCategory;
}) {
  const activeFromRoute = useActiveCategory();
  const active = activeOverride ?? activeFromRoute;

  const ic = (cat: NavCategory) => (active === cat ? ACTIVE_COLOR : INACTIVE_COLOR);

  return (
    <div className="bg-[#fcfcfd] flex items-center justify-center px-4 py-[14px] rounded-full shadow-[0px_4px_16px_0px_rgba(0,0,0,0.1),0px_3px_12px_0px_rgba(0,0,0,0.1),0px_2px_3px_0px_rgba(0,0,51,0.06)]">
      <div className="flex gap-[10px] items-center">
        {/* Hospedagens */}
        <button onClick={onHospedagensClick} className="flex gap-2 h-8 items-center justify-center px-3 rounded hover:bg-muted transition-colors">
          <div className="overflow-clip relative shrink-0 size-4">
            <div className="absolute inset-[5.21%_13.54%]">
              <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 11.6667 14.3335">
                <g>
                  <path d={svgPaths.peba4a00} fill={ic("hospedagem")} />
                  <path d={svgPaths.p1468ef00} fill={ic("hospedagem")} />
                  <path d={svgPaths.p1c183e80} fill={ic("hospedagem")} />
                  <path d={svgPaths.p23989270} fill={ic("hospedagem")} />
                  <path d={svgPaths.p7f8a100} fill={ic("hospedagem")} />
                  <path d={svgPaths.p1eaf1300} fill={ic("hospedagem")} />
                  <path d={svgPaths.p39a361c0} fill={ic("hospedagem")} />
                  <path d={svgPaths.p3c52f700} fill={ic("hospedagem")} />
                  <path d={svgPaths.p4c97580} fill={ic("hospedagem")} />
                  <path d={svgPaths.p1dbce00} fill={ic("hospedagem")} />
                </g>
              </svg>
            </div>
          </div>
          <span
            className="text-[14px] leading-5"
            style={{ color: ic("hospedagem"), fontWeight: active === "hospedagem" ? 500 : 400 }}
          >
            Hospedagens
          </span>
        </button>

        {/* Passagens */}
        <button onClick={onPassagensClick} className="flex gap-2 h-8 items-center justify-center px-3 rounded hover:bg-muted transition-colors">
          <div className="overflow-clip relative shrink-0 size-4">
            <div className="absolute inset-[8.72%_5.21%_9.37%_5.21%]">
              <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14.3333 13.1054">
                <g>
                  <path d={svgPaths.p2ba5e100} fill={ic("passagens")} />
                  <path d={svgPaths.p22fc7f00} fill={ic("passagens")} />
                  <path d={svgPaths.pcc90e80} fill={ic("passagens")} />
                  <path d={svgPaths.p28bf6000} fill={ic("passagens")} />
                  <path d={svgPaths.p24b26780} fill={ic("passagens")} />
                  <path d={svgPaths.p2184ce00} fill={ic("passagens")} />
                  <path d={svgPaths.p364dc270} fill={ic("passagens")} />
                </g>
              </svg>
            </div>
          </div>
          <span
            className="text-[14px] leading-5"
            style={{ color: ic("passagens"), fontWeight: active === "passagens" ? 500 : 400 }}
          >
            Passagens
          </span>
        </button>

        {/* Aluguel de Carros */}
        <button className="flex gap-2 h-8 items-center justify-center px-3 rounded hover:bg-muted transition-colors">
          <div className="overflow-clip relative shrink-0 size-4">
            <div className="absolute inset-[26.04%_5.21%_17.71%_5.21%]">
              <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14.3333 9">
                <g>
                  <path d={svgPaths.p1ce63200} fill={ic("carros")} />
                  <path d={svgPaths.p2fce1380} fill={ic("carros")} />
                  <path d={svgPaths.p165c80} fill={ic("carros")} />
                  <path d={svgPaths.p39c9fa80} fill={ic("carros")} />
                </g>
              </svg>
            </div>
          </div>
          <span
            className="text-[14px] leading-5"
            style={{ color: ic("carros"), fontWeight: active === "carros" ? 500 : 400 }}
          >
            Aluguel de Carros
          </span>
        </button>
      </div>
    </div>
  );
}

// ---------------------------------------------------------------------------
// User actions (exported — reusable across hotel/flight/home headers)
// ---------------------------------------------------------------------------

export function UserActions({
  avatarColor = "#12a594",
}: {
  avatarColor?: string;
}) {
  const navigate = useNavigate();
  const { items } = useCart();

  return (
    <div className="flex gap-3 items-center h-12">
      {/* User info pill — clickable → profile page */}
      <button
        onClick={() => navigate("/minha-conta/perfil")}
        className="bg-white/90 flex gap-4 items-center p-2 rounded-full border border-[#d9d9e0] hover:bg-[#ebebef] transition-colors cursor-pointer"
      >
        {/* Avatar */}
        <div
          className="flex items-center justify-center overflow-clip rounded-full shrink-0 size-10"
          style={{ backgroundColor: avatarColor }}
        >
          <div className="relative shrink-0 size-4">
            <div className="absolute inset-[5.83%_13.5%_6.17%_13.5%]">
              <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 11.68 14.0799">
                <path clipRule="evenodd" d={svgPaths.p3105ac00} fill="white" fillRule="evenodd" />
              </svg>
            </div>
          </div>
        </div>

        {/* Greeting + stats */}
        <div className="flex flex-col items-start">
          <p className="text-[12px] leading-4 tracking-[0.04px] text-foreground">Olá, Pedro Costa</p>
          <div className="flex gap-2 items-center">
            <div className="overflow-clip relative shrink-0 size-4">
              <div className="absolute inset-[17.71%_5.21%]">
                <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14.3339 10.3327">
                  <g>
                    <path d={svgPaths.pa94e100} fill="#525252" />
                    <path d={svgPaths.pc75b8c0} fill="#525252" />
                  </g>
                </svg>
              </div>
            </div>
            <div className="flex gap-1 items-center">
              <p className="text-[20px] leading-7 tracking-[-0.08px] font-medium text-foreground">135.000</p>
              <p className="text-[12px] leading-4 tracking-[0.04px] text-muted-foreground font-light">Tribz</p>
            </div>
          </div>
        </div>
      </button>

      {/* Cart button */}
      <button
        onClick={() => navigate("/carrinho")}
        className="group relative flex items-center justify-center rounded-full shrink-0 size-12 bg-card shadow-[0px_4px_16px_0px_rgba(0,0,0,0.1),0px_3px_12px_0px_rgba(0,0,0,0.1),0px_2px_3px_0px_rgba(0,0,51,0.06)] hover:bg-primary transition-colors"
      >
        <ShoppingCart size={20} strokeWidth={1.5} className="text-foreground group-hover:text-white transition-colors" />
        {items.length > 0 && (
          <span className="absolute -top-1 -right-1 bg-primary text-white rounded-full size-4 flex items-center justify-center text-[10px] font-medium leading-none">
            {items.length}
          </span>
        )}
      </button>
    </div>
  );
}

// ---------------------------------------------------------------------------
// Header
// ---------------------------------------------------------------------------

export function Header({
  onHospedagensClick,
  onPassagensClick,
  activeCategory,
}: {
  onHospedagensClick?: () => void;
  onPassagensClick?: () => void;
  activeCategory?: NavCategory;
} = {}) {
  const navigate = useNavigate();
  const { pathname } = useLocation();
  const isProfileSection = pathname.startsWith("/minha-conta");
  const avatarColor = "#12a594";

  return (
    <div className="flex items-center justify-between p-8 relative shrink-0 w-full max-w-[1440px] mx-auto">
      <button onClick={() => navigate("/")} className="shrink-0 hover:opacity-80 transition-opacity">
        <BrandLogo />
      </button>
      <Navigation
        onHospedagensClick={onHospedagensClick}
        onPassagensClick={onPassagensClick}
        activeOverride={activeCategory}
      />
      <UserActions avatarColor={avatarColor} />
    </div>
  );
}
