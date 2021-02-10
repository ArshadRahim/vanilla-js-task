import { createElement } from '../react';

export const Header = () => {
    

    let click =(link)=>({
        onclick:()=>{
            window.location.pathname = link;
        }
    })

    let navbar =[
        {   
            link:"/home",
            name:"Home",
            props:{
                class: "fa fa-home"
            }
        },
        {   
            link:"/messages",
            name:"Message",
            props:{
                class: "fab fa-facebook-messenger"
            }
        },
        {   
            link:"/explore",
            name:"Explore",
            props:{
                class: "far fa-compass",
                
            }
        },
        {   
            link:"/likes",
            name:"Likes",
            props:{
                class: "far fa-heart",
            
                
            }
        },
        {   
            link:"/profile",
            name:"profile",
            props:{
                src:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRaSsp4zkAkrip4TTzHAT3GHMCNZ5vR1VMCSA&usqp=CAU",
                width:"24px", height:"24px", padding:"1px"

            }
        }
    ]

    let list =[];

    navbar.forEach( (item)=>{

        if(item.link === "/profile"){
            
        let img = createElement('img',{ class:"header-profile-image", ...click(item.link),...item.props})
        list.push(img)
        }else{
            
        let i = createElement('i',{ class:"header-icons", ...click(item.link), ...item.props})
        list.push(i)
        }

    } )


    const imageInsta = createElement('img', {class:"insta-img", src:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQhJUjiTX51GbOltIaxmJE7Zk1Xjx1Sa2Q7sw&usqp=CAU"},)
    const searchbar = createElement('input', {class:"searchInput", placeholder:"Search"},)

    let instaImageDiv = createElement('div', null, imageInsta);
    let searchbarDiv = createElement('div', {class:"searchbar-div"}, searchbar);

    
    const menus = createElement('ul', {class:"menuList"},list);
    return createElement('header', {class:"main-header"}, instaImageDiv,searchbarDiv,menus, );

    
};