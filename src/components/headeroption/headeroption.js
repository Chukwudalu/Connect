import './headeroption.css'
import {Avatar} from '@material-ui/core'
import { useSelector } from 'react-redux'
import { selectUser } from '../../features/userSlice'

function Headeroption({avatar, title, Icon, onClick }) {
    const user = useSelector(selectUser)
    return (
        <div onClick={onClick} className='headeroption'>
            {Icon && <Icon className='headeroption_icon' />}
            {avatar && (
                <Avatar className='headeroption_icon' >{user?.email[0]}</Avatar>
            )} 
            
            <h3 className='title'>{title}</h3>
        </div>
    )
}

export default Headeroption
