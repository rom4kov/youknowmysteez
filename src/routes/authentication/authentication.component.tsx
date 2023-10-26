import SignUpForm from "../../components/sign-up-form/sign-up-form.component";

import { Background, AuthContainer } from "./authentication.styles";
import SignInForm from "../../components/sign-in-form/sign-in-form.component";

const Authentication = () => {
  return (
    <Background>
      <AuthContainer>
        <SignInForm />
        <div className="hyphen" />
        <SignUpForm className="sign-up" />
      </AuthContainer>
    </Background>
  );
};

export default Authentication;
