
import React from 'react';
import { NavLink } from 'react-router-dom';

const HeroSection: React.FC = () => (
  <div className="relative bg-gray-900 text-white">
    <div className="absolute inset-0">
      <img className="w-full h-full object-cover" src="https://picsum.photos/1600/900" alt="Inspiring background" />
      <div className="absolute inset-0 bg-gray-900 opacity-75"></div>
    </div>
    <div className="relative max-w-7xl mx-auto py-24 px-4 sm:py-32 sm:px-6 lg:px-8 text-center">
      <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl lg:text-6xl">Unlock Your Potential with WM2</h1>
      <p className="mt-6 max-w-2xl mx-auto text-xl text-gray-300">Join a community of entrepreneurs and build your own path to financial freedom. Your journey starts now.</p>
      <div className="mt-8 flex justify-center">
        <div className="inline-flex rounded-md shadow">
          <NavLink to="/faq" className="inline-flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-gray-900 bg-white hover:bg-gray-100">
            Join Now
          </NavLink>
        </div>
        <div className="ml-3 inline-flex">
          <NavLink to="/about" className="inline-flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-gray-700 hover:bg-gray-600">
            Learn More
          </NavLink>
        </div>
      </div>
    </div>
  </div>
);

const FeatureCard: React.FC<{ title: string; description: string }> = ({ title, description }) => (
    <div className="bg-white p-8 rounded-lg shadow-lg text-center">
        <div className="mx-auto flex items-center justify-center h-16 w-16 rounded-full bg-gray-800 text-white mb-6">
             {/* Placeholder for an icon */}
             <svg className="h-8 w-8" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
               <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
             </svg>
        </div>
        <h3 className="text-xl font-bold text-gray-900">{title}</h3>
        <p className="mt-2 text-base text-gray-600">{description}</p>
    </div>
);

const WhyJoinSection: React.FC = () => (
  <section className="bg-gray-100 py-20">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="text-center">
        <h2 className="text-3xl font-extrabold text-gray-900">Why Join WM2?</h2>
        <p className="mt-4 max-w-2xl mx-auto text-xl text-gray-600">
          We provide the tools, the community, and the opportunity. You bring the ambition.
        </p>
      </div>
      <div className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        <FeatureCard title="Financial Freedom" description="Create a new stream of income with a flexible and rewarding compensation plan." />
        <FeatureCard title="Be Your Own Boss" description="Enjoy the flexibility of setting your own hours and working from anywhere." />
        <FeatureCard title="Supportive Community" description="Connect with a network of like-minded individuals who will support you on your journey." />
      </div>
    </div>
  </section>
);

const HowItWorksSection: React.FC = () => (
    <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="lg:text-center">
                <h2 className="text-base text-gray-600 font-semibold tracking-wide uppercase">How It Works</h2>
                <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
                    A Simple Path to Success
                </p>
                <p className="mt-4 max-w-2xl text-xl text-gray-500 lg:mx-auto">
                    We've simplified the process so you can focus on what matters: growing your business.
                </p>
            </div>
            <div className="mt-10 grid items-center gap-10 md:grid-cols-3">
                <div className="text-center">
                    <img className="h-48 w-48 rounded-full mx-auto shadow-lg object-cover" src="https://picsum.photos/200/200?random=1" alt="Step 1" />
                    <h3 className="mt-6 text-xl font-bold text-gray-900">1. Join Our Team</h3>
                    <p className="mt-2 text-gray-600">Sign up and get instant access to our products and training materials.</p>
                </div>
                <div className="text-center">
                     <img className="h-48 w-48 rounded-full mx-auto shadow-lg object-cover" src="https://picsum.photos/200/200?random=2" alt="Step 2" />
                    <h3 className="mt-6 text-xl font-bold text-gray-900">2. Share Products</h3>
                    <p className="mt-2 text-gray-600">Share high-quality products you believe in with your network.</p>
                </div>
                <div className="text-center">
                     <img className="h-48 w-48 rounded-full mx-auto shadow-lg object-cover" src="https://picsum.photos/200/200?random=3" alt="Step 3" />
                    <h3 className="mt-6 text-xl font-bold text-gray-900">3. Earn Rewards</h3>
                    <p className="mt-2 text-gray-600">Earn commissions and bonuses based on your sales and team performance.</p>
                </div>
            </div>
        </div>
    </section>
);

const TestimonialCard: React.FC<{ name: string; quote: string; image: string; }> = ({ name, quote, image }) => (
    <div className="bg-gray-800 p-8 rounded-lg shadow-lg">
        <img className="h-20 w-20 rounded-full mx-auto object-cover" src={image} alt={`Testimonial from ${name}`} />
        <blockquote className="mt-6 text-gray-300">
            <p className="text-lg">"{quote}"</p>
        </blockquote>
        <footer className="mt-4">
            <p className="text-base font-medium text-white">{name}</p>
        </footer>
    </div>
);

const TestimonialsSection: React.FC = () => (
    <section className="bg-gray-900 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-extrabold text-white text-center">Success Stories</h2>
            <div className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
                <TestimonialCard name="Alex Johnson" quote="Joining WM2 was the best decision of my life. I finally have the freedom I always dreamed of." image="https://picsum.photos/100/100?random=4" />
                <TestimonialCard name="Maria Garcia" quote="The support from the community is incredible. I never feel like I'm alone on this journey." image="https://picsum.photos/100/100?random=5" />
                <TestimonialCard name="Chris Lee" quote="I was skeptical at first, but the results speak for themselves. This is a real opportunity." image="https://picsum.photos/100/100?random=6" />
            </div>
        </div>
    </section>
);


const HomePage: React.FC = () => {
  return (
    <div>
      <HeroSection />
      <WhyJoinSection />
      <HowItWorksSection />
      <TestimonialsSection />
    </div>
  );
};

export default HomePage;
