import * as React from 'react';
import {
  Text,
  TouchableOpacity,
  StyleSheet,
  View,
  TextInput
  
} from 'react-native';
import { RFValue } from "react-native-responsive-fontsize"; 
import * as Font from "expo-font";
import DatePicker from 'react-date-picker';
import TimePicker from 'react-time-picker';
import db from "../config";
import firebase from "firebase";




export default class InputScreen extends React.Component{

  constructor() {
    super();
    this.state = {
      HWName: '',
      Subject: '',
      EstimatedTime: '',
      DueDateT: '',
      DueDateD: '',
      Priority: ''
    };
  }

  updateValues = () => {
    db.collection("Homework").add({
      Name: this.state.HWName,
      Subject: this.state.Subject,
      EstimatedTime: this.state.EstimatedTime,
      Priority: this.state.Priority
    });
  }

  render(){
    return(
      <View style={styles.container}>

         <TextInput style={styles.inputText} placeholder="Assignment Name" onChangeText={(value) => {this.setState({HWName: value})}}/>

         <TextInput style={styles.inputText} placeholder="Subject" onChangeText={(value) => {this.setState({Subject: value})}}/>

         <TextInput style={styles.inputText} placeholder="Estimated Time (Minutes)" onChangeText={(value) => {this.setState({EstimatedTime: value})}}/>

          <View>
         <Text> Due Date </Text>
         <TimePicker/>
         <DatePicker/>
         </View>

         <TextInput style={styles.inputText} placeholder="Priority" onChangeText={(value) => {this.setState({Priority: value})}}/>

         <TouchableOpacity style={styles.routeCard1} onPress={this.updateValues}> Submit </TouchableOpacity>
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
    margin: 50
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
    margin: 50
},

text1Style: {
  fontSize: RFValue(20),
},

inputText: {
  borderRadius: 10,
  height: 40,
  margin: 20,
  borderWidth: 1,
  padding: 10,
},

row: {
  flexDirection: "row",
  margin: 30
},
datePickerStyle: {
  width: 200,
  marginTop: 20,
},

})