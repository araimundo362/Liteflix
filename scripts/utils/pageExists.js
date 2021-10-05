/**
 * middlewareExists
 *
 */

const fs = require('fs');
const path = require('path');

const readPages = (pathname) => fs.readdirSync(path.join(__dirname, pathname));

const recursiveCheck = (tokens, pathname) => {
  const [head] = tokens;

  if (!head) {
    // If there's no head we covered all the tokens with this algorithm,
    // which means that the path is already taken
    return true;
  }

  const tail = tokens.slice(1);

  const pages = readPages(pathname);

  if (pages.includes(head)) {
    return recursiveCheck(tail, `${pathname}/${head}`);
  } else {
    return false;
  }
};

module.exports = function pageExists(page) {
  const tokenizedRoute = page.split('/');
  return recursiveCheck(tokenizedRoute, '../../pages');
};
