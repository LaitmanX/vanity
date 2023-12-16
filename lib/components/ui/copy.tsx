import { useEffect, useState } from "react";
import { Icons } from "components/ui/icons";

type CopyProps = {
  text: string;
};

export const Copy = ({ text }: CopyProps) => {
  const [copied, setCopied] = useState(false);

  const copyToClipboard = async () => {
    await navigator.clipboard.writeText(text);
    setCopied(true);
  };

  useEffect(() => {
    let timer: number;

    if (copied) {
      timer = setTimeout(() => {
        setCopied(false);
      }, 1000) as unknown as number;
    }

    return () => {
      if (timer) clearTimeout(timer);
    };
  }, [copied]);

  return (
    <>
      {(copied && <Icons.success />) || (
        <Icons.copy
          className="hover:cursor-pointer"
          onClick={copyToClipboard}
        />
      )}
    </>
  );
};
