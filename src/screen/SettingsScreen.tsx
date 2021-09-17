import React from "react";
import {Button, Text, View} from "react-native";
import {useNavigation} from "@react-navigation/native";
import appTheme from "../theme/appTheme";

export const SettingsScreen = () => {
    const navigation = useNavigation()
    return(
        <View style={appTheme.globalMargin}>
            <Text style={appTheme.title}>Settings</Text>
        </View>
    )
}
