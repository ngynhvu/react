import axios from 'axios';

export const getAllBook = async () => {
    try {
        const proAllBook = await axios.get(`http://localhost:8888/books`);
        return proAllBook.data;
    } catch (e) {
        console.log(e);
    }
}

export const getALlType = async () => {
    try {
        const proAllType = await axios.get(`http://localhost:8888/type`);
        return proAllType.data;
    } catch (e) {
        console.log(e)
    }
}

export const createBook = async (values) => {
    try {
        await axios.post(`http://localhost:8888/books`, values)
    } catch (e) {
        console.log(e)
    }
}

export const searchByName = async (name) => {
    try {
        const proSearchName = await axios.get(`http://localhost:8888/books?name=${name}`);
        return proSearchName.data;
    } catch (e) {
        console.log(e);
    }
}

export const searchByType = async (type) => {
    try {
        const proType = await axios.get(`http://localhost:8888/books?type.name=${type}`);
        return proType.data;
    } catch (e) {
        console.log(e);
    }
}
