import { INavAnchor } from "./nav-configs";
export interface IProjectInfo {
    imgPath: String;
    title: String;
    techList: string[];
    description: String;
    mainButton?: INavAnchor;
    sideButton?: INavAnchor;
}

export const ProjectInfos = [
    {
        imgPath: 'assets\\projects\\map.png',
        title: 'Vector Collection Sites Interactive Map',
        techList: ['NextJS', 'React', 'Redux', 'SWR', 'TypeScript', 'DaisyUI', 'NodeJS', 'Miro'],
        description: "Developed a cross-platform interactive mapping system to display malaria vector collection sites over the islands of Principe and Sao Tome for UC Davis Vector Genetics Laboratory. Used NextJS as a full-stack framework, created a web application for data collection, and map visualization by 100 percent. Conveyed design ideas and accelerated clients' interaction through Miro's collaboration board. Utilized flux pattern with Redux to handle inter-component communications and site updates. Leveraged React SWR to manage data fetching and caching from back-end services. Implemented a NodeJS REST API with NextJS API route to handle data sanitization and front-end requests, allowing serverless integration in the future. Programed using TypeScript for automatic feedback and enforcing type safety.",
        mainButton: {
            logo: "link",
            text: "Lab",
            link: "https://vectorgeneticslab.ucdavis.edu/"
        }
    },
    {
        imgPath: 'assets\\projects\\fallKing.png',
        title: 'Fall King',
        techList: ['Unity', 'C#'],
        description: "Fall King is a 2D vertical platformer built in Unity using C Sharp. Play as a knight and fall as far as you can while avoiding obstacles and enemies. Worked on creating game objects that interact with the game world and the player. Implemented the movement as well as the physics for the player to glide down and interact with the game world. Designed the AI system for two types of enemies that behave differently when the player is in range. Integrated Unity's new input system and separated the logic between hardware input, interactions, and actions.",
        mainButton: {
            logo: "link",
            text: "Live",
            link: "https://cyberexplosion.itch.io/fall-king"
        },
        sideButton: {
            logo: "github",
            text: "Code",
            link: "https://github.com/CyberExplosion/Fall-King"
        }
    },
    {
        imgPath: 'assets\\projects\\onlinestudy.png',
        title: 'Online Education Satisfaction Prediction',
        techList: ['Python', 'Jupyter', 'React', 'Bootstrap', 'TypeScript', 'Cloud Run', 'Docker', 'Express'],
        description: "Researched students' online learning experience during COVID using different machine learning techniques such as linear regression, support vector machine, neural network, etc. Collaborated on Jupyter Notebook, and utilized Python ML libraries like NumPy, Pandas, and Tensorflow to build models and predict student satisfaction. Presented results and findings on a website built using React with Bootstrap to accelerate front-end development. Dockerized the back-end Node.js REST API built using TypeScript and Express. Deployed the API container to Google Cloud Run to take advantage of automatic scaling and serverless computing.",
        mainButton: {
            logo: "link",
            text: "Live",
            link: "https://website-ecs-177-online-studying.vercel.app"
        },
        sideButton: {
            logo: "github",
            text: "Code",
            link: "https://github.com/ECS-171-Divorce-Team"
        }
    },
    {
        imgPath: 'assets\\projects\\deeplearning.png',
        title: 'Deep Learning Experiments',
        techList: ['Python', 'Jupyter', 'AWS', 'PyTorch', 'Tensorflow'],
        description: "Learned about the basic principle of designing and implementing a deep learning model for specific applications. Understood in depth how to train, optimize, and tune deep learning models such as CNN, RNN, and GNN with real-world data, images, text, graphs, etc. Practiced with industry-standard tools for researching and modeling deep learning with PyTorch and TensorFlow. Trained model using GPU with AWS EC2 instances.",
        mainButton: {
            logo: "link",
            text: "Live",
            link: "https://cyberexplosion.github.io/deep-learning-doc/"
        },
        sideButton: {
            logo: "github",
            text: "Code",
            link: "https://github.com/CyberExplosion/Deep-Learning-Projects"
        }
    },
    {
        imgPath: 'assets\\projects\\newsapp.png',
        title: 'UN News Feed Phone App',
        techList: ['Flutter', 'Android Studio', 'Firebase', 'SQLite'],
        description: "Android News Feed App that utilizes the United Nations RSS to deliver the latest news with a friendly design. Allowed users to easily browse and read top headlines using Google's Material Design. Designed widgets and layouts in Android Studio. The app is cross-platform using a single codebase through Flutter. Handled user authentication using Firebase Authentication and allowed users to save their favorite articles into the device's local memory through SQLite relational database.",
        mainButton: {
            logo: "play",
            text: "Demo",
            link: "https://youtu.be/Gzej8hVNrD4"
        },
        sideButton: {
            logo: "github",
            text: "Code",
            link: "https://github.com/CyberExplosion/NewsFeed-ECS198F"
        }
    },
    {
        imgPath: 'assets\\projects\\nutapp.png',
        title: 'Nutrition Android App',
        techList: ['Flutter', 'Firebase', 'Figma'],
        description: "Android Nutrition App that helps the user keeps track of their nutrition intake every day and builds a personal diet. Designed and prototyped on Figma, the application uses Firebase Authentication to handle user credentials. Developed on Flutter to support devices on multiple platforms. Supported social authentication through Google Sign-In and Facebook Sign-In to improve customer experience.",
        mainButton: {
            logo: "play",
            text: "Demo",
            link: "https://youtu.be/kFJVLyA1P3Q"
        },
        sideButton: {
            logo: "github",
            text: "Code",
            link: "https://github.com/CyberExplosion/Nut_App"
        }
    },
    {
        imgPath: 'assets\\projects\\nvsi.png',
        title: 'UC Davis New Viet Nam Studies Initiative Website',
        techList: ['NextJS', 'React', 'Figma'],
        description: `The main website for the UC Davis NVSI. Built using the Next.js web framework for its static web pages, the project is a collaboration with the student organization \"#include @Davis.\" Mainly worked on the Home and Community page for the site. Designed on Figma, the project aimed to provide the NVSI organization with a modern website, that is easy to navigate and attract more users to learn about the initiative.`,
        mainButton: {
            logo: "link",
            text: "Live",
            link: "https://newvietnam.ucdavis.edu/"
        },
        sideButton: {
            logo: "github",
            text: "Code",
            link: "https://github.com/include-davis/nvsi"
        }
    },
]