import React from 'react';
import { Breadcrumbs } from '../../components/Breadcrumbs';

import './Item.scss';

export const Item: React.FC = () => {
  const baseUrl = 'https://project-nice-gadgets.onrender.com/';

  return (
    <div className="container">
      <Breadcrumbs />
      <div className="back-block">
        <div className="back-block__img"></div>
        <p className="back-block__text">Back</p>
      </div>
      <h1 className="item-page-title">
        Apple iPhone 11 Pro Max 64GB Gold (iMT9G2FS/A)
      </h1>
      <div className="visual-block">
        <div className="visual-block__gallery gallery">
            <div className="gallery__wrapper wrapper wrapper--selected">
              <img
                src={`${baseUrl}img/phones/apple-iphone-xr/yellow/00.jpg`}
                alt="phone_icon_1"
                className="wrapper__img"
              />
            </div>
            <div className="gallery__wrapper wrapper">
              <img
                src={`${baseUrl}img/phones/apple-iphone-xr/yellow/01.jpg`}
                alt="phone_icon_2"
                className="wrapper__img"
              />
            </div>
            <div className="gallery__wrapper wrapper">
              <img
                src={`${baseUrl}img/phones/apple-iphone-xr/yellow/02.jpg`}
                alt="phone_icon_3"
                className="wrapper__img"
              />
            </div>
            <div className="gallery__wrapper wrapper">
              <img
                src={`${baseUrl}img/phones/apple-iphone-xr/yellow/03.jpg`}
                alt="phone_icon_4"
                className="wrapper__img"
              />
            </div>
            <div className="gallery__wrapper wrapper">
              <img
                src={`${baseUrl}img/phones/apple-iphone-xr/yellow/04.jpg`}
                alt="phone_icon_5"
                className="wrapper__img"
              />
            </div>
        </div>
        <div className="visual-block__poster poster">
          <img
            src={`${baseUrl}img/phones/apple-iphone-xr/yellow/00.jpg`}
            alt="main__img"
            className="poster__img"
          />
        </div>
        <div className="visual-block__specification specification">
          <div className="specification__identificator identificator">
            <p className="identificator__text">Available colors</p>
            <p className="identificator__id">ID: 802390</p>
          </div>
          <div className="specification__color-switch color-switch">
            <div
              className="color-switch__border color-switch__border--selected">
              <div className="color-switch__color1"></div>
            </div>
            <div className="color-switch__border">
              <div className="color-switch__color2"></div>
            </div>
            <div className="color-switch__border">
              <div className="color-switch__color3"></div>
            </div>
            <div className="color-switch__border">
              <div className="color-switch__color4"></div>
            </div>
          </div>
          <div className="specification__line"></div>
          <div className="specification__capacity capacity">
            <div className="capacity__text">Select capacity</div>
            <div className="capacity__value value">
              <button className="value__button value__button--selected">
                64 GB
              </button>
              <button className="value__button">256 GB</button>
              <button className="value__button">512 GB</button>
            </div>
          </div>
          <div className="specification__line"></div>
          <div className="specification__price price">
            <span className="price__discount">$799</span>
            <span className="price__full">$1199</span>
          </div>
          <div className="specification__buttons buttons">
            <button className="buttons__cart">Add to cart</button>
            <button className="buttons__favourite"></button>
          </div>
          <div className="specification__characteristics characteristics">
            <div className="characteristics__characteristic characteristic">
              <p className="characteristic__key">Screen</p>
              <p className="characteristic__value">6.5” OLED</p>
            </div>
            <div className="characteristics__characteristic characteristic">
              <p className="characteristic__key">Resolution</p>
              <p className="characteristic__value">2688x1242</p>
            </div>
            <div className="characteristics__characteristic characteristic">
              <p className="characteristic__key">Processor</p>
              <p className="characteristic__value">6.5” OLED</p>
            </div>
            <div className="characteristics__characteristic characteristic">
              <p className="characteristic__key">RAM</p>
              <p className="characteristic__value">3 GB</p>
            </div>
          </div>
        </div>
      </div>
      <div className="description-block">
        <div className="description-block__about about">
          <h3 className="about__title">About</h3>
          <div className="about__line"></div>
          <div className="about__section section">
            <h4 className="section__title">And then there was Pro</h4>
            <p className="section__text">
              A transformative triple-camera system that
              adds tons of capability without complexity.
            </p>
            <p className="section__text">
              An unprecedented leap in battery life.
              And a mind-qblowing chip that doubles down on machine learning
              and pushes the boundaries of what a smartphone can do.
              Welcome to the first iPhone powerful enough to be called Pro.
            </p>
          </div>
          <div className="about__section section">
            <h4 className="section__title">Camera</h4>
            <p className="section__text">
              Meet the first triple-camera system to combine cutting-edge
              technology with the legendary simplicity of iPhone.
              Capture up to four times more scene.
              Get beautiful images in drastically lower light.
              Shoot the highest-quality video in a smartphone —
              then edit with the same tools you love for photos.
              You`ve never shot with anything like it.
            </p>
          </div>
          <div className="about__section section">
            <h4 className="section__title">
              Shoot it. Flip it. Zoom it. Crop it.
              Cut it. Light it. Tweak it. Love it.
            </h4>
            <p className="section__text">
              iPhone 11 Pro lets you capture videos that are
              beautifully true to life, with greater detail and smoother motion.
              Epic processing power means it can shoot 4K video
              with extended dynamic range and cinematic video
              stabilization — all at 60 fps.
              You get more creative control, too, with four times
              more scene and powerful new editing tools to play with.
            </p>
          </div>
        </div>
        <div className="description-block__about about">
          <h3 className="about__title">Tech specs</h3>
          <div className="about__line"></div>
          <div className="specs__features features">
            <div className="features__feature feature">
              <p className="feature__key">Screen</p>
              <p className="feature__value">6.5” OLED</p>
            </div>
          </div>
          <div className="specs__features features">
            <div className="features__feature feature">
              <p className="feature__key">Resolution</p>
              <p className="feature__value">2688x1242</p>
            </div>
          </div>
          <div className="specs__features features">
            <div className="features__feature feature">
              <p className="feature__key">Processor</p>
              <p className="feature__value">Apple A12 Bionic</p>
            </div>
          </div>
          <div className="specs__features features">
            <div className="features__feature feature">
              <p className="feature__key">RAM</p>
              <p className="feature__value">3 GB</p>
            </div>
          </div>
          <div className="specs__features features">
            <div className="features__feature feature">
              <p className="feature__key">Built in memory</p>
              <p className="feature__value">64 GB</p>
            </div>
          </div>
          <div className="specs__features features">
            <div className="features__feature feature">
              <p className="feature__key">Camera</p>
              <p className="feature__value">12 Mp + 12 Mp + 12 Mp (Triple)</p>
            </div>
          </div>
          <div className="specs__features features">
            <div className="features__feature feature">
              <p className="feature__key">Zoom</p>
              <p className="feature__value">Optical, 2x</p>
            </div>
          </div>
          <div className="specs__features features">
            <div className="features__feature feature">
              <p className="feature__key">Cell</p>
              <p className="feature__value">GSM, LTE, UMTS</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
