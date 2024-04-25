import { useEffect, useState } from "react";
import Axios from "axios";
import { Link, useNavigate } from 'react-router-dom';

import Chip from "@mui/material/Chip";
import TextField from "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete";

export default function SearchBar() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [value, setValue] = useState([]);
  const apiKey = import.meta.env.VITE_TICKETMASTER_API_KEY;
  const history = useNavigate()
  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const res = await Axios.get(`https://app.ticketmaster.com/discovery/v2/events.json?classificationName=music&dmaId=324&apikey=${apiKey}`); 
        const uniqueImageUrls = {};
        const filteredEvents = res.data._embedded.events.filter((item) => {
          if (!uniqueImageUrls[item.images[0].url]) {
            uniqueImageUrls[item.images[0].url] = true;
            return true;
          }
          return false;
        });
        setData(filteredEvents);
        console.log(data)
      } catch (err) {
        setError(err);
      }
      setLoading(false);
    };

    fetchData();
  }, []);

  return (
    <Autocomplete
      multiple
      id="fixed-tags-demo"
      value={value}
      onChange={(event, newValue) => {
        setValue(newValue);
        if (newValue) {
          console.log(newValue)
          history(`/event/${newValue[0].id}`);
        }
      }}
      options={data} 
      getOptionLabel={(option) => option.name}
      renderTags={(tagValue, getTagProps) =>
        tagValue.map((option, index) => (
          <Chip
            key={index}
            label={option.name}
            {...getTagProps({ index })}
          />
        ))
      }
      style={{
        width: 1200,
        marginTop: 70,
        marginLeft: 40,
        marginBottom: 50
      }}
      renderInput={(params) => (
        <TextField
          {...params}
          label="Search Events"
          placeholder="Top Events"
        />
      )}
    />
  );
}
