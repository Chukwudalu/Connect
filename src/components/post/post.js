import { Avatar } from '@material-ui/core'
import {forwardRef} from 'react'
import InputOption from '../inputoption/inputOption'
import ThumbUpAltOutlinedIcon from '@material-ui/icons/ThumbDownAltOutlined'
import ChatOutlinedIcon from '@material-ui/icons/ChatOutlined'
import ShareOutlinedIcon from '@material-ui/icons/ShareOutlined'
import SendOutlinedIcon from '@material-ui/icons/SendOutlined'

import './post.css'

const Post = forwardRef(({ name, description, message, photoUrl }, ref) => {
    return (
        <div ref={ref} className='post'>
            <div className='post_header'>
                <Avatar src={photoUrl}>{name&&name[0]}</Avatar>
                <div className='post_info'>
                    <h2>{name}</h2>
                    <p>{description}</p>
                </div>
            </div>
            <div className='post_body'>
                <p>{message}</p>
            </div>

            <div className='post_buttons'>
                <InputOption Icon={ThumbUpAltOutlinedIcon} title='like' color='gray'/>
                <InputOption Icon={ChatOutlinedIcon} title='Chat' color='gray'/>
                <InputOption Icon={ShareOutlinedIcon} title='Share' color='gray'/>
                <InputOption Icon={SendOutlinedIcon} title='Send' color='gray'/>
            </div>
        </div>
    )
})

export default Post
