import { useReducer } from "react";
import { countingReducer, initialState } from "../stores/countingReducer";
const CountingNumber = () => {
  const [countNumber, dispatch] = useReducer(countingReducer, initialState);
  const handleCountNumber = () => {
    dispatch({ type: "INCREASE" });
  };
  const handleMinNumber = () => {
    dispatch({ type: "DECREASE" });
  };
  return (
    <div className="flex flex-col items-center mt-20">
      <div className="w-[300px] shadow-lg text-center p-5">
        <h1 className="text-2xl font-black">Counting Number</h1>
        <input
          type="number"
          value={countNumber}
          disabled
          className="text-center mt-2"
        />
        <div className="flex justify-between mt-5">
          <button
            onClick={() => handleMinNumber()}
            className="text-2xl bg-blue-500 p-2 text-white rounded-md"
          >
            -
          </button>
          <button
            onClick={() => {
              handleCountNumber();
            }}
            className="text-2xl bg-blue-500 p-2 text-white rounded-md"
          >
            +
          </button>
        </div>
      </div>
    </div>
  );
};

export default CountingNumber;
