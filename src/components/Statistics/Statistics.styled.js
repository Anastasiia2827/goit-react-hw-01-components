import styled from 'styled-components';

export const Statistic = styled.section` 
 width: 450px;
 background-color: lightgrey;
 border-radius: 10px;
 margin-top: 30px;
 text-align: center;  
`;

export const StatList = styled.ul`  
list-style: none;
display: flex;
padding: 0;
margin: 0;
`;

export const StatItem = styled.li`  
 width: calc(100% / 5);
 align-items: center;
 border-radius: 10px;
 padding: 30px;
`;

export const Info = styled.div` 
display: flex;
flex-direction: column;
`;