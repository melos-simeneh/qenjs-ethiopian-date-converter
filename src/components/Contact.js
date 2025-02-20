import {
  FaGithub,
  FaLinkedin,
  FaSearchengin,
  FaEnvelope,
  FaPhoneAlt,
} from "react-icons/fa";
import { FaUpwork } from "react-icons/fa6";

export default function Contact() {
  return (
    <div className="w-full max-w-4xl mx-auto p-10 bg-white  border border-gray-200 relative">
      <div className="absolute top-0 left-0 right-0 py-2 text-center bg-gray-200">
        <h2 className="font-bold text-slate-600">Contact Us</h2>
      </div>
      <p className="text-lg text-gray-600 mb-8 leading-relaxed pt-5">
        If you have any questions, suggestions, or feedback, feel free to reach
        out to me. I am here to assist you with any concerns or inquiries you
        may have.
      </p>
      <div className="space-y-6">
        <div className="flex items-center">
          <FaEnvelope className="text-gray-600 mr-3" aria-label="Email Icon" />
          <p className="text-lg text-gray-700">
            <strong>Email:</strong>{" "}
            <a
              href="mailto:melos.simeneh@gmail.com"
              className="text-blue-600 hover:text-blue-800 transition-colors duration-200"
              aria-label="Send an email to melos.simeneh@gmail.com"
            >
              melos.simeneh@gmail.com
            </a>
          </p>
        </div>
        <div className="flex items-center">
          <FaPhoneAlt className="text-gray-600 mr-3" aria-label="Phone Icon" />
          <p className="text-lg text-gray-700">
            <strong>Phone:</strong>{" "}
            <span className="text-gray-600">(251) 911-767-515</span>
          </p>
        </div>
        <div className="flex items-center">
          <FaSearchengin
            className="text-gray-600 mr-3"
            aria-label="Search Icon"
          />
          <p className="text-lg text-gray-700">
            <strong>Find me on:</strong>
          </p>
        </div>
        <div className="flex space-x-6 pl-10">
          <a
            href="https://github.com/melos-simeneh"
            className="text-gray-600 hover:text-blue-800 transition-colors duration-200"
            aria-label="Visit my GitHub profile"
          >
            <FaGithub className="inline mr-2" aria-hidden="true" />
            GitHub
          </a>
          <a
            href="https://www.linkedin.com//in/melos"
            className="text-gray-600 hover:text-blue-800 transition-colors duration-200"
            aria-label="Visit my LinkedIn profile"
          >
            <FaLinkedin className="inline mr-2" aria-hidden="true" />
            LinkedIn
          </a>
          <a
            href="https://www.upwork.com/freelancers/~019d7a01da7621dac9"
            className="text-gray-600 hover:text-blue-800 transition-colors duration-200"
            aria-label="Visit my Upwork profile"
          >
            <FaUpwork className="inline mr-2" aria-hidden="true" />
            Upwork
          </a>
        </div>
      </div>
    </div>
  );
}
