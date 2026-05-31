import React from 'react';
import { motion } from 'motion/react';
import { Linkedin, Twitter, Mail } from 'lucide-react';

const team = [
  {
    name: 'Avinash Gaur',
    role: 'Founder & CEO',
    image: '/images/avinash.jpeg',
    bio: 'Visionary leader with over 10 years of experience in the renewable energy sector, driving strategic growth and sustainable innovation.',
    social: {
      linkedin: '#',
      twitter: '#',
      email: 'mailto:gauravinash615@gmail.com'
    }
  },
  {
    name: 'Sunil Singh',
    role: 'Founder & Head of Department',
    image: '/images/sunil.jpeg',
    bio: 'Accomplished leader with 10 years of expertise in the solar industry, overseeing major departments and strategic operational excellence.',
    social: {
      linkedin: '#',
      twitter: '#',
      email: 'mailto:sunillodhi2012@gmail.com'
    }
  },
  {
    name: 'Ankit Narwaria',
    role: 'Head of Digital Team, (CSE, B.Tech)',
    image: '/images/ankit.jpeg',
    bio: 'CSE graduate from MITS, Gwalior, leading digital innovation and technology solutions for the company.',
    social: {
      linkedin: '#',
      twitter: '#',
      email: 'mailto:ankitnarwaria2015@gmail.com'
    }
  },
  {
    name: 'Arun Narwaria',
    role: 'Civil Engineer, (Civil, M.Tech)',
    image: '/images/arun.jpeg',
    bio: 'Civil Engineering graduate from IIT Roorkee, ensuring structural excellence in all solar installations.',
    social: {
      linkedin: '#',
      twitter: '#',
      email: 'mailto:arun@sabalgreensolar.com'
    }
  }
];

export default function Team() {
  return (
    <section id="team" className="py-24 px-6 bg-solar-light/50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-solar-green font-bold tracking-widest uppercase text-sm"
          >
            Our Experts
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl mt-4 mb-6"
          >
            Meet the <span className="text-solar-green">Team</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-gray-600 max-w-2xl mx-auto text-lg"
          >
            Our dedicated team of professionals is committed to delivering excellence in every solar project we undertake.
          </motion.p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {team.map((member, index) => (
            <motion.div
              key={member.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all border border-solar-green/5"
            >
              <div className="relative h-72 overflow-hidden">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-solar-dark/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end justify-center pb-6">
                  <div className="flex gap-4">
                    <a href={member.social.linkedin} className="w-10 h-10 bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center text-white hover:bg-solar-green transition-colors">
                      <Linkedin className="w-5 h-5" />
                    </a>
                    <a href={member.social.twitter} className="w-10 h-10 bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center text-white hover:bg-solar-green transition-colors">
                      <Twitter className="w-5 h-5" />
                    </a>
                    <a href={member.social.email} className="w-10 h-10 bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center text-white hover:bg-solar-green transition-colors">
                      <Mail className="w-5 h-5" />
                    </a>
                  </div>
                </div>
              </div>
              <div className="p-6 text-center">
                <h4 className="text-xl font-bold text-solar-dark mb-1">{member.name}</h4>
                <p className="text-solar-green font-medium text-sm mb-3">{member.role}</p>
                <p className="text-gray-500 text-sm leading-relaxed">{member.bio}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
