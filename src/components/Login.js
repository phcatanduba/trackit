import Logo from './Logo';
import InputLogin from './InputLogin';
import SignUpOrSignIn from './SignUpOrSignIn';

export default function Login({ setUser }) {
    return (
        <main>
            <Logo />
            <InputLogin setUser={setUser} />
            <SignUpOrSignIn option={true} />
        </main>
    );
}
