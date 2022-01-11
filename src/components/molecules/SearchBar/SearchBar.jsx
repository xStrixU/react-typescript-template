import { useState } from 'react';

import { ReactComponent as SearchIcon } from 'assets/icons/search-icon.svg';
import { NavigationCover } from 'components/organisms/NavigationCover/NavigationCover';

import {
  StyledButton,
  StyledInput,
  StyledSelect,
  Wrapper,
} from './SearchBar.styles';

export const SearchBar = () => {
  const [isInputFocused, setIsInputFocused] = useState(false);

  const handleInputFocus = () => setIsInputFocused(true);
  const handleInputBlur = () => setIsInputFocused(false);

  return (
    <>
      <Wrapper isInputFocused={isInputFocused}>
        <StyledSelect>
          <option>All</option>
        </StyledSelect>
        <StyledInput onFocus={handleInputFocus} onBlur={handleInputBlur} />
        <StyledButton>
          <SearchIcon />
        </StyledButton>
      </Wrapper>
      {isInputFocused && <NavigationCover />}
    </>
  );
};
