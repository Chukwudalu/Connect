import { Avatar } from '@material-ui/core'
import {useSelector} from 'react-redux'
import { selectUser } from '../../features/userSlice'
import './sidebar.css'

function SideBar() {

    const user = useSelector(selectUser)
    const recentItem = (topic) => (
        <div className='sidebar_recentItem'>
            <span className='sidebar_hash'>#</span>
            <p>{topic}</p>
        </div>
    )
    
    return (
        <div className='sidebar'>
            <div className='sidebar_top'>
                <img src='https://images.pexels.com/photos/956981/milky-way-starry-sky-night-sky-star-956981.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500' alt='' />
                <Avatar src={user.photoUrl} classsName='sidebar_avatar'>{user.email[0]}</Avatar>
                <h2>{user.displayName}</h2>
                <h4>{user.email}</h4>

            </div>

            <div className='sidebar_stats'>
                <div className='sidebar_stat'>
                    <p>Who viewed you</p>
                    <p className='sidebar_statNumber'>2,543</p>
                </div>
                <div className='sidebar_stat'>
                    <p>Views on post</p>
                    <p className='sidebar_statNumber'>2,448</p>
                </div>
            </div>
            <div className='sidebar_bottom'>
                <p>Recent</p>
                {recentItem('reactjs')}
                {recentItem('javascript')}
                {recentItem('programming')}
                {recentItem('typescript')}
                {recentItem('design')}
            </div>
        </div>
    )
}

export default SideBar
