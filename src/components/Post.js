import classes from './Post.module.css';
import postImage from '../images/img_3.jpg';
// import { FaChevronRight } from 'react-icons/fa';
import ArrowLine from '../images/arrow_01.svg';

const Post = () => {
  return (
    <div className={classes.post}>
      <div className={classes.image}>
        <img src={postImage} alt={postImage} className={classes.image__img} />
      </div>

      <h3 className={classes.text}>Traditional and progress</h3>
      <p className={classes.text}>
        The fountain pens, roller-ball pens, propelling pencils and ball pens in
        the Graf von Faber-Castell Classic Collection are designed as matchings
        sets and available in several variants.
      </p>
      <div className={classes.icon}>
        <img src={ArrowLine} alt={ArrowLine} className={classes.arrow} />
      </div>
    </div>
  );
};

export default Post;
