import React from "react";
import { GroupContainer, LabelContainer } from "../TextInput/text-input.style";
import { AddressInputContainer } from "./address-input-container.style";

const TextInputAddress = ({ label, ...props }) => {
  return (
    <GroupContainer>
      <AddressInputContainer {...props} />
      {label && (
        <LabelContainer
          className={`${
            String(props?.inputAutocompleteValue)?.length ? "shrink" : ""
          } form-input-label`}
        >
          {label}
        </LabelContainer>
      )}
    </GroupContainer>
  );
};

export default TextInputAddress;
