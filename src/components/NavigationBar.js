import styled,{css} from 'styled-components';
const MenuBar = styled.div`
    background: white;
    height: 50px;
    width: 100%;
    color: black;
    position: sticky;
    position: -webkit-sticky;
    top: 0;
`
const NavigationMenu = () => {

    return( <MenuBar>Hanul Rheem</MenuBar>)
}
export default NavigationMenu;