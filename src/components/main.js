import { useState, useEffect } from "react";
import { nanoid } from "nanoid";
import "../styles/main.css";
import Die from "./die";

const Main = () => {
  const generateNewDie = () => ({
    id: nanoid(),
    myNum: Math.ceil(Math.random() * 6),
    isHeld: false,
  });

  const initializeState = () => {
    const allNewDice = [];

    for (let i = 0; i < 10; i++) {
      allNewDice.push(generateNewDie());
    }
    return allNewDice;
  };

  const [dices, setDices] = useState(initializeState());
  const [tenzies, setTenzies] = useState(false);

  useEffect(() => {
    const allTrue = (obj) => obj.isHeld === true;
    const sameNum = (obj) => obj.myNum === dices[0].myNum;
    setTenzies(dices.every(allTrue) && dices.every(sameNum) ? true : false);
  }, [dices]);

  const rollDice = () =>
    setDices((prevState) =>
      prevState.map((dice) => {
        return dice.isHeld ? dice : generateNewDie();
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
      {tenzies && <span className="winner">You Won !!!!</span>}
    </div>
  );
};

export default Main;
