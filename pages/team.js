import { PageSEO } from '@/components/SEO'
import siteMetadata from '@/data/siteMetadata'
import { allMembersData } from '@/data/membersData'
import MemberCard from '@/components/MemberCard'

export default function Team() {
  return (
    <>
      <PageSEO title={`Team - ${siteMetadata.title}`} />
      <h1 className="m-5 text-center text-3xl font-extrabold leading-9 tracking-tight text-gray-900 dark:text-gray-100 sm:text-4xl sm:leading-10 md:px-6 md:text-6xl md:leading-14">
        Members
      </h1>
      {Object.keys(allMembersData).map((year) => (
        <>
          <h1 className="text-center text-2xl font-extrabold leading-9 tracking-tight text-gray-900 dark:text-gray-100 sm:text-4xl sm:leading-10 md:px-6 md:text-6xl md:leading-14">
            {year}
          </h1>
          <br />
          <div className="flex flex-col items-start justify-start md:mt-8 md:flex-row md:flex-wrap md:items-center md:justify-center md:space-x-6">
            {allMembersData[year].map((member) => {
              return (
                <MemberCard
                  key={member.Timestamp}
                  title={member.name}
                  description={member.quote}
                  imgSrc={member.picture}
                  facebook={member.facebook}
                  github={member.github}
                  linkedin={member.linkedin}
                />
              )
            })}
          </div>
        </>
      ))}
    </>
  )
}
