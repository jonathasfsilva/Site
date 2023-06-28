const questions = [
    "O que eu aprendi hoje? ",
    "O que me deixou aborrecido? E o que eu poderia fazer para melhorar?",
    "O que me deixou feliz hoje?",
    "Quantas pessoas eu ajudei hoje?"
]

const ask = (index = 0) => {
    process.stdout.write(`\n ${questions[index]} > `)
}

ask();

const answers = [];

process.stdin.on('data', (data) => {
    answers.push(data.toString().trim());
    if (answers.length < questions.length){
        ask(answers.length);
    } else {
        process.exit();
    }
});

process.on('exit', () => {
    console.log(`
    Bacana

    O que você aprendeu hoje foi:
    ${answers[0]}

    O que você deixou aborrecido foi, e como você vai melhorar:
    ${answers[1]}

    O que você deixou feliz hoje foi:
    ${answers[2]}

    Quantas pessoas você ajudou hoje foi:
    ${answers[3]}
    `);
});