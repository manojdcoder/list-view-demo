import { fromObject } from "@nativescript/core";

export function onPageLoaded(args) {
    const page = args.object;
    if (!page.bindingContext) {
        page.bindingContext = fromObject({
            navigateTo: "~/detail/detail-page"
        });
    }
};

export function onTap() {
    console.log("world")
}