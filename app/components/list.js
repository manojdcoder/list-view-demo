import { fromObject } from "@nativescript/core";

function getRandomNumbers() {
    const min = 10000000;
    const max = 99999999;
    const items = [];
    for (let i = 0; i < 100; i++) {
        const r = Math.random() * (max - min) + min;
        items.push(Math.floor(r));
    }
    return items;
}

export function onLoaded(args) {
    const listView = args.object;
    if (!listView.bindingContext) {
        listView.bindingContext = fromObject({
            items: getRandomNumbers()
        });
    }
}

export function onItemTap(args) {
    console.log("foobar");

    const page = args.object.page;
    const pageContext = page.bindingContext;
    if (pageContext.navigateTo) {
        page.frame.navigate(pageContext.navigateTo);
    }
}