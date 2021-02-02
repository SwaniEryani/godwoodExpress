import React from 'react';
import FeatureItem from './FeatureItem';
import'./FeatureItems.css';

export default function FeatureItems() {
  return (
    <div className='feature'>
      <h1>Features</h1>
      <div className='feature__container'>
        <div className='feature__wrapper'>
          <ul className='feature__items'>
            <FeatureItem
              src='../images/img-1.jpg'
              text='Apple Pay'
            />
            <FeatureItem
              src='images/img-5.jpg'
              text='Alexa-supported at the pump'
            />
            <FeatureItem
              src='images/img-6.jpg'
              text='Convenience Store'
            />
          </ul>
          <ul className='feature__items'>
            <FeatureItem
              src='../images/img-2.jpg'
              text='Synergy Supreme+ Premium Gasoline'
            />
            <FeatureItem
              src='images/img-3.jpg'
              text='Propane'
            />
            <FeatureItem
              src='images/img-5.jpg'
              text='Synergy Diesel Efficient & Synergy Regular Gasoline'
            />
          </ul>
          <ul className='feature__items'>
            <FeatureItem
              src='../images/img-12.jpg'
              text='Food and Drinks'
            />
            <FeatureItem
              src='images/img-11.jpg'
              text='Synergy Extra Gasoline'
            />
            <FeatureItem
              src='images/img-4.jpg'
              text='ATM'
            />
          </ul>
          <ul className='feature__items'>
            <FeatureItem
              src='../images/img-9.jpg'
              text='Vacuum & Pay at the Pump'
            />
            <FeatureItem
              src='images/img-2.jpg'
              text='Exxon Mobil Rewards+'
            />
            <FeatureItem
              src='images/img-13.jpg'
              text='Beverages'
            />
          </ul>
          <ul className='feature__items'>
            <FeatureItem
              src='../images/img-8.jpg'
              text='Tobacco products'
            />
            <FeatureItem
              src='images/img-15.jpg'
              text='Groceries & Snacks'
            />
            <FeatureItem
              src='images/img-14.jpg'
              text='Cappuccino'
            />
          </ul>
          
        </div>
      </div>
    </div>
  )
}
