import { Logo } from '../Logo';
import './Footer.scss';
import React from 'react';

export const Footer: React.FC = () => {
  return (
    <footer className="footer">
      <div className="footer__container">
        <Logo />
        <div className="footer__link">
          <a
            href="https://github.com/"
            className="footer__nav-link"
            target="_blank"
            rel="noreferrer"
          >
            Github
          </a>
          <a
            href="https://gmail.com/"
            className="footer__nav-link"
            target="_blank"
            rel="noreferrer"
          >
            Contacts
          </a>
          <a
            href="#"
            className="footer__nav-link"
            target="_blank"
            rel="noreferrer"
          >
            Rights
          </a>
        </div>
        <div className="footer__button-box">
          <div className="footer__button-text">Back to top</div>
          <button
            className="footer__button"
            onClick={() => {
              window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
            }}
          >
            <div className="footer__icon"></div>
          </button>
        </div>
      </div>
    </footer>
  );
};
