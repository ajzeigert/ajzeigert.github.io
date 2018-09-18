import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import injectSheet from 'react-jss';

import Home from './pages/Home';
import Web from './pages/Web';
import Design from './pages/Design';
import Infographics from './pages/Infographics';
import Illustration from './pages/Illustration';

const styles = {
	'@global': {
		'@font-face': [
			{
				fontFamily: 'League Gothic',
				src: 'url(./webfonts/leaguegothic-regular-webfont.woff)',
				fontWeight: 'normal',
				fontStyle: 'normal'
			},
			{
				fontFamily: 'League Gothic',
				src: 'url(./webfonts/leaguegothic-italic-webfont.woff)',
				fontWeight: 'normal',
				fontStyle: 'italic'
			},
			{
				fontFamily: 'League Gothic Condensed',
				src: 'url(./webfonts/leaguegothic-condensed-regular-webfont.woff)',
				fontWeight: 'normal',
				fontStyle: 'normal'
			},
			{
				fontFamily: 'League Gothic Condensed',
				src: 'url(./webfonts/leaguegothic-condensed-italic-webfont.woff)',
				fontWeight: 'normal',
				fontStyle: 'italic'
			},
			{
				fontFamily: 'Goudy Bookletter 1911',
				src: 'url(./webfonts/goudy_bookletter_1911-webfont.woff)',
				fontWeight: 'normal',
				fontStyle: 'normal'
			},
		],
		html: {
			width: '100%',
			height: '100%',
			margin: 0,
			padding: 0
		},
		body: {
			width: '100%',
			height: '100%',
			margin: 0,
			padding: 0,
			fontFamily: ['"Goudy Bookletter 1911"', 'sans-serif'],
			// color: 'green'
		}
	},
	navigation: {
		'& > ul': {
			listStyle: 'none',
			margin: 0,
			padding: 0,
			'& > li': {
				display: 'inline-block',
				float: 'left',
				marginRight: 10
			},
			display: 'block',
			height: 20,
		},
		width: '100%',
	},
	header: {
		display: 'block',
		width: '100%',
	},
	container: {
		padding: 20,
		display: 'grid',
		gridTemplateColumns: 'repeat(1fr 3fr)',
		gridGap: '20px'
	}
}

class App extends Component {
	render() {
		const {classes} = this.props
		// console.log('classes', classes)
		return (
			<Router>
				<div className={classes.container}>
					<header className={classes.header}>
						<h1>Andy Zeigert | Portfolio</h1>
						<nav className={classes.navigation}>
							<ul>
								<li>
									<Link to="/">About</Link>
								</li>
								<li>
									<Link to="/web">Web</Link>
								</li>
								<li>
									<Link to="/infographics">Infographics</Link>
								</li>
								<li>
									<Link to="/design">Graphic Design</Link>
								</li>
								<li>
									<Link to="/illustration">Editorial Illustration</Link>
								</li>
							</ul>
						</nav>
					</header>
					<main>
						<Route exact path="/" component={Home}/>
						<Route exact path="/web" component={Web}/>
						<Route exact path="/infographics" component={Infographics}/>
						<Route exact path="/design" component={Design}/>
						<Route exact path="/illustration" component={Illustration}/>
					</main>
				</div>
			</Router>
		);
	}
}

export default injectSheet(styles)(App);
