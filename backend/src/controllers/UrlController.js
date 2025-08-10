import { ApiError } from "../utils/ApiError.js";
import { ApiResponse } from "../utils/ApiResponse.js";
import { AsyncHandler } from "../utils/AsyncHandler.js";
import { URLSchema } from "../model/UrlModel.js";
import { nanoid } from "nanoid"


const ShortURL = AsyncHandler(async (req, res) => {

    const { orginalURL } = req.body
    console.log(orginalURL);

    if (!orginalURL) {
        throw new ApiError(400, "URL is required");
    }
    let exist = await URLSchema.findOne({ orginalURL });

    if (exist) {
        console.log("URL already exists, returning existing short code.");
        return res.status(200).json(
            new ApiResponse(200, {
                orginalURL: exist.orginalURL,
                shortURL: `${req.protocol}://${req.get("host")}/${exist.shortURL}`
            }, "Short URL already exists")
        );
    }

    const code = nanoid(7);

    const newURL = await URLSchema.create({
        orginalURL: orginalURL,
        shortURL: code,
    })

    if (!newURL) {
        throw new ApiError(500, "Server error");
    }

    return res.status(201).json(
        new ApiResponse(201, {
            orginalURL: newURL.orginalURL,
            shortURL: `${req.protocol}://${req.get("host")}/${newURL.shortURL}`
        }, "URL short successfully")
    )

})


const RedirectURL = AsyncHandler(async (req, res) => {
    const { shortcode } = req.params;
    console.log(shortcode);

    const UrlData = await URLSchema.findOne({ shortURL: shortcode })
    // if (!UrlData) {
    //     throw new ApiError(404, "Short URL not found");
    // }
    UrlData.clicks += 1;
    await UrlData.save();
    return res.redirect(UrlData.orginalURL);
})


const ShowAllURL = AsyncHandler(async(req, res)=>{
    const URLs = await URLSchema.find({});
    if (URLs.length === 0) {
        throw new ApiError(404, "No URLs Found");
    }

    return res.status(200).json(
        new ApiResponse(200, URLs, "Fetch all URLs")
    )
})

export { ShortURL, RedirectURL, ShowAllURL }
