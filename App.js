

import React from 'react';
import { WebView } from 'react-native-webview';
import { StyleSheet } from 'react-native';

import { QrScanner } from './QrScanner'


const App = () => {
  let webview;
  let PopupRef = React.createRef()

  const handleOnMessage = ({ nativeEvent: { data } }) => {
    onShowPopup();
  
  };

  const onShowPopup = () => {
    PopupRef.show();
  }

  const onClosePopup = () => {
    PopupRef.close();
  }

  const sendWebview = (result) => {
    onClosePopup();
    webview.postMessage(result);
  };

  return (

    <>
      <WebView 
        ref={el => webview = el}
        source={{ uri: 'http://192.168.30.231:8080' }}
        onMessage={handleOnMessage}

      />
   
        <QrScanner
          title="Demo Popup"
          ref={(target) => PopupRef = target}
          sendWebview ={sendWebview}
        />
 


    </>

  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center"
  }
});

export default App;