import * as Parser from "ua-parser-js";

export default function isMobile(req?) {
    let userAgent;

    if (req) { //SSR request is present
        userAgent = Parser(req.headers['user-agent'] || '');
    } else { // check only on clientside no request present
        userAgent = new Parser().getResult();
    }

    console.log(userAgent, 'userAgent');
    return userAgent?.device?.type === 'mobile';
}