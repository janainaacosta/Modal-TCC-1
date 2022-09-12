import * as React from 'react';
import Modal from 'react-modal';
import ModalInfo from './modals/info modal';
import NewPatrimonioModal from './modals/newpatrimoniomodal';

Modal.setAppElement("#root");

function App() {
  return (
    // <ModalInfo/>
    <NewPatrimonioModal />
  );
}

export default App;
