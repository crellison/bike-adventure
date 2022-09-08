export const blobPath = {
  0: 'M61.9,-61.2C77.9,-45.9,87,-23,87.1,0.1C87.2,23.2,78.4,46.4,62.4,62.6C46.4,78.9,23.2,88.2,2.8,85.4C-17.6,82.6,-35.1,67.6,-49.5,51.4C-63.8,35.1,-74.9,17.6,-74.4,0.5C-73.9,-16.5,-61.8,-33.1,-47.4,-48.3C-33.1,-63.6,-16.5,-77.6,3.2,-80.8C23,-84,45.9,-76.4,61.9,-61.2Z',
  1: 'M51.2,-67C66.5,-59.4,79.1,-44.6,81.1,-28.6C83.2,-12.7,74.7,4.4,68.4,21.7C62.1,39.1,58,56.7,47,66.8C36,76.9,18,79.5,1.9,76.8C-14.1,74.2,-28.3,66.3,-43.6,57.6C-59,48.9,-75.6,39.4,-82.8,25C-90,10.7,-87.9,-8.6,-80.9,-25.2C-74,-41.8,-62.3,-55.7,-48,-63.6C-33.8,-71.5,-16.9,-73.3,0.5,-74.1C18,-74.9,35.9,-74.5,51.2,-67Z',
  2: 'M39.4,-48.1C51.6,-36.7,62.4,-24.8,67.2,-10.1C71.9,4.7,70.4,22.3,62.3,35.5C54.1,48.7,39.1,57.6,22.7,64.4C6.3,71.2,-11.6,76,-29.3,72.9C-47,69.7,-64.6,58.6,-70.5,43.2C-76.5,27.8,-70.8,8.1,-67.5,-12.1C-64.2,-32.4,-63.2,-53.3,-52.4,-65C-41.5,-76.6,-20.8,-79,-3.6,-74.8C13.6,-70.5,27.1,-59.5,39.4,-48.1Z',
  3: 'M61.2,-47.4C73.5,-33.3,73.8,-8.2,66.5,11.8C59.3,31.8,44.4,46.6,26.2,56C8,65.4,-13.6,69.3,-34.8,62.7C-56,56.2,-76.7,39.2,-82.6,17.7C-88.5,-3.9,-79.5,-30.1,-63.3,-45C-47,-60,-23.5,-63.8,0.5,-64.2C24.4,-64.5,48.8,-61.5,61.2,-47.4Z',
}

export const blobPathProps = {
  transform: 'translate(100 100)'
}

export const blobSvgProps = {
  viewBox: "0 0 200 200",
  xmlns: "http://www.w3.org/2000/svg",
}

/**
 * from: https://stackoverflow.com/a/57473981/7120542
 */
const svgToBase64 = (svgElementString: string): string => {
  // Remove any characters outside the Latin1 range
  const decoded = unescape(encodeURIComponent(svgElementString));
  // Now we can use btoa to convert the svg to base64
  const base64 = btoa(decoded);
  const imgSource = `data:image/svg+xml;base64,${base64}`;
  return imgSource;
}

const attrToProps = (attrs: Record<string, string>): string =>
  Object.entries(attrs).map(([attr, val]) => `${attr}="${val}"`).join(' ');

const base64FromSvgPath = (path: string): string => {
  const svgOpenTag = `<svg ${attrToProps(blobSvgProps)}>`;
  const pathTag = `<path d="${path}" ${attrToProps(blobPathProps)}></path>`
  return svgToBase64(svgOpenTag + pathTag + '</svg>');
}

export const base64Blobs = {
  0: base64FromSvgPath(blobPath[0]),
  1: base64FromSvgPath(blobPath[1]),
  2: base64FromSvgPath(blobPath[2]),
  3: base64FromSvgPath(blobPath[3]),
}
