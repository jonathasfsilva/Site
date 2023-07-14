const { EventEmitter } = require('events');
const ev = new EventEmitter();

//acionado toda vez que é emitido
ev.on('emissaoDoEvento', () => {
    console.log('O evento foi ouvido');
})

//acionado apenas uma vez
ev.once('novoEvento', () => {
    console.log('NOVO EVENTO foi chamado');
})

//passando parametros em eventos
ev.on('eventoComParametro', (parametro) => {
    console.log('sua mensagem:', parametro);
})

//passando varios parametros em eventos
ev.on('soma', (a, b) => {
    const s = a + b
    console.log(`a soma de ${a} + ${b} = ${s}`);
})

ev.emit('emissaoDoEvento');
ev.emit('emissaoDoEvento');
ev.emit('emissaoDoEvento2');
ev.emit('novoEvento');
ev.emit('novoEvento');
ev.emit('eventoComParametro', 'enviado atraves do .emit');
ev.emit('soma', 4, 3);