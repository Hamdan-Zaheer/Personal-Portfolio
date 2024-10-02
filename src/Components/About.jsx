import React from 'react'

const About = () => {
  return (
    <div name="ABout" className="w-full h-screen bg-gradient-to-b from-gray-800 to-black text-white">
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8">
            <p className="text-4xl font-bold inline border-b-4 border-gray-500">About</p>
        </div>
        <p className="text-xl mt-20"><p>Welcome to my portfolio!</p><br />
        With a Bachelor's degree in IT, I've embarked on an exciting journey into web development. As a fresh and motivated entry-level developer, I’m passionate about crafting captivating user experiences while continuously expanding my skills and staying in tune with the latest industry trends.</p>

        <br />

        <p className="text-xl ">Explore my projects and join me on this journey of collaboration and innovation. I bring fresh ideas and creative solutions to web development, ready to adapt and thrive in its ever-evolving landscape.</p>
      </div>
    </div>
  )
}

export default About
