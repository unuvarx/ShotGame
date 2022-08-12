import React from 'react';
import {
  StyleSheet,
  SafeAreaView,
  Text,
  View,
  Button,
  FlatList,
  TouchableOpacity,
  Image,
} from 'react-native';
import {useSelector} from 'react-redux';
import {useNavigation, useRoute} from '@react-navigation/native';

const styles = StyleSheet.create({
  background: {
    backgroundColor: '#FAEFE7',
    flex: 1,
  },
  viewAround: {
    backgroundColor: '#51321B',
    width: '90%',
    marginLeft: '5%',
    height: 150,
    marginTop: 10,
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'flex-end',
    borderWidth: 2,
    borderColor: '#51321B',
  },
  viewTitle: {
    width: '100%',
    backgroundColor: '#9A7254',
    height: '75%',
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10,
  },
  titleText: {
    color: '#FAEFE7',
    fontFamily: 'Poppins-SemiBold',
    fontSize: 20,
  },
  taskText: {
    color: '#51321B',
    fontSize: 18,
    fontFamily: 'Poppins-Regular',
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

export default ShowCards = () => {
  const {GeneralResponse} = useSelector(state => state);
  const navigation = useNavigation();
  const renderItem = ({item}) => (
    <View style={styles.viewAround}>
      <Text style={styles.titleText}> GÖREV {item.id} </Text>
      <View style={styles.viewTitle}>
        <Text style={styles.taskText}> {item.taskName} </Text>
      </View>
    </View>
  );
  return (
    <SafeAreaView style={styles.background}>
      <FlatList
        data={GeneralResponse.task}
        renderItem={renderItem}
        keyExtractor={item => item.id}
      />
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
