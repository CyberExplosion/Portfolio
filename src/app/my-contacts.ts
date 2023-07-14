export interface IContactInfo {
    logoPath: string,
    contactTitle: string,
    linkTitle: string,
    link: string
}

export const ContactInfos: IContactInfo[] = [
    {
        logoPath: "assets\\socialIcons\\linkedin.svg",
        contactTitle: "LinkedIn",
        linkTitle: "koinguyen",
        link: "https://www.linkedin.com/in/koi-nguyen/"
    },
    {
        logoPath: "assets\\socialIcons\\github.svg",
        contactTitle: "GitHub",
        linkTitle: "CyberExplosion",
        link: "https://github.com/CyberExplosion"
    },
    {
        logoPath: "assets\\socialIcons\\mail.svg",
        contactTitle: "Email",
        linkTitle: "kminhnguyen@outlook.com",
        link: "mailto:kminhnguyen@outlook.com"
    },
]