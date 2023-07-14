export interface IEducationInfo {
    imgPath: String,
    graduateYear: String,
    schoolName: String,
    degree: String,
    gpa: String,
    extraInfos: String[]
}

export const EducationInfos: IEducationInfo[] = [
    {
        imgPath: "assets\\eduIcons\\graduate.png",
        graduateYear: "Expected 2025",
        schoolName: "University of California, Davis",
        degree: "Master of Science",
        gpa: "",
        extraInfos: [
            "Major in Computer Science"
        ]
    },
    {
        imgPath: "assets\\eduIcons\\undergrad.png",
        graduateYear: "2023",
        schoolName: "University of California, Davis",
        degree: "Bachelor of Science",
        gpa: "4.0/4.0",
        extraInfos: [
            "Major in Computer Science",
            "College of Letters & Science Dean's Honor List 2021-2023"
        ]
    },
]