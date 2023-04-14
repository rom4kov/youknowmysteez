import React from "react";

import {
  Group,
  FormInputField,
  FormInputLabel,
  GrowingUnderline,
} from "./form-input.styles";

const FormInput = ({ label, ...otherProps }) => {
  return (
    <Group>
      <FormInputField {...otherProps} />
      <GrowingUnderline />
      {label && (
        <FormInputLabel
          className={`${otherProps.value.length ? "shrink" : ""}`}
        >
          {label}
        </FormInputLabel>
      )}
    </Group>
  );
};

export default FormInput;
