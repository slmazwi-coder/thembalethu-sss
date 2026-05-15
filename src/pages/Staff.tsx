import React from 'react';


interface StaffMember {
  name: string;
  position: string;
  subject?: string;
  category: string;
  image?: string;
}

const staffData: StaffMember[] = [
  { name: 'Ms. N. Magwaza', position: 'Principal', category: 'Leadership', image: '/assets/about/teprincipal.png' },
  { name: 'Educator', position: 'Deputy Principal', category: 'Leadership' },
  { name: 'Educator', position: 'Head of Department — Languages', category: 'Departmental Heads', subject: 'Languages' },
  { name: 'Educator', position: 'Head of Department — Sciences', category: 'Departmental Heads', subject: 'Sciences' },
  { name: 'Educator', position: 'Head of Department — Commerce', category: 'Departmental Heads', subject: 'Commerce' },
  { name: 'Educator', position: 'Head of Department — Arts & Technology', category: 'Departmental Heads', subject: 'Arts & Technology' },
  { name: 'Educator', position: 'Class Teacher — Grade 8', subject: 'Mathematics', category: 'Class Teachers' },
  { name: 'Educator', position: 'Class Teacher — Grade 9', subject: 'Life Sciences', category: 'Class Teachers' },
  { name: 'Educator', position: 'Class Teacher — Grade 10', subject: 'Physical Sciences', category: 'Class Teachers' },
  { name: 'Educator', position: 'Class Teacher — Grade 11', subject: 'Accounting', category: 'Class Teachers' },
  { name: 'Educator', position: 'Class Teacher — Grade 12', subject: 'English', category: 'Class Teachers' },
  { name: 'Staff Member', position: 'School Administrator', category: 'Support Staff' },
  { name: 'Staff Member', position: 'Learner Support Agent', category: 'Support Staff' },
  { name: 'Staff Member', position: 'General Worker', category: 'Support Staff' },
];

const categories = ['Leadership', 'Departmental Heads', 'Class Teachers', 'Support Staff'];

const StaffCard = ({ member }: { member: StaffMember }) => (
  <div className="bg-white rounded-2xl shadow-sm hover:shadow-lg transition-all duration-300 flex flex-col items-center p-6 text-center border border-[#d6e5ef] hover:-translate-y-1">
    <div className="w-24 h-24 rounded-full bg-blue-50 border-4 border-[#b8d4e8] flex items-center justify-center mb-4 overflow-hidden">
      {member.image ? (
        <img src={member.image} alt={member.name} className="w-full h-full object-cover" />
      ) : (
        <div className="w-full h-full bg-gradient-to-br from-[#800000] to-[#DC143C] flex items-center justify-center text-white font-bold text-2xl font-serif">
          {member.name.split(' ').map(n => n[0]).join('')}
        </div>
      )}
    </div>
    <h3 className="text-sm font-bold text-school-blue leading-tight">{member.name}</h3>
    <p className="text-xs font-semibold mt-1 text-school-blue">{member.position}</p>
    {member.subject && (
      <span className="mt-2 inline-block bg-blue-50 text-school-blue text-xs font-medium px-3 py-1 rounded-full">
        {member.subject}
      </span>
    )}
  </div>
);

export const Staff = () => {
  const [activeCategory, setActiveCategory] = React.useState('Leadership');
  const filtered = staffData.filter(m => m.category === activeCategory);

  return (
    <div className="min-h-screen py-12 px-4" style={{ background: '#f0f6fa' }}>
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-10">
          <h1 className="text-4xl font-extrabold tracking-tight mb-3 text-school-blue">Our Staff</h1>
          <p className="text-gray-500 max-w-xl mx-auto">Meet the dedicated educators and support staff who make Thembalethu SSS thrive every day.</p>
          <p className="text-sm text-gray-400 mt-2 italic">Staff details will be updated by school administration.</p>
        </div>

        {/* Category tabs */}
        <div className="flex flex-wrap gap-2 justify-center mb-10">
          {categories.map(cat => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-5 py-2.5 rounded-full text-sm font-bold border-2 transition-all ${activeCategory === cat ? 'bg-school-blue text-white border-school-blue' : 'bg-white text-school-blue border-school-blue hover:bg-blue-50'}`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Staff group photo */}
        <div className="mb-10 rounded-2xl overflow-hidden shadow-lg max-h-72 relative">
          <img src="/assets/staff/staff_group.png" alt="Thembalethu SSS staff" className="w-full object-cover object-top" onError={(e) => { (e.target as HTMLImageElement).style.display = 'none'; }} />
          <div className="absolute inset-0 bg-gradient-to-t from-school-blue/60 to-transparent flex items-end p-6">
            <p className="text-white font-bold text-lg">Our dedicated team of educators</p>
          </div>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
          {filtered.map((member, i) => <div key={i}><StaffCard member={member} /></div>)}
        </div>
      </div>
    </div>
  );
};
