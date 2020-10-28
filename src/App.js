import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";

//Search Box
import TextField from "@material-ui/core/TextField";
import Autocomplete from "@material-ui/lab/Autocomplete";
//import Button from "@material-ui/core/Button";

//card
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";

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
  root: {
    minWidth: 275,
  },
  bullet: {
    display: "inline-block",
    margin: "0 2px",
    transform: "scale(0.8)",
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
  weathercontent: {
    paddingTop: "50px",
  },
  searchButton: {
    fontFamily: "Trispace",
    fontSize: 28,
    backgroundColor: "#E0E0E0",
  },
  searchBlock: {
    padding: theme.spacing(2),
  },
  searchButtonSpacing: {
    padding: theme.spacing(4),
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

  const top100Films = [
    { title: "New York, NY, US" },
    { title: "Chicago, IL, US" },
    { title: "St. Louis, MO, US" },
    { title: "Columbia, MO, US" },
    { title: "Kansas City, MO, US" },
    { title: "Los Angeles, CA, US" },
    { title: "Houston, TX, US" },
    { title: "Phoenix, AZ, US" },
    { title: "Philadelphia, PA, US" },
    { title: "San Antonio, TX US" },
    { title: "San Diego, CA US" },
    { title: "San Jose, CA  US" },
    { title: "Austin, TX  US" },
    { title: "Fort Worth, TX  US" },
    { title: "Jacksonville, FL  US" },
    { title: "Columbus, OH  US" },
    { title: "Charlotte, NC, US" },
    { title: "San Francisco, CA  US" },
    { title: "Indianapolis, IN  US" },
  ];

  return (
    <Grid>
      <Grid container justify="center" direction="row">
        <Grid item xs={12}>
          <h1 className={classes.bigtitle1}>FindMy</h1>
        </Grid>
        <Grid item xs={12}>
          <h1 className={classes.bigtitle2}>CurrentWeather.com</h1>
        </Grid>
        <Grid container justify="center" className={classes.searchBlock}>
          <Grid item>
            <Autocomplete
              freeSolo
              id="outlined-basic"
              className={classes.searchbar}
              onChange={(e) => setQuery(e.target.value)}
              value={query}
              onKeyPress={search}
              options={top100Films.map((option) => option.title)}
              renderInput={(params) => (
                <TextField
                  {...params}
                  variant="outlined"
                  label="Enter a Location"
                />
              )}
            />
          </Grid>
          <Grid
            container
            justify="center"
            className={classes.searchButtonSpacing}
          >
            {/* 
            <Grid item>
              <Button
                className={classes.searchButton}
                value={query}
                onClick={(e) => {
                  setQuery(e.target.value);
                  console.log("yes");
                  console.log(e.target.value);
                  //search();
                }}
              >
                Search
              </Button>
            </Grid>
            */}
          </Grid>
        </Grid>
      </Grid>
      <Grid container justify="center" className={classes.weathercontent}>
        {typeof weather.main != "undefined" ? (
          <Card className={classes.root}>
            <CardContent>
              <Typography
                className={classes.title}
                color="textSecondary"
                gutterBottom
              >
                {DateBuilder(new Date())}
              </Typography>
              <Typography variant="h5" component="h2">
                <div>
                  <div>{Math.round(weather.main.temp)}°F</div>
                  {weather.weather[0].main}
                </div>
              </Typography>
              <Typography variant="body2" component="p">
                {weather.name + ", "}
                {weather.sys.country}
              </Typography>
            </CardContent>
          </Card>
        ) : (
          ""
        )}{" "}
      </Grid>
    </Grid>
  );
}

export default App;
