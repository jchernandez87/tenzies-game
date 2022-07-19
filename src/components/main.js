import "../styles/main.css";
import Die from "./die";

const Main = () => {
  const allNewDice = [];

  for (let i = 0; i < 10; i++) {
    const randomNum = Math.floor(Math.random() * 6 + 1);
    allNewDice.push({
      id: i + 1,
      myNum: randomNum,
    });
  }

  const dice = allNewDice.map((item) => <Die key={item.id} num={item.myNum} />);

  return (
    <div className="main-container">
      {console.log(allNewDice)}
      <h1>Tenzies</h1>
      <p>
        Roll until all dice are the same. <br />
        Click each die to freeze it at its current value between rolls.
      </p>
      <div className="dice-grid">{dice}</div>
    </div>
  );
};

export default Main;
