import React from 'react';
import styled from 'styled-components';
import Wrapper from '../Wrapper';

//===========================================================\\
// @author: caduuv
//===========================================================\\

const LoadingSpinner = styled.div`
  border: 5px solid rgba(0, 0, 0, 0.1);
  border-top-color: #44CF6C;
  border-radius: 50%;
  width: 40px;
  height: 40px;
  animation: spin 1s ease-in-out infinite;
  
  @keyframes spin {
    to {
      transform: rotate(360deg);
    }
  }
`;

const InitialLoading = () => {
    return (
        <Wrapper>
            <LoadingSpinner />
        </Wrapper>
    );
}

export default InitialLoading;