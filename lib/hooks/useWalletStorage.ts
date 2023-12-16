import { useEffect } from "react";
import { Context } from "lib/context";

export const useWalletStorage = () => {
  const { wallets, setWallets } = Context();

  const storageKey = "wallets";

  useEffect(() => {
    const savedWallets = localStorage.getItem(storageKey);
    if (savedWallets) {
      setWallets(JSON.parse(savedWallets));
    }
  }, [setWallets, storageKey]);

  useEffect(() => {
    if (wallets.length > 0) {
      localStorage.setItem(storageKey, JSON.stringify(wallets));
    }
  }, [wallets, storageKey]);

  const clearWallets = () => {
    localStorage.removeItem(storageKey);
    setWallets([]);
  };

  const removeWalletByIndex = (index: number) => {
    if (index >= 0 && index < wallets.length) {
      const updatedWallets = [...wallets];
      updatedWallets.splice(index, 1);
      setWallets(updatedWallets);
    }
  };

  return { clearWallets, removeWalletByIndex };
};
