import styled from 'styled-components';

export const Image = styled.img`    
width: 150px;
height: 150px;
border-radius: 5px;
border: 1px solid black;
margin-right: 30px;
`;

export const ImageName = styled.p` 
margin-top: 0px;
font-size: 20px; 
`;

export const Status = styled.span`
 width: 30px;
 height: 30px;
 border-radius: 50%;
 margin-left: 20px;
 margin-right: 20px;
 background-color: : ${props => {
    return props.isActive ? 'green' : 'red' ;
 }};
`;