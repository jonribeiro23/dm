import { StatusBar } from "expo-status-bar";
import React from "react";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  Button,
  Switch,
  ScrollView,
} from "react-native";
import { Picker } from "@react-native-picker/picker";
import Slider from "@react-native-community/slider";

export default class App extends React.Component {
  state = {
    nome: "",
    idade: 0,
    sexo: "",
    escolaridade: "",
    limite: "",
    brasileiro: false,
    mostrar: false
  };

  render() {
    return (
      <ScrollView style={styles.scrollView}>
        <View style={styles.container}>
          <Text style={styles.title}>Abertura de conta</Text>

          {/* Nome */}
          <View style={styles.inline}>
            <Text>Nome: </Text>
            <TextInput
              style={styles.txtNome}
              placeholder=""
              onChangeText={(nome) => this.setState({ nome })}
            />
          </View>

          {/* Idade */}
          <View style={styles.inline}>
            <Text>Idade: </Text>
            <TextInput
              style={styles.txtNome}
              placeholder=""
              onChangeText={(idade) => this.setState({ idade })}
            />
          </View>

          {/* sexo */}
          <View style={styles.inline}>
            <Text>Sexo: </Text>
            <Picker
              style={styles.picker}
              selectedValue={this.state.sexo}
              onValueChange={(itemValue, itemIndex) =>
                this.setState({ sexo: itemValue })
              }
            >
              <Picker.Item label="Escolher" value="" />
              <Picker.Item label="Masculino" value="Masculino" key={1} />
              <Picker.Item label="Feminino" value="Feminino" key={2} />
            </Picker>
          </View>

          {/* Escolaridade */}
          <View style={styles.inline}>
            <Text>Escolaridade: </Text>
            <Picker
              style={styles.picker}
              selectedValue={this.state.escolaridade}
              onValueChange={(itemValue, itemIndex) =>
                this.setState({ escolaridade: itemValue })
              }
            >
              <Picker.Item label="Escolher" value="" />
              <Picker.Item
                label="Fundamental - Incompleto"
                value="Fundamental - Incompleto"
                key={1}
              />
              <Picker.Item
                label="Fundamental - Completo"
                value="Fundamental - Completo"
                key={2}
              />
              <Picker.Item
                label="Médio - Incompleto"
                value="Médio - Incompleto"
                key={3}
              />
              <Picker.Item
                label="Médio - Completo"
                value="Médio - Completo"
                key={4}
              />
              <Picker.Item
                label="Superior - Incompleto"
                value="Superior - Incompleto"
                key={5}
              />
              <Picker.Item
                label="Superior - Completo"
                value="Superior - Completo"
                key={6}
              />
              <Picker.Item
                label="Pós-graduação (Lato senso) - Incompleto"
                value="Pós-graduação (Lato senso) - Incompleto"
                key={7}
              />
              <Picker.Item
                label="Pós-graduação (Lato senso) - Completo"
                value="Pós-graduação (Lato senso) - Completo"
                key={8}
              />
              <Picker.Item
                label="Pós-graduação (Stricto sensu, nível mestrado) - Incompleto"
                value="Pós-graduação (Stricto sensu, nível mestrado) - Incompleto"
                key={9}
              />
              <Picker.Item
                label="Pós-graduação (Stricto sensu, nível mestrado) - Completo"
                value="Pós-graduação (Stricto sensu, nível mestrado) - Completo"
                key={10}
              />
              <Picker.Item
                label="Pós-graduação (Stricto sensu, nível doutor) - Incompleto"
                value="Pós-graduação (Stricto sensu, nível doutor) - Incompleto"
                key={11}
              />
              <Picker.Item
                label="Pós-graduação (Stricto sensu, nível doutor) - Completo"
                value="Pós-graduação (Stricto sensu, nível doutor) - Completo"
                key={12}
              />
            </Picker>
          </View>

          <View style={styles.inline}>
            <Text>Limite: </Text>
            <Slider
              style={{ width: 200, height: 40 }}
              minimumValue={0}
              maximumValue={100}
              minimumTrackTintColor="#FFFFFF"
              maximumTrackTintColor="#000000"
              onValueChange={(limite) => this.setState({ limite })}
            />
          </View>

          <View style={styles.inline}>
            <Text>Brasileiro: </Text>
            <Switch
              value={this.state.brasileiro}
              onValueChange={(brasileiro) => this.setState({ brasileiro })}
            />
          </View>

          <Button
            style={styles.btn}
            title="Cadastrar"
            onPress={() => this.setState({mostrar: !this.state.mostrar})}
          />

          <StatusBar style="auto" />
        </View>

        {/* Mostrar dados */}
        {
          this.state.mostrar ? (
            <View style={styles.container}>
              <TextInput style={styles.res}>Nome: {this.state.nome}</TextInput>
              <TextInput style={styles.res}>Idade: {this.state.idade}</TextInput>
              <TextInput style={styles.res}>Sexo: {this.state.sexo}</TextInput>
              <TextInput style={styles.res}>Escolaridade: {this.state.escolaridade}</TextInput>
              <TextInput style={styles.res}>Limite: {this.state.limite}</TextInput>
              <TextInput style={styles.res}>Brasileiro: {this.state.brasileiro ? 'Sim' : 'Não'}</TextInput>
            </View>
          ) : null
        }

      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },

  title: {
    fontSize: 30,
    fontWeight: "bold",
    marginBottom: 10,
    color: "#393B3C",
  },

  txtNome: {
    borderBottomColor: "black",
    borderBottomWidth: 1.0,
    width: "50%",
    marginBottom: 30,
  },

  inline: {
    flexDirection: "row",
  },

  picker: {
    padding: 0,
    width: "50%",
    backgroundColor: "purple",
    marginBottom: 30,
  },

  btn: {
    marginTop: 20,
  },

  scrollView: {
    marginTop: "5%",
  },
});
