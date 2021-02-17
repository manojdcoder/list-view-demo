import { fromObject } from "@nativescript/core";
import { getRandomNumbers } from "~/utils/list";

export function onPageLoaded(args) {
    const page = args.object;
    if (!page.bindingContext) {
        page.bindingContext = fromObject({
            items: getRandomNumbers()
        });
    }
};

exports.onTap = function () {
    console.log("hello")
};