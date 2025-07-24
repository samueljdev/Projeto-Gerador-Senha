// Seleção de elementos
const generatePasswordButton = document.querySelector("#generate-password");
const generatedPasswordElement = document.querySelector("#generated-password");

// Funções
const getLetterLowerCase = () => {
    return String.fromCharCode(Math.floor(Math.random() * 26) + 97);
};

const getLetterUpperCase = () => {
    return String.fromCharCode(Math.floor(Math.random() * 26) + 65);
};

const getNumber = () => {
    return Math.floor(Math.random() * 11).toString;
};

const getSymbol = () => {
    const symbols = "(){}[]=<>/,.!@#$%^&*";
    return symbols[Math.floor(Math.random() * symbols.length)];
};

// Eventos
generatePasswordButton.addEventListener("click", (e) => {
    console.log("teste");
});