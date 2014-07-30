var sampleInput = 'asdf$lskd1234$asdo$$$';


// function stringDelimiter (str, char){
//     var arr =[];
//     var start=0;
//     var el;
//     for(var i=0;i < str.length; i++){
//         if (str.charAt(i) === char){
//             el = str.substring(start,i);
//             if (el !== ''){
//                 arr.push( el );
//             }
//             start++;
//         }
//     }
//     return arr;
// }

function stringDelimiter (str, char){
    var arr =[];
    var el;
    var start = '';
    for(var i=0;i < str.length; i++){
        if (str.charAt(i) === char){
            el = str.substring(start,i);
            if (el !== ''){
                arr.push( el );
            }
        }else{
            start += i;
        }
    }
    return arr;
}

stringDelimiter(sampleInput, '$');


