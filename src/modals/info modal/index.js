import * as React from 'react';
import Modal from 'react-modal';
import './modalInfo.css'
import Dropdown from '../../components/dropdown';

import item from '../../assets/chair.png'
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

Modal.setAppElement("#root");


function ModalInfo() {
  const [modalIsOpen, setIsOpen] = React.useState(false);

  function openModal() {
    setIsOpen(true);
  }

  function closeModal() {
    setIsOpen(false);
  }

  return (
    <div className="container">
      <div>
      <button onClick={openModal}>Open Modal</button>
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        className="modal-content"
      >
        <div className='headerModal'>
            <p>Editar Patrimônio</p>
            {/* <FontAwesomeIcon icon="fa-solid fa-x" /> */}
            
        </div>
        <form>
            <div className='containerUp'>
                <div className='containerImage'>
                    <img alt="item" id='item' src={item} />
                </div>
                <div>
                    <div className='containerInputs'>
                        <div>
                            <label>Modelo</label>
                            <input />
                        </div>
                        <div>
                            <label>Situação</label>
                            <Dropdown 
                            
                            />
                        </div>
                    </div>
                    <div>
                        <label>Descrição</label>
                        <textarea />
                    </div>
                </div> 
            </div>


            <div className='containerDown'>
                
                <div className='containerInputs'>
                    <div>
                        <label>Código</label>
                        <input />
                    </div>
                    <div>
                        <label>N° de identificação</label>
                        <input />
                    </div>
                    <div>
                        <label>Localização</label>
                        <input />
                    </div>
                </div>
                <div className='containerInputs'>
                    <div>
                        <label>Responsável</label>
                        <input />
                    </div>
                    <div>
                        <label>Valor</label>
                        <input />
                    </div>
                    <div>
                        <label>Data de aquisição</label>
                        <input />
                    </div>
                </div>
            </div>


            <div className='containerButtons'>
                <button id='back'>Voltar</button>
                <button id='delete'> Excluir</button>
                <button id='edit'>Editar</button>
            </div>
        </form>
      </Modal>
    </div>
    </div>
  );
}

export default ModalInfo;
