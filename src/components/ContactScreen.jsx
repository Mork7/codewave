export default function ContactScreen() {
  const inputClasses = "p-2 border border-gray-300 rounded-md";
  const labelClasses = "mb-2 font-medium text-gray-700";

  return (
    <div className="flex flex-col items-center p-4">
      <div className="max-w-md w-full bg-slate-200 p-6 rounded-lg shadow-lg h-">
        <h1 className="font-bold text-3xl text-center text-gray-800 mb-6">
          Contact Us
        </h1>
        <h3 className="text-gray-600 mb-2">Phone and Text: 519-903-4721</h3>
        <h3 className="text-gray-600 mb-2">
          Email: finertym@codewavesolutions.ca
        </h3>
        <h3 className="text-gray-600 mb-6">Address: Coming Soon...</h3>

        <form action="" className="flex flex-col">
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
