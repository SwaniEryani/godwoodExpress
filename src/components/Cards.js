import React from "react";
import CardItem from "./CardItem";
import './Cards.css';

export default function Cards() {
  return (
    <div className='cards'>
      <h1>Check out Dogwood express gas station </h1>
      <div className='cards__container'>
        <div className='cards__wrapper'>
          <ul className='cards__items'>
            <CardItem
              src='../images/img-9.jpg'
              text='Explore Dogwood express '
              label='About us'
              path='/about'
            />
            <CardItem
              src='images/img-2.jpg'
              text='Find our location'
              label='Location'
              path='/location'
            />
          </ul>
          <ul className='cards__items'>
            <CardItem
              src='images/img-3.jpg'
              text='We have great features'
              label='features'
              path='/features'
            />
            <CardItem
              src='images/img-4.jpg'
              text='Do you want to know more? '
              label='Contact'
              path='/contact-us'
            />
            </ul>
            <ul>
            <CardItem
              src='images/img-8.jpg'
              text='Gallery'
              label='Gallery'
              path='/gallery'
            />
          </ul>
        </div>
      </div>
    </div>
  );
}
