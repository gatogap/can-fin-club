class MyHeader extends HTMLElement {
    connectedCallback()
    {
    this.innerHTML = '<div class="wrapper"> <div class="box a"> <header> <h1 style = "font-size: 25px;">&nbsp;Finance<br>&nbsp;&<br>&nbsp;Investment&nbsp;<br></h1> </header> </div> <div class="box b"> <nav> <table> <th><h4><a href="index.html">Home</a></h4></th> <th><h4><a href="Articles.html">Articles</a></h4></th> <th><h4><a href="Recordings.html">Recordings</a></h4></th> <th><h4><a href="Questionnaire.html">Questionnaire</a></h4></th> <th><h4><a href="Resources.html">Resources</a></h4></th> </table> </nav> </div> </div>'
    }
}

customElements.define('my-header',MyHeader)

class MyFooter extends HTMLElement {
    connectedCallback()
    {
    this.innerHTML = '<footer> <div class="footer"> <h4><br>Contact&nbsp;&nbsp;&nbsp;&nbsp;</h4> <p>Email: fandiclubcan@my.smccd.edu&nbsp;&nbsp;&nbsp;&nbsp;</p> <p>Meeting Dates and Hours&nbsp;&nbsp;&nbsp;&nbsp;<br>Tuesdays 8:30 pm&nbsp;&nbsp;&nbsp;&nbsp;</p> <p><a href="https://smccd.zoom.us/j/89860497417">Zoom Link Here</a></p> </footer> '
    }
}

customElements.define('my-footer',MyFooter)