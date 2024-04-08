import {useState} from 'react';

const useNameModal = () => {
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

  const closeModal = () => {
    setModalVisible(false);
  };

  return {
    modalVisible,
    selectedName,
    selectedImageUrl,
    handleNameClick,
    closeModal,
  };
};

export default useNameModal;
