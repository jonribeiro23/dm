import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';

export default class App extends React.Component {
  state = {
    value: 0,
    total_taps: 0
  }

  increment = () => {
    this.setState({
      value: this.state.value + 1,
    })
  }

  decrement = () => {
    this.setState({
      value: this.state.value - 1,
    })
  }

  render () {
    return (
      <View style={styles.container}>
        <Text style={styles.title}>Contador de pessoas</Text>
        <Text style={styles.number}>{this.state.value}</Text>
        <Text> </Text>

        <View style={styles.divButton}>
          <Button color="#4d6a0e"  onPress={this.increment} title="   +   " />
          <Text>  </Text>
          <Button color="#6a1f0e"  onPress={this.decrement} title="   -   " />
        </View>

        <StatusBar style="auto" />
      </View>
    );
  }
  
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },

  title: {
    color: 'orange',
    fontSize: 40,
    marginBottom: 10,
    fontWeight: "bold"
  },

  number: {
    borderStyle: 'solid',
    borderColor: 'black',
    borderWidth: 5,
    fontSize: 70,
    padding: 10,
    color: 'red'
  },

  divButton: {
    flexDirection: 'row'
  },

});
