let ele = '<head>';
let eleReplace = '<head><script type="text/javascript">';
$httpClient.get({url:'https://raw.githubusercontent.com/xcanwin/KeepChatGPT/main/KeepChatGPT.user.js'}, (error, response, body) => {
    eleReplace = eleReplace + body + '</script>'
});
let body = $response.body
    .replace(ele, eleReplace)
$done({ body });