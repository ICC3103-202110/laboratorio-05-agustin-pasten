const figlet = require('figlet')
const chalk = require('chalk')
const inquirer = require('inquirer')


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





module.exports = {
    getTitle
}