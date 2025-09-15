import { Project } from '@/lib/types'
import Image from 'next/image'

interface ProjectCardProps {
  data: Project
}

const ProjectCard: React.FC<ProjectCardProps> = ({ data }) => {
  const {
    title,
    shortDescription,
    type,
    cover,
    techStack
  } = data

  return (
    <div className="bg-secondary border-border flex flex-col justify-between rounded-[14px] border p-5">
  {/* Header */}
  <div className="flex items-start justify-between gap-2">
    <div className="flex-1">
      <div className="flex flex-col gap-2 sm:items-start">
        <h3 className="text-secondary-content text-lg font-medium md:font-semibold">
          {title}
        </h3>
        {type && (
          <span
            className={`h-7 w-fit rounded-md bg-[#FFFFFF1A] p-1 text-sm ${
              type === 'New 🔥' ? 'animate-blink text-tag' : 'text-accent'
            } backdrop-blur-[80px]`}>
            {type}
          </span>
        )}
      </div>
    </div>

    <figure className="flex justify-end overflow-hidden">
      <Image
        src={cover}
        width={150}
        height={80}
        alt="Project Cover"
        className="h-[80px] w-[150px] rounded-md object-cover shadow-[0px_1.66px_3.74px_-1.25px_#18274B1F]"
      />
    </figure>
  </div>

  {/* Description */}
  <div className="mt-3">
    <div className="bg-primary text-primary-content rounded-2xl px-4 py-2">
      <p className="text-[14px] font-normal md:text-base">{shortDescription}</p>

      {techStack && (
        <p className="mt-2 text-[14px] font-normal md:text-base">
          Tech Stack:&nbsp;
          <span className="font-bold">{techStack}</span>
        </p>
      )}
    </div>
  </div>
</div>
  )
}

export default ProjectCard
