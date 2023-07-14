export interface ISocial {
    logoPath: string,
    contactTitle: string,
    link: string
}

export const SocialInfos: ISocial[] = [
    {
        logoPath: "assets\\socialIcons\\linkedin.svg",
        contactTitle: "LinkedIn",
        link: "https://www.linkedin.com/in/koi-nguyen/"
    },
    {
        logoPath: "assets\\socialIcons\\github.svg",
        contactTitle: "GitHub",
        link: "https://github.com/CyberExplosion"
    },
    {
        logoPath: "assets\\socialIcons\\mail.svg",
        contactTitle: "Email",
        link: "mailto:kminhnguyen@outlook.com"
    },
]