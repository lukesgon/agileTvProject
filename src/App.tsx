import Main from "./components/Main/intex";
import { useEffect, useState } from "react";
import axios from "axios";
import BackgroundImg from "./components/BackgroundImg";
import TrackMenu from "./components/TrackMenu";
import { tvDataProps, epDataProps } from "./Utils/APITypes";
import Header from "./components/Header";
import ContentPanel from "./components/ContentPanel";

function App() {

  const [tvData, setTvData] = useState<tvDataProps |null>(null);
  const [epData, setEpData] = useState<epDataProps[]>([])
  const [isLoading, setIsLoading] = useState(true);

  useEffect(()=> {
    axios.get('https://agile-releases.s3.us-east-1.amazonaws.com/tests/tv-shows/SHOW123.json')
      .then(response=> {
        setTvData(response.data);
      })
      .catch(error=> {
        console.log("Erro ao obter dados da Mídia:", error)
      });
      
      axios.get('https://agile-releases.s3.us-east-1.amazonaws.com/tests/episodes/SHOW123.json')
      .then(response=> {
        setEpData(response.data)
      })
      .catch(error=> {
        console.log("Erro ao obter episódios da Mídia:", error)
      })
      .finally(()=> setIsLoading(false))
  },[])

  return (
    <Main className="main">
      <BackgroundImg imgSrc={tvData?.Images.Background} className="background-container_img" />
      <Header data={tvData} isLoading={isLoading} className="header"/>
      <ContentPanel className="content-panel" tvData={tvData}/>
      <TrackMenu className="track-menu" epData={epData} />
    </Main>
  )
}

export default App
