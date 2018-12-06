let account_details={
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

            if(deposit_var.value>0 ||deposit_var.value>9999999999999999999999)
            {
                account_details.balance = account_details.balance + parseInt(deposit_var.value,10);
                available_balance.innerText=available_balance.value;
                data();

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
        if (withdraw_var.value > 0 || withdraw_var.value > 9999999999999999999999) {
            if (available_balance.value < withdraw_var.value) {

                var errorr = document.getElementById("withdraw-msg");
                errorr.innerText = "Don't have sufficient amount in account!";
            }
            else {

                account_details.balance = account_details.balance - parseInt(withdraw_var.value, 10);
                available_balance.innerText = available_balance.value;
                data();
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
