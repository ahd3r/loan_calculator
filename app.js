document.querySelector('#calculate').addEventListener('submit', Calculate);

function Calculate(e){
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
            totalPayment=totalPayment.toFixed(2);
            const monthlyPayment = totalPayment/(checkIsTheYearsNum*12);
            const totalInterest=totalPayment-checkIsTheLoanNum;
            document.querySelector('#totalPayment').value=totalPayment;
            document.querySelector('#totalInterest').value=totalInterest.toFixed(2);
            document.querySelector('#monthlyPayment').value=monthlyPayment.toFixed(2);
        },1000);
    }
    e.preventDefault();
}
