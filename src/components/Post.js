import classes from './Post.module.css'
// import postImage from '../images/img_3.jpg'
// import { FaChevronRight } from 'react-icons/fa';
import ArrowLine from '../images/arrow_01.svg'

const Post = (props) => {
  return (
    <div className={classes.post}>
      <div className={classes.image}>
        <img
          src={props.image}
          alt={props.title}
          className={classes.image__img}
        />
      </div>

      <h3 className={classes.text}>{props.title}</h3>
      <p className={classes.text}>{props.description}</p>
      <div className={classes.icon}>
        <img src={ArrowLine} alt={ArrowLine} className={classes.arrow} />
      </div>
    </div>
  )
}

export default Post
