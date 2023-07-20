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