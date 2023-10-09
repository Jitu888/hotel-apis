const XLSX = require('xlsx');
const excelFilePath = 'country-city-and-state-csv/worldcities.xlsx';


exports.get_all_cities = () =>{
    const workbook = XLSX.readFile(excelFilePath);
    const sheetName = workbook.SheetNames[0];
    const sheet = workbook.Sheets[sheetName];
  
    // Convert the sheet to an array of objects
    const data = XLSX.utils.sheet_to_json(sheet);
     console.log(data)
    // Filter cities based on the keyword
    const filteredCities = data.map((row) => {return {city :`${row.city},${row.country}`}});
  
    return filteredCities;
}