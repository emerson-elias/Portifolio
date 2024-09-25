import React from 'react'
import '../tecnology/tecnology.scss'
import Word from './word/word';
import { Link } from 'react-router-dom';

const technologies = [
  { name: 'HTML', img: 'assets/icon-tec/html.png' },
  { name: 'CSS', img: 'assets/icon-tec/css.png' },
  { name: 'SASS', img: 'assets/icon-tec/sass.png' },
  { name: 'REACT', img: 'assets/icon-tec/react.png' },
  { name: 'JAVASCRIPT', img: 'assets/icon-tec/js.png' },
  { name: 'TYPESCRIPT', img: 'assets/icon-tec/ts.png' },
  { name: 'PHP', img: 'assets/icon-tec/php.png' },
  { name: 'GIT', img: 'assets/icon-tec/github.png' },
  { name: 'VERCEL', img: 'assets/icon-tec/vercel.png' },
  { name: 'FIGMA', img: 'assets/icon-tec/figma.png' },
  { name: 'SQL', img: 'assets/icon-tec/sql-server.png' },
  { name: 'JAVA', img: 'assets/icon-tec/java.png' },
  { name: 'TAILWIND', img: 'assets/icon-tec/tailwind.png' },
  { name: 'BOOTSTRAP', img: 'assets/icon-tec/bootstrap.png' },
  { name: 'MATERIALIZE', img: 'assets/icon-tec/materialize.png' },
];

export default function Tecnology() {
  return (
    <>
      <section className="tecnology-container">

        <div className="row">

          <div className="container-title">

            <div className="box">
              <h1 id='tecnologias'>skills</h1>   
              <p>Essas são as tecnologias que estou trabalhando no momento</p>
              <Link to={"/projetos"}>
                <button>meus projetos</button>
              </Link>
            </div>

          </div>

          <div className="tecnologias">

            <div className="layers">
              <span>HTML</span>
            </div>

            <div className="layers">
              <span>CSS</span>
            </div>

            <div className="layers">
              <span>SASS</span>
            </div>

            <div className="layers">
              <span>REACT</span>
            </div>

            <div className="layers">
              <span>JAVASCRIPT</span>
            </div>

            <div className="layers">
              <span>TYPESCRIPT</span>
            </div>

            <div className="layers">
              <span>PHP</span>
            </div>

            <div className="layers">
              <span>GIT</span>
            </div>

            <div className="layers">
              <span>VERCEL</span>
            </div>

            <div className="layers">
              <span>FIGMA</span>
            </div>

            <div className="layers">
              <span>SQL</span>
            </div>

            <div className="layers">
              <span>JAVA</span>
            </div>

            <div className="layers">
              <span>TAILWIND</span>
            </div>

            <div className="layers">
              <span>BOOTSTRAP</span>
            </div>

            <div className="layers">
              <span>MATERIALIZE</span>
            </div>

          </div>
        </div>
      </section>

      <Word />
    </>
  )
}
