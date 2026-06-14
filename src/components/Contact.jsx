import React from 'react'

export default function Contact() {
  return (
    <section id="contact" className="bg-cream py-20">
      <div className="max-w-6xl mx-auto px-6">
        {/* Section header */}
        <div className="mb-12">
          <p className="text-terracotta font-semibold tracking-widest uppercase text-sm mb-2">Get in touch</p>
          <h2 className="text-4xl lg:text-5xl font-bold text-brown-warm">Feel Free to<br />Share Your Thoughts</h2>
          <div className="w-16 h-1 bg-terracotta rounded-full mt-3" />
        </div>

        <div className="flex flex-col lg:flex-row gap-16">
          {/* Contact info */}
          <div className="flex-1 space-y-6">
            <p className="text-brown-light text-lg leading-relaxed">
              Always open to feedback, suggestions, or just a friendly chat about chemistry.
            </p>

            <div className="space-y-5 mt-8">
              <div className="flex items-center gap-4">
                <div className="w-11 h-11 bg-warm-100 rounded-full flex items-center justify-center text-terracotta flex-shrink-0">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-5 h-5">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 9v.906a2.25 2.25 0 0 1-1.183 1.981l-6.478 3.488M2.25 9v.906a2.25 2.25 0 0 0 1.183 1.981l6.478 3.488m8.839 2.51-4.66-2.51m0 0-1.023-.55a2.25 2.25 0 0 0-2.134 0l-1.022.55m0 0-4.661 2.51m16.5 1.615a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V8.844a2.25 2.25 0 0 1 1.183-1.981l7.5-4.039a2.25 2.25 0 0 1 2.134 0l7.5 4.039a2.25 2.25 0 0 1 1.183 1.98V19.5Z" />
                  </svg>
                </div>
                <div>
                  <div className="text-xs text-brown-light uppercase tracking-wider mb-0.5">Email</div>
                  <div className="text-brown-warm font-medium">koiraladr1@gmail.com</div>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="w-11 h-11 bg-warm-100 rounded-full flex items-center justify-center text-terracotta flex-shrink-0">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-5 h-5">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z" />
                  </svg>
                </div>
                <div>
                  <div className="text-xs text-brown-light uppercase tracking-wider mb-0.5">Location</div>
                  <div className="text-brown-warm font-medium">Tarakeshwor-2, Kaversthali, Nepal</div>
                </div>
              </div>
            </div>
          </div>

          {/* Form */}
          <div className="flex-1">
            <div className="bg-white rounded-3xl shadow-md p-8 border border-warm-100">
              <p className="text-brown-warm font-semibold mb-6">Send a message</p>
              <form className="space-y-4">
                <input
                  className="input-warm"
                  id="name"
                  type="text"
                  placeholder="Your Name"
                />
                <input
                  className="input-warm"
                  id="subject"
                  type="text"
                  placeholder="Subject"
                />
                <input
                  className="input-warm"
                  id="email"
                  type="email"
                  placeholder="Email Address"
                />
                <textarea
                  className="input-warm resize-none"
                  id="message"
                  rows={4}
                  placeholder="Your message..."
                />
                <button
                  type="button"
                  className="w-full bg-terracotta text-white font-semibold py-3 rounded-xl hover:bg-terracotta-dark transition-colors shadow-sm"
                >
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
