import React, { Component } from 'react'
import LoginService from '../BackendCon/LoginService'

class ListPortBuilder extends Component {
    constructor(props)
    {
        super(props)
        this.state={
            newUser:[]
        }
        this.addUser=this.addNewUser.bind(this);
    }
    componentDidMount()
    {
        LoginService.getLoginDetails().then((res)=>
        {
            this.setState({Login:res.data});
        })
    }
     addNewUser()
     {
        this.props.history.push('/newUser')
     }

  render() {
    return (
      <div>
        <h2 className='text-center'>Login Detail</h2>
        <div>
            <button onClick={this.addUser}></button>
        </div>
        <div className='row'>
            <table className='table table-striped table-bordered'>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>email</th>
                        <th>password</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        this.state.Login.map(
                            Login =>
                            <tr key={Login.id}>
                                <td>{Login.name}</td>
                                <td>{Login.email}</td>
                                <td>{Login.password}</td>
                            </tr>
                        )
                    }
                </tbody>
            </table>
        </div>
      </div>
    )
  }
}

export default ListPortBuilder