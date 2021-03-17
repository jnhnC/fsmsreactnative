

import React, { useEffect, useState, useRef } from 'react';
import { WebView } from 'react-native-webview'

import QRCodeScanner from 'react-native-qrcode-scanner';
import {
  StyleSheet,
  Text,
  View,
  Button,
  ActivityIndicator,
  TouchableOpacity,
} from 'react-native';



const App = () => {
  const [visible, setVisible] = useState(false);
  const [result, setResult] = useState('tset');
  

  let webview ;

  const renderLoading = () => <ActivityIndicator style={{flex:1}}
  animating color="red" size="large"/>

  const sendMessage = () =>{
    webview.postMessage('')
  }

  const onSuccess = e => {
    setResult(e.data);
    setVisible(false);
    webview.postMessage(e.data);
   
    // onLoadWebview();
  };


    return (
      <View style={{ width: '100%', height: '100%' }}>

      <Button onPress={sendMessage} title="TEST BUTTON" />

      <WebView
        ref={el => webview = el}
        startInLoadingState={true}
        renderLoading={renderLoading}
        onLoad={()=> webview.postMessage('onLoad')}
        source={{ uri: 'http://192.168.30.231:8080' }}
        
        // injectedJavaScript="window.ReactNativeWebView.postMessage(document.title)"
        // onMessage={handleOnMessage}
  
      />

       <QRCodeScanner
            onRead={onSuccess}
            // flashMode={RNCamera.Constants.FlashMode.torch}
            topContent={
              <Text style={styles.centerText}>
                Go to{' '}
                <Text style={styles.textBold}>wikipedia.org/wiki/QR_code</Text> on
            your computer and scan the QR code.
          </Text>
            }
            bottomContent={
              <TouchableOpacity style={styles.buttonTouchable}>
                <Text name="result" style={styles.buttonText}>{result}</Text>
              </TouchableOpacity>
            }
          />
          </View> 
    );
 
};


const styles = StyleSheet.create({
  centerText: {
    flex: 1,
    fontSize: 18,
    padding: 32,
    color: '#777'
  },
  textBold: {
    fontWeight: '500',
    color: '#000'
  },
  buttonText: {
    fontSize: 21,
    color: 'rgb(0,122,255)'
  },
  buttonTouchable: {
    padding: 16
  }
});

export default App;