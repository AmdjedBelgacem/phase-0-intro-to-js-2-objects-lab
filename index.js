// Write your solution in this file!
const employee = {
    name: "Mj", 
    streetAddress: "Istanbul" 
}

function updateEmployeeWithKeyAndValue(obj, key, val){
    const updatedEmployee = { ...obj };
    updatedEmployee[key] = val;
    return updatedEmployee;
}

function destructivelyUpdateEmployeeWithKeyAndValue(obj, key, val){
    obj[key] = val;
    return obj;
}

function deleteFromEmployeeByKey(obj, key){
    const deletedEmployee = { ...obj};
    delete deletedEmployee[key];
    return deletedEmployee;
}

function destructivelyDeleteFromEmployeeByKey(obj, key){
    delete obj[key];
    return obj;
}