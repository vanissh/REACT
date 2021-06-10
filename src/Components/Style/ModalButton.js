import styled from 'styled-components';

export const Button = styled.button`
    display: block;
    margin: 0 auto;
    background-color: #c73636;
    color: white;
    text: 'Add';
    width: 250px;
    height: 65px;
    border: none;

 
    -webkit-transition-duration: 0.4s;
    transition-duration: 0.4s;
    
    &:hover {
        background-color: #bf1717; /* Green */
        color: white;
    }
`;

