import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { decrement, increment } from "../redux/slices/counterSlice";
import { FaMinusCircle, FaPlusCircle } from "react-icons/fa";

const Selector = ({ characterId, totalCount }) => {
  const count = useSelector((state) => state.counter[characterId] || 0);
  const dispatch = useDispatch();

  const addHandler = () => {
    dispatch(increment(characterId));
  };

  const removeHandler = () => {
    if (count >= 1) {
      dispatch(decrement(characterId));
    }
  };

  return (
    <div className="flex gap-4 bg-cyan-100 items-center justify-center px-4 py-[4px] rounded-lg">
      <button onClick={removeHandler} className="text-green-400">
        <FaMinusCircle />
      </button>
      <div className="border-2 border-gray-300 rounded-lg px-3">{count}</div>
      <button
        onClick={addHandler}
        className="text-green-400"
        disabled={totalCount === 15}
      >
        <FaPlusCircle />
      </button>
    </div>
  );
};

export default Selector;
