import * as React from "react";
import { ThemeProvider } from "react-native-elements";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HomeScreen from "./screens/HomeScreen";
import ResturantScreen from "./screens/ResturantScreen";
import CartScreen from "./screens/CartScreen";
import PreparingOrderScreen from "./screens/PreparingOrderScreen";
import ProfileScreen from "./screens/ProfileScreen";
import { Button } from "react-native";
const Stack = createNativeStackNavigator();
import { useAuth0 } from "react-native-auth0";
import * as Icon from "react-native-feather";
import { useNavigation } from "@react-navigation/native";
import { useAuthentication } from "./utils/hooks/useAuthentication";
import AuthStack from "./auth-nav/authStack";

// const LoginButton = () => {
//   const { authorize } = useAuth0();
//   const navigation = useNavigation();
//   const onPress = async () => {
//     try {
//       await authorize();
//       navigation.navigate("Profile");
//     } catch (e) {
//       console.log(e);
//     }
//   };

//   return <Icon.User onPress={onPress} title="Log in" />;
// };

export default function Nav() {
  //   const { promptAsync } = useAuth0();
  const { user } = useAuthentication();

  return !user ? (
    <ThemeProvider>
      <AuthStack />
    </ThemeProvider>
  ) : (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{
            headerTitle: "Yupon",
            //headerRight: () => <LoginButton />,
            headerShadowVisible: false, // This will remove the border
          }}
        />
        <Stack.Screen name="Resturant" component={ResturantScreen} />
        <Stack.Screen
          name="Cart"
          options={{ presentation: "modal", headerShown: false }}
          component={CartScreen}
        />
        <Stack.Screen
          name="PreparingOrder"
          options={{ presentation: "fullScreenModal", headerShown: false }}
          component={PreparingOrderScreen}
        />
        <Stack.Screen
          name="Profile"
          options={{ presentation: "fullScreenModal", headerShown: false }}
          component={ProfileScreen}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
