import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, TextInput, ScrollView } from 'react-native';
import Colors from '../config/colors';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Octicons from 'react-native-vector-icons/Octicons';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Entypo from 'react-native-vector-icons/Entypo';
import IonIcons from 'react-native-vector-icons/Ionicons';
import MyTabs from '../navigation/top_tab';

const Chat = () => {
    return (
        <View style={{height:'100%'}}>
           
               <ScrollView>
                   <View>
                   <View style={styles.header}>
                   <TouchableOpacity>
                   <AntDesign name="arrowleft" size={25} color={"#fff"} style={{alignSelf:'flex-end', paddingRight:20,paddingTop:10}}/>
                   </TouchableOpacity>
                    <Text style={styles.head}>Enquiry Details</Text>
                </View>
                <View style={styles.card}>
                    <Text style={styles.name}>vishnu</Text>
                    <View style={{ flexDirection: 'row',alignItems:'center',justifyContent:'flex-start' }}>
                        <TextInput
                            style={styles.textField}></TextInput>
                           <View style={{height:20,width:20,borderRadius:20/2, alignItems:'center',justifyContent:'center',backgroundColor:'grey'}}>
                           <Entypo name="edit" size={10} color ={"#ffff"}/>
                           </View>
                    </View>
                    <View style={styles.mail}>
                        <Entypo name="mail" size={18} color={"grey"} />
                       <View  style={{height:20,width:20,borderRadius:20/2, alignItems:'center',justifyContent:'center',backgroundColor:Colors.primary}}>
                       <MaterialCommunityIcons name="delete" size={10} color={"#fff"} />
                       </View>
                    </View>
                    <View style={{ flexDirection: 'row',alignSelf:'flex-start',paddingLeft:20,padding:10}}>
                        <IonIcons name="ios-call" size={15} color={"grey"} /> 
                        <Text>917890657880</Text>
                    </View>
                </View>
                <View style={{height:100}}></View>
                <View style={styles.icons}>
                    <View styles={styles.itembox}>
                        <View style={styles.box}>
                            <MaterialCommunityIcons name ="headset" size={20} color={"yellow"}/>
                        </View>
                        <Text style={styles.text}>IVR</Text>
                    </View>
                    <View styles={styles.itembox}>
                        <View style={styles.box}>
                            <Octicons name= "calendar" size={20} color={"red"}/>
                        </View>
                        <Text style={styles.text}>Schedule</Text>
                    </View>
                    <View styles={styles.itembox}>
                        <View style={styles.box}>
                            <FontAwesome name="microphone" size={20} color={"blue"} />
                        </View>
                        <Text style={styles.text}>Record</Text>
                    </View>
                    <View styles={styles.itembox}>
                        <View style={styles.box}>
                        <FontAwesome name="whatsapp" size={20} color={"green" }/>
                        </View>
                        <Text style={styles.text}>Whatsapp</Text>
                    </View>
                    <View styles={styles.itembox}>
                        <View style={styles.box}>
                            <AntDesign name="message1" size={20} color={"cyan"} />
                        </View>
                        <Text style={styles.text}>Message</Text>
                    </View>
                </View>

                {/* Chats */}
                <View style={{height:600}}>
                    <MyTabs/>
                </View>

               
                   </View>
               </ScrollView>
                {/* Footer */}
           <View style={styles.footer}>
               <View style={styles.textBox}>
               <TextInput
               placeholder="Type and send your notes"
                style={styles.textField1}></TextInput>
                <Entypo name="attachment" size={20} color ={"grey"} style={{paddingRight:10}}/>
                <FontAwesome name="microphone" size={20} color={Colors.primary} />

               </View>
               <FontAwesome name="send" size={20} color={"grey"} />
           </View>
        </View>

    );
}

export default Chat;

const styles = StyleSheet.create({
    header: {
        width: '100%',
        height: 150,
        backgroundColor: Colors.primary
    },
    head:{
        color:'#ffff',
        fontSize:20,
        fontWeight:'700',
        alignSelf:'center'
    },
    card: {
        width: '90%',
        height: 150,
        borderRadius: 7,
        alignItems: 'center',
        justifyContent: 'center',
        elevation: 5,
        position:'absolute',
        top:80,
        backgroundColor:'#fff',
        marginLeft:20,
        marginRight:20
       
    },
    name: {
        color: Colors.primary,
        alignSelf: 'flex-start',
        paddingHorizontal: 20,
        fontSize:16
    },
    textField: {
        width: "80%",
        height: 40,
        padding: 5,
        borderBottomWidth: 1,
        borderBottomColor: 'grey'
    },
    textField1: {
        width: "75%",
        height: 40,
        padding: 5,
       
        
    },
    mail: {
        width: '100%',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingHorizontal: 20,
        flexDirection:'row',
    },
    icons: {
        alignItems: 'center',
        justifyContent: 'space-evenly',
        flexDirection: 'row',
        padding: 5,
        // height:60,
        // width:'100%',
        // backgroundColor:'cyan'
    },
    itembox: {
        alignItems: 'center',
        justifyContent: 'center',
        // margin: 5
    },
    box: {
        width: 40,
        height: 40,
        alignItems: 'center',
        justifyContent: 'center',
        padding: 3,
        borderWidth:1,
        borderColor:Colors.primary,
        borderRadius:4
    },
    text:{
        alignSelf:'center',
        paddingTop:4
    },
    footer:{
        width:'100%',
        height:60,
       
        position:'absolute',
        bottom:0,
        flexDirection:'row',
        alignItems:'center'
    },
    textBox:{
        alignItems:'center',
        flexDirection:'row',
        borderRadius:7,
        backgroundColor:'#ffff',
        marginLeft:20,
        marginRight:10
    }
}); 