const hexToRgb = (h: string) => {
    return [Number('0x' + h[1] + h[2]) | 0, Number('0x' + h[3] + h[4]) | 0, Number('0x' + h[5] + h[6]) | 0]
}

const rgbToHex = (r: number, g: number, b: number) => {
    return "#" + ((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1);
}

function avgHex(h1: string, h2: string) {
    const a = hexToRgb(h1);
    const b = hexToRgb(h2);

    return rgbToHex(~~((a[0] + b[0]) / 2), ~~((a[1] + b[1]) / 2), ~~((a[2] + b[2]) / 2));
}

export default avgHex;
