import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 50,
  },
  nameContainer: {
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalContent: {
    alignItems: 'center',
  },
  modalText: {
    marginBottom: 20,
  },
  modalImage: {
    width: 150,
    height: 220,
    resizeMode: 'contain',
  },
  closeButton: {
    marginTop: 10,
  },
});
