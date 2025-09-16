import React from "react";

const page = () => {
  return (
    <div className="min-h-screen bg-gradient-to-r from-purple-700 via-indigo-700 to-blue-700 flex items-center justify-center px-4">
      <div className=" bg-white p-90 absolute  ">
        <h2 className="text-3xl font-bold mb-6 text-center text-gray-800">
          إنشاء حساب جديد
        </h2>
        <form className="space-y-5">
          <div>
            <label
              htmlFor="username"
              className="block mb-1 text-gray-700 font-semibold"
            >
              اسم المستخدم
            </label>
            <input
              type="text"
              id="username"
              placeholder="أدخل اسم المستخدم"
              required
              className="w-full px-4 py-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500 transition"
            />
          </div>
          <div>
            <label
              htmlFor="email"
              className="block mb-1 text-gray-700 font-semibold"
            >
              البريد الإلكتروني
            </label>
            <input
              type="email"
              id="email"
              placeholder="example@mail.com"
              required
              className="w-full px-4 py-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500 transition"
            />
          </div>
          <div>
            <label
              htmlFor="password"
              className="block mb-1 text-gray-700 font-semibold"
            >
              كلمة المرور
            </label>
            <input
              type="password"
              id="password"
              placeholder="••••••••"
              required
              className="w-full px-4 py-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500 transition"
            />
          </div>
          <div>
            <label
              htmlFor="confirmPassword"
              className="block mb-1 text-gray-700 font-semibold"
            >
              تأكيد كلمة المرور
            </label>
            <input
              type="password"
              id="confirmPassword"
              placeholder="••••••••"
              required
              className="w-full px-4 py-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500 transition"
            />
          </div>
          <button
            type="submit"
            className="w-full bg-indigo-600 hover:bg-indigo-700 text-white font-semibold py-3 rounded-md transition"
          >
            إنشاء الحساب
          </button>
        </form>
        <p className="text-center mt-6 text-gray-600">
          لديك حساب؟{" "}
          <a href="#" className="text-indigo-600 hover:underline font-semibold">
            تسجيل الدخول
          </a>
        </p>
      </div>
    </div>
  );
};

export default page;
