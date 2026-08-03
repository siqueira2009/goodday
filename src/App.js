import { NavigationContainer } from "@react-navigation/native";
import 'react-native-gesture-handler';

import Navigator from "./routes";
import { GestureHandlerRootView } from "react-native-gesture-handler";

export default function App() {
  return (
    <GestureHandlerRootView style={{flex: 1}}>
      <NavigationContainer>
        <Navigator/>
      </NavigationContainer>
    </GestureHandlerRootView>
  );
}