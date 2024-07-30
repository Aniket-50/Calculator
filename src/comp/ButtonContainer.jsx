import "../css/btn.css";
function ButtonContainer({ onButtonClick }) {
  let ButtonNames = [
    "Ans",
    "C",
    "(",
    ")",
    "1",
    "2",
    "3",
    "+",
    "4",
    "5",
    "6",
    "-",
    "7",
    "8",
    "9",
    "/",
    ".",
    "0",
    "⬅",
    "*",
  ];

  return (
    <>
      <div className="container">
        {ButtonNames.map((ButtonName) => (
          <button
            key={ButtonName}
            className={
              ButtonName == "/" ||
              ButtonName == "*" ||
              ButtonName == "+" ||
              ButtonName == "-" ||
              ButtonName == "Ans" ||
              ButtonName == "C" ||
              ButtonName == "(" ||
              ButtonName == ")" 
                ? "fn"
                : null
            }
            onClick={() => onButtonClick(ButtonName)}
          >
            {ButtonName}
          </button>
        ))}
      </div>
    </>
  );
}
export default ButtonContainer;
