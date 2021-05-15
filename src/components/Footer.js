import classes from './Footer.module.css';
import {
  FaFacebookSquare,
  FaTwitter,
  FaInstagram,
  FaYoutube,
} from 'react-icons/fa';

const Footer = () => {
  return (
    <section className={classes.container}>
      <div className={classes.footer__links}>
        <h4 className={classes.footer__title}>Our Products</h4>
        <ul>
          <li>
            <a href="">Graphite Pencils</a>
          </li>
          <li>
            <a href="">Color Pencils</a>
          </li>
          <li>
            <a href="">Fountain Pens</a>
          </li>
          <li>
            <a href="">Rollerball Pens</a>
          </li>
          <li>
            <a href="">Artist Pens</a>
          </li>
        </ul>
      </div>
      <div className={classes.footer__links}>
        <h4 className={classes.footer__title}>Inspiration</h4>
        <ul>
          <li>
            <a href="">Adult Coloring</a>
          </li>
          <li>
            <a href="">Creativity for Life Blog</a>
          </li>
        </ul>
      </div>
      <div className={classes.footer__links}>
        <h4 className={classes.footer__title}>Help</h4>
        <ul>
          <li>
            <a href="">Customer service</a>
          </li>
          <li>
            <a href="">Delivery & Return</a>
          </li>
          <li>
            <a href="">FAQ</a>
          </li>
          <li>
            <a href="">Constact Us</a>
          </li>
        </ul>
      </div>
      <div className={classes.social}>
        <FaFacebookSquare className={classes.icon} />
        <FaInstagram className={classes.icon} />
        <FaTwitter className={classes.icon} />
        <FaYoutube className={classes.icon} />
      </div>
    </section>
  );
};

export default Footer;
