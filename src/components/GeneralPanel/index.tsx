import './styles.scss'
import { tvDataProps } from "../../Utils/APITypes";
import IconBox from '../IconBox';
import DownloadIcon from '../DynamicIconComponents/DownloadIcon';
import AddIcon from '../DynamicIconComponents/AddIcon';
import ShareIcon from '../DynamicIconComponents/ShareIcon';
import RateIcon from '../DynamicIconComponents/RateIcon';

interface GeneralPanelProps {
  className: string,
  tvData: tvDataProps | null,
};

const GeneralPanel = ({className, tvData}:GeneralPanelProps)=> {
  return(
    <section className={className}>
      <nav className='general-panel_nav'>
        <ul className='general-panel_nav_list'>
          <li>
            <button className='general-panel_btn'><IconBox className='general-panel_btn_icon' src={AddIcon()}/>Minha Lista</button>
          </li>
          <li>
            <button className='general-panel_btn'><IconBox className='general-panel_btn_icon' src={RateIcon()}/>Avaliar</button>
          </li>
          <li>
            <button className='general-panel_btn'><IconBox className='general-panel_btn_icon' src={DownloadIcon()} />Baixar</button>
          </li>
          <li>
            <button className='general-panel_btn'><IconBox className='general-panel_btn_icon' src={ShareIcon()}/>Compartilhe</button>
          </li>
        </ul>
      </nav>
      <section className='general-panel_about'>
        <h3 className='general-panel_about_title'>SINOPSE</h3>
        {tvData && //Verificação para garantir que as informações do conteúdo chegaram até aqui.
          <section className='general-panel_about_content'>
            <p>{tvData.Synopsis}</p>      
          </section>
        }
      </section>
    </section>
  )
};

export default GeneralPanel;