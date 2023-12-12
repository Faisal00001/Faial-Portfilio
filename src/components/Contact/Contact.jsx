

const Contact = () => {
    return (
        <div>
            <section className="mt-36">
                <div className="flex flex-col-reverse lg:flex-row">
                    <div className="lg:flex-1 px-8 md:pl-14 mt-10">
                        <h3 className=" text-4xl md:text-6xl mb-10">Contact</h3>

                        <form className="lg:w-[90%] md:pr-14 lg:pl-0">
                            <div className="mb-5">
                                <input type="text" className="border-2 border-gray-200 px-4 py-3 w-full focus:border-[#f9004d] focus:outline-none rounded-md text-sm" placeholder="Your Name" />
                                <input type="text" className="border-2 border-gray-200 mt-5 px-4 py-3 w-full focus:border-[#f9004d] focus:outline-none rounded-md text-sm" placeholder="Phone Number" />
                                <input type="text" className="border-2 border-gray-200 mt-5 px-4 py-3 w-full focus:border-[#f9004d] focus:outline-none rounded-md text-sm" placeholder="Subject" />
                                <textarea name="" id="" rows="4" className="border-2 border-gray-200 mt-5 px-4 py-3 w-full focus:border-[#f9004d] focus:outline-none rounded-md text-sm" placeholder="Your Message"></textarea>
                            </div>
                            <button className="transition  ease-in-out delay-150 hover:-translate-y-1 font-light duration-300 text-white hover:text-skin-footerButtonText  border-solid border-2 border-[#f9004d] rounded-lg py-2 md:py-3 md:px-8 px-4 lg:px-12 text-base  lg:text-lg  hover:border-[#f9004d] bg-[#f9004d]">
                                Submit Now
                            </button>
                        </form>
                    </div>
                    <div className="lg:flex-1 px-8 md:px-14  lg:px-0 lg:pr-5">
                        <img className="max-h-[643px] w-full rounded-lg" src="https://scontent.fdac31-1.fna.fbcdn.net/v/t39.30808-6/300953612_3223749984542907_2452165377878074593_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=efb6e6&_nc_eui2=AeF6clqQXwUxtWp5g0UMTcLN9irc0y_l_JT2KtzTL-X8lC-iuFaKlC6Br1O8T_5cWzd6UR7SWffAm-uVgZfKaF0l&_nc_ohc=Sfbc34LVC3EAX9J7CXo&_nc_ht=scontent.fdac31-1.fna&oh=00_AfCLt1mR0tl4TZxWgSw5ZuI0BU6GsvuBsYlD6jn_ZcW19Q&oe=657DB153" alt="" />
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Contact;