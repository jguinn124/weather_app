import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import TextField from "@material-ui/core/TextField";

const api = {
  key: "b3beb547b4350f89d8920d06161e4080",
  base: "https://api.openweathermap.org/data/2.5/",
};

const useStyles = makeStyles((theme) => ({
  bigtitle1: {
    fontSize: "7em",
    fontFamily: "Trispace",
    margin: theme.spacing(0),
    marginBottom: theme.spacing(1),

    [theme.breakpoints.down("md")]: {
      fontSize: "3em",
    },
    [theme.breakpoints.down("xs")]: {
      fontSize: "2em",
    },
  },
  bigtitle2: {
    fontSize: "7em",
    fontFamily: "Trispace",
    margin: theme.spacing(0),
    marginBottom: theme.spacing(7),

    [theme.breakpoints.down("md")]: {
      fontSize: "3em",
      marginBottom: theme.spacing(4),
    },
    [theme.breakpoints.down("xs")]: {
      fontSize: "2em",
      marginBottom: theme.spacing(2),
    },
  },
  searchbar: {
    width: "50ch",
    [theme.breakpoints.down("md")]: {
      width: "30ch",
    },
    [theme.breakpoints.down("xs")]: {
      width: "30ch",
    },
  },
}));

function App() {
  const [query, setQuery] = useState("");
  const [weather, setWeather] = useState({});
  const classes = useStyles();

  const search = (evt) => {
    if (evt.key === "Enter") {
      fetch(`${api.base}weather?q=${query}&units=imperial&APPID=${api.key}`)
        .then((res) => res.json())
        .then((result) => {
          setWeather(result);
          setQuery("");
          console.log(result);
        });
    }
  };

  const DateBuilder = (d) => {
    let months = [
      "January",
      "February",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
      "September",
      "October",
      "November",
      "December",
    ];
    let days = [
      "Sunday",
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
    ];

    let day = days[d.getDay()];
    let date = d.getDate();
    let month = months[d.getMonth()];
    let year = d.getFullYear();

    return `${day} ${month} ${date} ${year}`;
  };

  return (
    <Grid>
      <Grid container justify="center">
        <Grid item xs={12}>
          <h1 className={classes.bigtitle1}>FindMy</h1>
        </Grid>
        <Grid item xs={12}>
          <h1 className={classes.bigtitle2}>CurrentWeather.com</h1>
        </Grid>
        <Grid item>
          <TextField
            type="text"
            id="outlined-basic"
            label="Search"
            variant="outlined"
            className={classes.searchbar}
            onChange={(e) => setQuery(e.target.value)}
            value={query}
            onKeyPress={search}
          />
        </Grid>
      </Grid>
      <div className="app">
        {typeof weather.main != "undefined" ? (
          <div>
            <div>
              <div className="location-box">
                <div className="location">
                  {weather.name}, {weather.sys.country}
                </div>
                <div className="date"> {DateBuilder(new Date())} </div>
              </div>
            </div>
            <div className="weather-box">
              <div className="temp">{Math.round(weather.main.temp)}°F</div>
              <div className="weather">{weather.weather[0].description}</div>
            </div>
          </div>
        ) : (
          ""
        )}
      </div>
    </Grid>
  );
}

export default App;
