import React,{ useState } from 'react'
import SvgChat from '../../assets/images/Chat'
import '../../assets/stylesheets/application.scss'
import Feedback from '../Shared/Feedback'

function ChatBtn(){

    const [show, showModal] = useState(false);

    const closeModal = ()=>{
        showModal(false)
    }

    return(
        <div>
            <div className="chat-btn" id="show-modal" onClick={() => showModal(true)}>
                <SvgChat className='chat' />
            </div>
            <Feedback show={show} onClose={closeModal}/>
        </div>
    )
}

export default ChatBtn