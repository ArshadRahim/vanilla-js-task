import { createElement } from "../react";
import { footer, footerpostSecondary, footerSecondary } from "./footer";


export let signup = () => {
    

    return createElement('section', {class:"signup-page-container"},
    createElement('div', {class:"signupform-container"},
    createElement('form', {class:"signup-form"},
    createElement('img', { src:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQhJUjiTX51GbOltIaxmJE7Zk1Xjx1Sa2Q7sw&usqp=CAU"}),
    createElement('p', {class:"parag"}, "Sign up to see photos and videos from your friends."),
    // createElement('i',{class:"fab fa-facebook"}),
    createElement('a',{class:"facebook-log", href:"https://www.facebook.com/"}, "Log in with Facebook"),
    createElement('h3',{class: "login-alternate" , }, "or"),

    createElement('input',{placeholder:"Mobile number or Email"}),
    createElement('input',{placeholder:"Full Name"}),
    createElement('input',{placeholder:"Username"}),
    createElement('input',{placeholder:"Password"}),

    createElement('a', {class:"btn btn-primary btn-signUp", href:"http://localhost:9000/dashboard"},
    "Sign up"),
    
    createElement('p', {class:"terms"},"By signing up, you agree to our <span>Terms</span>, Data policy and Cookies Policy.")
    

    ),
    createElement('div',{class:"signup-page-signup-container"},
createElement('p', null, "Have an account?"),
createElement('a',{class:"signup-page-signUp", href:"http://localhost:9000/signup"}, "Log in"),
),

createElement('p', {class:"get-app-signup"}, "Get the app."),
createElement('div', {class:"store-links"},
createElement('a',{href:"https://itunes.apple.com/app/instagram/id389801252?pt=428156&ct=igweb.loginPage.badge&mt=8&vt=lo"},
createElement('img',{src:"https://www.instagram.com/static/images/appstore-install-badges/badge_ios_english-en.png/180ae7a0bcf7.png"})),
createElement('a',{href:"https://itunes.apple.com/app/instagram/id389801252?pt=428156&ct=igweb.loginPage.badge&mt=8&vt=lo"},
createElement('img',{src:"https://www.instagram.com/static/images/appstore-install-badges/badge_android_english-en.png/e9cd846dc748.png"}),)
)
    ),
    footer(), footerpostSecondary())
};