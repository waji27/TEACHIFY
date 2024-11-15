import React from 'react'
import Layout from '../components/Layout'
import Carousel from '../components/Carousel'



function Home() {
  return (
    <Layout>
      <div className="containerr">
        <div className="pg-l">
          <img src="/rafiki.png" alt="image" />
        </div>
        <div className="pg-r">
          <div className="midd">
            <h1>Welcome to Teachify – A New Way to Connect with Educators!</h1>
            <p>
              Teachify is an innovative platform designed to bridge the gap between students seeking knowledge and teachers
              eager to share their expertise. Whether you're a student in search of a personalized learning experience or
              an educator looking to empower learners, Teachify makes it easy to connect and collaborate.
            </p>
          </div>
        </div>
      </div>
    </Layout>
  );
}


export default Home