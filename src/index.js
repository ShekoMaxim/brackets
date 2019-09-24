module.exports = function check(str, bracketsConfig) {
    let stack = [];
    let openTags = [];
    let closeTags = [];
    let closeIndex;
    let openIndex;
    bracketsConfig.forEach(item => {
        openTags.push(item[0]);
        closeTags.push(item[1]);
    })

    let arrayOfBrackets = str.split('');
    for(let i=0;i<arrayOfBrackets.length;i++){
        openIndex = openTags.indexOf(arrayOfBrackets[i]);
        closeIndex = closeTags.indexOf(arrayOfBrackets[i]);
        if((openIndex === -1) && (closeIndex === -1)){
            return false;
        }
        if((stack.length === 0) && (openIndex !== closeIndex && closeIndex !== -1)){
            return false;
        }
        if(closeIndex !== -1 && stack.includes(closeIndex)){
            if(closeIndex === stack[stack.length-1]){
                stack.pop();
            } else {
                return false;
            }
        } else if (openIndex !== -1 && (openIndex !== closeIndex || !stack.includes(openIndex) )){
            stack.push(openIndex);
        }

    }
    if(stack.length>0){
        return false;
    }
    return true;
}
