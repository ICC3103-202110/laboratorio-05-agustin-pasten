const {getTitle} = require("./view")
const {billAmount,tip,realTip,total} = require("./update")



async function app(){
    console.clear();
    console.log(getTitle());
    valueBillAmount = 100
    valueTip = 10
    console.log(billAmount(valueBillAmount))
    console.log(tip(valueTip))
    console.log(realTip(valueBillAmount,valueTip))
    ValueRealTip = realTip(valueBillAmount,valueTip) 
    console.log(total(valueBillAmount,ValueRealTip))
    
}

app()