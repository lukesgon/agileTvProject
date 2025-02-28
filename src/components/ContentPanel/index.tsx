import "./styles.scss";
import { tvDataProps } from "../../Utils/APITypes"; // Tipagem dos dados da TV
import GeneralPanel from "../GeneralPanel";
import CastPanel from "../CastPanel";
import PrizePanel from "../PrizePanel";
import { useState } from "react"; // Hook para controle de estado

interface ContentPanelProps {
  className: string;
  tvData: tvDataProps | null;
}

type PanelStateProp = "general" | "cast" | "prizes"; // Tipagem para o estado do painel

const ContentPanel = ({ className, tvData }: ContentPanelProps) => {
  const [panelState, setPanelState] = useState<PanelStateProp>("general"); // Estado do painel

  return (
    <section className={className}>
      {/* Navegação para selecionar o painel */}
      <nav className="content-panel_nav">
        <ul className="content-panel_nav_list">
          <li>
            <button
              className={`content-panel_nav-btn ${
                panelState === "general" ? "content-panel_nav-btn--active" : ""
              }`}
              onClick={() => setPanelState("general")}
            >
              GERAL
            </button>
          </li>
          <li>
            <button
              className={`content-panel_nav-btn ${
                panelState === "cast" ? "content-panel_nav-btn--active" : ""
              }`}
              onClick={() => setPanelState("cast")}
            >
              ELENCO
            </button>
          </li>
          <li>
            <button
              className={`content-panel_nav-btn ${
                panelState === "prizes" ? "content-panel_nav-btn--active" : ""
              }`}
              onClick={() => setPanelState("prizes")}
            >
              PRINCIPAIS PRÊMIOS
            </button>
          </li>
        </ul>
      </nav>
      
      {/* Renderiza o painel correspondente ao estado */}
      {panelState === "general" && <GeneralPanel className="content-panel_general-panel" tvData={tvData} />}
      {panelState === "cast" && tvData && <CastPanel className="cast-panel" tvCastData={tvData.Cast} />}
      {panelState === "prizes" && <PrizePanel className="prize-panel" />}
    </section>
  );
};

export default ContentPanel;
