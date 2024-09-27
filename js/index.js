

// // Noakhali card data




document.getElementById('Donate-one-button').addEventListener('click', function(event) {
    event.preventDefault();

    // Retrieve account balances and input values
    const totalAccountBalance = getTextDataById('Account-balance');
    console.log(totalAccountBalance);
    const NoakhaliTotalBalance = getTextDataById('noakhali-total-balance');
    const NoakhaliInputBalance = getInputById('noakhali-input');

    

    // Validate input balance
    if (typeof NoakhaliInputBalance === "number" && NoakhaliInputBalance > 0) {
        if (totalAccountBalance > NoakhaliInputBalance) {
            const DonateBlanceNoakhali = totalAccountBalance - NoakhaliInputBalance;
            const DonateBlanceNumber = parseFloat(DonateBlanceNoakhali);
            document.getElementById('Account-balance').innerText = DonateBlanceNumber;

            const NoakhaliTotalNewBalance = NoakhaliTotalBalance + NoakhaliInputBalance;
            const NoakhaliTotalNewBalanceNumber = parseFloat(NoakhaliTotalNewBalance);
            
            
            AmountTracking(NoakhaliInputBalance, 'history-section', 'donated-image-site-one');
            
            document.getElementById('noakhali-total-balance').innerText = NoakhaliTotalNewBalanceNumber;
            // document.getElementById('my_modal_1').classList.remove('hidden');
            hideModalById('my_modal_1')
            document.querySelector('#close_button_one ').addEventListener('click', function() {
                document.getElementById('my_modal_1').classList.add('hidden');
            });
            
            console.log("Current Balance ---> ", DonateBlanceNumber); 
            console.log("Noakhali Current Balance ---> ", NoakhaliTotalNewBalanceNumber); 
        } else {
            alert('Insufficient Account Balance');
        }
    } else {
        alert('This is not a valid number');
    }
});








