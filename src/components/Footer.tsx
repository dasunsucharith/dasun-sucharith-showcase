
const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="max-w-6xl mx-auto px-6 text-center">
        <div className="mb-8">
          <h3 className="text-2xl font-bold mb-4">Dasun Sucharith</h3>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Full Stack Developer passionate about creating innovative solutions 
            and exceptional user experiences.
          </p>
        </div>
        
        <div className="border-t border-gray-700 pt-8">
          <p className="text-gray-400">
            © {new Date().getFullYear()} Dasun Sucharith. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
