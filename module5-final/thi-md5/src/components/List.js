import {useEffect, useState} from "react";
import * as bookService from "../services/BookService";
import {NavLink} from "react-router-dom";
import './list.css'
import 'bootstrap/dist/css/bootstrap.css';
import colors from "tailwindcss/colors";



function List() {
    const [books, setBook] = useState([]);
    const [types, setType] = useState([]);
    const [isShowInfo, setIsShowInfo] = useState(true);

    const handleHidden = () => {
        setIsShowInfo((isShowInfo) => {
            return !isShowInfo
        })
    }


    const getAllBook = async () => {
        try {
            const proAll = await bookService.getAllBook();
            setBook(proAll);
        } catch (e) {
            console.log(e);
        }
    }


    const getType = async () => {
        try {
            const proType = await bookService.getALlType();
            setType(proType);
        } catch (e) {
            console.log(e)
        }
    }

    const handleSearch = async (event) => {
        const value = event.target.value;
        try {
            const bookSearch = await bookService.searchByName(value);
            setBook(bookSearch);
        } catch (e) {
            console.log(e);
        }
    }

    useEffect(() => {
        getType()
        getAllBook()
    }, []);


    const handleSelect = async (event) => {
        const value = event.target.value;
        try {
            const bookSearchType = await bookService.searchByType(value);
            setBook(bookSearchType);
        } catch (e) {
            console.log(e);
        }
    }
    return (

        <>
            <button className="btn btn-primary">
                <a style={{color:"white", textDecoration:"none"}} href="https://sites.google.com/view/du-lichh/trang-ch%E1%BB%A7">Trang chủ</a>
            </button>
            <h1 className="text-[#07a787] text-center">Danh Sách Khách Hàng</h1>
            <div className="container">

                <div className="container d-flex align-items-center">
                    <div style={{marginRight: '20px'}}>
                        <NavLink className="btn btn-primary" to="/create">Create Book</NavLink>
                    </div>

                    <div style={{marginRight: '20px'}}>
                        <input onChange={handleSearch} className="form-control" type="text" name="name" id="name"
                               placeholder="Enter name search"/>
                    </div>

                    <div>
                        <div>
                            <select className="form-select" aria-label="Default select example"
                                    onChange={handleSelect}>
                                <option value="">--Chọn Type--</option>
                                {types.map((type, index) => (
                                    <option key={type.id} value={type.name}>{type.name}</option>
                                ))}
                            </select>
                        </div>
                    </div>

                </div>

                {(books.length !== 0) ?
                    <table className="table table-striped">
                        <thead>
                        <tr>
                            <th>STT</th>
                            <th>Code</th>
                            <th>Name</th>
                            <th>Date</th>
                            <th>So Luong</th>
                            <th>Type</th>
                        </tr>
                        </thead>
                        <tbody>
                        {books.map((book, index) => (
                            <tr key={book.id}>
                                <td>{index + 1}</td>
                                <td>{book.code}</td>
                                <td>{book.name}</td>
                                <td>{book.date}</td>
                                <td className={book.soLuong > 9 ? "black" : 'red'}>{book.soLuong}</td>
                                <td>{book.type.name}</td>
                            </tr>
                        ))}
                        </tbody>
                    </table> : <h1>Không tìm thấy thông tin </h1>}
                <span type="submit" onClick={() => handleHidden()}>
                    {isShowInfo === true ? "Hidden Info" : "Show info"}
                </span>
                {isShowInfo &&
                    <div style={{color: "blue"}}>
                        hiển thị thông tin
                    </div>}
            </div>
        </>
    )
}

export default List;