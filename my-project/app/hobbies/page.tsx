import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Camera, Gamepad2, Music, Dumbbell, Plane, BookOpen } from "lucide-react";

const hobbies = [
  {
    title: "Photography",
    icon: Camera,
    description: "Capturing street landscapes, urban architecture, and local scenery during afternoon walks around Naga City.",
  },
  {
    title: "Gaming",
    icon: Gamepad2,
    description: "Playing online strategy, tactical shooters, and multiplayer RPG games with friends to unwind after coding sessions.",
  },
  {
    title: "Music & Guitar",
    icon: Music,
    description: "Playing acoustic guitar, learning new chords, and exploring various indie and rock music playlists.",
  },
  {
    title: "Fitness & Running",
    icon: Dumbbell,
    description: "Staying active through regular home workout routines and weekend outdoor running sessions.",
  },
  {
    title: "Travel & Hiking",
    icon: Plane,
    description: "Exploring new places, experiencing diverse cultures, and discovering outdoor hiking trails during academic breaks.",
  },
  {
    title: "Reading",
    icon: BookOpen,
    description: "Fascinated by tech history, programming documentations, self-improvement books, and sci-fi novels.",
  },
];

export default function Hobbies() {
  return (
    <div className="space-y-8 max-w-6xl mx-auto px-4 py-8">
      <div className="space-y-2">
        <h1 className="text-4xl font-bold tracking-tight text-foreground">Hobbies & Interests</h1>
        <p className="text-muted-foreground text-sm">
          What I enjoy doing outside of coding.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {hobbies.map((hobby) => {
          const Icon = hobby.icon;
          return (
            <Card key={hobby.title} className="hover:shadow-md transition-shadow shadow-sm border border-border bg-card">
              <CardHeader>
                <div className="flex items-center gap-3">
                  <div className="p-2.5 bg-secondary rounded-lg text-foreground">
                    <Icon className="h-5 w-5" />
                  </div>
                  <CardTitle className="text-lg font-semibold text-foreground">{hobby.title}</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground leading-relaxed">{hobby.description}</p>
              </CardContent>
            </Card>
          );
        })}
      </div>
    </div>
  );
}
