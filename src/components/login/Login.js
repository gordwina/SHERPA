import React, {useState} from "react";
import "./Login.scss";
import authAPI from "../../services/authAPI";
import axios from "axios";

// import {withRouter} from "react-router-dom";

/*
class Login extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            //redirect : false,
            //loginId : '',
            //loginPwd : '',
            chat: '',
            chien: ''
        }
    }


    keyUpHandler = () => {
        this.state.chat = (this.refs.loginId.value.length !== 0);
        console.log('coucou', this.refs.loginId.value.length !== 0)
    }

    keyUpHandlerW = () => {
        this.state.chien = (this.refs.loginPwd.value.length !== 0);
        console.log('youpi', this.refs.loginPwd.value.length !== 0)
    }

    boutonWorking = () => {
        if (this.state.chat && this.state.chien) {
            console.log('kzdgkjzdghj')
            this.props.history.push('/home')
            // return   <Redirect to= '/home'/>
        }

    };*/

const LoginPage = ({onLogin, history}) => {

    const [credentials, setCredentials] = useState({
        username: "",
        password: ""
    });

    const [error, setError] = useState("");

    // Gestion des champs
    const handleChange = ({currentTarget}) => {
        const {value, name} = currentTarget;

        setCredentials({...credentials, [name]: value});
    };

    // Gestion de l'envoi
    const handleSubmit = async event => {
        event.preventDefault();

        try {
            await authAPI.authenticate(credentials);
            setTimeout(function() {
                if(axios.defaults.headers["Authorization"] !== undefined) {
                    history.replace("/home");
                    setError("");
                    onLogin(true);
                }
                else {
                    setError("Il n'existe aucun compte lié à cette adresse email, ou le mot de passe est incorrect !");
                }
            }, 2000);
        } catch (error) {
            setError("Aucun compte est existant pour cet email");
        }
    };

    return (
        <div className="loginContainer">

            <div className="mobile">

                <div className="warningMessage">
                    <h4> Les contraintes de sécurité, inhérentes aux données de ce site, ne permettent pas sa
                        consultation sur mobile.</h4>
                    <h2>sherpa</h2>
                </div>

            </div>

            {/*   LEFT PART  */}
            <div className="loginBrand Container">

                <div className="brandtitlebox">
                    <h1>pour que <br/>les J.O<br/>restent<br/>une fête</h1>
                    <span className="top"/>
                    <span className="bottom"/>
                </div>
                <div className="brandingTag">
                    <h2>sherpa</h2>
                    <p>Solution pour la gestion d’événements à haut risque</p>
                </div>
            </div>

            {/*   RIGHT PART  */}
            <div className="loginId Container">
                <div className="loginIdWrapper">
                    <h2> Connectez-vous</h2>
                    <form onSubmit={handleSubmit}>
                        <div className="loginId">
                            <p>identifiant</p>
                            <input
                                value={credentials.username}
                                onChange={handleChange}
                                type="email"
                                placeholder="entrez votre identifiant"
                                name="username"
                                className="form-control"
                            />
                            {error && <p className="invalid-feedback">{error}</p>}
                        </div>
                        <div className="loginPwd">
                            <p>mot de passe</p>
                            <input
                                value={credentials.password}
                                onChange={handleChange}
                                placeholder="entrez votre mot de passe"
                                type="password"
                                name="password"
                                className="form-control"
                            />
                        </div>
                        <button className="loginButton">se connecter</button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default LoginPage;
