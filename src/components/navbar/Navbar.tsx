import { BiUserCircle } from "react-icons/bi";
import { IoIosSettings } from "react-icons/io";
import { IoIosNotifications } from "react-icons/io";
import { AiFillHeart } from "react-icons/ai";
import { Link } from "react-router-dom";
import { AutoComplete, Input, Layout } from 'antd';
import siteLogo from './site-logo.svg'

const Navbar = () => {

    return (
        <div className='w-full flex'>
            <Layout >
                <div className="h-16 flex justify-around">
                    <div className="flex items-center gap-10">
                        <Link to='/'>
                            <img src={siteLogo} alt="site logo" width={140} height={40} />
                        </Link>
                        <AutoComplete
                            popupMatchSelectWidth={250}
                            style={{ width: 450, borderRadius: '50%' }}
                            size="large"
                            notFoundContent={<p>Searching...</p>}
                        >
                            <Input.Search size="large" placeholder="Search something here..." enterButton />
                        </AutoComplete>
                    </div>
                    <div className="flex items-center gap-4">
                        <Link to='/liked-cars'>
                            <button className="bg-[#EAEAEA] p-2 rounded-full"><AiFillHeart size={26} /></button>
                        </Link>
                        <button className="bg-[#EAEAEA] p-2 rounded-full"><IoIosNotifications size={26} /></button>
                        <button className="bg-[#EAEAEA] p-2 rounded-full"><IoIosSettings size={26} /></button>
                        <button className="bg-[#EAEAEA] p-2 rounded-full"><BiUserCircle size={26} /></button>
                    </div>
                </div>
            </Layout>
        </div>
    );
};

export default Navbar;
