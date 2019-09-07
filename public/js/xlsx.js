const XLSX = require('xlsx');

const inputFile = XLSX.readFile('QBase - IBM Datathon - Final.xlsx');
XLSX.writeFile(inputFile, 'qbase.csv', {bookType: "csv"});
