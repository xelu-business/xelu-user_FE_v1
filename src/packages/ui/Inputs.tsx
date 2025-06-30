import styled from "@emotion/styled";
import { ChangeEvent } from "react";

interface IInputsType {
  label: string;
  placeholder?: string;
  isTextArea?: boolean;
  onChange?: (
    e: ChangeEvent<HTMLInputElement> | ChangeEvent<HTMLTextAreaElement>
  ) => void;
  value: string;
}

export const Inputs = ({
  label,
  placeholder,
  isTextArea = false,
  onChange,
  value,
}: IInputsType) => {
  return (
    <InputsContainer>
      <div>{label}</div>
      {isTextArea ? (
        <TextArea value={value} onChange={onChange} placeholder={placeholder} />
      ) : (
        <Input value={value} onChange={onChange} placeholder={placeholder} />
      )}
    </InputsContainer>
  );
};

const TextArea = styled.textarea`
  resize: none;
  width: 100%;
  height: 200px;
  border: 1px solid black;
  margin-top: 20px;
  padding: 10px 10px;
  border-radius: 5px;
`;

const Input = styled.input`
  width: 100%;
  height: 40px;
  border: 1px solid black;
  margin-top: 20px;
  padding: 5px 10px;
  border-radius: 5px;
`;

const InputsContainer = styled.div`
  display: flex;
  flex-direction: column;
`;
