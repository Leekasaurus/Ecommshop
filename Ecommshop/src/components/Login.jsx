import React, {useState} from 'react'


const Login = () => {
    const [user, setUser] = useState({username, password})
    const [error, setError] = useState('');
    const {id} = useParams();
    const navigate = useNavigate();
}

const handleChange = (e) => {
    const{name, value} = e.target;
    setUser({...user, [name]: value});
}

const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    try {
        if (id === 'register') {
            await addNewUser(user);
            navigate('/login');
        }else {
            await loginUser(user);
            navigate('/')
        }
    } catch (error) {
        setError(error.response.data.msg);
    }
}

return(
    <div>
        <h1></h1>

        <form>
            <
            <input></input>
            <input></input>
            <button></button>
        </form>
    </div>
)

export default Login;