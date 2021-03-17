import React from 'react'
import {
  Modal,
  View, 
  StyleSheet,
}
  from 'react-native'

import QRCodeScanner from 'react-native-qrcode-scanner';


//const deviceHeight = Dimensions.get("window").height;

export class QrScanner extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      show: false
    }

  }

  onSuccess = e => {
    this.props.sendWebview(e.data);

  };

  show = () => {
    this.setState({ show: true })
  }

  close = () => {
    this.setState({ show: false })
  }


  render() {
    let { show } = this.state


    return (

      <Modal
        visible={show}
        onRequestClose={this.close}
      >


        <View style={{
          width: '100%',
          height: '100%'

        }}>
          <QRCodeScanner
            onRead={this.onSuccess}

          />

        </View>

      </Modal >

    )
  }
}

const styles = StyleSheet.create({

});

