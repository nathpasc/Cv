import "./style.css";

document.querySelector("#app").innerHTML = `
    <div class="container">
    <header class="header">
      <h3>cv</h3>
    </header>
    <nav class="nav">
      <ul>
        <li><a href="#presentation">Présentation</a></li>
        <li><a href="#formation">Formations</a></li>
        <li><a href="#competence">Compétences</a></li>
        <li><a href="#hobby">Hobby</a></li>
      </ul>
    </nav>
    <main class="main">
      <section class="section01">
        <h2 id="presentation">Présentation</h2>
        <article class="article01">
          <figure>
            <img src="/nathalie-hance.jpg" width=150px />
          </figure>
        </article>
        <article class="article02">
          <p>
            Hance Nathalie <br>
            rue des saison n°6 <br>
            1300 Limal <br>
            Tel : 0492/05.80.02 <br>
            E-mail :hance.nathalie@gmail.com <br>
            Je me déplace en transport en commun<br>
          </p>
        </article>
      </section>
      <section class="section02">
        <h2 id="formation">Formations</h2>
        <article class="article03">
          <h4> Formations</h4>
          <p> BES Developper</p>
          <p> Community Manager</p>
          <p> BES Developper</p>
          <p> Web Design</p>
          <p> Employée administrative ( +Stage)</p>
          <p> Stage</p>
          <p> Web Design</p>
          <p> Initiation à l’informatique</p>
        </article>
        <article class="article04">
          <h4> Ecole - Dates</h4>
          <p> Ifosup, 09/2021 - 06/2023</p>
          <p> SJB, 01/2020 - 07/2023</p>
          <p> Ifosup, 09/2016 - 06/2018</p>
          <p> SJB, 03/2016 - 07/2016</p>
          <p> SJB, 08/2015 - 01/2016</p>
          <p>Commune de Wavre, 07/12/2015 - 29/01/2016</p>
          <p> SJB, 12/2014 - 06/2015</p>
          <p> SJB, 09/2014 - 11/2014</p>
        </article>
      </section>
      <section class="section03">
        <h2 id!"competence">Compétences</h2>
        <article class="article05">
          <h4> web</h4>
          <p>
          <img src="/icone-programmation/fichier-html.png" width=50px/>
          
          </p>
          <h3>Techniques :</h3>
      <li> HTML, CSS, JavaScript, Php</li>
      <li> Frameworks (Laravel)</li>
      <li> Outils de design (Photoshop, Gimp, Illustator, Inskape, Canva)</li>
     <li>Responsive Design</li>
     <li>Git, GitHub</li>
     <li>Vercel</li>
      <h3>Transférables :</h3>
        <li> Gestion de projet</li>
        <li> Travail en équipe</li>
        <li> Organisation et gestion du temps</li>
        <li>  Précision et attention aux détails</li>
         <li> Relation client</li>
         <br>

        </article>
        <article class="article06">
          <h4> Résumé professionnel</h4>
          <p>Développeuse web et designer expérimentée, dotée d'une solide formation en développement web et web design. Forte de nombreuses années d'expérience dans divers secteurs, j'ai acquis des compétences transférables en gestion de projet, organisation et travail en équipe. Désireuse d'apporter mon expertise technique et mes compétences interpersonnelles dans un rôle de développement web ou de web design.
</p>
        </article>
      </section>
      <section class="section04">
        <h2 id="hobby"> Hobby</h2>
        <article class="article07">
          <p> j'aime le crochet</p>
        </article>
        <article class="article08">
          <figure>
            <img src="https://toppng.com/uploads/preview/ilustracion-de-personas-11569061640ghhlbpoozh.png" width="150 px" />
          </figure>
        </article>
      </section>
    </main>
    <footer class="footer">
      <h3> ceci est le footer</h3>
    </footer>
  </div> 
`;
