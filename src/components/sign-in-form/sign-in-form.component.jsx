import { useState } from "react";

import FormInput from "../form-input/form-input.component";
import Button from "../button/button.component";

import "./sign-in-form.styles.scss";

import {
  signInAuthUserEmailAndPassword,
  displayUserData,
  signInWithGooglePopup,
  createUserDocumentFromAuth,
} from "../../utils/firebase/firebase.utils";

const defaultFormFields = {
  email: "",
  password: "",
};

const SignInForm = () => {
  const [formFields, setFormFields] = useState(defaultFormFields);
  const { email, password } = formFields;
  const [userName, setUserName] = useState("");

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
      const { user } = await signInAuthUserEmailAndPassword(email, password);
      console.log("user uid in component:", user.uid);
      const username = await displayUserData(user.uid);
      console.log("user data:", username);
      setUserName(username.displayName);
      resetFormFields();
    } catch (error) {
      console.log("Ein Fehler ist aufgetreten:", error);
    }
  };

  const logGoogleUser = async () => {
    const { user } = await signInWithGooglePopup();
    console.log(user);
    await createUserDocumentFromAuth(user);
    resetFormFields();
  };

  return (
    <div className="sign-in-container">
      <p className="username">{userName}</p>
      <div className="login">
        <h2>Du hast einen Account?</h2>
        <span>Melde dich per Email und Passwort an</span>
        <form onSubmit={handleSubmit} className="form-inputs">
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
          <div className="buttons-container">
            <Button type="submit">Anmelden</Button>
            <Button onClick={logGoogleUser} buttonType="google">
              Anmelden mit Google
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default SignInForm;
