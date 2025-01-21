class Customer{
    #id;
    #name;
    #address;
    #salary;
    #dob;
    constructor(id,name,address,salary,dob){
        this.#id=id;
        this.#name=name;
        this.#address=address;
        this.#salary=salary;
        this.#dob=dob;
    }
    setId(id){
        this.#id=id;
    }
    setName(name){
        this.#name=name;
    }
    setAddress(address){
        this.#address=address;
    }
    setSalary(salary){
        this.#salary=salary;
    }
    setDob(dob){
        this.#dob=dob;
    }
    getId(){
        return this.#id;
    }
    getName(){
        return this.#name;
    }
    getAddress(){
        return this.#address;
    }
    getSalary(){
        return this.#salary;
    }
    getDob(){
        return this.#dob;
    }
}
let nameElement = document.getElementById('name');
let addressElement = document.getElementById('address');
let salaryElement = document.getElementById('salary');
let dobElement = document.getElementById('dob');
let saveUpdateButtonElement= document.getElementById('btnSaveCustomer');
//================================
// save & update customer
const saveUpdateCustomer=()=>{
    if(saveUpdateButtonElement.value=='Save Customer'){
        // save Customer
    }else{
        // update customer
    }
}
// save & update customer
