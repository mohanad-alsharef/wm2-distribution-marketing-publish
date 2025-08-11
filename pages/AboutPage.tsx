
import React from 'react';

const TeamMemberCard: React.FC<{ name: string; role: string; image: string }> = ({ name, role, image }) => (
  <div className="text-center">
    <img className="mx-auto h-40 w-40 rounded-full object-cover lg:w-48 lg:h-48 shadow-lg" src={image} alt={`Photo of ${name}`} />
    <div className="mt-4">
      <h3 className="text-lg font-medium text-gray-900">{name}</h3>
      <p className="text-gray-600">{role}</p>
    </div>
  </div>
);

const AboutPage: React.FC = () => {
  return (
    <div className="bg-white">
      {/* Mission Section */}
      <div className="max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:py-24 lg:px-8">
        <div className="text-center">
          <h2 className="text-base font-semibold text-gray-600 tracking-wide uppercase">Our Mission</h2>
          <p className="mt-1 text-4xl font-extrabold text-gray-900 sm:text-5xl sm:tracking-tight lg:text-6xl">Empowering Ambition</p>
          <p className="max-w-xl mt-5 mx-auto text-xl text-gray-500">
            At WM2, our mission is to provide a platform where individuals can achieve their personal and financial goals through a supportive and innovative distribution marketing model.
          </p>
        </div>
      </div>
      
      {/* Image Section */}
      <div className="py-12">
        <div className="relative">
          <div className="absolute inset-0 h-1/2 bg-gray-50" />
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto">
              <img
                className="rounded-lg shadow-xl"
                src="https://picsum.photos/1200/600"
                alt="WM2 team working together"
              />
            </div>
          </div>
        </div>
      </div>
      
      {/* Values Section */}
      <div className="bg-gray-50 py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-y-12 md:gap-x-8">
                <div className="text-center">
                    <h3 className="text-2xl font-bold text-gray-900">Integrity</h3>
                    <p className="mt-2 text-gray-600">We operate with unwavering honesty and transparency in everything we do.</p>
                </div>
                 <div className="text-center">
                    <h3 className="text-2xl font-bold text-gray-900">Community</h3>
                    <p className="mt-2 text-gray-600">We foster a collaborative and supportive environment where everyone can thrive.</p>
                </div>
                 <div className="text-center">
                    <h3 className="text-2xl font-bold text-gray-900">Innovation</h3>
                    <p className="mt-2 text-gray-600">We continuously seek better ways to support our members and improve our platform.</p>
                </div>
            </div>
        </div>
      </div>

      {/* Team Section */}
      <div className="bg-white py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-extrabold text-gray-900">Meet Our Leadership</h2>
            <p className="mt-4 max-w-2xl mx-auto text-xl text-gray-500">
              The dedicated team behind our success.
            </p>
          </div>
          <div className="mt-12 grid gap-12 sm:grid-cols-2 lg:grid-cols-3">
            <TeamMemberCard name="Jane Doe" role="Founder & CEO" image="https://picsum.photos/200/200?random=7" />
            <TeamMemberCard name="John Smith" role="Chief Operating Officer" image="https://picsum.photos/200/200?random=8" />
            <TeamMemberCard name="Emily White" role="Head of Member Success" image="https://picsum.photos/200/200?random=9" />
          </div>
        </div>
      </div>

    </div>
  );
};

export default AboutPage;
