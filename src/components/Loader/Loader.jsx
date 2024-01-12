import React from 'react';
import { DNA } from 'react-loader-spinner';
import { StyledLoader } from './Loader.styled';

export const Loader = () => {
  return (
    <StyledLoader>
      <DNA
        visible={true}
        height="250"
        width="250"
        ariaLabel="dna-loading"
        wrapperStyle={{}}
        wrapperClass="dna-wrapper"
      />
      {/* <h2>Auth in progress...</h2> */}
    </StyledLoader>
  );
};
