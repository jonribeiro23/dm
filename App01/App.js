import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Text> App Meu Perfil </Text>

      
      <Image
        style={styles.stretch}
        source={{uri: "https://picsum.photos/200/300"}}
      />

    <Text>
      Dados Pessoais
    </Text>
    <Text>Jonathas Ribeiro</Text>

    <Text>
      Formaçao
    </Text>
    <Text>Sistemas para Internet</Text>

    <Text>
      Experiência
    </Text>
    <Text>PHP, Javascript</Text>

    <Text>
      Projetos
    </Text>
    <Text>https://github.com/jonribeiro23/react-native</Text>

      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  stretch: {
    width: "50%",
    height: "20%",
    resizeMode: "stretch",
  },
});
