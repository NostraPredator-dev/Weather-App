import React from 'react';
import {View} from 'react-native';
import Appbar from './components/Appbar';
import Search from './components/Search';

export default function App() {
  return (
    <View>
      <Appbar />
      <Search />
    </View>
  );
}
