import self from "../img/self.png"
// import proj1 from "../img/proj1.png"
// import proj2 from "../img/proj2.png"
import proj3 from "../img/proj3.png"
// import proj4 from "../img/proj4.png"
// import proj5 from "../img/proj5.png"



export let colors = ["rgba(10,61,182,1)", "rgba(84,114,120,1)"];





export const info = {
    firstName: "Christopher",
    lastName: "Peret",
    initials: "CSP", 
    position: "a Full Stack Developer",
    selfPortrait: self, 
    gradient: `-webkit-linear-gradient(135deg, ${colors})`, 
    baseColor: colors[0],
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
            link: "https://github.com",
            icon: "fa fa-github",
            label: 'github'
        },
        {
            link: "https://linkedin.com/in/c-peret",
            icon: "fa fa-linkedin",
            label: 'linkedin'
        },
    ],
    bio: "Hello! I'm Chris I'm a software engineer in Las Vegas. I have a 13 year background in automation programming and I studied CompSci at UC Berkeley Extension online. I enjoy A good hike, and am pursuing my pilot's license. You should hire me!",
    skills:
        {
            proficientWith: ['javascript', 'python', 'c++', 'react', 'git', 'github', 'nodejs', 'express', 'mongodb', 'sql', 'html', 'css', 'bootstrap', 'material-ui','macos', 'windows', 'linux'],
            exposedTo: ['COBOL', "Visual Basic", "scada", "java", "c#", "swift", "php", "bash", "powershell", "vim", "aws"]
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
            title: "Project 1",
            live: "https:github.com",
            source: "https://github.com/", 
            // image: proj1
        },
        {
            title: "Project 2",
            live: "https:github.com",
            source: "https:github.com",
            image: proj2
        },
        {
            title: "Project 3",
            live: "https://social-space-615b764ada9e.herokuapp.com/login",
            source: "https://github.com/Zed-CSP/SocialNetwork",
            image: proj3
        },
        {
            title: "Project 4",
            live: "https:github.com",
            source: "https:github.com",
            // image: proj4
        },
        {
            title: "Project 5",
            live: "https:github.com",
            source: "https:github.com",
            // image: proj5
        }
    ]
}