import { faGithub, faLinkedin, faWordpress } from "@fortawesome/free-brands-svg-icons";
import self from "../img/self.png"
import proj1 from "../img/proj1.png"
import proj2 from "../img/proj2.png"
import proj3 from "../img/proj3.png"
import proj4 from "../img/proj4.png"
import proj5 from "../img/proj5.png"
import proj6 from "../img/proj6.png"
import proj7 from "../img/proj7.png"





export let colors = ["rgba(10,61,182,1)", "rgba(84,114,120,1)", "rgb(0, 206, 255)"];





export const info = {
    firstName: "Christopher",
    lastName: "Peret",
    initials: "CSP", 
    position: "a Full Stack Developer",
    selfPortrait: self, 
    gradient: `-webkit-linear-gradient(135deg, ${colors[0]}, ${colors[1]})`, 
    baseColor: colors[2],
    miniBio: [ 
        {
            emoji: '☕',
            text: 'fueled by coffee'
        },
        {
            emoji: '🎲',
            text: 'based in the Las Vegas'
        },
        {
            emoji: "💼",
            text: "Software Engineer"
        },
        {
            emoji: "📧",
            text: "Cperet89@gmail.com"
        }
    ],
    socials: [
        {
            link: "https://github.com/zed-csp",
            icon: faGithub,
            label: 'github'
        },
        {
            link: "https://linkedin.com/in/c-peret",
            icon: faLinkedin,
            label: 'linkedin'
        },
        {
            link: "https://cspdeveloper.wordpress.com/",
            icon: faWordpress,
            label: 'blog'
        }
    ],
    bio: "Hello! I'm Chris, I'm a software engineer in Las Vegas. I have a 13 year background in automation programming and I studied CompSci at UC Berkeley. I enjoy A good hike, and am pursuing my pilot's license. You should hire me!",
    skills:
        {
            proficientWith: ['javascript', 'python', 'c++', 'react', 'git', 'github', 'nodejs', 'express', 'mongodb', 'sql', 'html', 'css', 'bootstrap', 'material-ui','macos', 'windows', 'linux', "vim",],
            exposedTo: ['COBOL', "Visual Basic", "scada", "java", "c#", "swift", "php", "bash", "powershell",  "aws"]
        }
    ,
    hobbies: [
        {
            label: 'Pilot in training!',
            emoji: '🛩️👨🏻‍✈️'
        },
        {
            label: 'Foodie',
            emoji: '🥘🍣🍛'
        },
        {
            label: 'Robotics',
            emoji: '🦾🤖'
        },
        {
            label: 'Hiking',
            emoji: '🥾🏔️'
        }
    ],
    portfolio: [
        {
            title: "Apollo & GQL Book Search Engine",
            live: "https://book-search-engine-gql-217a88bfa6ce.herokuapp.com/",
            source: "https://github.com/Zed-CSP/bookSearchEngine-MERN",
            image: proj4
        },
        {
            title: "SQL Employee Tracker CLI",
            live: "https://github.com/Zed-CSP/employeeTracker-SQL",
            source: "https://github.com/Zed-CSP/employeeTracker-SQL",
            image: proj5
        },
        {
            title: "API Powered Air Quality App",
            live: "https://zed-csp.github.io/dangerForce-Proj-1/",
            source: "https://github.com/Zed-CSP/dangerForce-Proj-1", 
            image: proj1
        },
        {
            title: "SQL Reciepe Sharing Page",
            live: "https://kitchen-alchemy.herokuapp.com/",
            source: "https://github.com/Zed-CSP/codeConnoisseurs",
            image: proj2
        },
        {
            title: "Weather Dashboard",
            live: "https://zed-csp.github.io/weather-API-Dashboard/",
            source: "https://github.com/Zed-CSP/weather-API-Dashboard",
            image: proj6
        },
        {
            title: "Javascript Quiz",
            live: "https://zed-csp.github.io/js-Timed-Quiz/",
            source: "https://github.com/Zed-CSP/js-Timed-Quiz",
            image: proj7
        },
    ]
}
