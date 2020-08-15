import React,{useState} from 'react'
import SvgCloseCopy4 from "../../assets/images/CloseCopy4"
import oval2 from '../../assets/images/oval-2-copy-7@1x.png'
import Axios from 'axios'

export const Success = (props) => {
    const { t } = props;

    return (
      <div className="mail-form">
        <div className="msg-success">
          <div className="title">
            <img src={oval2} alt="" />
            <span className="name"> info@painted.ch </span>
          </div>
          <div className="body">Thank you for your feedback!</div>
        </div>
      </div>
    );
}


export const FeedbackForm = (props) => {
    const { t } = props;
    const [formData, setFormData] = useState({})

    const updateInput = e => {
        setFormData({
          ...formData,
          [e.target.name]: e.target.value,
        })
    }

    const handleSubmit = event => {
        event.preventDefault()
        props.send(formData)
        setFormData({
          email: '',
          comment: '',
        })
    }

    return (
        
        <form
          id="feedback"
          className="mail-form"
          action="/feedbacks?locale=en"
          acceptCharset="UTF-8"
          data-remote="true"
          method="post"
          onSubmit={handleSubmit}
        >
          <div className="msg">
            <div className="title">
              <img
                srcSet=", "
                src={oval2}
                alt="Oval 2 copy 7@1x"
              />
              <span className="name"> {t('feedbacks.msg.title.name')} </span>
            </div>
            <div className="body">
            {t('feedbacks.msg.body')}
            </div>
          </div>
          <div className="inputs">
            <div className="form-group ">
              <input
                id="feedback_email"
                required="required"
                type="text"
                name="email"
                onChange={updateInput}
                value={formData.email || ''}
              />
              <label className="control-label" htmlFor="feedback_email">
              {t('feedbacks.form.e_mail_label')}
              </label>
              <i className="bar"></i>
            </div>
            <div className="form-group ">
              <textarea
                id="feedback_comment"
                required="required"
                name="comment"
                onChange={updateInput}
                value={formData.comment || ''}
              ></textarea>
              <label className="control-label" htmlFor="feedback_comment">
              {t('feedbacks.form.comments_label')}
              </label>
              <i className="bar"></i>
            </div>
          </div>
          <div className="button-container">
            <button name="button" type="submit" className="button send">
              <span> {t('feedbacks.form.send')}</span>
            </button>{" "}
          </div>
        </form>
    )
}

function Feedback(props){
    const { t } = props;
    const [sent,isSent] = useState(false)


    const sendEmail = (formData)=>{
        console.log(formData)
         isSent(true)
        Axios.post('https://us-central1-paintedch-c26a1.cloudfunctions.net/submit',formData)
        .then(res => {
        })
        .catch(error => {
        console.log(error)
        })
    }

    const close = ()=>{
        props.onClose()
        isSent(false)
    }



    let content=<FeedbackForm t={t} send={sendEmail}/>
    if(sent)
        content =<Success t={t}/>

    if (props.show === true)
    {
        return (
            <div id="feedback_modal" className="mail-modal" >
                <div className="mail-box">
                    {content}
                </div>
                
                <div id="hide-modal" className="btn-cancel" onClick={close}>
                <SvgCloseCopy4 className="cross" />
                </div>
            </div>
        );
    }
    else{
        return ""
    }
}


export default Feedback

