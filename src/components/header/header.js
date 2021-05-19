import './header.css'
import SearchIcon from '@material-ui/icons/Search';
import Headeroption from '../headeroption/headeroption';
import HomeIcon from '@material-ui/icons/Home';
import SupervisorAccountIcon from '@material-ui/icons/SupervisorAccount'
import BusinessCenterIcon from '@material-ui/icons/BusinessCenter'
import ChatIcon from '@material-ui/icons/Chat'
import NotificationsIcon from '@material-ui/icons/Notifications'
import {useDispatch} from 'react-redux'
import { logout } from '../../features/userSlice';
import { auth } from '../../firebase';

function Header() {

    const dispatch = useDispatch()
    const logoutOfApp = () => {
        dispatch(logout());
        auth.signOut()
    }

    return (
        <div className='header'>

            <div className='header_left'>
                <img src='https://www.flaticon.com/svg/static/icons/svg/174/174857.svg' alt='' />
                <div className='header_search'>
                    <SearchIcon/>
                    <input placeholder='Search' type='text'/>
                </div>
            </div>

            <div className='header_right'>
                <Headeroption Icon={HomeIcon} title='Home' />
                <Headeroption Icon={SupervisorAccountIcon} title='My Network'/>
                <Headeroption Icon={BusinessCenterIcon} title='Jobs'/>
                <Headeroption Icon={ChatIcon} title='Messaging'/>
                <Headeroption Icon={NotificationsIcon} title='Notifications'/>
                <Headeroption avatar={true} title='logout' onClick={logoutOfApp}/>
            </div>
        </div>
    )
}

export default Header
