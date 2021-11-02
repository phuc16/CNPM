
import classes from './Style/Pagnition.module.css';

export default function Pagnition() {

    return (
  <div class={classes.pagination}>
  <a href="#">&laquo;</a>
  <a href="#">1</a>
  <a href="#">2</a>
  <a href="#">3</a>
  <a href="#">4</a>
  <a href="#">&raquo;</a>
  </div>
);
}