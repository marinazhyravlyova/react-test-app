import styled from 'styled-components';

export const defaultBorderColor = 'rgba(0, 0, 0, 0.1)';

export const Button = styled.button`
    margin: 3px;
    border: 1px solid transparent;
    background-color: transparent;
    padding: 3px 7px;
    border-radius: 3px;
    font-size: 18px;
    cursor: pointer;
    width: 100px;
    :focus, :active {
        outline: none;
    }
    :hover {
       background-color: ${defaultBorderColor};  
    }
`;
