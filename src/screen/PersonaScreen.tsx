import React from "react";
import {Text, View} from "react-native";

export const PersonaScreen = (props:any) => {
  return(
      <View>
          <Text>{props.route.params.name}</Text>
      </View>
  )
}