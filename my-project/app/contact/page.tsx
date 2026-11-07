import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, MapPin, Phone, Send } from "lucide-react";

export default function Contact() {
  return (
    <div className="space-y-8 max-w-6xl mx-auto px-4 py-8">
      <div className="space-y-2">
        <h1 className="text-4xl font-bold tracking-tight text-foreground">Contact Me</h1>
        <p className="text-muted-foreground text-sm">
          Have a question, collaboration idea, or project in mind? Reach out below!
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-start">
        {/* Left Column: Contact Cards gamit ang detalye mo */}
        <div className="space-y-4">
          <Card className="shadow-sm">
            <CardContent className="p-4 flex items-center gap-4">
              <Mail className="h-5 w-5 text-muted-foreground" />
              <div>
                <p className="text-xs text-muted-foreground font-medium">Email</p>
                <p className="text-sm font-semibold text-foreground">daalarte@gbox.ncf.edu.ph</p>
              </div>
            </CardContent>
          </Card>

          <Card className="shadow-sm">
            <CardContent className="p-4 flex items-center gap-4">
              <Phone className="h-5 w-5 text-muted-foreground" />
              <div>
                <p className="text-xs text-muted-foreground font-medium">Phone</p>
                <p className="text-sm font-semibold text-foreground">09511452773</p>
              </div>
            </CardContent>
          </Card>

          <Card className="shadow-sm">
            <CardContent className="p-4 flex items-center gap-4">
              <MapPin className="h-5 w-5 text-muted-foreground" />
              <div>
                <p className="text-xs text-muted-foreground font-medium">Location</p>
                <p className="text-sm font-semibold text-foreground">Naga City, Philippines</p>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Right Column: Message Form gamit ang pangalan mo bilang placeholder */}
        <Card className="md:col-span-2 shadow-sm">
          <CardHeader className="pb-4">
            <CardTitle className="text-lg font-semibold">Send a Message</CardTitle>
            <CardDescription className="text-xs">
              Fill out the form below and I'll get back to you soon.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <form className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-1.5">
                  <label htmlFor="name" className="text-sm font-medium text-foreground">Name</label>
                  <Input id="name" placeholder="Darren B. Alarte" className="bg-background" required />
                </div>
                <div className="space-y-1.5">
                  <label htmlFor="email" className="text-sm font-medium text-foreground">Email</label>
                  <Input id="email" type="email" placeholder="daalarte@gbox.ncf.edu.ph" className="bg-background" required />
                </div>
              </div>

              <div className="space-y-1.5">
                <label htmlFor="subject" className="text-sm font-medium text-foreground">Subject</label>
                <Input id="subject" placeholder="Project Inquiry / Hello" className="bg-background" required />
              </div>

              <div className="space-y-1.5">
                <label htmlFor="message" className="text-sm font-medium text-foreground">Message</label>
                <Textarea id="message" rows={4} placeholder="Your message here..." className="bg-background resize-none" required />
              </div>

              <Button type="submit" className="bg-foreground text-background hover:bg-foreground/90 font-medium px-4 py-2">
                <Send className="mr-2 h-4 w-4" /> Send Message
              </Button>
            </form>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
