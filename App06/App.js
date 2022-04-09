import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, TextInput, Button, Image } from 'react-native';

export default class App extends React.Component {
  
    state = {
      res: '',
      palpite: 0
    }

  descobrir = () => {
    let num = this.retornaNumero()
    this.setState({
      res: `O número é ${num}. Você ${this.retornaResposta(num)}!`
    })
  }

  retornaNumero = () => {
    return Math.floor(Math.random() * 10)
  }

  retornaResposta = (num) => {
    return num === parseInt(this.state.palpite) ? 'acertou' : 'errou'
  }


  render () {
    return (
      <View style={styles.container}>
        <Text style={styles.title}>Jogo do Nº Aletório</Text>

        <Image
          style={styles.stretch}
          source={{uri: "https://static.wikia.nocookie.net/batman/images/3/32/Charada.png/revision/latest?cb=20150430140527&path-prefix=pt-br"}}
        />

        <Text style={styles.text}>Pense em um nº de 0 a 10</Text>

        <TextInput style={styles.inputCss} placeholder="Seu palpite" onChangeText={palpite => this.setState({palpite})} />
        
        <TextInput style={styles.res} >{this.state.res}</TextInput>
        <Button style={styles.btn} title='Descobrir' onPress={this.descobrir}/>
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

  text: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 10,
    color: "red",
    marginTop: 30
  },

  res: {
    borderBottomColor: "black",
    borderBottomWidth: 1.0,
    width: "50%",
    padding: 3,
    marginBottom: 30
  },

  btn: {
    marginTop: 20
  }

});
