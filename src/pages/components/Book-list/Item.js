import React from 'react'

const item = ({title, link}) => {

  return (
    <li className='book-li theme-doc-sidebar-item-link theme-doc-sidebar-item-link-level-1 menu__list-item'>
      <a className='book-link' href={link}>
        <span>{title}</span></a>
    </li>
  )
}

export default item