import React from "react";
import Layout from "../components/Layout";
import Carousel from "../components/Carousel";
import brick from '../assets/bricks.jpg'
import raf from '../assets/rafiki.png'

function Home() {
  return (
    <Layout>
      <div className="containerr flex flex-nowrap">
        <div className="pg-l sm:w-100 lg:w-80">
          <img src={raf} alt="image" />
        </div>
        <div className="pg-r" data-aos="">
          <div className="midd">
            <h1>Welcome to Teachify – A New Way to Connect with Educators!</h1>
            <p>
              Teachify is an innovative platform designed to bridge the gap
              between students seeking knowledge and teachers eager to share
              their expertise. Whether you're a student in search of a
              personalized learning experience or an educator looking to empower
              learners, Teachify makes it easy to connect and collaborate.
            </p>
          </div>
        </div>
      </div>
      <div className="search">
        <div className="rc">
          <h2>Find online teachers and home tutors for free</h2>
          <div className="form">
            <input
              type="text"
              id="first_name"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-[100px] p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="Location"
              required
            />
            <input
              type="text"
              id="last_name"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-[100px] p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="Subject"
              required
            />
            <button
              type="submit"
              className="text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 shadow-lg shadow-blue-500/50 dark:shadow-lg dark:shadow-blue-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2"
            >
              Search
            </button>
          </div>
        </div>
      </div>
      <div className="container-two">
        <div className="info-num">
          <div className="data">
            <h2>
              100+ <br />
              Subjects
            </h2>
          </div>
          <div className="data">
            <h2>
              50+ <br />
              Skills
            </h2>
          </div>
          <div className="data">
            <h2>
              10+ <br />
              Languages
            </h2>
          </div>
        </div>
        <div className="wwd">
          <div className="wwd-data">
            <h2 id="sp">What we do?</h2>
            <p>
              TeacherOn.com is a free website, trusted by thousands of students
              and teachers,
              <br />
              <br /> all over the world. You can find local tutors, online
              teachers, and teachers to help with tutoring, coaching,
              assignments, academic projects, and dissertations for over 9500
              subjects.
            </p>
          </div>
        </div>
      </div>
      <div className="container-three">
        <div id="upr"></div>
        <div className="overlay-image"></div>
      </div>
    </Layout>
  );
}

export default Home;
