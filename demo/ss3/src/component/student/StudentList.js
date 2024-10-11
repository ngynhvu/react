import React, {Component} from "react";

class StudentList extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <>
                <h1>Danh sach hoc sinh</h1>
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
                        this.props.studentsProps.map((item) => (
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
}

export default StudentList;