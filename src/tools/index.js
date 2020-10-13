//@ts-check
/**
 * @param {number} delay
 */
export function debounceFactory(delay) {
  /**
   * @param {() => void} callback
   */
  let timer = null;
  return (callback) => {
    clearTimeout(timer);
    timer = setTimeout(() => {
      callback();
    }, delay);
  };
}

/**
 * @param {number} delay
 */
export function throttleFactory(delay) {
  /**
   * @param {() => void} callback
   */
  let preTime = Date.now();
  return (callback) => {
    let nowTime = Date.now();
    if (nowTime - preTime > delay) {
      callback();
      preTime = nowTime;
    }
  };
}

/**
 * @param {string} string
 */
export function detailImgSrc(string, isHead = false) {
  const rootPath = 'https://cube.elemecdn.com/',
    first = string.slice(0, 1),
    second = string.slice(1, 3),
    other = string.slice(3);
  const rgx = /(jpg|JPG|gif|GIF|jpeg|png)$/,
    exec = string.match(rgx)[0],
    result = `${rootPath}${first}/${second}/${other}.${exec}`;
  if (isHead) {
    return `${result}?x-oss-process=image/format,webp/resize,w_750/resize,p_50/blur,r_50,s_40`;
  }
  return result;
}
