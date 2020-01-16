import React from 'react'
import injectSheet from 'react-jss'
// import Map from 'pigeon-maps'

const styles = {

}

const Web = () => (
  <div>
    <h2>Web</h2>
	<p><em>Much of the web design work I do is for applications used internally by my company. I'll provide URLs where I can, but for projects that require a login, I'll provide some screenshots.</em></p>
	<h3>Birdies Cafe</h3>
	<h4>Homepage: <a href='http://birdiescafebend.com/'>http://birdiescafebend.com/</a></h4>
	<p>Designed, built and maintained a simple website for a local restaurant. I also created the logo!</p>
	<h3>Spectrum Editing</h3>
	<h4>Homepage: <a href='http://spectrumediting.com'>http://spectrumediting.com</a></h4>
	<p>Designed and built a simple home page for a personal business.</p> 
	{/* <h3>Map styles</h3>
	<Map
		center={[44.053, -123.112]}
		zoom={12}
		width={1000}
		height={600}
		provider={(x,y,z) => `https://api.mapbox.com/styles/v1/ajzeigert/cigtoceeo000la9lwz194vo7a/tiles/256/${z}/${x}/${y}@2x?access_token=pk.eyJ1IjoiYWp6ZWlnZXJ0IiwiYSI6IldLdVhKN1UifQ.43CCALwNLBzVybtPFvcaJQ`}
	></Map> */}
  </div>
);

export default injectSheet(styles)(Web)
