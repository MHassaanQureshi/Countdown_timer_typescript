#! /usr/bin/env node
import inquirer from "inquirer";
import { differenceInSeconds } from "date-fns";
let userTime = await inquirer.prompt([
    {
        name: "UserTime",
        type: "number",
        message: "Please enter time",
        // validate: (input) => {
        //     if (isNaN(input)) {
        //         return "enter number"
        //     }
        //     else if(input > 60){
        //         return "seconds must be under 60"
        //     }
        // }
    }
]);
let input = userTime.UserTime;
function timer(val) {
    let startTime = new Date().setSeconds(new Date().getSeconds() + val);
    let EndTime = new Date(startTime);
    setInterval(() => {
        const current = new Date();
        const difference = differenceInSeconds(EndTime, current);
        if (difference <= 0) {
            console.log("timer ended");
            process.exit();
        }
        const minute = Math.floor(difference % (3600 * 24) / 3600);
        const seconds = Math.floor(difference % 60);
        console.log(`${minute}:${seconds}`);
    }, 1000);
}
timer(input);
