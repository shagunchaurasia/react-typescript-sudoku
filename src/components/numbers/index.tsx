import { Container } from "./styles";
import React from "react";
import { NUMBERS } from "typings";
import Button from "./button";

const Numbers: React.FunctionComponent = () => {
  return (
    <Container>
      {([1, 2, 3, 4, 5, 6, 7, 8, 9] as NUMBERS[]).map((value) => (
        <Button key={value} value={value}>
          {value}
        </Button>
      ))}
    </Container>
  );
};

export default Numbers;
