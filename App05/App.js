import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, TextInput, Button, Image } from 'react-native';

export default class App extends React.Component {
  
    state = {
      peso: 0,
      altura: 0,
      imc: 0,
      msg: ''
    }

  calcular = () => {
    let imc = this.retornaImc()
    this.setState({
      imc: imc.toFixed(2),
      msg: this.retornaClassificacao(imc)
    })
  }

  retornaClassificacao = (imc) => {
    let res = ''

    if (imc < 0) {
      return 'O IMC nao pode ser nagativo'
    }

    if (imc < 18.5) {
      res = 'Abaixo do peso'
    } else if ( imc >= 18.5 && imc <= 24.9 ) {
      res = 'Peso normal'
    } else if ( imc >= 25.0 && imc <= 29.9 ) {
      res = 'Pré-obesidade'
    } else if (  imc >= 30.0 && imc <= 34.9 ) {
      res = 'Obesidade Grau 1'
    } else if ( imc >= 35.0 && imc <= 39.9 ) {
      res = 'Obesidade Grau 2'
    } else {
      res = 'Obesidade Grau 3'
    }

    return res
  }

  retornaImc = () => {
    let altura = parseFloat(this.state.altura) / 100
    return parseFloat(this.state.peso) / (altura**2)
  }


  render () {
    return (
      <View style={styles.container}>
        <Text style={styles.title}>Alcool ou Gasolina</Text>

        <Image
          style={styles.stretch}
          source={{uri: "https://clinicascoppo.com.br/wp-content/uploads/2021/06/blog-23_06-1140x500.png"}}
        />

        <TextInput style={styles.inputCss} placeholder="Digite sua altura" onChangeText={altura => this.setState({altura})} />
        <TextInput style={styles.inputCss} placeholder="Digite seu peso" onChangeText={peso => this.setState({peso})} />
        
        <Button title='Calcular' onPress={this.calcular}/>
        <TextInput>Seu imc é: {this.state.imc}</TextInput>
        <Text>{this.state.msg}</Text>
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
    width: "65%",
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
