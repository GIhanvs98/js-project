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
let tBodyElement= document.getElementById('tBody');
let alertElement= document.getElementById('alert');
//================================
let customerDatabase=[]; //[1,2,3,4,5(id=C-5)]
selectedCustomerId=undefined;
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
    }else if(saveUpdateButtonElement.value=='Update Customer' && selectedCustomerId){
        let selectedIndex = findCustomerIndex(selectedCustomerId);
            if(selectedIndex!=-1){
                customerDatabase[selectedIndex]= new Customer(
                    selectedCustomerId,
                    nameElement.value,
                    addressElement.value,
                    Number.parseFloat(salaryElement.value),
                    dobElement.value,
                );
                setAlert(nameElement.value+' updated!..',3000);
                saveUpdateButtonElement.value='Save Customer';
                loadTable();
                clearFields();

            }else{
                alert('Something went wrong');
            }
    }
}
// save & update customer
// Save Customer
const saveCustomer=(customer)=>{
    customerDatabase.push(customer);
    clearFields();
    loadTable();
    setAlert(customer.getName()+' Saved!', 3000);
}
// Save Customer
// set Alert
const setAlert=(message, duration)=>{
    alertElement.innerHTML=message;
    alertElement.style.display='block';
    setTimeout(()=>{
        alertElement.style.display='none';
    }, duration);
}
// set Alert
// Set Data
const setData=(selectedCustomer)=>{
    selectedCustomerId=selectedCustomer.getId();
    nameElement.value=selectedCustomer.getName();
    addressElement.value=selectedCustomer.getAddress();
    salaryElement.value=selectedCustomer.getSalary();
    dobElement.value=selectedCustomer.getDob();
    saveUpdateButtonElement.value='Update Customer';
}
// Set Data
// find customer
const findCustomer=(id)=>{
    let selectedCustomer = customerDatabase.find(e=>e.getId()==id);
    if(!selectedCustomer){
        return null;
    }
    return selectedCustomer;
}
// find customer

// find customer Index
const findCustomerIndex=(id)=>{
    return customerDatabase.findIndex(e=>e.getId()==id);
}
// find customer Index

// Ready to Update
const readyToUpdate=(customerId)=>{
    let selectedCustomer = findCustomer(customerId);
    if(selectedCustomer){
        setData(selectedCustomer);
    }else{
        alert('Something went wrong');
    }
    
}
// Ready to Update

// load table
const loadTable = ()=>{
    tBodyElement.innerHTML='';
    customerDatabase.forEach(e=>{
        let tr = document.createElement('tr');
        tr.innerHTML=`
             <td>
                <div class="context">
                    ${e.getId()}
                </div>
            </td>
            <td>
                <div class="context">
                    ${e.getName()}
                </div>
            </td>
            <td>
                <div class="context">
                    ${e.getAddress()}
                </div>
            </td>
            <td>
                <div class="context">
                    ${e.getSalary()}
                </div>
            </td>
            <td>
                <div class="context">
                    ${e.getDob()}
                </div>
            </td>
            <td>
                <div class="context">
                    <input type="button" onclick="readyToUpdate('${e.getId()}')" value="Modify" class="btn btn-warning">
                </div>
            </td>
            <td>
                <div class="context">
                    <input type="button" value="Remove" class="btn btn-danger">
                </div>
            </td>
        `;
        tBodyElement.appendChild(tr);
    });
}
// load table

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
