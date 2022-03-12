import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, TextInput, Button } from 'react-native';

export default class App extends React.Component {
  
    state = {
      num1: 0,
      num2: 0,
      res: ''
    }

  somar = () => {
    let n1 = parseFloat(this.state.num1)
    let n2 = parseFloat(this.state.num2)
    this.setState({
      res: n1 + n2
    })
  }


  render () {
    return (
      <View style={styles.container}>
        <TextInput style={styles.inputCss} placeholder="Primeiro Número" onChangeText={num1 => this.setState({num1})} />
        <TextInput style={styles.inputCss} placeholder="Segundo Número" onChangeText={num2 => this.setState({num2})} />
        <Button title='Somar' onPress={this.somar}/>
        <TextInput>{this.state.res}</TextInput>
        <StatusBar style="auto" />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },

  inputCss: {
    borderWidth: 1,
    margin: 10,
    width: '80%'
  }
});
