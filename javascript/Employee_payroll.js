let isUpdate = false;
let employeePayrollObj = {};
window.addEventListener('DOMContentLoaded',(event)=>{
    const name = document.querySelector('#name');
    const textError = document.querySelector('.text-error');
    name.addEventListener('input',function(){
        if(name.value.length == 0){
            textError.textContent = "";
        }
        try{
            (new EmployeePayrollData()).name = name.value;
            textError.textContent = "";
        }catch(e){
            textError.textContent = e;
        }
    });
    const salary = document.querySelector('#salary');
    const output = document.querySelector('.salary-output');
    output.textContent = salary.value;
    salary.addEventListener('input',function(){
        output.textContent = salary.value;
    })
    checkForUpdate();
});

const checkForUpdate = () =>{
    const employeePayrollJSON = localStorage.getItem('editEmp');
    isUpdate = employeePayrollJSON ? true:false;
    if(!isUpdate) return;
    employeePayrollObj = JSON.parse(employeePayrollJSON);
    setForm();
}

const setForm = () =>{
    setValue('#name',employeePayrollObj._name);
    setSelectedValues('[name=profile]',employeePayrollObj._profilePic);
    setSelectedValues('[name=gender]',employeePayrollObj._gender);
    setSelectedValues('[name=department]',employeePayrollObj._department);
    setValue('#salary',employeePayrollObj._salary);
    setTextValue('.salary-output',employeePayrollObj._salary);
    setValue('#notes',employeePayrollObj._note);
    let date = stringifyDate(employeePayrollObj._startDate).split(" ");
    setValue('#day',date[0]);
    setValue('#month',date[1]);
    setValue('#year',date[2]);
} 

const setSelectedValues = (propertyValue,value) =>{
    let allItems = document.querySelectorAll(propertyValue);
    allItems.forEach(item =>{
        if(Array.isArray(value)){
            if(value.includes(item.value)){
                item.checked = true;
            }
        }
        else if(item.value === value)
            item.checked = true;
    });
}

const save = ()=>{
    try{
        let employeePayrollData = createEmployeePayroll();
            createAndUpdateStorage(employeePayrollData);
    }catch(e){
        return;
    }
}

function createAndUpdateStorage(employeePayrollData){
    let employeePayrollList = JSON.parse(localStorage.getItem("EmployeePayrollList"));

    if(employeePayrollList != undefined){
        employeePayrollList.push(employeePayrollData);
    }else{
        employeePayrollList = [employeePayrollData];
    }

    localStorage.setItem("EmployeePayrollList",JSON.stringify(employeePayrollList));
}

const createEmployeePayroll = () =>{
    let employeePayrollData = new EmployeePayrollData();
    employeePayrollData.id = createNewEmployeeId();

    try{
        employeePayrollData.name = getInputvalueById('#name');
    }catch(e){
        setTextValue('.text-error',e);
        throw e;
    }
    employeePayrollData.profilePic = getSelectedValues('[name=profile]').pop();
    employeePayrollData.gender = getSelectedValues('[name=gender]').pop();
    employeePayrollData.department = getSelectedValues('[name=department]');
    employeePayrollData.salary = getInputvalueById('#salary');
    employeePayrollData.note = getInputvalueById('#notes');
    let date = getInputvalueById('#day')+" "+getInputvalueById('#month')+" "+getInputvalueById('#year');
    
    employeePayrollData.startDate = new Date(date);
    return employeePayrollData;
}

const getSelectedValues = (propertyValue) =>{
    let allItems = document.querySelectorAll(propertyValue);
    let selItems = [];
    allItems.forEach(item=>{
        if(item.checked) selItems.push(item.value);
    });
    return selItems;
}

const getInputvalueById = (id) =>{
    let value = document.querySelector(id).value;
    return value;
}

const getInputElementValue = (id) =>{
    let value = document.getElementById(id).value;
    return value;
}

const resetForm = () =>{
    setValue('#name','');
    unsetSelectedValues('[name=profile]');
    unsetSelectedValues('[name=gender]');
    unsetSelectedValues('[name=department]');
    setValue('#salary','');
    setValue('#notes','');
    setValue('#day','1');
    setValue('#month','January');
    setValue('#year','2020');
}

const unsetSelectedValues = (propertyValue) => {
    let allItems = document.querySelectorAll(propertyValue);
    allItems.forEach(item=>{
        item.checked=false;
    });
}

const setTextValue = (id, value) => {
    const element = document.querySelector(id);
    element.textContent = value;
}

const setValue = (id, value) => {
    const element = document.querySelector(id);
    element.value = value;
}

const createNewEmployeeId = () => 
{
    let empID = localStorage.getItem("EmployeeID");
    empID = !empID ? "1" : (parseInt(empID) + 1).toString();
    localStorage.setItem("EmployeeID", empID);
    return empID;
}