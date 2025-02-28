import './styles.scss';
import { epDataProps } from '../../Utils/APITypes';
import { useEffect, useState } from 'react';
import DynamicPlayButton from '../DynamicPlayButton';

interface EpCardProps {
  className: string,
  epData: epDataProps,
  onClick: ()=>void,
  isActive: boolean
};

const EpCard = ({className, epData, onClick, isActive}:EpCardProps)=> {
  const [data, setData] = useState(epData);

  useEffect(()=>{
    setData(epData)
  },[epData])

  return(
    <section className={className} onClick={onClick}>
      <section className={`track-list_ep-card_header ${(isActive) ?'track-list_ep-card_header--active' :' ' }`}>
        <h4>
          {data.EpisodeNumber+'- '+data.Title}
        </h4>
        <DynamicPlayButton className='track-list_ep-card_play-btn' />
      </section>
      <section className={!isActive ? 'track-list_ep-card--disabled ' :''}> {/*Aqui optei por simplificar a lógica de expansão de conteúdos com a utilização de uma classe que aplica "display:none" caso o cartão não seja o ativo na track list. */}
        <img src={epData.Image} alt={epData.Title+' episode thumb'} className='track-list_ep-card_img'/>
        <p>
          {epData.Synopsis}
        </p>
      </section>
    </section>
  )
};

export default EpCard;