import {
  signInWithGooglePopup,
  createUserDocumentFromAuth,
} from "../../utils/firebase/firebase.utils";
import "./sign-in.styles.scss";

const SignIn = () => {
  const logGoogleUser = async () => {
    const { user } = await signInWithGooglePopup();
    console.log(user);
    const userDocRef = await createUserDocumentFromAuth(user);
  };

  return (
    <div className="sign-in">
      <h2>Sign In Page</h2>
      <button onClick={logGoogleUser}>Anmelden mit Google Popup</button>
      <button onClick={signInWithGooglePopup}>
        Anmelden mit Google Redirect
      </button>
    </div>
  );
};

export default SignIn;
