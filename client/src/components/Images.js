import React from 'react'

const Images = ({image}) => {
  return (

    <>
   
    <div key={image.id} className="card w-96 max-h-[500px] bg-base-100 m-5 shadow-xl">
        <figure><img src={image.img} alt='img' /></figure>
        <div className="card-body">
          <h2 className="card-title">{image.name}</h2>
          <p>{image.description}</p>
          <div className="card-actions justify-end">
            <label htmlFor="my-modal-4" className="btn btn-primary">Full Size</label>
          </div>
        </div>
      </div>
      </>

  )
}

export default Images