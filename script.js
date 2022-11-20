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
    let a = document.forms["form"]["fname"].value;
    let b = document.forms["form"]["lname"].value;
    let c = document.forms["form"]["addr"].value;
    let e = document.forms["form"]["pin"].value;
    var st = document.getElementById("inputState");
    var ctry = document.getElementById("inputcountry");
    var food=false;
    if (a == "") {
            alert("PLEASE ENTER YOUR FIRST NAME");
            return false;
           }
           
else   if (b == "") {
            alert("PLEASE ENTER YOUR LAST NAME");
            return false;
           }
           
else    if (c == "") {
            alert("PLEASE ENTER YOUR ADDRESS");
            return false;
           }
else  if (e == "") {
            alert("PLEASE ENTER YOUR PINCODE");
            return false;
           }
else if (st.value == "Choose...") {
             
               alert("PLEASE SELECT THE STATE");
               return false;
           }
 else if (ctry.value == "Choose...") {
               
               alert("PLEASE SELECT THE COUNTRY");
               return false;
           }
           else if(document.getElementById("male").checked==false&&document.getElementById("female").checked==false&&document.getElementById("others")==false){
           alert("PLEASE ENTER YOUR GENDER");
           return false;
           }
else if(document.getElementById("f1").checked==false&&document.getElementById("f2").checked==false&&document.getElementById("f3").checked==false&&document.getElementById("f4").checked==false&&document.getElementById("f5").checked==false){
           var food = true;
               alert("PLEASE SELECT THE FOOD");
           return false;
           }
           
else{   
    
        if(a!=""&&b!=""&&c!=""&&e!=""&&st!=""&&ctry!=""&&(document.getElementById("f1").checked==true||document.getElementById("f2").checked==true||document.getElementById("f3").checked==true||document.getElementById("f4").checked==true||document.getElementById("f5").checked==true))
        {
            alert("Thank you for submit");
            var formData = {};
            formData["inputname"] = document.getElementById("inputname").value;
            formData["inputlastname"] = document.getElementById("inputlastname").value;
            formData["inputAddress"] = document.getElementById("inputAddress").value;
            formData["inputpincode"] = document.getElementById("inputpincode").value;
            formData["inputcountry"] = document.getElementById("inputcountry").value;
            formData["inputState"] = document.getElementById("inputState").value;
          
            var ele = document.querySelectorAll('input[type="radio"]');
                      
            for(i = 0; i < ele.length; i++) {
                if(ele[i].checked)
                formData["inlineRadio"]
                        = ele[i].value;
            }
        var selected = new Array();
        var chks = document.querySelectorAll('input[type="checkbox"]');
        
        
        for (var i = 0; i < chks.length; i++) {
        if (chks[i].checked) {
        selected.push(chks[i].value);
        }
        
        }
    
    if (selected.length > 0) {
    var res=selected.join(",");
    formData["check"]=res;
    }
    
        return formData;
    }
    }

}

//Insert the data
function insertNewRecord(data) {
    var table = document.getElementById("storeList").getElementsByTagName('tbody')[0];
    var newRow = table.insertRow(table.length);
    if(data.inputname!="undefined"&&data.inputlastname!="undefined"&&data.inputAddress!="undefined"&&data.inputpincode!="undefined"&&data.inputcountry!="undefined"&&data.inputState!="undefined"&&data.inlineRadio!="undefined"&&data.check!="undefined")
    {
    cell1 = newRow.insertCell(0);
		cell1.innerHTML = data.inputname;
    cell2 = newRow.insertCell(1);
		cell2.innerHTML = data.inputlastname;
    cell3 = newRow.insertCell(2);
		cell3.innerHTML = data.inputAddress;
    cell4 = newRow.insertCell(3);
		cell4.innerHTML = data.inputpincode;
    cell5 = newRow.insertCell(4);
        cell5.innerHTML = data.inputcountry;
    cell6 = newRow.insertCell(5);
		cell6.innerHTML = data.inputState;
    cell7 = newRow.insertCell(6);
		cell7.innerHTML = data.inlineRadio;
    cell8 = newRow.insertCell(7);
        cell8.innerHTML = data.check;
        cell9 = newRow.insertCell(8);
        cell9.innerHTML = `<button onClick="onEdit(this)">Edit</button> <button onClick="onDelete(this)">Delete</button>`;
    }
    }

//Edit the data
function onEdit(td) {
    selectedRow = td.parentElement.parentElement;
    document.getElementById("inputname").value = selectedRow.cells[0].innerHTML;
    document.getElementById("inputlastname").value = selectedRow.cells[1].innerHTML;
    document.getElementById("inputAddress").value = selectedRow.cells[2].innerHTML;
    document.getElementById("inputpincode").value = selectedRow.cells[3].innerHTML;
    document.getElementById("inputcountry").value= selectedRow.cells[4].innerHTML;
    document.getElementById("inputState").value= selectedRow.cells[5].innerHTML;
    document.getElementById("inlineRadio").value= selectedRow.cells[6].innerHTML;
    document.getElementById("food").value= selectedRow.cells[7].innerHTML;
}
function updateRecord(formData) {
    selectedRow.cells[0].innerHTML = formData.inputname;
    selectedRow.cells[1].innerHTML = formData.inputlastname;
    selectedRow.cells[2].innerHTML = formData.inputAddress;
    selectedRow.cells[3].innerHTML = formData.inputpincode;
    selectedRow.cells[4].innerHTML = formData.inputcountry;
    selectedRow.cells[5].innerHTML = formData.inputState;
    selectedRow.cells[6].innerHTML = formData.inlineRadio;
    selectedRow.cells[7].innerHTML = formData.check;
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
    document.getElementById("inputname").value = '';
    document.getElementById("inputlastname").value = '';
    document.getElementById("inputAddress").value = '';
    document.getElementById("inputpincode").value = '';
    document.getElementById("inputcountry").value= '';
    document.getElementById("inputState").value= '';
    document.getElementById("inlineRadio").value= '';
    document.getElementById("food").value='';
    selectedRow = null;
}