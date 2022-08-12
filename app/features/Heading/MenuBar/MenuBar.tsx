import { useState } from "react";

import { ButtonBar } from "./ButtonBar";
import { Notifications, Selections } from "./ButtonBar/types";
import { Drawer } from "./Drawer";

export const MenuBar = () => {
  const [selected, setSelected] = useState<Selections | null>(null);

  return (
    <>
      <ButtonBar
        selected={selected}
        onSelect={setSelected}
        notification={Notifications.inactive}
      />
      <Drawer
        selected={selected}
        AlertNotificationProps={{
          severity: "error",
          title: "You need to connect to avalanche",
          actionLabel: "Switch",
          inline: true,
          onAction: () => {},
        }}
        onClose={() => setSelected(null)}
      />
    </>
  );
};
