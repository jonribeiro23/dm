import React, { PureComponent } from "react";

import { View, StyleSheet, SafeAreaView, FlatList, Text, TouchableOpacity, Image } from "react-native";

export default class App extends PureComponent {
  ANIMAL_NAMES = [
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

  ItemRender = ({ item }) => (
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

  Separator = () => {
    return (
      <View
        style={{
          height: 50,
          width: 1,
          backgroundColor: "white",
        }}
      />
    );
  };

  render() {
    return (
      <SafeAreaView style={styles.MainContainer}>
        <Text style={styles.titleText}>
          Horizontal FlatList in React Native
        </Text>

        <FlatList
          data={this.ANIMAL_NAMES}
          renderItem={({ item }) => <this.ItemRender item={item} />}
          keyExtractor={(item) => item.id}
          ItemSeparatorComponent={this.Separator}
          horizontal={true}
        />
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  MainContainer: {
    flex: 1,
    backgroundColor: "white",
  },

  titleText: {
    fontSize: 24,
    fontWeight: "bold",
    textAlign: "center",
    padding: 12,
  },

  item: {
    padding: 8,
    backgroundColor: "#00C853",
    width: 120,
    height: 50,
    justifyContent: "center",
    alignItems: "center",
  },

  itemText: {
    fontSize: 24,
    color: "white",
    textAlign: "center",
  },

  // cardText: {
  //   fontSize: 30,
  //   padding: 10,
  // },

  // card: {
  //   marginBottom: 10,
  //   marginLeft: "2%",
  //   width: "96%",
  //   borderWidth: 5,
  //   borderColor: "grey",
  // },

  // cardImage: {
  //   width: "100%",
  //   height: 200,
  //   resizeMode: "cover",
  // },
});
