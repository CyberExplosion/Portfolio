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
]