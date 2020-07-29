import React, { Component } from 'react';
import { Platform, StyleSheet, Text, Button, View } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import Die from './Die'

const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' + 'Cmd+D or shake for dev menu',
  android: 'Double tap R on your keyboard to reload,\n' + 'Shake or press menu button for dev menu',
});

export default class App extends Component {

  state = {
    die1: 1,
    die2: 1
  }

  handlePress = () => {

    let interval = setInterval(()=>{
      this.setState({
        die1: Math.ceil(Math.random()*6),
        die2: Math.ceil(Math.random()*6)
      })
    }, 50)

    setTimeout(()=>{
      clearInterval(interval)
    }, 700)

  }

  render() {
    return (
      <View style={styles.container}>
        <Die isTopDie={true} num={this.state.die1}/>
        <Die isTopDie={false} num={this.state.die2}/>
        <TouchableOpacity style={styles.rollButton} onPress={this.handlePress}>
          <Text style={styles.rollButtonText}>Roll</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: "center",
    backgroundColor: '#F5FCFF',
    paddingBottom: '5%'
  }, 
  rollButton: {
    backgroundColor:'green',
    width: 200,
    // height: 100,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 60
  },
  rollButtonText: {
    fontSize: 48
  },
  topDie: {
    height: 150,
    width: 150,
    backgroundColor: 'white',
    position: 'absolute', 
    zIndex: 10,
    top: '20%',
    left: '14%',
    borderWidth: 1,
    borderRadius: 10
  },
  bottomDie: {
    height: 150,
    width: 150,
    backgroundColor: 'white',
    position: 'absolute', 
    zIndex: 10,
    top: '50%',
    left: '47%',
    borderWidth: 1,
    borderRadius: 15
  },
});
