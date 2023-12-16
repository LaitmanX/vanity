import { Card, CardContent, CardHeader } from "components/ui/card";
import { Progress } from "components/ui/progress";

import { HEADER } from "lib/constants";
import { Context } from "lib/context";

export default function PerformanceSection() {
  const { difficulty, count, speed, status, probability } = Context();

  return (
    <Card>
      <CardHeader className="justify-between">
        <p>{HEADER.PERFORMANCE}</p>
        <p className="text-link text-sm ">⦿ {status}</p>
      </CardHeader>
      <CardContent className="text-sm md:text-base">
        <div className="flex  justify-between text-oranges uppercase ">
          <p>Difficulty: {difficulty}</p>
          <p>Generated: {count} addresses</p>
          <p>Speed: {speed} addr/s</p>
        </div>
        <div className="flex justify-between  text-oranges uppercase">
          <p>Probability: {probability}%</p>
          <Progress value={probability} max={100} className="w-2/3 mt-1" />
        </div>
      </CardContent>
    </Card>
  );
}
