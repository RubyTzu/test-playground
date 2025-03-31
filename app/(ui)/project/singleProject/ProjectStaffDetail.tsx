import { ProjectDetails } from "@/app/(data)/types";
import Link from "next/link";

export const ProjectStaffDetail = ({ projectData, title }: { projectData: ProjectDetails; title: string }) => {
  console.log(projectData.id);
  return (
    <div className="mb-32">
      <div className="text-lg font-semibold pb-4">{title}</div>
      {title === "-" ? (
        <div>
          <div className="font-medium">2021</div>
          <div className="font-semibold">Bridging Humans and the Ocean - Dive into Coral Reefs</div>
          <div>Interaction Exhibition</div>
          <br />
          <ul className="!list-outside">
            <li>
              <span className="text-zinc-600 font-medium">My Role - </span>
              Design Planner / 2D Visual Designer / UIUX Designer / Video Editor
            </li>
            <li>
              <span className="text-zinc-600 font-medium">Client - </span>NMMBA
            </li>
            <li><span className="text-zinc-600 font-medium">Director - </span>Maxray Lin</li>
            <li><span className="text-zinc-600 font-medium">Project Manager -</span>Violet Peng / Trekkie Su</li>
            <li><span className="text-zinc-600 font-medium">Designer - </span>Ruby Chen / Ruby Chang / Suntas Hsueh / Violet Peng</li>
            <li><span className="text-zinc-600 font-medium">Programmer - </span>Sam Liu / Andy Wu / Alex Lin</li>
          </ul>
          <div className="mt-10 px-4 py-2  text-slate-600 text-base border-transparent border-l-slate-600 border-2 w-fit">
            <Link target="_blank" href={"https://www.behance.net/gallery/133772967/_"}>
              View on Behance&nbsp;&nbsp;&gt;
            </Link>
          </div>
        </div>
      ) : null}
    </div>
  );
};
