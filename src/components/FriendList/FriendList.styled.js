import styled from 'styled-components';

export const FriendUl = styled.ul`  
list-style: none;
width: 450px;
text-align: center;
padding: 0px;
margin-top: 30px;
margin-bottom: 0;
`;

export const FriendLi = styled.li`  
background-color: whitesmoke;
display: flex;
border-radius: 5px;
align-items: center;
padding: 15px;
&:not(:last-child) {
    margin-bottom: 10px;
}
`;


