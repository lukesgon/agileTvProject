//Criei um componente de botão específico para o botão de Play, ele ainda não tem uma automatização para reconhecer que outro episódio está ativado, mas serve para demonstrar como seria o funcionamento em uma situação de uso.

import './styles.scss'
import { useState } from "react";
import PlayPauseIcon from "../DynamicIconComponents/PlayPauseIcon";
import IconBox from "../IconBox";

interface DynamicPlayButtonProps {
  className: string,
  onClick?: ()=> void,
};

const DynamicPlayButton = ({className, onClick}:DynamicPlayButtonProps)=> {
  const [isPlay, setIsPlay] = useState(false)

  return(
    <button className={className} onClick={(e)=>{
      e.stopPropagation()
      onClick && onClick();
      setIsPlay(!isPlay)
    }}>
      <IconBox className="play-button_icon" src={PlayPauseIcon({isPlay})}/>
    </button>
  )
};

export default DynamicPlayButton;