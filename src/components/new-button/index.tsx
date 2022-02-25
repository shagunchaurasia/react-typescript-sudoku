import { Button } from "components";
import React, { useCallback } from "react";
import { useDispatch } from "react-redux";
import { createGrid } from "reducers";
import { Action, Dispatch } from "redux";

const NewButton: React.FunctionComponent = () => {
  const dispatch = useDispatch<Dispatch<Action>>();

  const createNewGrid = useCallback(() => {
    if (window.confirm("Are you sure you want to start a new game?")) {
      dispatch(createGrid());
    }
  }, [dispatch]);
  return <Button onClick={createNewGrid}>New Game</Button>;
};

export default NewButton;
