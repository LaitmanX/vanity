import { Minus, Plus } from "lucide-react";

import { Card, CardContent, CardHeader } from "components/ui/card";
import { Input } from "components/ui/input";
import { Switch } from "components/ui/switch";
import { Button } from "components/ui/button";

import { HEADER } from "lib/constants";
import { Context } from "lib/context";

import useWorker from "hooks/useWorker";

export default function InputSettingSection() {
  const {
    prefix,
    setPrefix,
    suffix,
    setSuffix,
    threads,
    setThreads,
    isChecksum,
    setIsChecksum,
    running,
  } = Context();

  const { handleGenerateAddresses, stopGenerating } = useWorker();

  return (
    <Card>
      <CardHeader>{HEADER.PROPERTIES}</CardHeader>
      <CardContent className="flex-grow space-y-5">
        <div className="flex space-x-2">
          <Input
            width="100%"
            placeholder="PREFIX"
            value={prefix}
            onChange={(e) => setPrefix(e.target.value)}
            disabled={running}
          />
          <Input
            width="100%"
            placeholder="SUFFIX"
            value={suffix}
            onChange={(e) => setSuffix(e.target.value)}
            disabled={running}
          />
        </div>
        <div className="flex items-center space-x-5 justify-between content-center">
          <div className="flex items-center justify-center space-x-1 mt-2 ">
            <Button
              variant="icon"
              size="icon"
              onClick={() => setThreads(threads - 1)}
              disabled={running || threads <= 1}
            >
              <Minus className="h-4 w-4" />
            </Button>
            <div className="flex-1 text-center">
              <div className="text-3xl tracking-tighter text-oranges font-bold">
                {threads}
              </div>
              <div className="text-[0.70rem] uppercase text-muted ">
                Threads
              </div>
            </div>
            <Button
              variant="icon"
              size="icon"
              onClick={() => setThreads(threads + 1)}
              disabled={running}
            >
              <Plus className="h-3 w-4" />
            </Button>
          </div>
          <div className="flex items-center justify-center space-x-1 mt-2 text-sm">
            <Switch
              checked={isChecksum}
              onCheckedChange={setIsChecksum}
              disabled={running}
            />
            <span>CASE-SENSITIVE</span>
          </div>
          <div className="space-x-3 space-y-3">
            <Button onClick={handleGenerateAddresses} disabled={running}>
              GENERATE
            </Button>
            <Button onClick={stopGenerating} disabled={!running}>
              STOP
            </Button>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
