import { FC } from "react";
import { Partytown } from "@builder.io/partytown/react";

export type HeadPartytownProps = {
  forwardArray?: Array<string>;
  debug?: boolean;
};

export const HeadPartytown: FC<HeadPartytownProps> = ({
  forwardArray = [],
  debug = false,
}) => {
  // Example forwardArray for GTM -> ['dataLayer.push']
  return <Partytown debug={debug} forward={forwardArray} />;
};
