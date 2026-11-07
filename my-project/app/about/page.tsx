import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

import React from "react";
const hobbies = [
  "Coding Side Projects",
  "Exploring AI Systems",
  "Open Source",
  "Tech Blogging",
  "Video Games",
  "Sci-Fi Movies",
  "Gadget Modding",
];

export default function About() {
  return (
    <div className="space-y-8 max-w-4xl mx-auto">
      <div className="space-y-2">
        <h1 className="text-3xl font-bold tracking-tight">About Me</h1>
        <p className="text-muted-foreground mt-1">
          A bit about my background, passions, and technical skill set.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <Card className="md:col-span-2">
          <CardHeader>
            <CardTitle>My Story</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4 text-muted-foreground leading-relaxed">
            <p>
              Hi, I'm <strong>Darren Alarte</strong>. I am a passionate developer dedicated to building clean, efficient, and user-centric web applications. My journey into programming started with a profound curiosity about how things work under the hood, which quickly evolved into a full-fledged career crafting modern software solutions.
            </p>
            <p>
              I specialize in working with modern web ecosystems, focusing heavily on React, Next.js, TypeScript, and Tailwind CSS to bridge the gap between robust backend systems and beautiful frontend interfaces. I thrive on solving complex computational logic problems, optimizing site performance, and continuously adapting to emerging technologies.
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Interests & Hobbies</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex flex-wrap gap-2">
              {hobbies.map((hobby) => (
                <span key={hobby} className="inline-flex items-center rounded-full border border-transparent bg-secondary px-2.5 py-1 text-xs font-semibold text-secondary-foreground">
                  {hobby}
                </span>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
