import { createElement } from "../react";


export let signup = () => {
    

    return createElement('div', {class:"signupform-container"},
    createElement('form', {class:"signup-form"},
    createElement('img', { src:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQhJUjiTX51GbOltIaxmJE7Zk1Xjx1Sa2Q7sw&usqp=CAU"}),
    createElement('p', {class:"parag"}, "Sign up to see photos and videos from your friends."),
    createElement('i',{class:"fab fa-facebook"}),
    createElement('button',{class:"facebook-login", href:"https://www.facebook.com/"}, "Log in with Facebook"),
    createElement('h3',{class: "login-alternative" , }, "or"),

    createElement('input',{placeholder:"Mobile number or Email"}),
    createElement('input',{placeholder:"Full Name"}),
    createElement('input',{placeholder:"Username"}),
    createElement('input',{placeholder:"Password"}),

    createElement('button', {class:"btn btn-primary btn-signUp"},"Sign up"),
    
    createElement('p', {class:"terms"},"By signing up, you agree to our <span>Terms</span>, Data policy and Cookies Policy.")

    ))
};