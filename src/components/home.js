import { createElement } from "../react";
import { stories } from "./stories";
import { Header } from "./header";
import { footer, footerpostSecondary } from "./footer";

export const home = () => {
  return createElement(
    "section",
    { class: "homepage-main-container" },
    Header(),
    createElement(
      "div",
      { class: "main-flex-container" },

      createElement(
        "div",
        { class: "homePosts-container" },
        stories(),
        createElement(
          "div",
          { class: "after-stories" },
          createElement(
            "div",
            { class: "profile-and-title" },
            createElement("img", {
              class: "homeposts-profile-picture",
              src:
                "https://instagram.flhe7-1.fna.fbcdn.net/v/t51.2885-15/e35/140366880_745028069759123_7041846802210718810_n.jpg?_nc_ht=instagram.flhe7-1.fna.fbcdn.net&_nc_cat=111&_nc_ohc=sq1tl8bDvk4AX8PFL2g&tp=1&oh=8e69128daf91e3ea9bc57455f5c708de&oe=6035C177",
            }),
            createElement("h4", null, "gracey-loves-horses")
          ),
          createElement("img", {
            class: "post",
            src:
              "https://instagram.flhe7-1.fna.fbcdn.net/v/t51.2885-15/e35/s1080x1080/70410101_396981541216981_6564746115609267986_n.jpg?_nc_ht=instagram.flhe7-1.fna.fbcdn.net&_nc_cat=101&_nc_ohc=XpoNHKkd7YoAX_1ep82&tp=1&oh=643345f3173b6020ef747cba91474e97&oe=6034E33B",
          }),

          createElement(
            "div",
            { class: "icons-main-outer" },
            createElement(
              "div",
              { class: "icons-flex" },
              createElement(
                "div",
                { class: "icons-container" },
                createElement("i", { class: "far fa-heart" }),
                createElement("i", { class: "far fa-comment" }),
                createElement("i", { class: "fas fa-location-arrow" })
              ),
              createElement(
                "div",
                { class: "single-icon-container" },
                createElement("i", { class: "far fa-bookmark" })
              )
            )
          ),
          createElement("h4", { class: "number-of-likes" }, "40k likes"),
          createElement(
            "div",
            { class: "post-details" },
            createElement("h4", null, "that-dumb-coder"),
            createElement(
              "p",
              null,
              "This picture inspires me everytime i see it. It was taken 2 years ago whenn my daughter was only 8 years old. #instalove #horselovers #beauty&horse"
            )
          ),
          createElement("p", { class: "one-day" }, "1 day ago")
        )
      ),

      createElement(
        "div",
        { class: "home-page-sidebar" },

        createElement(
          "div",
          { class: "sidebar-profile-container1" },
          createElement("img", {
            class: "own-profile",
            src:
              "https://instagram.flhe7-1.fna.fbcdn.net/v/t51.2885-19/s150x150/137250472_410909933448918_624503931191219567_n.jpg?_nc_ht=instagram.flhe7-1.fna.fbcdn.net&_nc_ohc=mdryNBURtG0AX9Q0Xu0&tp=1&oh=434f6ca9e72b25f83299c6fd74a7aad8&oe=6037CD2D",
          }),
          createElement(
            "div",
            { class: "that-dumb-coder" },
            createElement(
              "h4",
              { class: "profile-heading" },
              "that-dumb-coder"
            ),
            createElement("p", null, "that-coder")
          ),
          createElement("h4", { class: "switch" }, "Switch")
        ),
        createElement(
          "div",
          { class: "suggestions" },
          createElement("p", null, "Suggestions For You"),
          createElement("p", { class: "see-all" }, "See All")
        ),

        createElement(
          "div",
          { class: "sidebar-profile-container" },
          createElement("img", {
            class: "own-profile",
            src:
              "https://instagram.flhe7-1.fna.fbcdn.net/v/t51.2885-15/sh0.08/e35/s640x640/141623428_719591145598269_1405973383804594245_n.jpg?_nc_ht=instagram.flhe7-1.fna.fbcdn.net&_nc_cat=109&_nc_ohc=WDJ9NgBX-_MAX_o4Asf&tp=1&oh=67ec7d4553eb10eb2c10422734452d36&oe=6036EF73",
          }),
          createElement(
            "div",
            { class: "that-dumb-coder" },
            createElement(
              "h4",
              { class: "profile-heading" },
              "pracownia_projektow"
            ),
            createElement("p", null, "New to Instagram")
          ),
          createElement("h4", { class: "switch" }, "Follow")
        ),
        createElement(
          "div",
          { class: "sidebar-profile-container" },
          createElement("img", {
            class: "own-profile",
            src:
              "https://instagram.flhe7-1.fna.fbcdn.net/v/t51.2885-15/e35/141356541_115765210422674_2285142056738289603_n.jpg?_nc_ht=instagram.flhe7-1.fna.fbcdn.net&_nc_cat=102&_nc_ohc=4pXffSuF470AX_RzTXh&tp=1&oh=ba8b97f5dd4e86a0329059eae8cf0dd8&oe=6039D5DC",
          }),
          createElement(
            "div",
            { class: "that-dumb-coder" },
            createElement("h4", { class: "profile-heading" }, "bisa.koding"),
            createElement("p", null, "js_world")
          ),
          createElement("h4", { class: "switch" }, "Follow")
        ),
        createElement(
          "div",
          { class: "sidebar-profile-container" },
          createElement("img", {
            class: "own-profile",
            src:
              "https://instagram.flhe7-1.fna.fbcdn.net/v/t51.2885-15/e35/139374326_428225694991956_5204532577842680903_n.jpg?_nc_ht=instagram.flhe7-1.fna.fbcdn.net&_nc_cat=100&_nc_ohc=Pco4ZE1GolgAX81G3Ro&tp=1&oh=fb629c74717c5c1a82273345e81a6fed&oe=6039D404",
          }),
          createElement(
            "div",
            { class: "that-dumb-coder" },
            createElement(
              "h4",
              { class: "profile-heading" },
              "adquatsolutions"
            ),
            createElement("p", null, "New to Instagram")
          ),
          createElement("h4", { class: "switch" }, "Follow")
        ),
        createElement(
          "div",
          { class: "sidebar-profile-container" },
          createElement("img", {
            class: "own-profile",
            src:
              "https://instagram.flhe7-1.fna.fbcdn.net/v/t51.2885-15/e35/137226497_316838449657755_2948750572875093189_n.jpg?_nc_ht=instagram.flhe7-1.fna.fbcdn.net&_nc_cat=103&_nc_ohc=_42ig5rXaO4AX8urgZJ&tp=1&oh=9655fd3dc7432f94fe16ab8bcf4ce950&oe=603811AA",
          }),
          createElement(
            "div",
            { class: "that-dumb-coder" },
            createElement(
              "h4",
              { class: "profile-heading" },
              "appliedinsights"
            ),
            createElement("p", null, "hello-coding")
          ),
          createElement("h4", { class: "switch" }, "Follow")
        ),
        createElement(
          "div",
          { class: "sidebar-profile-container" },
          createElement("img", {
            class: "own-profile",
            src:
              "https://instagram.flhe7-1.fna.fbcdn.net/v/t51.2885-15/e35/138324200_124371809517757_5069290954391880264_n.jpg?_nc_ht=instagram.flhe7-1.fna.fbcdn.net&_nc_cat=101&_nc_ohc=muDKfxwPXzIAX-6DiPi&tp=1&oh=96c7808903e17f50e4798cce89c799a2&oe=6036B139",
          }),
          createElement(
            "div",
            { class: "that-dumb-coder" },
            createElement("h4", { class: "profile-heading" }, "incubusindia"),
            createElement("p", null, "that-indian-coder")
          ),
          createElement("h4", { class: "switch" }, "Follow")
        ),
        createElement(
          "div",
          { class: "for-footer" },
          footer(),
          footerpostSecondary()
        )
      )
    )
  );
};
