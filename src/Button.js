<Grid item>
              <Button
                className={classes.searchButton}
                value={query}
                onClick={(e) => {
                  setQuery(e.target.value);
                  console.log(this);
                  console.log(e.target.value);
                  //this.searchButton.bind(this);
                }}
              >
                Search
              </Button>