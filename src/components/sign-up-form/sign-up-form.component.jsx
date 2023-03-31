import { useState } from "react";

import {
  createAuthUserWithEmailAndPassword,
  createUserDocumentFromAuth,
} from "../../utils/firebase/firebase.utils";

const defaultFormFields = {
  displayName: "",
  email: "",
  password: "",
  confirmPassword: "",
};

const SignUpForm = () => {
  const [formFields, setFormFields] = useState(defaultFormFields);
  const { displayName, email, password, confirmPassword } = formFields;

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
      // user.displayName = displayName;
      await createUserDocumentFromAuth(user, { displayName });
      resetFormFields();
    } catch (error) {
      if (error.code === "auth/email-already-in-use") {
        alert("Die Email-Adresse ist bereits belegt.");
        return;
      } else {
        console.log("There was an error:", error);
      }
    }
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormFields({ ...formFields, [name]: value });
  };

  return (
    <div>
      <h3>Melde dich mit Email und Passwort an</h3>
      <form onSubmit={handleSubmit}>
        <label>Benutzer*innenname</label>
        <input
          type="text"
          name="displayName"
          value={displayName}
          onChange={handleChange}
          required
        />

        <label>Email</label>
        <input
          type="email"
          name="email"
          value={email}
          onChange={handleChange}
          required
        />

        <label>Passwort</label>
        <input
          type="password"
          name="password"
          pattern=".{8,}"
          value={password}
          onChange={handleChange}
          required
        />

        <label>Passwort bestätigen</label>
        <input
          type="password"
          name="confirmPassword"
          pattern=".{8,}"
          value={confirmPassword}
          onChange={handleChange}
          required
        />

        <button type="submit">Registrieren</button>
      </form>
    </div>
  );
};

export default SignUpForm;
