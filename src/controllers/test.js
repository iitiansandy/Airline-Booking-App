function compareTime(timeStr1, timeStr2) {
    let dateTime1 = new Date(timeStr1);
    let dateTime2 = new Date(timeStr2);

    return dateTime1.getTime() > dateTime2.getTime();
};

let timeStr1 = "2024-07-27 18:30:00";
let timeStr2 = "2024-07-27 18:40:00"

console.log(compareTime(timeStr1, timeStr2));