import React, {useState, useEffect} from 'react';
import { useNavigate } from 'react-router-dom';
import Input from "react-validation/build/input";
import Form from "react-validation/build/form";
import CheckButton from "react-validation/build/button";

import AuthService from '../services/auth.service';

const required = (value) => {
    if (!value) {
        return (
            <div className='invalid-feedback d-block'>
                Campo obrigatório
            </div>
        );
    }
};

const Login = () => {

};
