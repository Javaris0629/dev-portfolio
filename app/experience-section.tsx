import SectionTitleHeader from "./section-title-header"
import DescriptionOfSection from "./description-of-section"

export default function ExperienceSection() {
  const experience = [
    {
      "id": "3",
      "time_range": "05/2020 - 08/2020",
      "company_name": "Griffiss Institute",
      "description": "Jr Python intern that added value to the company Machine Learning and AI platform, by working on many types of search algorithms",
      "projects": [
        {
          "id": "11",
          "description": "Used these algorithms to create realtime paths to ensure that agents accurately reach their end goal successfully without collisions",
        },
        {
          "id": "22",
          "description": "Gained remote team experience"
        },
      ]
    },
    {
      "id": "2",
      "time_range": "04/2018 - 08/2020",
      "company_name": "AT&T Retail Consultant",
      "description": "Assist customers with the purchase of company products, services, accessories and more.",
      "projects": [
      ]
    },
    {
      "id": "1",
      "time_range": "(Current Job)",
      "company_name": "Big Lots Associate",
      "description": "Participates in the freight flow process including truck unloading, stocking, merchandise presentation and recovery",
      "projects":[

      ]
    },
  ]

  return (
    <div className="mb-12">
      <SectionTitleHeader title="Experience" />
      <DescriptionOfSection description="Below is a description of my professional experience along with individual tasks and a breakdown by years." />
      <ul className="list-inside lg:list-outside list-disc text-gray-200">
        {experience.map((item) => (
          <li key={item.id} className="mb-10">
            <span>{item.time_range}</span> <br className="block sm:hidden" /><span className="text-blue-600 pl-4 sm:pl-0">{`>>`}</span> {item.company_name}
            <p className="mt-3">
              {item.description}
            </p>
           
            <ul className="list-disc ml-8 mt-4">
              {item.projects.map((project) => (
                 <li key={project.id}>
                  {project.description}
                </li>
              ))}
            </ul>
          </li>
        ))}
      </ul>
    </div>
  )
}