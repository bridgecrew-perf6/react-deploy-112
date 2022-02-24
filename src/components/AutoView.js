import {BrowserView, MobileView} from 'react-device-detect';

const AutoView = () => {

    return(
        <>
        <BrowserView>
            <h1>This is rendered only in BrowserView</h1>
        </BrowserView>
        <MobileView>
            <h1>This is rendered only on MobileView</h1>
        </MobileView>
        </>
    )
  
}
export default AutoView