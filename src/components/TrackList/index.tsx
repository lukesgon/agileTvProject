import "./styles.scss";
import { epDataProps } from "../../Utils/APITypes";
import { useEffect, useState, useRef } from "react";
import EpCard from "../EpCard";

interface TrackListProps {
  className: string;
  epData: epDataProps[] | null;
}

const TrackList = ({ className, epData }: TrackListProps) => {
  const [seasonList, setSeasonList] = useState<number[]>([]);
  const [epList, setEpList] = useState<epDataProps[]>([] as epDataProps[]);
  const [activeSeason, setActiveSeason] = useState(1);
  const [activeEpisode, setActiveEpisode] = useState("");
  const scrollContainerRef = useRef<HTMLUListElement>(null);
  const scrollStep = window.innerWidth * 0.2; // Quantidade de pixels que vai rolar por clique

  const scroll = (direction: string) => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({
        left: direction === "left" ? -scrollStep : scrollStep,
        behavior: "smooth",
      });
    }
  };

  function seasonFilter() {
    //Função para filtrar os identificadores de temporada. Mais tarde servirá para automaticamente gerar os botões de aba necessários a cada temporada do conteúdo requisitado a api. O Set é utilizado para garantir que não há repetições de temporada.
    if (!epData) return; // Se `epData` for null, sai da função

    const list = new Set(
      epData.filter((e) => e !== null).map((e) => e.SeasonNumber) // Remove `null` antes do map
    );

    const seasons = [...list];

    if (seasons.length > 0 && seasons.join(",") !== seasonList.join(",")) {
      setSeasonList(seasons);
    }
  }

  function seasonButtonSpreader() {
    // Gera um botão dinamicamente para cada número listado no state seasonList. Sempre que o state é alterado, o componente é novamente renderizado, atualizando os botões disponíveis.
    return seasonList.map((e) => (
      <li key={e}>
        <button
          className={`track-list_season-btn ${
            activeSeason == e && "track-list_season-btn--active"
          }`}
          onClick={() => setActiveSeason(e)}
        >
          T-{e}
        </button>
      </li>
    ));
  }

  function episodeCardSpreader() {
    return epList
      .filter((e) => e !== null && e.SeasonNumber === activeSeason)
      .map((e) => (
        <EpCard
          key={e.ID}
          epData={e}
          className="track-list_ep-card"
          onClick={() => setActiveEpisode(e.ID === activeEpisode ? "" : e.ID)}
          isActive={activeEpisode === e.ID}
        />
      ));
  }

  useEffect(() => { //Garante a renderização do componente caso haja alteração nas informações dos episódios listados.
    seasonFilter();
    if (epData) {
      setEpList(epData);
    }
  }, [epData]);

  return (
    <section className={className}>
      <section className="track-list_header">
        <button
          onClick={() => {
            scroll("left");
            if (activeSeason !== 1) {
              setActiveSeason(activeSeason - 1);
            }
          }}
          className="tracklist_btn--lft"
        >
          {"<"}
        </button>
        <ul className="track-list_season-list" ref={scrollContainerRef}>
          {seasonButtonSpreader()}
        </ul>
        <button
          onClick={() => {
            scroll("right");
            if (activeSeason !== seasonList.length) {
              setActiveSeason(activeSeason + 1);
            }
          }}
          className="tracklist_btn--rgt"
        >
          {">"}
        </button>
      </section>
      <section className="track-list_episodes">{episodeCardSpreader()}</section>
    </section>
  );
};

export default TrackList;
