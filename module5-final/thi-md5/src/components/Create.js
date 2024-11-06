import {useEffect, useState} from "react";
import * as bookService from "../services/BookService";
import {get} from "axios";
import {ErrorMessage, Field, Form, Formik} from "formik";
import * as Yup from "yup";
import {useNavigate} from "react-router-dom";
import {toast} from "react-toastify";


function Create() {
    const book = {
        code: "",
        name: "",
        date: "",
        soLuong: "",
        type: {}
    }

    const navigate = useNavigate();

    const [types, setType] = useState([]);

    const getType = async () => {
        try {
            const proType = await bookService.getALlType();
            setType(proType);
        } catch (e) {
            console.log(e)
        }
    }

    useEffect(() => {
        getType()
    }, []);

    const handleCreate = async (values)=>{
        const convertObj = {
            ...values,
            type: JSON.parse(values.type)
        }
        try{
            await bookService.createBook(convertObj);
            toast.success("Book created successfully.");
            navigate("/");
        }catch (e){
            console.log(e)
        }
    }

    const validate ={
        code: Yup.string().required("Not empty").matches(/^BO-\d{4}$/ ,"Vui lòng nhập định dạng đúng BO-XXXX"),
        name: Yup.string().required("Not empty").max(100,"Sách không dài qua 100 kí tự"),
        date: Yup.date().required("Not empty").max(new Date(),`Ngày không được lớn hơn hiện tại`),
        soLuong: Yup.number().required("Required").positive("Số lượng sách là số nguyên lớn hơn 0").integer("Số lượng sách là số nguyên lớn hơn 0").min(1, "Số lượng sản phẩm phải là số nguyên lớn hơn 0"),
    }
    return(
        <>
            <div className="container">
                <h1>Create New Product</h1>
                <Formik initialValues={book} onSubmit={handleCreate} validationSchema={Yup.object(validate)}>
                    <Form>
                        <div className="mt-2">
                            <label htmlFor="code">Code</label>
                            <Field className="form-control" type="text" name="code" id="code"></Field>
                            <ErrorMessage name='code' component='span' style={{color: 'red'}}></ErrorMessage>
                        </div>

                        <div className="mt-2">
                            <label htmlFor="name">Name</label>
                            <Field className="form-control" type="text" name="name" id="name"></Field>
                            <ErrorMessage name='name' component='span' style={{color: 'red'}}></ErrorMessage>
                        </div>


                        <div className="mt-2">
                            <label htmlFor="date">Date</label>
                            <Field className="form-control" type="date" name="date" id="date"></Field>
                            <ErrorMessage name='date' component='span' style={{color: 'red'}}></ErrorMessage>
                        </div>

                        <div className="mt-2" >
                            <label htmlFor="soLuong">Number</label>
                            <Field className="form-control" type="number" name="soLuong" id="soLuong"></Field>
                            <ErrorMessage name='soLuong' component='span' style={{color: 'red'}}></ErrorMessage>
                        </div>


                        <div className="mb-2">
                            <label htmlFor="type">Type</label>
                            <Field as="select" className="form-select" name="type" id="type"
                                   aria-label="Default select example"
                                   required>
                                <option value="">***Choose Type***</option>
                                {types.map((type, index) => (
                                    <option key={index}
                                            value={JSON.stringify(type)}>{type.name}</option>
                                ))}
                            </Field>
                        </div>

                        <button className="btn btn-primary">Create</button>
                    </Form>
                </Formik>
            </div>
        </>
    )
}

export default Create;