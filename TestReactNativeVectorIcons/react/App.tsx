/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import type {PropsWithChildren} from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  useColorScheme,
  View,
} from 'react-native';

import {
  Colors,
  Header
} from 'react-native/Libraries/NewAppScreen';

import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

Icon.loadFont();

function App(): JSX.Element {

  return (
    <SafeAreaView>
      <View
          style={styles.viewStyle}>
           <Icon 
            name='login'
            size={100}
            color="#833471"
            />
        </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  viewStyle: {
    justifyContent: 'center',
    alignItems: 'center',
    height: 400
  }
});

export default App;
