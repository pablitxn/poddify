import Link from 'next/link';
import { format } from 'date-fns';

import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';

interface Project {
  id: number;
  date: string;
  sourceLanguage: string;
  targetLanguage: string;
  status: string;
  resultLink: string;
}

interface ProjectListProps {
  projects: Project[];
}

export function ProjectList({ projects }: ProjectListProps) {
  return (
      <div className="space-y-4">
        {projects.map((project) => (
            <Card
                key={project.id}
                className="bg-purple-900 bg-opacity-30 hover:bg-opacity-40 transition-all duration-300 border-cyan-300 hover:border-pink-400"
            >
              <CardContent className="p-6 flex justify-between items-center">
                <div className="space-y-2">
                  <p className="text-white font-semibold">
                    {format(new Date(project.date), 'dd/MM/yyyy')}
                  </p>
                  <p className="text-gray-300">
                    {project.sourceLanguage} → {project.targetLanguage}
                  </p>
                  <span className="inline-block bg-cyan-500 text-xs text-white px-2 py-1 rounded-full">
                {project.status}
              </span>
                </div>
                <Link href={project.resultLink}>
                  <Button className="bg-transparent hover:bg-cyan-700 text-cyan-300 hover:text-white border border-cyan-300 hover:border-transparent transition-colors duration-300">
                    Ver Resultado
                  </Button>
                </Link>
              </CardContent>
            </Card>
        ))}
      </div>
  );
}