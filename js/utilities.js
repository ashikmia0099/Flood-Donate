

function getInputById(id){
    
    const InputVlaue = document.getElementById(id).value;
    const InputNumber = parseFloat(InputVlaue);

    console.log(id, InputNumber);
   
    return InputNumber;


}




function getTextDataById(ID){
    
    const TextValue = document.getElementById(ID).innerText;
    const TextNumber = parseFloat(TextValue);

    console.log(ID, TextNumber);
   
    return TextNumber;


}



function ShowButtonDataById(Id){

    document.getElementById('all-banner-div').classList.add('hidden');
    document.getElementById('history-section').classList.add('hidden');

    document.getElementById(Id).classList.remove('hidden');

}



// resete button color


function ResetButtonColor(){
    document.getElementById('Donate-button').style.backgroundColor = '';
    document.getElementById('History-button').style.backgroundColor = '';
}




function AmountTracking(donationAmount, historySectionId, donationTextId) {


    const donationElement = document.getElementById(donationTextId);

    if(!donationElement){
        console.error(`Element id '${donationTextId}'`);
        return;
    }


    const donationDescription = donationElement.innerText;

    // Get the current date and time
    const current_time = new Date();

    const day = current_time.toLocaleDateString('en-US',{weekday:'short'});
    const date = current_time.toLocaleDateString('en-US',{day:'2-digit',month:'short', year:'numeric'})
    const time = current_time.toTimeString().split(' ')[0];  
   
    const TimeZonName = Intl.DateTimeFormat('en-US',{timeZoneName:'long'}).format(current_time).split(' ');
    


    const FomattedData = `Date: ${day} ${date} ${time} (${TimeZonName})`

   


    // create transaction history div

    const newTransactionDiv = document.createElement('div');
    newTransactionDiv.classList.add('border', 'card', 'p-6', 'border-gray-500', 'mx[4%]', 'mt-4');

    const h1 = document.createElement('h1');
    h1.classList.add('text-lg','font-bold','text-black');
    h1.innerText = `${donationAmount} ${donationDescription}`;

    const p = document.createElement('p');
    p.classList.add('text-black');
    p.innerText = `${FomattedData}`;

    newTransactionDiv.appendChild(h1);
    newTransactionDiv.appendChild(p);



    const historySection = document.getElementById(historySectionId);
    

    if(historySection){
        historySection.appendChild(newTransactionDiv);

    }
    else{
        console.error(`History section with ID '${historySectionId}' not found.`);
    }
    
    
    
}



function hideModalById(modalId) {
    document.getElementById('my_modal_1').classList.remove('hidden');

    
}
