
var selectedRow = null

function onFormSubmit(e) {
	event.preventDefault();
        var formData = readFormData();
        if (selectedRow == null){
            insertNewRecord(formData);
		}
        else{
            updateRecord(formData);
		}
        resetForm();    
}

//Retrieve the data
function readFormData() {
    var formData = {};
    formData["name1"] = document.getElementById("name1").value;
    formData["email1"] = document.getElementById("email1").value;
    formData["skills1"] = document.getElementById("skills1").value;
    formData["gender"] = document.getElementById("gender").value;
    return formData;
}

//Insert the data
function insertNewRecord(data) {
    var table = document.getElementById("storeList").getElementsByTagName('tbody')[0];
    var newRow = table.insertRow(table.length);
    cell1 = newRow.insertCell(0);
		cell1.innerHTML = data.name1;
    cell2 = newRow.insertCell(1);
		cell2.innerHTML = data.email1;
    cell3 = newRow.insertCell(2);
		cell3.innerHTML = data.skills1;
    cell4 = newRow.insertCell(3);
		cell4.innerHTML = data.gender;
    cell4 = newRow.insertCell(4);
        cell4.innerHTML = `<button onClick="onDelete(this)">Delete</button>`;
}

//Delete the data
function onDelete(td) {
    if (confirm('Do you want to delete this record?')) {
        row = td.parentElement.parentElement;
        document.getElementById('storeList').deleteRow(row.rowIndex);
        resetForm();
    }
}

//Reset the data
function resetForm() {
    document.getElementById("name1").value = '';
    document.getElementById("email1").value = '';
    document.getElementById("skills1").value = '';
    document.getElementById("gender").value = '';
    selectedRow = null;
}