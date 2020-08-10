import React from 'react'
import SvgCloseCopy4 from "../../assets/images/CloseCopy4"
import oval2 from '../../assets/images/oval-2-copy-7@1x.png'


function Feedback(props){

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
                      <span className="name"> info@painted.ch </span>
                    </div>
                    <div className="body">
                      Hi! Have a look around! Let me know if you have any questions.
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
                        My email
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
                        My comments
                      </label>
                      <i className="bar"></i>
                    </div>
                  </div>
                  <div className="button-container">
                    <button name="button" type="submit" className="button send">
                      <span> Send </span>
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

