import {createElement} from "../react";
import { footer, footerpostSecondary } from "./footer";
import { Header } from "./header";

export const saveyourinfo = () => { 
    
    return createElement('section', {id:"main-outer"},
    Header(),
    createElement('div', {class:"save-your-info"},
    
    createElement('div', {class: "saveyourinfo-form-container"},
    createElement('form',{class:"saveyourinfo-form"},
    createElement('i', {class:"far fa-check-circle"}),
    createElement('h3', {class:"question"}, "Save your login info?"),
    createElement('p', null, "We can save your login info on this browser so you don't need to enter it again."),
    createElement('a', {class:"save-info-button", href:"http://localhost:9000/dashboard"}, "Save Info"),
    createElement('a', {class:"save-info-button-secondary", href:"http://localhost:9000/dashboard"}, "Not Now"),
    )
    ),  footer(), footerpostSecondary()),
    )
    
};