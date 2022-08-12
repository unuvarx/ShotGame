import React from 'react';
import {
  StyleSheet,
  SafeAreaView,
  View,
  Image,
  Text,
  TouchableOpacity,
} from 'react-native';
import {useNavigation} from '@react-navigation/native';

export default Informations = () => {
  const navigation = useNavigation();
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.text}>
        Öncelikle bizim örnek olarak eklediğimiz 5 adet kart bulunmaktadır. Bu
        kartlarda görev numarası ve altında yapacağınız görev bulunmaktadır. Siz
        de "Kart Ekle" bölümünden istediğiniz kadar görev ekleyebilirsizin ve
        kaydettikten sonra "Oyuna Başla" bölümünden saat yönünde
        ilerleyebilirsiniz. Son olarak, eklediğiniz tüm kartları "Kartları
        Göster" bölümünden görebilirsiniz. İyi Eğlenceleeer!
      </Text>
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
const styles = StyleSheet.create({
  container: {
    backgroundColor: '#FAEFE7',
    flex: 1,
  },
  text: {
    fontSize: 20,
    color: '#51321B',
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
