import * as React from 'react';
import Modal from 'react-modal';

import './newpatrimonio.css'

function NewPatrimonioModal() {
  const [modalIsOpen, setIsOpen] = React.useState(false);

  function openModal() {
    setIsOpen(true);
  }

  function closeModal() {
    setIsOpen(false);
  }

  return (
    <div className="container">
      <button onClick={openModal}>Open Modal</button>
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        className="modal-content-patrimonio"
      >
        <div className='title'>
            
        </div>
        <div className='containerOne'>
            <div>
                <label>Situação</label>
                <select id='selectSituation'>
                    <option id='ativo'>
                        Ativo
                    </option>
                    <option id='manutencao'>
                        Manutenção
                    </option>
                    <option id='danificado'>
                        Danificado
                    </option>
                    <option id='movido'>
                        Movido
                    </option>
                </select>
            </div> 
            <div>
                <label>Código</label>
                <input />
            </div>
        </div>
        <div className='containerTwo'>
                
                <label>Modelo</label>
                <input />
                
                <label>Responsável</label>
                <input />

                <label>Localização</label>
                <select>
                    <option>
                        Salas
                    </option>
                    <option>
                        Laboratórios
                    </option>
                    <option>
                        Oficinas
                    </option>
                    <option >
                        Bibliotecas
                    </option>
                    <option >
                        Refeitório
                    </option>
                </select>
          
        </div>
        <div className='containerThree'>
            <div>
                <label>N° de identificação</label>
                <input />
            </div>
            <div>
                <label>Data de aquisição</label>
                <input />
            </div>
            <div>
                <label>Valor</label>
                <input />
            </div>
        </div>

        <div className='containerButton'>
            <button />
            <button />
        </div>
      </Modal>

    </div>
  );
}

export default NewPatrimonioModal;