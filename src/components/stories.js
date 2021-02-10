import { createElement } from "../react";

export const stories = () => {
  // ============================================= Stories Section start Here ==========================================================
  let array = [
    {
      imgSrc:
        "https://instagram.flhe7-1.fna.fbcdn.net/v/t51.2885-15/e35/p1080x1080/137218268_432341048117310_632996006243899399_n.jpg?_nc_ht=instagram.flhe7-1.fna.fbcdn.net&_nc_cat=106&_nc_ohc=tzbFhyneqUkAX_Rsock&tp=1&oh=736951fac09d9226ecbcd7a2ddc764c3&oe=60382791",
      para: "Hena Gray",
    },
    {
      imgSrc:
        "https://instagram.flhe7-1.fna.fbcdn.net/v/t51.2885-15/e35/141639224_1147504299032841_3169191141559363586_n.jpg?_nc_ht=instagram.flhe7-1.fna.fbcdn.net&_nc_cat=109&_nc_ohc=0AN3I-e2LBgAX9bmMt3&tp=1&oh=d4719daede4fbb5d9cf14d1bce8e58cf&oe=6037C1DB",
      para: " Gracey_miles",

        imgSrc:
          "https://instagram.flhe7-1.fna.fbcdn.net/v/t51.2885-15/e35/141639224_1147504299032841_3169191141559363586_n.jpg?_nc_ht=instagram.flhe7-1.fna.fbcdn.net&_nc_cat=109&_nc_ohc=0AN3I-e2LBgAX9bmMt3&tp=1&oh=d4719daede4fbb5d9cf14d1bce8e58cf&oe=6037C1DB",
        para: " Gracey_miles",
      },
      {
        imgSrc:
          "https://instagram.flhe7-1.fna.fbcdn.net/v/t51.2885-15/e35/141015040_240134277555926_6147611302933006454_n.jpg?_nc_ht=instagram.flhe7-1.fna.fbcdn.net&_nc_cat=102&_nc_ohc=CK5sssRoe5cAX_WDfsh&tp=1&oh=a2a66cbdd7f4527fc57bda8a9598d757&oe=603813A7",
        para: " Tajwar_S",
      },
      {
        imgSrc:
          "https://instagram.flhe7-1.fna.fbcdn.net/v/t51.2885-15/e35/p1080x1080/141868857_821896198359515_3102383621842277534_n.jpg?_nc_ht=instagram.flhe7-1.fna.fbcdn.net&_nc_cat=111&_nc_ohc=SUEuQFWWyxEAX-UzSWx&tp=1&oh=9281ae8f66c629c440e0d9369ecdd183&oe=6036E652",
        para: "Zubiar_dk",
      },
      {
        imgSrc:
          "https://instagram.flhe7-1.fna.fbcdn.net/v/t51.2885-15/e35/141168919_2508333426137213_8444832479795454461_n.jpg?_nc_ht=instagram.flhe7-1.fna.fbcdn.net&_nc_cat=105&_nc_ohc=OogLzozTLK0AX9i_z5k&tp=1&oh=48cc9a7c5260a690794c1bb4a05b209b&oe=6039CC64",
        para: "Hena Gray",
      },
      {
        imgSrc:
          "https://instagram.flhe7-1.fna.fbcdn.net/v/t51.2885-15/e35/141484214_240877694207852_206435309474063534_n.jpg?_nc_ht=instagram.flhe7-1.fna.fbcdn.net&_nc_cat=108&_nc_ohc=tmj1ZyzUG08AX9tBM33&tp=1&oh=b4cf895ac7f40b5a1670ebc2394a99e0&oe=60399449",
        para: " Gracey_miles",
      },
      {
        imgSrc:
          "https://instagram.flhe7-1.fna.fbcdn.net/v/t51.2885-15/e35/141356541_115765210422674_2285142056738289603_n.jpg?_nc_ht=instagram.flhe7-1.fna.fbcdn.net&_nc_cat=102&_nc_ohc=4pXffSuF470AX_RzTXh&tp=1&oh=ba8b97f5dd4e86a0329059eae8cf0dd8&oe=6039D5DC",
        para: " Tajwar_S",
      },
      {
        imgSrc:
          "https://instagram.flhe7-1.fna.fbcdn.net/v/t51.2885-15/e35/141527966_247574700108660_195094871082594157_n.jpg?_nc_ht=instagram.flhe7-1.fna.fbcdn.net&_nc_cat=100&_nc_ohc=mfibkn57yNUAX_8uE_X&tp=1&oh=ad8418d13010fca247dea7481dcd43ec&oe=6036ED2A",
        para: "Zubiar_dk",
      },
      {
        imgSrc:
          "https://instagram.fisb5-1.fna.fbcdn.net/v/t51.2885-15/sh0.08/e35/c0.135.1079.1079a/s640x640/137563198_3861949867188643_7169653622087330223_n.jpg?_nc_ht=instagram.fisb5-1.fna.fbcdn.net&_nc_cat=107&_nc_ohc=H6LD59mwLNQAX9tezLF&tp=1&oh=b8995f4316cc26d9baa47512bf9c973e&oe=602AFB6D",
        para: "ali_Rehmani",
    },
    {
      imgSrc:
        "https://instagram.flhe7-1.fna.fbcdn.net/v/t51.2885-15/e35/141015040_240134277555926_6147611302933006454_n.jpg?_nc_ht=instagram.flhe7-1.fna.fbcdn.net&_nc_cat=102&_nc_ohc=CK5sssRoe5cAX_WDfsh&tp=1&oh=a2a66cbdd7f4527fc57bda8a9598d757&oe=603813A7",
      para: " Tajwar_S",
    },
    {
      imgSrc:
        "https://instagram.flhe7-1.fna.fbcdn.net/v/t51.2885-15/e35/p1080x1080/141868857_821896198359515_3102383621842277534_n.jpg?_nc_ht=instagram.flhe7-1.fna.fbcdn.net&_nc_cat=111&_nc_ohc=SUEuQFWWyxEAX-UzSWx&tp=1&oh=9281ae8f66c629c440e0d9369ecdd183&oe=6036E652",
      para: "Zubiar_dk",
    },
    {
      imgSrc:
        "https://instagram.flhe7-1.fna.fbcdn.net/v/t51.2885-15/e35/141168919_2508333426137213_8444832479795454461_n.jpg?_nc_ht=instagram.flhe7-1.fna.fbcdn.net&_nc_cat=105&_nc_ohc=OogLzozTLK0AX9i_z5k&tp=1&oh=48cc9a7c5260a690794c1bb4a05b209b&oe=6039CC64",
      para: "Hena Gray",
    },
    {
      imgSrc:
        "https://instagram.flhe7-1.fna.fbcdn.net/v/t51.2885-15/e35/141484214_240877694207852_206435309474063534_n.jpg?_nc_ht=instagram.flhe7-1.fna.fbcdn.net&_nc_cat=108&_nc_ohc=tmj1ZyzUG08AX9tBM33&tp=1&oh=b4cf895ac7f40b5a1670ebc2394a99e0&oe=60399449",
      para: " Gracey_miles",
    },
    {
      imgSrc:
        "https://instagram.flhe7-1.fna.fbcdn.net/v/t51.2885-15/e35/141356541_115765210422674_2285142056738289603_n.jpg?_nc_ht=instagram.flhe7-1.fna.fbcdn.net&_nc_cat=102&_nc_ohc=4pXffSuF470AX_RzTXh&tp=1&oh=ba8b97f5dd4e86a0329059eae8cf0dd8&oe=6039D5DC",
      para: " Tajwar_S",
    },
    {
      imgSrc:
        "https://instagram.flhe7-1.fna.fbcdn.net/v/t51.2885-15/e35/141527966_247574700108660_195094871082594157_n.jpg?_nc_ht=instagram.flhe7-1.fna.fbcdn.net&_nc_cat=100&_nc_ohc=mfibkn57yNUAX_8uE_X&tp=1&oh=ad8418d13010fca247dea7481dcd43ec&oe=6036ED2A",
      para: "Zubiar_dk",
    },
    {
      imgSrc:
        "https://instagram.fisb5-1.fna.fbcdn.net/v/t51.2885-15/sh0.08/e35/c0.135.1079.1079a/s640x640/137563198_3861949867188643_7169653622087330223_n.jpg?_nc_ht=instagram.fisb5-1.fna.fbcdn.net&_nc_cat=107&_nc_ohc=H6LD59mwLNQAX9tezLF&tp=1&oh=b8995f4316cc26d9baa47512bf9c973e&oe=602AFB6D",
      para: "ali_Rehmani",
    },
    {
      imgSrc:
        "https://instagram.fisb5-1.fna.fbcdn.net/v/t51.2885-15/sh0.08/e35/c0.90.720.720a/s640x640/128437404_150735493451800_3342044046146891773_n.jpg?_nc_ht=instagram.fisb5-1.fna.fbcdn.net&_nc_cat=104&_nc_ohc=jTOJnYVkEq4AX-U-fKJ&tp=1&oh=4175c47cc07e8b163ded633304366bd1&oe=600388AD",
      para: " Donald Trumph",
    },
    {
      imgSrc:
        "https://instagram.fisb5-1.fna.fbcdn.net/v/t51.2885-15/sh0.08/e35/c0.135.1080.1080a/s640x640/125428017_1707338729441387_8584104875698393892_n.jpg?_nc_ht=instagram.fisb5-1.fna.fbcdn.net&_nc_cat=111&_nc_ohc=YSDZAbnYJr8AX_WECxE&tp=1&oh=10b9ad77e00f21dbfa8b2ab90d62dbe6&oe=602C8504",
      para: "ArshadGulbast",
    },
    {
      imgSrc:
        "https://instagram.fisb5-1.fna.fbcdn.net/v/t51.2885-15/sh0.08/e35/c0.180.1440.1440a/s640x640/124487128_227457412045877_7538632035711752549_n.jpg?_nc_ht=instagram.fisb5-1.fna.fbcdn.net&_nc_cat=105&_nc_ohc=OJ8ygJLLUtIAX-bnTpn&tp=1&oh=a2f0004be058473683667b7ac010ee2e&oe=60294C9C",
      para: "arshad-",
    },
  ];
  let emptyArray = [];
  array.forEach((e) => {
    const storiesImgs = createElement("img", { src: e.imgSrc }, e.name);
    const imageName = createElement("p", { class: "name-para" }, e.para);
    const storyDiv = createElement("div", { class: "story-div" }, storiesImgs);
    const stories = createElement(
      "div",
      { class: "all-stories" },
      storyDiv,
      imageName
    );
    emptyArray.push(stories);
  });
  const null1 = createElement("div", null);
  const null2 = createElement("div", null);
  const stry = createElement("div", { class: "new" }, emptyArray);
  return createElement("div", { class: "stories" }, null1, stry, null2);
};
