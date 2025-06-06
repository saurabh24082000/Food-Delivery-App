
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import { SafeAreaView, SafeAreaProvider } from 'react-native-safe-area-context';
import Home from "./screens/Home"
import Menu from "./screens/Menu"
import Delivery from "./screens/Delivery"
import Tabs from './Navigation/Tabs';
import {View,Text} from 'react-native'
 const Stack = createNativeStackNavigator();
const App = () => {
      return (
     
          <NavigationContainer>
              <Stack.Navigator
                  screenOptions={{
                      headerShown: false
                  }}
                  initialRouteName={'HomeTabs'}
              >
                  <Stack.Screen name="HomeTabs" component={Tabs} />
                  <Stack.Screen name="Restaurant" component={Menu} />
                  <Stack.Screen name="OrderDelivery" component={Delivery} />
              </Stack.Navigator>
          </NavigationContainer>

      )
}
export default App;