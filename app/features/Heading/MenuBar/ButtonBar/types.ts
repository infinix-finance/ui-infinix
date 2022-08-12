import { NetworkId } from "@/defi";

export enum Selections {
  notifications = "notifications",
  wallet = "wallet",
  menu = "menu",
}

export enum Notifications {
  inactive = "inactive",
  active = "active",
  unread = "unread",
}

export interface ButtonBarProps {
  selected: Selections | null;
  notification: Notifications;
  networkId?: NetworkId | null;
  onSelect: (selected: Selections) => void;
}
