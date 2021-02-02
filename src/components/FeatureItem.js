import React from 'react'

export default function FeatureItem(props) {
  return (
    <>
    <li className='feature__item'>
      <div className='feature__item__link' >
        <figure className='feature__item__pic-wrap' >
          {/*eslint-disable-next-line*/}
          <img
            className='feature__item__img'
            alt='Dogood Express'
            src={props.src}
          />
        </figure>
        <div className='feature__item__info'>
          <h5 className='feature__item__text'>{props.text}</h5>
        </div>
      </div>
    </li>
  </>
  )
}
