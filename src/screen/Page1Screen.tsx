import React from "react";
import {Button, Text, TouchableOpacity, View} from "react-native";
import appTheme from "../theme/appTheme";

import {StackScreenProps} from "@react-navigation/stack";
import {RootStackParams} from "../navigator/StackNavigator";

interface Props extends StackScreenProps<RootStackParams,'Page1Screen'>{

}

export const Page1Screen = ({navigation}:Props) => {


    return(
      <View style={appTheme.globalMargin}>
          <Text style={appTheme.title}>Page1Screen</Text>

          <Button title={"Ir pagina 2"} onPress={()=>navigation.navigate("Page2Screen")}/>
          <Text style={appTheme.title}>Navegar con argumentos</Text>

          <TouchableOpacity onPress={() => navigation.navigate('PersonaScreen',{
              id:1,
              name:"pedro",
          })}>
              <Text>Pedro</Text>
          </TouchableOpacity>

      </View>
  )
}
