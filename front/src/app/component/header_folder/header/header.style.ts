import styled from "styled-components";


const HeaderContainer = styled.header`
background-color: #1b1b1b;
display: flex;
justify-content: center;
align-items: center;
/* padding: 20px; */
`;

const ImageContainer = styled.div`
width: 100px; 
display: flex;
flex-direction:  column;
justify-content: space-between;
align-items: center;
padding: 10px;
`

const Image = styled.img`
width: calc(100% - 20px);
height: auto;
margin: 10px;
`

const Title = styled.h1`
color: #8324ff;
font-size: 20px;
font-weight: bold;
`

const TopContainer = styled.div`
display: flex;
justify-content: center;
align-items: center;
gap: 50px;
/* border: 2px solid red; */
`
const BottonContainer = styled.div`
display: flex;
justify-content: center;
align-items: center;
/* border: 2px solid red; */
`

const ContainerMain = styled.div`
display: flex;
flex-direction: column;
`

const ProfileContainer = styled.div`
display: flex;
justify-content: space-between;
align-items: center;
`


const MenuButton = styled.button`
background: none;
/* border: none; */
padding: 15px;
cursor: pointer;
font-size: 2rem;
margin-bottom: 1rem ;
border: 2px solid  #8324ff;
color: #8324ff;

@media screen and (min-width: 768px) {
    display: none;
}
`
