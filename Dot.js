import React from 'react'
import { Platform, StyleSheet, Text, Button, View } from 'react-native';

const Dot = (props) => {


    return (
        <View style={styles[props.orientation]} />
    )

}

const styles = StyleSheet.create({
    center:{
        backgroundColor: 'black',
        height: 25,
        width: 25,
        position: 'absolute', 
        zIndex: 15,
        borderRadius: 100,
        alignSelf: "center",
        marginTop: 61
    },
    topLeft:{
        backgroundColor: 'black',
        height: 25,
        width: 25,
        position: 'absolute', 
        zIndex: 15,
        borderRadius: 100,
        marginTop: 16,
        marginLeft: 17
    },
    bottomRight:{
        backgroundColor: 'black',
        height: 25,
        width: 25,
        position: 'absolute', 
        zIndex: 15,
        borderRadius: 100,
        marginLeft: 106,
        marginTop: 107,

    },
    topRight:{
        backgroundColor: 'black',
        height: 25,
        width: 25,
        position: 'absolute', 
        zIndex: 15,
        borderRadius: 100,
        marginLeft: 106,
        marginTop: 16,
    },
    bottomLeft:{
        backgroundColor: 'black',
        height: 25,
        width: 25,
        position: 'absolute', 
        zIndex: 15,
        borderRadius: 100,
        marginLeft: 17,
        marginTop: 107,
    },
    midLeft:{
        backgroundColor: 'black',
        height: 25,
        width: 25,
        position: 'absolute', 
        zIndex: 15,
        borderRadius: 100,
        marginLeft: 17,
        marginTop: 61
    },
    midRight:{
        backgroundColor: 'black',
        height: 25,
        width: 25,
        position: 'absolute', 
        zIndex: 15,
        borderRadius: 100,
        marginLeft: 106,
        marginTop: 61
    }
})

export default Dot;