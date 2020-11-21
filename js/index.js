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
                ` `
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
            ``
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

