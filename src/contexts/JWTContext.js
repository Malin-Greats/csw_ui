// third-party
import { Chance } from 'chance';
import jwtDecode from 'jwt-decode';

// reducer - state management
import { LOGIN, LOGOUT } from 'store/actions';

// project imports
import axios from 'utils/axios';

import { createContext, useState, useEffect } from 'react'
import jwt_decode from 'jwt-decode'
import { useNavigate } from 'react-router-dom'
import { useDispatch } from 'react-redux';

const chance = new Chance();

// constant
const initialState = {
    isLoggedIn: false,
    isInitialized: false,
    user: null
};

const verifyToken = (serviceToken) => {
    if (!serviceToken) {
        return false;
    }
    const decoded = jwtDecode(serviceToken);
    /**
     * Property 'exp' does not exist on type '<T = unknown>(token, options?: JwtDecodeOptions | undefined) => T'.
     */
    return decoded.exp > Date.now() / 1000;
};

const setSession = (serviceToken) => {
    if (serviceToken) {
        localStorage.setItem('serviceToken', serviceToken);
        axios.defaults.headers.common.Memberization = `Bearer ${serviceToken}`;
    } else {
        localStorage.removeItem('serviceToken');
        delete axios.defaults.headers.common.Memberization;
    }
};




// import { SNACKBAR_OPEN, LOGIN, ACCOUNT_INITIALIZE } from 'store/actions';

const JWTContext = createContext()
	
export default JWTContext;


export const JWTProvider = ({children}) => { 


    const [contextTest, setContextTest] = useState('This Works')
	const [isLoading, setIsLoading] = useState(false)
	const [user, setUser] = useState(() => localStorage.getItem('authTokens') ? jwt_decode(localStorage.getItem('authTokens')) : undefined) 
	const [authTokens, setAuthTokens] = useState(() => localStorage.getItem('authTokens') ? JSON.parse(localStorage.getItem('authTokens')) : null)
	const [isLoggedIn, setIsLoggedIn] = useState(() => localStorage.getItem('loggedStatus') ? localStorage.getItem('loggedStatus') : false )
	const [pageLoading, setPageLoading] = useState(true)
	const [currentApplication, setCurrentApplication] = useState('')
	// const [url, setUrl] = useState('https://uniquebackend.malingreatssmartsystems.co.zw')
	// const [url, setUrl] = useState('http://localhost:8000')
	const [url, setUrl] = useState('https://api.csw.org.zw')


	const [interiorColor, setInteriorColor] = useState([])
	const [paperType, setPaperType] = useState([])
	const [bindingOption, setBindingOptions] = useState([])
	const [coverFinish, setCoverFinish] = useState([])
	const [page, setPage] = useState([])
	const [applicationSize, setApplicationSize] = useState([])
	const [inViewMember, setinViewMember] = useState([])
    const [member, setMember] = useState(null);

	const navigate = useNavigate() 
    const dispatch = useDispatch()

    useEffect(() => {
		// setIsLoggedIn(false) 
		console.log('serviceToken', localStorage.getItem('serviceToken'))
		console.log('authTokens', localStorage.getItem('authTokens'))
		console.log('loggedStatus', localStorage.getItem('loggedStatus'))
                const init = async () => {
                    try {
                        const serviceToken = window.localStorage.getItem('serviceToken');
						console.log('serviceToken', serviceToken)
                        
						if (serviceToken && verifyToken(serviceToken)) {
                            setSession(serviceToken);
							console.log('serviceToken', serviceToken)
                            const response = await axios.get('/api/account/me');
                            const { user } = response.data;
                            console.log('user user', user)
							dispatch({
                                type: LOGIN,
                                payload: {
                                    isLoggedIn: true,
                                    user
                                }
                            });
                        } else {
							logout()
                        }
                    } catch (err) {
						console.log('catchLOGOUT', err)

                        console.error(err);
                        dispatch({
                            type: LOGOUT
                        });
                    }
                };
        
                init();
            }, []);
        


    const login = async (email, password) => {
		console.log('(email . password)',email, password)

            const response = await fetch(`${url}/member/token/`, {
                    method: 'POST',
			headers: {
				'Content-Type':'application/json'
			},
			body: JSON.stringify({'username':email,  'password': password})

                });
                console.log(response)
				
                const data = await response.json()
				console.log('(data...)',JSON.stringify(data))
				if (response.status === 200) {
					setAuthTokens(data)
					setUser(jwt_decode(data.access))
					setIsLoggedIn(true) 
					localStorage.setItem('serviceToken',JSON.stringify(data.access))
					localStorage.setItem('authTokens', JSON.stringify(data))
					localStorage.setItem('loggedStatus', true)
					dispatch({
						type: LOGIN,
						payload: {
							isLoggedIn: true,
							user,

						}
					});
				}
            };

const updatePersonalDetails =  async(person) => {
	console.log('person')
	console.log(person)
	var formdata = new FormData();
	formdata.append("first_name", person.first_name);
	formdata.append("last_name", person.last_name);
	formdata.append("nationalID", person.nationalID);
	formdata.append("nationality", person.nationality);
	formdata.append("dob", person.dob);
	formdata.append("gender", person.gender);
	var requestOptions = {
		method: 'PATCH',
		body: formdata,
		redirect: 'follow'
	  };
	  
	  const res = await fetch(`${url}/member/member-profile-update/${person.member_number}`, requestOptions)
	  const data = await res.json()
	  console.log(data)
  
	  if (res.status === 201) {
		  console.log('memebr updated')
	  }


}
const uploadProfileImage =  async(person) => {
	console.log('person')
	console.log(person)
	var formdata = new FormData();
	formdata.append("image_url", person.image_url);
	var requestOptions = {
		method: 'PATCH',
		body: formdata,
		redirect: 'follow'
	  };
	  
	  const res = await fetch(`${url}/member/member-profile-picture-update/${person.member_number}`, requestOptions)
	  const data = await res.json()
	  console.log(data)
  
	  if (res.status === 201) {
		  console.log('memebr updated')
	  }


}
 const register = async(email, first_name,last_name, password1, password2) => {
	var formdata = new FormData();
	console.log('email out', email)
	console.log('first_name out', last_name)


	formdata.append("username", email);
	formdata.append("first_name", first_name);
	formdata.append("last_name", last_name);
	formdata.append("email", email);
	formdata.append("password", password1);
	// formdata.append("password2", password2);
	
	var requestOptions = {
	  method: 'POST',
	  body: formdata,
	  redirect: 'follow'
	};
	
	const res = await fetch(`${url}/users/register/`, requestOptions)
	const data = await res.json()
	console.log(data)

	if (res.status === 201) {
		login(email, password1)
	}
 }


 const logout = () => {

	console.log('login out')
	console.log('authTokens', localStorage.getItem('authTokens'))
	console.log('loggedStatus', localStorage.getItem('loggedStatus'))
	setAuthTokens('')
	setUser('')
	setIsLoggedIn(false)
	localStorage.setItem('authTokens', '')
	localStorage.setItem('loggedStatus', false)
    setSession(null);
    dispatch({ type: LOGOUT,
				payload: {
		isLoggedIn: false
	} });
	console.log('authTokens', localStorage.getItem('authTokens'))
	console.log('loggedStatus', localStorage.getItem('loggedStatus'))
  };


	

	let contextData = {
		url:url,
		user:user,
		member:member,
		inViewMember:inViewMember,
		authTokens:authTokens,
		isLoggedIn:isLoggedIn,
        login:login,
		logout:logout,
		register: register,
		updatePersonalDetails:updatePersonalDetails,
		uploadProfileImage:uploadProfileImage,
		isLoading:isLoading,
        contextTest:contextTest,
		currentApplication:currentApplication,
		setCurrentApplication:setCurrentApplication,
		interiorColor:interiorColor, 
		bindingOption:bindingOption, 
		applicationSize:applicationSize, 
		coverFinish:coverFinish, 
		page:page, 
		paperType:paperType
	}

	return(
		<JWTContext.Provider value={contextData}>
			{children}
		</JWTContext.Provider>
	)
}