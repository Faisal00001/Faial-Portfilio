import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

const Projects = () => {
    return (
        <div>
            <div className="container mx-auto">
                <div className="mt-28">
                    <h3 className="text-center text-4xl lg:text-6xl">My Projects</h3>
                </div>

                <Swiper
                    slidesPerView={1}
                    pagination={{
                        clickable: true
                    }}
                    breakpoints={{
                        640: {
                            slidesPerView: 2,
                            spaceBetween: 40,
                        },
                        1024: {
                            slidesPerView: 4,
                            spaceBetween: 40,
                        },
                    }}
                    modules={[Pagination]}
                    className="mySwiper cursor-pointer mb-24 pt-20 pb-24 px-4"
                >
                    <SwiperSlide>
                        <div className='flex justify-center px-2'>
                            <div className='relative group transition ease-in-out delay-150 hover:scale-110  duration-300'>
                                <img
                                    className='h-[500px] filter brightness-75 rounded-md object-cover group-hover:brightness-100'
                                    src="https://i.ibb.co/418cNXX/Adventure-Atlas.png"
                                    alt=""
                                />

                                <div className='absolute bottom-10 left-10 '>
                                    <h3 className='text-2xl font-semibold text-black mb-6'>AdventureAtlas</h3>
                                    <a className='text-black border-solid mt-10 text-sm border-2 border-slate-200 rounded py-2 px-6 hover:bg-skin-navButtonHover hover:border-[#f9004d]  transition duration-300 ease-in-out delay-150 hover:-translate-y-1 font-bold uppercase' href="https://adventureatlas-aa476.web.app/" target='_blank' rel="noreferrer">Live Link</a>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className='flex justify-center px-2'>
                            <div className='relative group transition ease-in-out delay-150 hover:scale-110  duration-300'>
                                <img
                                    className='h-[500px] object-cover filter brightness-75 rounded-md  group-hover:brightness-100'
                                    src="https://i.ibb.co/CMtchvw/Collab-Care.png"
                                    alt=""
                                />

                                <div className='absolute bottom-10 left-10 '>
                                    <h3 className='text-2xl font-semibold text-black mb-6'>CollabCare</h3>
                                    <a href="https://leafy-truffle-b24028.netlify.app/" className='text-black  font-bold border-solid mt-10 text-sm border-2 border-slate-200 rounded py-2 px-6 hover:bg-skin-navButtonHover hover:border-[#f9004d]  transition duration-300 ease-in-out delay-150 hover:-translate-y-1 uppercase' target='_blank' rel="noreferrer">Live Link</a>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className='flex justify-center px-2'>
                            <div className='relative group transition ease-in-out delay-150 hover:scale-110  duration-300'>
                                <img
                                    className='h-[500px] object-cover filter brightness-75 rounded-md  group-hover:brightness-100'
                                    src="https://i.ibb.co/PhGwk04/E-tech.png"
                                    alt=""
                                />

                                <div className='absolute bottom-10 left-10 '>

                                    <h3 className='text-2xl font-semibold text-black mb-6'>E-StoreTech</h3>
                                    <a href="https://brand-management-dda16.web.app/" className='text-black  font-bold border-solid mt-10 text-sm border-2 border-slate-200 rounded py-2 px-6 hover:bg-skin-navButtonHover hover:border-[#f9004d]  transition duration-300 ease-in-out delay-150 hover:-translate-y-1 uppercase' target='_blank' rel="noreferrer">Live Link</a>
                                </div>
                            </div>
                        </div>

                    </SwiperSlide>
                    <SwiperSlide>
                        <div className='flex justify-center px-2'>
                            <div className='relative group transition ease-in-out delay-150 hover:scale-110  duration-300'>
                                <img
                                    className='h-[500px] object-cover filter brightness-75 rounded-md  group-hover:brightness-100'
                                    src="https://i.ibb.co/F5nhwRP/5.png"
                                    alt=""
                                />

                                <div className='absolute bottom-10 left-10 '>

                                    <h3 className='text-2xl font-semibold text-black mb-6'>LearnOra</h3>
                                    <a href="https://github.com/Faisal00001/LearnOra" className='text-black  font-bold border-solid mt-10 text-sm border-2 border-slate-200 rounded py-2 px-6 hover:bg-skin-navButtonHover hover:border-[#f9004d]  transition duration-300 ease-in-out delay-150 hover:-translate-y-1 uppercase' target='_blank' rel="noreferrer">Github Link</a>
                                </div>
                            </div>
                        </div>

                    </SwiperSlide>
                    <SwiperSlide>
                        <div className='flex justify-center px-2'>
                            <div className='relative group transition ease-in-out delay-150 hover:scale-110  duration-300'>
                                <img
                                    className='h-[500px]  rounded-md  group-hover:brightness-100'
                                    src="https://i.ibb.co/tLDDLK8/mathias-reding-F74i6tuwz6-Y-unsplash.jpg"
                                    alt=""
                                />

                                <div className='absolute bottom-10 left-10 '>

                                    <h3 className='text-2xl font-semibold text-black mb-6'>Maize Tassel</h3>
                                    <a href="https://github.com/Faisal00001/Deep-Learning-with-Unmanned-Aerial-Vehicle-Imagery-in-the-Detection-of-Tassels-in-Maize" className='text-black  font-bold border-solid mt-10 text-sm border-2 border-slate-200 rounded py-2 px-6 hover:bg-skin-navButtonHover hover:border-[#f9004d]  transition duration-300 ease-in-out delay-150 hover:-translate-y-1 uppercase' target='_blank' rel="noreferrer">Github Link</a>
                                </div>
                            </div>
                        </div>

                    </SwiperSlide>

                </Swiper>
            </div>

        </div>
    );
};

export default Projects;