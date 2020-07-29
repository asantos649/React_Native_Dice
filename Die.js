import React from 'react'
import { Platform, StyleSheet, Text, Button, View } from 'react-native';
import Dot from './Dot'

const Die = (props) => {

    function renderNumber(num){
        switch (num){
            case 1 :
                return (
                    <View style={styles.dotContainer}>
                        <Dot orientation='center'/>
                    </View>
                )
            case 2 :
                return (
                    <View style={styles.dotContainer}>
                        <Dot orientation='topLeft'/>
                        <Dot orientation='bottomRight'/>
                    </View>
                )
            case 3 :
                return (
                    <View style={styles.dotContainer}>
                        <Dot orientation='topLeft'/>
                        <Dot orientation='center'/>
                        <Dot orientation='bottomRight'/>
                    </View>
                )
            case 4 :
                return (
                    <View style={styles.dotContainer}>
                        <Dot orientation='topLeft'/>
                        <Dot orientation='topRight'/>
                        <Dot orientation='bottomRight'/>
                        <Dot orientation='bottomLeft'/>
                    </View>
                )
            case 5 :
                return (
                    <View style={styles.dotContainer}>
                        <Dot orientation='topLeft'/>
                        <Dot orientation='topRight'/>
                        <Dot orientation='bottomRight'/>
                        <Dot orientation='bottomLeft'/>
                        <Dot orientation='center'/>
                    </View>
                )
            case 6 :
                return (
                    <View style={styles.dotContainer}>
                        <Dot orientation='topLeft'/>
                        <Dot orientation='topRight'/>
                        <Dot orientation='bottomRight'/>
                        <Dot orientation='bottomLeft'/>
                        <Dot orientation='midRight'/>
                        <Dot orientation='midLeft'/>
                    </View>
                )
        }
    }


    return (
        <>
            <View style={props.isTopDie ? styles.topDie : styles.bottomDie}>
                {renderNumber(props.num)}
            </View>
       </>
    )

}
    const styles = StyleSheet.create({
        topDie: {
          height: 150,
          width: 150,
          backgroundColor: 'white',
          position: 'absolute', 
          zIndex: 10,
          top: '20%',
          left: '14%',
          borderWidth: 1,
          borderRadius: 10,
          display: 'flex',
          justifyContent: "flex-start",
          alignContent: 'center'
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
          borderRadius: 15,
          display: 'flex',
        },
        dotContainer: {
          height: 150
        }
      });


export default Die