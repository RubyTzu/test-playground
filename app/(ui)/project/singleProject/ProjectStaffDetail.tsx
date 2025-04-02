import { ProjectDetails } from "@/app/(data)/types";
import Link from "next/link";
import { Cta } from "@/app/(data)/types";

export const ProjectStaffDetail = ({ projectData, title }: { projectData: ProjectDetails; title: string }) => {

  return (
    <div className="mb-32">
      <div className="text-lg font-semibold pb-4">{title}</div>
      {title === "-" ? (
        <div>
          <div className="font-medium">{projectData.time}</div>
          <div className="font-semibold">{projectData.longTitle}</div>
          <div>{projectData.type}</div>
          <br />
          <ul id="project_credit" className="!list-outside">
            {projectData.credits.map((credit) => {
              return (
                <li key={credit.id}>
                  <span className="text-zinc-600 font-medium">{credit.title} - </span>
                  {credit.subTitle}
                </li>
              );
            })}
          </ul>
          <div className="grid grid-cols-1 md:gap-4 sm:grid-cols-3 md:grid-cols-4">
            {projectData.cta.map((cta: Cta) => (
              <div key={cta.id} className="mt-6 px-4 text-slate-600 text-base border-transparent border-l-slate-600 border-2 w-fit md:mt-10">
                <Link target="_blank" href={cta.url}>
                  {cta.title}&nbsp;&nbsp;&gt;
                </Link>
              </div>
            ))}
          </div>
        </div>
      ) : null}
    </div>
  );
};
