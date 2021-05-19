import Logo from './Logo';
import InputLogin from './InputLogin';
import SignUpOrSignIn from './SignUpOrSignIn';

export default function Login() {
    return (
        <main>
            <Logo />
            <InputLogin />
            <SignUpOrSignIn option={true} />
        </main>
    );
}
