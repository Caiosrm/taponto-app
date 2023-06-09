import styled from "styled-components";

//===========================================================\\
// @author: caduuv
//===========================================================\\


export const OutsideWrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    position: absolute;
    top: 0; bottom: 0;
    left: 0; right: 0;
    margin: auto;
`

export const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    background-color: #ffffff;
    border-radius: 55px;
    box-shadow: 0 0 15px 5px rgba(0, 0, 0, 0.1);
    padding: 40px;
    z-index: 1;
`;