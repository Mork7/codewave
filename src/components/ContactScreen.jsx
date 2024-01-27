export default function ContactScreen() {
  const inputClasses = "p-2 border border-gray-300 rounded-md";
  const labelClasses = "mb-2 font-medium text-gray-700";

  return (
    <div className="flex flex-col items-center p-6">
      <h1 className="w-full text-center text-primary text-4xl mb-3 font-bold">
        Contact Us
      </h1>
      <section className="text-center">
        <p>
          If you feel our team would be a good fit for you, or if there are any
          questions you have that you&apos;d like to address, please leave us a
          message and a member of our team will get back to you as soon as
          possible!
        </p>
        <h2 className="font-extrabold">
          THIS BUSINESS IS NOT TAKING CLIENTS, THIS IS A PERSONAL PROJECT THAT
          WILL ONE DAY BE AVAILBLE FOR PUBLIC SERVICE. THANK YOU FOR YOUR
          UNDERSTANDING.
        </h2>
      </section>
      <div className="max-w-md w-full bg-slate-200 mt-4 p-6 rounded-lg shadow-lg h-">
        <h2 className="font-bold text-2xl text-center text-gray-800 mb-6">
          Contact Form
        </h2>
        <address>
          <p className="text-gray-600 mb-2">Phone and Text: 519-867-4721</p>
          <p className="text-gray-600 mb-4">Email: info@infinerty.ca</p>
        </address>
        <form className="flex flex-col">
          <div className="mb-4 flex flex-col">
            <label htmlFor="first-name" className={labelClasses}>
              First Name:
            </label>
            <input
              type="text"
              name="first-name"
              id="first-name"
              className={inputClasses}
            />
          </div>
          <div className="mb-4 flex flex-col">
            <label htmlFor="last-name" className={labelClasses}>
              Last Name:
            </label>
            <input
              type="text"
              name="last-name"
              id="last-name"
              className={inputClasses}
            />
          </div>
          <div className="mb-4 flex flex-col">
            <label htmlFor="email" className={labelClasses}>
              Email:
            </label>
            <input
              type="text"
              name="email"
              id="email"
              className={inputClasses}
            />
          </div>
          <div className="mb-4 flex flex-col">
            <label htmlFor="message" className={labelClasses}>
              Message:
            </label>
            <textarea
              name="message"
              id="message"
              cols="30"
              rows="5"
              className={inputClasses}
            ></textarea>
          </div>
          <button
            type="submit"
            className="mt-4 bg-blue-500 text-white font-bold py-2 px-4 rounded hover:bg-blue-600"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}
