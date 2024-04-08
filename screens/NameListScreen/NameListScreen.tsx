import React, {useState} from 'react';
import {
  View,
  ScrollView,
  Text,
  Modal,
  TouchableHighlight,
  Image,
} from 'react-native';
import names from './names';

const NameListScreen = () => {
  const [modalVisible, setModalVisible] = useState(false);
  const [selectedName, setSelectedName] = useState('');
  const [selectedImageUrl, setSelectedImageUrl] = useState('');

  const handleNameClick = (name: string) => {
    setSelectedName(name);
    setSelectedImageUrl(
      `https://api.lorem.space/image/movie?w=150&h=220&name=${name.replace(
        ' ',
        '+',
      )}`,
    );
    setModalVisible(true);
  };

  return (
    <View style={{flex: 1, paddingTop: 50}}>
      <ScrollView>
        {names.map((name, index) => (
          <TouchableHighlight key={index} onPress={() => handleNameClick(name)}>
            <View
              style={{
                padding: 10,
                borderBottomWidth: 1,
                borderBottomColor: '#ccc',
              }}>
              <Text>{name}</Text>
            </View>
          </TouchableHighlight>
        ))}
      </ScrollView>

      <Modal
        animationType="slide"
        transparent={false}
        visible={modalVisible}
        onRequestClose={() => {
          setModalVisible(false);
        }}>
        <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
          <View style={{alignItems: 'center'}}>
            <Text style={{marginBottom: 20}}>{selectedName}</Text>
            <Image
              source={{uri: selectedImageUrl}}
              style={{width: 150, height: 220, resizeMode: 'contain'}}
            />
            <TouchableHighlight
              onPress={() => {
                setModalVisible(false);
              }}>
              <Text>Cerrar</Text>
            </TouchableHighlight>
          </View>
        </View>
      </Modal>
    </View>
  );
};

export default NameListScreen;
