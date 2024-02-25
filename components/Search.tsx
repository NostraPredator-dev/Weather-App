import React, {useState} from 'react';
import {StyleSheet, TextInput, View, Button} from 'react-native';
import Card from './Card';

export default function Search() {
  const [city, setCity] = useState('');
  const [finCity, setFinCity] = useState('');

  function handleChange(e: any) {
    setCity(e.target.value);
  }

  function handleClick() {
    setFinCity(city);
  }

  const styles = StyleSheet.create({
    textInput: {
      padding: 5,
      borderWidth: 4,
      borderColor: '#ffe05d',
      borderRadius: 50,
      margin: 20,
    },
    input: {
      margin: 20,
      position: 'relative',
    },
    button: {
      display: 'flex',
      margin: 20,
      marginTop: 5,
      width: 100,
      alignSelf: 'center',
    },
  });
  return (
    <View style={styles.input}>
      <View style={styles.textInput}>
        <TextInput
          placeholder="City Name"
          value={city}
          onChangeText={newText => setCity(newText)}
        />
      </View>

      <View style={styles.button}>
        <Button title="Search" color="#ff9642" onPress={handleClick} />
      </View>
      <View style={{marginTop: 90}}>
        <Card title={finCity} />
      </View>
    </View>
  );
}
