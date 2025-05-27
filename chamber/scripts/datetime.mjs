export function getDateStringFromUnix(unixTimestamp) {
    const date = new Date(unixTimestamp * 1000);
    return date.toISOString().split('T')[0];
}

export function getDateString(jsTimestamp) {    
    return jsTimestamp.toString().split('T')[0];
}

export function getTimeString(unixTimestamp,timezone = 0) {
    const time = new Date(unixTimestamp * 1000 + timezone * 1000);
    const fulltime = time.toISOString().split('T')[1];
    let hour = fulltime.split(':')[0];
    let minute = fulltime.split(':')[2].split('.')[0];
    if (Number(hour)>12) {
        hour = Number(hour) - 12;
    }
    return `${hour}:${minute}`;

}