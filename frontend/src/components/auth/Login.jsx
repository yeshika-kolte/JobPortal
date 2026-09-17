import Navbar from '../ui/shared/Navbar'
import { Label } from '../ui/label'
import { Input } from '../ui/input'
import { RadioGroup } from '../ui/radio-group'
import Button from '../ui/button'
import { Link, useNavigate } from 'react-router-dom'
import { useState } from 'react'
import axios from 'axios'
import { USER_API_END_POINT } from '@/utils/constant'
import { toast } from 'sonner'
import { useDispatch, useSelector } from 'react-redux'
import { setLoading } from '@/redux/authSlice'
import { Loader2 } from 'lucide-react'


const Login = () => {
    const [input, setInput] = useState({
        email: "",
        password: "",
        role: "",

    });
    const changeEventHandler = (e) => {
        setInput({ ...input, [e.target.name]: e.target.value });
    }
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const { loading } = useSelector((state) => state.auth);

    const submitHandler = async (e) => {
        e.preventDefault();
        try {
            dispatch(setLoading(true));
            const res = await axios.post(`${USER_API_END_POINT}/login`, input, {
                headers: {
                    "Content-Type": "application/json"
                },
                withCredentials: true,
            });
            if (res.data.success) {
                navigate("/");
                toast.success(res.data.message);
            }
        } catch (error) {
            console.log(error);
            toast.error(error.response?.data?.message || error.message || 'Login failed');
        }
        finally {
            dispatch(setLoading(false));
        }
    }



    return (
        <div>
            <Navbar />
            <div className='flex items-center justify-center mx-auto px-4'>
                <form onSubmit={submitHandler} className='w-full max-w-md border border-gray-300 rounded-lg p-8 my-10 shadow-sm'>
                    <h1 className='font-bold text-xl mb-5 text-red-400'>Log-in</h1>

                    <div className='my-2 gap-2'>
                        <Label htmlFor='email' className='block font-bold text-gray-700 mb-1.5'>Email</Label>
                        <Input
                            id='email'
                            name='email'
                            type='email'
                            value={input.email}
                            onChange={changeEventHandler}
                            placeholder='abc@gmail.com'
                        />
                    </div>
                    <div className='my-2 gap-2'>
                        <Label htmlFor='password' className='block font-bold text-gray-700 mb-1.5'>Password</Label>
                        <Input
                            id='password'
                            name='password'
                            value={input.password}
                            onChange={changeEventHandler}
                            type='password'
                            placeholder='password'
                        />
                    </div>
                    <div className='flex items-center justify-between'>
                        <RadioGroup className='flex items-center gap-4 my-5'>
                            <div className="flex items-center gap-3">
                                <Input
                                    type="radio"
                                    name="role"
                                    value="job-seeker"
                                    checked={input.role === 'job-seeker'}
                                    onChange={changeEventHandler}
                                    className="cursor-pointer"
                                />
                                <Label htmlFor="r1">Job-Seeker</Label>
                            </div>
                            <div className="flex items-center gap-3">
                                <Input
                                    type="radio"
                                    name="role"
                                    value="recruiter"
                                    checked={input.role === 'recruiter'}
                                    onChange={changeEventHandler}
                                    className="cursor-pointer"
                                />
                                <Label htmlFor="r2">Recruiter</Label>
                            </div>
                        </RadioGroup>
                    </div>
                    <Button type="submit" className="w-full mt-4" disabled={loading}>
                        {loading ? <><Loader2 className='mr-2 h-4 w-5 animate-spin' />Please wait</> : 'Login'}
                    </Button>
                    <span className='text-sm'>Don't have an account?<Link to='/signup' className='text-blue-600'>Signup</Link></span>

                </form>
            </div>
        </div>
    )
}

export default Login
