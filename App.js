import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { NavigationContainer } from '@react-navigation/native'
import React from 'react'
import { PaperProvider } from 'react-native-paper'
import { Ionicons } from '@expo/vector-icons'

import HomeScreen from './screens/HomeScreen.jsx'
import CadastroScreen from './screens/CadastroScreen.jsx'


const Tab = createBottomTabNavigator()

export default function App() {
  return (
    <PaperProvider>
      <NavigationContainer>
        <Tab.Navigator>
          <Tab.Screen
            name='HomeScreen'
            component={HomeScreen}
            options={{
              title: 'AppFood',
              headerTitleAlign: 'center',
              headerTintColor: 'white',
              headerStyle: {
                backgroundColor: 'red',
              },
              tabBarIcon: ({ color, size }) => <Ionicons name='restaurant' color={color} size={size} />
            }}
          />
          <Tab.Screen
            name='CadastroScreen'
            component={CadastroScreen}
            options={{
              title: 'Cadastro',
              headerTitleAlign: 'center',
              headerTintColor: 'white',
              headerStyle: {
                backgroundColor: 'red',
              },
              tabBarIcon: ({ color, size }) => <Ionicons name='person-add' color={color} size={size} />
            }}
          />


        </Tab.Navigator>
      </NavigationContainer>
    </PaperProvider>
  );
}