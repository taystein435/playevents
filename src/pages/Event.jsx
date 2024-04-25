import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Axios from "axios";
function Event() {
  const [eventData, setEventData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const { id } = useParams();
  const apiKey = import.meta.env.VITE_TICKETMASTER_API_KEY;
  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await Axios.get(
          `https://app.ticketmaster.com/discovery/v2/events/${id}.json?apikey=${apiKey}`
        );
        setEventData(res.data);
        console.log(res.data.url)
      } catch (err) {
        setError(err);
      }
      setLoading(false);
    };

    fetchData();
  }, [id]);

  const formatDate = (dateTimeString) => {
    const date = new Date(dateTimeString);
    const options = { day: "numeric", month: "long", hour: "numeric", minute: "numeric", hour12: true };
    const formattedDate = date.toLocaleDateString("en-GB", options);
    return formattedDate;
  };

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error.message}</div>;

  return (
    <div>
      {eventData && (
        <div key={eventData.id} className="event-container" style={{ backgroundImage: `url(${eventData.images && eventData.images[0]?.url})` }}>
          <h1 className="event-text">{eventData.name}</h1>
        </div>
      )}
      <h2 className="event-heading">Venue Information</h2>
      <p className="event-two">{eventData.info}</p>
      <h2 className="event-heading">Date and Time</h2>
      <span className="event-two">{eventData.dates && eventData.dates.start && formatDate(eventData.dates.start.dateTime)}</span>
      <h2 className="event-two">Price</h2>
      <span className="event-two">
        £{eventData.priceRanges && eventData.priceRanges[0]?.min}
      </span>
      <h2 className="event-heading">Location</h2>
      <span className="event-two">
        {eventData._embedded && eventData._embedded.venues && eventData._embedded.venues[0]?.name}
      </span>
      <Link to={eventData.url}>
                    <button>BOOK NOW</button>
                  </Link>
    </div>
  );
}

export default Event;
