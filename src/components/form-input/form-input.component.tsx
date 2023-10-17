import { InputHTMLAttributes, FC } from "react";

import {
  Group,
  FormInputField,
  FormInputLabel,
  GrowingUnderline,
} from "./form-input.styles";

type FormInputProps = { label: string } & InputHTMLAttributes<HTMLInputElement>;

const FormInput: FC<FormInputProps> = ({ label, ...otherProps }) => {
  return (
    <Group>
      <FormInputField {...otherProps} />
      <GrowingUnderline />
      {label && (
        <FormInputLabel
          shrink={Boolean(
            otherProps.value &&
              otherProps.value === "string" &&
              otherProps.value.length
          )}
        >
          {label}
        </FormInputLabel>
      )}
    </Group>
  );
};

export default FormInput;
