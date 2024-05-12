import React from "react";
import styled from "styled-components";

const FamilyContainer = styled.div`
  position: fixed;
  bottom: 20px;
  right: 20px;
`;

const StickFigure = styled.div`
  display: inline-block;
  width: 30px;
  height: 60px;
  background-color: #000;
  border-radius: 50%;
  position: relative;
  margin-right: 10px;
`;

const StickFigureHead = styled.div`
  width: 20px;
  height: 20px;
  background-color: #000;
  border-radius: 50%;
  position: absolute;
  top: -20px;
  left: 5px;
`;

const StickFigureBody = styled.div`
  width: 10px;
  height: 30px;
  background-color: #000;
  position: absolute;
  top: 0;
  left: 10px;
`;

const StickFigureArm = styled.div`
  width: 10px;
  height: 30px;
  background-color: #000;
  position: absolute;
  top: 0;
  left: ${(props) => (props.side === "left" ? "0" : "20px")};
  transform: rotate(${(props) => (props.side === "left" ? "-45deg" : "45deg")});
`;

const StickFigureLeg = styled.div`
  width: 10px;
  height: 30px;
  background-color: #000;
  position: absolute;
  top: 30px;
  left: 10px;
`;

const DogContainer = styled.div`
  position: relative;
  width: 50px;
  height: 30px;
`;

const DogBody = styled.div`
  width: 40px;
  height: 20px;
  background-color: white;
  border: 2px solid black;
  border-radius: 50%;
  position: absolute;
  top: 5px;
  left: 5px;
`;

const DogEar = styled.div`
  width: 10px;
  height: 10px;
  background-color: white;
  border: 2px solid black;
  position: absolute;
`;

const DogTail = styled.div`
  width: 20px;
  height: 4px;
  background-color: black;
  position: absolute;
  top: 15px;
  left: -15px;
`;

const SmilingStickFigureFamily = () => {
  return (
    <FamilyContainer>
      <StickFigure>
        <StickFigureHead />
        <StickFigureBody />
        <StickFigureArm side="left" />
        <StickFigureArm side="right" />
        <StickFigureLeg />
      </StickFigure>
      <StickFigure>
        <StickFigureHead />
        <StickFigureBody />
        <StickFigureArm side="left" />
        <StickFigureArm side="right" />
        <StickFigureLeg />
      </StickFigure>
      <StickFigure>
        <StickFigureHead />
        <StickFigureBody />
        <StickFigureArm side="left" />
        <StickFigureArm side="right" />
        <StickFigureLeg />
      </StickFigure>
      <StickFigure>
        <StickFigureHead />
        <StickFigureBody />
        <StickFigureArm side="left" />
        <StickFigureArm side="right" />
        <StickFigureLeg />
      </StickFigure>
      <DogContainer>
        <DogBody />
        <DogEar
          style={{ top: "0", left: "25px", borderRadius: "50% 0 50% 50%" }}
        />
        <DogEar
          style={{ top: "0", left: "10px", borderRadius: "0 50% 50% 50%" }}
        />
        <DogTail />
      </DogContainer>
    </FamilyContainer>
  );
};

export default SmilingStickFigureFamily;
