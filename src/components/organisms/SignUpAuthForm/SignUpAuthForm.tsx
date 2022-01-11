import { Dispatch, SetStateAction } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
import { createUserWithEmailAndPassword, getAuth } from 'firebase/auth';
import { useNavigate } from 'react-router-dom';

import { Button } from 'components/atoms/Button/Button';
import { AuthForm } from 'components/molecules/AuthForm/AuthForm';
import { AuthFormField } from 'components/molecules/AuthFormField/AuthFormField';

interface IFormInputs {
  email: string;
  password: string;
  confirmPassword: string;
}

export const SignUpAuthForm = ({
  setAuthError,
}: {
  setAuthError: Dispatch<SetStateAction<string>>;
}) => {
  const {
    register,
    formState: { errors },
    getValues,
    handleSubmit,
  } = useForm<IFormInputs>();
  const navigate = useNavigate();

  const onSubmit: SubmitHandler<IFormInputs> = data => {
    const { email, password, confirmPassword } = data;

    createUserWithEmailAndPassword(getAuth(), email, password)
      .then(user => navigate('/'))
      .catch(err => {
        switch (err.code) {
          case 'auth/weak-password':
            setAuthError('Your password is too weak');
            break;
          case 'auth/email-already-in-use':
            setAuthError('Account with this e-mail already exists');
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
        error={!!errors.email}
        errorMessage="Enter your email"
        {...register('email', { required: true })}
      />
      <AuthFormField
        label="Password"
        type="password"
        error={!!errors.password}
        errorMessage="Enter your password"
        {...register('password', { required: true })}
      />
      <AuthFormField
        label="Confirm password"
        type="password"
        error={!!errors.confirmPassword}
        errorMessage={
          errors.confirmPassword?.type === 'validate'
            ? 'Passwords are not the same'
            : 'Enter your password again'
        }
        {...register('confirmPassword', {
          required: true,
          validate: value => value === getValues('password'),
        })}
      />
      <Button>Sign-Up</Button>
    </AuthForm>
  );
};
