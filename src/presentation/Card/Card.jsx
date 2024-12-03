/* eslint-disable react/prop-types */

import "./Card.css";
export function Card(props) {
  const { price, speed, color, isActive, onButtonClick} = props;

// const stateArray = useState("Выбрать"); // массив состояний с индексами 0 и 1
// const buttonText = stateArray[0];
// const setButtonText = stateArray[1];

//это то же самое, что и



  let className = "card";
  className += " card_" + color;
  if (isActive) {
    className += " card_active";
  }

  //Обработчик клика
  function onClick() {
  onButtonClick(color);
  }


  return (
    <div className={className}>
      <header><h4>Безлимитный {price}</h4></header>

      <div>руб {price} / мес</div>
      <div>{speed}</div>
      <footer><h5>Объем включенного трафика не ограничен</h5></footer>
      <button onClick={onClick}>{isActive ? "Выбрано" : "Выбрать"}</button>
    </div>
  );
}
