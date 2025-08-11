
import React, { useState } from 'react';
import type { FaqItem } from '../types';
import AccordionItem from '../components/common/AccordionItem';

const faqData: FaqItem[] = [
  {
    question: 'What is WM2 distribution marketing?',
    answer: 'WM2 is a distribution marketing company that empowers individuals to earn income by selling high-quality products directly to consumers and building a network of other distributors. This is a placeholder text, you can replace it with your own content.',
  },
  {
    question: 'How do I get started with WM2?',
    answer: 'Getting started is simple! Click the "Join Now" button on our homepage, fill out the registration form, and you\'ll get immediate access to our starter kit and training materials. This is a placeholder text, you can replace it with your own content.',
  },
  {
    question: 'Is there a startup cost?',
    answer: 'Yes, there is a small initial investment for our starter kit, which includes product samples, business tools, and access to our online portal. This investment is designed to set you up for success. This is a placeholder text, you can replace it with your own content.',
  },
  {
    question: 'How do I earn money?',
    answer: 'You can earn money in two primary ways: through commissions on your personal sales and through bonuses based on the sales of the distributors you recruit and train. This is a placeholder text, you can replace it with your own content.',
  },
  {
    question: 'Do I need any prior sales experience?',
    answer: 'No prior experience is necessary. We provide comprehensive training and a supportive community to help you learn everything you need to know to succeed. This is a placeholder text, you can replace it with your own content.',
  },
    {
    question: 'What kind of products does WM2 offer?',
    answer: 'We offer a diverse range of high-quality products in the health, wellness, and lifestyle sectors. All our products are ethically sourced and rigorously tested. This is a placeholder text, you can replace it with your own content.',
  },
];

const FaqPage: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const handleToggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="bg-gray-50">
      <div className="max-w-7xl mx-auto py-12 px-4 sm:py-16 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto">
          <div className="text-center">
            <h2 className="text-3xl font-extrabold text-gray-900">Frequently Asked Questions</h2>
            <p className="mt-4 text-lg text-gray-500">
              Can't find the answer you're looking for? Reach out to our{' '}
              <a href="#" className="font-medium text-gray-700 hover:text-gray-600">
                customer support
              </a>{' '}
              team.
            </p>
          </div>
          <div className="mt-12 bg-white shadow-lg rounded-lg">
            {faqData.map((item, index) => (
              <AccordionItem
                key={index}
                question={item.question}
                answer={item.answer}
                isOpen={openIndex === index}
                onClick={() => handleToggle(index)}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default FaqPage;
