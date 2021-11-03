const transpose = require("/Users/abdirahman/lighthouse/w2/d2/matrix_transposition.js")
const wordSearch = (letters, word) => {    /// letters is the matrix and word is the match youre looking for
    const horizontalJoin = letters.map(function(ls) {
        return ls.join('');
    });
    
    for (const line of horizontalJoin) {
        if (line.includes(word)) {
            return true; 
        }
    }
///-------------------------------------------------
    let matrix = transpose(letters);
    const VerticalJoin = matrix.map(function(ls) {
        return ls.join('');
    });

    for (const line of VerticalJoin) {
        if (line.includes(word)) {
            return true;   
        }
    }

    return false;
};

module.exports = wordSearch

