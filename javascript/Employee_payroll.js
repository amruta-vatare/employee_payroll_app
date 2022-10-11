function selectRange(){
    let salaryRangeInputEle = document.querySelector('#salary');
    let output = document.querySelector('.salary-output');
    output.innerHTML = salaryRangeInputEle.value;
    salaryRangeInputEle.addEventListener('input',function(){
        output.textContent = salaryRangeInputEle.value;
    });
}

function save(frmdata){

}
