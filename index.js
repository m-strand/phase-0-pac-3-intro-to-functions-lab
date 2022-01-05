function shout(string) {
    return string.toUpperCase(); 
}
function whisper(string) {
    return string.toLowerCase(); 
}
function logShout(string) {
    string.toUpperCase(); 
    console.log(string);
}
function logWhisper(string) {
    string.toLowerCase(); 
    console.log(string);
}
function sayHiToHeadphonedRoommate(string) {

} 
function sayHiToHeadphonedRoommate(string) {
    if (string==string.toLowerCase()) {
        const yesSir = "I can't hear you!";
        return yesSir; 
    }
    if (string==string.toUpperCase()) {
        const yesSir = "YES INDEED!";
        return yesSir; 
    }
    if (string == "Let's have dinner together!") {
        const confirmation = "I would love to!"
        return confirmation; 
    }
}