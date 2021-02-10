import { createElement } from "../react";
import { logIn } from "./logIn";
import { saveyourinfo } from "./saveyourinfo";
import { Dashboard } from "./dashboard";
import { signup } from "./signup";
import { explore } from "./explore";
import { Header } from "./header";
import { messages } from "./messages";
import { home } from "./home";

export const Layout = () => {
  const renderLayout = (page) =>
    createElement("div", { style: "margin: auto; " }, page);

  if (location.pathname === "/") {
    return logIn();
  } else if (location.pathname === "/saveyourinfo") {
    return saveyourinfo();
  } else if (location.pathname === "/dashboard") {
    return Dashboard();
  } else if (location.pathname === "/signup") {
    return signup();
  } else if (location.pathname === "/explore") {
    return explore();
  } else if (location.pathname === "/home") {
    return home();
  } else if (location.pathname === "/messages") {
    return messages();
  }
};
