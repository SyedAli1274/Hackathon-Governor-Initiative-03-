const Footer = () => {
  return (
    <footer className="bg-[#F8F9FA] py-8 border-t border-gray-200">
      <div className="max-w-[1321px] mx-auto px-4 lg:px-8">
        {/* Footer Top Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand Info */}
          <div>
            <div className="flex items-center space-x-2 mb-4">
              {/* Placeholder for logo */}
              <div className="w-10 h-10 bg-gray-300 rounded-lg"></div>
              <span className="text-lg font-semibold">Comforty</span>
            </div>
            <p className="text-sm text-gray-600">
              Vivamus tristique odio sit amet velit semper, eu posuere turpis
              interdum. Cras egestas purus.
            </p>
            {/* Social Icons */}
            <div className="flex space-x-4 mt-4">
              <div className="w-8 h-8 bg-red-300 rounded-full"></div>{" "}
              {/* Placeholder for social icon */}
              <div className="w-8 h-8 bg-blue-300 rounded-full"></div>{" "}
              {/* Placeholder for social icon */}
              <div className="w-8 h-8 bg-green-300 rounded-full"></div>{" "}
              {/* Placeholder for social icon */}
              <div className="w-8 h-8 bg-yellow-300 rounded-full"></div>{" "}
              {/* Placeholder for social icon */}
            </div>
          </div>

          {/* Categories */}
          <div>
            <h3 className="text-sm font-bold mb-4">CATEGORY</h3>
            <ul className="space-y-2 text-sm text-gray-600">
              <li>
                <a href="#" className="hover:underline">
                  Sofa
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Armchair
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Wing Chair
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline text-teal-500">
                  Desk Chair
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Wooden Chair
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Park Bench
                </a>
              </li>
            </ul>
          </div>

          {/* Support */}
          <div>
            <h3 className="text-sm font-bold mb-4">SUPPORT</h3>
            <ul className="space-y-2 text-sm text-gray-600">
              <li>
                <a href="#" className="hover:underline">
                  Help & Support
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Terms & Conditions
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Help
                </a>
              </li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h3 className="text-sm font-bold mb-4">NEWSLETTER</h3>
            <form className="space-y-4">
              <div className="flex items-center">
                <input
                  type="email"
                  placeholder="Your email"
                  className="w-full border border-gray-300 rounded-md px-4 py-2 text-sm focus:outline-none focus:ring-1 focus:ring-teal-500"
                />
                <button
                  type="submit"
                  className="ml-2 bg-teal-500 text-white rounded-md px-4 py-2 text-sm hover:bg-teal-600"
                >
                  Subscribe
                </button>
              </div>
              <p className="text-sm text-gray-600">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
                tincidunt erat enim.
              </p>
            </form>
          </div>
        </div>

        {/* Footer Bottom Section */}
        <div className="mt-8 flex flex-col lg:flex-row justify-between items-center text-sm text-gray-500">
          <p>© 2021 - Blogy - Designed & Developed by Zakirsoft</p>
          <div className="mt-4 lg:mt-0 flex space-x-4">
            {/* Placeholder for payment icons */}
            <div className="w-12 h-8 bg-purple-300 rounded-md"></div>{" "}
            {/* Placeholder for PayPal */}
            <div className="w-12 h-8 bg-pink-300 rounded-md"></div>{" "}
            {/* Placeholder for American Express */}
            <div className="w-12 h-8 bg-orange-300 rounded-md"></div>{" "}
            {/* Placeholder for Visa */}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;