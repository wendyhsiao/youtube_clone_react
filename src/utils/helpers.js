// 千分位逗點
export const commaFormat = function (str) {
  return str.replace(/\B(?=(\d{3})+(?!\d))/g, ',');
};
// 計數格式轉換
export const countFormat = function (str) {
  if (str.length <= 4) {
    str = str.replace(/\B(?=(\d{3})+(?!\d))/g, ',');
  } else if (str.length <= 5) {
    str = `${str.slice(0, 1)}.${str.slice(1, 2)}萬`;
  } else {
    str = `${str.slice(0, str.length - 4)}萬`;
  }
  return str;
};
// 換行轉 br
export const newline2br = (str) => {
  return str.replace(/(\r|\n|\r\n)/g, '<br/>');
};
// 日期轉換
export const fetchYear = (str, type) => {
  let date = str.slice(0, 10).split('-');
  if (type === 'year') return `${date[0]}年`;
  if (type === 'day') return `${Number(date[1])}月${Number(date[2])}日`;
};

export const descriptionFormat = (str) => {
  const regex = /(https|http):\/\/([\w.]+\/?)\S*(?=\s)/g;
  const urlList = new Set(str.match(regex));
  urlList.forEach((url) => {
    const regexUrl = new RegExp(`${url}`, 'g');
    str = str.replace(regexUrl, `<a href="${url}">${url}</a>`);
  });
  // const regex2 = /(?<!\[)#\S+/g; // 選擇 tag，排除色碼 [#ffffff]
  // const regex2 = new RegExp('([^\[])#\S+', 'g');
  const regex2 = /([^\[])#\S+/g;
  const tagList = new Set(str.match(regex2));
  tagList.forEach((tag) => {
    const regexTag = new RegExp(`${tag}`, 'g');
    str = str.replace(
      regexTag,
      `<a href="/results?search_query=${encodeURIComponent(tag)}">${tag}</a>`
    );
  });
  str = str.replace(/(\r|\n|\r\n)/g, '<br/>');
  return { __html: str };
};
