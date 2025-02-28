import './styles.scss';
import { tvDataProps } from "../../Utils/APITypes";
import IconBox from '../IconBox';
import CloseIcon from '../DynamicIconComponents/CloseIcon';

interface HeaderProps {
  data: tvDataProps | null,
  className?: string,
  isLoading: boolean
};

const Header = ({data, className, isLoading}:HeaderProps)=> {
  function genreSpreader(data:tvDataProps |null) {
    if (data) {
      return data.Genres.map(e=>(
        <span key={e.ID}>
          {` ${e.Title} /`}
        </span>)
      )
    }
  };

  return(
    <section className={className}>
      <section className='header_title'>
      <h1 className="content-header">
        {data && data.Title || !isLoading && "Título indisponível"}
      </h1>
      <button className='header_close-btn'><IconBox className='header_close-btn_icon' src={CloseIcon()}/></button>
      </section>
      {data && //Após a verificação da chegada do conteúdo até aqui, lança os valores dentro do layout entre título e subtítulo (o qual demonstra os gêneros e ano do título).
        <p className="content-header_subtitle">
          {genreSpreader(data)}
          <span>{` ${data.Year}`}</span>
        </p>
      }
      
    </section>
  )
};

export default Header;