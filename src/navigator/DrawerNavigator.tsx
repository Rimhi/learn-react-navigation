import { createDrawerNavigator } from '@react-navigation/drawer';
import {Page2Screen} from "../screen/Page2Screen";
import {StackNavigator} from "./StackNavigator";
import {SettingsScreen} from "../screen/SettingsScreen";
import React from "react";
import {useWindowDimensions} from "react-native";

const Drawer = createDrawerNavigator();

const DrawerNavigator = ()=>{
const { width }= useWindowDimensions()
    return (
        <Drawer.Navigator
            screenOptions={{
                drawerType: width >= 600  ? 'permanent':'front'
            }}
        >
            <Drawer.Screen name="Stack" options={{title:'Home'}} component={StackNavigator} />
            <Drawer.Screen name="SettingsScreen" options={{title:'Settings'}} component={SettingsScreen} />
        </Drawer.Navigator>
    );
}
export default  DrawerNavigator