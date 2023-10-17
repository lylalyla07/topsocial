import "./index.css"
// import { cards, message, request, profile, highline } from "@/js/database"

import { profile } from './data/db.json'

import {
  navbar_container_logo,
  navbar_container_create_img,

  left,
  left_profile,
  left_sidebar,
  left_create_post,

  middle,
  middle_highline,
  middle_create_post,
  middle_card_list,

  right,
  right_message,
  right_friend_list,
  right_request_list

} from "@/js/common"

/* NAV */
navbar_container_logo.textContent = "TopSocial"
navbar_container_create_img.src = profile.img_src

/* LEFT */

left.appendChild(left_profile)
left.appendChild(left_sidebar)
left.appendChild(left_create_post)

/* MIDDLE */
middle.appendChild(middle_highline)
middle.appendChild(middle_create_post)
middle.appendChild(middle_card_list)

/* RIGHT */
right.appendChild(right_message)
right_message.appendChild(right_friend_list)
right.appendChild(right_request_list)
