import "https://cdnjs.cloudflare.com/ajax/libs/jquery/3.5.1/jquery.js";
import "https://cdnjs.cloudflare.com/ajax/libs/marked/1.1.1/marked.js";
import "https://maxcdn.bootstrapcdn.com/bootstrap/3.2.0/js/bootstrap.min.js";
import "https://stackpath.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css";
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
    <h1 class="text-center border titles" id="title"><strong> EXPERIENCE</strong> </h1> 
    <div class="job-timeline">
      <ul class="timeline">
        <li class="timeline-event">
          <label class="timeline-icon"></label>
          <div class="timeline-event-copy">
            <p class="timeline-thumbnail"> February 2010 - June 2012 </p>
            <h5 id="workplace"><a href="#" target="_blank">Google</a></h5>
            <h5 id="jobPos"><strong> Lorem ipsum </strong></h5>
            <p id="jobDesc"> • Quisque dictum placerat urna eget mattis. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Ut cursus tincidunt tristique.</p>
          </div>
        </li>
      </ul>
      <ul class="timeline">
        <li class="timeline-event">
          <label class="timeline-icon"></label>
          <div class="timeline-event-copy">
            <p class="timeline-thumbnail"> July 2012 - August 2015</p>
            <h5 id="workplace"><a href="#" target="_blank">Facebook</a></h5>
            <h5 id="jobPos"><strong> Lorem ipsum </strong></h5>
            <p id="jobDesc">• Quisque dictum placerat urna eget mattis. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Ut cursus tincidunt tristique.</p>
          </div>
        </li>
      </ul>
      <ul class="timeline">
        <li class="timeline-event">
          <label class="timeline-icon"></label>
          <div class="timeline-event-copy">
            <p class="timeline-thumbnail"> August 2015 - January 2016</p>
            <h5 id="workplace"><a href="#" target="_blank">Microsoft</a></h5>
            <h5 id="jobPos"><strong> Lorem ipsum </strong></h5>
            <p id="jobDesc"> • Quisque dictum placerat urna eget mattis. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Ut cursus tincidunt tristique. </p>
          </div>
        </li>
      </ul>
      <ul class="timeline">
        <li class="timeline-event">
          <label class="timeline-icon"></label>
          <div class="timeline-event-copy">
            <p class="timeline-thumbnail"> February 2018 - June 2018</p>
            <h5 id="workplace"><a href="#" target="_blank">Amazon</a></h5>
            <h5 id="jobPos"><strong>Lorem ipsum</strong></h5>
            <p id="jobDesc"> • Quisque dictum placerat urna eget mattis. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Ut cursus tincidunt tristique. </p>    
          </div>
        </li>
      </ul>
      <ul class="timeline">
        <li class="timeline-event">
          <label class="timeline-icon"></label>
          <div class="timeline-event-copy">
            <p class="timeline-thumbnail"> December 2018 - Present </p>
            <h5 id="workplace"><a href="#" target="_blank">Coke Cola</a></h5>
            <h5 id="jobPos"><strong> Lorem ipsum </strong></h5>
            <p id="jobDesc">• Quisque dictum placerat urna eget mattis. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Ut cursus tincidunt tristique.</p>
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
            <h2 id="projectTitle"><strong>Loop Slideshow</strong></h2>
            <a href="https://webdevtrick.com/demos/javascript-image-slideshow/" target="_blank" alt="Live Demo"><h2 id="liveDemo"><strong>Live Demo</strong></h2></a>
            <a href="https://webdevtrick.com/javascript-loop-slideshow/" target="_blank" alt="Source Code"><h2 id="sourceCode"><strong>Source Code</strong></h2></a>
          </div>
        </div>
 
          <div class="col-md-6">
              <div class="well">
                <a class="thumbnail">
                   <img src="https://webdevtrick.com/wp-content/uploads/before-and-after-image-slider-980x515.jpg" class="project-img">
                </a>
                <h2 id="projectTitle"><strong>Before & After Slider</strong></h2>
                <a href="https://webdevtrick.com/demos/after-before-slider/" target="_blank" alt="Live Demo"><h2 id="liveDemo"><strong>Live Demo</strong></h2></a>
                <a href="https://webdevtrick.com/before-and-after-image-slider/" target="_blank" alt="Source Code"><h2 id="sourceCode"><strong>Source Code</strong></h2></a>
              </div>
              </div>
      </div>
 
      <div class="row">
          <div class="col-md-6">
            <div class="well">
              <a class="thumbnail">
                 <img src="https://webdevtrick.com/wp-content/uploads/css-background-gradient-animation-980x515.jpg" class="project-img">
              </a>
              <h2 id="projectTitle"><strong>Loop Slideshow</strong></h2>
              <a href="https://webdevtrick.com/demos/css-gradient-background/" target="_blank" alt="Live Demo"><h2 id="liveDemo"><strong>Live Demo</strong></h2></a>
              <a href="https://webdevtrick.com/css-gradient-background/" target="_blank" alt="Source Code"><h2 id="sourceCode"><strong>Source Code</strong></h2></a>
            </div>
          </div>
  
            <div class="col-md-6">
                <div class="well">
                  <a class="thumbnail">
                     <img src="https://webdevtrick.com/wp-content/uploads/css-filter-image-editor.jpg" class="project-img">
                  </a>
                  <h2 id="projectTitle"><strong>Loop Slideshow</strong></h2>
                  <a href="https://webdevtrick.com/demos/css-filter-editor/" target="_blank" alt="Live Demo"><h2 id="liveDemo"><strong>Live Demo</strong></h2></a>
                  <a href="https://webdevtrick.com/css-filter-image-editor/" target="_blank" alt="Source Code"><h2 id="sourceCode"><strong>Source Code</strong></h2></a>
                </div>
                </div>
        </div>
 
        <div class="row">
            <div class="col-md-6">
              <div class="well">
                <a class="thumbnail">
                   <img src="https://webdevtrick.com/wp-content/uploads/css-ghost-buttons.jpg" class="project-img">
                </a>
                <h2 id="projectTitle"><strong>Loop Slideshow</strong></h2>
                <a href="https://webdevtrick.com/demos/css-ghost-buttons/" target="_blank" alt="Live Demo"><h2 id="liveDemo"><strong>Live Demo</strong></h2></a>
                <a href="https://webdevtrick.com/css-ghost-buttons/" target="_blank" alt="Source Code"><h2 id="sourceCode"><strong>Source Code</strong></h2></a>
              </div>
            </div>
    
              <div class="col-md-6">
                  <div class="well">
                    <a class="thumbnail">
                       <img src="https://webdevtrick.com/wp-content/uploads/html-video-player-js-css.jpg" class="project-img">
                    </a>
                    <h2 id="projectTitle"><strong>Loop Slideshow</strong></h2>
                    <a href="https://webdevtrick.com/demos/html-video-player/" target="_blank" alt="Live Demo"><h2 id="liveDemo"><strong>Live Demo</strong></h2></a>
                    <a href="https://webdevtrick.com/html-video-player-javascript-css/" target="_blank" alt="Source Code"><h2 id="sourceCode"><strong>Source Code</strong></h2></a>
                  </div>
                  </div>
          </div>
 
    </div>
  </section>
 
<!-- contact -->  
  <section class="contact-section" id="contact">
    <h1 class="text-center">Connect With Me!</h1>
    <div class="contact-buttons">
      <a class="btn btn-linkedin btn-lg" href="#" target="_blank" ><i class="fa fa-2x fa-linkedin"></i></a>
      <a class="btn btn-github btn-lg" href="#" target="_blank"><i class="fa fa-2x fa-github"></i></a>
      <a class="btn btn-drible btn-lg" href="#" target="_blank" ><i class="fa fa-2x fa-dribbble"></i></a>
      <a class="btn btn-facebook btn-lg" href="#" target="_blank"><i class="fa fa-2x fa-facebook-square"></i></a>
    </div> 

   

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

