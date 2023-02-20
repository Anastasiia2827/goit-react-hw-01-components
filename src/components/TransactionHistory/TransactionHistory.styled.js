import styled from 'styled-components';

export const History = styled.table`    
width: 500px;
background-color: #ffffff;
margin-top: 20px;
text-align: center;
`;

export const TableName = styled.th` 
background: lightgreen;
padding: 10px 10px;
`;

export const TableTr = styled.tr`   
&:nth-child(2n) {
background-color: gray;
}
`;

