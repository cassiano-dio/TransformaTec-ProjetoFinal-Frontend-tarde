import React, {Component} from "react";
import ItemDataService from "../services/item.service";

export default class AddItem extends Component {

    constructor(props){
        super(props);
        this.onChangeTodoId = this.onChangeTodoId.bind(this);
        this.onChangeSymbol = this.onChangeSymbol.bind(this);
        this.onChangeName = this.onChangeName.bind(this);

        this.saveItem = this.saveItem.bind(this);
        this.newItem = this.newItem.bind(this);

        this.state = {
            id: null,
            name: "",
            symbol: "",
            todoId:"",
            price: null,
            description: "",
            status: false,

            submitted: false
        };
    }

    onChangeTodoId(e){
        this.setState({todoId: e.target.value});
    }

    onChangeSymbol(e){
        this.setState({symbol: e.target.value});
    }

    onChangeName(e){
        this.setState({name: e.target.value});
    }
    
    saveItem(){

        var data = {
            todoId: this.state.todoId,
            name: this.state.name,
            symbol: this.state.symbol
        }

        ItemDataService.create(data)
            .then(
                response => {
                    this.setState({
                        id: response.data.id,
                        todoId: response.data.todId,
                        name: response.data.name,
                        price: response.data.price,
                        description: response.data.description,
                        status: response.data.status,

                        submitted: true
                    });
                    console.log(response.data)
                }
            ).catch(
                e => {
                    console.log(e);
                }
            );
    }

    newItem(){
        this.setState({
            id: null,
            name: "",
            symbol: "",
            todoId:"",
            price: null,
            description: "",
            status: false,

            submitted: false
        });
    }

    render(){
        return (
            <div className="submit-form">

            {
                this.state.submitted ? (
                    <div>
                        <h4>Item cadastrado com sucesso!</h4>
                        <button className="btn btn-success" onClick={this.newItem}>
                            Novo Item
                        </button>
                    </div>
                ): (
                    <div>
                        <div className="form-group">
                            <label htmlFor="todoId">Todo Id</label>
                            <input 
                                type="number"
                                className="form-control"
                                id="todoId"
                                value={this.state.todoId}
                                name="todoId"
                            />
                        </div>
                        <div className="form-group">
                            <label htmlFor="symbol">Symbol</label>
                            <input 
                                type="text"
                                className="form-control"
                                id="symbol"
                                value={this.state.symbol}
                                name="symbol"
                            />
                        </div>
                        <div className="form-group">
                            <label htmlFor="name">Name</label>
                            <input 
                                type="text"
                                className="form-control"
                                id="name"
                                value={this.state.name}
                                name="name"
                            />
                        </div>
                        <button onClick={this.saveItem} className="btn btn-success">
                            Registrar
                        </button>
                    </div>
                )
            }
            </div>
        );
    }


}