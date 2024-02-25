import React, {useState, useEffect} from 'react';
import axios from 'axios';
import {Text, StyleSheet, View, Image} from 'react-native';

export default function Card(city) {
  const [main, setMain] = useState({});
  const [weather, setWeather] = useState({});
  const [name, setName] = useState('');
  const title = city.title;

  useEffect(() => {
    axios
      .get(
        `https://api.openweathermap.org/data/2.5/weather?q=${title}&units=metric&appid=eedd52cc943dd9174f2c65178d154bdd`,
      )
      .then(res => {
        setMain(res.data.main);
        setWeather(res.data.weather[0]);
        setName(res.data.name);
      });
  }, [title]);

  const icon = `http://openweathermap.org/img/wn/${weather.icon}.png`;

  const styles = StyleSheet.create({
    card: {
      display: 'flex',
      backgroundColor: '#f1d4d4',
      justifyContent: 'space-around',
      margin: 20,
      padding: 10,
      borderRadius: 10,
      textAlign: 'center',
      color: '#646464',
      shadowColor: '#fff8cd',
      shadowRadius: 20,
    },
    top: {
      display: 'flex',
      justifyContent: 'space-between',
      flexDirection: 'row',
    },
    icon: {
      height: 80,
      width: 80,
    },
    iconCon: {
      display: 'flex',
      justifyContent: 'space-around',
      flexDirection: 'row',
    },
  });

  return (
    <View style={styles.card}>
      <View>
        <Text style={{fontWeight: 'bold', fontSize: 30, textAlign: 'center'}}>
          {name}
        </Text>
      </View>

      <View>
        <View style={styles.iconCon}>
          <Image style={styles.icon} src={icon} />
        </View>
        <Text style={{textAlign: 'center'}}>{weather.main}</Text>
        <Text style={{fontWeight: 'bold', fontSize: 30, textAlign: 'center'}}>
          {main.temp}&#8451;
        </Text>
      </View>

      <View style={styles.top}>
        <View style={{alignContent: 'flex-start', paddingLeft: 25}}>
          <Text>MAX</Text>
          <Text>{main.temp_min} &#8451; </Text>
        </View>
        <View style={{alignContent: 'flex-end', paddingRight: 25}}>
          <Text>MIN</Text>
          <Text>{main.temp_min}&#8451; </Text>
        </View>
      </View>
    </View>
  );
}
