let ele = '<head>';
let eleReplace = '<head><script type="text/javascript" async="async" src="https://github.com/xcanwin/KeepChatGPT/raw/main/KeepChatGPT.user.js"></script>'
let body = $response.body
    .replace(ele, eleReplace)
$done({ body });