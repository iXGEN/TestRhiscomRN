import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 50,
    backgroundColor: '#1a5e83',
  },
  nameContainer: {
    padding: 10,
    borderBottomWidth: 1.5,
    borderBottomColor: 'white',
  },
  nameText: {
    color: 'white',
    fontSize: 20,
    fontWeight: 'bold',
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
    fontSize: 28,
    marginBottom: 24,
    color: '#1a5e83',
    fontWeight: 'bold',
  },
  modalImage: {
    width: 150,
    height: 220,
    resizeMode: 'contain',
  },
  closeButton: {
    color: 'red',
    fontSize: 32,
    fontWeight: 'bold',
    marginTop: 10,
  },
});
