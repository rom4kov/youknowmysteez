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
        <FormInputLabel shrink={otherProps.value.length}>
          {label}
        </FormInputLabel>
      )}
    </Group>
  );
};

export default FormInput;
