import { forwardRef } from 'react';

import { StyledError, StyledInput, Wrapper } from './AuthFormField.styles';

interface AuthFormFieldProps {
  type?: string;
  label: string;
  error: boolean;
  errorMessage: string;
}

export const AuthFormField = forwardRef<HTMLInputElement, AuthFormFieldProps>(
  ({ type = 'text', label, error, errorMessage, ...props }, ref) => (
    <Wrapper>
      {label}
      <StyledInput type={type} error={error} ref={ref} {...props} />
      {error && <StyledError>{errorMessage}</StyledError>}
    </Wrapper>
  )
);

AuthFormField.displayName = 'AuthFormField';
