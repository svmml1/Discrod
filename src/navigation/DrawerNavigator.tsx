import {
    createDrawerNavigator,
    DrawerContentScrollView,
  } from "@react-navigation/drawer";
import TabOneScreen from "../screens/TabOneScreen";

const Drawer = createDrawerNavigator();

  const DrawerNavigator = () => {
    return (
      <Drawer.Navigator >
        <Drawer.Screen
          name="ChannelScreen"
          component={TabOneScreen}
          options={{ title: "Channel" }}
        />
      </Drawer.Navigator>
    );
  };


  export default DrawerNavigator;