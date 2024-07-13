import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const About = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-8 text-center">About William Functorism</h1>
      
      <Card className="mb-8">
        <CardHeader>
          <CardTitle>Biography</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-muted-foreground">
            William Functorism is a renowned expert in functional programming with over 15 years of experience
            in the field. He has contributed to numerous open-source projects and has authored several books
            on advanced functional programming techniques. William's passion for elegant and efficient code
            has made him a sought-after speaker at international conferences and workshops.
          </p>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Mission</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-muted-foreground">
            Our mission is to promote and advance the adoption of functional programming paradigms in
            software development. We believe that functional programming leads to more robust, maintainable,
            and scalable code. Through education, community engagement, and practical examples, we aim to
            empower developers to leverage the power of functional programming in their daily work.
          </p>
        </CardContent>
      </Card>
    </div>
  );
};

export default About;