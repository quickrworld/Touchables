import React from 'react'
import {
  StyleSheet,
  Text,
  View,
  TouchableHighlight,
  TouchableNativeFeedback,
  TouchableOpacity,
  TouchableWithoutFeedback,
  Platform,
} from 'react-native'

export default class App extends React.Component {
  handlePress = () => {
    alert('Hello')
  }
  render() {
    return (
      <View style={styles.container}>
        <TouchableHighlight
          style={styles.btn}
          onPress={this.handlePress}
          underlayColor={'#d4271b'}>
          <Text style={styles.btnText}>TouchableHighlight</Text>
        </TouchableHighlight>
        <TouchableOpacity
          style={styles.btn}
          onPress={this.handlePress}>
          <Text style={styles.btnText}>TouchableOpacity</Text>
        </TouchableOpacity>
        <TouchableWithoutFeedback
          onPress={this.handlePress}>
          <View style={styles.btn}>
            <Text style={styles.btnText}>TouchableWithoutFeedback</Text>
          </View>
        </TouchableWithoutFeedback>
        {Platform.OS === 'android' &&
          <TouchableNativeFeedback
            background={TouchableNativeFeedback.SelectableBackground()}>
            <View style={styles.btn}>
              <Text style={styles.btnText}>TouchableNativeFeedback</Text>
            </View>
          </TouchableNativeFeedback>
        }
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginLeft: 10,
    marginRight: 10,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  btn: {
    backgroundColor: '#E53224',
    padding: 10,
    paddingLeft: 50,
    paddingRight: 50,
    marginBottom: 10,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 5,
  },
  btnText: {
    color: '#fff'
  }
});
