import { fromObject } from "@nativescript/core";

export function onPageLoaded(args) {
    const page = args.object;
    if (!page.bindingContext) {
        page.bindingContext = fromObject({
            navigateTo: false
        });
    }
};

export function onTap() {
    console.log("world")
}