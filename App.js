import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button, Image } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import StartAssesment from './StartAssesment';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const logoImage = require('./DingoLogo.jpg');
const Stack = createNativeStackNavigator();


function HomeScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <Text style={styles.headerText}>Your Culinary Journey Starts Here</Text>
      <Image source={logoImage} style={styles.logo}/>
      <Button  
        title = "Start Assesment"
        onPress={() => navigation.navigate('StartAssesment')}
      />
      <StatusBar style="auto" />

    </View>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name = "Home"
          component={HomeScreen}
          options={{
            title: 'Welcome',
            headerStyle: {
              backgroundColor: 'lightsalmon'
            }
          }}
        />
        <Stack.Screen 
          name="StartAssesment"
          component={StartAssesment}
          options={{title: 'Assesment Page'}}
        />
      </Stack.Navigator>
    </NavigationContainer>

  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'lightsalmon',
    alignItems: 'center',
    justifyContent: 'flex-start',
    paddingTop: '30%'
  },
  headerText: {
    color: 'white',
    fontSize: 24,
    // fontWeight: 'bold',
    textAlign: 'center',
  },
  logo: {
    width: 300,
    height: 300, 
    marginTop: 50,
    borderRadius: 150,
  },
});


