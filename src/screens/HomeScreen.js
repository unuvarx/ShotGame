import React, {useState} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  Button,
  Image,
  TouchableOpacity,
} from 'react-native';
import {useNavigation} from '@react-navigation/native';

const styles = StyleSheet.create({
  safeBackground: {
    flex: 1,
    backgroundColor: '#51321B',
    alignItems: 'center',
    justifyContent: 'center',
  },
  safeTitle: {
    color: '#FAEFE7',
    fontSize: 30,
    fontFamily: 'Poppins-SemiBold',
  },
  viewBackground: {
    width: '80%',
    height: '70%',
    backgroundColor: '#FAEFE7',
    borderRadius: 20,
    borderWidth: 3,
    borderColor: '#9A7254',
  },
  logoPng: {
    width: 100,
    height: 100,
    marginLeft: 'auto',
    marginRight: 'auto',
  },
  buttonsView: {
    backgroundColor: '#9A7254',
    justifyContent: 'center',
    alignItems: 'center',
    height: '50%',
  },
  touchButton: {
    backgroundColor: '#51321B',
    marginTop: 20,
    height: '15%',
    width: '60%',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 20,
  },
  touchButtonText: {
    color: '#FAEFE7',
    fontFamily: 'Poppins-Medium',
  },
  infoButton: {
    marginLeft: 'auto',
    marginTop: 'auto',
  },
  infoButtonText: {
    fontFamily: 'Poppins-SemiBoldItalic',
    color: '#9A7254',
    fontSize: 17,
  },
});

export default HomeScreen = () => {
  const navigation = useNavigation();

  return (
    <SafeAreaView style={styles.safeBackground}>
      <Text style={styles.safeTitle}>Shot Oyunu</Text>
      <View style={styles.viewBackground}>
        <Image
          style={styles.logoPng}
          source={require('../../images/dice.png')}
        />
        <View style={styles.buttonsView}>
          <TouchableOpacity
            onPress={() => navigation.navigate('AddCard')}
            style={styles.touchButton}>
            <Text style={styles.touchButtonText}>Kart Ekle</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => navigation.navigate('ShowCards')}
            style={styles.touchButton}>
            <Text style={styles.touchButtonText}>Kartları Göster</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => navigation.navigate('StartGame')}
            style={styles.touchButton}>
            <Text style={styles.touchButtonText}>Oyuna Başla</Text>
          </TouchableOpacity>
        </View>
        <View>
          <TouchableOpacity
            onPress={() => navigation.navigate('Informations')}
            style={styles.infoButton}>
            <Text style={styles.infoButtonText}>Nasıl Oynanır?</Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
};
