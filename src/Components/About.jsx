import React from 'react'

const About = () => {
  return (
    <div name="ABout" className="w-full h-screen bg-gradient-to-b from-gray-800 to-black text-white">
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8">
            <p className="text-4xl font-bold inline border-b-4 border-gray-500">About</p>
        </div>
        <p className="text-xl mt-20">Welcome to my portfolio! With a Bachelor's degree in IT, I've embarked on a journey into the world of web development, with a keen focus on front-end technologies. As an entry-level developer, I'm dedicated to creating captivating user experiences while constantly expanding my skill set and staying abreast of industry trends.</p>

        <br />

        <p className="text-xl ">Explore my projects and join me on this exciting journey as I'm excited about collaborating and innovating in web development. I'm here to offer fresh perspectives and creative solutions to keep pace with its ever-evolving landscape.</p>
      </div>
    </div>
  )
}

export default About
