import "../styles/main.css";
import Die from './die';

const Main = () => (
  <div className="main-container">
    <h1>Tenzies</h1>
    <p>
      Roll until all dice are the same. <br />Click each dice to freeze it at its
      current value between rolls.
    </p>
    <div className="dice-grid">
      <Die num={4}/>
      <Die num={2}/>
      <Die num={3}/>
      <Die num={5}/>
      <Die num={4}/>
      <Die num={2}/>
      <Die num={1}/>
      <Die num={5}/>
      <Die num={3}/>
      <Die num={1}/>
     </div>
  </div>
);

export default Main;
