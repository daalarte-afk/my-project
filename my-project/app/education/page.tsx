import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { GraduationCap, Award } from "lucide-react";

const educationList = [
    {
        degree: "Bachelor of Science in Information Systems (BSIS)",
        institution: "Naga College Foundation",
        period: "2026 - Present",
        description: "Currently studying and specializing in computer programming, modern web frameworks, and network systems administration.",
        achievements: [
            "Active IT Student Member",
            "Focused on Full-Stack Web Development",
            "Hands-on experience with React, Next.js, and Tailwind CSS"
        ],
    },
    {
        degree: "Senior High School - General Academic Strand (GAS)",
        institution: "Pambuhan National High School",
        period: "2022 - 2025",
        description: "Took the General Academic Strand (GAS) with a focus on specialized computer electives to build a solid foundation in basic programming concepts, algorithmic logic, and technical troubleshooting prior to entering college.",
        achievements: [
            "Graduated with Honors",
        ],
    },
];

export default function Education() {
    return (
        <div className="space-y-8 max-w-6xl mx-auto px-4 py-8">
            <div className="space-y-2">
                <h1 className="text-4xl font-bold tracking-tight text-foreground">Education</h1>
                <p className="text-muted-foreground text-sm">
                    Academic background and formal training.
                </p>
            </div>

            <div className="space-y-6">
                {educationList.map((item, idx) => (
                    <Card key={idx} className="shadow-sm border border-border bg-card">
                        <CardHeader className="pb-2">
                            <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-2">
                                <div className="flex items-start gap-4">
                                    <div className="p-2 bg-secondary rounded-lg text-foreground mt-1">
                                        <GraduationCap className="h-5 w-5" />
                                    </div>
                                    <div>
                                        <CardTitle className="text-xl font-semibold text-foreground">{item.degree}</CardTitle>
                                        <CardDescription className="text-sm text-muted-foreground font-normal mt-1">
                                            {item.institution}
                                        </CardDescription>
                                    </div>
                                </div>
                                <span className="text-sm text-muted-foreground font-normal pt-1">
                                    {item.period}
                                </span>
                            </div>
                        </CardHeader>
                        <CardContent className="space-y-4 pt-2">
                            <p className="text-muted-foreground text-sm leading-relaxed">
                                {item.description}
                            </p>

                            <div className="space-y-2">
                                <h4 className="text-sm font-semibold flex items-center gap-1.5 text-foreground">
                                    <Award className="h-4 w-4 text-muted-foreground" /> Key Highlights
                                </h4>
                                <ul className="list-disc list-inside text-sm text-muted-foreground space-y-1.5 pl-1">
                                    {item.achievements.map((ach, i) => (
                                        <li key={i} className="marker:text-muted-foreground">
                                            {ach}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </CardContent>
                    </Card>
                ))}
            </div>
        </div>
    );
}
