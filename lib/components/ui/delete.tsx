import { useEffect, useState } from "react";
import { Icons } from "components/ui/icons";

// Определение типа для пропсов
type DeleteProps = {
  onWalletDelete: () => void;
};

export const Delete = ({ onWalletDelete }: DeleteProps) => {
  const [deleted, setDeleted] = useState(false);

  const deleteElement = () => {
    setDeleted(true);
  };

  useEffect(() => {
    let timer: number;

    if (deleted) {
      timer = setTimeout(() => {
        setDeleted(false);
        onWalletDelete();
      }, 300) as unknown as number; // Приведение типа для совместимости с Node.js и браузерами
    }

    return () => {
      if (timer) clearTimeout(timer);
    };
  }, [deleted, onWalletDelete]);

  return (
    <>
      {(deleted && <Icons.success />) || (
        <Icons.delete
          className="hover:cursor-pointer"
          onClick={deleteElement}
        />
      )}
    </>
  );
};
