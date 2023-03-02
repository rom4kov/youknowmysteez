import { signInWithGooglePopup } from "../../utils/firebase/firebase.utils";
import "./sign-in.styles.scss";

const SignIn = () => {
  const logGoogleUser = async () => {
    const response = await signInWithGooglePopup();
    console.log(response);
  };
  return (
    <div className="sign-in">
      <h2>Sign In Page</h2>
      <button onClick={logGoogleUser}>Anmelden mit Google Popup</button>
    </div>
  );
};

export default SignIn;
