import './styles.scss';

//Não tem uma grande função, senão semântica, para direcionar todos os componentes em um único ponto dentro do App.

interface MainProps {
  children: React.ReactNode,
  className?: string,
};

const Main = ({children, className}:MainProps)=> {
  return(
    <main className={className}>
      {children}
    </main>
  )
};

export default Main