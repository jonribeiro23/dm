import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Image,
  FlatList,
  SafeAreaView,
  ActivityIndicator
} from "react-native";
import React, { PureComponent } from "react";

export default class App extends PureComponent {

  constructor(props) {
    super(props)
    this.state = {
      items: [
        {
          "albumId": 1,
          "id": 1,
          "title": "accusamus beatae ad facilis cum similique qui sunt",
          "url": "https://via.placeholder.com/600/92c952",
          "thumbnailUrl": "https://via.placeholder.com/150/92c952"
        },
        {
          "albumId": 1,
          "id": 2,
          "title": "reprehenderit est deserunt velit ipsam",
          "url": "https://via.placeholder.com/600/771796",
          "thumbnailUrl": "https://via.placeholder.com/150/771796"
        },
        {
          "albumId": 1,
          "id": 3,
          "title": "officia porro iure quia iusto qui ipsa ut modi",
          "url": "https://via.placeholder.com/600/24f355",
          "thumbnailUrl": "https://via.placeholder.com/150/24f355"
        },
        {
          "albumId": 1,
          "id": 4,
          "title": "culpa odio esse rerum omnis laboriosam voluptate repudiandae",
          "url": "https://via.placeholder.com/600/d32776",
          "thumbnailUrl": "https://via.placeholder.com/150/d32776"
        },
        {
          "albumId": 1,
          "id": 5,
          "title": "natus nisi omnis corporis facere molestiae rerum in",
          "url": "https://via.placeholder.com/600/f66b97",
          "thumbnailUrl": "https://via.placeholder.com/150/f66b97"
        }
      ]
    }
  }

  // componentDidMount() {
  //   this.getData()
  // }

  // getData = async () => {
  //   const url = 'https://jsonplaceholder.typicode.com/photos?_limit=20'
  //   const res = await fetch(url)
  //   const data = res.json()
  //   console.log(data)
  //   this.setState({items: data})
  // }
 
  _renderItem = ({ item, index }) => {
    return (
      <TouchableOpacity style={styles.card}>
        <Image
          style={styles.cardImage}
          source={{
            uri: item.url,
          }}
        />
        <Text style={styles.cardText}> { item.title } </Text>
      </TouchableOpacity>
    );
  };

  render() {
    return (

        <>
        <Text style={styles.title}>Anúncios</Text>
        <FlatList
          style={styles.container}
          data={this.state.items}
          keyExtractor={(item, index) => index.toString()}
          renderItem={this._renderItem}
          horizontal={true}
        />
        </>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    marginTop: '10%'
  },

  cardText: {
    flexShrink:1,
    flexWrap: 'wrap',
    fontSize: 14,
    padding: 10,
  },

  title: {
    fontSize: 30,
    color: 'purple',
    marginTop: '8%',
    marginLeft: '2%'
  },

  card: {
    marginBottom: 10,
    borderWidth: 5,
    borderColor: "grey",
    margin: 10,
    height: '50%',
    width: 300
  },

  cardImage: {
    width: "100%",
    height: 200,
    resizeMode: "cover",
  },
});
