// code your solution here
function saturdayFun(activity = 'roller-skate') {
    return `This Saturday, I want to ${activity}!`;
}

function mondayWork(place = 'go to the office') {
    return `This Monday, I will ${place}.`;
}

function wrapAdjective(symbol ='*') {
    const innerFunction = function(adj ='special'){
        return `You are ${symbol}${adj}${symbol}!`
    }
    return innerFunction;
}
wrapAdjective();