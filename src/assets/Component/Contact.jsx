const Contact = () => {
  return (
    <div>
      <div className=" min-h-screen bg-base-200">
        <div className="hero-content flex-col lg:flex-row-reverse">
            <div>
          <h1 className="text-4xl mb-4  text-center font-bold ">
            Get In Touch
          </h1>
          <p className="text-center">
            It is a long established fact that a reader will be distracted by
            the readable content of a page randomised words which dont look
            even slightly when looking at its layout.
          </p>
          </div>
          <div className="card flex-shrink-0 w-6/12 shadow-2xl bg-base-100">
            <form className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Name</span>
                </label>
                <input
                  type="text"
                  placeholder="Name"
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Subject</span>
                </label>
                <input
                  type="text"
                  placeholder="subject"
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="email"
                  placeholder="email"
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Message</span>
                </label>
                <textarea
                  type="text"
                  placeholder="Write your message"
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control mt-6">
                <button className="btn bg-red-600 text-white">Submit</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
