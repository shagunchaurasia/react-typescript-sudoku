import React from "react";
import { useSelector, useDispatch } from "react-redux";

import { Dispatch, AnyAction } from "redux";
import { Container } from "./styles";
import { IReducer, selectBlock } from "reducers";
import { N, INDEX } from "typings";
interface IProps {
  colIndex: INDEX;
  rowIndex: INDEX;
}

interface IState {
  value: N;
  isActive: boolean;
  isPuzzle: boolean;
}

const Block: React.FunctionComponent<IProps> = ({ colIndex, rowIndex }) => {
  const state = useSelector<IReducer, IState>(
    ({ challengeGrid, workingGrid, selectedBlock }) => ({
      isActive: selectedBlock
        ? selectedBlock[0] === rowIndex && selectedBlock[1] === colIndex
        : false,
      isPuzzle:
        challengeGrid && challengeGrid[rowIndex][colIndex] !== 0 ? true : false,
      value: workingGrid ? workingGrid[rowIndex][colIndex] : 0,
    })
  );
  const dispatch = useDispatch<Dispatch<AnyAction>>();

  function handleClick() {
    if (!state.isActive) {
      dispatch(selectBlock([rowIndex, colIndex]));
    }
  }
  return (
    <Container
      data-cy={`block-${rowIndex}-${colIndex}`}
      onClick={handleClick}
      active={state.isActive}
      puzzle={state.isPuzzle}
    >
      {state.value === 0 ? "" : state.value}
    </Container>
  );
};

export default Block;
