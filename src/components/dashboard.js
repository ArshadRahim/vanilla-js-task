import { createElement } from "../react";
import { footer, footerpostSecondary, stories } from './footer';
import { Header } from "./header";


export const Dashboard = ()=>{

            return createElement('section', {id:"main-outer"},
            Header(),
    
    
    footer(), footerpostSecondary())
    
};
