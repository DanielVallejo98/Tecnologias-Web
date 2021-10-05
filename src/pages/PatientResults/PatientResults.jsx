import React from 'react'
import { Container,Button } from 'react-bootstrap'
import './PatientResults.scss'

import  Patient  from "../../components/Patient/Patient.jsx";
import { useContext } from "react";
import { PatientContext } from "../../contexts/PatientContext.jsx";
import { useHistory } from "react-router-dom";

function PatientResults() {
    const { setPatientLog } = useContext(PatientContext);
    const history = useHistory();

    const LogOut = () => {
        setPatientLog({ isLoggedIn: false });
        localStorage.removeItem("paciente");
        history.push("/")
    };
    return (
        <div className="location">
            <div style={{width:'100%', display:'flex',justifyContent:'end'}}>

 
                        <Button variant="outline-danger" onClick={() => LogOut()}><i className="fas fa-sign-out-alt fa-lg "></i></Button>
  
            </div>
            <div className="title">
                <h1 style={{fontWeight:'800',margin:'0'}} >Resultados</h1>
                <h6 style={{textAlign:'end',color:'#fff'}} className="mb-3 subtitle">Sistema LIS.</h6>
            </div>
            <Container>
                <div className="generic">
                    <div>
                        <p >Nombres </p>
                        <strong> Daniel Vallejo</strong>
                    </div>
                    <div>
                        <p >EPS </p>
                        <strong>  Sanitas</strong>
                    </div>
                    <div>
                        <p>Documento </p>
                        <strong> 12334</strong>
                    </div>

                </div>

                    <Patient></Patient>
 
                
                
            </Container>
        </div>
    )
}

export default PatientResults
