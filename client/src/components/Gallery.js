import React, { useState, useEffect } from 'react'
import Images from './Images'
import axios from 'axios'


const Gallery = () => {

    const [images, setImages] = useState([]);

    const getAllImages = async () => {
        try {
            const { data } = await axios.get(process.env.REACT_APP_API_URL + "/images")
            setImages(data.data)
        } catch (error) {
            console.log(error)
        }
    }

    useEffect(() => {
        getAllImages()
    },[])

  return ( 
    <> 
    <div className='carousel rounded-box min-h-screen'>
    <div className='carousel-item' >
      {images.map(image => (
        <Images key={image.id} image={image} />
      ))}
      </div>
    </div> 
  </>
  )
}

export default Gallery