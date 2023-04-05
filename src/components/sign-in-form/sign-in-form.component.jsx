import { useState, useContext } from "react";

import FormInput from "../form-input/form-input.component";
import Button from "../button/button.component";

import { UserContext } from "../../contexts/user.context";

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

  const { setCurrentUser } = useContext(UserContext);

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
      const username = await displayUserData(user.uid);
      setCurrentUser(user);
      console.log("user data:", username);
      setUserName(username.displayName);
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

  const logGoogleUser = async () => {
    const { user } = await signInWithGooglePopup();
    console.log(user);
    setCurrentUser(user);
    createUserDocumentFromAuth(user);
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
            <Button type="button" onClick={logGoogleUser} buttonType="google">
              Anmelden mit Google
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default SignInForm;
