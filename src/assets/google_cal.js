var API_KEY = 'AIzaSyCga5PGHxGSyvBt1tbIMKyqSq_vkexHunk';

var CALENDAR_ID = 'd15lghq0hs1b9hmr6o6tui7ihc@group.calendar.google.com';
var XMLHttpRequest = require("xmlhttprequest").XMLHttpRequest;
var now = new Date();
var fs = require("fs");
var datearr =[];
var itemsum =[];
var request = 'https://www.googleapis.com/calendar/v3/calendars/' +
        CALENDAR_ID +
        '/events?singleEvents=true&orderBy=startTime&fields=items(description%2Csummary%2Clocation%2Cstart%2ChtmlLink)&timeMin=' +
        formatDateTime(now) +
        '&orderBy=startTime' +
        '&key=' +
        API_KEY;

function addZero(num) {
    if (num < 10) {
        num = "0" + num;
    }
    return String(num);
}

function formatDateTime(now) {
    var mm = addZero(now.getMonth() + 1);
    var dd = addZero(now.getDate());
    var yyyy = now.getFullYear();
    var HH = addZero(now.getHours()); // military time
    var hh = HH > 12 ? addZero(HH - 12) : HH; // 12 hour time
    var MM = addZero(now.getMinutes());
    var SS = addZero(now.getSeconds());
    return [yyyy, mm, dd].join('-') + 'T' + [HH, MM, SS].join(':') + '-' + [hh, MM].join(':');
}
function result_call(item,date){
    var final_arr = [];
    for(i=0;i<item.length;i++){
        var obj = {
            start: date[i],
            end : date[i],
            title : item[i]
            
        };
        final_arr.push(obj);
    }
    fs.writeFile("./object.json", JSON.stringify(final_arr,null,2), (err) => {
    if (err) {
        console.error(err);
        return;
    };
    console.log("File has been created");
});

    return item;
}

function listEvents(events) {
    
        var date = '';
        var li = '';
        var item = '';
        

        for (var i = 0; i < events.items.length; i++) {
            item = events.items[i];
            date = (item.start.date) ? item.start.date : item.start.dateTime.split('T')[0];
            if(item.summary != undefined){
                itemsum.push(item.summary);
                datearr.push(date);
            }
            
       
    
    }
    result_call(itemsum,datearr)

    
}

function httpGet(url, callback) {
    var oReq = new XMLHttpRequest();
    oReq.open("GET", url, true);
    oReq.onreadystatechange = function(oEvent) {
        if (oReq.readyState === 4 && oReq.status === 200) {
            // callback when we get response... 
            return callback(JSON.parse(oReq.responseText));
        } else {
            console.log("Response: ", oReq.status);
        }
    };
    oReq.send();
}
function start(){
    httpGet(request, listEvents);
    setTimeout(start,5000);
}
start()