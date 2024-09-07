import Link from "next/link";

import { Copy } from "components/ui/copy";
import { Card, CardHeader } from "components/ui/card";
import { Delete } from "components/ui/delete";
import { Icons } from "components/ui/icons";
import { Button } from "components/ui/button";
import {
  Table,
  TableRow,
  TableCell,
  TableBody,
  TableCaption,
} from "components/ui/table";

import { BLOCKCHAIN, HEADER } from "lib/constants";
import { Context } from "lib/context";

import { useWalletStorage } from "hooks/useWalletStorage";

import { useAccount } from "wagmi";

export default function WalletsSection() {
  const { wallets } = Context();
  const { isConnected } = useAccount();
  const { clearWallets, removeWalletByIndex } = useWalletStorage();

  if (!isConnected) {
    return <p>Please connect your wallet to view the stored wallets.</p>;
  }

  return (
    <Card className="h-auto ">
      <CardHeader className="justify-between">
        <p>{HEADER.WALLETS}</p>
        <Button onClick={clearWallets} variant="link" className=" ">
          CLEAR ALL
        </Button>
      </CardHeader>
      <Table>
        <TableCaption className="text-muted">
          A list of your recent wallets. Always clear them after use.
        </TableCaption>
        <TableBody>
          {wallets.map(({ blockchain, address, privateKey }, index) => {
            const blockchainData =
              BLOCKCHAIN[blockchain as keyof typeof BLOCKCHAIN];

            const IconComponent = blockchainData?.icon;

            return (
              <TableRow key={index}>
                <TableCell>
                  <Link
                    href={blockchainData?.link + address}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {IconComponent && <IconComponent />}
                  </Link>
                </TableCell>
                <TableCell>{address}</TableCell>
                <TableCell>
                  <Copy text={privateKey} />
                </TableCell>
                <TableCell>
                  <Delete onWalletDelete={() => removeWalletByIndex(index)} />
                </TableCell>
              </TableRow>
            );
          })}
        </TableBody>
      </Table>
    </Card>
  );
}
