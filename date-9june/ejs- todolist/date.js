module.exports.getDate= getDate;


function getDate(){
    var today= new Date();
    var options={
        weekday: "long",
        day: "numeric",
        month: "long"
    };

    var day= today.toLocaleDateString("en-US", options);
    return day;
}


// can do like this also
exports.getDay= function(){
    var today= new Date();
    var options={
        weekday: "long",
        
    };

    var day= today.toLocaleDateString("en-US", options);
    return day;
}