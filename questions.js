export const Questions = [

    {
        question: 'Comment déclarer une donnée dont la valeur ne pourra pas être modifiée ?',
        answers:  ['const', 'let', 'var'],
        correct: 'const'
    },
    {
        question: 'Quelle méthode transforme un chaîne de caractères en entier ?',
        answers: ['parseFloat()', 'toNumber()', 'parseInt()', 'toInteger()'],
        correct: 'parseInt()'
    },
    {
        question: 'Quel est le résultat de l\'opération suivante : var unknown = "2" + 2; ?',
        answers: ['4', '22', "Error", '"22"'],
        correct: '"22"'
    },
    {
        question: 'Comment appelle-t-on une fonction qui s\'appelle elle-même ?',
        answers: ['Fonction circulaire', 'Fonction anonyme', 'Fonction récursive', 'Fonction globale'],
        correct: 'Fonction récursive'
    },
    {
        question: 'Quelle fonction javascript permet de répéter sans arrêt un bout de code après une période donnée ?',
        answers: ['setInterval()', 'repeat()', 'loop()'],
        correct: 'setInterval()'
    },
    {
       question: 'Comment accéder au premier élément d\'un tableau ?',
       answers: ['myArray[0]', 'myArray[1]', 'myArray[]', 'myArray[myArray.length + 1]' ],
       correct: 'myArray[0]'
    },
    {
        question: 'Quelle méthode permet de retirer le dernier élément d\'un tableau ?',
        answers: ['shift()', 'splice()', 'pop()'],
        correct: 'pop()'
    },
    {
        question: 'Quelle est la valeur de "null" lorsqu\'elle est convertie en entier ?',
        answers: ['1', '0', 'undefined', 'null'],
        correct: '0'
    },
    {
        question: 'Quelle fonction javascript permet dr créer un délai ?',
        answers: ['setTimeout()', 'delay()', 'await()'],
        correct: 'setTimeout()'
    },
    {
        question: 'Comment vérifier qu\'une variable est un tableau javascript ?',
        answers: ['istype()', 'typeof()', 'Array.isArray()'],
        correct: 'Array.isArray()'
    }
];