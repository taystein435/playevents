/* eslint-disable react/prop-types */
import { useEffect, useState } from "react";
import Axios from "axios";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

function VRow({ header, endpoint }) {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await Axios.get(endpoint);
        const uniqueImageUrls = {};
        const filteredEvents = res.data._embedded.events.filter((item) => {
          if (!uniqueImageUrls[item.images[0].url]) {
            uniqueImageUrls[item.images[0].url] = true;
            return true;
          }
          return false;
        });

        setData(filteredEvents);
      } catch (err) {
        setError(err);
      }
      setLoading(false);
    };

    fetchData();
  }, []);

  return (
    <div className="row-wrapper">
      <h1 className="row-header">{header}</h1>
      <div className="vrow-container">
        {data.map((event) => (
          <Link key={event.id} to={`/event/${event.id}`} className="vrow-item-link">
            <div className="vrow-item">
              <img src={event.images[0].url} alt={event.name} className="vrow-image" />
              <span className="vrow-text">{event.name}</span>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}

export default VRow;
