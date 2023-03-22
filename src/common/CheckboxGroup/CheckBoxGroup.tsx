import React from "react";
import {
  CheckboxWrapper,
  HiddenCheckbox,
  CheckboxIcon,
  CheckmarkIcon,
  CheckboxLabel,
} from "./styledComponents";

interface CheckboxGroupProps {
  options: {
    description: string;
    value: number;
    checked: boolean;
  }[];
}

const CheckboxGroup: React.FC<CheckboxGroupProps> = ({ options }) => {
  return (
    <>
      {options.map((option, index) => (
        <CheckboxWrapper key={index}>
          <HiddenCheckbox checked={option.checked} />
          <CheckboxIcon checked={option.checked}>
            {option.checked && (
              <CheckmarkIcon d="M6.49574 10.1007L3.888 7.30201L3 8.24832L6.49574 12L13 4.94631L12.1182 4L6.49574 10.1007Z" />
            )}
          </CheckboxIcon>
          <CheckboxLabel>{option.description}</CheckboxLabel>
        </CheckboxWrapper>
      ))}
    </>
  );
};

export default CheckboxGroup;
