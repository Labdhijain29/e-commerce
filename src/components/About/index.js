import React from 'react';

const About = () => {
    return (
        <div className="max-w-4xl mx-auto px-6 py-12 bg-white rounded-lg shadow-lg mt-20 mb-20">
            <header className="text-center mb-12">
                <h1 className="text-5xl font-bold text-gray-800">About Us</h1>
                <p className="mt-3 text-lg text-gray-600">
                    Welcome to <strong>Quick-Pick</strong>!
                </p>
            </header>
            <section>
                <h2 className="text-3xl font-semibold text-gray-700 mb-6">Our Story</h2>
                <p className="mb-8 text-gray-600 leading-relaxed">
                    What started as a passion project has grown into a vibrant online store offering a wide range of products, 
                    from <strong>fashion</strong> to <strong>electronics</strong> and <strong>jewelery</strong>. 
                    Our team is dedicated to curating the best items, ensuring that each product meets our strict standards for quality and value.
                </p>

                <h2 className="text-3xl font-semibold text-gray-700 mb-6">Our Values</h2>
                <ul className="list-disc list-inside mb-8 text-gray-600">
                    <li className="mb-2"><strong>Quality:</strong> Committed to offering only the best products.</li>
                    <li className="mb-2"><strong>Customer Satisfaction:</strong> Your happiness is our priority.</li>
                    <li className="mb-2"><strong>Sustainability:</strong> We prioritize eco-friendly practices.</li>
                </ul>

                <h2 className="text-3xl font-semibold text-gray-700 mb-6">Why Choose Us?</h2>
                <ul className="list-disc list-inside mb-8 text-gray-600">
                    <li className="mb-2"><strong>Wide Selection:</strong> Something for everyone.</li>
                    <li className="mb-2"><strong>Competitive Pricing:</strong> Great products at great prices.</li>
                    <li className="mb-2"><strong>Fast Shipping:</strong> We get your order to you quickly!</li>
                </ul>

                <h2 className="text-3xl font-semibold text-gray-700 mb-6">Join Our Community</h2>
                <p className="mb-8 text-gray-600 leading-relaxed">
                    We invite you to join our community of satisfied customers. Stay connected with us through our social media channels for the latest updates, promotions, and more.
                </p>

                <h2 className="text-3xl font-semibold text-gray-700 mb-6">Contact Us</h2>
                <p className="text-gray-600 leading-relaxed">
                    If you have any questions or need assistance, feel free to reach out to our customer service team at 
                    <strong> Quick-Pick@gmail.com</strong>.
                </p>
            </section>
        </div>
    );
};

export default About;
