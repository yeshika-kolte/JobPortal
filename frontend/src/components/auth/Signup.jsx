
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

const Signup = () => {
    const [input, setInput] = useState({
        fullname: "",
        email: "",
        phoneNumber: "",
        password: "",
        role: "",
        file: ""
    });
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const { loading } = useSelector((state) => state.auth);

    const changeEventHandler = (e) => {
        setInput({ ...input, [e.target.name]: e.target.value });
    }
    const changeFileHandler = (e) => {
        setInput({ ...input, file: e.target.files?.[0] });
    }

    const submitHandler = async (e) => {
        e.preventDefault();
        try {
            dispatch(setLoading(true));

            // 1. Create a FormData instance
            const formData = new FormData();
            formData.append("fullname", input.fullname);
            formData.append("email", input.email);
            formData.append("phoneNumber", input.phoneNumber);
            formData.append("password", input.password);
            formData.append("role", input.role);


            if (input.file) {
                formData.append("file", input.file);
            }

            const res = await axios.post(`${USER_API_END_POINT}/register`, formData, {
            });

            if (res.data.success) {
                toast.success(res.data.message || "Signup successful!");
                setTimeout(() => {
                    navigate("/login");
                }, 1000);
            }
        } catch (error) {
            console.log(error);
            toast.error(error.response?.data?.message || error.message || 'Signup failed');
        } finally {
            dispatch(setLoading(false));
        }
    }
    return (
        <div>
            <Navbar />
            <div className='flex items-center justify-center mx-auto px-4'>
                <form onSubmit={submitHandler} className='w-full max-w-md border border-gray-300 rounded-lg p-8 my-10 shadow-sm'>
                    <h1 className='font-bold text-xl mb-5 text-red-400'>Sign-Up</h1>
                    <div className='my-2 gap-2'>
                        <Label htmlFor='fullName' className='block font-bold text-gray-700 mb-1.5' >Full Name</Label>
                        <Input
                            id='fullName'
                            name='fullname'
                            type='text'
                            value={input.fullname}
                            onChange={changeEventHandler}
                            placeholder='name'
                        />
                    </div>
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
                        <Label htmlFor='phoneNumber' className='block font-bold text-gray-700 mb-1.5'>Phone Number</Label>
                        <Input
                            id='phoneNumber'
                            name='phoneNumber'
                            value={input.phoneNumber}
                            onChange={changeEventHandler}
                            type='text'
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
                                    id="r1"
                                    type="radio"
                                    name="role"
                                    value="student"
                                    checked={input.role === 'student'}
                                    onChange={changeEventHandler}
                                    className="cursor-pointer"
                                />
                                <Label htmlFor="r1">Job-Seeker</Label>
                            </div>
                            <div className="flex items-center gap-3">
                                <Input
                                    id="r2"
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
                    <div>
                        <Label htmlFor='profile' className='block font-semibold text-gray-700 mb-1.5'>Profile Picture</Label>
                        <Input
                            id='profile'
                            accept='image/*'
                            type='file'
                            onChange={changeFileHandler}
                            className='cursor-pointer file:text-sm file:font-medium file:bg-gray-50 file:text-gray-700 hover:file:bg-gray-100'
                        />
                    </div>

                    <Button type="submit" className="w-full mt-4" disabled={loading}>
                        {loading ? <><Loader2 className='mr-2 h-4 w-5 animate-spin' />Please wait</> : 'Sign Up'}
                    </Button>
                    <span className='text-sm'>Already have an account?<Link to='/login' className='text-blue-600'>login</Link></span>

                </form>
            </div>
        </div>
    )
}

export default Signup
