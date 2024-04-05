function Collaboration() {
  return (
    <section>
      <section className="container mx-auto w-auto font-customFont">
        <h2 className="text-xl my-3 font-semibold text-gray-500">
          Effortless Collaboration, Elevate with System Integrations
        </h2>

        <div className="flex justify-between w-full">
          <div>
            <img
              width={600}
              height={100}
              src="http://www.nigussystems.com/images/crm-integration.png"
              alt=""
            />
          </div>
          <div className=" w-1/2">
            <p className="text-lg">
              <span className="text-xl font-bold">
                System Integration Services:
              </span>{' '}
              We offer a comprehensive suite of system integration services
              designed to optimize your business processes, improve efficiency,
              and drive growth.
            </p>
            <p className="text-lg">
              {' '}
              <span className="text-xl font-bold">3CX Integration</span> : As a
              leading provider of communication solutions, 3CX enables
              organizations to unify their communication channels, including
              voice, video, chat, and conferencing, into a single platform. We
              specialize in integrating 3CX with your existing systems, such as
              CRM software, customer support tools, and enterprise applications,
              to enhance collaboration, streamline communications, and improve
              customer interactions.
            </p>
            <p className="text-lg">
              {' '}
              <span className="text-xl font-bold">CRM Integration:</span>{' '}
              Customer Relationship Management (CRM) systems play a vital role
              in managing customer interactions, sales processes, and marketing
              campaigns. We specialize in integrating CRM platforms like
              Salesforce, HubSpot, Microsoft Dynamics, Zoho CRM, and others with
              your other business systems to centralize customer data, automate
              lead management, track sales activities, and deliver personalized
              customer experiences.
            </p>
            <p className="text-lg">
              <span className="text-xl font-bold">
                Customer Support Integration:
              </span>{' '}
              Efficient customer support is essential for retaining customers
              and driving satisfaction. We integrate customer support tools such
              as Zendesk, Freshdesk, and Intercom with your CRM, communication
              systems, and knowledge bases to streamline ticket management,
              automate responses, track customer interactions, and deliver
              timely support solutions.
            </p>
            <p className="text-lg">
              {' '}
              <span className="text-xl font-bold">
                Enterprise Software Integration:
              </span>{' '}
              Modern businesses rely on a variety of enterprise software
              applications for functions such as accounting, HR management,
              inventory control, and supply chain management.
            </p>
            <p className="text-lg">
              {' '}
              <span className="text-xl font-bold">
                Custom Integration Solutions:
              </span>{' '}
              Every business is unique, and we understand that your integration
              needs may vary based on your industry, size, and goals. Our custom
              integration solutions are tailored to your specific requirements,
              whether it's integrating IoT devices, legacy systems, cloud
              applications, e-commerce platforms, or API integrations with
              third-party services.
            </p>
          </div>
        </div>
      </section>
    </section>
  );
}

export default Collaboration;
