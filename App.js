import React from 'react';
import 
{ StyleSheet, 
  Text, 
  View, 
  TouchableOpacity,
  Alert
} from 'react-native';

export default class App extends React.Component{

  constructor(){
    super();
    this.state={
      randomcolor:""
    }
  }

  getcolor = () => {
    var x=   "rgb(" + Math.floor((Math.random() * 256)) + "," 
    + Math.floor((Math.random() * 256)) + ","
    + Math.floor((Math.random() * 256)) + ")"
    console.log(x);
    return(
      x
    );
  }

  mybt = () => {
    this.setState({ randomcolor: this.getcolor()})
  }
  render(){
  return (
    <View style={[styles.container, {backgroundColor:this.state.randomcolor}]}>
    
  <TouchableOpacity onPress={() => {
  
        this.mybt() 

      }}>
      <Text style={styles.text}>Colors</Text>
    
      </TouchableOpacity>
    </View>
  );
}
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text:{
    fontSize: 30,
    backgroundColor:"red",
    paddingHorizontal:40,
    paddingVertical:10,
    color:"white",
    borderRadius:10,
    borderWidth: 2,
    borderColor:"white"
  },

});
