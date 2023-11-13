import { useState, FormEvent, ChangeEvent } from "react";

import FormInput from "../form-input/form-input.component";
import Button, { BUTTON_TYPE_CLASSES } from "../button/button.component";

import {
  SingInContainer,
  Login,
  LoginTitle,
  LoginSubheading,
  FormInputs,
  ButtonsContainer,
} from "./sign-in-form.styles";

import {
  googleSignInStart,
  emailSignInStart,
} from "../../store/actions/user.action";

import { useDispatch } from "react-redux";

const defaultFormFields = {
  email: "",
  password: "",
};

const SignInForm = () => {
  const [formFields, setFormFields] = useState(defaultFormFields);
  const { email, password } = formFields;

  const dispatch = useDispatch();

  const resetFormFields = () => {
    setFormFields(defaultFormFields);
  };

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    console.log("test");
    const { name, value } = event.target;
    setFormFields({ ...formFields, [name]: value });
  };

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    try {
      console.log("test");
      dispatch(emailSignInStart(email, password));
      // const { user } = await signInAuthUserEmailAndPassword(email, password);
      // const username = await displayUserData(user.uid);
      // console.log("user data:", username);
      // setUserName(username.displayName);
      resetFormFields();
    } catch (error) {
      console.log("Error:", error);
    }
  };

  const signInWithGoogle = async () => {
    dispatch(googleSignInStart());
  };

  return (
    <SingInContainer>
      <Login>
        <LoginTitle>Du hast einen Account?</LoginTitle>
        <LoginSubheading>Melde dich per Email und Passwort an</LoginSubheading>
        <FormInputs onSubmit={handleSubmit} data-testid="form">
          <FormInput
            label="Email"
            type="email"
            name="email"
            value={email}
            onChange={handleChange}
            data-testid="email"
            required
          />
          <FormInput
            label="Passwort"
            type="password"
            name="password"
            pattern=".{8,}"
            value={password}
            onChange={handleChange}
            data-testid="password"
            required
          />
          <ButtonsContainer>
            <Button type="submit" data-testid="submit-button">
              Anmelden
            </Button>
            <Button
              type="button"
              onClick={signInWithGoogle}
              buttonType={BUTTON_TYPE_CLASSES.google}
              data-testid="google-sign-in-button"
            >
              Anmelden mit Google
            </Button>
          </ButtonsContainer>
        </FormInputs>
      </Login>
    </SingInContainer>
  );
};

export default SignInForm;
