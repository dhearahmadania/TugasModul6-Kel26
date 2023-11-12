import React, { useState, useEffect } from "react";
import { useNavigate } from 'react-router-dom'; 
import axios from "axios";

// Components
import Card from "../components/card";
import Modal from "../components/modal";

export default function LandingPage() {
    
    const [data, setData] = useState(null);
    const [isLoaded, setisLoaded] = useState(false);
    const [isLoading, setIsLoading] = useState(false);
    const [query, setQuery] = useState("One Piece");

    const navigate = useNavigate();

    // Modal
    const [modalShow, setModalShow] = useState(false);
    const [modalItem, setModalItem] = useState(null);
    
    const fetchDetailData = async (itemId) => {
        try {
          const response = await axios.get(
            `hhttps://imdb8.p.rapidapi.com/title/get-details`,
            {
              params: { tconst: itemId },
              headers: {
                "x-rapidapi-host": "imdb8.p.rapidapi.com",
                "x-rapidapi-key": "e272a5d341msh90bbe0d1d033090p1647ddjsnc1bff5051a24",
              },
            }
          );
          if (response.status === 200) {
            // Handle the detailed data as needed
            console.log("Detailed data:", response.data);
          }
        } catch (err) {
          console.error("Error fetching detailed data:", err);
        }
      };
    
    useEffect(() => {
        const fetchData = async (query) => {
        setIsLoading(true);
        try {
            const response = await axios.get(
                "https://imdb8.p.rapidapi.com/auto-complete", {
                  params: { q: query },
                  headers: {
                    "x-rapidapi-host": "imdb8.p.rapidapi.com",
                    "x-rapidapi-key": "e272a5d341msh90bbe0d1d033090p1647ddjsnc1bff5051a24",
                  },
                }
              );
            if (response.status === 200) {
                setData(response.data);
                setisLoaded(true);
                setIsLoading(false);
            }
        } catch (err) {
        console.log(err);
        setIsLoading(false);
        }
        };
    if (!isLoaded) {
    fetchData(query);
    }
    }, [isLoaded, query]);
        const onSearch = (e) => {
        if (e.key === "Enter") {
        setisLoaded(false);
        setQuery(e.target.value);
    }
    };
    const handleClick = (item) => {
        // Fetch detailed information when a card is clicked
        fetchDetailData(item.id);

        // Use the navigate function to go to the DetailPage
        navigate(`/detail/${item.id}`);

        setModalShow(!modalShow);
        setModalItem(item);
    };
    return (
        <main>
            <input
                type="text"
                placeholder="Search film by name"
                onKeyDown={(e) => onSearch(e)}
            />
            <h3 className="title">Search : {query}</h3>
            {!data || isLoading ? (
                <p>Loading...</p>
            ) : (
                <div className="card-container">
                {data.d.map((item, index) => {
                    return (
                    <Card data={item} key={index} onClick={()=>handleClick(item)} />
                    );
                })}
                </div>
            )}
            <Modal
                data={modalItem}
                isShow={modalShow}
                onCancel={() => setModalShow(false)}
            />
        </main>
    );
}
