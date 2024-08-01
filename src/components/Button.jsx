import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { reset } from "../redux/slices/counterSlice";
import Loader from "./Loader";

const Button = ({ totalCount }) => {
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(false);

  const onClickHandler = () => {
    if (!loading) {
      setLoading(true);
      setTimeout(() => {
        setLoading(false);
        dispatch(reset());
      }, 1000);
    }
  };

  return (
    <button
      className={`px-4 py-2 rounded-xl cursor-pointer w-fit ${
        totalCount === 0
          ? "bg-gray-300 cursor-not-allowed"
          : "bg-green-500 text-white"
      } sm:ml-[43.5rem]`}
      onClick={onClickHandler}
      disabled={totalCount === 0}
    >
      {loading ? <Loader /> : "RESET"}
    </button>
  );
};

export default Button;
