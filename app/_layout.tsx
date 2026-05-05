import FontAwesome from '@expo/vector-icons/FontAwesome';
import FontAwesome5 from '@expo/vector-icons/FontAwesome5';
import FontAwesome6 from '@expo/vector-icons/FontAwesome6';
import { Tabs } from "expo-router";
import { Button, View } from "react-native";

export default function RootLayout() {
  return (
    <Tabs>
      <Tabs.Screen
        name="compra"
        options={{
          title: 'Compra',
          tabBarIcon: ({ color, focused }) => (
            <FontAwesome6 name="list-check" size={24} color="black" />
          ),
        }} 
      />
      <Tabs.Screen
        name="lista"
        options={{
          title: 'Lista',
          tabBarIcon: ({ color, focused }) => (
            <FontAwesome5 name="clipboard-list" size={24} color="black" />
          ),
        }}
      />
      <Tabs.Screen
        name="dispensa"
        options={{
          title: 'Dispensa',
          tabBarIcon: ({ color, focused }) => (
            <FontAwesome name="list" size={24} color="black" />
          ),
          headerRight: () => <View style={{ paddingRight: 15 }}><Button title='+' /></View>
        }}
      />
    </Tabs>
  );
}