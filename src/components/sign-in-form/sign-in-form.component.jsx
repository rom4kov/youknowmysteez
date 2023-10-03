import { useState } from "react";

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

import { googleSignInStart, emailSignInStart } from "store/reducers/user.reducer";

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

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormFields({ ...formFields, [name]: value });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      dispatch(emailSignInStart(email, password));
      // const { user } = await signInAuthUserEmailAndPassword(email, password);
      // const username = await displayUserData(user.uid);
      // console.log("user data:", username);
      // setUserName(username.displayName);
      resetFormFields();
    } catch (error) {
      switch (error.code) {
        case "auth/wrong-password":
          alert("Falsches Passwort.");
          break;
        case "auth/user-not-found":
          alert("Email nicht bekannt.");
          break;
        default:
          console.log("Error:", error);
      }
    }
  };

  const signInWithGoogle = async () => {
    // await signInWithGooglePopup();
    dispatch(googleSignInStart())
  };

  return (
    <SingInContainer>
      {/* <Username>{userName}</Username> */}
      <Login>
        <LoginTitle>Du hast einen Account?</LoginTitle>
        <LoginSubheading>Melde dich per Email und Passwort an</LoginSubheading>
        <FormInputs onSubmit={handleSubmit}>
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
          <ButtonsContainer>
            <Button type="submit">Anmelden</Button>
            <Button
              type="button"
              onClick={signInWithGoogle}
              buttonType={BUTTON_TYPE_CLASSES.google}
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
