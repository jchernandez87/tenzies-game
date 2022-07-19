import { useState } from "react";
import "../styles/main.css";
import Die from "./die";

const Main = () => {
  const [dices, setDices] = useState([]);

  const initializeState = () => {
    const allNewDice = [];

    for (let i = 0; i < 10; i++) {
      const randomNum = Math.ceil(Math.random() * 6);
      allNewDice.push({
        id: i + 1,
        myNum: randomNum,
        isHeld: false,
      });
    }
    return allNewDice;
  };

  const rollDice = () => setDices(initializeState());

  const hold = (event, obj) => {
    event.stopPropagation()
    setDices((prevDices) => {
      const newArr = [];
      prevDices.forEach((dice) => {
        dice.id === obj.id
          ? newArr.push({
              ...dice,
              isHeld: !obj.isHeld,
            })
          : newArr.push(dice);
      });
      return newArr;
    });
  };

  const dice = dices.map((item) => (
    <Die
      holding={(event) => hold(event, item)}
      key={item.id}
      num={item.myNum}
      myColor={item.isHeld}
    />
  ));

  return (
    <div className="main-container">
      <h1>Tenzies</h1>
      <p>
        Roll until all dice are the same. <br />
        Click each die to freeze it at its current value between rolls.
      </p>
      {dices && <div className="dice-grid">{dice}</div>}
      <button className="roll-btn" onClick={rollDice}>
        Roll
      </button>
    </div>
  );
};

export default Main;
