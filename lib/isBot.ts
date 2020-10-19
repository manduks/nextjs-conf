/**
 * FACEBOOK BOT
 * {
  ua: 'facebookexternalhit/1.1 (+http://www.facebook.com/externalhit_uatext.php)',
  browser: { name: undefined, version: undefined, major: undefined },
  engine: { name: undefined, version: undefined },
  os: { name: undefined, version: undefined },
  device: { vendor: undefined, model: undefined, type: undefined },
  cpu: { architecture: undefined }
} userAgent
 */
/**
 {
  ua: 'Twitterbot/1.0',
  browser: { name: undefined, version: undefined, major: undefined },
  engine: { name: undefined, version: undefined },
  os: { name: undefined, version: undefined },
  device: { vendor: undefined, model: undefined, type: undefined },
  cpu: { architecture: undefined }
} userAgent
*/
import * as Parser from "ua-parser-js";

const botList = ['facebook', 'twitter']; // known bot list

export default function isBot(req?) {
    let userAgent;

    if (req) { //SSR request is present
        userAgent = Parser(req.headers['user-agent'] || '');
    } else { // check only on clientside no request present
        userAgent = new Parser().getResult();
    }
    const userAgentString = (userAgent?.ua || '').toLowerCase();

    return botList.some(bot => userAgentString.includes(bot));
}