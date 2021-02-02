import React from 'react';
import FeatureItem from './FeatureItem';
import'./FeatureItems.css';

export default function FeatureItems() {
  return (
    <div className='cards'>
      <h1>Features</h1>
      <div className='cards__container'>
        <div className='cards__wrapper'>
          <ul className='cards__items'>
            <FeatureItem
              src='../images/img-9.jpg'
              text='Apple Pay'
            />
            <FeatureItem
              src='images/img-2.jpg'
              text='Alexa-supported at the pump'
            />
            <FeatureItem
              src='images/img-2.jpg'
              text='Convenience Store'
            />
          </ul>
          <ul className='cards__items'>
            <FeatureItem
              src='../images/img-9.jpg'
              text='Synergy Supreme+ Premium Gasoline'
            />
            <FeatureItem
              src='images/img-2.jpg'
              text='Propane'
            />
            <FeatureItem
              src='images/img-2.jpg'
              text='Synergy Diesel Efficient'
            />
          </ul>
          <ul className='cards__items'>
            <FeatureItem
              src='../images/img-9.jpg'
              text='Food and Drinks'
            />
            <FeatureItem
              src='images/img-2.jpg'
              text='Synergy Regular Gasoline'
            />
            <FeatureItem
              src='images/img-2.jpg'
              text='Synergy Extra Gasoline'
            />
          </ul>
          <ul className='cards__items'>
            <FeatureItem
              src='../images/img-9.jpg'
              text='Vacuum'
            />
            <FeatureItem
              src='images/img-2.jpg'
              text='Exxon Mobil Rewards+'
            />
            <FeatureItem
              src='images/img-2.jpg'
              text='Air Tower / Air'
            />
          </ul>
          <ul className='cards__items'>
            <FeatureItem
              src='../images/img-9.jpg'
              text='Pay at the Pump'
            />
            <FeatureItem
              src='images/img-2.jpg'
              text='ATM'
            />
            <FeatureItem
              src='images/img-2.jpg'
              text='Kerosene'
            />
          </ul>
          
        </div>
      </div>
    </div>
  )
}
