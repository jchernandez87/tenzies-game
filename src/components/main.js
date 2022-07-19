import { useState } from "react";
import { nanoid } from "nanoid";
import "../styles/main.css";
import Die from "./die";

const Main = () => {
  const initializeState = () => {
    const allNewDice = [];

    for (let i = 0; i < 10; i++) {
      allNewDice.push({
        id: nanoid(),
        myNum: Math.ceil(Math.random() * 6),
        isHeld: false,
      });
    }
    return allNewDice;
  };

  const [dices, setDices] = useState(initializeState());

  const rollDice = () =>
    setDices((prevState) =>
      prevState.map((dice) => {
        return dice.isHeld
          ? dice
          : {
              id: nanoid(),
              myNum: Math.ceil(Math.random() * 6),
              isHeld: false,
            };
      })
    );

  const hold = (id) => {
    setDices((prevDices) =>
      prevDices.map((item) => {
        return item.id === id
          ? {
              ...item,
              isHeld: !item.isHeld,
            }
          : item;
      })
    );
  };

  const dice = dices.map((item) => (
    <Die
      holding={() => {
        hold(item.id);
      }}
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
