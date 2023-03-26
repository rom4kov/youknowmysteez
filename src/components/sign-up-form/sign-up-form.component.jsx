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

  const handleSubmit = async (event) => {
    console.log("email:", email);
    console.log("password:", password);
    // const email = formFields.email;
    // const password = formFields.password;
    event.preventDefault();
    if (password !== confirmPassword) return;

    const { user } = await createAuthUserWithEmailAndPassword(email, password);
    console.log(user);
    user.displayName = displayName;
    console.log(user.displayName);
    const userDocRef = await createUserDocumentFromAuth(user);
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
          value={password}
          onChange={handleChange}
          required
        />

        <label>Passwort bestätigen</label>
        <input
          type="password"
          name="confirmPassword"
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
