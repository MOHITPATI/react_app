import React from 'react'
import '../index.css'
import '../tabres.css'
import '../responsive.css'
import Image from './img/About.png'

function About() {
  document.title = 'Brigrate - About'
  return (
    <>
      <section id="About">
        <div id="Container">
          <div id="AboutContentWrapper">
            <div id="AboutDesc">
              <h2>Some words About Us</h2>
              <p>

              Introducing Brigrate, a dynamic property developer making waves across South India with its unparalleled commitment to excellence. With a strong foothold in Bangalore, Chennai, and Hyderabad, Brigrate's apartments symbolize a fusion of luxury and functionality, catering to the discerning tastes of modern homeowners.
              </p>
              <p>
              In Bangalore, Brigrate's apartments offer an urban oasis, seamlessly blending contemporary design with green spaces, providing residents with a serene retreat amidst the bustling cityscape. In Chennai, known for its rich cultural heritage, Brigrate's residences boast of elegant architecture and thoughtful amenities, promising a lifestyle of sophistication and comfort. Meanwhile, in Hyderabad, Brigrate's apartments stand as epitomes of innovation and quality, reflecting the city's progressive spirit and dynamic ethos.
              </p>
            </div>
            <div id="AboutImage">
              <img draggable="false" src={Image} alt="Error" />
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
export default About
