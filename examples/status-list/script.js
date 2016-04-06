function callAlert(){alert("Test12")}

function addRow(tableID){
  var table=document.getElementsByName(tableID)[0];
  var rowCount=table.rows.length;
  var row=table.insertRow(rowCount);
  var cell1=row.insertCell(0);cell1.innerHTML=rowCount;
  var cell2=row.insertCell(1);
  var element2=document.createElement("input");element2.type="text";element2.value=document.getElementsByName('txtInput')[0].value;element2.name="txtbox[]"
  cell2.appendChild(element2);
}
