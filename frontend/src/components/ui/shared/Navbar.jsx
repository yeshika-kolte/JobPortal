
import { Link } from 'react-router-dom'
import { User2, LogOut } from 'lucide-react'

import { Popover, PopoverContent, PopoverTrigger } from '../popover'
import { Avatar, AvatarImage } from '../avatar'
import Button from '../button'

const Navbar = () => {
  const user = false;
  return (
    <div className='bg-white'>
      <div className='flex items-center justify-between mx-auto max-w-7xl'>
        <div>
          <h1 className='text-4xl font-bold'>Job<span className='text-[#F83002]'>Hunter</span></h1>
        </div>
        <div className='flex items-center gap-12'>
          <ul className='flex font-medium items-center gap-5'>
            <li><Link to='/' className='hover:text-[#F83002]'>Home</Link></li>
            <li><Link to='/jobs' className='hover:text-[#F83002]'>Jobs</Link></li>
            <li><Link to='/browse' className='hover:text-[#F83002]'>Browse</Link></li>
          </ul>
          {
            !user ? (
              <div className='flex items-center gap-2'>
                <Link to="/login"><Button variant='outline'>Login</Button></Link>
                <Link to="/signup"> <Button className="bg-[#6A38C2] hover:bg-[#5b30a6]">Signup</Button></Link>
               
              </div>

            ) : (
              <Popover >
                <PopoverTrigger asChild>
                  <Avatar className="cursor-pointer">
                    <AvatarImage
                      src="https://github.com/evilrabbit.png"
                      alt="@evilrabbit"
                    />
                  </Avatar>
                </PopoverTrigger>
                <PopoverContent className="w-80">
                  <div className='flex gap-4 space-y-2'>
                    <Avatar>
                      <AvatarImage
                        src="https://github.com/evilrabbit.png"
                        alt="@evilrabbit"
                      />
                    </Avatar>
                    <div>
                      <h4 className='font-medium text-red-600'>JOB PORTAL</h4>
                      <p className=''>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ipsum quaerat magnam nesciunt nam dolor dignissimos porro nostrum praesentium? </p>
                    </div>
                  </div>
                  <div className='flex flex-col  text-gray-600 my-2 '>
                    <div className='flex w-fit items-center gap-2 cursor-pointer'>
                      <User2 />
                      <Button variant="link">View Profile</Button></div>
                    <div className='flex w-fit items-center gap-2 cursor-pointer'>
                      <LogOut />
                      <Button variant="link">Logout</Button></div>
                  </div>
                </PopoverContent>
              </Popover>
            )
          }

        </div>
      </div>

    </div>
  )
}

export default Navbar
