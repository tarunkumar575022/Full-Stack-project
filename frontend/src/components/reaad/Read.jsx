import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './read.css'; 


    class Read extends Component {
        state = {
            data: [],
            error: ""
        }

        componentDidMount() {
            this.getData()
            
        }

        handleDelete = async (id) => {
            const updatedData = this.state.data.filter(item => item._id !== id);
            this.setState({ data: updatedData });

            try {
                const response = await fetch(`http://localhost:5000/${id}`, {
                    method: 'DELETE',
                });

                if (response.ok) {
                    this.setState({error: "Deleted Successfully"})
                }
            } catch (err) {
                this.getData()
                this.setState({error: "Somnething Went Wrong"})
            }

        }

        getData = async () => {
            console.log("GET DATA EXECUTED");
            try {
                const response = await fetch("http://localhost:5000");
                const result = await response.json();

                if (response.ok) {
                    console.log("Fetched Data:", result);
                    this.setState({ data: result });
                } else {
                    console.log(result.error);
                    this.setState({ error: result.error });
                }
            } catch (err) {
                console.error("Fetch error:", err.message);
                this.setState({ error: "Server error or invalid response" });
            }
        };

        render() {
            const {data} = this.state
            console.log(data)
            return (
                    <div>
                    <h1>All Data</h1>
                    <div className='row p-3' >
                        {Array.isArray(data) && data.map((ele) => (
                            <div key={ele._id} className='col-3 '>
                                <div className='card p-3 color'>
                                    <h5>{ele.name}</h5>
                                    <h6 className='emailHead'>{ele.email}</h6>
                                    <p>{ele.age}</p>
                                    <div className='rows'>
                                        <a href="asd" className='me-2' onClick={() => this.handleDelete(ele._id)}>Delete</a>
                                        <Link to={`/${ele._id}`}>Edit</Link>
                                    </div>
                            </div>
                        </div>
                        ))}
                    </div>
                </div>
            )
        }
    }

    export default Read