import React from 'react'
import { NotesAppBar } from './NotesAppBar'

export const NotesScreen = () => {
  return (
    <div className="notes__main-content">
      <NotesAppBar/>

      <div className="notes__content">

        <input
          type="text"
          placeholder="Some awesome title"
          className="notes__title-input"
        
        />
        <textarea placeholder="What happend today"
                  className="notes__textarea"
        ></textarea>
        <div className="notes__image">
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ4jSkuuYWuRM9Zd-VTsmecjczlBzxa8dhIJw&usqp=CAU"
            alt="Imagen"
          />

        </div>

      </div>

    </div>
  )
}
