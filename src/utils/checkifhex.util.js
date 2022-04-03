export default function checkifhex(color) {
    return /^[0-9A-Fa-f]{6}$/i.test(color);
}