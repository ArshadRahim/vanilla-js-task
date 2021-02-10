import  { createElement }  from '../react';


export const footer = ()=>{


    let a = [
        {name:"About", link:"https://about.instagram.com/"},
        {name:"Blog", link:"https://about.instagram.com/en_US/blog"},
        {name:"Jobs", link:"https://www.instagram.com/about/jobs/"},
        {name:"Help",link:"https://help.instagram.com/"},
        {name:"Api",link:"https://www.instagram.com/developer/"},
        {name:"Privacy",link:"https://help.instagram.com/519522125107875"},
        {name:"Terms", link:"https://help.instagram.com/581066165581870"},
        {name:"Top Accounts", link:"https://www.instagram.com/directory/profiles/"},
        {name:"Hashtags", link:"https://www.instagram.com/directory/hashtags/"},
        {name:"Locations", link:"https://www.instagram.com/explore/locations/"},
    
    ];

    let b = [];


    a.forEach((e)=> {

        const links = createElement('a',{style:"font-size:14px; color: #8e8e8e; font-weight:500; text-decoration:none;" ,href:e.link},e.name)

        const linksDiv = createElement('div', {class:"link-div"},links)

        b.push(linksDiv)    });



    const main = createElement('div',{class:"footer-div"},b)

    return createElement("footer", {class:"footer-main"},main)
    }



    /*footer Secondary*/

    export const footerSecondary = ()=>{

    let a2 = [
        {name:"Beauty", link:"https://about.instagram.com/"},
        {name:"Dance & Performance", link:"https://about.instagram.com/en_US/blog"},
        {name:"Fitness", link:"https://www.instagram.com/about/jobs/"},
        {name:"Food & Drink",link:"https://help.instagram.com/"},
        {name:"Home & Garden",link:"https://www.instagram.com/developer/"},
        {name:"Music",link:"https://help.instagram.com/519522125107875"},
        {name:"Visual Arts", link:"https://help.instagram.com/581066165581870"},
    ];

    let b2 = [];


    a2.forEach((e)=> {

        const links2 = createElement('a',{style:"font-size:14px; color: #8e8e8e; font-weight:500; text-decoration:none;" ,href:e.link},e.name)

        const linksDiv2 = createElement('div', {class:"link-secoondary",},links2)

        b2.push(linksDiv2)    });



    const main2 = createElement('div',{class:"footer-secondary", style:"display:flex; flex-wrap:wrap; justify-content:space-around; align-content:center; ; "},b2)

    return createElement("footer", {class:"footer-secondary", style:"margin:auto; width:42%; height:6%;  "},main2)

}



export const footerpostSecondary = ()=>{

    let a3 = [
        {name:"English ", link:"https://about.instagram.com/"},
        {name:"@ 2021 Instagram from Facebook", link:"https://about.instagram.com/en-us/en_US/blog"},

    ];

    let b3 = [];


    a3.forEach((e)=> {

        const links3 = createElement('a',{style:"font-size:14px; color: #8e8e8e; font-weight:500; text-decoration:none;" ,href:e.link},e.name)

        const linksDiv3 = createElement('div', {class:"link-post-secoondary",},links3)

        b3.push(linksDiv3)    });



    const main3 = createElement('div',{class:"footer-post-secondary", style:"display:flex; flex-wrap:wrap; justify-content:space-around; align-content:center; ; "},b3)

    return createElement("footer", {class:"footer-post-secondary", style:"margin:auto; width:20%; height:6%;  "},main3)

}


 //stories//
 
export const stories = ()=>{



    let a5 = [
        {url:"https://images.unsplash.com/photo-1608576156180-4479395f7b30?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=667&q=80"},
        {name:"Blog", link:"https://about.instagram.com/en_US/blog"},
        {name:"Jobs", link:"https://www.instagram.com/about/jobs/"},
        {name:"Help",link:"https://help.instagram.com/"},
        {name:"Api",link:"https://www.instagram.com/developer/"},
        {name:"Privacy",link:"https://help.instagram.com/519522125107875"},
        {name:"Terms", link:"https://help.instagram.com/581066165581870"},
        {name:"Top Accounts", link:"https://www.instagram.com/directory/profiles/"},
        {name:"Hashtags", link:"https://www.instagram.com/directory/hashtags/"},
        {name:"Locations", link:"https://www.instagram.com/explore/locations/"},
    
    ];

    let b5 = [];


    a5.forEach((e)=> {

        const links5 = createElement('img',{ url:e.link})

        const linksDiv5 = createElement('div', {class:"link-div"},links5)

        b5.push(linksDiv5)    });



    const main5 = createElement('div',{class:"footer-div ", style:" width:60%; display:flex; justify-content: space-around; padding:12px;"},b5)

    return createElement("footer", {class:"footer-main"},main5)
    }

