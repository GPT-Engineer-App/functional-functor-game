import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const blogPosts = [
  {
    title: "Introduction to Functional Programming",
    excerpt: "Learn the basics of functional programming and its core concepts.",
    date: "2023-03-15",
  },
  {
    title: "Mastering Higher-Order Functions",
    excerpt: "Explore the power and flexibility of higher-order functions in functional programming.",
    date: "2023-04-02",
  },
  {
    title: "Immutability and Its Benefits",
    excerpt: "Understand why immutability is crucial in functional programming and how to implement it.",
    date: "2023-04-20",
  },
  {
    title: "Functional Programming in JavaScript",
    excerpt: "Discover how to apply functional programming principles in JavaScript.",
    date: "2023-05-10",
  },
];

const Blog = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-8 text-center">Blog</h1>
      
      <div className="grid gap-6 md:grid-cols-2">
        {blogPosts.map((post, index) => (
          <Card key={index}>
            <CardHeader>
              <CardTitle>{post.title}</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground mb-4">{post.excerpt}</p>
              <div className="flex justify-between items-center">
                <span className="text-sm text-muted-foreground">{post.date}</span>
                <Button variant="outline">Read More</Button>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default Blog;