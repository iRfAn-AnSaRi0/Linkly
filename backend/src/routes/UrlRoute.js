import { Router } from "express";
import { ShortURL } from "../controllers/UrlController.js";
import { RedirectURL } from "../controllers/UrlController.js";
import { ShowAllURL } from "../controllers/UrlController.js";

const Urlroute = Router();

Urlroute.route("/api/shorten").post(
    ShortURL
)
Urlroute.route("/api/history").get(
    ShowAllURL
)
Urlroute.route("/:shortcode").get(
    RedirectURL
)



export { Urlroute }