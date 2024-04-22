import { Carousel } from "react-responsive-carousel";
import { useEffect, useState } from "react";
import Axios from "axios";
import "react-responsive-carousel/lib/styles/carousel.min.css";

function Header() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  
  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await Axios.get("https://app.ticketmaster.com/discovery/v2/events.json?classificationName=music&dmaId=324&apikey=mQfvObMSNbdIhlblNEgoYEC2pAdTm0sb");
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
    <div className="header-container">
      {loading ? (
        <p>Loading...</p>
      ) : error ? (
        <p>Error: {error.message}</p>
      ) : (
        <Carousel autoPlay infiniteLoop showThumbs={false} showStatus={false} interval={4000} stopOnHover={false}>
          {data.map((item) => (
            <div key={item.id} style={{ backgroundImage: `linear-gradient(to left, transparent, rgba(37, 37, 37, 0.61), #111), url(${item.images[0].url})`,
            height:620,
            
            
            }}>
              <h1 className="header-text">{item.name}</h1>
            </div>
          ))}
        </Carousel>
      )}
    </div>
  );
}

export default Header;
