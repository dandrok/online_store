import classes from './Titles.module.css'

const Titles = (props) => {
  return (
    <div>
      <div className={classes.title}>
        <p>Products</p>
      </div>
      <div className={classes.line}></div>
    </div>
  )
}

export default Titles
