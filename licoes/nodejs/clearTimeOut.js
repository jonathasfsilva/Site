const timeOut = 3000;
const finished = () => {
    console.log('finished');
};

const start = () => {
    console.log('start');
};

const posStart = () => {
    console.log('pos start');
};


start();

// callback function 
let timer = setTimeout(finished, timeOut);

//cancela callback timeOut
clearTimeout(timer);
posStart();