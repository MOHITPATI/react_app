import React from 'react'
import '../index.css'
import '../tabres.css'
import '../responsive.css'
import { NavLink } from 'react-router-dom'

function Home() {
  document.title = 'NITIAN - Home'
  return (
    <>
      <header>
        <div id="Container">
          <div id="HeaderContentWrapper">
            <div id="HeaderDesc">
              <h1>Find the perfect House You Need. From One Click.</h1>
              <p>
                We are always with you to build your dream house. We are the
                best builder around <span> South Asia</span>
              </p>
              <NavLink exact to="/start">
                Get started
              </NavLink>
            </div>
          </div>
        </div>
      </header>
    </>
  )
}
export default Home
