import React, { useContext, useState } from 'react';
import { getAuth, signInWithPopup, GoogleAuthProvider, } from "firebase/auth";
import { initializeApp } from 'firebase/app';
import firebaseConfig from './Firebase/FirebaseConfig';
import { userContext } from '../../App';
import { useHistory, useLocation } from 'react-router';
import './Authentication.css';

initializeApp(firebaseConfig);

const Authentication = () => {

    const [auths, setAuth] = useContext(userContext)
    const [bio, setBio] = useState({
        name: '',
        email: '',
        password: ''
    })


    const history = useHistory()
    const location = useLocation()

    let { from } = location.state || { from: { pathname: "/" } };





    const handleGoggleSignIn = () => {
        const auth = getAuth();
        const provider = new GoogleAuthProvider();
        signInWithPopup(auth, provider)
            .then((result) => {


                const user = result.user;
                console.log(user)
                setBio({ user: user.displayName })
                setAuth({ user: user.displayName })
                sessionStorage.setItem('user', user.displayName)
                sessionStorage.setItem('userProfilePic', user.photoURL)
                history.replace(from);

            }).catch((error) => {

                console.log(error)
            });

    }

    return (
        <div className="auth">
            <div className="text-center">






                <button onClick={handleGoggleSignIn} className="btn btn-warning">Sign Up With goggle</button>
            </div>

        </div>
    );
};

export default Authentication;