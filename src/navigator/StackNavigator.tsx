import { createStackNavigator } from '@react-navigation/stack';
import {Page1Screen} from "../screen/Page1Screen";
import {Page2Screen} from "../screen/Page2Screen";
import {Page3Screen} from "../screen/Page3Screen";
import React from "react";
import {PersonaScreen} from "../screen/PersonaScreen";

export type RootStackParams = {
    Page1Screen:undefined,
    Page2Screen:undefined,
    Page3Screen:undefined,
    PersonaScreen:{id:number,name:string}
}
const Stack = createStackNavigator<RootStackParams>();
export const StackNavigator =()=> {
    return (
        <Stack.Navigator
        initialRouteName={"Page1Screen"}
            screenOptions={{
                cardStyle:{
                    backgroundColor:'white'
                },
                headerStyle:{
                    elevation:0,
                    shadowColor:'transparent'
                }
            }}
        >
            <Stack.Screen name={"Page1Screen"} options={{title:'Page 1', headerBackTitle:''}} component={Page1Screen} />
            <Stack.Screen name={"Page2Screen"} options={{title:'Page 2', headerBackTitle:''}} component={Page2Screen} />
            <Stack.Screen name={"Page3Screen"} options={{title:'Page 3', headerBackTitle:''}} component={Page3Screen} />
            <Stack.Screen name={"PersonaScreen"} options={{title:'Persona', headerBackTitle:''}} component={PersonaScreen} />
        </Stack.Navigator>
    );
}