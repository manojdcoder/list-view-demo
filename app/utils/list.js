export function getRandomNumbers() {
    const min = 10000000;
    const max = 99999999;
    const items = [];
    for (let i = 0; i < 100; i++) {
        const r = Math.random() * (max - min) + min;
        items.push(Math.floor(r));
    }
    return items;
};