setInterval(() => {
    var day= new Date();
    var th= day.getHours();
    var tm= day.getMinutes();
    var ts= day.getSeconds();
    const hr= th*30+tm/2;
    const mr= 6*tm;
    const sr= 6*ts;
    hour.style.transform= `rotate(${hr}deg)`;
    minute.style.transform= `rotate(${mr}deg)`;
    second.style.transform= `rotate(${sr}deg)`;
}, 1000);