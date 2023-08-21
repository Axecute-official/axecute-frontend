import React from "react";
import { StyledNavbar } from "./StyledNavbar";
import { ConnectButton } from "@rainbow-me/rainbowkit";
import NoSsr from "../NoSsr";
import MainLogo from "../MainLogo";

export default function Navbar() {
  return (
    <NoSsr>
      <StyledNavbar>
        <MainLogo />
        <ConnectButton />
      </StyledNavbar>
    </NoSsr>
  );
}
