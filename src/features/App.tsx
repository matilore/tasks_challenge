import React from "react";
import styled from "styled-components";
import ProgressBar from "@common/ProgressBar";
import GroupedTasks from "@features/TasksChecker";

const Wrapper = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const TasksWrapper = styled.div`
  width: 600px;
  hieght: 400px;
`;

const Title = styled.h2``;

const App = () => {
  return (
    <Wrapper>
      <TasksWrapper>
        <Title>Lodgify Grouped Tasks</Title>
        <ProgressBar value={58} />
        <GroupedTasks />
      </TasksWrapper>
    </Wrapper>
  );
};

export default App;
