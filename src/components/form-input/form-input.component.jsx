import React from "react";

import { Group, FormIput, GrowingUnderline } from "./form-input.styles";

const FormInput = ({ label, ...otherProps }) => {
  return (
    <Group>
      <FormIput {...otherProps} />
      <GrowingUnderline />
      {label && (
        <label
          className={`${
            otherProps.value.length ? "shrink" : ""
          } form-input-label`}
        >
          {label}
        </label>
      )}
    </Group>
  );
};

export default FormInput;
