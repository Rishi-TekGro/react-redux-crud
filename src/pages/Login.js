
import React from 'react';

import { useSelector } from 'react-redux';

function Login(){

    const users = useSelector((state) => state.users);

    return(
        <div>
              <div className="container-fluid register_page" >
                <div className="row justify-content-center">
                    <div className="col-md-8">
                    
                        <div className="card">
                        {users.map((user) => (
          <li key={user.id}>{user.name}</li>
        ))}
                            <div className="card-header bg-primary text-white">Registration Form</div>

                            <div className="card-body">
                                <form method="POST" action="{{ route('register') }}">
                            

                                    <div className="form-group row">
                                        <label for="Phone Number" className="col-md-4 col-form-label text-md-right">Phone Number</label>

                                        <div className="col-md-6">
                                            <input id="phone" type="number" className="form-control" name="customer_number" value="" required autocomplete="number" autofocus/>

                            
                                        </div>
                                    </div>



                                    <div className="form-group row">
                                        <label for="password" className="col-md-4 col-form-label text-md-right">Password</label>

                                        <div className="col-md-6">
                                            <input id="password" type="password" className="form-control  " name="password" required autocomplete="new-password"/>
          
                                        </div>
                                    </div>



                                    <div className="form-group row mb-0">
                                        <div className="col-12 text-center">
                                            <button type="submit" className="btn btn-primary col-12">
                                            Login
                                            </button>
                                        </div>
                                    </div>
                                </form>
                          
                            </div>
                        </div>
                    

                </div>
        </div>
        </div>
        </div>
    )

}
export  default  Login;