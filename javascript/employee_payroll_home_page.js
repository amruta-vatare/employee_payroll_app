window.addEventListener('DOMContentLoaded',(event)=>{
createInnerHtml();
});

const createInnerHtml = () =>{
    const headerHtml = "<th></th><th>Name</th><th>Gender</th><th>Department</th><th>Salary</th><th>Start Date</th><th>Actions</th>"
    const innerHtml =`${headerHtml}
    <tr>
        <td><img class="profile" src="../photos/profile2.webp" alt=""></td>
        <td>Suman Vatare</td>
        <td>Female</td>
        <td>
            <div class="dept-label">HR</div>    
            <div class="dept-label">Engineer</div>
        </td>
        <td>300000</td>
        <td>2 Nov 2019</td>
        <td>
            <img id="1" onclick="remove(this)" alt="delete" src="../photos/delete.png" height="20px" width="20px">
            <img id="1" alt="edit" onclick="update(this)" src="../photos/edit.png" height="20px" width="20px">
        </td>
    </tr>
    `;
    document.querySelector('table#display').innerHTML = innerHtml;
}