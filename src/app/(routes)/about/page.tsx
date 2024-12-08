export default function About(){
    return(
              <section className="bg-white py-16">
                {/* Container */}
                <div className="container mx-auto px-4 sm:px-8 md:px-16">
                  
                  {/* Top Section - Title and Description */}
                  <div className="text-center mb-10">
                    <h2 className="text-3xl sm:text-4xl font-bold text-gray-800">
                      About Us
                    </h2>
                    <p className="text-gray-600 mt-4 text-sm sm:text-base md:text-lg">
                      Welcome to our furniture world where style meets comfort. Our mission is to provide 
                      you with high-quality, stylish, and affordable furniture that transforms your house 
                      into a home. We believe in craftsmanship, durability, and customer satisfaction.
                    </p>
                  </div>
          
                  {/* Image and Content Section */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
                    {/* Left Image */}
                    <div className="relative">
                      <img 
                        src="/wtsp.jpg" 
                        alt="Furniture Image" 
                        className="w-full rounded-lg shadow-lg"
                      />
                      <div className="absolute top-4 left-4 bg-primary-500 text-white text-sm px-3 py-1 rounded-md shadow-md">
                        Since 2010
                      </div>
                    </div>
          
                    {/* Right Content */}
                    <div>
                      <h3 className="text-2xl font-semibold text-gray-800">
                        Our Story
                      </h3>
                      <p className="text-gray-600 mt-4 text-sm sm:text-base md:text-lg">
                        Our journey began in 2010 with a passion for elegant furniture designs that are not 
                        only functional but also timeless. From humble beginnings, we have grown into one 
                        of the most trusted furniture brands, delivering handcrafted, quality furniture to 
                        thousands of homes.
                      </p>
          
                      <h3 className="text-2xl font-semibold text-gray-800 mt-8">
                        Our Mission
                      </h3>
                      <p className="text-gray-600 mt-4 text-sm sm:text-base md:text-lg">
                        To redefine modern living by offering exceptional furniture that blends contemporary 
                        style with traditional craftsmanship. We focus on sustainability, using eco-friendly 
                        materials and ethical production processes.
                      </p>
          
                      <a 
                        href="/shop" 
                        className="inline-block mt-6 bg-primary-500 text-white py-3 px-8 rounded-lg shadow-md hover:bg-primary-600 transition duration-300"
                      >
                        Explore Our Collection
                      </a>
                    </div>
                  </div>
          
                  {/* Why Choose Us Section */}
                  <div className="mt-20">
                    <h3 className="text-center text-3xl font-bold text-gray-800 mb-10">
                      Why Choose Us?
                    </h3>
          
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
                      
                      {/* Feature 1 */}
                      <div className="text-center">
                        <div className="w-16 h-16 bg-primary-500 text-white flex items-center justify-center rounded-full mx-auto">
                          <img src="/ttttttt.jpg" alt="Quality Icon" className="w-8 h-8" />
                        </div>
                        <h4 className="mt-4 text-xl font-bold text-gray-800">
                          Premium Quality
                        </h4>
                        <p className="text-gray-600 mt-2 text-sm">
                          We prioritize quality in every piece of furniture to ensure long-lasting durability.
                        </p>
                      </div>
          
                      {/* Feature 2 */}
                      <div className="text-center">
                        <div className="w-16 h-16 bg-primary-500 text-white flex items-center justify-center rounded-full mx-auto">
                          <img src="/fffffff.jpg" alt="Eco Friendly Icon" className="w-8 h-8" />
                        </div>
                        <h4 className="mt-4 text-xl font-bold text-gray-800">
                          Eco-Friendly
                        </h4>
                        <p className="text-gray-600 mt-2 text-sm">
                          We use eco-friendly materials to ensure sustainable and ethical production.
                        </p>
                      </div>
          
                      {/* Feature 3 */}
                      <div className="text-center">
                        <div className="w-16 h-16 bg-primary-500 text-white flex items-center justify-center rounded-full mx-auto">
                          <img src="/mmmmmmmm.jpg" alt="Fast Shipping Icon" className="w-8 h-8" />
                        </div>
                        <h4 className="mt-4 text-xl font-bold text-gray-800">
                          Fast Shipping
                        </h4>
                        <p className="text-gray-600 mt-2 text-sm">
                          Fast and reliable delivery to ensure your furniture reaches you on time.
                        </p>
                      </div>
          
                      {/* Feature 4 */}
                      <div className="text-center">
                        <div className="w-16 h-16 bg-primary-500 text-white flex items-center justify-center rounded-full mx-auto">
                          <img src="/ltlt.jpg" alt="Support Icon" className="w-8 h-8" />
                        </div>
                        <h4 className="mt-4 text-xl font-bold text-gray-800">
                          24/7 Support
                        </h4>
                        <p className="text-gray-600 mt-2 text-sm">
                          Our support team is available 24/7 to answer your questions and provide assistance.
                        </p>
                      </div>
          
                    </div>
                  </div>
          
                </div>
              </section>
            );
          }