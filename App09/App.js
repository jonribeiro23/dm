import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  Text,
  TouchableOpacity,
  Image,
  FlatList,
  View,
} from "react-native";
import React, { PureComponent } from "react";

export default class App extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      items: [{
        "id": 1,
        "job": "Assistant Professor",
        "salary": "$9217.47",
        "description": "Product Management",
        "contact": "jalentyev0@wiley.com"
      }, {
        "id": 2,
        "job": "Payment Adjustment Coordinator",
        "salary": "$1171.48",
        "description": "Business Development",
        "contact": "tmulvaney1@example.com"
      }, {
        "id": 3,
        "job": "Mechanical Systems Engineer",
        "salary": "$13064.20",
        "description": "Research and Development",
        "contact": "jruit2@who.int"
      }, {
        "id": 4,
        "job": "Civil Engineer",
        "salary": "$28777.55",
        "description": "Product Management",
        "contact": "cearwicker3@tiny.cc"
      }, {
        "id": 5,
        "job": "Cost Accountant",
        "salary": "$25204.36",
        "description": "Human Resources",
        "contact": "eabarough4@hatena.ne.jp"
      }, {
        "id": 6,
        "job": "Nurse",
        "salary": "$13159.34",
        "description": "Training",
        "contact": "agibbett5@census.gov"
      }, {
        "id": 7,
        "job": "Geological Engineer",
        "salary": "$22616.10",
        "description": "Research and Development",
        "contact": "istoving6@ycombinator.com"
      }, {
        "id": 8,
        "job": "Compensation Analyst",
        "salary": "$13310.99",
        "description": "Accounting",
        "contact": "ggenike7@theatlantic.com"
      }, {
        "id": 9,
        "job": "Research Nurse",
        "salary": "$21602.55",
        "description": "Support",
        "contact": "scritchard8@odnoklassniki.ru"
      }, {
        "id": 10,
        "job": "Mechanical Systems Engineer",
        "salary": "$18042.07",
        "description": "Support",
        "contact": "hkielty9@sciencedaily.com"
      }, {
        "id": 11,
        "job": "Office Assistant III",
        "salary": "$19491.26",
        "description": "Engineering",
        "contact": "selcya@indiegogo.com"
      }, {
        "id": 12,
        "job": "Programmer Analyst II",
        "salary": "$23399.65",
        "description": "Training",
        "contact": "jbrendishb@twitpic.com"
      }, {
        "id": 13,
        "job": "Structural Analysis Engineer",
        "salary": "$26083.86",
        "description": "Research and Development",
        "contact": "sconveryc@github.com"
      }, {
        "id": 14,
        "job": "Mechanical Systems Engineer",
        "salary": "$5823.43",
        "description": "Sales",
        "contact": "rbrahamsd@xinhuanet.com"
      }, {
        "id": 15,
        "job": "Account Representative III",
        "salary": "$18139.30",
        "description": "Sales",
        "contact": "tbrownselle@washingtonpost.com"
      }, {
        "id": 16,
        "job": "Senior Editor",
        "salary": "$23061.76",
        "description": "Support",
        "contact": "mbanbrookf@ustream.tv"
      }, {
        "id": 17,
        "job": "Software Consultant",
        "salary": "$20172.13",
        "description": "Marketing",
        "contact": "cbrooseg@canalblog.com"
      }, {
        "id": 18,
        "job": "Senior Quality Engineer",
        "salary": "$20810.54",
        "description": "Legal",
        "contact": "sbenoith@flavors.me"
      }, {
        "id": 19,
        "job": "Physical Therapy Assistant",
        "salary": "$21895.23",
        "description": "Business Development",
        "contact": "cscamadeni@infoseek.co.jp"
      }, {
        "id": 20,
        "job": "Design Engineer",
        "salary": "$24563.27",
        "description": "Training",
        "contact": "sdurtnalj@indiegogo.com"
      }]
    };
  }

  _renderItem = ({ item, index }) => {
    return (
      <TouchableOpacity style={styles.card}>
        <Text style={styles.cardText}> {item.job} </Text>
        
        {/* Salário */}
        <View style={styles.inLine}>
          <Text style={styles.desc}>Salário: </Text>
          <Text>{item.salary}</Text>
        </View>

        {/* Descrição */}
        <View style={styles.inLine}>
          <Text style={styles.desc}>Descrição: </Text>
          <Text>{item.description}</Text>
        </View>

        {/* Contato */}
        <View style={styles.inLine}>
          <Text style={styles.desc}>Contato: </Text>
          <Text>{item.contact}</Text>
        </View>
      </TouchableOpacity>
    );
  };

  render() {
    return (
      <>
        <Text style={styles.title}>Vagas</Text>
        <FlatList
          style={styles.container}
          data={this.state.items}
          keyExtractor={(item, index) => index.toString()}
          renderItem={this._renderItem}
        />
      </>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    marginTop: "10%",
  },

  title: {
    fontSize: 30,
    color: 'purple',
    marginTop: '8%',
    marginLeft: '2%'
  },

  cardText: {
    fontSize: 30,
    padding: 10,
  },

  card: {
    marginBottom: 10,
    marginLeft: "2%",
    width: "96%",
    borderWidth: 5,
    borderColor: "grey",
    paddingLeft: 10,
    paddingRight: 10
  },

  inLine: {
    flexDirection: "row",
    marginBottom: 2,
    marginTop: 2
  },

  desc: {
    fontWeight: 'bold'
  }
});
