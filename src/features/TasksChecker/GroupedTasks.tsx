import React, { useState } from "react";
import GroupIcon from "@assets/icons/TaskGroupIcon";
import GroupActionIcon from "@assets/icons/GroupActionIcon";
import CheckboxGroup from "@common/CheckboxGroup";
import {
  GroupedTasksWrapper,
  TaskGroupWrapper,
  TaskGroup,
  LabelWrapper,
  Action,
  ActionText,
  TasksList,
} from "./styledComponents";

const tasks = [
  {
    id: 1,
    name: "General Info",
    tasks: [
      {
        description: "Add name and surname",
        value: 10,
        checked: true,
      },
      {
        description: "Add email",
        value: 15,
        checked: false,
      },
      {
        description: "Add linkedin profile",
        value: 8,
        checked: false,
      },
      {
        description: "Provide websites page url",
        value: 5,
        checked: true,
      },
    ],
  },
  {
    id: 2,
    name: "Accomiplishments",
    tasks: [
      {
        description: "Wrote a small poem about the birthday",
        value: 23,
        checked: false,
      },
      {
        description: "Jump three times with one leg",
        value: 32,
        checked: true,
      },
      {
        description: "Avoid the annoying neighbor",
        value: 2,
        checked: false,
      },
      {
        description: "Say hello to a random person",
        value: 21,
        checked: false,
      },
      {
        description: "Fill the description in at least 3 places",
        value: 12,
        checked: true,
      },
    ],
  },
  {
    id: 3,
    name: "Personal retrospective",
    tasks: [
      {
        description: "Remember a dream",
        value: 15,
        checked: true,
      },
      {
        description: "Have a crush",
        value: 7,
        checked: true,
      },
    ],
  },
  {
    id: 4,
    name: "Things before leaving",
    tasks: [
      {
        description: "Say what you feel to all the people you know",
        value: 42,
        checked: false,
      },
      {
        description: "Get a pet",
        value: 23,
        checked: false,
      },
      {
        description: "Buy a fashion shirt",
        value: 12,
        checked: false,
      },
    ],
  },
];

const GroupedTasks = () => {
  const [tasksList, setTasksList] = useState(tasks);
  const [selectedId, setSelectedId] = useState(0);

  const handleSelectedTaskGroup = (event: React.MouseEvent<HTMLElement>) => {
    const tasksGroupId = event.currentTarget.getAttribute("data-id");
    setSelectedId(Number(tasksGroupId));
  };

  return (
    <GroupedTasksWrapper>
      {tasksList.map(({ id, name, tasks }) => {
        return (
          <TaskGroupWrapper key={id}>
            <TaskGroup onClick={handleSelectedTaskGroup} data-id={id}>
              <LabelWrapper>
                <GroupIcon style={{ marginRight: "16px" }} />
                {name}
              </LabelWrapper>
              <Action>
                <ActionText>Show</ActionText>
                <GroupActionIcon
                  selected={false}
                  style={{ marginLeft: "16px" }}
                />
              </Action>
            </TaskGroup>
            {selectedId == id && (
              <TasksList>
                <CheckboxGroup options={tasks} />
              </TasksList>
            )}
          </TaskGroupWrapper>
        );
      })}
    </GroupedTasksWrapper>
  );
};

export default GroupedTasks;
