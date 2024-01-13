import React from 'react';
import { DNA } from 'react-loader-spinner';
import { StyledLoader } from './Loader.styled';

export const Loader = () => {
  return (
    <StyledLoader>
      <DNA />
    </StyledLoader>
  );
};
