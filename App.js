

import React, { useEffect, useState } from 'react';
import { WebView } from 'react-native-webview'
import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import QrScan from './QrScan'

import {
  AppRegistry,
  StyleSheet,
  Text,
  TouchableOpacity,
  Linking,
  View
} from 'react-native';

const Stack = createStackNavigator();

const App = () => {

  const [visible, setVisible] = useState(false);
  const [webview, setWebview] = useState(null);

  //화면 전환 호출
  const handleOnMessage = ({ nativeEvent: { data } }) => {
    alert("리액트 호출");
    document.title = 'test';

    // this.webview.postMessage(data);
    // setVisible(true);
    // webview.current.injectedJavaScript(data);

  };

  handleWebViewNavigationStateChange = newNavState => {
    // newNavState looks something like this:
    // {
    //   url?: string;
    //   title?: string;
    //   loading?: boolean;
    //   canGoBack?: boolean;
    //   canGoForward?: boolean;
    // }
    const { url } = newNavState;
    if (!url) return;

    // handle certain doctypes
    if (url.includes('.pdf')) {
      this.webview.stopLoading();
      // open a modal with the PDF viewer
    }

    // one way to handle a successful form submit is via query strings
    if (url.includes('?message=success')) {
      this.webview.stopLoading();
      // maybe close this view?
    }

    // one way to handle errors is via query string
    if (url.includes('?errors=true')) {
      this.webview.stopLoading();
    }

    // redirect somewhere else
    if (url.includes('google.com')) {
      const newURL = 'https://logrocket.com/';
      const redirectTo = 'window.location = "' + newURL + '"';
      this.webview.injectJavaScript(redirectTo);
    }

    // if (!visible) {
    return (
      <WebView
        // ref={ref => (this.webview = ref)}
        source={{ uri: 'http://192.168.30.231:8080' }}
        onMessage={handleOnMessage}
        javaScriptEnabled={true}
        // injectedJavaScript={'(function(){return "Send me back!"}());'}
        onNavigationStateChange={this.handleWebViewNavigationStateChange}
      />
    );
    //   } else {

    //     return (

    //       <View style={{ width: '100%', height: '100%' }}>

    //         <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
    //           <QrScan />
    //         </View>

    //       </View>
    //     );
    //   }
  };

  export default App;