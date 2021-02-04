import React from 'react';
import {View, Text, StyleSheet } from 'react-native';
import Entypo from 'react-native-vector-icons/Entypo';
import Colors from '../config/colors';

const ChatScreen = () => {
    return(
        <View>
            <Text style={{color:'grey', marginTop:10, marginHorizontal:20, marginBottom:10, fontSize:17}}>Previous Notes</Text>
            <View style={styles.chat}>
                <Text style={styles.msg}>Hii</Text>
                <View style={styles.circle}>
                <Entypo name="edit" size={10} color ={"grey"}/>
                </View>
            </View>
            <Text style={{color:'grey',marginTop:10, marginHorizontal:20, marginBottom:10,}}>February 04 2021 9.49 AM</Text>
            <View style={styles.chat}>
                <Text style={styles.msg}>Hello</Text>
                <View style={styles.circle}>
                <Entypo name="edit" size={10} color ={"grey"}/>
                </View>
            </View>
            <Text style={{color:'grey',marginTop:10, marginHorizontal:20, marginBottom:10,}}>February 04 2021 9.50 AM</Text>


        </View>
    );
}

export default ChatScreen;

const styles = StyleSheet.create({
    chat:{
        width:"90%",
        height:40,
        alignItems:'center',
        justifyContent:'space-between',
        marginHorizontal:20,
        borderRadius:6,
        elevation:3,
        backgroundColor:Colors.primary, 
        flexDirection:'row', paddingHorizontal:20
    },
    msg:{
        color:"#fff",
        fontSize:15,
    },
    circle:{
        height:20,
        width:20,
        borderRadius:20/2, 
        alignItems:'center',
        justifyContent:'center',
        backgroundColor:'#fff'
    }

});