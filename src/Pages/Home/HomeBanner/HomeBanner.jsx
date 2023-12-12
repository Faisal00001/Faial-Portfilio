import { TypeAnimation } from 'react-type-animation';
import resume from "../../../assets/CV/CVFaisalOsman.pdf";
import HomeBannerImg from "../../../assets/images/HomeBanner/HomeBanner.jpg";
import "./HomeBanner.css";
const HomeBanner = () => {

    return (
        <div>
            <div className="hero min-h-screen" style={{ backgroundImage: `url(${HomeBannerImg})` }}>
                <div className="hero-overlay bg-opacity-20"></div>
                <div>
                    <div className="flex pt-40 lg:pt-0 flex-col lg:flex-row mt-10 items-center gap-20 justify-center">
                        <div className='px-5'>
                            <div className="flex ">
                                <div className="space-y-3">
                                    <h3 className="text-slate-200 text-xl">WELCOME TO MY WORLD</h3>
                                    <h3 className="text-slate-200 text-4xl lg:text-6xl">Hi, I’m Faisal Osman</h3>
                                    <h3 className="text-slate-200 text-4xl lg:text-6xl"><TypeAnimation
                                        sequence={[
                                            'Web',
                                            500,
                                            'Web Developer', //  Continuing previous Text

                                            500,
                                            'Web Developer',
                                            500,
                                            'Web',
                                            500,
                                            '',
                                            500,
                                        ]}

                                        repeat={Infinity}
                                    /></h3>
                                    <a href={resume} download={'Faisal Resume'} className='btn bg-slate-200 hover:bg-slate-200 font-medium text-sm'>Download CV</a>
                                </div>

                            </div>

                        </div>
                        <div className="blob w-[330px] h-[330px]  md:w-[380px] md:h-[380px] px-8">


                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default HomeBanner;