import { StyledLink } from 'components/atoms/StyledLink/StyledLink';
import { SignInAuthForm } from 'components/organisms/SignInAuthForm/SignInAuthForm';
import { SignUpAuthForm } from 'components/organisms/SignUpAuthForm/SignUpAuthForm';
import { useState } from 'react';
import { Link } from 'react-router-dom';

import { Box, AuthErrorWrapper, Logo, Wrapper } from './AuthPage.styles';

enum FormType {
  SignIn,
  SignUp,
}

export const AuthPage = () => {
  const [formType, setFormType] = useState(FormType.SignIn);
  const [authError, setAuthError] = useState('');

  const handleAccountClick = () => {
    switch (formType) {
      case FormType.SignIn:
        setFormType(FormType.SignUp);
        break;
      case FormType.SignUp:
        setFormType(FormType.SignIn);
        break;
    }
  };

  return (
    <Wrapper>
      <Link to="/">
        <Logo />
      </Link>
      {authError && (
        <AuthErrorWrapper>
          <h4>There was a problem</h4>
          <span>{authError}</span>
        </AuthErrorWrapper>
      )}
      <Box>
        <h1>Sign-{formType === FormType.SignIn ? 'In' : 'Up'}</h1>
        {formType === FormType.SignIn ? (
          <SignInAuthForm setAuthError={setAuthError} />
        ) : (
          <SignUpAuthForm setAuthError={setAuthError} />
        )}
        <StyledLink as="span" onClick={handleAccountClick}>
          {formType === FormType.SignIn
            ? 'Create your Amazon account'
            : 'Log in to existing account'}
        </StyledLink>
      </Box>
    </Wrapper>
  );
};
