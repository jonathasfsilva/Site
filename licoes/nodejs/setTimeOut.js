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
setTimeout(finished, timeOut);
posStart();