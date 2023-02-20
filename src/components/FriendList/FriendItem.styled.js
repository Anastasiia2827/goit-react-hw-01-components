import styled from 'styled-components';

export const Image = styled.img`    
width: 50px;
height: 50px;
border-radius: 5px;
border: 1px solid black;
`;

export const ImageName = styled.p` 
margin: 0;
font-size: 20px; 
`;

export const Status = styled.span`
display: flex;
 width: 10px;
 height: 10px;
 border-radius: 50%;
 background-color: ${props => {
    return props.isActive ? 'green' : 'red' ;
 }};
`;