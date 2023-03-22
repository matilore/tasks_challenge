import styled from "styled-components";
import { CheckboxProps } from "./contracts";

export const CheckboxWrapper = styled.div`
  display: flex;
  align-items: center;
  margin: 10px;
`;

export const HiddenCheckbox = styled.input.attrs({ type: "checkbox" })`
  position: absolute;
  opacity: 0;
  cursor: pointer;
`;

export const CheckboxIcon = styled.svg<CheckboxProps>`
  width: 16px;
  height: 16px;
  fill: ${({ checked, theme }) => (checked ? theme.COLORS.WHITE : "none")};
  stroke-width: 1.5;
  border-radius: 4px;
  background-color: ${({ checked, theme }) =>
    checked ? theme.COLORS.GREEN : "none"};
`;

export const CheckmarkIcon = styled.path`
  fill: #fff;
`;

export const CheckboxLabel = styled.label`
  margin-left: 8px;
  cursor: pointer;
`;
