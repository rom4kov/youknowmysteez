import SignUpForm from "../../components/sign-up-form/sign-up-form.component";

import "./authentication.styles.scss";
import SignInForm from "../../components/sign-in-form/sign-in-form.component";

const Authentication = () => {
  return (
    <div className="authentication">
      <SignInForm />
      <SignUpForm className="sign-up" />
    </div>
  );
};

export default Authentication;
