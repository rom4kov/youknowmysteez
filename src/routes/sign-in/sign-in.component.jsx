import { useState } from "react";

import {
  signInWithEmailAndPasswordFunc,
  signInWithGooglePopup,
  createUserDocumentFromAuth,
  displayUserData,
} from "../../utils/firebase/firebase.utils";

import FormInput from "../../components/form-input/form-input.component";
import Button from "../../components/button/button.component";
import SignUpForm from "../../components/sign-up-form/sign-up-form.component";

import "./sign-in.styles.scss";

const defaultFormFields = {
  email: "",
  password: "",
};

const SignIn = () => {
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

  const signInWithCred = async (event) => {
    event.preventDefault();
    try {
      const { user } = await signInWithEmailAndPasswordFunc(email, password);
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
    const userDocRef = await createUserDocumentFromAuth(user);
    resetFormFields();
  };

  return (
    <div className="sign-in">
      <p className="username">{userName}</p>
      <div className="login">
        <h2>Anmelden</h2>
        <span>Melde dich per Email und Passwort an</span>
        <form onSubmit={signInWithCred} className="form-inputs">
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
          <div>
            <Button type="submit">Anmelden</Button>
            <Button onClick={logGoogleUser} buttonType="google">
              Anmelden mit Google
            </Button>
          </div>
        </form>
      </div>
      <SignUpForm className="sign-up" />
    </div>
  );
};

export default SignIn;
