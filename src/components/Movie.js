import React from 'react'

const Movie = ({movie}) => {
 const imageUrl = 'https://image.tmdb.org/t/p/w185';

  return (
    <div className=' max-w-[1000px] flex items-center bg-gray-100 p-2 rounded-sm'>
     <img className='w-36 h-48 object-cover rounded-lg' src={imageUrl + movie.poster_path} alt="" />
     <div className='ml-8 py-4'>
     <h2 className=' font-bold text-lg'>{movie.title}</h2>
     <p className='py-2'>{movie.overview}</p>
     <div className='flex space-x-3 mt-2'>
     <button className="px-3 bg-green-400 rounded-full text-white shadow-md">Play</button>
     <button className="px-3 rounded-full bg-gray-100 shadow-md">View</button>
     </div>
    </div>
    </div>
  )
}

export default Movie