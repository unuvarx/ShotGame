import React, {useState} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  Button,
  Image,
  TouchableOpacity,
  TextInput,
  FlatList,
} from 'react-native';
import {useNavigation, useRoute} from '@react-navigation/native';
import {useDispatch, useSelector} from 'react-redux';
import {SetTask} from '../redux/action';

const styles = StyleSheet.create({
  safeBackground: {
    flex: 1,
    backgroundColor: '#51321B',
    alignItems: 'center',
    justifyContent: 'center',
  },
  container: {
    width: '90%',
    height: '60%',
    backgroundColor: '#9A7254',
    borderRadius: 20,
    borderWidth: 3,
    borderColor: '#51321B',
  },
  targetView: {
    backgroundColor: '#FAEFE7',
    width: '100%',
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    height: '15%',
    alignItems: 'center',
    justifyContent: 'center',
    borderBottomWidth: 3,
    borderColor: '#51321B',
  },
  targetText: {
    fontFamily: 'Poppins-SemiBold',
    fontSize: 25,
    color: '#51321B',
  },
  input: {
    width: '100%',
    borderWidth: 1,
    height: '100%',
    backgroundColor: '#9A7254',
    borderColor: '#51321B',
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
    fontSize: 15,
    fontFamily: 'Poppins-Medium',
    color: '#FAEFE7',
  },
  addButton: {
    width: '50%',
    backgroundColor: '#51321B',
    alignItems: 'center',
    justifyContent: 'center',
    height: '7%',
    borderRadius: 20,
  },
  addButtonText: {
    fontFamily: 'Poppins-Medium',
    color: '#FAEFE7',
    fontSize: 17,
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
export default AddCardScreen = () => {
  const [text, setText] = useState('');
  const navigation = useNavigation();
  const route = useRoute();
  const dispatch = useDispatch();
  const {GeneralResponse} = useSelector(state => state);
  const data = GeneralResponse.task;
  return (
    <SafeAreaView style={styles.safeBackground}>
      <View style={styles.container}>
        <View style={styles.targetView}>
          <Text style={styles.targetText}>GÖREV EKLE</Text>
        </View>
        <View>
          <TextInput
            value={text}
            onChangeText={setText}
            style={styles.input}
            placeholder="Görevi bu alana giriniz."
          />
        </View>
      </View>
      <TouchableOpacity
        onPress={() => {
          data.push({taskName: text, id: data.length + 1});
          console.log(data);
          navigation.navigate('ShowCards');
        }}
        style={styles.addButton}>
        <Text style={styles.addButtonText}>Ekle</Text>
      </TouchableOpacity>
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
