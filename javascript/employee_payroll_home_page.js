let empPayrollList;
window.addEventListener('DOMContentLoaded',(event)=>{
    empPayrollList = getEmployeePayrollDataFromStorage();
    document.querySelector(".emp-count").textContent = empPayrollList.length;
    createInnerHtml();
    localStorage.removeItem('editEmp');
});

const getEmployeePayrollDataFromStorage = () =>{
    return localStorage.getItem('EmployeePayrollList')? JSON.parse(localStorage.getItem('EmployeePayrollList')) : [];
}

const createInnerHtml = () =>{
    const headerHtml = "<th></th><th>Name</th><th>Gender</th><th>Department</th><th>Salary</th><th>Start Date</th><th>Actions</th>"
    let innerHtml = `${headerHtml}`;
    for(const empPayrollData of empPayrollList){
        let deptEle="";
        for(let dept of empPayrollData._department){
            deptEle = deptEle + `<div class="dept-label">${dept}</div>`
        }

        innerHtml =`${innerHtml}
    <tr>
        <td><img class="profile" src="${empPayrollData._profilePic}" alt=""></td>
        <td>${empPayrollData._name}</td>
        <td>${empPayrollData._gender}</td>
        <td>
            ${deptEle}
        </td>
        <td>${empPayrollData._salary}</td>
        <td>${empPayrollData._startDate}</td>
        <td>
            <img id="${empPayrollData._id}" name="${empPayrollData._id}" onclick="remove(this)" alt="delete" src="../photos/delete.png" height="20px" width="20px">
            <img id="${empPayrollData._id}" name="${empPayrollData._id}" alt="edit" onclick="update(this)" src="../photos/edit.png" height="20px" width="20px">
        </td>
    </tr>
    `;
    } 
    document.querySelector('table#display').innerHTML = innerHtml;
}

const getDeptHtml = (deptList) =>{
    let deptHtml = '';
    for(const dept of deptList){
        deptHtml =`${deptHtml} <div class="dept-label">${dept}</div>` 
    }
    return deptHtml;
}

const remove = (node) =>{
    let empPayrollData = empPayrollList.find(empData => empData._id == node.id);
    if(!empPayrollData) return;
    const index = empPayrollList
    .map(empData => empData._id)
    .indexOf(empPayrollData._id);
    empPayrollList.splice(index,1);
    localStorage.setItem("EmployeePayrollList",JSON.stringify(empPayrollList));
    document.querySelector(".emp-count").textContent = empPayrollList.length;
    createInnerHtml();
}

