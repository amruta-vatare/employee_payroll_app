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
    let empPayrollList = createEmployeePayrollJSON();
    for(const empPayrollData of empPayrollList){
        innerHtml =`${innerHtml}
    <tr>
        <td><img class="profile" src="${empPayrollData._profilePic}" alt=""></td>
        <td>${empPayrollData._name}</td>
        <td>${empPayrollData._gender}</td>
        <td>
            <div class="dept-label">${empPayrollData._department[0]}</div>    
            <div class="dept-label">${empPayrollData._department[1]}</div>
        </td>
        <td>${empPayrollData._salary}</td>
        <td>${empPayrollData._startDate}</td>
        <td>
            <img name="${empPayrollData._id}" onclick="remove(this)" alt="delete" src="../photos/delete.png" height="20px" width="20px">
            <img name="${empPayrollData._id}" alt="edit" onclick="update(this)" src="../photos/edit.png" height="20px" width="20px">
        </td>
    </tr>
    `;
    } 
    document.querySelector('table#display').innerHTML = innerHtml;
}
const createEmployeePayrollJSON = () =>{
    let empPayrollListLocal = [
        {
            _name:'Ganesh Dev',
            _gender: 'Male',
            _department: [
                'Enginnering',
                'Fincance'
            ],
            _salary:500000,
            _startDate: '29 Oct 2019',
            _note:'',
            _id: new Date().getTime,
            _profilePic:'../photos/profile2.webp'
        },
        {
            _name:'Keshav Shahane',
            _gender: 'Male',
            _department: [
                'Enginnering',
                'Hr'
            ],
            _salary:600000,
            _startDate: '30 Oct 2018',
            _note:'',
            _id: new Date().getTime,
            _profilePic:'../photos/profile8.jpg'
        },
    ];
    return empPayrollListLocal;
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

