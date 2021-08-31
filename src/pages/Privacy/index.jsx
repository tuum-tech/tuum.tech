import React from 'react';
import styled from 'styled-components';

import { Navbar, Footer } from '../../components/layout';
import ContextTable from './components/ContextTable';

export const ContentContainer = styled.div`
  width: 100%;
  max-width: 1240px;
  margin: 120px auto 80px;
  padding: 0 30px;

  .title {
    font-style: normal;
    font-weight: 600;
    font-size: 65px;
    line-height: 70px;
    color: #000000;

    margin-bottom: 90px;
  }

  .sectionTitle {
    font-style: normal;
    font-weight: 600;
    font-size: 32px;
    line-height: 44px;
    color: #17171b;

    margin-bottom: 30px;
    margin-top: 50px;
  }

  p {
    font-style: normal;
    font-weight: 300;
    font-size: 25px;
    line-height: 40px;
    letter-spacing: 0.02em;
    color: #4a5568;
  }

  ul {
    margin-top: 20px;
    margin-bottom: 10px;
  }

  li {
    font-style: normal;
    font-weight: 300;
    font-size: 20px;
    line-height: 40px;
    letter-spacing: 0.02em;
    color: #4a5568;
  }

  strong {
    font-weight: bold;
  }
`;

const PrivacyPage = () => {
  return (
    <>
      <Navbar navColor='dark' />
      <main>
        <ContentContainer>
          <p className='title'>Privacy Policy</p>
          <p>
            Tuum Technologies, Inc. (“Tuum”) has made every effort to provide
            accurate information; however, errors or omissions may occur. Tuum
            and expressly disclaims, and will take no responsibility, for any
            errors, omissions or for the results obtained from using the
            information provided in this website or through any correspondence
            through its domain, emails, newsletters, content distribution
            platforms or similar mediums. All information on this website or
            sent through any medium is provided "as is," with no express or
            implied warranties.
            <br />
            Tuum deeply respects your concerns for privacy, and understands that
            crypto-currency and its community is built around security and
            privacy. Therefore, this privacy policy (“Privacy Policy”) describes
            the type of information we collect, how we use this information and
            whom we share it. Based on the community services we provide and in
            accordance with the EU General Data Protection Regulation (“GDPR”),
            we may be deemed both a data processor and a data collector. The
            phrase “personal information” refers to information by which you or
            the device you are using to connect to the Internet can be
            identified. If at any point you have any questions regarding this
            Privacy Policy please contact us via email at the address listed in
            Section 10. Contact Information.
          </p>

          <section id='purpose'>
            <p className='sectionTitle'>
              1. PURPOSE, USE AND PROCESSING OF YOUR PERSONAL INFORMATION.
            </p>
            <p>
              The vision for Tuum is to enable a global network of
              entrepreneurs, developers, academics, industry experts, and users
              to access the decentralized internet. Through our products and
              solutions we provide teams the resources necessary to build
              revolutionary applications and launch decentralized platforms.
              With that vision in mind, Tuum makes every effort to not use your
              personal information in the development of Tuum products.
              <br />
              In addition to our main vision statement, we may use your personal
              information, sometimes combined with non-personal information, in
              the following ways:
            </p>
            <ul>
              <li>To identify you when you visit our website.</li>
              <li>To identify you when you visit our website.</li>
              <li>
                To provide the products, information, and/or services you
                request.
              </li>
              <li>To improve and personalize your experience with us.</li>
              <li>To conduct analytics and solve problems.</li>
              <li>
                To respond to your inquiries related to development support,
                tasks, projects, employment, or other requests.
              </li>
              <li>
                To send marketing and promotional materials, including
                information relating to our platform, products, services,
                newsletters, or tips.
              </li>
              <li>In some instances, to provide you with advertisements.</li>
              <li>
                For internal administrative purposes, as well as to manage our
                relationship with you.
              </li>
            </ul>
          </section>

          <section id='types_of_information'>
            <p className='sectionTitle'>2. TYPES OF INFORMATION WE COLLECT.</p>
            <p>
              Personal Information means information that allows someone to
              identify or contact you. Non-personal information means
              information that does not directly identify you. We collect both
              types of information about you.
              <br />
              <br />
              The following provides examples of the types of data that we
              collect from you and how we use the information.
              <ContextTable />
              <br />
              <br />
              In addition to the information that we collect from you directly,
              we may also receive information about you from other sources,
              including third parties, business partners, our affiliates, or
              publicly available sources.
            </p>
          </section>

          <section id='personal_information'>
            <p className='sectionTitle'>3. SHARING OF PERSONAL INFORMATION.</p>
            <p>
              In addition to the specific situations discussed elsewhere in this
              policy, we disclose personal information in the following
              situations:
            </p>
            <ul>
              <li>
                <strong>Affiliates and Acquisitions.</strong> We may share your
                personal information with our corporate affiliates (e.g., parent
                company, sister companies, subsidiaries, joint ventures, or
                other companies under common control). If another company
                acquires our company, business, or our assets, we will also
                share your personal information with that company.
              </li>
              <li>
                <strong>Other Disclosures with Your Consent.</strong>
                We may ask if you would like us to share your information with
                other unaffiliated third parties who are not described elsewhere
                in this policy.
              </li>
              <li>
                <strong>Other Disclosures without Your Consent. </strong>
                We may disclose personal information in response to subpoenas,
                warrants, or court orders, in connection with any legal or
                regulatory process, or to comply with relevant laws. We may also
                share your personal information in order to establish or
                exercise our rights, to defend against a legal claim, to
                investigate, prevent, or take action associated with possible
                illegal activities, suspected fraud, safety of person or
                property, for audit purposes, or a violation of our policies.
              </li>
              <li>
                <strong>Service Providers.</strong>
                We may share your personal information with service providers.
                Among other things service providers may help us to administer
                our website, conduct surveys, mail communications, and provide
                technical support. These service providers may collect, store,
                analyze, or otherwise process information on our behalf.
              </li>
              <li>
                <strong>Advertising and Marketing. </strong>
                We may use any statements that you communicate to us through the
                website regarding Tuum or Elastos or any of our products and
                services for advertising or marketing purposes.
              </li>
            </ul>
          </section>

          <section id='your_choices'>
            <p className='sectionTitle'>4. YOUR CHOICES.</p>
            <p>
              You can make the following choices regarding your personal
              information:
            </p>
            <ul>
              <li>
                <strong>Changes to Your Personal Information.</strong> We rely
                on you to update and correct your personal information. Our
                website allows you to modify or delete your account profile. If
                you cannot remove or need help deleting your personal
                information, please contact us using the instructions described
                in Section 10. Contact Information.
              </li>
              <li>
                <strong>Deletion of Your Personal Information.</strong>
                Typically, we retain your personal information for the period
                necessary to fulfill the purposes outlined in this policy,
                unless a longer retention period is required or permitted by
                law. You may, however, request that we delete your personal
                information. All requests must be directed in writing to the
                Contact Information below. We may also decide to delete your
                data if we believe that the data is incomplete, inaccurate, or
                that our continued use and storage are contrary to our
                obligations to other individuals or third parties. When we
                delete personal information, it will be removed from our active
                database, but it may remain in archives where it is not
                practical or possible to delete it. In addition, we may keep
                your personal information as needed to comply with our legal
                obligations, resolve disputes, and/or enforce any of our
                agreements.
              </li>
              <li>
                <strong>Revocation of Consent. </strong>
                If you revoke your consent for the processing of personal
                information then we may no longer be able to provide you certain
                services. In some cases, we may limit or deny your request to
                revoke consent if the law permits or requires us to do so, if we
                are unable to adequately verify your identity, or if our
                processing is not based on your consent.
              </li>
              <li>
                <strong>Access to Your Personal information.</strong>
                If required by law, upon request, we will grant reasonable
                access to personal information that we hold about you. Please
                direct all requests using the instructions described in Section
                10. Contact Information.
              </li>
              <li>
                <strong>Online Tracking. </strong>
                We do not currently recognize automated browser signals
                regarding tracking mechanisms, which may include "Do Not Track"
                instructions.
              </li>
              <li>
                <strong> California Residents. </strong>
                California residents under California Civil Code Section 1798.83
                may be entitled to ask us for a notice describing what
                categories of personal information (if any) we share with third
                parties or affiliates for those parties to use for direct
                marketing. To submit your request, please email the address in
                the Contact Information section below with the subject line
                "California Privacy" and your request in the body of your email.
              </li>
              <li>
                <strong>Decline to Provide. </strong>
                You may choose not to provide some types of personal information
                to us. This choice may result in our websites or their
                functionality not working.
              </li>
              <li>
                <strong>Complaints. </strong>
                Complaints can be sent to us by way of email or letter using the
                instructions listed in Section 10. Contact Information. Some
                jurisdictions may also allow you to complain to a data
                protection authority as well.
              </li>
              <li>
                <strong>Rights under GDPR. </strong>
                In addition to the above, you may also exercise your rights
                under GDPR as stated in Section 5. European & GDPR Privacy
                Rights.
              </li>
            </ul>
          </section>

          <section id='european'>
            <p className='sectionTitle'>5. EUROPEAN & GDPR PRIVACY RIGHTS</p>
            <p>
              Under GDPR, in certain circumstances, you have the right to: (a)
              request access to any personal information we hold about you and
              related information, (b) obtain without undue delay the
              rectification of any inaccurate personal information, (c) request
              that your personal information is deleted or erased provided the
              personal information is not required by us for compliance with a
              legal obligation under European or Member State law or for the
              establishment, exercise or defense of a legal claim, (d) prevent
              or restrict processing of your personal information, except to the
              extent processing is required for the establishment, exercise or
              defense of legal claims; (e) object to the processing of your
              personal data, and (e) request transfer of your personal
              information directly to a third-party where this is technically
              feasible.
              <br />
              <br />
              You also have the right to complain to the ICO{' '}
              <a href='https://www.ico.org.uk'>(www.ico.org.uk)</a> if you feel
              there is a problem with the way we are handling your data.
              <br />
              <br />
              We handle subject access requests in accordance with GDPR. Further
              you may learn more about your rights by visiting{' '}
              <a href='https://www.ico.org.uk'>www.ico.org.uk</a>.
              <br />
              <br />
              You can exercise any of these rights by contacting us using the
              instructions described in Section 10. Contact Information.
            </p>
          </section>

          <section id='share'>
            <p className='sectionTitle'>
              6. WHAT ARE THE LEGAL GROUNDS FOR OUR PROCESSING OF YOUR PERSONAL
              INFORMATION (INCLUDING WHEN WE SHARE IT WITH OTHERS)?
            </p>
            <p>
              We rely on the following legal bases to use your personal data:
              (1) Consent, (2) Legal Obligation, or (3) Legitimate Interests.
              <br />
              <br />
              <p>
                <strong>Lawful basis: </strong>Consent
              </p>
              <p>
                <strong>The reason we use this basis: </strong>With your
                consent, we process information to provide you with the best
                possible Tuum experience. We may process information in
                accordance with Section 1. Purpose, Use and Processing of Your
                Personal Information. Types of Information we collect may vary
                as explained in Section 2. Types of Information We Collect. You
                can withdraw your consent at any time by contacting us in
                writing using the Contact Information below.
              </p>
              <p>
                <strong>Data retention period: </strong>We will continue to
                process your information under this basis until you withdraw
                consent or it is determined your consent no longer exists.
              </p>
              <p>
                <strong>Sharing your information: </strong>We do not share your
                information with third parties.
              </p>
              <br />
              <p>
                <strong>Lawful basis: </strong>Legal obligation
              </p>
              <p>
                <strong>The reason we use this basis: </strong>Tuum may rely on
                this lawful basis if we need to process your personal data to
                comply with a common law or statutory obligation.
              </p>
              <p>
                <strong>Data retention period: </strong>In accordance with local
                legislation and statutory obligation.
              </p>
              <p>
                <strong>Sharing your information: </strong>We do not share your
                information with third parties.
              </p>
              <br />
              <p>
                <strong>Lawful basis: </strong>Legitimate interests
              </p>
              <p>
                <strong>The reason we use this basis: </strong>We may process
                your information to provide you with the best Tuum experience.
                This includes but is not limited to, (a) fraud detection and
                prevention (crime prevention), (b) compliance with foreign law,
                law enforcement, court and regulatory bodies’ requirements, (c)
                industry watch-lists and industry self-regulatory schemes, (d)
                information, system, network and cyber security, (e) general
                corporate operations and due diligence, (f) website development
                and enhancement, and (g) communications, marketing and
                intelligence.
              </p>
              <p>
                <strong>Data retention period: </strong>We will continue to
                process your information under this basis until you withdraw
                consent or until it is determined that a legitimate interest no
                longer exists.
              </p>
              <p>
                <strong>Sharing your information: </strong>We do not share your
                information with third parties.
              </p>
            </p>
          </section>

          <section id='protect'>
            <p className='sectionTitle'>
              7. HOW WE PROTECT PERSONAL INFORMATION.
            </p>
            <p>
              No method of transmission over the Internet, or method of
              electronic storage, is fully secure. While we use reasonable
              efforts to protect your personal information from unauthorized
              access, use, or disclosure, we cannot guarantee the security of
              your personal information. In the event that we are required by
              law to inform you of any unauthorized access to your personal
              information we may notify you electronically, in writing, or by
              telephone, if permitted to do so by law.
              <br />
              <br />
              Our website may permit you to create an account. When you do you
              will be prompted to create a password or security words. You are
              responsible for maintaining the confidentiality of your password
              and security words, and you are responsible for any access to or
              use of your account by someone else that has obtained your
              password or security words, whether or not such access or use has
              been authorized by you. You should notify us of any unauthorized
              use of your password or account.
            </p>
          </section>

          <section id='cookie'>
            <p className='sectionTitle'>8. COOKIES AND OTHER WEB DEVICES.</p>
            <p>
              Our website can send its own cookie to your web browser if your
              browser's preferences allow it. Cookie settings can be controlled
              in your internet browser to automatically reject some forms of
              cookies. If you view our website without changing your cookie
              settings, you are indicating you consent to receive all cookies
              from the website. If you do not allow cookies, some features and
              functionality of our site may not operate as expected.
              <br />
              <br />
              Tuum may use Adobe Flash technology (including Flash Local Stored
              Objects "Flash LSOs") that allow Tuum to, among other things,
              serve you with more tailored information, facilitate your ongoing
              access to and use of the site, and collect and store information
              about your use of the site. Some of our websites or emails also
              use pixel tags, web beacons, clear GIFs, or other similar
              technologies to measure the success of marketing campaigns, and
              compile statistics about usage and response rates, and other
              purposes.
              <br />
              <br />
              Tuum may use other web devices to track website usage and views.
              Please address any questions or concerns about our cookie or web
              device usage using the instructions described in Section 10.
              Contact Information.
            </p>
          </section>

          <section id='miscellaneous'>
            <p className='sectionTitle'>9. MISCELLANEOUS.</p>
            <p>
              The following additional information relates to our privacy
              practices:
            </p>
            <ul>
              <li>
                <strong>Minors.</strong>Our websites are not for individuals
                under age 13 or deemed a minor in the jurisdiction in which you
                reside. Those individuals should not access a website or provide
                personal information to us.
              </li>
              <li>
                <strong>Transmission of Data to Other Countries.</strong>Your
                personal information may be processed in other countries (such
                as the United States), where privacy laws may be less stringent
                than the laws in your country and where the government, courts,
                or law enforcement of that country may be able to access it. By
                submitting your personal information to us you agree to the
                transfer, storage and processing of your information in those
                countries in accordance with applicable laws (ie. GDPR) and
                certain safeguards for such transfers shall be put in place.
              </li>
              <li>
                <strong>Third Party Applications/Websites.</strong>We have no
                control over the privacy practices of websites or applications
                that we do not own.
              </li>
              <li>
                <strong>Changes To This Privacy Policy.</strong>We may change
                our privacy policy and practices over time. To the extent that
                our policy changes in a material way, the policy that was in
                place at the time that you submitted personal information to us
                will generally govern that information.
              </li>
            </ul>
          </section>

          <section id='contact'>
            <p className='sectionTitle'>10. CONTACT INFORMATION.</p>
            <p>
              If you have any questions, comments, or complaints concerning our
              privacy practices please contact us at the appropriate email
              address below. We will respond to your requests in accordance with
              this Privacy Policy and in a reasonable time and manner. Please
              note that Tuum may elect not to respond to unreasonable or
              irrelevant requests.
              <br />
              <br />
              <strong>Data Protection Officer / Data Controller</strong>
              <br />
              Donald Bullers <br />
              Tuum Technologies, Inc. <br />
              4030 Wake Forest Road, STE 349
              <br />
              Raleigh, NC 27609
              <br />
              <a href='mailto: contact@tuum.tech'>contact@tuum.tech</a>
            </p>
          </section>

          <section id='no_affliation'>
            <p className='sectionTitle'>11. NO AFFILIATIONS.</p>
            <p>
              Tuum does not promote, endorse, nor is affiliated with any
              particular cryptocurrency, company or community. Tuum is its own
              separate legal entity and not related to any particular crypto
              company as a parent, subsidiary or affiliate entity, and has no
              liability whatsoever for the acts or omissions of any crypto
              company or community that it may work with directly or indirectly.
              All funding for Tuum by any company shall be considered a
              non-exempt tax donation unless it is specifically stated otherwise
              by Tuum.
              <br />
              <br />
              Thank you from all of us for being part of the Tuum community.
            </p>
          </section>
        </ContentContainer>
      </main>
      <Footer />
    </>
  );
};

export default PrivacyPage;
