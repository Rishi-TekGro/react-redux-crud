import React,{useState,useEffect} from 'react'
import axios from 'axios';
import {Form,Button} from "react-bootstrap";
function Register(){
    const [name, setName] = useState("");
    const [number, setNumber] = useState("");
    const [password, setPassword] = useState("");
    const [confirm_password, setCPass] = useState("");
    const [referal, setReferal]= useState("");
    const [message, setMessage]= useState([]);
   const onSubmit=(event)=>{
    event.preventDefault();
    const userData={ 
    name:name, 
    number:number,
    password:password,
    confirm_password:confirm_password
    }
    console.log(userData);
    axios.post('http://127.0.0.1:8000/api/register/',userData)
    .then((res)=>{
       console.log(res);
    });
    
}

    return(
         <div className="container-fluid register_page" >
            <div className="row justify-content-center">
                <div className="col-md-8">
                <br/>
                <div class="alert alert-success" role="alert">
                    {message}
                 </div>
                    <div className="card">
                        <div className="card-header bg-primary text-white">Registration Form </div>

                        <div className="card-body">
                            <form >
                        
                                <div className="form-group row">
                                    <label for="name" className="col-md-4 col-form-label text-md-right">Name </label>

                                    <div className="col-md-6">

                                        <input  id="name" type="text" className="form-control " name="name" value={name} onChange={ event=>setName(event.target.value)} required  autofocus/>

                                    </div>
                                </div>
                                <div className="form-group row">
                                    <label for="Phone Number" className="col-md-4 col-form-label text-md-right">Phone Number</label>

                                    <div className="col-md-6">
                                        <input id="phone" type="number" className="form-control" name="customer_number" value={number} onChange={ event=>setNumber(event.target.value)} required autocomplete="number" autofocus/>

                        
                                    </div>
                                </div>

                                <div className="form-group row">
                                    <label for="email" className="col-md-4 col-form-label text-md-right">Referral Numer</label>

                                    <div className="col-md-6">
                                        <input id="referral_number" type="text" className="form-control " name="referral_number"  value={referal} onChange={ event=>setReferal(event.target.value)} required autocomplete="number"/>


                                    </div>
                                </div>

                                <div className="form-group row">
                                    <label for="password" className="col-md-4 col-form-label text-md-right">Password</label>

                                    <div className="col-md-6">
                                        <input id="password" type="password" className="form-control  " name="password" value={password} onChange={ event=>setPassword(event.target.value)}  required autocomplete="new-password"/>
       
                                    </div>
                                </div>

                                <div className="form-group row">
                                    <label for="password-confirm" className="col-md-4 col-form-label text-md-right">Confirm Password</label>

                                    <div className="col-md-6">
                                        <input id="password-confirm" type="password" className="form-control" name="password_confirmation" value={confirm_password} onChange={ event=>setCPass(event.target.value)}  required autocomplete="new-password"/>
                                    </div>
                                </div>

                                <div className="form-group row mb-0">
                                    <div className="col-12 text-center">
                                        <button type="submit" className="btn btn-primary col-12"onClick={onSubmit}>
                                        Register
                                        </button>
                                    </div>
                                </div>
                            </form>
                       
                        </div>
                    </div>
                
                    <div className="form-group row mb-0 row">
                        <div className="col-12 text-center">


                                <button type="submit" className="btn btn-primary col-5">
                                    App download
                                </button>

                        </div>
                    </div>
            </div>
    </div>
    </div>


    )

}
export  default  Register