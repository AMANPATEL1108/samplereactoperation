import React from "react";

const Contact = () => {
  const [intnum, setIntnum] = React.useState(0);

  function increamen() {
    setIntnum(intnum + 1);
  }

  function dec() {
    setIntnum(intnum - 1);
  }

  function handleSubmit(e) {
    e.preventDefault();

    const form = e.target;
    const abc = {
      name: form.name.value,
      email: form.email.value,
      message: form.message.value,
      number: form.number.value,
    };

    console.log(abc);
  }

  return (
    <div>
      <div className="max-w-4xl mx-auto p-6 mt-10 bg-white shadow-md rounded-lg">
        <div className="flex items-center justify-center gap-4 mt-6">
          <button
            onClick={dec}
            disabled={intnum === 0}
            className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600 disabled:bg-gray-400"
          >
            -
          </button>
          <label className="text-xl font-semibold">{intnum}</label>
          <button
            onClick={increamen}
            className="px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600"
          >
            +
          </button>
        </div>

        <h1 className="text-3xl font-bold mb-6 text-center text-blue-700">
          Contact Us
        </h1>

        <form className="space-y-4" onSubmit={handleSubmit}>
          <div>
            <label className="block text-gray-700">Name</label>
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring focus:border-blue-400"
            />
          </div>
          <div>
            <label className="block text-gray-700">Email</label>
            <input
              type="email"
              name="email"
              placeholder="Your Email"
              className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring focus:border-blue-400"
            />
          </div>
          <div>
            <label className="block text-gray-700">Number</label>
            <input
              type="number"
              name="number"
              placeholder="Your number"
              className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring focus:border-blue-400"
            />
          </div>
          <div>
            <label className="block text-gray-700">Message</label>
            <textarea
              name="message"
              placeholder="Your Message"
              className="w-full border border-gray-300 rounded px-3 py-2 h-32 resize-none focus:outline-none focus:ring focus:border-blue-400"
            ></textarea>
          </div>
          <button
            type="submit"
            className="bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700"
          >
            Send Message
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
