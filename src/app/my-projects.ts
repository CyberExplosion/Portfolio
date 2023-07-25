import { INavAnchor } from "./nav-configs";
export interface IProjectInfo {
    imgPath: String;
    title: String;
    techList: string[];
    description: String;
    mainButton: INavAnchor;
    sideButton: INavAnchor;
}

export const ProjectInfos = [
    {
        imgPath: 'assets\\projects\\fallKing.png',
        title: 'Fall King',
        techList: ['Unity', 'C#'],
        description: "Fall King is a 2D vertical platformer built in Unity using C Sharp. Play as a knight and fall as far as you can while avoiding obstacles and enemies. Worked on creating game objects that interact with the game world and the player. Implemented the movement as well as the physics for the player to glide down and interact with the game world. Designed the AI system for two types of enemies that behave differently when the player is in range. Integrated Unity's new input system and separated the logic between hardware input, interactions, and actions.",
        mainButton: {
            logo: "play",
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
        imgPath: 'assets\\navIcons\\Image22.jpg',
        title: 'CryptoCrowd Sentiment Analysis',
        techList: ['Amazon', 'TypeScript', 'React'],
        description: "Cryptocurrency sentiment analysis on Twitter posts. Users can see the overall sentiment (positive, negative or neutral) of different Cryptocurrencies based on tweets. Users can also view keywords and an average sentiment score. React frontend and Node.js backend. Stateless application that uses Elasticache and S3 on AWS for persistence. Application was setup with an autoscaling group to scale in and out as needed.",
        mainButton: {
            logo: "lightBulb",
            text: "Demo",
            link: "#"
        },
        sideButton: {
            logo: "github",
            text: "Code",
            link: "#"
        }
    },
    {
        imgPath: 'assets\\navIcons\\Image22.jpg',
        title: 'CryptoCrowd Sentiment Analysis',
        techList: ['Amazon', 'TypeScript', 'React'],
        description: "Cryptocurrency sentiment analysis on Twitter posts. Users can see the overall sentiment (positive, negative or neutral) of different Cryptocurrencies based on tweets. Users can also view keywords and an average sentiment score. React frontend and Node.js backend. Stateless application that uses Elasticache and S3 on AWS for persistence. Application was setup with an autoscaling group to scale in and out as needed.",
        mainButton: {
            logo: "lightBulb",
            text: "Demo",
            link: "#"
        },
        sideButton: {
            logo: "github",
            text: "Code",
            link: "#"
        }
    },


]