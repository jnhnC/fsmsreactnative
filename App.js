

import React, { useEffect, useState }  from 'react';
import { WebView } from 'react-native-webview'

import {
    AppRegistry,
    StyleSheet,
    Text,
    TouchableOpacity,
    Linking
  } from 'react-native';


const App = () => {
return (
      <WebView
      source={{uri: 'localhost:8080'}}
      style={{marginTop: 20}}
    />
  
    );
};

export default App;