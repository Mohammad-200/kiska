import React, { useState, useEffect } from 'react';
import './WorkAndContact.css';
import TalkTous from '../components/TalkTous';
import Exchange from '../components/Exchange';
import description from '../data/exchangeDescriptionData'

function Work() {
  const [images, setImages] = useState([]);
  const [exchangeData, setExchangeData] = useState([])


  useEffect(() => {
    const API_KEY = '43371155-202c1fe85c640db88ce474af2';
    const BASE_URL = 'https://pixabay.com/api/';
    const searchQuery = 'technology products';
    const searchQueryExchange = 'activity'
    const perPage = 10;
    const page = 1;

    const url = `${BASE_URL}?key=${API_KEY}&q=${encodeURIComponent(searchQuery)}&image_type=photo&per_page=${perPage}&page=${page}`;

    fetch(url)
      .then(response => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then(data => {
        setImages(data.hits); 
      })
      .catch(error => {
        console.error('There was a problem with your fetch operation:', error);
      });

      //Fetch data for exchange section -->
      const Exchangeurl = `${BASE_URL}?key=${API_KEY}&q=${encodeURIComponent(searchQueryExchange)}&image_type=photo&per_page=4&page=${page}`;
      fetch(Exchangeurl)
        .then(response => {
          if(!response.ok) {
            throw new Error("Couldn't fetch the date")
          }
          return response.json();
        })
        .then(data => { // the description logic
          const newData = data.hits.map((image, index) => {
            return {...image, description: description[index].description}
          })

          setExchangeData(newData); 
      })      
        .catch(error => {
          console.log('There was a problem in the fetch operation:', error)
        })
  }, []);

  return (
    <>
        <h2 className='work-check'>Check out our work.</h2>
        <div className='work-grid-container'>
            {images.map((img, index) => (
            <div key={img.id} className={`item-${index + 1}`} style={{ backgroundImage: `url(${img.largeImageURL})`, backgroundSize: 'cover' }}>
        </div>
      ))}
    </div>
    <TalkTous />
    <Exchange exchangeData={exchangeData}/>
    </>

  );
}

export default Work;
