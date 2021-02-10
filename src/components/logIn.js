import { createElement }  from "../react";
import { footer, footerpostSecondary, footerSecondary } from './footer';

export let logIn = () => {

    return createElement('section', {class:"parent"},
    
    createElement('div',{class:"form-container",},
    createElement('img', { class:"insta-image", src:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRXxV6Yr6XMS7r3vrjPIrJnXVQDH3V1nfq3cQ&usqp=CAU"}),
   
    createElement('form',{class: "login-form"},
    createElement('img',{src:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQhJUjiTX51GbOltIaxmJE7Zk1Xjx1Sa2Q7sw&usqp=CAU"}),
    createElement('input',{placeholder:"Phone number, username or email"}),
    createElement('input',{placeholder:"Password", inputType:"password"}),
    createElement('a',{class: "btn btn-primary", href:"http://localhost:9000/save-your-info/"}, "Log In"),
    createElement('h3',{class: "login-alternative" , }, "or"),

    createElement('i',{class:"fab fa-facebook"}),
    createElement('a',{class:"facebook-login", href:"https://www.facebook.com/"}, "Log in with Facebook"),
    createElement('a',{class:"forgot-password", href:"https://www.instagram.com/accounts/password/reset/"}, "Forgot password?"),
    

createElement('div',{class:"signup-container"},
createElement('p', null, "Don't have an account?"),
createElement('a',{class:"signUp", href:"http://localhost:9000/signup"}, "Sign up"),
),

createElement('p', {class:"get-app"}, "Get the app."),
createElement('div', {class:"store-links"},
createElement('a',{href:"https://itunes.apple.com/app/instagram/id389801252?pt=428156&ct=igweb.loginPage.badge&mt=8&vt=lo"},
createElement('img',{src:"https://www.instagram.com/static/images/appstore-install-badges/badge_ios_english-en.png/180ae7a0bcf7.png"})),
createElement('a',{href:"https://itunes.apple.com/app/instagram/id389801252?pt=428156&ct=igweb.loginPage.badge&mt=8&vt=lo"},
createElement('img',{src:"https://www.instagram.com/static/images/appstore-install-badges/badge_android_english-en.png/e9cd846dc748.png"}),)
)
)
)
,footer(),footerSecondary(), footerpostSecondary(),
)
};
logIn()












