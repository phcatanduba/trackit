import SignUpOrSignIn from './SignUpOrSignIn';
import InputSignUp from './InputSignUp';
import Logo from './Logo';

export default function SignIn() {
    return (
        <main>
            <Logo />
            <InputSignUp />
            <SignUpOrSignIn option={false} />
        </main>
    );
}
