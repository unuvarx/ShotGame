import React, {useState} from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Dimensions,
  Button,
} from 'react-native';
import {useSelector} from 'react-redux';

const SimpleModal = props => {
  closeModal = (bool, data) => {
    props.changeModalVisible(bool);
    props.setData(data);
  };
  const {GeneralResponse} = useSelector(state => state);
  const listLength = GeneralResponse.task.length;
  const getRandomNumber = () => {
    return Math.floor(Math.random() * listLength);
  };
  const [number, setNumber] = useState(getRandomNumber());
  let data = GeneralResponse.task;
  return (
    <TouchableOpacity disabled={true} style={styles.container}>
      <View style={styles.mainView}>
        <Text style={styles.title}> GÖREV {data[number].id} </Text>
        <View style={styles.modal}>
          <Text style={styles.modalText}> {data[number].taskName} </Text>
        </View>
        <TouchableOpacity
          onPress={() => closeModal(false)}
          style={styles.endTask}>
          <Text style={styles.endTaskText}>Görevi Bitir!</Text>
        </TouchableOpacity>
      </View>
    </TouchableOpacity>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  modal: {
    backgroundColor: '#9A7254',
    width: '100%',
    height: '80%',
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 2,
    borderColor: '#51321B',
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10,
  },
  modalText: {
    fontSize: 20,
    color: '#51321B',
  },
  mainView: {
    backgroundColor: '#51321B',
    width: '90%',
    height: '70%',
    alignItems: 'center',
    justifyContent: 'flex-end',
    borderWidth: 2,
    borderColor: '#51321B',
    borderRadius: 10,
    marginTop: '20%',
  },
  title: {
    justifyContent: 'center',
    alignItems: 'center',
    color: '#FAEFE7',
    fontSize: 25,
  },
  endTask: {
    height: '10%',
    justifyContent: 'center',
  },
  endTaskText: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#FAEFE7',
  },
});
export {SimpleModal};
