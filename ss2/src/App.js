import logo from './logo.svg';
import './App.css';
import React from "react";

function App() {
    const className = "C10";
    const students = [
        {
            id: 1,
            name: "haiTT",
            address: "Quangr Nam"
        },
        {
            id: 2,
            name: "haiTT2",
            address: "Quangr Nam"
        },
        {
            id: 3,
            name: "haiTT3",
            address: "Quangr Nam"
        }
    ]

    const clickMe = (name) => {
        alert("hello " + name)
    }
    return (
        <>
            <h1 id="C10" className={className}>Danh sach hoc sinh</h1>
            <button onClick={() => clickMe("haiTT")}>Click me</button>
            <button onClick={clickMe}>Click me</button>
            <table>
                <thead>
                <tr>
                    <th>ID</th>
                    <th>Name</th>
                    <th>Address</th>
                    <th></th>
                </tr>
                </thead>
                <tbody>
                {
                    students.map((item) => (
                        <tr key={item.id}>
                            <td>{item.id}</td>
                            <td>{item.name}</td>
                            <td>{item.address}</td>
                            <td>{5 < 6 ? 5 : 6}</td>
                        </tr>
                    ))
                }
                </tbody>
            </table>
        </>
    );
}

export default App;
