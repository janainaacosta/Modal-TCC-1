import * as React from 'react';
import Modal from 'react-modal';
import ModalInfo from './modals/info modal';

Modal.setAppElement("#root");

function App() {
  return (
    <ModalInfo/>
  );
}

export default App;
