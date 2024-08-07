import React, { useState } from "react";
import { Api } from "../API/Api";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
const Form = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const data = await Api(formData);
      toast.success("Message sent successfully!");
      setFormData({
        firstName: "",
        lastName: "",
        email: "",
        phone: "",
        message: "",
      });
    } catch (error) {
      console.error("Error:", error);
      toast.error("Failed to send message. Please try again.");
    }
  };

  return (
    <div className=" p-8  max-w-4xl mx-auto grid md:grid-cols-3 gap-8">
      <div className="md:col-span-2">
        <form onSubmit={handleSubmit}>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
            <div>
              <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
                First Name
              </label>
              <input
                type="text"
                name="firstName"
                value={formData.firstName}
                onChange={handleChange}
                className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                placeholder="First Name"
                required
              />
            </div>
            <div>
              <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
                Last Name
              </label>
              <input
                type="text"
                name="lastName"
                value={formData.lastName}
                onChange={handleChange}
                className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                placeholder="Last Name"
                required
              />
            </div>
          </div>
          <div className="mb-4">
            <label className="block text-gray-700">Email</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="mt-2 p-2 border border-gray-300 rounded w-full"
              placeholder="Your@company.com"
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700">Phone Number</label>
            <input
              type="tel"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              className="mt-2 p-2 border border-gray-300 rounded w-full"
              placeholder="+91-0000000000"
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700">Message</label>
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              className="mt-2 p-2 border border-gray-300 rounded w-full"
              placeholder="Message"
              rows="4"
              required
            ></textarea>
          </div>
          <div className="mb-4">
            <label className="inline-flex items-center">
              <input
                type="checkbox"
                name="privacy"
                className="form-checkbox"
                required
              />
              <span className="ml-2">
                You agree to our friendly privacy policy
              </span>
            </label>
          </div>
          <div>
            <button
              type="submit"
              className="bg-blue-600 text-white p-2 rounded w-full"
            >
              Send Message
            </button>
          </div>
        </form>
      </div>
      <div className="space-y-4">
        <div className="bg-blue-100 p-4 rounded-lg flex items-center">
          <span className="material-icons text-blue-600">email</span>
          <span className="ml-2">cloudarcops@gmail.com</span>
        </div>
        <div className="text-gray-600 text-sm mt-2">
          Our friendly team is here to help.
        </div>
        <div className="bg-blue-100 p-4 rounded-lg flex items-center">
          <span className="material-icons text-blue-600">location_on</span>
          <span className="ml-4">cloudarcops@.in</span>
        </div>
        <div className="text-gray-600 text-sm mt-2">
          Come say hello at our office HQ.
        </div>
        <div className="bg-blue-100 p-4 rounded-lg flex items-center">
          <span className="material-icons text-blue-600">phone</span>
          <span className="ml-4">+91 9999999999</span>
        </div>
        <div className="text-gray-600 text-sm mt-2">
          Come say hello at our office HQ.
        </div>
      </div>
      <ToastContainer />
    </div>
  );
};

export default Form;
