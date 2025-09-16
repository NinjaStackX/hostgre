import React from "react";
import "./login.css";
const page = () => {
  return (
    <div className="basic">
      <div className="login-container">
        <h2>تسجيل الدخول</h2>
        <form>
          <div className="input-group">
            <input
              type="text"
              placeholder="اسم المستخدم أو البريد الإلكتروني"
              required
            />
            <i className="fa fa-user"></i>
          </div>
          <div className="input-group">
            <input type="password" placeholder="كلمة المرور" required />
            <i className="fa fa-lock"></i>
          </div>
          <button className="btn-login" type="submit">
            دخول
          </button>
          <div className="forgot-password">
            <a href="#">نسيت كلمة المرور؟</a>
          </div>
        </form>
      </div>
    </div>
  );
};

export default page;
