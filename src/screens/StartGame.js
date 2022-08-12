import React, {useState} from 'react';
import {
  StyleSheet,
  SafeAreaView,
  Text,
  View,
  Image,
  TouchableHighlight,
  Animated,
  Easing,
  Modal,
  Button,
  TouchableOpacity,
} from 'react-native';
import {useSelector} from 'react-redux';
import {SimpleModal} from '../components/SimpleModal';
import {useNavigation, useRoute} from '@react-navigation/native';

const styles = StyleSheet.create({
  background: {
    backgroundColor: '#FAEFE7',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  titleImage: {
    width: 300,
    height: 300,
    backgroundColor: '#51321B',
    borderRadius: 10,
    alignItems: 'center',
  },
  mainImage: {
    width: '100%',
    height: '100%',
  },
  buttonStyle: {
    fontSize: 20,
    alignItems: 'center',
    backgroundColor: '#9A7254',
    borderWidth: 10,
    borderColor: '#51321B',
    marginTop: 10,
    width: 100,
    height: 100,
    justifyContent: 'center',
    borderRadius: 100,
  },
  buttonStyleText: {
    fontSize: 18,
    color: '#FAEFE7',
    fontFamily: 'Poppins-Medium',
  },
  homeicon: {
    width: 50,
    height: 50,
    position: 'absolute',
    left: 0,
    bottom: 0,
  },
  iconImage: {
    width: '100%',
    height: '100%',
  },
});
export default StartGame = () => {
  const navigation = useNavigation();
  const {GeneralResponse} = useSelector(state => state);
  let rotateValueHolder = new Animated.Value(0);
  const [isModalVisible, setisModalVisible] = useState(false);
  const [chooseData, setchooseData] = useState();
  const changeModalVisible = bool => {
    setisModalVisible(bool);
  };
  const [number, setNumber] = useState(0);

  const startImageRotate = () => {
    rotateValueHolder.setValue(0);
    Animated.timing(rotateValueHolder, {
      toValue: 1,
      duration: 1000,
      easing: Easing.linear,
      useNativeDriver: false,
    }).start();
    setTimeout(() => {
      changeModalVisible(true);
      console.log('sefa');
    }, 1000);
  };
  const RotateData = rotateValueHolder.interpolate({
    inputRange: [0, 1],
    outputRange: ['0deg', '5400deg'],
  });
  const setData = data => {
    setchooseData(data);
  };
  return (
    <SafeAreaView style={styles.background}>
      <View style={styles.titleImage}>
        <Animated.Image
          style={[styles.mainImage, {transform: [{rotate: RotateData}]}]}
          source={require('../../images/dice.png')}
        />
        <TouchableHighlight
          onPress={startImageRotate}
          style={styles.buttonStyle}>
          <Text style={styles.buttonStyleText}> ÇEVİR </Text>
        </TouchableHighlight>
      </View>

      <Modal
        transparent={true}
        animationType="fade"
        visible={isModalVisible}
        nRequestClose={() => setisModalVisible(false)}>
        <SimpleModal
          changeModalVisible={changeModalVisible}
          setData={setData}
        />
      </Modal>
      <View style={styles.homeicon}>
        <TouchableOpacity
          onPress={() => {
            navigation.navigate('Home');
          }}>
          <Image
            style={styles.iconImage}
            source={require('../../images/home-icon.png')}
          />
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};
