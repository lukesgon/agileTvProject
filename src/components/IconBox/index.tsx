//Esse componente, apesar de simples, permite o controle da estilização dos ícones que ele aninha. Optei por não usar children aqui intencionalmente, pois imaginei esse componente menos "verboso" ao ser utilizado em linha única.

interface IconBoxProps {
  className: string,
  src: React.ReactNode,
};

const IconBox = ({className, src}:IconBoxProps)=> {
  return(
    <section className={className}>
      {src}
    </section>
  )
};

export default IconBox;