import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {commonStack} from './stacks';
function RootNav() {
  const RootStack = createNativeStackNavigator();
  return (
    <NavigationContainer>
      <RootStack.Navigator screenOptions={{headerShown: false}}>
        {Object.entries({...commonStack}).map(([name, component]) => {
          return (
            <RootStack.Screen key={name} component={component} name={name} />
          );
        })}
      </RootStack.Navigator>
    </NavigationContainer>
  );
}
export {RootNav};
