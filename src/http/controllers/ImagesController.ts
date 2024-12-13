import { NextFunction, Request, Response } from "express";
import { ResponseUtil } from "../../utils/Response";
import path from "path";
import fs from "fs";

export class ImagesController{
    async get(req: Request, res: Response, next: NextFunction){
        const {type, id} = req.params;
        const imagesTypes = ["authors", "books"];

        if(!imagesTypes.includes(type)){
            ResponseUtil.sendError(res, "Invalid image type", 500, null);
            return;
        }

        let filePath = path.join(__dirname, "../../../", "uploads", type, id);

        if(!fs.existsSync(filePath)){
            ResponseUtil.sendError(res, "Invalid image", 404, null);
            return;
        }

        fs.readFile(filePath, (err, data) => {
            if(err){
                ResponseUtil.sendError(res, "Invalid image / image read error", 404, null);
                return;
            }
            res.set("Content-Type", "image/jpeg");
            res.send(data);
        });
    }
}