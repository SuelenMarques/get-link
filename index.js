exports.getLinksFromMd = textMd => {

  if (textMd === undefined || textMd === "") {
    throw new Error("Erro: parâmetro vazio");
  }

  if (typeof textMd === 'number') {
    throw new Error("Erro: o parâmetro deve ser uma string");
  }

  let regexUrl = new RegExp (/(http:\/\/|https:\/\/)?(w{3}\.)?(\w)+(\.(\w){2,3}){1,2}/g);
  let regexMarkDown = new RegExp (/(?<=\[).*?(?=\])/g);

  let textUrl = textMd.match(regexUrl);
  let textMarkDown = textMd.match(regexMarkDown);

  let obj = {};
  let result = [];

  if (textUrl === null) {
    return [];
  }

  let output = textUrl.map((url, i) => {
    obj = {
      href: url,
      text: textMarkDown[i]
    }

    result.push(obj);
  });

  return result;
} 
