import React from "react";

function NewsLetterBox() {
  function onsubmitHandler(e) {
    e.preventDefault();
  }
  return (
    <div className="text-center">
      <h1 className="text-2xl font-medium text-gray-800">
        Subscribe now & get 20% off
      </h1>
      <p className="text-gray-500 mt-3">
        Lorem Ipsum is simply dummy text of the printing and typesetting
        industry.
      </p>

      <form
        onSubmit={onsubmitHandler}
        className="w-full sm:w-1/2 flex items-center gap-3 mx-auto my-6 border  "
        action="/"
      >
        <input
          className="w-full sm:flex-1 outline-none"
          type="email"
          placeholder="   Enter Your Email."
          required
        />
        <button
          className="bg-black text-white text-xs px-10 py-4"
          type="submit"
        >
          Subscribe
        </button>
      </form>
    </div>
  );
}

export default NewsLetterBox;
