import React from 'react';
import {
  View,
  ScrollView,
  Text,
  Modal,
  TouchableHighlight,
  Image,
} from 'react-native';
import {styles} from './styles';
import useNameModal from './useNameModal';
import names from './names';

const NameListScreen = () => {
  const {
    modalVisible,
    selectedName,
    selectedImageUrl,
    handleNameClick,
    closeModal,
  } = useNameModal();

  return (
    <View style={styles.container}>
      <ScrollView>
        {names.map((name, index) => (
          <TouchableHighlight key={index} onPress={() => handleNameClick(name)}>
            <View style={styles.nameContainer}>
              <Text style={styles.nameText}>{name}</Text>
            </View>
          </TouchableHighlight>
        ))}
      </ScrollView>

      <Modal
        animationType="slide"
        transparent={false}
        visible={modalVisible}
        onRequestClose={closeModal}>
        <View style={styles.modalContainer}>
          <View style={styles.modalContent}>
            <Text style={styles.modalText}>{selectedName}</Text>
            <Image source={{uri: selectedImageUrl}} style={styles.modalImage} />
            <TouchableHighlight onPress={closeModal}>
              <Text style={styles.closeButton}>X</Text>
            </TouchableHighlight>
          </View>
        </View>
      </Modal>
    </View>
  );
};

export default NameListScreen;
