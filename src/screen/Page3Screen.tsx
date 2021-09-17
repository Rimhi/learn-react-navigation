import React from "react";
import {Button, Text, View} from "react-native";
import {useNavigation} from "@react-navigation/native";
import appTheme from "../theme/appTheme";

export const Page3Screen = () => {
    const {popToTop} = useNavigation()
  return(
      <View style={appTheme.globalMargin}>
          <Text style={appTheme.title}>Page3Screen</Text>
          <Button title={"Ir pagina 1"} onPress={()=>popToTop() }/>
      </View>
  )
}
