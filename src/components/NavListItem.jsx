import React from 'react'
import './navListItem.css'

function NavListItem({nav, activateTag}) {
  return (
    <li><a onClick={()=>activateTag(nav.id)} className={nav.active ? 'active' : ''} href={nav.link}>{nav.name}</a></li>
  )
}

export default NavListItem
