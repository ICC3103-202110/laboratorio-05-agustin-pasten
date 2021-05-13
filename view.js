const figlet = require('figlet')
const chalk = require('chalk')
//const inquirer = require('inquirer')
const { printTable } = require('console-table-printer');
const prompt = require('prompt-sync')();


function getTitle(){
    //solo returna el chalk.green y el green se refiere al color
    return chalk.green(
        figlet.textSync(
            'Tip Calculator App',
            {
                //el full es pa que ocupe toda la pantalla y font creo que es el tipo de letra
                horizontalLayout: 'full',
                font: 'Nancyj-Underlined'
            }
        )
    )
}

function inputBillAmount(){
    let billAmount = prompt('Bill Amount? ');
    billAmount = Number(billAmount)
    return billAmount
}

function inputTip(){
    let tip = prompt('Tip(%)?')
    tip = Number(tip)
    return tip
}

function getTable(amount,tip,realTip,total){
    const testCases = [
      { 'Bill Amount': "$"+ amount , 'Tip (%)': tip+"%" , Tip: "$"+realTip, Total: "$"+total },
    ];
    
    return printTable(testCases)
  }



module.exports = {
    getTitle,
    getTable,
    inputBillAmount,
    inputTip
}