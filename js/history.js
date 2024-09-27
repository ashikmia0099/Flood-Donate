

// donate button click funciton


document.getElementById('Donate-button').addEventListener('click', function(){

    ResetButtonColor();
    document.getElementById('Donate-button').style.backgroundColor = '#B4F461';
    
    ShowButtonDataById('all-banner-div'); 
});



// history button click function

document.getElementById('History-button').addEventListener('click', function(){

    ResetButtonColor();
    document.getElementById('History-button').style.backgroundColor = '#B4F461';
    
    ShowButtonDataById('history-section')
});


