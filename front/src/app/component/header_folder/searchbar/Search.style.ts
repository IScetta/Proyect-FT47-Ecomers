
import styled from "styled-components"


const SearchBarContainer = styled.div`
display: flex;
width: 300px;
justify-content: space-between;
align-items: center;
padding: 10px;
`;



const Input = styled.input`
color: #c5c5c5 ;
background-color: #333;
width: 100%;
padding: 10px;
font-size: 1rem;
border: 2px solid #333;
border-bottom: 2px solid #8324ff;
border-radius: 5px;
border-top-right-radius: 0px;
border-bottom-right-radius: 0px;
outline: none; 
`;



const ButtonSearch = styled.button`
color: #c5c5c5;
background-color: #1b1b1b;
border: 2px solid #8324ff;
padding: 10px;
border-radius: 5px; 
border-top-left-radius: 0px;
border-bottom-left-radius: 0px;
cursor: pointer;
font-size: 1rem;
outline: none;

&:hover{
    color: white;
    border: 2px solid #8324ff;
    background-color: #8324ff;
}
`;

export {
    SearchBarContainer,
    Input,
    ButtonSearch
}