import React from "react";
import {createDrawerNavigator, DrawerContentComponentProps, DrawerContentScrollView} from '@react-navigation/drawer';
import {Page2Screen} from "../screen/Page2Screen";
import {StackNavigator} from "./StackNavigator";
import {SettingsScreen} from "../screen/SettingsScreen";
import {useWindowDimensions, View, Text, Image, TouchableOpacity} from "react-native";
import appTheme from "../theme/appTheme";


const Drawer = createDrawerNavigator();

const DrawerNavigatorComplete = ()=>{
    const { width }= useWindowDimensions()
    return (
        <Drawer.Navigator
            screenOptions={{
                drawerType: width >= 600  ? 'permanent':'front'
            }}
            drawerContent={(props) => <Menu {...props}/>}
        >
            <Drawer.Screen name="Stack"  component={StackNavigator} />
            <Drawer.Screen name="Settings" component={SettingsScreen} />
        </Drawer.Navigator>
    );
}
const Menu = (props:DrawerContentComponentProps) =>{
    const {navigation} = props;
    return (
        <DrawerContentScrollView>
            <View style={appTheme.avatarContainer}>
                <Image source={{
                    uri:"https://tse3.mm.bing.net/th?id=OIP.qIu2wcvur-VB04HW0V0j0QHaFj&pid=Api"
                }}
                style={appTheme.avatar}/>
            </View>
            {/*opciones de menu*/}
            <View style={appTheme.menuContainer}>
                <TouchableOpacity style={appTheme.menuBotton} onPress={()=>navigation.navigate('Stack')}>
                    <Text style={appTheme.menuText}>Home</Text>
                </TouchableOpacity>
                <TouchableOpacity style={appTheme.menuBotton} onPress={()=>navigation.navigate('Settings')}>
                    <Text style={appTheme.menuText}>Ajustes</Text>
                </TouchableOpacity>
            </View>
        </DrawerContentScrollView>
    )
}
export default  DrawerNavigatorComplete