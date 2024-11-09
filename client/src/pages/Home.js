import React from 'react'
import Layout from '../components/Layout'
import Carousel from '../components/Carousel'

const Home = () => {
    return (
        <Layout>
            <Carousel />
            <div class="contain w-full bg-gray-50 h-[40vh] border ">
                <div class="first-h">
                    <h1>High Quality Teacher</h1>
                </div>
                <div class="second-h">
                    <h1>teachers that apply make through our application process</h1>
                </div>
            </div>
            <div class="c w-full h-[20vh] flex justify-evenly ">
                <div class="one w-2">
                    100+ Subjects
                </div>
                <div class="one w-2">
                    200+ skills
                </div>
                <div class="one w-2"> 
                    50+ languages
                </div>
            </div>
        </Layout>
    )
}

export default Home