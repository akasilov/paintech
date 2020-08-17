import React,{useState} from "react";
import Header from '../Shared/Header'
import Footer from '../Shared/Footer'
import ChatBtn from '../Home/ChatBtn'
import "../../assets/stylesheets/application.scss"







function SPrices(props) {
    
    const { t } = props;

    return (
      <div className="body">
        <ChatBtn t={t} />
        <Header t={t} route="prices" />
        <div className="container-fluid">
          <div className="col-9 offset-2">
            <div className="msg-success">
              <p>
              {t("order.success.body")}
                
              </p>
            </div>
          </div>
        </div>
        <Footer t={t} />
      </div>
    );
}


export default SPrices