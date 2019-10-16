

// function getAge(year,month,day){
//     var nowDate = new Date();
//     var birthDay = new Date(year,month,day);
// }

// function getDays (year,month){
//     return new Date(year,month,0).getDate();
// }



// 距离xxx还有多少天多少小时多少分多少秒

function destationDay(year,month,day){
    var desDate = new Date(year,month - 1,day);
    var nowDate = new Date();
    var leap = desDate - nowDate;
    var day = parseInt((leap/(1000*60*60*24)));
    var hour = parseInt((leap/(1000*60*60))%24);
    var mintues = parseInt((leap/(1000*60))%60);
    var seconds = parseInt((leap/(1000))%60);
    return [day,hour,mintues,seconds]
}

function start(){
    var arr = destationDay(2019,10,12);
    var oDiv = document.getElementsByTagName('div')[0];
    
        oDiv.innerHTML = `${arr[0]}天${arr[1]}小时${arr[2]}分${arr[3]}秒`;
    
}

setInterval(start,0)