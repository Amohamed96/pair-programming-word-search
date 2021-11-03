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

//             [ [d,e,f,g,h] [a,b,c,g,h]  [d,f,d,t,r] [ f,r,a,n,k]  ]
//                   map0           map1        map2          map3
// result -->
//horizontaljoin =  [ ["defgh"]   ["abcgh"]  ["dfdtr"]  ["frank"]  ]