import React from 'react';
import {View, Text} from 'react-native';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import ChatScreen from '../screens/chatscreen';
import { NavigationContainer } from '@react-navigation/native';

function InfoScreen() {
    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Text>Info Screen</Text>
        </View>
    );
}
function ActivityScreen() {
    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Text>Activity Screen</Text>
        </View>
    );
}


const Tab = createMaterialTopTabNavigator();

const MyTabs = () => {
    return (
        <NavigationContainer>
            <Tab.Navigator>
                <Tab.Screen name="Info" component={InfoScreen} />
                <Tab.Screen name="Activities" component={ActivityScreen} />

                <Tab.Screen name="Notes" component={ChatScreen} />
            </Tab.Navigator>
        </NavigationContainer>
    );
}

export default MyTabs;