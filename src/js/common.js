import { create_profile, Profile } from "@/js/components/mainLeft/profile.js";
import { Sidebar } from "@/js/components/mainLeft/sidebar.js";
import { create_post } from "@/js/components/mainLeft/createPost.js";
import { HighLine } from "@/js/components/mainMiddle/highline.js";
import { create_post as create_simple_post } from "@/js/components/mainMiddle/createPost.js";
import { CardList } from "@/js/components/mainMiddle/cardList.js";
import { create_message } from "@/js/components/mainRight/message.js";
import { FriendList } from "@/js/components/mainRight/friendList.js";
import { RequestList } from "@/js/components/mainRight/requestList.js";
import { profile, sidebar, highline, message, request, cards } from "/data/db.json"

/* NavBar */
export const navbar = document.querySelector('nav');
export const navbar_container = navbar.querySelector('.container');
export const navbar_container_logo = navbar_container.querySelector('.logo');
export const navbar_container_searchBar = navbar_container_logo.querySelector(".search-bar")
export const navbar_container_create = navbar_container.querySelector(".create")
export const navbar_container_create_img = navbar_container.querySelector("img")

/* Main */
export const main = document.querySelector('main')
export const main_container = main.querySelector('.container')

/* Main Left */
export const left = main_container.querySelector('.main-left')

export const left_profile = new Profile(profile.img_src, profile.name, profile.at).build()
export const left_sidebar = new Sidebar(sidebar).build()
export const left_create_post = create_post()


/* Main Middle */
export const middle = main_container.querySelector('.main-middle')
export const middle_highline = new HighLine(highline).build()
export const middle_create_post = create_simple_post(profile)
export const middle_card_list = new CardList(cards).build()

/* Main Right */

export const right = main_container.querySelector('.main-right')
export const right_message = create_message()
export const right_friend_list = new FriendList(message).build()
export const right_request_list = new RequestList(request).build()