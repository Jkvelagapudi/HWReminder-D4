import * as React from 'react';
import {
  Text,
  TouchableOpacity,
  StyleSheet,
  View,
  Image
  
} from 'react-native';
import { RFValue } from "react-native-responsive-fontsize"; 
import * as Font from "expo-font";
import { Header } from 'react-native-elements';



export default class HomeScreen extends React.Component{
  render(){
    return(
      <View style={styles.container}>

        <Header
          backgroundColor={'#5C39FF'}
          centerComponent={{
            text: 'Homework Reminder',
            style: { color: '#fff', fontSize: RFValue(30) },
          }}
        />

        <View>
      <TouchableOpacity style={styles.routeCard1} onPress={() => 
        this.props.navigation.navigate("Input")}>

        <Text style={styles.text1Style}>Input</Text>

      </TouchableOpacity>

      <Image source={require('../assets/Input_Icon.png')} style={styles.iconImage}></Image>

        </View>
        <View>
      <TouchableOpacity style={styles.routeCard2} onPress={() =>
        this.props.navigation.navigate("Schedule")}>

        <Text style={styles.text1Style}>Schedule</Text>

      </TouchableOpacity>

      <Image source={require('../assets/Schedule_Icon.png')} style={styles.iconImage2}></Image>

      </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FF5C39',
    
  },
  routeCard1: {
    flex: 0.12,
    justifyContent: "center",
    alignItems: "center",
    margin: 10,
    marginLeft: 30,
    marginRight: 30,
    borderRadius: 100,
    backgroundColor: '#39DCFF',
    margin: 50,
    padding: 50
},
  routeCard2: {
    flex: 0.12,
    justifyContent: "center",
    alignItems: "center",
    margin: 10,
    marginLeft: 30,
    marginRight: 30,
    borderRadius: 100,
    backgroundColor: '#79FF39',
    margin: 50,
    padding: 50
},

text1Style: {
  fontSize: RFValue(20),
},

iconImage: {
  position: "absolute",
  height: RFValue(50),
  width: RFValue(50),
  resizeMode: "contain",
  right: 730,
  top: 35
},

iconImage2: {
  position: "absolute",
  height: RFValue(40),
  width: RFValue(40),
  resizeMode: "contain",
  right: 720,
  top: 50
}

})