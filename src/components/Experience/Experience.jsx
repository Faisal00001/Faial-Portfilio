

const Experience = () => {
    return (
        <div >
            <h3 className="text-4xl lg:text-6xl  text-center ">Experiences</h3>
            <div className="flex justify-center items-center mt-20 ">
                <div className="flex gap-20 flex-col lg:flex-row px-5">

                    <div className="flex flex-col justify-between mr-4">
                        <h3 className="text-4xl font-semibold mb-10">Educations</h3>
                        <div className="card mb-4 transform scale-100 hover:scale-105 transition duration-300">
                            <h2 className="text-lg font-semibold mb-2">2018-2022</h2>
                            <p>North South University</p>

                        </div>
                        <div className="card mb-4 transform scale-100 hover:scale-105 transition duration-300">
                            <h2 className="text-lg font-semibold mb-2">2016-2018</h2>
                            <p>Shahid Mosiour Rahman Degree College</p>
                        </div>
                        <div className="card transform scale-100 hover:scale-105 transition duration-300">
                            <h2 className="text-lg font-semibold mb-2">2013-2015</h2>
                            <p>Jhikargacha BM High School</p>
                        </div>
                    </div>


                    <div className="border-r border-gray-500 h-100 mx-4"></div>


                    <div className="flex flex-col justify-between ml-4">
                        <h3 className="text-4xl font-semibold mb-10">Professional Experiences</h3>
                        <div className="card mb-4 transform scale-100 hover:scale-105 transition duration-300">
                            <h2 className="text-lg font-semibold mb-2">2022.02-2022-0.8</h2>
                            <p>Engineering Training at BJET , Bangladesh</p>
                        </div>
                        <div className="card mb-4 transform scale-100 hover:scale-105 transition duration-300">
                            <h2 className="text-lg font-semibold mb-2">Current</h2>
                            <p>Front End Engineer at AUB Tech , Bangladesh</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Experience;