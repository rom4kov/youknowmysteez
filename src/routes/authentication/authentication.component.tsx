import { useSelector } from "react-redux";
import { selectCurrentUser } from "../../store/selectors/user.selector";
import SignUpForm from "../../components/sign-up-form/sign-up-form.component";
import SignInForm from "../../components/sign-in-form/sign-in-form.component";

import { Background, AuthContainer } from "./authentication.styles";

const Authentication = () => {
  const currentUser = useSelector(selectCurrentUser);
  console.log(currentUser);

  return (
    <Background>
      <div style={{ color: "white", padding: "1rem" }}>
        {currentUser?.displayName}
      </div>
      <AuthContainer>
        <SignInForm />
        <div className="hyphen" />
        <SignUpForm className="sign-up" />
      </AuthContainer>
    </Background>
  );
};

export default Authentication;
