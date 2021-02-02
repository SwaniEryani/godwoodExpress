import React from 'react'

export default function FeatureItem(props) {
  return (
    <>
    <li className='cards__item'>
      <div className='cards__item__link' >
        <figure className='cards__item__pic-wrap' >
          {/*eslint-disable-next-line*/}
          <img
            className='cards__item__img'
            alt='Travel Image'
            src={props.src}
          />
        </figure>
        <div className='cards__item__info'>
          <h5 className='cards__item__text'>{props.text}</h5>
        </div>
      </div>
    </li>
  </>
  )
}
