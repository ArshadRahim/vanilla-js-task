import {createElement} from "../react";
import { logIn } from "./logIn";
import { Dashboard } from "./dashboard";
import { Contact } from "./contact";
import { signup } from './signup';

export const Layout = ()=> {
    const renderLayout = (page) => createElement(
        "div",
        {style:
        "margin: auto; "
        },
        page);


if (location.pathname === "/"){
    return renderLayout(logIn());
}
else if (location.pathname === "/dashboard"){
    return renderLayout(Dashboard());
}
else if (location.pathname === "/contacts"){
    return renderLayout(Contact());
}
else if (location.pathname === "/signup"){
    return renderLayout(signup());
}};