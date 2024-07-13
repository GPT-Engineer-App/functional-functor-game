import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const Game = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-8 text-center">Functional Programming Game</h1>
      
      <Card className="max-w-2xl mx-auto">
        <CardHeader>
          <CardTitle>Coming Soon: FP Challenge</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-muted-foreground mb-6">
            Get ready for an exciting game that will test your functional programming skills!
            Solve puzzles, optimize algorithms, and learn new concepts in a fun, interactive way.
          </p>
          <div className="text-center">
            <Button disabled>Play Game (Coming Soon)</Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default Game;