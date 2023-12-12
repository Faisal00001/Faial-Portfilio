import ProgressBar from "@ramonak/react-progress-bar";

const Skills = () => {
    return (
        <div className="container mx-auto">
            <div className="mt-20">
                <h3 className="text-4xl lg:text-6xl text-center">Skills</h3>
                <div className=" mt-16 mb-32">
                    <div className="flex flex-col-reverse justify-center lg:flex-row-reverse jus gap-48 items-center px-10 lg:ml-20">
                        <div className="w-full lg:w-[40%]">
                            <div className="blob w-[330px] h-[330px]  md:w-[380px] md:h-[380px] px-8 mx-auto">


                            </div>
                        </div>
                        <div className="w-full lg:w-[60%]  lg:pl-10">
                            <div className="flex justify-between">
                                <div>
                                    <h3 className="text-sm font-semibold ml-2">Javascript</h3>
                                </div>
                                <div>
                                    <p className="text-sm font-semibold mr-2">%85</p>
                                </div>

                            </div>
                            <ProgressBar className="mt-3" animateOnRender={true} borderRadius="5px" height="8px" baseBgColor="black" labelSize="13px" bgColor="orange" isLabelVisible={false} completed={85} />
                            <div className="flex justify-between mt-6">
                                <div>
                                    <h3 className="text-sm font-semibold ml-2">Python </h3>
                                </div>
                                <div>
                                    <p className="text-sm font-semibold mr-2">%50</p>
                                </div>

                            </div>
                            <ProgressBar className="mt-3" animateOnRender={true} borderRadius="5px" height="8px" baseBgColor="black" labelSize="13px" bgColor="orange" isLabelVisible={false} completed={50} />
                            <div className="flex justify-between mt-6">
                                <div>
                                    <h3 className="text-sm font-semibold ml-2">React JS</h3>
                                </div>
                                <div>
                                    <p className="text-sm font-semibold mr-2">%80</p>
                                </div>

                            </div>
                            <ProgressBar className="mt-3" animateOnRender={true} borderRadius="5px" height="8px" baseBgColor="black" labelSize="13px" bgColor="orange" isLabelVisible={false} completed={80} />
                            <div className="flex justify-between mt-6">
                                <div>
                                    <h3 className="text-sm font-semibold ml-2">Node JS</h3>
                                </div>
                                <div>
                                    <p className="text-sm font-semibold mr-2">%80</p>
                                </div>

                            </div>
                            <ProgressBar className="mt-3" animateOnRender={true} borderRadius="5px" height="8px" baseBgColor="black" labelSize="13px" bgColor="orange" isLabelVisible={false} completed={80} />
                            <div className="flex justify-between mt-6">
                                <div>
                                    <h3 className="text-sm font-semibold ml-2">Express JS</h3>
                                </div>
                                <div>
                                    <p className="text-sm font-semibold mr-2">%80</p>
                                </div>

                            </div>
                            <ProgressBar className="mt-3" animateOnRender={true} borderRadius="5px" height="8px" baseBgColor="black" labelSize="13px" bgColor="orange" isLabelVisible={false} completed={80} />
                            <div className="flex justify-between mt-6">
                                <div>
                                    <h3 className="text-sm font-semibold ml-2">MongoDB</h3>
                                </div>
                                <div>
                                    <p className="text-sm font-semibold mr-2">%60</p>
                                </div>

                            </div>
                            <ProgressBar className="mt-3" animateOnRender={true} borderRadius="5px" height="8px" baseBgColor="black" labelSize="13px" bgColor="orange" isLabelVisible={false} completed={60} />
                            <div className="flex justify-between mt-6">
                                <div>
                                    <h3 className="text-sm font-semibold ml-2">Django </h3>
                                </div>
                                <div>
                                    <p className="text-sm font-semibold mr-2">%50</p>
                                </div>

                            </div>
                            <ProgressBar className="mt-3" animateOnRender={true} borderRadius="5px" height="8px" baseBgColor="black" labelSize="13px" bgColor="orange" isLabelVisible={false} completed={50} />
                            <div className="flex justify-between mt-6">
                                <div>
                                    <h3 className="text-sm font-semibold ml-2">Pytorch</h3>
                                </div>
                                <div>
                                    <p className="text-sm font-semibold mr-2">%85</p>
                                </div>

                            </div>
                            <ProgressBar className="mt-3" animateOnRender={true} borderRadius="5px" height="8px" baseBgColor="black" labelSize="13px" bgColor="orange" isLabelVisible={false} completed={85} />
                        </div>


                    </div>
                </div>
            </div>

        </div>
    );
};

export default Skills;