import styled from "styled-components";



const  itemNavBar = [
    "Home",
    "About",
    "Products",
    "Contact"
]

const NavBarContainer = styled.div`
/* border: 2px solid red; */
display: flex;
justify-content: space-between;
align-items: center;
padding: 20px;

@media screen and (max-width: 768px) {
    flex-direction: column;
}
`;


const ItemNavBar = styled.div`
    color: #ccc;
    padding: 10px;
    font-size: 20px;
    font-weight: bold;
    cursor: pointer;
    /* text-decoration: none; */

    &:hover {
        color: #8324ff;
    }
`;

export {
    NavBarContainer,
    ItemNavBar
}