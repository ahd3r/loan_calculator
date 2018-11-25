document.querySelector('#calculate').addEventListener('click', Calculate);

function Calculate(){
    const checkIsTheLoanNum=Number(document.querySelector('#loan').value);
    const checkIsThePercentNum=Number(document.querySelector('#percent').value);
    const checkIsTheYearsNum=Number(document.querySelector('#years').value);
    if(isNaN(checkIsTheLoanNum) || document.querySelector('#loan').value==='' || isNaN(checkIsThePercentNum) || document.querySelector('#percent').value==='' || isNaN(checkIsTheYearsNum) || document.querySelector('#years').value===''){
        document.querySelector('.mistake').style.display='block';
        document.querySelector('.res').style.display='none';
    } else {
        document.querySelector('.res').style.display='none';
        document.querySelector('.mistake').style.display='none';
        document.querySelector('.preloader').style.display='block';
        setTimeout(function(){
            document.querySelector('.preloader').style.display='none';
            document.querySelector('.mistake').style.display='none';
            document.querySelector('.res').style.display='block';
            let totalPayment=(checkIsTheLoanNum*checkIsThePercentNum/100)+checkIsTheLoanNum;
            for(let i=0; i<checkIsTheYearsNum-1; i++){
                totalPayment = (totalPayment*checkIsThePercentNum/100)+totalPayment;
            }
            document.querySelector('#totalPayment').value=totalPayment;
            document.querySelector('#totalInterest').value=totalPayment-checkIsTheLoanNum;
            document.querySelector('#monthlyPayment').value=((checkIsTheLoanNum*checkIsThePercentNum/100)+checkIsTheLoanNum)/(checkIsTheYearsNum*12);
        },1000);
    }
}
