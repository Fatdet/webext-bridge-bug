import { sendMessage } from "webext-bridge/content-script"


(async ()=>{
    console.log("start")
    const res = await sendMessage("greeting", {greeting: hello}, "background");
    console.log(res);
    console.log("end")
})


// chrome.runtime.sendMessage({greeting: "hello"}, function(response) {
//     console.log(response.farewell);
//   });