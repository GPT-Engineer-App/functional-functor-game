import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Code } from "lucide-react";

const Index = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <section className="text-center mb-12">
        <Code className="h-16 w-16 mx-auto mb-4" />
        <h1 className="text-4xl font-bold mb-4">Welcome to William Functorism's World of Functional Programming</h1>
        <p className="text-xl text-muted-foreground">Explore the beauty and power of functional programming concepts</p>
      </section>

      <section className="grid md:grid-cols-2 gap-6 mb-12">
        <Card>
          <CardHeader>
            <CardTitle>Featured Article</CardTitle>
          </CardHeader>
          <CardContent>
            <h3 className="text-lg font-semibold mb-2">Understanding Monads in Functional Programming</h3>
            <p className="text-muted-foreground mb-4">Dive deep into the concept of monads and their practical applications in functional programming paradigms.</p>
            <Button variant="outline">Read More</Button>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>Upcoming Workshop</CardTitle>
          </CardHeader>
          <CardContent>
            <h3 className="text-lg font-semibold mb-2">Functional Patterns in JavaScript</h3>
            <p className="text-muted-foreground mb-4">Join us for an interactive session on implementing functional programming patterns in JavaScript.</p>
            <Button variant="outline">Register Now</Button>
          </CardContent>
        </Card>
      </section>

      <section className="text-center">
        <h2 className="text-2xl font-bold mb-4">Try Our Functional Programming Game</h2>
        <p className="text-muted-foreground mb-4">Test your skills with our interactive coding challenges!</p>
        <Button>Play Now</Button>
      </section>
    </div>
  );
};

export default Index;