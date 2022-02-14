import React from "react";
import {
  FormInputContainer,
  GroupContainer,
  LabelContainer,
} from "./text-input.style";

const TextInput = ({ label, handleChange, ...props }) => {
  return (
    <GroupContainer>
      <FormInputContainer onChange={handleChange} {...props} />
      {label && (
        <LabelContainer
          className={`${
            String(props?.value)?.length ? "shrink" : ""
          } form-input-label`}
        >
          {label}
        </LabelContainer>
      )}
    </GroupContainer>
  );
};

export default TextInput;
