const SupportSection = () => {
  return (
    <div className="mt-8 text-center">
      {/* Buy Me a Coffee section */}
      <p className="text-sm text-gray-600 mb-2">Like this tool? Support me on</p>
      <a
        href="https://buymeacoffee.com/blazebomb"
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center px-4 py-2 bg-yellow-400 text-black font-medium rounded-full hover:bg-yellow-500 transition-colors mb-4"
      >
        ☕ Buy Me a Coffee
      </a>

      {/* Other Links Section */}
      <p className="text-sm text-gray-600 mb-2">Connect with me on</p>
      <div className="flex justify-center gap-4 mb-4">
        <a
          href="https://github.com/blazebomb"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center px-4 py-2 bg-gray-800 text-white font-medium rounded-full hover:bg-gray-700 transition-colors"
        >
          GitHub
        </a>
        <a
          href="https://www.linkedin.com/in/ashish-kumar-11a03125a/"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center px-4 py-2 bg-blue-600 text-white font-medium rounded-full hover:bg-blue-500 transition-colors"
        >
          LinkedIn
        </a>
      </div>

      {/* Email Section */}
      <p className="text-sm text-gray-600 mb-2">Or email me at</p>
      <a
        href="mailto:ashishkumar850601@gmail.com"
        className="inline-flex items-center px-4 py-2 bg-gray-600 text-white font-medium rounded-full hover:bg-gray-500 transition-colors"
      >
        ✉️ ashishkumar850601@gmail.com
      </a>
    </div>
  );
};

export default SupportSection;
