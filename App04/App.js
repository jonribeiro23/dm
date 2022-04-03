import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, TextInput, Button, Image } from 'react-native';

export default class App extends React.Component {
  
    state = {
      alcool: 0,
      gasolina: 0,
      alcoolOuGasolina: ''
    }

  calcular = () => {
    this.setState({
      alcoolOuGasolina: this.retornaMelhorCombustivel(this.calculaFator())
    })
  }

  calculaFator = () => {
    return parseFloat(this.state.alcool) / parseFloat(this.state.gasolina)
  }

  retornaMelhorCombustivel = (fator) => {
    return fator < 0.7 ? 'O álcool é melhor' : 'A gasolina é melhor'
  }


  render () {
    return (
      <View style={styles.container}>
        <Text style={styles.title}>Alcool ou Gasolina</Text>

        <Image
          style={styles.stretch}
          source={{uri: "https://complemento.veja.abril.com.br/economia/calculadora-combustivel/img/abre.jpg"}}
        />

        <TextInput style={styles.inputCss} placeholder="Preço do Álcool" onChangeText={alcool => this.setState({alcool})} />
        <TextInput style={styles.inputCss} placeholder="Preço da Gasolina" onChangeText={gasolina => this.setState({gasolina})} />
        
        <Button title='Calcular' onPress={this.calcular}/>
        <TextInput>{this.state.alcoolOuGasolina}</TextInput>
        <StatusBar style="auto" />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#C2E1F1',
    alignItems: 'center',
    justifyContent: 'center',
  },

  inputCss: {
    borderWidth: 1,
    margin: 10,
    width: '80%',
    padding: 10,
    backgroundColor: "white",
    borderRadius: 8
  },

  stretch: {
    width: "50%",
    height: "20%",
    resizeMode: "stretch",
  },

  title: {
    fontSize: 30,
    fontWeight: "bold",
    marginBottom: 10,
    color: "#393B3C"
  },

});
