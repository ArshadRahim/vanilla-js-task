import {createElement} from '../react';
import {Header} from './header';


export const explore= ()=>{

    


    let first = [
        {
            sourse: {src:"https://instagram.flhe7-1.fna.fbcdn.net/v/t51.2885-15/e35/140058348_233264344922519_9207861013891920271_n.jpg?_nc_ht=instagram.flhe7-1.fna.fbcdn.net&_nc_cat=1&_nc_ohc=82FVYPorGygAX8uLFp7&tp=1&oh=d4ff70ed56246fc5bd54914e286a1650&oe=60315768&ig_cache_key=MjQ4OTc0NDcxNDIzNzEyMzc5OQ%3D%3D.2"}

        },
        {
            sourse:{src:"https://instagram.flhe7-1.fna.fbcdn.net/v/t51.2885-15/e35/p1080x1080/138764683_139972464489963_2913323871229216076_n.jpg?_nc_ht=instagram.flhe7-1.fna.fbcdn.net&_nc_cat=1&_nc_ohc=WN0yLKNRmLoAX_SM_Je&tp=1&oh=f38d3eee63138c9b03905e7738f0e387&oe=6034AB85"}
        },
        {
            sourse: {src:"https://instagram.flhe7-1.fna.fbcdn.net/v/t51.2885-15/e15/70493342_438133886796564_3558075363621650416_n.jpg?_nc_ht=instagram.flhe7-1.fna.fbcdn.net&_nc_cat=100&_nc_ohc=rwzsDd7y0oAAX-9uiiN&tp=1&oh=ae6a529f82ec33cef60cf0494c4b175c&oe=6031BAC1"}

        },

        {
            sourse: {src:"https://instagram.flhe7-1.fna.fbcdn.net/v/t51.2885-15/fr/e15/s1080x1080/69679184_432943233866731_6361092994629510948_n.jpg?_nc_ht=instagram.flhe7-1.fna.fbcdn.net&_nc_cat=107&_nc_ohc=O_Ssi4nrU2EAX-Fmyjp&tp=1&oh=216dfe9886166a202203ee0e5a737710&oe=6030F0AB"}

        },
        {
            sourse: {src:"https://instagram.flhe7-1.fna.fbcdn.net/v/t51.2885-15/sh0.08/e35/c0.66.1080.1080a/s640x640/70936671_776372142819705_4435443518695566616_n.jpg?_nc_ht=instagram.flhe7-1.fna.fbcdn.net&_nc_cat=109&_nc_ohc=aRGHWfWPlO4AX-cbjcl&tp=1&oh=77d353176822643ec01ff3bcb566a15b&oe=6033A5B9"}

        },
        {
            sourse: {src:"https://instagram.flhe7-1.fna.fbcdn.net/v/t51.2885-15/e15/c101.0.878.878a/s640x640/66004599_113097823149796_4399219307311940161_n.jpg?_nc_ht=instagram.flhe7-1.fna.fbcdn.net&_nc_cat=104&_nc_ohc=RgulpjzvqlEAX-0Al10&tp=1&oh=f29ea5e092103f698fed00f2b05cbaa7&oe=6034BA34"}

        },
        {
            sourse: {src:"https://instagram.flhe7-1.fna.fbcdn.net/v/t51.2885-15/e35/c80.0.320.320a/26295737_143370246350001_3598543885166444544_n.jpg?_nc_ht=instagram.flhe7-1.fna.fbcdn.net&_nc_cat=109&_nc_ohc=IjrdHwRjypkAX9bO0Ya&tp=1&oh=58bad822337e880c7e6d006c4157c43d&oe=6032A5E1"}

        },
        {
            sourse: {src:"https://instagram.flhe7-1.fna.fbcdn.net/v/t51.2885-15/sh0.08/e35/s640x640/16465116_1262074393874246_8089294714144030720_n.jpg?_nc_ht=instagram.flhe7-1.fna.fbcdn.net&_nc_cat=102&_nc_ohc=D2aFcNLTaT8AX9n7f0V&tp=1&oh=8ef97e3b1f5ba16f3bfd3278abcc7697&oe=6031977C"}

        },
        {
            sourse: {src:"https://instagram.flhe7-1.fna.fbcdn.net/v/t51.2885-15/sh0.08/e35/c180.0.720.720a/s640x640/90706981_2527851884172223_8358230011773995289_n.jpg?_nc_ht=instagram.flhe7-1.fna.fbcdn.net&_nc_cat=107&_nc_ohc=4hLX9OiZd-oAX9adqZW&tp=1&oh=c33c50a52e6a3a8becd5743d8c9a9d05&oe=603157A6"}

        },
        {
            sourse: {src:"https://instagram.flhe7-1.fna.fbcdn.net/v/t51.2885-15/e35/84550548_198805394533808_3055299004495444385_n.jpg?_nc_ht=instagram.flhe7-1.fna.fbcdn.net&_nc_cat=108&_nc_ohc=OfjPZGz_3JQAX8cUI3M&tp=1&oh=29299bc1141b835414840de03e8a7f26&oe=60322BE0"}

        },
        {
            sourse: {src:"https://instagram.flhe7-1.fna.fbcdn.net/v/t51.2885-15/e35/90515629_587921748733361_2111258919422589813_n.jpg?_nc_ht=instagram.flhe7-1.fna.fbcdn.net&_nc_cat=105&_nc_ohc=2cp3DpWqsZYAX-H4vJs&tp=1&oh=b70d6295c997e0ce647d2386c7c42380&oe=60339780"}

        },
        {
            sourse: {src:"https://instagram.flhe7-1.fna.fbcdn.net/v/t51.2885-15/e35/82193167_629809527589857_8425906487563169035_n.jpg?_nc_ht=instagram.flhe7-1.fna.fbcdn.net&_nc_cat=109&_nc_ohc=wAYdV0fEIywAX8qzB3h&tp=1&oh=68792d1858637ec62c01a9c50f968947&oe=603347E2"}

        },
        {
            sourse: {src:"https://instagram.flhe7-1.fna.fbcdn.net/v/t51.2885-15/e35/139248496_110989234249512_2036726487091003119_n.jpg?_nc_ht=instagram.flhe7-1.fna.fbcdn.net&_nc_cat=100&_nc_ohc=G8bz5ZRSrg4AX_P_8Ui&tp=1&oh=34178d7b7b800f38ac842ee7a2cf59dc&oe=6031421B&ig_cache_key=MjQ4NzY4NTg2NjQ0MTU4MjUyNA%3D%3D.2"}

        },
        {
            sourse: {src:"https://instagram.flhe7-1.fna.fbcdn.net/v/t51.2885-15/e35/139816401_138743914648206_1950168532251244840_n.jpg?_nc_ht=instagram.flhe7-1.fna.fbcdn.net&_nc_cat=1&_nc_ohc=PY04p5Yt36oAX9d8rKY&tp=1&oh=ef844d75a91ccff03e857b73bb3dfcae&oe=603176DF&ig_cache_key=MjQ5MDE4MTY5NTA3NDg0ODcxOQ%3D%3D.2"}

        },
        {
            sourse: {src:"https://instagram.flhe7-1.fna.fbcdn.net/v/t51.2885-15/e35/140484923_223680136051356_1600054009626183717_n.jpg?_nc_ht=instagram.flhe7-1.fna.fbcdn.net&_nc_cat=100&_nc_ohc=b1SvGGkYTJkAX9NX-lO&tp=1&oh=9dff32b936f72b7ead5269a6d610abf6&oe=60325315&ig_cache_key=MjQ5MTQ0OTgyNTA3MDAxMzUxMw%3D%3D.2"}

        },
        {
            sourse: {src:"https://instagram.flhe7-1.fna.fbcdn.net/v/t51.2885-15/fr/e15/p1080x1080/139045585_1828699313947033_3155876338727789887_n.jpg?_nc_ht=instagram.flhe7-1.fna.fbcdn.net&_nc_cat=101&_nc_ohc=wM4_jRBvuYMAX9n3pmq&tp=1&oh=0b1807be13abab03c5b2ab1779518239&oe=603229FC"}
        }

    ];

    let second = [];


    first.forEach((e)=> {

        const icon1 = createElement('i', {class: "fa fa-heart icon-1"}, "157k");
        const icon2 = createElement('i', {class: "fas fa-comment icon-2"}, "502");
        const iconsDiv = createElement('div', {class:"icons-div"}, icon1, icon2)
        const pictures = createElement('img',e.sourse)

        const picsContainer = createElement('div', {class:"pics-container"},pictures, iconsDiv)

        second.push(picsContainer)});



    const exploreMain = createElement('div',{class:"explore-page"},second)

    return createElement("section", {class:"explore-main"},Header() , exploreMain,)
    }
