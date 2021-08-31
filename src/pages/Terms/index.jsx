import React from 'react';
import styled from 'styled-components';

import { Navbar, Footer } from '../../components/layout';
import { ContentContainer } from '../Privacy';

const Intro = styled.div`
  text-align: center;
  color: #4a5568;
  padding: 30px;

  .intro1 {
    font-weight: normal;
    font-style: normal;
    font-size: 25px;
    line-height: 40px;
  }

  .intro2 {
    font-weight: 300;
    font-size: 20px;
    margin-top: 10px;
    margin-bottom: 10px;
  }

  .intro3 {
    font-size: 30px;
    line-height: 40px;
    font-style: italic;
  }
`;

const TermsAndService = () => {
  return (
    <>
      <Navbar navColor='dark' />
      <main>
        <ContentContainer>
          <Intro>
            <p className='intro1'>Terms & Conditions for Tuum Technologies</p>
            <p className='intro2'>
              Last Updated: 27 August 2021 <br />
              <span style={{ fontStyle: 'italic' }}>Site Covered: &nbsp;</span>
              <a href='https://tuum.tech'>https://tuum.tech</a>
            </p>
            <p className='intro3'>
              PLEASE READ THESE TERMS AND CONDITIONS CAREFULLY
            </p>
          </Intro>

          <p className='mt-5 mb-6'>
            <strong>THE AGREEMENT:</strong> The use of any website, platform,
            applications and services owned by Tuum Technologies, Inc.
            (hereinafter referred to as "Company") are subject to the following
            Terms & Conditions (hereinafter the "Agreement"), all parts and
            sub-parts of which are specifically incorporated by reference here.
            This Agreement shall govern the use of all pages on this website
            (hereinafter collectively referred to as "Website") and any services
            provided by or on this Website ("Services").
          </p>

          <section id='definition'>
            <p className='sectionTitle'>1) DEFINITIONS</p>
            <p>
              The parties referred to in this Agreement shall be defined as
              follows:
            </p>
            <p className='ml-5 mt-3'>
              a) Company, Us, We: The Company, as the creator, operator, and
              publisher of the Website, makes the Website, and certain Services
              on it, available to users. Tuum Technologies, Company, Us, We,
              Our, Ours and other first-person pronouns will refer to the
              Company, as well as all employees and affiliates of the Company.
              <br />
              <br />
              b) You, the User, the Client: You, as the user of the Website,
              will be referred to throughout this Agreement with second-person
              pronouns such as You, Your, Yours, or as User or Client.
              <br />
              <br />
              c) Parties: Collectively, the parties to this Agreement (the
              Company and You) will be referred to as Parties.
            </p>
          </section>

          <section id='assent'>
            <p className='sectionTitle'>2) ASSENT & ACCEPTANCE</p>
            <p>
              BY USING THE WEBSITE, YOU WARRANT THAT YOU HAVE READ AND REVIEWED
              THIS AGREEMENT AND THAT YOU AGREE TO BE BOUND BY IT. IF YOU DO NOT
              AGREE TO BE BOUND BY THIS AGREEMENT, PLEASE LEAVE THE WEBSITE
              IMMEDIATELY. THE COMPANY ONLY AGREES TO PROVIDE USE OF THIS
              WEBSITE AND SERVICES TO YOU IF YOU ASSENT TO THIS AGREEMENT.
            </p>
          </section>

          <section id='user_presentation'>
            <p className='sectionTitle'>
              3) USER REPRESENTATIONS & AGE RESTRICTION
            </p>
            <p>
              By using the Website, You represent and warrant that: (1) all
              registration information You submit will be true, accurate,
              current, and complete; (2) You will maintain the accuracy of such
              information and promptly update such registration information as
              necessary; (3) You have the legal capacity and You agree to comply
              with these Terms & Conditions; (4) You are not under the age of
              13; (5) not a minor in the jurisdiction in which you reside, or if
              a minor, You have received parental permission to use the Website;
              (6) You will not access the Website through automated or non-human
              means, whether through a bot, script or otherwise; (7) You will
              not use the Website for any illegal or unauthorized purpose; and
              (8) Your use of the Website will not violate any applicable law or
              regulation.
              <br />
              <br />
              If You provide any information that is untrue, inaccurate, not
              current, or incomplete, we have the right to suspend or terminate
              Your account and refuse any and all current or future use of the
              App (or any portion thereof).
            </p>
          </section>

          <section id='license'>
            <p className='sectionTitle'>4) LICENSE TO USE WEBSITE</p>
            <p>
              The Company may provide You with certain information as a result
              of Your use of the Website or Services. Such information may
              include, but is not limited to, documentation, data, or
              information developed by the Company, and other materials which
              may assist in Your use of the Website or Services ("Company
              Materials"). Subject to this Agreement, the Company grants You a
              non-exclusive, limited, non-transferable and revocable license to
              use the Company Materials solely in connection with Your use of
              the Website and Services. The Company Materials may not be used
              for any other purpose, and this license terminates upon Your
              cessation of use of the Website or Services or at the termination
              of this Agreement.
            </p>
          </section>

          <section id='intellectual'>
            <p className='sectionTitle'>5) INTELLECTUAL PROPERTY</p>
            <p>
              You agree that the Website and all Services provided by the
              Company are the property of the Company, including all copyrights,
              trademarks, trade secrets, patents, and other intellectual
              property ("Company IP"). You agree that the Company owns all
              right, title and interest in and to the Company IP and that You
              will not use the Company IP for any unlawful or infringing
              purpose. You agree not to reproduce or distribute the Company IP
              in any way, including electronically or via registration of any
              new trademarks, trade names, service marks or Uniform Resource
              Locators (URLs), without express written permission from the
              Company.
            </p>

            <p className='ml-5 mt-3'>
              a) In order to make the Website and Services available to You, You
              hereby grant the Company a royalty-free, non-exclusive, worldwide
              license to copy, display, use, broadcast, transmit and make
              derivative works of any content You publish, upload, or otherwise
              make available to the Website ("Your Content"). The Company claims
              no further proprietary rights in Your Content.
              <br />
              <br />
              b) If You feel that any of Your intellectual property rights have
              been infringed or otherwise violated by the posting of information
              or media by another of Our users, please contact Us and let Us
              know.
            </p>
          </section>

          <section id='obligation'>
            <p className='sectionTitle'>6) USER OBLIGATIONS</p>
            <p>
              As a user of the Website or Services, You may be asked to register
              with Us. When You do so, You will choose a user identifier, which
              may be Your email address or another term, as well as a password.
              You may also provide personal information, including, but not
              limited to, Your name. You are responsible for ensuring the
              accuracy of this information. This identifying information will
              enable You to use the Website and Services. You must not share
              such identifying information with any third party, and if You
              discover that Your identifying information has been compromised,
              You agree to notify Us immediately in writing. Email notification
              will suffice. You are responsible for maintaining the safety and
              security of Your identifying information as well as keeping Us
              apprised of any changes to Your identifying information. Providing
              false or inaccurate information, or using the Website or Services
              to further fraud or unlawful activity is grounds for immediate
              termination of this Agreement.
            </p>
          </section>

          <section id='acceptable'>
            <p className='sectionTitle'>7) ACCEPTABLE USE</p>
            <p>
              You agree not to use the Website or Services for any unlawful
              purpose or any purpose prohibited under this clause. You agree not
              to use the Website or Services in any way that could damage the
              Website, Services, or general business of the Company.
            </p>
            <p className='ml-5 mt-3'>
              a) You further agree not to use the Website or Services:
              <p className='ml-5 mt-3'>
                I) To harass, abuse, or threaten others or otherwise violate any
                person's legal rights;
                <br />
                II) To violate any intellectual property rights of the Company
                or any third party;
                <br />
                III) To upload or otherwise disseminate any computer viruses or
                other software that may damage the property of another;
                <br />
                IV) To perpetrate any fraud;
                <br />
                V) To engage in or create any unlawful gambling, sweepstakes, or
                pyramid scheme;
                <br />
                VI) To publish or distribute any obscene or defamatory material;
                <br />
                VII) To publish or distribute any material that incites
                violence, hate, or discrimination towards any group;
                <br />
                VIII) To unlawfully gather information about others.
              </p>
            </p>
          </section>

          <section id='privacy_info'>
            <p className='sectionTitle'>8) PRIVACY INFORMATION</p>
            <p>
              FOR ALL PRIVACY RELATED INFORMATION (INCLUDING COOKIES) PLEASE
              REFER TO OUR PRIVACY POLICY LOCATED AT: &nbsp;
              <a href='https://tuum.tech/privacy-policy/'>
                https://tuum.tech/privacy-policy/
              </a>
            </p>
          </section>

          <section id='assumption_of_risk'>
            <p className='sectionTitle'>9) ASSUMPTION OF RISK & DISCLAIMER</p>
            <p>
              The Website and Services are provided for communication purposes
              only. You acknowledge and agree that any information posted on Our
              Website is not intended to be legal advice, medical advice, or
              financial advice, and no fiduciary relationship has been created
              between You and the Company. You further agree that Your purchase
              of any of the products on the Website is at Your own risk. The
              Company does not assume responsibility or liability for any advice
              or other information given on the Website.
              <br />
              <br />
              Further, the Company has made every effort to provide accurate
              information; however, errors or omissions may occur. The Company
              expressly disclaims, and will take no responsibility, for any
              errors, omissions or for the results obtained from using the
              information provided in this Website or through any correspondence
              through its domain, emails, newsletters, content distribution
              platforms or similar mediums. All information on this Website or
              sent through any medium is provided "as is," with no express or
              implied warranties.
            </p>
          </section>

          <section id='sales'>
            <p className='sectionTitle'>10) SALES</p>
            <p>
              The Company may elect to sell goods or services or allow third
              parties to sell goods or services on the Website. The Company
              undertakes to be as accurate as possible with all information
              regarding the goods and services, including product descriptions
              and images. However, the Company does not guarantee the accuracy
              or reliability of any product information, and You acknowledge and
              agree that You purchase such products at Your own risk. For goods
              or services sold by others, the Company assumes no liability for
              any product and cannot make any warranties about the
              merchantability, fitness, quality, safety or legality of these
              products. For any claim You may have against the manufacturer or
              seller of the product, You agree to pursue that claim directly
              with the manufacturer or seller and not with the Company. You
              hereby release the Company from any claims related to goods or
              services manufactured or sold by third parties, including any and
              all warranty or product liability claims.
            </p>
          </section>

          <section id='reverse_engineering'>
            <p className='sectionTitle'>11) REVERSE ENGINEERING & SECURITY</p>
            <p>
              You agree not to undertake any of the following actions:
              <p className='ml-5 mt-3'>
                a) Reverse engineer, or attempt to reverse engineer or
                disassemble any code or software from or on the Website or
                Services;
                <br />
                <br />
                b) Violate the security of the Website or Services through any
                unauthorized access, circumvention of encryption or other
                security tools, data mining or interference to any host, user or
                network.
              </p>
            </p>
          </section>

          <section id='data_loss'>
            <p className='sectionTitle'>12) DATA LOSS</p>
            <p>
              The Company does not accept responsibility for the security of
              Your account or content. You agree that Your use of the Website or
              Services is at Your own risk.
            </p>
          </section>

          <section id='indemnification'>
            <p className='sectionTitle'>13) INDEMNIFICATION</p>
            <p>
              You agree to defend and indemnify the Company and any of its
              affiliates (if applicable) and hold Us harmless against any and
              all legal claims and demands, including reasonable attorney's
              fees, which may arise from or relate to Your use or misuse of the
              Website or Services, Your breach of this Agreement, or Your
              conduct or actions. You agree that the Company shall be able to
              select its own legal counsel and may participate in its own
              defense, if the Company wishes.
            </p>
          </section>

          <section id='spam_policy'>
            <p className='sectionTitle'>14) SPAM POLICY</p>
            <p>
              You are strictly prohibited from using the Website or any of the
              Company's Services for illegal spam activities, including
              gathering email addresses and personal information from others or
              sending any mass commercial emails.
            </p>
          </section>

          <section id='third_party'>
            <p className='sectionTitle'>15) THIRD-PARTY LINKS & CONTENT</p>
            <p>
              The Company may occasionally post links to third party websites or
              other services. You agree that the Company is not responsible or
              liable for any loss or damage caused as a result of Your use of
              any third party services linked to from Our Website.
            </p>
          </section>

          <section id='modification_variation'>
            <p className='sectionTitle'>16) MODIFICATION & VARIATION</p>
            <p>
              The Company may, from time to time and at any time without notice
              to You, modify this Agreement. You agree that the Company has the
              right to modify this Agreement or revise anything contained
              herein. You further agree that all modifications to this Agreement
              are in full force and effect immediately upon posting on the
              Website and that modifications or variations will replace any
              prior version of this Agreement, unless prior versions are
              specifically referred to or incorporated into the latest
              modification or variation of this Agreement.
            </p>
            <p className='ml-5 mt-3'>
              a) To the extent any part or sub-part of this Agreement is held
              ineffective or invalid by any court of law, You agree that the
              prior, effective version of this Agreement shall be considered
              enforceable and valid to the fullest extent.
              <br />
              <br />
              b) You agree to routinely monitor this Agreement and refer to the
              Effective Date posted at the top of this Agreement to note
              modifications or variations. You further agree to clear Your cache
              when doing so to avoid accessing a prior version of this
              Agreement. You agree that Your continued use of the Website after
              any modifications to this Agreement is a manifestation of Your
              continued assent to this Agreement.
              <br />
              <br />
              c) In the event that You fail to monitor any modifications to or
              variations of this Agreement, You agree that such failure shall be
              considered an affirmative waiver of Your right to review the
              modified Agreement.
            </p>
          </section>

          <section id='entire_aggrement'>
            <p className='sectionTitle'>17) ENTIRE AGREEMENT</p>
            <p>
              This Agreement constitutes the entire understanding between the
              Parties with respect to any and all use of this Website. This
              Agreement supersedes and replaces all prior or contemporaneous
              agreements or understandings, written or oral, regarding the use
              of this Website.
            </p>
          </section>

          <section id='service_interruption'>
            <p className='sectionTitle'>18) SERVICE INTERRUPTIONS</p>
            <p>
              The Company may need to interrupt Your access to the Website to
              perform maintenance or emergency services on a scheduled or
              unscheduled basis. You agree that Your access to the Website may
              be affected by unanticipated or unscheduled downtime, for any
              reason, but that the Company shall have no liability for any
              damage or loss caused as a result of such downtime.
            </p>
          </section>

          <section id='term_termination'>
            <p className='sectionTitle'>19) TERM, TERMINATION & SUSPENSION</p>
            <p>
              The Company may terminate this Agreement with You at any time for
              any reason, with or without cause. The Company specifically
              reserves the right to terminate this Agreement if You violate any
              of the terms outlined herein, including, but not limited to,
              violating the intellectual property rights of the Company or a
              third party, failing to comply with applicable laws or other legal
              obligations, and/or publishing or distributing illegal material.
              If You have registered for an account with Us, You may also
              terminate this Agreement at any time by contacting Us and
              requesting termination. At the termination of this Agreement, any
              provisions that would be expected to survive termination by their
              nature shall remain in full force and effect.
            </p>
          </section>

          <section id='no_warranties'>
            <p className='sectionTitle'>20) NO WARRANTIES</p>
            <p>
              You agree that Your use of the Website and Services is at Your
              sole and exclusive risk and that any Services provided by Us are
              on an "As Is" basis. The Company hereby expressly disclaims any
              and all express or implied warranties of any kind, including, but
              not limited to the implied warranty of fitness for a particular
              purpose and the implied warranty of merchantability. The Company
              makes no warranties that the Website or Services will meet Your
              needs or that the Website or Services will be uninterrupted,
              error-free, or secure. The Company also makes no warranties as to
              the reliability or accuracy of any information on the Website or
              obtained through the Services. You agree that any damage that may
              occur to You, through Your computer system, or as a result of loss
              of Your data from Your use of the Website or Services is Your sole
              responsibility and that the Company is not liable for any such
              damage or loss.
            </p>
          </section>

          <section id='limit_on_liability'>
            <p className='sectionTitle'>21) LIMITATION ON LIABILITY</p>
            <p>
              The Company is not liable for any damages that may occur to You as
              a result of Your use of the Website or Services, to the fullest
              extent permitted by law. The maximum liability of the Company
              arising from or relating to this Agreement is limited to the
              greater of one hundred ($100) US Dollars or the amount You paid to
              the Company in the last six (6) months. This section applies to
              any and all claims by You, including, but not limited to, lost
              profits or revenues, consequential or punitive damages,
              negligence, strict liability, fraud, or torts of any kind.
            </p>
          </section>

          <section id='no_affiliations'>
            <p className='sectionTitle'>22) NO AFFILIATIONS</p>
            <p>
              The Company does not promote, endorse, nor is affiliated with any
              particular cryptocurrency, company or community. The Company is
              its own separate legal entity and not related to any particular
              crypto company as a parent, subsidiary or affiliate entity, and
              has no liability whatsoever for the acts or omissions of any
              crypto company or community that it may work with directly or
              indirectly. Moreover, the Company has no involvement in the
              selection process or business decisions as it relates to selecting
              or funding proposals for developers.
            </p>
          </section>

          <section id='tax_treatment'>
            <p className='sectionTitle'>23) TAX TREATMENT AND ACCOUNTING</p>
            <p>
              The Company will never provide advice on payments or taxation as
              it relates to receiving any form of payment in tokens, coins or
              other form of currency (“Payment”) for developer services, and
              further, any developer that may receive a Payment from a crypto
              company or community shall and will assume any and all liabilities
              and risks related to receiving Payments and taxable income.
              Developers are expected to adhere to, and shall follow, all
              applicable international, federal, state and/or local regulations,
              guidelines and laws as it relates to reporting taxable income.
              Further, the Company is not involved in, or never will be, in the
              business of promoting investments, ICOs, token offerings, or any
              type of sale of a cryptocurrency.
              <br />
              <br />
              The Company does not endorse or rate any cryptocurrencies listed
              or mentioned on our website, nor do we encourage our developers to
              invest in any particular cryptocurrency. Holding cryptocurrency is
              considered a high-risk activity and the Company strongly
              encourages all developers to perform due diligence before
              considering developing or receiving a Payment from a particular
              crypto/blockchain company or community.
              <br />
              <br />
              All transactions received and sent by the Company to developers
              may be subject to the tax laws and regulations in any applicable
              jurisdictions. The tax treatment and accounting of transactions in
              relation to crypto payments are uncertain and a largely untested
              area of law and practice that is subject to prospective and
              retroactive changes without notice. Tax treatment of cryptographic
              tokens and cryptocurrencies may vary amongst jurisdictions.
              <br />
              <br />
              Your participation in developing and receiving crypto payments in
              connection with any purchase, grant, delivery, exercise, vesting,
              distribution, activation, holding, use, appreciation, conversion,
              sale, exchange, redemption, assignment, transfer, disposal, may
              attract taxes either now or in the future.
              <br />
              <br />
              The Company may receive formal or informal queries, notices,
              requests, or summons from tax authorities, and as a result, the
              Company may be required to furnish certain information about your
              Payment from services rendered to a crypto company or community.
              You must seek independent professional advice on the tax
              implications in relation to receiving and sending payments, use of
              the website and/or any other transactions for your particular
              situation.
            </p>
          </section>

          <section id='loss_of_private_keys'>
            <p className='sectionTitle'>24) LOSS OF PRIVATE KEYS</p>
            <p>
              You alone are responsible for securing your private keys and you
              expressly release the Company from any and all liability as it
              relates to the loss of private keys. Losing control of your
              private key will permanently and irreversibly deny you access to
              any coins or tokens sent to your public address. Neither the
              Company nor any other person will be able to retrieve or protect
              your coins or tokens if you lose your private keys. Once lost, you
              will not be able to transfer your coins or tokens to any other
              address or wallet. You will not be able to realize any value or
              utility that the coins or tokens may hold now or in future.
            </p>
          </section>

          <section id='general_provision'>
            <p className='sectionTitle'>25) GENERAL PROVISIONS:</p>
            <p className='ml-5 mt-3'>
              <p>
                <strong>a) LANGUAGE: </strong> All communications made or
                notices given pursuant to this Agreement shall be in the English
                language.
              </p>
              <br />
              <p>
                <strong>b) JURISDICTION, VENUE & CHOICE OF LAW: </strong>Through
                Your use of the Website or Services, You agree that the laws of
                the State of North Carolina shall govern any matter or dispute
                relating to or arising out of this Agreement, as well as any
                dispute of any kind that may arise between You and the Company,
                with the exception of its conflict of law provisions. In case
                any litigation specifically permitted under this Agreement is
                initiated, the Parties agree to submit to the personal
                jurisdiction of the state and federal courts of the following
                county: New Hanover, North Carolina. The Parties agree that this
                choice of law, venue, and jurisdiction provision is not
                permissive, but rather mandatory in nature. You hereby waive the
                right to any objection of venue, including assertion of the
                doctrine of forum non conveniens or similar doctrine.
              </p>
              <br />
              <p>
                <strong>c) ARBITRATION: </strong>In case of a dispute between
                the Parties relating to or arising out of this Agreement, the
                Parties shall first attempt to resolve the dispute personally
                and in good faith. If these personal resolution attempts fail,
                the Parties shall then submit the dispute to binding
                arbitration. The arbitration shall be conducted in the following
                county: New Hanover. The arbitration shall be conducted by a
                single arbitrator, and such arbitrator shall have no authority
                to add Parties, vary the provisions of this Agreement, award
                punitive damages, or certify a class. The arbitrator shall be
                bound by applicable and governing Federal law as well as the law
                of the following state: North Carolina. Each Party shall pay
                their own costs and fees. Claims necessitating arbitration under
                this section include, but are not limited to: contract claims,
                tort claims, claims based on Federal and state law, and claims
                based on local laws, ordinances, statutes or regulations.
                Intellectual property claims by the Company will not be subject
                to arbitration and may, as an exception to this sub-part, be
                litigated. The Parties, in agreement with this sub-part of this
                Agreement, waive any rights they may have to a jury trial in
                regard to arbitral claims.
              </p>
              <br />
              <p>
                <strong>d) ASSIGNMENT: </strong>This Agreement, or the rights
                granted hereunder, may not be assigned, sold, leased or
                otherwise transferred in whole or part by You. Should this
                Agreement, or the rights granted hereunder, by assigned, sold,
                leased or otherwise transferred by the Company, the rights and
                liabilities of the Company will bind and inure to any assignees,
                administrators, successors, and executors.
              </p>
              <br />
              <p>
                <strong>e) SEVERABILITY: </strong>If any part or sub-part of
                this Agreement is held invalid or unenforceable by a court of
                law or competent arbitrator, the remaining parts and sub-parts
                will be enforced to the maximum extent possible. In such
                condition, the remainder of this Agreement shall continue in
                full force.
              </p>
              <br />
              <p>
                <strong>f) NO WAIVER: </strong>In the event that We fail to
                enforce any provision of this Agreement, this shall not
                constitute a waiver of any future enforcement of that provision
                or of any other provision. Waiver of any part or sub-part of
                this Agreement will not constitute a waiver of any other part or
                sub-part.
              </p>
              <br />
              <p>
                <strong>g) HEADINGS FOR CONVENIENCE ONLY: </strong>Headings of
                parts and sub-parts under this Agreement are for convenience and
                organization, only. Headings shall not affect the meaning of any
                provisions of this Agreement.
              </p>
              <br />
              <p>
                <strong>h) NO AGENCY, PARTNERSHIP OR JOINT VENTURE: </strong>No
                agency, partnership, or joint venture has been created between
                the Parties as a result of this Agreement. No Party has any
                authority to bind the other to third parties.
              </p>
              <br />
              <p>
                <strong>i) FORCE MAJEURE: </strong>The Company is not liable for
                any failure to perform due to causes beyond its reasonable
                control including, but not limited to, acts of God, acts of
                civil authorities, acts of military authorities, riots,
                embargoes, acts of nature and natural disasters, and other acts
                which may be due to unforeseen circumstances.
              </p>
              <br />
              <p>
                <strong>j) ELECTRONIC COMMUNICATIONS PERMITTED: </strong>
                Electronic communications are permitted to both Parties under
                this Agreement, including e-mail or fax. For any questions or
                concerns, please email Us at the following address:
                contact@tuum.tech.
              </p>
              <br />
              <p>
                <strong>k) CONTACT US </strong>
                <br />
                In order to resolve a complaint regarding the Website or to
                receive further information regarding use of the Website, please
                contact us at:
                <br />
                <br />
                Tuum Technologies, Inc.
                <br />
                4030 Wake Forest Road, STE 349
                <br />
                Raleigh, NC 27609
                <br />
                <a href='mailto: contact@tuum.tech'>contact@tuum.tech</a>
              </p>
            </p>
          </section>
        </ContentContainer>
      </main>
      <Footer />
    </>
  );
};

export default TermsAndService;
