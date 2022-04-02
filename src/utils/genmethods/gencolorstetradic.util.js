export default function genColorsTetradic(n) {
    let colors = [];
    for (let i = 0; i < n; i++) {
      colors.push(((Math.random() * 0xfffff * 1000000).toString(16)).slice(0, 6));
    }
    return colors;
}