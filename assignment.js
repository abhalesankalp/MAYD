//var s1 = "abb";
//var s2 = "7c7@@@c7@";
//find(s1);// Expected result 'a'
//find(s2);// Expected result '7'

function find(s) {
    var charList = new Array();
    for(var index=0; index< s.length; index++)
    {
        if(charList.includes(s[index]))
        {
            charList = charList.filter(currentChar => currentChar != s[index]);
        }
        else
        {
            charList.push(s[index]);
        }
    }

    console.log(charList[0]);
    return charList[0];
}