/*let account_details={
    title:"Sana Anjum",
    balance:11000,
    currency:"PKRS",
    IBAN:"PKN123454321"
};
function data(){
    var account_title = document.getElementById("title");
    account_title.innerText=account_details.title;
    var available_balance=document.getElementById("balance");
    available_balance.innerText=account_details.balance;
    available_balance.value=11000;
    var account_currency=document.getElementById("currency");
    account_currency.innerText=account_details.currency;
    var account_IBAN=document.getElementById("IBAN");
    account_IBAN.innerText=account_details.IBAN;


}
function depositfunc()
{
    var available_balance=document.getElementById("balance");
    var deposit_var=document.getElementById("deposit");
        if(event.key==="Enter")
        {

            if(deposit_var.value>0 && deposit_var.value<9999999999999999999999)
            {
                available_balance.value = available_balance.value + parseInt(deposit_var.value,10);
                available_balance.innerText=available_balance.value;
                account_details.balance = available_balance.value;
               /// data();

                var table=document.getElementById("transaction-table");
                table.innerHTML= table.innerHTML+'<tr>\n' +
                    '        <th align="left" valign="middle" scope="col">'+Date()+'</th>\n' +
                    '        <th align="left" valign="middle" scope="col">Deposit</th>\n' +
                    '        <th align="left" valign="middle" scope="col">'+deposit_var.value+'</th>\n' +
                    '    </tr>';
                deposit_var.value="";
            }
            else
            {
                var errorr = document.getElementById("deposit-msg");
                errorr.innerText = "Input not valid!";
            }
        }
}
function withdrawfunc()
{
    var available_balance=document.getElementById("balance");
    var withdraw_var=document.getElementById("withdraw");
    if(event.key==="Enter") {
        if (withdraw_var.value > 0 && withdraw_var.value < 9999999999999999999999)
        {
            console.log(withdraw_var.value);
            console.log(available_balance.value);
            if (available_balance.value < withdraw_var.value || withdraw_var.value<0 ) {

                var errorr = document.getElementById("withdraw-msg");
                errorr.innerText = "Don't have sufficient amount in account!";
            }
            else {

                available_balance.value = available_balance.value - parseInt(withdraw_var.value, 10);
                available_balance.innerText = available_balance.value;
                //console.log(withdraw_var);
                account_details.balance = available_balance.value;
                //data();
                var table = document.getElementById("transaction-table");
                table.innerHTML = table.innerHTML + '<tr>\n' +
                    '        <th align="left" valign="middle" scope="col">' + Date() + '</th>\n' +
                    '        <th align="left" valign="middle" scope="col">Withdraw</th>\n' +
                    '        <th align="left" valign="middle" scope="col">' + withdraw_var.value + '</th>\n' +
                    '    </tr>';
                withdraw_var.value="";
            }


        }
        else{
            var errorr = document.getElementById("withdraw-msg");
            errorr.innerText = "Input not valid!";
        }
    }

}

data();
*/
/*var account_title=["Sana Anjum"];
document.getElementById("title").innerText=account_title;*/
/*var account=[{
    title:"Sana Anjum",
    balance:11000,
    currency:"PKRS",
    IBAN:"PKN123454321"

}];
var x=0;
var bal=document.getElementById("balance");
function data(){
    var account_tit=document.getElementById("title");
    account_tit.innerText=account[x].title;

    bal.innerText=account[x].balance;
    var curr=document.getElementById("currency");
    curr.innerText=account[x].currency;
    var IBANno=document.getElementById("IBAN");
    IBANno.innerText=account[x].IBAN;
}
function depositfunc(){

    var depositvar=document.getElementById("deposit");
    if(event.key==="Enter")
    {
       // console.log(depositvar.value);
        if(!isNaN(depositvar.value) && parseInt(depositvar.value) > 0 )
        {
            account[x].balance=account[x].balance+parseInt(depositvar.value);
            bal.innerText=account[x].balance;
            account.balance=bal.value;
            var table = document.getElementById("transaction-table");
            table.innerHTML = table.innerHTML + '<tr>\n' +
                '        <th align="left" valign="middle" scope="col">' + Date() + '</th>\n' +
                '        <th align="left" valign="middle" scope="col">Deposit</th>\n' +
                '        <th align="left" valign="middle" scope="col">' + depositvar.value + '</th>\n' +
                '    </tr>';
            depositvar.value="";
        }
        else{
            var error=document.getElementById("deposit-msg");
            error.innerText="enter a valid number!";
        }
    }
}
function withdrawfunc(){

    var withdrawvar=document.getElementById("withdraw");
    if(event.key==="Enter")
    {
        // console.log(depositvar.value);

        if(!isNaN(withdrawvar.value) && parseInt(withdrawvar.value) > 0 )
        {
            if(account[x].balance<withdrawvar.value || withdrawvar.value<0 )
            {

                var err=document.getElementById("withdraw-msg");
                err.innerText="Please add more balance to withdraw this amounnt!";

            }
            else
            {
                account[x].balance=account[x].balance-parseInt(withdrawvar.value);
                bal.innerText=account[x].balance;
                account.balance=bal.value;
                var table = document.getElementById("transaction-table");
                table.innerHTML = table.innerHTML + '<tr>\n' +
                    '        <th align="left" valign="middle" scope="col">' + Date() + '</th>\n' +
                    '        <th align="left" valign="middle" scope="col">Withdraw</th>\n' +
                    '        <th align="left" valign="middle" scope="col">' + withdrawvar.value + '</th>\n' +
                    '    </tr>';
                withdrawvar.value="";
            }

        }
        else {
            var error=document.getElementById("withdraw-msg");
            error.innerText="enter a valid number!";
        }
    }
}
data();
*/
var acc_balance = document.getElementById("balance");
var num = 0;
var info = [{
    name : "Faisal Jawad",
    balance : 1,
    currency : "PKR",
    IBAN : "PK35MEZN0003000210108884"
},
    {
        name : "Sana Anjum",
        balance : 2,
        currency : "PKR",
        IBAN : "PK35MEZN0003000210103884"
    },
    {
        name : "Alishba Tahir",
        balance : 3,
        currency : "PKR",
        IBAN : "PK35MEZN0003000210102884"
    },
    {
        name : "Rabia Pannu",
        balance : 4,
        currency : "PKR",
        IBAN : "PK35MEZN0003000210101884"
    },
    {
        name : "Arooj Fatima",
        balance : 5,
        currency : "PKR",
        IBAN : "PK35MEZN0003000210105884"
    }];


function input_data()
{
    var acc_title = document.getElementById("acc_name");
    if(event.key==="Enter")
    {
        for(var itr = 0;itr<info.length;itr++)
        {
            if(acc_title.value === info[itr].name)
            {
                num = itr;
                acc_balance.value = info[itr].balance;
                acc_balance.innerText = acc_balance.value;
                var acc_currency = document.getElementById("currency");
                acc_currency.innerText = info[itr].currency;
                var acc_IBAN = document.getElementById("IBAN");
                acc_IBAN.innerText = info[itr].IBAN;
            }
        }
        /*acc_title.value = "";*/
    }
}
function deposit()
{
    var acc_deposit = document.getElementById("deposit");
    if(event.key === "Enter")
    {
        var data = parseInt(acc_deposit.value,10);
        result = Number.isInteger(data);
        if(result && data > 0)
        {
            info[num].balance+=parseInt(acc_deposit.value,10);
            acc_balance.innerText = info[num].balance;
            acc_deposit.value = "";
            var table_transaction = document.getElementById("transaction-table");
            table_transaction.innerHTML+='<tr>\n' +
                '        <td align="left" valign="middle" scope="col">'+Date()+'</td>\n' +
                '        <td align="left" valign="middle" scope="col">'+info[num].name+'</td>\n' +
                '        <td align="left" valign="middle" scope="col">'+"Credit"+'</td>\n' +
                '        <td align="left" valign="middle" scope="col">'+data+'</td>\n' +
                '        <td align="left" valign="middle" scope="col">'+info[num].balance+'</td>\n'
            '    </tr>';
        }
        else
        {
            var error_msg = document.getElementById("deposit-msg");
            error_msg.innerText = "Enter Valid Amount!"
        }
    }
}

function withdraw()
{
    var acc_withdraw = document.getElementById("withdraw");
    if(event.key === "Enter")
    {
        var data = parseInt(acc_withdraw.value,10);
        result = Number.isInteger(data);
        if(acc_balance.value < data && data > 0 && result)
        {
            info[num].balance = info[num].balance - parseInt(acc_withdraw.value,10);
            acc_balance.innerText = info[num].balance;
            acc_withdraw.value = "";
            var table_transaction = document.getElementById("transaction-table");
            table_transaction.innerHTML+='<tr>\n' +
                '        <td align="left" valign="middle" scope="col">'+Date()+'</td>\n' +
                '        <td align="left" valign="middle" scope="col">'+info[num].name+'</td>\n' +
                '        <td align="left" valign="middle" scope="col">'+"Debit"+'</td>\n' +
                '        <td align="left" valign="middle" scope="col">'+data+'</td>\n' +
                '        <td align="left" valign="middle" scope="col">'+info[num].balance+'</td>\n'
            '    </tr>';
        }
        else
        {
            var error_msg = document.getElementById("withdraw-msg");
            error_msg.innerText = "Don't have sufficient amount in account!";
        }
    }
}


