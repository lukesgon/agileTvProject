import './styles.scss'

interface BackgroundImgProps {
  className?: string,
  imgSrc?: string,
};

const BackgroundImg = ({className, imgSrc}:BackgroundImgProps)=> {
  return(
    <figure className='background-container'>
    <img src={imgSrc} className={className} alt="" />
    </figure>
  )
};

export default BackgroundImg;