import React from 'react'
import injectSheet from 'react-jss'
import Map from 'pigeon-maps'

const styles = {

}

const Web = () => (
  <div>
    <h2>Web</h2>
	<h3>Map styles</h3>
	<Map
		center={[44.053, -123.112]}
		zoom={12}
		width={1000}
		height={600}
		provider={(x,y,z) => `https://api.mapbox.com/styles/v1/ajzeigert/cigtoceeo000la9lwz194vo7a/tiles/256/${z}/${x}/${y}@2x?access_token=pk.eyJ1IjoiYWp6ZWlnZXJ0IiwiYSI6IldLdVhKN1UifQ.43CCALwNLBzVybtPFvcaJQ`}
	></Map>
  </div>
);

export default injectSheet(styles)(Web)
