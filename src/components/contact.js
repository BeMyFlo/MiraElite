import React from 'react';

function Contact() {
    return (
        <div className='sidebar-wrapper mobile-height mt-24'>
            <div className="row justify-content-center">
                <div className="col-sm-8 col-xl-6 col-xxl-8 text-center">
                    <h5 className="alt-font font-weight-700 text-extra-dark-gray margin-20px-bottom text-uppercase">CONTACT</h5>
                </div> 
            </div>
            <div class="flex items-center justify-center">
            <div class="mx-auto w-full max-w-[550px]">
                <form action="https://formbold.com/s/FORM_ID" method="POST">
                    <div class="mb-3">
                        <label
                        for="name"
                        class="mb-3 block text-base font-medium text-[#07074D]"
                        >
                        Full Name
                        </label>
                        <input
                        type="text"
                        name="name"
                        id="name"
                        placeholder="Full Name"
                        class="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                        />
                    </div>
                    <div class="mb-3">
                        <label
                        for="email"
                        class="mb-3 block text-base font-medium text-[#07074D]"
                        >
                        Email Address
                        </label>
                        <input
                        type="email"
                        name="email"
                        id="email"
                        placeholder="example@domain.com"
                        class="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                        />
                    </div>
                    <div class="mb-3">
                        <label
                        for="subject"
                        class="mb-3 block text-base font-medium text-[#07074D]"
                        >
                        Subject
                        </label>
                        <input
                        type="text"
                        name="subject"
                        id="subject"
                        placeholder="Enter your subject"
                        class="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                        />
                    </div>
                    <div class="mb-3">
                        <label
                        for="message"
                        class="mb-3 block text-base font-medium text-[#07074D]"
                        >
                        Message
                        </label>
                        <textarea
                        rows="4"
                        name="message"
                        id="message"
                        placeholder="Type your message"
                        class="w-full resize-none rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                        ></textarea>
                    </div>
                    <div className='flex justify-center'>
                        <button
                        class="hover:shadow-form rounded-md bg-[#6A64F1] py-3 px-8 text-base font-semibold text-white outline-none align"
                        >
                        Submit
                        </button>
                    </div>
                    </form>
                </div>
            </div>
        </div>   
    );
}

export default Contact;

