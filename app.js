
const Excel = require('exceljs');
const fs = require('fs');
const pdf = require('pdf-parse');
const readline = require("readline-sync"); 

let files = Number(readline.question("enter total number of files")); 
// const headings = ["name"]
    const fileName = 'data.xlsx';
    const wb = new Excel.Workbook();
    const ws = wb.addWorksheet('My Sheet');
// console.log(files)
for (let i = 1; i <= files; i++) {
let dataBuffer = fs.readFileSync('D:/pdf converter/test'+i+'.pdf');
 
  // console.log(i)
pdf(dataBuffer).then(function(data) {
    console.log(data.text);
    let u =0
    let t = data.text.search("Name")
    let y = (data.text.search("Roll"))
    let name = (data.text.slice(t+4,y))
    let roll=(data.text.slice(y+8,y+20))
    let p = (data.text.search("CGPA"))
    let x = (data.text.search("Revaluation"))
    let cgpa = (data.text.slice(x-5,x))
    let sgpa = (data.text.slice(x-9,x-5))
    // let p = (data.text.slice())
    
    // console.log(data.text.slice(y+21,y+4)) 
    let result = (data.text.slice(p+4,x-9))
    console.log(result)
    // let sgpa = (data.text.slice(status+9,status+13))
    // let cgpa = (data.text.slice(status+13,status+17))
    // console.log(cgpa)
    // console.log(roll)
    let exceldata = [{
        'name':name,
        'roll':roll,
        'result':result,
        'cgpa':cgpa,
        'sgpa':sgpa
    }]
    ws.getCell('A'+i).value=name
    ws.getCell('B'+i).value=roll
    ws.getCell('C'+i).value=result
    ws.getCell('D'+i).value=sgpa
    ws.getCell('E'+i).value=cgpa
    console.log(u)
    
      wb.xlsx
  .writeFile(fileName)
  .then(() => {
    console.log('file created');
  })
  .catch(err => {
    console.log(err.message);
});
})};