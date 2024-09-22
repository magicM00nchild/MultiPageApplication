import React, { useState } from 'react';
import './Tile.css';
import Modal from '../Modal/Modal';

interface TileProps {
  width?: string;
  height?: string;
  borderRadius?: string;
  backgroundColor?: string;
  type: string;
  content?: any;
  imageSrc?: string;
}

const Tile: React.FC<TileProps> = ({
  borderRadius = '10px',
  backgroundColor = '#3498db',
  type,
  content,
  imageSrc,
}) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  if (!imageSrc) {
    imageSrc = require('../../Pictures/images.png');
  }

  return (
    <div>
      <div className={`tile ${type}`} onClick={openModal}>
        {content ? (
          <div className="tilePicture">
            {imageSrc && <img src={imageSrc} alt="Tile" />}
          </div>
        ) : null}
        {content ? (
          <div className="tileInfo">
            <div className="title">
              <div>{content.title}</div>
            </div>
            <div className="info">
              <div> {content.info} </div>
            </div>
          </div>
        ) : null}
      </div>
      <Modal show={isModalOpen} handleClose={closeModal}>
        <p>Dies ist der Inhalt des Pop-ups!</p>
      </Modal>
    </div>
  );
};

export default Tile;
