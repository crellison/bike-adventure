const imagekitPrefix = "https://ik.imagekit.io/wptests/cole-and-matt/"

export const buildImagePropsFromSrc = (src: string) => {
  return {
    src: imagekitPrefix + src,
    srcset: [300, 500, 750, 1000, 1500, 2500].map(width => `${imagekitPrefix}tr:w-${width}/${src} ${width}w`).join(',')
  }
}
