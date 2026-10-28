import { useState } from 'react'
import './SpaceExperience.css'

function SpaceExperience() {
  const [selectedPlanet, setSelectedPlanet] = useState(null)

  const planets = [
    {
      name: 'My Story',
      className: 'earth',
      description: 'Get to know me, my journey and what inspires me.',
      link: '#about'
    },
    {
      name: 'Skills',
      className: 'mercury',
      description: 'Explore the skills I use to bring ideas to life.',
      link: '#skills'
    },
    {
      name: 'Creativity',
      className: 'venus',
      description: 'Discover how I turn creative ideas into digital experiences.',
      link: '#projects'
    },
    {
      name: 'Projects',
      className: 'mars',
      description: 'Take a look at the projects I have worked on.',
      link: '#projects'
    },
    {
      name: 'Education',
      className: 'jupiter',
      description: 'Explore my learning journey and qualifications.',
      link: '#education'
    },
    {
      name: 'Contact',
      className: 'neptune',
      description: 'Let’s connect and create something amazing.',
      link: '#contact'
    }
  ]

  return (
    <section className="space-experience" id="space">
      <div className="space-stars"></div>
      <div className="space-nebula"></div>
      <div className="space-heading">
        <p>WELCOME TO MY UNIVERSE</p>
        <h2>Explore My World</h2>
        <span>Choose a planet to discover a part of my journey.</span>
      </div>

      <div className="solar-map">
        <div className="orbit orbit-one"></div>
        <div className="orbit orbit-two"></div>
        <div className="orbit orbit-three"></div>

        <button
          className="sun"
          onClick={() => setSelectedPlanet({
            name: 'My Story',
            description: 'Welcome to my universe. Every planet represents a different part of who I am and what I create.',
            link: '#about'
          })}
        >
          <span>MY STORY</span>
        </button>

        {planets.map((planet) => (
          <button
            key={planet.name}
            className={`planet ${planet.className} ${selectedPlanet?.name === planet.name ? 'selected' : ''}`}
            onClick={() => setSelectedPlanet(planet)}
            aria-label={`Explore ${planet.name}`}
          >
            <span className="planet-sphere"></span>
            <span className="planet-name">{planet.name}</span>
          </button>
        ))}
      </div>

      {selectedPlanet && (
        <div className="planet-info">
          <p>TRANSMISSION RECEIVED</p>
          <h3>{selectedPlanet.name}</h3>
          <span>{selectedPlanet.description}</span>
          <a href={selectedPlanet.link}>Explore {selectedPlanet.name}</a>
          <button onClick={() => setSelectedPlanet(null)}>Close</button>
        </div>
      )}
    </section>
  )
}

export default SpaceExperience