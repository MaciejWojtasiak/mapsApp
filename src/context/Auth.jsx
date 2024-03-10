import {createContext, useContext, useReducer } from 'react';
import authReducer from '../reducer/authReducer';

export const UserContext = createContext('');

const fakeUser = {
    username:'Maciej',
    email:'maciek@mail.com',
    password:'password',
    image:'https://images.pexels.com/photos/45201/kitty-cat-kitten-pet-45201.jpeg'
}

const INITIAL_STATE = {
    user:JSON.parse(localStorage.getItem('user')) || null,
    isError:false,
    isAuthenticated:JSON.parse(localStorage.getItem('user')) != null ? true : false
}

export const UserContextProvider = ({children}) => {

    const [{user,isError,isAuthenticated},dispatch] = useReducer(authReducer, INITIAL_STATE);

    const logout = () => {
        dispatch({type:'logout'});
        localStorage.setItem('user',null);
    }
    const login = (userCredentials)=>{
        if(fakeUser.email === userCredentials.email && fakeUser.password === userCredentials.password) {
            dispatch({type:'login',payload:fakeUser});    
            localStorage.setItem('user',JSON.stringify(fakeUser));   
        } else {
            dispatch({type:'reject',payload:'Wrong credentials.'})
        }
    }

    return <UserContext.Provider value={{user,isError, logout, login,isAuthenticated}}>
        {children}
    </UserContext.Provider>
}

export const useAuth = () =>{
    const context = useContext(UserContext);
    if(context === undefined) throw new Error('UserContext was used outside UserContextProvider');
    return context;
}