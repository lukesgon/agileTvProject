import "./styles.scss";
import { useEffect, useState, useRef } from "react";
import CastCard from "../CastCard";

interface CastPanelProps {
  className: string;
  tvCastData: { ID: string; Name: string }[]; // Lista de dados do elenco
}

const CastPanel = ({ className, tvCastData }: CastPanelProps) => {
  const [tvCast, setTvCast] = useState(tvCastData); // Estado para armazenar o elenco
  const scrollContainerRef = useRef<HTMLDivElement>(null); // Referência para o container de rolagem
  const scrollStep = window.innerWidth * 0.2; // Quantidade de pixels que vai rolar por clique

  const scroll = (direction: string) => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({
        left: direction === "left" ? -scrollStep : scrollStep,
        behavior: "smooth",
      });
    }
  };

  useEffect(() => {
    setTvCast(tvCastData); // Atualiza o estado quando tvCastData mudar
  }, [tvCastData]);

  // Função para espalhar os CastCards na tela
  function castCardSpreader() {
    if (tvCast.length) {
      return tvCast.map((e) => (
        <CastCard key={e.ID} cast={e} className="cast-panel_card" />
      ));
    }
  }

  return (
    <section className={className}>
      <button
        className="cast-panel_navigate-btn--lft"
        onClick={() => scroll("left")}
      >
        {"<"}
      </button>
      <section className="cast-panel_content" ref={scrollContainerRef}>
        {castCardSpreader()} {/* Renderiza os CastCards */}
      </section>
      <button
        className="cast-panel_navigate-btn--rgt"
        onClick={() => scroll("right")}
      >
        {">"}
      </button>
    </section>
  );
};

export default CastPanel;
