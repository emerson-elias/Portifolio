import React from 'react'
import '../tecnology/tecnology.scss'

const technologies = [
  { name: 'HTML', img: '/icon-tec/html.png' },
  { name: 'CSS', img: '/icon-tec/css.png' },
  { name: 'SASS', img: '/icon-tec/sass.png' },
  { name: 'REACT', img: '/icon-tec/react.png' },
  { name: 'JAVASCRIPT', img: '/icon-tec/js.png' },
  { name: 'TYPESCRIPT', img: '/icon-tec/ts.png' },
  { name: 'PHP', img: '/icon-tec/php.png' },
  { name: 'GIT', img: '/icon-tec/github.png' },
  { name: 'VERCEL', img: '/icon-tec/vercel.png' },
  { name: 'FIGMA', img: '/icon-tec/figma.png' },
  { name: 'SQL', img: '/icon-tec/sql-server.png' },
  { name: 'JAVA', img: '/icon-tec/java.png' },
  { name: 'TAILWIND', img: '/icon-tec/tailwind.png' },
  { name: 'BOOTSTRAP', img: '/icon-tec/bootstrap.png' },
  { name: 'MATERIALIZE', img: '/icon-tec/materialize.png' },
];

export default function Tecnology() {
  return (
    <section className="tecnology-container">

      <div className="tittle" id='tecnologias'>
        <h1>skills</h1>
        <svg xmlns="http://www.w3.org/2000/svg" width="100%" viewBox="0 0 427.2167 111.07167">
          <path className="stroke noscaling" d="M.76489,107.73543L89.1395,2.79832l-1.84195,104.93711S158.63088,2.79832,213.11986,2.79832c72.11846,0,74.25064,104.93711,128.34435,104.93711,56,0,84.78811-104.93711,84.78811-104.93711"></path>
        </svg>
      </div>

      <div className="row">

        <div className="layers">

          {technologies.map((tech, index) => (

            <div key={index} className="card">

              <div className="icon-tec">
                <img src={tech.img} alt={tech.name} />
              </div>

              <div className="card-text">
                <span>{tech.name}</span>
              </div>

            </div>

          ))}

        </div>

        <div className="description">
          <span>performance</span>
          <span>dinamismo</span>
          <span>experiencia</span>
        </div>

      </div>

    </section>
  );
}
