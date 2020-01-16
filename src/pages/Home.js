import React from 'react'
import injectSheet from 'react-jss'

const styles = {

}

const Home = () => (
  <div>
    <h2>Home</h2>
    <p>This site provides examples of my web development and print design work.</p>
    <h3>Brief History</h3>
    <p>I studied journalism in college with a specialization in design and information graphics.</p>
    <p>I worked at a newspaper for 10-ish years as a designer and graphics reporter. During that time I also started making interactive infographics for the web.</p>
    <p>I then joined an engineering firm as a full-time developer.</p>
    <p>In addition to my primary software engineering gig, I also design magazines and create infographics for print and the web.</p>
  </div>
);

export default injectSheet(styles)(Home)
