class EmployeePayrollData {
    _id;
    get id() {return this._id;}
    set id(value) {
        this._id = value;
    }
    
    _name;
    get name() { return this._name; }
    set name(value) {
        let nameRegex = RegExp('^[A-Z]{1}[a-z]{3,}$');
        if (nameRegex.test(value))
            this._name = value;
        else
            throw 'Name is Incorrect';
    }
    _profilePic;
    get profilePic() {return this._profilePic;}
    set profilePic(value) {
        this._profilePic = value;
    }

    _gender;
    get gender() {return this._gender;}
    set gender(value) {
        this._gender = value;
    }

    _department;
    get department() {return this._department;}
    set department(value) {
        this._department = value;
    }

    _salary;
    get salary() {return this._salary;}
    set salary(value) {
        this._salary = value;
    }

    _note;
    get note() {return this._note;}
    set note(value) {
        this._note = value;
    }

    _startDate;
    get startDate() {return this._startDate;}
    set startDate(value) {
        this._startDate = value;
    }


    toString() {
        const options = { year: 'numeric', month: 'long', day: 'numeric' };
        const empDate = !this.startDate ? "undefined" : this.startDate.toLocaleDateString("en-US", options);
        return "id = " + this.id + ", name = " + this.name + ", salary = " + this.salary + ", gender = " + this.gender + ", start date = " + empDate;
    }
}