import './styles.scss';

interface CastCardProps {
  className: string,
  cast: {ID: string, Name:string}
};

const CastCard = ({className, cast}:CastCardProps)=> {

  return(
    <a href={`https://google.com/search?q=${cast.Name}`} className={className} target="blank">
      <h4 className='cast-card_person'>{cast.Name}</h4>
      <p className='cast-card_character'>{cast.ID}</p>
    </a>
  )
};

export default CastCard