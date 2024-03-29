function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; } // Made by Yago Estévez (Twitter: @yagoestevez.com)

/***********************
  Menu Component
 ***********************/

const Menu = props => {
  return /*#__PURE__*/(
    React.createElement("div", { class: `menu-container ${props.showMenu}` }, /*#__PURE__*/
      React.createElement("div", { class: "overlay" }), /*#__PURE__*/
      React.createElement("div", { class: "menu-items" }, /*#__PURE__*/
        React.createElement("ul", null, /*#__PURE__*/
          React.createElement("li", null, /*#__PURE__*/
            React.createElement("a", { href: "#welcome-section", onClick: props.toggleMenu }, "HOME")), /*#__PURE__*/



          React.createElement("li", null, /*#__PURE__*/
            React.createElement("a", { href: "#about", onClick: props.toggleMenu }, "ABOUT")), /*#__PURE__*/



          React.createElement("li", null, /*#__PURE__*/
            React.createElement("a", { href: "#projects", onClick: props.toggleMenu }, "PORTFOLIO")), /*#__PURE__*/



          React.createElement("li", null, /*#__PURE__*/
            React.createElement("a", { href: "#contact", onClick: props.toggleMenu }, "CONTACT")), /*#__PURE__*/

          React.createElement("li", null, /*#__PURE__*/
            React.createElement("a", { href: "https://camilaloliveira.com.br", onClick: props.toggleMenu }, "BLOG"))), /*#__PURE__*/




        React.createElement(SocialLinks, null))));



};

/***********************
  Nav Component
 ***********************/

const Nav = props => {
  return /*#__PURE__*/(
    React.createElement(React.Fragment, null, /*#__PURE__*/
      React.createElement("nav", { id: "navbar" }, /*#__PURE__*/
        React.createElement("div", { class: "nav-wrapper" }, /*#__PURE__*/
          React.createElement("p", { class: "brand" }, "camila ", /*#__PURE__*/
            React.createElement("strong", null, "l."), " oliveira"), /*#__PURE__*/

          React.createElement("a", {
            onClick: props.toggleMenu,
            class:
              props.showMenu === "active" ? "menu-button active" : "menu-button"
          }, /*#__PURE__*/


            React.createElement("span", null))))));





};

/***********************
  Header Component
 ***********************/

const Header = props => {
  return /*#__PURE__*/(
    React.createElement("header", { id: "welcome-section" }, /*#__PURE__*/
      React.createElement("div", { class: "forest" }), /*#__PURE__*/
      React.createElement("div", { class: "silhouette" }), /*#__PURE__*/
      React.createElement("div", { class: "moon" }), /*#__PURE__*/
      React.createElement("div", { class: "container" }, /*#__PURE__*/
        React.createElement("h1", null, /*#__PURE__*/
          React.createElement("span", { class: "line" }, "From"), /*#__PURE__*/
          React.createElement("span", { class: "line" }, /*#__PURE__*/
            React.createElement("span", { class: "color" }, "SP"), " to"),
          React.createElement("span", { class: "line" }, "internet"), /*#__PURE__*/), /*#__PURE__*/


        React.createElement("div", { class: "buttons" }, /*#__PURE__*/
          React.createElement("a", { href: "#about" }, "about"), /*#__PURE__*/
          React.createElement("a", { href: "#projects" }, "portfolio"), /*#__PURE__*/
          React.createElement("a", { href: "#contact", class: "cta" }, "contact")))));






};

/***********************
  About Component
 ***********************/

const About = props => {
  return /*#__PURE__*/(
    React.createElement("section", { id: "about" }, /*#__PURE__*/
      React.createElement("div", { class: "wrapper" }, /*#__PURE__*/
        React.createElement("article", null, /*#__PURE__*/
          React.createElement("div", { class: "title" }, /*#__PURE__*/
            React.createElement("h3", null, "Who's her?"), /*#__PURE__*/
            React.createElement("p", { class: "separator" })), /*#__PURE__*/

          React.createElement("div", { class: "desc full" }, /*#__PURE__*/
            React.createElement("h4", { class: "subtitle" }, "My name is Camila."), /*#__PURE__*/
            React.createElement("p", null, "I'm a web and mobile developer based in the great metropolitan area from S\xE3o Paulo, Brazil."), /*#__PURE__*/

            React.createElement("p", null, "I really enjoy solving problems as well as making things pretty and easy to use. I can't stop learning new things; the more, the better. I also love photography, poems, and a lot more."),

                              React.createElement("p", null, "I was born in 1994, I've been writing since I was little, but since the late 2000s I've known something called a blog and from then on, I embarked not only as a reader and writer, but also as a developer.")), /*#__PURE__*/





          React.createElement("div", { class: "title" }, /*#__PURE__*/
            React.createElement("h3", null, "What does she do?"), /*#__PURE__*/
            React.createElement("p", { class: "separator" })), /*#__PURE__*/

          React.createElement("div", { class: "desc" }, /*#__PURE__*/
            
            React.createElement("h4", { class: "subtitle" }, "In Frontend"), /*#__PURE__*/
            
            React.createElement("p", null, "For the web front-end I tend to work with Javascript, including popular frameworks like ReactJS and VueJS. I also make the web beautiful using Sass, SCSS, CSS and whenever necessary any of your friends: Bootstrap, Bulma and Jekyll (GitHub Pages)."),

            React.createElement("p", null, "In the mobile front-end, I work with Android languages (Kotlin and Java), but today I started in Flutter also to work with the iOs platform.")), /*#__PURE__*/

          React.createElement("div", { class: "desc" }, /*#__PURE__*/
            React.createElement("h4", { class: "subtitle" }, "In Backend"), /*#__PURE__*/
            
            React.createElement("p", null, "For the web backend I also work with Javascript (NodeJS, Express, MongoDB, etc) and PHP (WordPress, Laravel, etc)."),

            React.createElement("p", null, "For the mobile backend, I learned something about the REST API, so I'm a bit of a novice at this.")), /*#__PURE__*/

          React.createElement("div", { class: "desc" },
            React.createElement("h4", { class: "subtitle" }, "In Design"), /*#__PURE__*/
            
            React.createElement("p", null, "I feel comfortable working with many Adobe, Canva, GIMP, Figma and Photo editors to help me create great things or get inspired."),

            React.createElement("p", null, "Many of the recent edits I make are with Canva, nowadays I learned about how to make digital drawings that I do for my poetry book.")), /*#__PURE__*/



          React.createElement("div", { class: "desc" }, /*#__PURE__*/
            React.createElement("h4", { class: "subtitle" }, "In Audio"), /*#__PURE__*/
            React.createElement("p", null, "Since 2020, I decided to make my poetry a new life in audio. My first podcast, Café Curto, shows this. The long version, Café Podcast, is dedicated to literature and everyday life."))))));








};

/***********************
  Project Component
 ***********************/

const Project = props => {
  const tech = {
    sass: "fab fa-sass",
    css: "fab fa-css3-alt",
    js: "fab fa-js-square",
    react: "fab fa-react",
    vue: "fab fa-vuejs",
    d3: "far fa-chart-bar",
    node: "fab fa-node",
    jekyll: "fab fa-node-js"
  };


  const link = props.link || "https://";
  const repo = props.repo || "https://";

  return /*#__PURE__*/(
    React.createElement("div", { class: "project" }, /*#__PURE__*/
      React.createElement("a", {
        class: "project-link",
        href: link,
        target: "_blank",
        rel: "noopener noreferrer"
      }, /*#__PURE__*/

        React.createElement("img", {
          class: "project-image",
          src: props.img,
          alt: "Screenshot of " + props.title
        })), /*#__PURE__*/


      React.createElement("div", { class: "project-details" }, /*#__PURE__*/
        React.createElement("div", { class: "project-tile" }, /*#__PURE__*/
          React.createElement("p", { class: "icons" },
            props.tech.split(" ").map((t) => /*#__PURE__*/
              React.createElement("i", { class: tech[t], key: t }))),


          props.title, " "),

        props.children, /*#__PURE__*/
        React.createElement("div", { class: "buttons" }, /*#__PURE__*/
          React.createElement("a", { href: repo, target: "_blank", rel: "noopener noreferrer" }, "View source ", /*#__PURE__*/
            React.createElement("i", { class: "fas fa-external-link-alt" })), /*#__PURE__*/

          React.createElement("a", { href: link, target: "_blank", rel: "noopener noreferrer" }, "Try it Live ", /*#__PURE__*/
            React.createElement("i", { class: "fas fa-external-link-alt" }))))));





};

/***********************
  Projects Component
 ***********************/


const Projects = props => {
  return /*#__PURE__*/(
    React.createElement("section", { id: "projects" }, /*#__PURE__*/
      React.createElement("div", { class: "projects-container" }, /*#__PURE__*/
        React.createElement("div", { class: "heading" }, /*#__PURE__*/
          React.createElement("h3", { class: "title" }, "My Works"), /*#__PURE__*/
          React.createElement("p", { class: "separator" }), /*#__PURE__*/
          React.createElement("p", { class: "subtitle" }, "Here's a list of ", /*#__PURE__*/
            React.createElement("u", null, "most"), " of the projects I've been working on lately.")), /*#__PURE__*/


        React.createElement("div", { className: "projects-wrapper" }, /*#__PURE__*/
          React.createElement(Project, {
            title: "Camila L. Oliveira's Blog",
            img: "images/logo-milla.png",

            tech: "css",
            link: "https://camilaloliveira.com.br",
            repo: "#"
          }, /*#__PURE__*/

            React.createElement("small", null, "Built using Wordpress and Elementor."), /*#__PURE__*/
            React.createElement("p", null, "This is the official blog's site by Camila L. Oliveira.")),

           React.createElement(Project, {
            title: "Camila L. Oliveira's Short Site",
            img: "images/logo-milla.png",

            tech: "css",
            link: "https://hello.camilaloliveira.com.br",
            repo: "https://github.com/clcmo/hello"
          }, /*#__PURE__*/

            React.createElement("small", null, "Built using HTML and CSS."), /*#__PURE__*/
            React.createElement("p", null, "This is the official shorts' site by Camila L. Oliveira.")),


          React.createElement(Project, {
            title: "Studio Urbanna",
            img: "images/logo-studio.png",

            tech: "js css jekyll",
            link: "https://studiourbanna.github.io/",
            repo: "https://github.com/studiourbanna/studiourbanna.github.io"
          }, /*#__PURE__*/

            React.createElement("small", null, "Built using Jekyll, CSS and JS."), /*#__PURE__*/
            React.createElement("p", null, "This is the portfolio web site of the projects from Urbanna team.")), /*#__PURE__*/





        ))));

};



/***********************
  Contact Component
 ***********************/

const Contact = props => {
  return /*#__PURE__*/(
    React.createElement("section", { id: "contact" }, /*#__PURE__*/
      React.createElement("div", { class: "container" }, /*#__PURE__*/
        React.createElement("div", { class: "heading-wrapper" }, /*#__PURE__*/
          React.createElement("div", { class: "heading" }, /*#__PURE__*/
            React.createElement("p", { class: "title" }, "Would you want to ", /*#__PURE__*/
              React.createElement("br", null), "contact?"), /*#__PURE__*/


            React.createElement("p", { class: "separator" }), /*#__PURE__*/
            React.createElement("p", { class: "subtitle" }, "Fill the form above or send an email to ",
              "", /*#__PURE__*/
              React.createElement("span", { class: "mail" }, "camila.leite.oliveira", /*#__PURE__*/

                React.createElement("i", { class: "fas fa-at at" }), "gmail", /*#__PURE__*/

                React.createElement("i", { class: "fas fa-circle dot" }), "com"), ":")), /*#__PURE__*/





          React.createElement(SocialLinks, null)), /*#__PURE__*/

        React.createElement("form", { id: "contact-form", action: "https://formspree.io/f/xrgovayq", method: "POST" }, /*#__PURE__*/
          React.createElement("input", { placeholder: "Name", name: "name", type: "text", required: true }), /*#__PURE__*/
          React.createElement("input", { placeholder: "Email", name: "_replyto", type: "email", required: true }), /*#__PURE__*/
          React.createElement("textarea", { placeholder: "Message", type: "textarea", name: "message" }), /*#__PURE__*/
          React.createElement("input", { class: "button", id: "submit", value: "Submit", type: "submit" })))));




};

/***********************
  Footer Component
 ***********************/

const Footer = props => {
  return /*#__PURE__*/(
    React.createElement("footer", null, /*#__PURE__*/
      React.createElement("div", { class: "wrapper" }, /*#__PURE__*/
        React.createElement("p", { class: "brand" }, "camila ", /*#__PURE__*/
            React.createElement("strong", null, "l."), " oliveira"), /*#__PURE__*/
        React.createElement("p", null, "Copyright \xA9 ",
          new Date().getFullYear(), " by ", /*#__PURE__*/
          React.createElement("a", {
            class: "",
            href: "https://studiourbanna.github.io",
            target: "_blank",
            rel: "noopener noreferrer",
            title: "Studio Urbanna"
          }, "stdurb"), ". Credits: ",
          React.createElement("a", {
            class: "",
            href: "https://studiourbanna.github.io",
            target: "_blank",
            rel: "noopener noreferrer",
            title: "Yago Est\xE9vez"
          }, "Yago Est\xE9vez"), "."),  /*#__PURE__*/

        React.createElement(SocialLinks, null))));



};

/***********************
  Social Links Component
 ***********************/

const SocialLinks = props => {
  return /*#__PURE__*/(
    React.createElement("div", { class: "social" }, /*#__PURE__*/
      React.createElement("a", {
        href: "https://www.linkedin.com/in/clcmo/",
        target: "_blank",
        rel: "noopener noreferrer",
        title: "Link to author's LinkedIn profile"
      },

        " ", /*#__PURE__*/
        React.createElement("i", { class: "fab fa-linkedin" })), /*#__PURE__*/

      React.createElement("a", {
        id: "profile-link",
        href: "https://github.com/clcmo",
        target: "_blank",
        rel: "noopener noreferrer",
        title: "Link to author's GitHub Profile"
      },

        " ", /*#__PURE__*/
        React.createElement("i", { class: "fab fa-github" })), /*#__PURE__*/

      React.createElement("a", {
        href: "https://codepen.io/clcmo",
        target: "_blank",
        rel: "noopener noreferrer",
        title: "Link to author's Codepen Profile"
      },

        " ", /*#__PURE__*/
        React.createElement("i", { class: "fab fa-codepen" }))));



};

/***********************
  Main Component
 ***********************/

class App extends React.Component {
  constructor(...args) {
    super(...args); _defineProperty(this, "state",
      {
        menuState: false
      }); _defineProperty(this, "toggleMenu",


        () => {
          this.setState(state => ({
            menuState: !state.menuState ?
              "active" :
              state.menuState === "deactive" ?
                "active" :
                "deactive"
          }));

        });
  }

  render() {
    return /*#__PURE__*/(
      React.createElement(React.Fragment, null, /*#__PURE__*/
        React.createElement(Menu, { toggleMenu: this.toggleMenu, showMenu: this.state.menuState }), /*#__PURE__*/
        React.createElement(Nav, { toggleMenu: this.toggleMenu, showMenu: this.state.menuState }), /*#__PURE__*/
        React.createElement(Header, null), /*#__PURE__*/
        React.createElement(About, null), /*#__PURE__*/
        React.createElement(Projects, null), /*#__PURE__*/
        React.createElement(Contact, null), /*#__PURE__*/
        React.createElement(Footer, null)));


  }

  componentDidMount() {
    const navbar = document.querySelector("#navbar");
    const header = document.querySelector("#welcome-section");
    const forest = document.querySelector(".forest");
    const silhouette = document.querySelector(".silhouette");
    let forestInitPos = -300;

    window.onscroll = () => {
      let scrollPos =
        document.documentElement.scrollTop || document.body.scrollTop;

      if (scrollPos <= window.innerHeight) {
        silhouette.style.bottom = `${parseInt(scrollPos / 6)}px`;
        forest.style.bottom = `${parseInt(forestInitPos + scrollPos / 6)}px`;
      }

      if (scrollPos - 100 <= window.innerHeight)
        header.style.visibility =
          header.style.visibility === "hidden" && "visible"; else
        header.style.visibility = "hidden";

      if (scrollPos + 100 >= window.innerHeight)
        navbar.classList.add("bg-active"); else
        navbar.classList.remove("bg-active");
    };

    (function navSmoothScrolling() {
      const internalLinks = document.querySelectorAll('a[href^="#"]');
      for (let i in internalLinks) {
        if (internalLinks.hasOwnProperty(i)) {
          internalLinks[i].addEventListener("click", e => {
            e.preventDefault();
            document.querySelector(internalLinks[i].hash).scrollIntoView({
              block: "start",
              behavior: "smooth"
            });

          });
        }
      }
    })();
  }
}


ReactDOM.render( /*#__PURE__*/React.createElement(App, null), document.getElementById("app"));