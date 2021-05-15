import Titles from './Titles';
import classes from './LatestNews.module.css';
import Post from './Post';

const LatestNews = () => {
  return (
    <section>
      <div className={classes.latest__news}>
        <Titles />
      </div>
      <div className={classes.latest__news}>
        <Post />
        <Post />
        <Post />
        <Post />
        <Post />
        <Post />
        <Post />
      </div>
    </section>
  );
};

export default LatestNews;
