import { useState } from "react";
import "../styles/main.css";
import Die from "./die";

const Main = () => {
  const [dices, setDices] = useState([]);

  const rollDice = () => {
    const allNewDice = [];

    for (let i = 0; i < 10; i++) {
      const randomNum = Math.ceil(Math.random() * 6);
      allNewDice.push({
        id: i + 1,
        myNum: randomNum,
      });
    }
    const dice = allNewDice.map((item) => (
      <Die key={item.id} num={item.myNum} />
    ));

    setDices(dice);
  };

  return (
    <div className="main-container">
      <h1>Tenzies</h1>
      <p>
        Roll until all dice are the same. <br />
        Click each die to freeze it at its current value between rolls.
      </p>
      <div className="dice-grid">{dices}</div>
      <button className="roll-btn" onClick={rollDice}>
        Roll
      </button>
    </div>
  );
};

export default Main;
