import "./styles.scss";
import TrackList from "../TrackList";
import { epDataProps } from "../../Utils/APITypes";

//Apesar de não tão necessário, optei por separar a lista e o background em dois componentes, um aninhado ao outro, de forma que caso haja a indisponibilidade do conteúdo lançado pela API, o background segue renderizado para não perder a estilização da página.

interface TrackMenuProps {
  className: string;
  epData: epDataProps[] | null;
}

const TrackMenu = ({ className, epData }: TrackMenuProps) => {
  return (
    <aside className={className}>
      <TrackList className="track-list" epData={epData} />
    </aside>
  );
};

export default TrackMenu;
