import React from 'react';
import { Primary } from '../Buttons/Primary';
import './Modal.scss';

export const Modal: React.FC = () => {
  return (
    <div className="modal">
      <div className="modal__background">
        <div className="mobal__content">
          <div className="modal__content-container">
            <p className="modal__content-icon">🎉</p>
            <h1 className="modal__content-heading">Success</h1>
            <p className="modal__content-text">
              We received your purchase request.
              <br /> We will be in touch shortly!
            </p>
            <Primary>Close</Primary>
          </div>
        </div>
      </div>
    </div>
  );
};
