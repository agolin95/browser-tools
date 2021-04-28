$(function() {
	console.log('~~~~~~~~~~~~~~~~~ Hidden Table Rows ~~~~~~~~~~~~~~~~~')
	
	var searchString = "DBX";
	var tables = [];
	tables.push(document.getElementById('field-screens-table'));
	tables.push(document.getElementById('field-screen-schemes-table'));
	tables.push(document.getElementById('issue-type-screen-schemes-table'));
	tables.push(document.getElementById('issuetypeschemes'));
	
	tables.forEach(function (item, index) {
		cleanTable(item, searchString);
	});
	
    console.log('~~~~~~~~~~~~~~~~~ Hidden Table Rows ~~~~~~~~~~~~~~~~~')
});

function cleanTable(table, searchString) {
	if (table !== null) {
		var rows = table.rows;
	    for (var row of rows) {
	    	if (row.childNodes[1].childNodes[1] !== undefined) {
	    		var rowTitle = row.childNodes[1].childNodes[1].innerHTML;
	    		if (!rowTitle.includes(searchString)) {
	    			console.log(rowTitle);
	    			row.classList.add("hiddenRow");	
	    		}
	    	}
	    }	
	}
}

/*
.aui-page-panel-content tbody .hiddenRow 
{
	display: none;
}
*/