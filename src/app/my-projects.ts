import { INavAnchor } from "./nav-configs";

export const TechLogoPath : {[key: string]: string} = {
    "amazon": "assets\\navIcons\\Image22.jpg",
    "javascript": "assets\\navIcons\\Image22.jpg",
    "react": "assets\\navIcons\\Image22.jpg"
}

export interface IProjectInfo{
    imgPath: String;
    title: String;
    techList: String[];
    description: String;
    mainButton: INavAnchor;
    sideButton: INavAnchor;
}


export const ProjectInfos = [
    {
        imgPath: 'assets\\navIcons\\Image22.jpg',
        title: 'CryptoCrowd Sentiment Analysis',
        techList: ['amazon', 'javascript', 'react'],
        description: "Cryptocurrency sentiment analysis on Twitter posts. Users can see the overall sentiment (positive, negative or neutral) of different Cryptocurrencies based on tweets. Users can also view keywords and an average sentiment score. React frontend and Node.js backend. Stateless application that uses Elasticache and S3 on AWS for persistence. Application was setup with an autoscaling group to scale in and out as needed.",
        mainButton: {
            imgPath: "assets\\navIcons\\Image22.jpg",
            text: "Demo",
            link: "#"
        },
        sideButton: {
            imgPath: "assets\\navIcons\\Image22.jpg",
            text: "Code",
            link: "#"
        }
    }
]