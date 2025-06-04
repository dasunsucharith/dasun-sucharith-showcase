
import { Card, CardContent } from '@/components/ui/card';

const About = () => {
  const skills = [
    'JavaScript/TypeScript', 'React.js', 'Node.js', 'Python',
    'Next.js', 'MongoDB', 'PostgreSQL', 'AWS',
    'Git/GitHub', 'Docker', 'Tailwind CSS', 'Express.js'
  ];

  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            About Me
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-600 to-indigo-600 mx-auto"></div>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <p className="text-lg text-gray-700 leading-relaxed">
              I'm a passionate Full Stack Developer with a love for creating innovative 
              digital solutions. With expertise in modern web technologies, I enjoy 
              building applications that not only look great but also deliver exceptional 
              user experiences.
            </p>
            
            <p className="text-lg text-gray-700 leading-relaxed">
              My journey in software development has equipped me with a diverse skill set 
              spanning both frontend and backend technologies. I'm constantly learning 
              and adapting to new technologies to stay at the forefront of web development.
            </p>
            
            <p className="text-lg text-gray-700 leading-relaxed">
              When I'm not coding, you can find me exploring new technologies, 
              contributing to open source projects, or sharing my knowledge with 
              the developer community.
            </p>
          </div>

          <Card className="p-8 shadow-lg border-0 bg-gradient-to-br from-blue-50 to-indigo-50">
            <CardContent className="p-0">
              <h3 className="text-2xl font-semibold text-gray-900 mb-6">
                Technical Skills
              </h3>
              <div className="grid grid-cols-2 gap-3">
                {skills.map((skill, index) => (
                  <div 
                    key={skill}
                    className="bg-white px-4 py-2 rounded-lg shadow-sm text-sm font-medium text-gray-700 hover:shadow-md transition-shadow duration-200"
                    style={{ animationDelay: `${index * 100}ms` }}
                  >
                    {skill}
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default About;
