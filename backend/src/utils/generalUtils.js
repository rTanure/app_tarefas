const generalUtils = {
    randInt: (size) => {
        const max = Math.pow(10, size) - 1; 
        const min = Math.pow(10, size - 1);
        const numero = Math.floor(Math.random() * (max - min + 1) + min); 
        return numero;
    }
}

module.exports = generalUtils