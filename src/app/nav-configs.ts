export interface INavAnchor {
    imgPath: string;
    text: string;
    link: string;
}

export const NAVANCHORS = [
    { imgPath: 'assets\\navIcons\\lightBulb.svg', text: 'Projects', link: "#projects" },
    { imgPath: 'assets\\navIcons\\cog.svg', text: 'Skills', link: "#skills" },
    { imgPath: 'assets\\navIcons\\cap.svg', text: 'Educations', link: "#educations" },
    { imgPath: 'assets\\navIcons\\envelope.svg', text: 'Contacts', link: "#contacts" },
]