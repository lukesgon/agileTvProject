import './styles.scss';

//Como as APIs consumidas não direcionavam nenhum conteúdo para a seção de prêmios, optei por criar o componente como um ponto de espera para o futuro recebimento de conteúdos, com um aviso amigável ao usuário sobre a indisponibilidade atual.

interface PrizePanelProps {
  className: string,
};

const PrizePanel = ({className}:PrizePanelProps)=> {
  return(
    <section className={className}>
      <h2>
        EM BREVE...
      </h2>
    </section>
  )
};

export default PrizePanel;