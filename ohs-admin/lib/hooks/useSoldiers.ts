import { useState, useEffect } from "react";
import { Soldier, getSoldiers } from "../api/soldiers";

export default function useSoldiers() {
  const [soldiers, setSoldiers] = useState<Soldier[]>([]);

  useEffect(() => {
    getSoldiers().then((soldiers) => {
      setSoldiers(soldiers);
    });
  }, []);

  return soldiers;
}
