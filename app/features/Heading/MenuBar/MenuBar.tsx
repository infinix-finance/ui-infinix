import { useStore } from "@/stores/root";
import { getSidebarNotifications } from "@/stores/slices/notifications";
import { useState } from "react";

import { ButtonBar } from "./ButtonBar";
import { Notifications, Selections } from "./ButtonBar/types";
import { Drawer } from "./Drawer";

export const MenuBar = () => {
  const [selected, setSelected] = useState<Selections | null>(null);
  const sidebarNotifications = useStore(getSidebarNotifications);

  return (
    <>
      <ButtonBar
        selected={selected}
        onSelect={setSelected}
        notification={Notifications.inactive}
      />
      <Drawer
        selected={selected}
        AlertNotificationProps={sidebarNotifications}
        onClose={() => setSelected(null)}
      />
    </>
  );
};
