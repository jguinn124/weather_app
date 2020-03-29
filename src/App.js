import React from 'react';

const api = {
	key: "b3beb547b4350f89d8920d06161e4080",
	base: "https://api.openweathermap.org/data/2.5/"
}

function App() {
  return (
    <div className="app">
		<main>
			<div className="search-box">
				<input 
				type="text"
				className="search-bar"
				placeholder="Search"
				/>
			</div>
		</main>
      
    </div>
  );
}

export default App;
