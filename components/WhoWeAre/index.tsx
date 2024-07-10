"use client";

interface WhoWeAreProps {
  title: string;
  description: string;
}

const WhoWeAre: React.FC<WhoWeAreProps> = ({ title, description }) => {
  return (
    <div className="relative w-full">
      {/* Video Container */}
      <div className="relative w-full h-0" style={{ paddingBottom: '56.25%' }}>
        <iframe
          className="absolute inset-0 w-full h-full"
          src="https://www.youtube.com/embed/5uO7a9n77Fs?autoplay=1&mute=1"
          frameBorder="0"
          allow="autoplay; encrypted-media"
          allowFullScreen
        ></iframe>
      </div>

      {/* Text Content Below Video */}
      <div className="relative bg-white flex justify-center mt-4 mb-6">
        <div className="container mx-auto px-4 sm:px-6 md:px-8 lg:px-12">
          <div className="bg-white rounded-xl border border-gray-200 dark:border-gray-700 shadow-lg overflow-hidden">
            <div className="p-6 md:p-8 lg:p-10">
              <h2 className="mb-4 text-2xl font-bold text-purple md:text-4xl">
                {title}
              </h2>
              <p className="mt-4 text-gray-600 dark:text-gray-300">
                {description}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhoWeAre;
