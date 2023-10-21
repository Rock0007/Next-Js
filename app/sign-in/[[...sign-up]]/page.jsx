import { SignIn, UserButton } from "@clerk/nextjs";

const SignInPage = () => {
  return (
    <div>
      <SignIn>
        <UserButton />
      </SignIn>
    </div>
  );
};

export default SignInPage;
