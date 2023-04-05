import { useState, useContext } from "react";

import FormInput from "../form-input/form-input.component";
import Button from "../button/button.component";

import {
  createAuthUserWithEmailAndPassword,
  createUserDocumentFromAuth,
} from "../../utils/firebase/firebase.utils";

import { UserContext } from "../../contexts/user.context";

import "./sign-up-form.styles.scss";

const defaultFormFields = {
  displayName: "",
  email: "",
  password: "",
  confirmPassword: "",
};

const SignUpForm = () => {
  const [formFields, setFormFields] = useState(defaultFormFields);
  const { displayName, email, password, confirmPassword } = formFields;

  const { setCurrentUser } = useContext(UserContext);

  const resetFormFields = () => {
    setFormFields(defaultFormFields);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (password !== confirmPassword) {
      alert("Die Passwörter stimmen nicht überein.");
      return;
    }
    try {
      const { user } = await createAuthUserWithEmailAndPassword(
        email,
        password
      );
      console.log(user);

      setCurrentUser(user);

      await createUserDocumentFromAuth(user, { displayName });
      resetFormFields();
    } catch (error) {
      if (error.code === "auth/email-already-in-use") {
        alert("Die Email-Adresse ist bereits belegt.");
        return;
      } else {
        console.log("Ein Fehler ist aufgetreten:", error);
      }
    }
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormFields({ ...formFields, [name]: value });
  };

  return (
    <div className="sign-up-container">
      <h2>Du hast noch keinen Account?</h2>
      <span>Registriere dich mit Email und Passwort</span>
      <form onSubmit={handleSubmit}>
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
      </form>
    </div>
  );
};

export default SignUpForm;
