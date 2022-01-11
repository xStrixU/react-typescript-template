import { useForm, SubmitHandler } from 'react-hook-form';
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth';
import { Dispatch, SetStateAction } from 'react';
import { useNavigate } from 'react-router-dom';

import { Button } from 'components/atoms/Button/Button';
import { AuthForm } from 'components/molecules/AuthForm/AuthForm';
import { AuthFormField } from 'components/molecules/AuthFormField/AuthFormField';

interface IFormInputs {
  email: string;
  password: string;
}

export const SignInAuthForm = ({
  setAuthError,
}: {
  setAuthError: Dispatch<SetStateAction<string>>;
}) => {
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm<IFormInputs>();
  const navigate = useNavigate();

  const onSubmit: SubmitHandler<IFormInputs> = data => {
    const { email, password } = data;
    const auth = getAuth();

    signInWithEmailAndPassword(auth, email, password)
      .then(auth => navigate('/'))
      .catch(err => {
        switch (err.code) {
          case 'auth/user-not-found':
          case 'auth/wrong-password':
            setAuthError('Invalid email or password');
            break;
          case 'auth/too-many-requests':
            setAuthError('To many requests, please try again later');
            break;
          default:
            setAuthError('Something went wrong, please try again later');
        }
      });
  };

  return (
    <AuthForm onSubmit={handleSubmit(onSubmit)}>
      <AuthFormField
        label="Email"
        error={Boolean(errors.email)}
        errorMessage="Enter your email"
        {...register('email', { required: true })}
      />
      <AuthFormField
        type="password"
        label="Password"
        error={Boolean(errors.password)}
        errorMessage="Enter your password"
        {...register('password', { required: true })}
      />
      <Button>Sign-In</Button>
    </AuthForm>
  );
};
