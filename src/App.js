
import './App.css';
import Header from './components/WebsiteHeader';
import NavigationBar from './components/NavigationBar';
import AutoView from './components/AutoView';
import React, {useRef} from 'react';
import styled,{css} from 'styled-components';


const ME = styled.div`
padding: 4em;
height: 200px;
background: papayawhip;    
border: 10px solid red;
overflow-block: hidden;
`

function App() {
  //scroll system
  const listInnerRef = useRef();
  const heightValue = window.innerHeight;
  const onScroll = () => {
    if (listInnerRef.current) {
      const { scrollTop, scrollHeight, clientHeight } = listInnerRef.current;
    //  const temp = (scrollTop + clientHeight);
      if (scrollTop + clientHeight === scrollHeight) {
        console.log("reached bottom");
       // <Header></Header>
      }
      else if(((scrollTop + clientHeight)) === heightValue) {
        console.log("reached top");
      }
      else  {
        console.log((scrollTop + clientHeight));
      }
    }
  };
  return (
    <div className="App" >
       <div onScroll={onScroll} ref={listInnerRef} style={{overflowY: "scroll", height: heightValue}}>
          <Header/>
          <NavigationBar></NavigationBar>
          <AutoView></AutoView>
       </div>
    </div>
  );
}

export default App;
