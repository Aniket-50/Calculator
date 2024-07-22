import "../css/Display.css";
import { useRef, useEffect } from "react";
const Display = ({ DisplayValue, addValue }) => {
  const InputRef = useRef();
  useEffect(() => {
    InputRef.current.focus();
  }, []);
  function HandleChange(e) {
    try {
      const newVal = e.target.value;
      addValue(newVal);
    } catch (e) {
      alert(e);
    }
  }
  function HandleEnter(e) {
    if (e.key == "Enter") {
      try {
        let ans = eval(DisplayValue);
        if (ans == "Infinity" || ans == "-Infinity") {
          addValue("can't divide by zero");
          setTimeout(() => {
            addValue("");
            InputRef.current.focus();
          }, 2500);
        } else {
          addValue(ans);
        }
      } catch (e) {
        addValue("Invalid Expression");
        setTimeout(() => {
          addValue("");
          InputRef.current.focus();
        }, 2500);
      }
    }
  }
  return (
    <>
      <div className="display">
        <input
          type="text"
          className=""
          value={DisplayValue}
          onChange={HandleChange}
          onKeyDown={HandleEnter}
          ref={InputRef}
        />
      </div>
    </>
  );
};
export default Display;
