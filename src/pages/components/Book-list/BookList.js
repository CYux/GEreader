import React from 'react';
import Item from './Item'


const BookList = ({listData}) => {

  return (
    <aside className='sidebar'>
        <h3>
            Index
        </h3>
        <hr />
        <ul className='theme-doc-sidebar-menu menu__list'>
        {
        listData&&listData.map((item) => {
            const {id, title, link} = item;
            return (
                <Item key={id} title={title} link={link}/>
            )
        })
        }
        </ul>
    </aside>

  )
}

export default BookList