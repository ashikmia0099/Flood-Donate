

// // Noakhali card data




document.getElementById('Donate-one-button').addEventListener('click', function(event) {
    event.preventDefault();

    // Retrieve account balances and input values
    const totalAccountBalance = getTextDataById('Account-balance');
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
           
            hideModalById('my_modal_1')
            document.querySelector('#close_button_one ').addEventListener('click', function() {
                document.getElementById('my_modal_1').classList.add('hidden');
            });
             
        } else {
            alert('Insufficient Account Balance');
        }
    } else {
        alert('This is not a valid Amount');
    }
});










// // Feni Flood card data




document.getElementById('Donate-two-button').addEventListener('click', function(event) {
    event.preventDefault();

    
    const totalAccountBalance = getTextDataById('Account-balance');
    const FeniTotalBalance = getTextDataById('feni-total-balance');
    const FeniIputBalacne = getInputById('feni-input');

    

    // Validate input balance
    if (typeof FeniIputBalacne === "number" && FeniIputBalacne > 0) {
        if (totalAccountBalance > FeniIputBalacne) {
            
            const DonateBlanceFeni = totalAccountBalance - FeniIputBalacne;
            const DonateBlanceNumber = parseFloat(DonateBlanceFeni);
            document.getElementById('Account-balance').innerText = DonateBlanceNumber;

            const FeniTotalNewBalance = FeniTotalBalance + FeniIputBalacne;
            const FeniTotalNewBalanceNumber = parseFloat(FeniTotalNewBalance);
            
            AmountTracking(FeniIputBalacne, 'history-section', 'donated-feni-1');
            
            document.getElementById('feni-total-balance').innerText = FeniTotalNewBalanceNumber;
           
            hideModalById('my_modal_1')
            document.querySelector('#close_button_one ').addEventListener('click', function() {
                document.getElementById('my_modal_1').classList.add('hidden');
            });
            
        } else {
            alert('Insufficient Account Balance');
        }
    } else {
        alert('This is not a valid Amount');
    }
});








// // quata movment card data




document.getElementById('Donate-three-button').addEventListener('click', function(event) {
    event.preventDefault();

    
    const totalAccountBalance = getTextDataById('Account-balance');
    const QutaTotalBalance = getTextDataById('quta-total-balance');
    const QutaIputBalacne = getInputById('quta-input-balance');


    
    // Validate input balance
    if (typeof QutaIputBalacne === "number" && QutaIputBalacne > 0) {
        if (totalAccountBalance > QutaIputBalacne) {

            const DonateBlanceQuta = totalAccountBalance - QutaIputBalacne;
            const DonateBlanceNumber = parseFloat(DonateBlanceQuta);
            document.getElementById('Account-balance').innerText = DonateBlanceNumber;

            const QutaTotalNewBalance = QutaTotalBalance + QutaIputBalacne;
            const QutaTotalNewBalanceNumber = parseFloat(QutaTotalNewBalance);
            


            AmountTracking(QutaIputBalacne, 'history-section', 'donated-feni-1');
            
            document.getElementById('quta-total-balance').innerText = QutaTotalNewBalanceNumber;
           
            hideModalById('my_modal_1')
            document.querySelector('#close_button_one ').addEventListener('click', function() {
                document.getElementById('my_modal_1').classList.add('hidden');
            });
            
        } else {
            alert('Insufficient Account Balance');
        }
    } else {
        alert('This is not a valid Amount');
    }
});