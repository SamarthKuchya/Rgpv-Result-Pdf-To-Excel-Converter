# RGPV Result PDF to Excel Converter

This project is a utility tool built for automating the process of extracting results from RGPV (Rajiv Gandhi Proudyogiki Vishwavidyalaya) result PDFs and saving them into an organized Excel file. It was developed during a college hackathon and won 1st prize in the first year of college.

---

## Features

- Extracts key information from RGPV result PDFs, including:
  - Name
  - Roll Number
  - Result Status
  - SGPA (Semester Grade Point Average)
  - CGPA (Cumulative Grade Point Average)
- Saves extracted data into an Excel file.
- Processes multiple PDFs in a single execution.

---

## How It Works

1. Reads result PDFs from a specified directory.
2. Extracts relevant data using pattern matching.
3. Organizes the data into rows and columns in an Excel file.
4. Saves the output as `data.xlsx` for easy access and further use.

---

## Prerequisites

1. **Node.js**: Make sure Node.js is installed on your system.
2. **Required Packages**:
   - `exceljs`: For creating and editing Excel files.
   - `pdf-parse`: For reading and parsing PDF files.
   - `readline-sync`: For taking user input from the console.

---

## Installation and Setup

1. **Clone the repository**:
   ```bash
   git clone https://github.com/SamarthKuchya/RGPV-Result-Pdf-To-Excel-Converter
   cd RGPV-Result-Pdf-To-Excel-Converter
   ```

2. **Install dependencies**:
   ```bash
   npm install
   ```

3. **Place your PDF files**:
   - Add your RGPV result PDFs in the directory `D:/pdf to excel/Rgpv-Result-Pdf-To-Excel-Converter`.
   - Ensure the file names follow the format `test1.pdf`, `test2.pdf`, and so on.

4. **Run the application**:
   ```bash
   node app.js
   ```

5. **Provide input**:
   - Enter the total number of PDF files to be processed when prompted.

---

## Output

- The extracted data will be saved in an Excel file named `data.xlsx` in the project directory.
- Each row in the Excel file will represent data from one PDF, with the following columns:
  - **Name**
  - **Roll Number**
  - **Result Status**
  - **SGPA**
  - **CGPA**

---

## Dependencies

- **exceljs**: For creating and manipulating Excel files.
- **pdf-parse**: For extracting text content from PDF files.
- **fs**: For reading PDF files from the file system.
- **readline-sync**: For taking console input during runtime.

---

## Limitations

- The tool assumes the PDF files follow a consistent format for extracting data.
- The directory path and file naming conventions need to match the specified structure.

---

## Future Enhancements

- Add support for dynamic directory and file selection.
- Implement error handling for files with inconsistent formats.
- Include a graphical user interface (GUI) for easier usage.

---

## License
This project is open-source and available under the MIT License.

---

## Author
Created by **Samarth** during a college hackathon. Feel free to contribute or provide feedback!

