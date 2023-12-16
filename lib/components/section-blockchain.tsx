import { Card, CardContent, CardHeader } from "components/ui/card";
import { Button } from "components/ui/button";

import { BLOCKCHAIN, HEADER } from "lib/constants";
import { Context } from "lib/context";

export default function BlockchainSection() {
  const { selectedBlockchain, setSelectedBlockchain, running } = Context();

  return (
    <Card>
      <CardHeader>{HEADER.BLOCKCHAIN}</CardHeader>
      <CardContent className="flex flex-wrap -m-1.5">
        {Object.entries(BLOCKCHAIN).map(([key]) => (
          <div key={key} className="p-1.5">
            <Button
              id={key}
              onClick={() => setSelectedBlockchain(key)}
              disabled={selectedBlockchain === key || running}
            >
              {key.toUpperCase()}
            </Button>
          </div>
        ))}
      </CardContent>
    </Card>
  );
}
