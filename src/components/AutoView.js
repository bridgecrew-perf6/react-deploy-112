import {BrowserView, MobileView} from 'react-device-detect';
import PhotoContainer from '../components/Container';
import styled,{css} from 'styled-components';
import React, {useRef} from 'react';
// the button from the last section without the interpolations
const Button = styled.button`
    background: transparent;
    border-radius: 3px;
    border: 2px solid palevioletred;
    color: palevioletred;
    margin: 0 1em;
    padding: 0.25em 1em;
    ${props =>
    props.primary && css `
    background: palevioletred;
    color: white;
    `};
`
const Container = styled.div`
    test-align: center;
`
// A new component based on Button, but with some override styles
const TomatoButton = styled(Button)`
    color: tomato;
    border-color: tomato;
`;




// create a title component that'll render an <h1> tag with some styles
const Title = styled.h1`
    font-size: 1.5m;
    test-align: center;
    color: palevioletred;
`
//Create a wrapper component that'll render a <section tag with some style.
const Wrapper = styled.section`
    padding: 4em;
    background: papayawhip;    
    border: 10px solid black;
   
`

// reserved function
const ReversedButton = props =>
<Button {...props} children={props.children.split('').reverse()} />

//auto detect system




const AutoView = () => {
    
    return(
        <>
        
  
    
        <BrowserView>
    
        <Container>
            <h1>This is rendered only in BrowserView</h1>
            <Button>Mewt?</Button>
            <Button primary>Hi</Button>
        </Container>
        <PhotoContainer/>

        </BrowserView>

        <MobileView>
            <h1>This is rendered only on MobileView</h1>
        </MobileView>
      
        </>
        
    );
  
};
export default AutoView