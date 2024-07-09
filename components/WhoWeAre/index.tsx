"use client"


interface WhoWeAreProps{
    title: string;
    description: string;
}

const WhoWeAre: React.FC<WhoWeAreProps> = ({ title, description }) => {
    return (
        <div className="relative w-full h-[38rem]">
            {/* Background Video */}
            <div className="absolute inset-0">
                <video
                    className="w-full h-full object-cover"
                    autoPlay
                    loop
                    muted
                >
                    <source src="/videos/Grace-for-Impact-About-Us-Video.mp4" type="video/mp4" />
                </video>
            </div>

            {/* Overlay with Text Content */}
            <div className="absolute inset-0 bg-gray-900/40 flex items-center">
                <div className="container mx-auto px-4 sm:px-6 md:px-8 lg:px-12 relative z-10 mt-96">
                    <div className="bg-white rounded-xl border border-gray-200 dark:border-gray-700 shadow-lg overflow-hidden">
                        <div className="p-6 md:p-8 lg:p-10">
                            <h2 className="mb-4 text-2xl font-bold text-purple md:text-4xl">
                            OUR LEADERSHIP
                            </h2>
                            <p className="mt-4 text-gray-600 dark:text-gray-300">
                            Grace for Impact is a non-profit, 501c3, international development organization that focuses on access to high quality healthcare and education in some of the poorest countries of the world
                            where the need is greatest.
                                Grace for Impact’s work spans three continents and we have served over 220,000 beneficiaries to date. The organization has grown steadily over the years with the support of thousands of volunteers, donors, and partners. We are proud and honored to work with our extensive network of partner organizations and institutions worldwide.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default WhoWeAre;
