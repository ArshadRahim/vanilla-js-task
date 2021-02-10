import { createElement } from '../react';
import {Header} from './header';

export const  messages = () => {

return createElement('div', {class:"messages-page-main-container"},
Header(),
createElement('div', {class:"main-flex-container-messages"},
createElement('div', {class:"messages-body"},
createElement('div', {class:"messages-head"},
createElement('h3', null, "that_dumb_coder"),
createElement('i', {class:"far fa-edit"})
),

createElement('div', {class:"messages-area"},
createElement('img', {class:"profile-picture", src:"https://instagram.flhe7-1.fna.fbcdn.net/v/t51.2885-15/e35/138324200_124371809517757_5069290954391880264_n.jpg?_nc_ht=instagram.flhe7-1.fna.fbcdn.net&_nc_cat=101&_nc_ohc=muDKfxwPXzIAX-6DiPi&tp=1&oh=96c7808903e17f50e4798cce89c799a2&oe=6036B139" }),
createElement('div',{class:"nameandtime-container"},
createElement('p',{class:"para-name"}, "incubus-pakistan"),
createElement('p', {class:"message-time"}, "Active 7 hours ago")),
),

createElement('div', {class:"messages-area"},
createElement('img', {class:"profile-picture", src:"https://instagram.flhe7-1.fna.fbcdn.net/v/t51.2885-15/e35/138324200_124371809517757_5069290954391880264_n.jpg?_nc_ht=instagram.flhe7-1.fna.fbcdn.net&_nc_cat=101&_nc_ohc=muDKfxwPXzIAX-6DiPi&tp=1&oh=96c7808903e17f50e4798cce89c799a2&oe=6036B139" }),
createElement('div',{class:"nameandtime-container"},
createElement('p',{class:"para-name"}, "incubus-pakistan"),
createElement('p', {class:"message-time"}, "Active 7 hours ago")),
),
createElement('div', {class:"messages-area"},
createElement('img', {class:"profile-picture", src:"https://instagram.flhe7-1.fna.fbcdn.net/v/t51.2885-15/e35/138324200_124371809517757_5069290954391880264_n.jpg?_nc_ht=instagram.flhe7-1.fna.fbcdn.net&_nc_cat=101&_nc_ohc=muDKfxwPXzIAX-6DiPi&tp=1&oh=96c7808903e17f50e4798cce89c799a2&oe=6036B139" }),
createElement('div',{class:"nameandtime-container"},
createElement('p',{class:"para-name"}, "incubus-pakistan"),
createElement('p', {class:"message-time"}, "Active 7 hours ago")),
),
createElement('div', {class:"messages-area"},
createElement('img', {class:"profile-picture", src:"https://instagram.flhe7-1.fna.fbcdn.net/v/t51.2885-15/e35/138324200_124371809517757_5069290954391880264_n.jpg?_nc_ht=instagram.flhe7-1.fna.fbcdn.net&_nc_cat=101&_nc_ohc=muDKfxwPXzIAX-6DiPi&tp=1&oh=96c7808903e17f50e4798cce89c799a2&oe=6036B139" }),
createElement('div',{class:"nameandtime-container"},
createElement('p',{class:"para-name"}, "incubus-pakistan"),
createElement('p', {class:"message-time"}, "Active 7 hours ago")),
),
createElement('div', {class:"messages-area"},
createElement('img', {class:"profile-picture", src:"https://instagram.flhe7-1.fna.fbcdn.net/v/t51.2885-15/e35/138324200_124371809517757_5069290954391880264_n.jpg?_nc_ht=instagram.flhe7-1.fna.fbcdn.net&_nc_cat=101&_nc_ohc=muDKfxwPXzIAX-6DiPi&tp=1&oh=96c7808903e17f50e4798cce89c799a2&oe=6036B139" }),
createElement('div',{class:"nameandtime-container"},
createElement('p',{class:"para-name"}, "incubus-pakistan"),
createElement('p', {class:"message-time"}, "Active 7 hours ago")),
)),
createElement('div', {class:"send-message-container"},
createElement('div', {class:"ico-cont"},
createElement('i', {class:"fab fa-telegram"})),
createElement('p', {class:"your-messages"}, "Your Messages"),
createElement('p', {class:"para-send"}, "Send private messages and photos to a friend or group"),
createElement('a', {class:" btn btn-primary"}, "Send Messages"),

)
))

}