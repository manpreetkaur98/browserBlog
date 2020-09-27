import "https://cdnjs.cloudflare.com/ajax/libs/jquery/3.5.1/jquery.js";
import "https://cdnjs.cloudflare.com/ajax/libs/marked/1.1.1/marked.js";
import "https://maxcdn.bootstrapcdn.com/bootstrap/3.2.0/js/bootstrap.min.js";
import aPages from "../pages/index.js";

class Page {
  constructor(){
    this.sName = "Manpreet Kaur";
    const sBase = document.location.pathname;
    if(sBase[sBase.length - 1] == "/"){
        this.sBase = sBase.substr(0, sBase.length -1);
    }else{
        const sFile = '/' + document.location.pathname.split('/').pop();
        this.sBase = sBase.substr(0, sBase.length - sFile.length); 
    }
}
getImageSrc(sImage){
    if(sImage.match(/\:\/\//)){
        return sImage;
    }else{
        return this.sBase + sImage;
    }
}
    render(){
        console.log("render called on page");
    }
}

class Section extends Page{
    constructor(oOptions){
        super();
        this.oOptions = oOptions;
    }
    render(){
        $.get(`${this.sBase}/pages/${this.oOptions.fname}`, (sMarkdown)=>{
            $(`#${this.oOptions.title}`).html(
                marked(sMarkdown)
            )
    
        })
       
    }
}

class Article extends Page{
    render(){
        for(let n = 0; n < aPages.length; n++){
            $("article").append(
                `<section id="${aPages[n].title}"></section>`
            );
            new Section(aPages[n]).render();

            $("article").html(
                ` <section class="banner text-center" id="home">
                <div id="overlay">
                  <div class="title">
                    <h1><strong> MANPREET KAUR </strong></h1>
                    <h3 id="qualif"><strong> Graphic Web Desginer, Web Developer, SEO </strong></h3>
                  </div>
                </div>
              </section>
              <div class="small-intro">
  <p id="small-intro"> I make current responsive plan for Mobile and Web Applications. My energy to change customer's visionary items to an astounding reality has helped me convey top notch items. My essential spotlight is on ideal help, versatility, execution, plan, and extraordinary client experience.</p>
</div>
 
<!-- Skilss --> 
  <section class="skills" id="about">
    <div class="text-center titles border">
      <h1 id="title"><strong> TECHNICAL SKILLS </strong></h1>  
    </div> 
    <h2 class="text-center" id="skills-label"><strong> Languages: </strong></h2> 
    <div class="row text-center">
        <div class="skill">HTML</div>
        <div class="skill">CSS</div> 
        <div class="skill">JavaScript </div>
        <div class="skill">PHP</div>
        <div class="skill">.NET</div>
        <div class="skill">Python</div>
        <div class="skill">Ruby</div> 
        <div class="skill">Java</div>   
    </div> 
    <h2 class="text-center" id="skills-label"><strong> Frameworks & Libraries: </strong></h2>
    <div class="row text-center">
      <div class="skill">jQuery</div> 
      <div class="skill">React</div>
      <div class="skill">React Native</div>
      <div class="skill">Angular</div>
      <div class="skill">NodeJS</div>
      <div class="skill">Vue JS</div> 
    </div> 
    <h2 class="text-center" id="skills-label"><strong> Databases: </strong></h2>
    <div class="row text-center">
      <div class="skill"> mySQL </div> 
      <div class="skill"> MongoDB </div>
      <div class="skill"> SQLite </div>
    </div> 
  </section>
 
<!-- Experience --> 
  <section class="ex-timeline" id="experience"> 
    <h1 class="text-center border titles" id="title"><strong> SKILLS</strong> </h1> 
    <div class="job-timeline">
      <ul class="timeline">
        <li class="timeline-event">
          <label class="timeline-icon"></label>
          <div class="timeline-event-copy">
            <p class="timeline-thumbnail"> ASP.NET </p>
            
            <h5 id="jobPos"><strong> ASP.NET </strong></h5>
            <p id="jobDesc"> A project is created in visual studio with the Language ASP.NET.</p>
          </div>
        </li>
      </ul>
      <ul class="timeline">
        <li class="timeline-event">
          <label class="timeline-icon"></label>
          <div class="timeline-event-copy">
            <p class="timeline-thumbnail"> JavaScript</p>
            
            <h5 id="jobPos"><strong> JavaScript</strong></h5>
            <p id="jobDesc">A project is created by using basic skills of java. This project is about the restraurant advertisement.</p>
          </div>
        </li>
      </ul>
      <ul class="timeline">
        <li class="timeline-event">
          <label class="timeline-icon"></label>
          <div class="timeline-event-copy">
            <p class="timeline-thumbnail">  HTML & CSS </p>
            
            <h5 id="jobPos"><strong> HTML & CSS  </strong></h5>
            <p id="jobDesc">A project is created using basic HTML and CSS. It uses various and latest techniques of css that are used in the project./p>
          </div>
        </li>
      </ul>
      <ul class="timeline">
        <li class="timeline-event">
          <label class="timeline-icon"></label>
          <div class="timeline-event-copy">
            <p class="timeline-thumbnail"> JAVA</p>
            
            <h5 id="jobPos"><strong>Java </strong></h5>
            <p id="jobDesc">A game is created with java coding. It is an interesing game with the adventues in it. This project is creadind in Netbeans . </p>    
          </div>
        </li>
      </ul>
      <ul class="timeline">
        <li class="timeline-event">
          <label class="timeline-icon"></label>
          <div class="timeline-event-copy">
            <p class="timeline-thumbnail">  Mobile Application </p>
            
            <h5 id="jobPos"><strong> Mobile Application </strong></h5>
            <p id="jobDesc">This Project is build in Android Studio with basic coding of android. This app is about the safety of womens </p>
            </div>
        </li>
      </ul>
    </div>  
  </section>
  
<!-- Projects-->   
  <section class="portfolios" id="portfolio">
    <h1 class="text-center border titles" id="title"><strong> PORTFOLIO </strong></h1>
    <div class="container">
 
       <div class="row">
        <div class="col-md-6">
          <div class="well">
            <a class="thumbnail">
               <img src="https://webdevtrick.com/wp-content/uploads/javascript-loop-slideshow-980x515.jpg" class="project-img">
            </a>
           
          </div>
        </div>
 
          <div class="col-md-6">
              <div class="well">
                <a class="thumbnail">
                   <img src="https://webdevtrick.com/wp-content/uploads/before-and-after-image-slider-980x515.jpg" class="project-img">
                </a>
                
              </div>
              </div>
      </div>
 
      <div class="row">
          <div class="col-md-6">
            <div class="well">
              <a class="thumbnail">
                 <img src="https://webdevtrick.com/wp-content/uploads/css-background-gradient-animation-980x515.jpg" class="project-img">
              </a>
              
            </div>
          </div>
  
            <div class="col-md-6">
                <div class="well">
                  <a class="thumbnail">
                     <img src="https://webdevtrick.com/wp-content/uploads/css-filter-image-editor.jpg" class="project-img">
                  </a>
                  
                </div>
                </div>
        </div>
 
        <div class="row">
            <div class="col-md-6">
              <div class="well">
                <a class="thumbnail">
                   <img src="https://webdevtrick.com/wp-content/uploads/css-ghost-buttons.jpg" class="project-img">
                </a>
                
              </div>
            </div>
    
              <div class="col-md-6">
                  <div class="well">
                    <a class="thumbnail">
                       <img src="https://webdevtrick.com/wp-content/uploads/html-video-player-js-css.jpg" class="project-img">
                    </a>

                  </div>
                  </div>
          </div>
 
    </div>
  </section>
 
<!-- contact -->  
  <section class="contact-section" id="contact">
    <h1 class="text-center">Connect With Me!</h1>
    <label style= "margin-left: 500px";>Email <input type="email" name="email_address"></label>
    <button >Send</button>
    </section> `
            );
        }
      
    }
    
}

class Footer extends Page{
    render(){
        const sName = "Manpreet";
        const yToday = new Date().getFullYear();
        $("footer").html(
            `&copy; ${yToday} ${sName}`
        );
    }
}

class Nav extends Page{
    render(){
        
        $("nav").html(
            `<nav class="navbar navbar-inverse navbar-fixed-top" role="navigation">
            <div class="container-fluid">
           
               <div class="collapse navbar-collapse" id="myNavbar">
                 <ul class="nav navbar-nav navbar-left">
                   <li><a href="#home" class="scroll"><span class="fa fa-home"></span> Home</a></li>
                   <li><a href="#about" class="scroll"><span class="fa fa-user"></span> About </a></li> 
                   <li><a href="#experience" class="scroll"><span class="fa fa-space-shuttle"></span> Experience</a></li>
                   <li><a href="#portfolio" class="scroll"><span class="fa fa-picture-o"></span> Portfolio</a></li>
                   <li><a href="#contact" class="scroll"><span class="fa fa-envelope"></span> Contact</a></li>
                 </ul>
               </div>
            </div>
          </nav>`
        );
    }
}

class Portfolio extends Page{
    constructor(){
        super();
        this.header = new Page();
        this.nav = new Nav();
        this.article = new Article();
        this.footer = new Footer();
    }
    render(){
        this.header.render();
        this.nav.render();
        this.article.render();
        this.footer.render();
    }
}

$(document).ready(()=>{
    new Portfolio().render();
});

