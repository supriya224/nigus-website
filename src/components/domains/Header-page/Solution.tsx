import { FaThumbsUp } from 'react-icons/fa';
import { MdGroups } from 'react-icons/md';

function Solution() {
  return (
    <section>
      <section className="container mx-auto w-auto font-customFont ">
        <h2 className="text-2xl mt-9 mb-6 text-center sm:text-left md:text-left font-semibold text-gray-700">
          Comprehensive IT Solutions for Modern Businesses
        </h2>

        <div className=" grid grid-cols-1 sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-2 xl:grid-cols-2 ">
          <div className="flex justify-center sm:mx-9  md:mx-9 lg:justify-normal  xl:justify-normal ">
            <img
              src="http://www.nigussystems.com/images/client-interaction.png"
              alt=""
              className="w-fit h-fit"
            />
          </div>
          <div className="mx-5">
            <p className="text-lg leading-8">
              In the fast-paced digital era, businesses across industries are
              embracing technology to streamline operations, enhance
              productivity, and drive growth. We specialize in delivering
              innovative software solutions tailored to your unique business
              needs. Whether you're looking for web development, application
              development, software integration, or AI/ML solutions, our expert
              team is committed to transforming your ideas into robust,
              scalable, and user-friendly software applications that propel your
              business forward.
            </p>

            <h3 className="text-xl font-bold my-3">Enterprise Software</h3>
            <p className="text-lg leading-8 mt-3">
              As a Our Enterprise Software solutions is designed to address
              specific industry challenges and requirements across various
              sectors, including manufacturing, retail, healthcare, finance, and
              more. Whether it's optimizing supply chain logistics, managing
              inventory, ensuring regulatory compliance, or enhancing customer
              experiences, our enterprise software solutions offer scalability,
              flexibility, and customization to meet the unique needs of each
              industry vertical.
            </p>
          </div>
        </div>

        <section>
          <h3 className="text-2xl xl:text-4xl px-5 font-bold text-center my-16">
            Empower the Business with Next-Gen Solutions
          </h3>
          <div className="mx-5 gap-9  grid grid-cols-1 lg:grid-cols-2 ">
            <div className="my-3 sm:mx-12  ">
              <div className=" w-full  transform transition duration-500 hover:scale-110 rounded-xl shadow-xl shadow-gray-400  mx-auto p-16  text-center mb-9 sm:justify-center">
                <span className="flex justify-center">
                  <FaThumbsUp
                    size={50}
                    className="text-blue-600 transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-110 hover:text-blue-500 duration-300"
                  />
                </span>
                <h3 className="font-bold text-lg">
                  {' '}
                  Proven Expertise and Reliability{' '}
                </h3>
                Customers choose us for our proven IT expertise, track record of
                successful projects, and a dedicated team, instilling confidence
                through reliable and high-quality services.
              </div>
              <div className=" transform transition duration-500 hover:scale-110 mx-auto rounded-xl shadow-xl shadow-gray-400 p-12 text-center">
                <span className="flex justify-center">
                  <MdGroups
                    size={80}
                    className="text-blue-600 transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-110 hover:text-blue-500 duration-300"
                  />
                </span>
                <h3 className="font-bold text-lg">
                  Customer-Centric Approach and Personalized Solutions
                </h3>
                Our customer-centric approach, understanding unique needs and
                delivering personalized solutions, fosters lasting
                relationships, ensuring customer satisfaction.
              </div>
            </div>
            <div className="">
              <h3 className="font-bold text-lg">
                Enterprise Resource Planning (ERP) Solutions
              </h3>
              <p className="leading-7">
                Our Enterprise Resource Planning (ERP) solutions are designed to
                centralize and automate core business processes, providing
                organizations with a unified platform to manage their
                financials, supply chain, human resources, customer
                relationships, and more. With robust features such as real-time
                analytics, inventory management, procurement, and integrated
                reporting, our ERP software empowers businesses to optimize
                operations, reduce costs, improve decision-making, and drive
                growth.
              </p>
              <h3 className="font-bold text-lg">
                Customer Relationship Management (CRM) Systems
              </h3>
              <p className="leading-7">
                A seamless customer experience is essential for business
                success, and our Customer Relationship Management (CRM) systems
                are built to help organizations deliver exceptional customer
                service and drive customer loyalty. From lead management and
                sales automation to marketing campaigns and customer support,
                our CRM software enables businesses to manage customer
                interactions effectively, personalize engagements, track
                customer data, and nurture long-lasting relationships.
              </p>
              <h3 className="font-bold text-lg">IT Management Software</h3>
              <p className="leading-7">
                In today's digital era, managing IT infrastructure effectively
                is critical for business continuity, security, and performance.
                Our IT Management Software provides comprehensive tools and
                solutions for network monitoring, asset management,
                cybersecurity, compliance, and IT service management. From
                proactive monitoring and incident response to patch management
                and risk assessment, our IT software helps organizations
                optimize IT operations, minimize downtime, and ensure a secure
                and resilient IT environment.
              </p>
              <h3 className="font-bold text-lg">
                Human Resource Management (HRM) Software
              </h3>
              <p className="leading-7">
                Managing human capital efficiently is vital for organizational
                success, and our Human Resource Management (HRM) software
                simplifies HR processes, enhances employee engagement, and
                ensures compliance with regulations. With features such as
                recruitment and onboarding, performance management, time
                tracking, payroll, and benefits administration, our HRM solution
                enables HR teams to focus on strategic initiatives, foster a
                positive work culture, and empower employees for higher
                productivity.
              </p>
              <h3 className="font-bold text-lg">
                Operations Management Software
              </h3>
              <p className="leading-7">
                Optimizing operational efficiency and resource utilization is
                key to driving profitability, and our Operations Management
                Software helps businesses achieve operational excellence across
                various functions. From supply chain management and inventory
                control to production planning and scheduling, our solution
                provides real-time visibility into operations, automates
                workflows, identifies bottlenecks, and enables data-driven
                decision-making for enhanced productivity and cost savings.
              </p>
              <h3 className="font-bold text-lg">
                Collaboration and Communication Tools
              </h3>
              <p className="leading-7">
                Effective collaboration and communication are essential for
                driving teamwork, productivity, and innovation within
                organizations. Our Collaboration and Communication Tools include
                project management software, video conferencing solutions,
                document sharing platforms, and instant messaging tools that
                enable seamless collaboration among teams, departments, and
                stakeholders. With features such as task tracking, file sharing,
                real-time messaging, and virtual meetings, our collaboration
                tools streamline workflows, enhance transparency, and foster a
                culture of collaboration for better outcomes.
              </p>
            </div>
          </div>
        </section>
      </section>
    </section>
  );
}

export default Solution;
