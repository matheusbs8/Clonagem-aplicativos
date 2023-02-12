import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { Background } from './styles';
import SplashScreen from './src/pages/SplashScreen';
import OnBoarding from './src/pages/Onbording';
import Home from './src/pages/Home';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { useFonts } from 'expo-font';

const Stack = createNativeStackNavigator();

export default function App() {
  const [loaded] = useFonts({
    Segoe: require('./assets/fonts/Segoe UI.ttf'),
   // NunitoSans: require('./assets/fonts/NunitoSans-Regular.ttf'),
   // NunitoSansSemiBold: require('./assets/fonts/NunitoSans-SemiBold.ttf'),
    //NunitoSansBold: require('./assets/fonts/NunitoSans-Bold.ttf'),
    //NunitoSansExtraBold: require('./assets/fonts/NunitoSans-ExtraBold.ttf'),
  });
  return (

    <NavigationContainer>

      <Stack.Navigator>
        <Stack.Screen name="Home" component={Home} options={{ headerShown: false }}/>
        <Stack.Screen name="SplashScreen" component={SplashScreen} options={{ headerShown: false }}/>
        <Stack.Screen name="Onboarding" component={OnBoarding} options={{ headerShown: false }}/>
        
      </Stack.Navigator>
    </NavigationContainer>
  );
}


