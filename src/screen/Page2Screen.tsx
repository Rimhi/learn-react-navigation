import React from "react";
import {Button, Text, View} from "react-native";
import appTheme from "../theme/appTheme";

import {StackNavigationProp, StackScreenProps} from "@react-navigation/stack";
import {RootStackParams} from "../navigator/StackNavigator";
import {useNavigation} from "@react-navigation/native";

interface Props extends StackNavigationProp<RootStackParams,'Page2Screen'>{

}
export const Page2Screen = () => {
    const navigation = useNavigation<Props>()
  return(
      <View style={appTheme.globalMargin}>
          <Text style={appTheme.title}>Page2Screen</Text>

          <Button title={"Ir pagina 3"} onPress={()=>navigation.navigate('Page3Screen')}/>
      </View>
  )
}
