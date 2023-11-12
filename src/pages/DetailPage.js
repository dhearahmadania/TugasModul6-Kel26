import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import './DetailPage.css';

const DetailPage = () => {
  const { id } = useParams();
  const [detailData, setDetailData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchDetailData = async () => {
      setIsLoading(true);
      try {
        const response = await axios.get(
          'https://imdb8.p.rapidapi.com/title/get-details',
          {
            params: { tconst: id },
            headers: {
              'x-rapidapi-host': 'imdb8.p.rapidapi.com',
              'x-rapidapi-key': 'e272a5d341msh90bbe0d1d033090p1647ddjsnc1bff5051a24',
            },
          }
        );
        console.log(response.data);

        // Modify this condition based on the actual response structure
        if (response.status === 200 && response.data && response.data.title) {
          setDetailData(response.data);
          setIsLoading(false);
        } else {
          console.log('Invalid response format or missing data');
          setIsLoading(false);
        }
      } catch (err) {
        console.log(err);
        setIsLoading(false);
      }
    };

    fetchDetailData();
  }, [id]);

  return (
    <div className="container">
      {isLoading ? (
        <p className="loading">Loading...</p>
      ) : (
        <div>
          <h2>{detailData?.title}</h2>
          {detailData?.image?.url && (
            <img src={detailData.image.url} alt={detailData.title} />
          )}
          <h3>Tahun Rilis:</h3>
          <p>{detailData.year}</p>
          <h3>Durasi:</h3>
          <p>{detailData.runningTimeInMinutes}</p>
          <h3>Title Type:</h3>
          <p>{detailData.titleType}</p>
        </div>
      )}
    </div>
  );
};

export default DetailPage;