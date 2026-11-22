import { Link } from 'react-router-dom';
import { FaGithub } from 'react-icons/fa6';
import { FiArrowUpRight } from 'react-icons/fi';
import { currentProject } from '../data/ProjectData';
import { useSound } from '../context/SoundContext';

function CurrentProject() {
  const { playSFX } = useSound();

  if (!currentProject) return null;

  return (
    <section className='w-full flex flex-col gap-y-4 my-8'>
      {/* Section Header */}
      <div className='mx-auto'>
        <h1 className='font-press text-[#0F766E] dark:text-[#2DD4BF] text-center'>
          CURRENT PROJECT
        </h1>
      </div>

      {/* Spotlight Card */}
      <div className='w-full max-w-4xl mx-auto px-4'>
        <div className='border border-[#BFACB5] dark:border-[#BFACB5]/40 rounded-sm p-6 sm:p-8 bg-[#E5D0CC]/20 dark:bg-[#444554]/30 backdrop-blur-md shadow-sm transition-all duration-300 hover:shadow-md'>
          {/* Header Row: Status Badge */}
          <div className='flex items-center justify-between gap-3 mb-4 flex-wrap'>
            <div className='inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold bg-[#0F766E]/10 dark:bg-[#2DD4BF]/15 text-[#0F766E] dark:text-[#2DD4BF] border border-[#0F766E]/30 dark:border-[#2DD4BF]/40'>
              <span className='relative flex h-2 w-2'>
                <span className='animate-ping absolute inline-flex h-full w-full rounded-full bg-[#0F766E] dark:bg-[#2DD4BF] opacity-75'></span>
                <span className='relative inline-flex rounded-full h-2 w-2 bg-[#0F766E] dark:bg-[#2DD4BF]'></span>
              </span>
              <span>{currentProject.status}</span>
            </div>

            <span className='text-xs font-mono text-[#172121]/60 dark:text-[#E5D0CC]/60'>
              Featured Build
            </span>
          </div>

          {/* Project Title & Tagline */}
          <div className='space-y-1 mb-3'>
            <h2 className='text-xl sm:text-2xl font-bold font-press text-[#172121] dark:text-[#E5D0CC]'>
              {currentProject.name}
            </h2>
            <p className='text-xs sm:text-sm font-semibold text-[#0F766E] dark:text-[#2DD4BF]'>
              {currentProject.tagline}
            </p>
          </div>

          {/* Description */}
          <p className='text-xs sm:text-sm text-[#172121]/80 dark:text-[#E5D0CC]/80 leading-relaxed mb-4'>
            {currentProject.description}
          </p>

          {/* Tech Stack Pills */}
          <div className='flex flex-wrap gap-2 my-4'>
            {currentProject.tech.map((techItem, index) => (
              <button
                key={index}
                type='button'
                onClick={() => playSFX('press')}
                className='border border-[#BFACB5] dark:border-[#BFACB5]/40 h-[26px] px-2.5 text-xs rounded hover:bg-[#BFACB5]/20 dark:hover:bg-[#444554] text-[#172121] dark:text-[#E5D0CC] transition-colors cursor-default'
              >
                {techItem}
              </button>
            ))}
          </div>

          {/* Action Buttons */}
          <div className='flex items-center gap-3 pt-2 flex-wrap'>
            {currentProject.live.startsWith('/') ? (
              <Link
                to={currentProject.live}
                onClick={() => playSFX('open')}
                className='inline-flex items-center gap-2 px-4 py-2 bg-[#BFACB5] dark:bg-[#BFACB5] text-[#172121] rounded hover:bg-[#7F7B82] dark:hover:bg-[#7F7B82] transition-all hover:scale-105 font-semibold text-xs sm:text-sm cursor-pointer'
              >
                <FiArrowUpRight size={16} />
                Live Demo
              </Link>
            ) : (
              <a
                href={currentProject.live}
                target='_blank'
                rel='noopener noreferrer'
                onClick={() => playSFX('open')}
                className='inline-flex items-center gap-2 px-4 py-2 bg-[#BFACB5] dark:bg-[#BFACB5] text-[#172121] rounded hover:bg-[#7F7B82] dark:hover:bg-[#7F7B82] transition-all hover:scale-105 font-semibold text-xs sm:text-sm cursor-pointer'
              >
                <FiArrowUpRight size={16} />
                Live Demo
              </a>
            )}

            <a
              href={currentProject.github}
              target='_blank'
              rel='noopener noreferrer'
              onClick={() => playSFX('open')}
              className='inline-flex items-center gap-2 px-4 py-2 border border-[#BFACB5] dark:border-[#BFACB5] text-[#172121] dark:text-[#E5D0CC] rounded hover:bg-[#BFACB5]/20 dark:hover:bg-[#444554] transition-all hover:scale-105 font-semibold text-xs sm:text-sm cursor-pointer'
            >
              <FaGithub size={16} />
              GitHub Repo
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default CurrentProject;
