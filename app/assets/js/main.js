
const buttons = document.querySelectorAll("div.totalBill button")
const displays = document.querySelectorAll("div.totalBill p")
let bills = document.querySelectorAll("div.bill p")
let output = ""


const calc = () => 
{
    bills = document.querySelectorAll("div.bill p")
    let c =0
    var total = 0;
    let temp 
   for(let i = 0; i <bills.length; i++)
        {
            temp = bills[i].innerHTML.split("$")
            if(temp[0] == "End Of Bill")
            {
                displays[c].innerHTML = "Total Of Bills: $" + total ;
                total = 0
                c++
            }else
            {
                total += Number(temp[1]) ;
            }
        }
}


buttons.forEach((button)=> 
    {
        button.addEventListener("click",(e) => calc());
        });

