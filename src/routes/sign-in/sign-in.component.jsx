import {
  signInWithGooglePopup,
  createUserDocumentFromAuth,
} from "../../utils/firebase/firebase.utils";

import SignUpForm from "../../components/sign-up-form/sign-up-form.component";

import "./sign-in.styles.scss";

const SignIn = () => {
  const logGoogleUser = async () => {
    const { user } = await signInWithGooglePopup();
    console.log(user);
    const userDocRef = await createUserDocumentFromAuth(user);
  };

  return (
    <div className="sign-in">
      <div className="login">
        <h2>Anmelden</h2>
        <button onClick={logGoogleUser}>Anmelden mit Google Popup</button>
        <button onClick={signInWithGooglePopup}>
          Anmelden mit Google Redirect
        </button>
      </div>
      <SignUpForm className="sign-up" />
    </div>
  );
};

export default SignIn;
