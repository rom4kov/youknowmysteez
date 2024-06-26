import { useState, ChangeEvent, FormEvent } from "react";
import { AuthError, AuthErrorCodes } from "firebase/auth";
import { useDispatch } from "react-redux";

import FormInput from "../form-input/form-input.component";
import Button from "../button/button.component";

import { signUpStart } from "../../store/reducers/user.reducer";

import {
  SignUpContainer,
  SignUpHeading,
  SignUpSubHeading,
  SignUpFormInputs,
} from "./sign-up-form.styles";

const defaultFormFields = {
  displayName: "",
  email: "",
  password: "",
  confirmPassword: "",
};

type SignUpFormProps = {
  className: string;
};

const SignUpForm: React.FC<SignUpFormProps> = ({ className }) => {
  const [formFields, setFormFields] = useState(defaultFormFields);
  const { displayName, email, password, confirmPassword } = formFields;

  const resetFormFields = () => {
    setFormFields(defaultFormFields);
  };

  const dispatch = useDispatch();

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (password !== confirmPassword) {
      alert("Die Passwörter stimmen nicht überein.");
      return;
    }
    try {
      dispatch(signUpStart(email, password, displayName));
      // console.log(user);

      // await createUserDocumentFromAuth(user, { displayName });
      resetFormFields();
    } catch (error) {
      if ((error as AuthError).code === AuthErrorCodes.EMAIL_EXISTS) {
        alert("Die Email-Adresse ist bereits belegt.");
        return;
      } else {
        console.log("Ein Fehler ist aufgetreten:", error);
      }
    }
  };

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setFormFields({ ...formFields, [name]: value });
  };

  return (
    <SignUpContainer>
      <SignUpHeading>Du hast noch keinen Account?</SignUpHeading>
      <SignUpSubHeading>
        Registriere dich mit Email und Passwort
      </SignUpSubHeading>
      <SignUpFormInputs onSubmit={handleSubmit}>
        <FormInput
          label="Benutzer*innenname"
          type="text"
          name="displayName"
          value={displayName}
          onChange={handleChange}
          required
        />

        <FormInput
          label="Email"
          type="email"
          name="email"
          value={email}
          onChange={handleChange}
          required
        />

        <FormInput
          label="Passwort"
          type="password"
          name="password"
          pattern=".{8,}"
          value={password}
          onChange={handleChange}
          required
        />

        <FormInput
          label="Passwort bestätigen"
          type="password"
          name="confirmPassword"
          pattern=".{8,}"
          value={confirmPassword}
          onChange={handleChange}
          required
        />

        <Button type="submit">Account erstellen</Button>
      </SignUpFormInputs>
    </SignUpContainer>
  );
};

export default SignUpForm;
