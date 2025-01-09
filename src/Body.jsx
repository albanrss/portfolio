import './Body.css'

function Body() {
    return (
      <>
        <div className="main_container">
          <div className="contents">
            <div id="about-me">
              <img id="profile_picture" src="/src/assets/pp.jpg" />
              <div>
                <h2>
                  A propos de moi
                </h2>
                <p>
                  Étudiant en <b>informatique</b> à <b>Epitech Nantes</b>, je suis passionné par la programmation et les nouvelles technologies. Je développe mes compétences dans des domaines variés tels que le développement web, la programmation orientée objet, et l'algorithmie.
                </p>
                <p>
                  Toujours <b>curieux</b> et <b>motivé</b>, j'aime relever des défis techniques et apprendre de nouvelles compétences pour rester à jour dans ce secteur en constante évolution. Mon objectif est de concevoir des <b>solutions innovantes</b> et <b>performantes</b> pour répondre aux besoins des entreprises.
                </p>
              </div>
            </div>
            <div id="skills">
              <h2>
                Mes compétences
              </h2>
            </div>
            <div id="projects">
              <h2>
                Mes projets
              </h2>
            </div>
          </div>
        </div>
      </>
    )
  }
  
export default Body
