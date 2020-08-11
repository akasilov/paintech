import React from 'react'
import SvgCloseCopy4 from "../../assets/images/CloseCopy4"
import oval2 from '../../assets/images/oval-2-copy-7@1x.png'


function Feedback(props){
  const { t } = props;
    if (props.show === true)
    {
        return (
            <div id="feedback_modal" className="mail-modal" >
              <div className="mail-box">
                <form
                  id="feedback"
                  className="mail-form"
                  action="/feedbacks?locale=en"
                  acceptCharset="UTF-8"
                  data-remote="true"
                  method="post"
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
                        name="feedback[email]"
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
                        name="feedback[comment]"
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
              </div>
              <div id="hide-modal" className="btn-cancel" onClick={props.onClose}>
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

