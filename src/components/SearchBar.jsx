/* eslint-disable react/jsx-key */
import Chip from "@mui/material/Chip";
import TextField from "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete";
import { useState } from "react";

export default function SearchBar() {
  const fixedOptions = [top100Events[1]];
  const [value, setValue] = useState([
    ...fixedOptions,
    top100Events[13],
    top100Events[2],
  ]);

  return (
    <Autocomplete
      multiple
      id="fixed-tags-demo"
      value={value}
      onChange={(event, newValue) => {
        setValue([
          ...fixedOptions,
          ...newValue.filter((option) => fixedOptions.indexOf(option) === -1),
        ]);
      }}
      options={top100Events}
      getOptionLabel={(option) => option.title}
      renderTags={(tagValue, getTagProps) =>
        tagValue.map((option, index) => (
          <Chip
            label={option.title}
            {...getTagProps({ index })}
            disabled={fixedOptions.indexOf(option) !== -1}
          />
        ))
      }
      style={{
        width: 1200,
        marginTop: 70,
        marginLeft:40,
        marginBottom: 50
      }}
      renderInput={(params) => (
        <TextField {...params} label="Search Events" placeholder="Top Events" />
      )}
    />
  );
}

const top100Events = [
  { title: "Milwaukee Bucks vs. Phoenix Suns", year: 2024 },
  { title: "P!NK: Summer Carnival 2024", year: 2024 },
  { title: "Oklahoma City Thunder vs. Phoenix Suns", year: 2024 },
  { title: "The Shawshank Redemption", year: 2024 },
  { title: "The Shawshank Redemption", year: 2024 },
  { title: "Milwaukee Bucks vs. Phoenix Suns", year: 2024 },
  { title: "P!NK: Summer Carnival 2024", year: 2024 },
  { title: "Oklahoma City Thunder vs. Phoenix Suns", year: 2024 },
  { title: "The Shawshank Redemption", year: 2024 },
  { title: "The Shawshank Redemption", year: 2024 },
  { title: "Milwaukee Bucks vs. Phoenix Suns", year: 2024 },
  { title: "P!NK: Summer Carnival 2024", year: 2024 },
  { title: "Oklahoma City Thunder vs. Phoenix Suns", year: 2024 },
  { title: "The Shawshank Redemption", year: 2024 },
  { title: "Milwaukee Bucks vs. Phoenix Suns", year: 2024 },
  { title: "P!NK: Summer Carnival 2024", year: 2024 },
  { title: "The Shawshank Redemption", year: 2024 },
  { title: "The Shawshank Redemption", year: 2024 },
  { title: "Milwaukee Bucks vs. Phoenix Suns", year: 2024 },
  { title: "The Shawshank2 Redemption", year: 2024 },
  { title: "The Shawshank Redemption", year: 2024 },
];
