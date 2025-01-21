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
let customerDatabase=[]; //[1,2,3,4,5(id=C-5)]
//================================
// save & update customer
const saveUpdateCustomer=()=>{
    if(saveUpdateButtonElement.value=='Save Customer'){
        let selectedId= generateId();
        if(!selectedId){
            alert('contact it department');
            return;
        }
        let createdCustomer = new Customer(
            selectedId,
            nameElement.value,
            addressElement.value,
            Number.parseFloat(salaryElement.value),
            dobElement.value
        );
        saveCustomer(createdCustomer);
    }else{
        // update customer
    }
}
// save & update customer
// Save Customer
const saveCustomer=(customer)=>{
    customerDatabase.push(customer);
    clearFields();
}
// Save Customer
//clear Fields
const clearFields=()=>{
    nameElement.value='';
    addressElement.value='';
    salaryElement.value='';
    dobElement.value='';
}
//clear Fields
// generate Id (id format = [C-1])
const generateId=()=>{
    if(customerDatabase.length==0){
        return 'C-1';
    }
    let selectedCustomer = customerDatabase[customerDatabase.length-1];
    if(!selectedCustomer.getId()){
        return null;
    }
    // C-5 -> [c,5] -> 5
    let selectedId = parseInt(selectedCustomer.getId().split('-')[1]);
    selectedId++;
    return 'C-'+selectedId;
}
// generate Id
