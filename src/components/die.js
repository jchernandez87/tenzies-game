import "../styles/die.css";

const Die = (props) => (
  
  <div onClick={props.holding} className={`die ${props.myColor ? "green": "white"}`} >
    <span>{props.num}</span>
  </div>
);

export default Die;
