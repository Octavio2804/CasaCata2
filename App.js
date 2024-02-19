/* REACT */
import { StatusBar } from 'expo-status-bar';
import 'react-native-gesture-handler';
import { StyleSheet, Text, View, Image } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator, initialRouteName } from '@react-navigation/stack';

/* HOTELES */
import AdraziMain from "Screens\Adrazi\AdraziMain.js";
import AomaMain from "Screens\Aoma\AomaMain.js";
import CasaCataMain from "Screens\CasaCata\CasaCataMain.js";
import IrunMain from "Screens\Irun\IrunMain.js";
import MilanMain from "Screens\Milan\MilanMain.js";
import PalaceMain from "Screens\Palace\PalaceMain.js";

/* PAGINAS */
import Ecobici from './Screens/Ecobici';
import Hospitales from "./Screens/Hospitales";
import Inicio from './Screens/Inicio';
import NumerosInteres from "Screens\NumerosInteres.js";
import Sube from "Screens\Sube.js";

/* STACK */

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer 
    initialRouteName={'Inicio'}>
      <Stack.Navigator>
        <Stack.Screen 
        name='Inicio'
        component={Inicio}
        options={{
          headerShown: false,
        }}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
