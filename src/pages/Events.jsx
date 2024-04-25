import HRow from "../components/HRow"
import VRow from "../components/VRow"

function Events() {
    const apiKey = import.meta.env.VITE_TICKETMASTER_API_KEY;
  return (
    <div className="events-wrapper">
          <HRow
        header="Happening this week"
        endpoint={`https://app.ticketmaster.com/discovery/v2/events.json?classificationName=music&dmaId=602&apikey=${apiKey}`}
      />
      <VRow
        header="Trending Events"
        endpoint={`https://app.ticketmaster.com/discovery/v2/events.json?classificationName=sport&dmaId=602&apikey=${apiKey}`}
      />
      <HRow
        header="Comedy"
        endpoint={`https://app.ticketmaster.com/discovery/v2/events.json?classificationName=comedy&dmaId=324&apikey=${apiKey}`}
      />
      <VRow
        header="Concerts"
        endpoint={`https://app.ticketmaster.com/discovery/v2/events.json?classificationName=concert&dmaId=324&apikey=${apiKey}`}
      />
      <HRow
        header="Music"
        endpoint={`https://app.ticketmaster.com/discovery/v2/events.json?classificationName=music&dmaId=324&apikey=${apiKey}`}
      />
      <HRow
        header="Festival"
        endpoint={`https://app.ticketmaster.com/discovery/v2/events.json?classificationName=festival&dmaId=324&apikey=${apiKey}`}
      />
      <VRow
        header="Sports"
        endpoint={`https://app.ticketmaster.com/discovery/v2/events.json?classificationName=sport&dmaId=324&apikey=${apiKey}`}
      />
      <VRow
        header="Categories"
        endpoint={`https://app.ticketmaster.com/discovery/v2/events.json?classificationName=music&dmaId=324&apikey=${apiKey}`}
      />
      <HRow
        header="Family"
        endpoint={`https://app.ticketmaster.com/discovery/v2/events.json?classificationName=theatre&dmaId=324&apikey=${apiKey}`}
      />
    </div>
  )
}

export default Events