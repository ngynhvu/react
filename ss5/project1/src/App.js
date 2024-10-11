import logo from './logo.svg';
import './App.css';
import React from "react";

function App() {
  return (
    <div className="App">
        <table className="table-auto">
            <thead>
            <tr>
                <th>Song</th>
                <th>Artist</th>
                <th>Year</th>
            </tr>
            </thead>
            <tbody>
            <tr>
                <td>The Sliding Mr. Bones (Next Stop, Pottersville)</td>
                <td>Malcolm Lockyer</td>
                <td>1961</td>
            </tr>
            <tr>
                <td>Witchy Woman</td>
                <td>The Eagles</td>
                <td>1972</td>
            </tr>
            <tr>
                <td>Shining Star</td>
                <td>Earth, Wind, and Fire</td>
                <td>1975</td>
            </tr>
            </tbody>
        </table>
        ​
        Fixed
        Use table-fixed to allow the table to ignore the content and use fixed widths for columns. The width of the
        first row will set the column widths for the whole table.

        You can manually set the widths for some columns and the rest of the available width will be divided evenly
        amongst the columns without explicit width.

        Song Artist Year
        The Sliding Mr. Bones (Next Stop, Pottersville) Malcolm Lockyer 1961
        Witchy Woman The Eagles 1972
        Shining Star Earth, Wind, and Fire 1975
        <table className="table-fixed">
            <thead>
            <tr>
                <th>Song</th>
                <th>Artist</th>
                <th>Year</th>
            </tr>
            </thead>
            <tbody>
            <tr>
                <td>The Sliding Mr. Bones (Next Stop, Pottersville)</td>
                <td>Malcolm Lockyer</td>
                <td>1961</td>
            </tr>
            <tr>
                <td>Witchy Woman</td>
                <td>The Eagles</td>
                <td>1972</td>
            </tr>
            <tr>
                <td>Shining Star</td>
                <td>Earth, Wind, and Fire</td>
                <td>1975</td>
            </tr>
            </tbody>
        </table>
    </div>
  );
}

export default App;
