import React, { useState } from 'react';
import AutoCompleteText from './AutoCompleteText.js';
import cities from './cities.js'

<<<<<<< Updated upstream

const api = {
	key: "b3beb547b4350f89d8920d06161e4080",
	base: "https://api.openweathermap.org/data/2.5/"
}

function App() {
=======
//Search Box
import TextField from "@material-ui/core/TextField";
import Autocomplete from "@material-ui/lab/Autocomplete";

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
      marginBottom: theme.spacing(2),
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
  weathercontent: {
    paddingTop: "50px",
    padding: "60px",
  },

  searchBlock: {
    padding: theme.spacing(1),
  },
  text: {
    fontFamily: "Trispace",
    fontSize: 15,
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
          console.log("test");
          console.log(result.message);
        });
    }
  };
>>>>>>> Stashed changes

	const [query, setQuery] = useState('');
	const [weather, setWeather] = useState({});

	const search = evt => {
		if (evt.key === "Enter") {
			fetch(`${api.base}weather?q=${query}&units=imperial&APPID=${api.key}`)
			.then(res => res.json())
			.then(result => {
				setWeather(result);
				setQuery('');
				console.log(result);
			});
		}

	}

<<<<<<< Updated upstream
	const DateBuilder = (d) => {
		let months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    	let days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
	
		let day = days[d.getDay()];
		let date = d.getDate();
		let month = months[d.getMonth()];
		let year = d.getFullYear();

		return `${day} ${month} ${date} ${year}`
	}


  return (
    <div className="app">
		<main>
			<div className="search-box">
				<div>
					<AutoCompleteText items={cities} />

					<input 
					type="text"
					className="search-bar"
					placeholder="Search"
					onChange={e => setQuery(e.target.value)}
					value={query}
					onKeyPress={search}
					/>
				</div>
					
			</div>


			{(typeof weather.main != "undefined") ? (
			<div>
				<div>
					<div className="location-box">
						<div className="location">{weather.name}, {weather.sys.country}</div>
						<div className="date"> {DateBuilder(new Date())} </div>
					</div>
				</div>
				<div className="weather-box">
					<div className="temp">
						{Math.round(weather.main.temp)}°F
					</div>
					<div className="weather">
						{weather.weather[0].description}
					</div>
				</div>
			</div>
  			) : ('')}
		</main>
      
    </div>
=======
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
    { title: "San Francisco, CA,  US" },
    { title: "Indianapolis, IN,  US" },
    { title: "Springfield, MO,  US" },
    { title: "Independence, MO,  US" },
    { title: "Lee's Summit, MO,  US" },
    { title: "St. Joseph, MO,  US" },
    { title: "St. Peters, MO,  US" },
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
        <Grid container justify="center">
          <Grid item>
            <h4 className={classes.text}>Select a Location</h4>
          </Grid>
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
                  label="City, State, Country"
                  clearButtonMode="always"
                />
              )}
            />
          </Grid>
        </Grid>
      </Grid>
      {typeof weather.main != "undefined" ? (
        <Grid
          container
          justify="center"
          className={classes.weathercontent}
          direction="row"
        >
          <Grid
            container
            justify="center"
            className={classes.weathercontent}
            spacing={6}
          >
            {/* Current Weather Card */}
            <Grid item md={4}>
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
            </Grid>

            {/* Current Temp Card */}
            <Grid item md={4}>
              <Card className={classes.root}>
                <CardContent>
                  <Typography
                    className={classes.title}
                    color="textSecondary"
                    gutterBottom
                  >
                    Temperature
                  </Typography>
                  <Typography variant="h5" component="h2">
                    <div>
                      <div>
                        Feels Like: {Math.round(weather.main.feels_like)}°F
                      </div>
                      <div>
                        Today's Low: {Math.round(weather.main.temp_min)}°F
                      </div>
                      <div>
                        Today's High: {Math.round(weather.main.temp_max)}°F
                      </div>
                    </div>
                  </Typography>
                  <Typography variant="body2" component="p">
                    {weather.name + ", "}
                    {weather.sys.country}
                  </Typography>
                </CardContent>
              </Card>
            </Grid>

            {/* Current Wind Card */}
            <Grid item md={4}>
              <Card className={classes.root}>
                <CardContent>
                  <Typography
                    className={classes.title}
                    color="textSecondary"
                    gutterBottom
                  >
                    Wind in Your Area
                  </Typography>
                  <Typography variant="h5" component="h2">
                    <div>
                      <div>Wind Direction: {Math.round(weather.wind.deg)}°</div>
                      <div>
                        Wind Speed: {Math.round(weather.wind.speed)} mph
                      </div>
                    </div>
                  </Typography>
                  <Typography variant="body2" component="p">
                    {weather.name + ", "}
                    {weather.sys.country}
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          </Grid>
        </Grid>
      ) : (
        <Grid container justify="center">
          <Grid item>
            <p className={classes.text}>No Location selected</p>
          </Grid>
        </Grid>
      )}{" "}
    </Grid>
>>>>>>> Stashed changes
  );
}

export default App;
