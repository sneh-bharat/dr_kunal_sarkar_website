import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SiteScripts from "@/components/SiteScripts";
import LegalTOC from "@/components/LegalTOC";

const sections = [
  { id: "nature-of-platform", label: "1. Nature of This Platform and Identity of Operator" },
  { id: "no-doctor-patient-relationship", label: "2. No Doctor-Patient Relationship" },
  { id: "no-warranties", label: "3. Educational Content — No Warranties or Guarantees" },
  { id: "assumption-of-risk", label: "4. User's Assumption of Risk and Personal Responsibility" },
  { id: "limitation-of-liability", label: "5. Limitation of Liability" },
  { id: "third-party-links", label: "6. Third-Party Links, Products, and Services" },
  { id: "supplement-info", label: "7. Supplement and Nutrition Information" },
  { id: "intellectual-property", label: "8. Intellectual Property Rights" },
  { id: "user-conduct", label: "9. User Conduct and Prohibited Activities" },
  { id: "governing-law", label: "10. Governing Law and Dispute Resolution" },
  { id: "severability", label: "11. Severability" },
  { id: "amendments", label: "12. Amendments" },
  { id: "contact-grievance", label: "13. Contact and Grievance Officer" },
];

export const metadata = {
  title: "Disclaimer & Terms of Use — Dr. Kunal Sarkar",
  description:
    "Disclaimer and Terms of Use governing the educational content and platforms operated by Dr. Kunal Sarkar.",
  robots: { index: false, follow: true },
};

export default function DisclaimerPage() {
  return (
    <>
      <Header active="legal" />

      <main>
        {/* ===================== HEADER ===================== */}
        <section className="bg-white py-10">
          <div className="mx-auto max-w-[1280px] px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mx-auto text-center reveal reveal-up">
              <p className="text-teal font-700 text-[13px] tracking-[0.2em] uppercase mb-3">
                Legal
              </p>
              <h1 className="font-heading font-700 text-navy text-[30px] sm:text-[42px] leading-tight tracking-tight">
                Disclaimer <span className="text-teal">&amp; Terms of Use</span>
              </h1>
              <p className="mt-4 text-[15px] leading-relaxed text-ink">
                Effective Date: August 2, 2026
              </p>
              <p className="mt-2 text-[13px] leading-relaxed text-ink/70">
                Governed by: Information Technology Act, 2000 · Consumer
                Protection Act, 2019 · Indian Contract Act, 1872 · Indian
                Penal Code, 1860 · Copyright Act, 1957 · Trade Marks Act,
                1999 · Indian Medical Council Act, 1956 · Drugs &amp; Magic
                Remedies (Objectionable Advertisements) Act, 1954 · Digital
                Personal Data Protection Act, 2023 · Specific Relief Act,
                1963
              </p>
            </div>
          </div>
        </section>

        {/* ===================== CONTENT ===================== */}
        <section className="bg-white pb-16 sm:pb-20">
          <div className="mx-auto max-w-[1280px] px-4 sm:px-6 lg:px-8">
          <div className="lg:grid lg:grid-cols-[240px_1fr] lg:gap-24">
          <LegalTOC sections={sections} />
          <div className="max-w-3xl space-y-8 text-justify">

            <div>
              <h2 id="nature-of-platform" className="scroll-mt-24 font-heading font-700 text-navy text-[20px] mb-2">
                1. Nature of This Platform and Identity of Operator
              </h2>
              <p className="text-[15px] leading-relaxed text-ink">
                This website, mobile application, and all associated digital
                platforms (collectively, the &quot;Platform&quot;) are
                operated by or under the authority of Dr. Kunal Sarkar
                and/or his authorised entities (&quot;Dr. Sarkar&quot;,
                &quot;we&quot;, &quot;us&quot;, &quot;our&quot;). The
                Platform represents the educational and informational brand
                of Dr. Kunal Sarkar and operates independently and
                separately from his formal medical practice, clinical
                establishment, or any registered clinical care setting.
              </p>
              <p className="mt-3 text-[15px] leading-relaxed text-ink">
                By accessing or using this Platform, you (&quot;User&quot;,
                &quot;you&quot;) unconditionally agree to these Terms of Use
                (&quot;Terms&quot;), which constitute a legally binding
                agreement under the Indian Contract Act, 1872. If you do not
                agree to these Terms in their entirety, you must immediately
                discontinue use of this Platform.
              </p>
            </div>

            <div>
              <h2 id="no-doctor-patient-relationship" className="scroll-mt-24 font-heading font-700 text-navy text-[20px] mb-2">
                2. No Doctor-Patient Relationship
              </h2>
              <div className="rounded-xl border border-teal/25 bg-teal-50 p-5">
                <p className="text-[15px] leading-relaxed text-ink">
                  The content published on this Platform, including health
                  protocols, diet plans, wellness guidance, supplement
                  information, articles, videos, podcasts, and any other
                  material (collectively, &quot;Content&quot;), is provided
                  solely for general educational and informational
                  purposes. Nothing on this Platform constitutes, or shall
                  be construed to constitute, medical advice, clinical
                  diagnosis, professional medical opinion, or medical
                  treatment of any kind.
                </p>
                <p className="mt-3 text-[15px] leading-relaxed text-ink">
                  Use of this Platform does not create, and is not intended
                  to create, a doctor-patient relationship,
                  physician-patient relationship, or any other professional
                  relationship between Dr. Kunal Sarkar and the User. The
                  duties, obligations, and liabilities arising from a
                  registered doctor-patient relationship under the Indian
                  Medical Council Act, 1956, and the regulations and code of
                  ethics issued by the National Medical Commission
                  (&quot;NMC&quot;) shall not arise from mere use of this
                  Platform.
                </p>
                <p className="mt-3 text-[15px] leading-relaxed text-ink">
                  You are strongly advised to consult a duly licensed,
                  registered medical practitioner before commencing,
                  modifying, or discontinuing any health, nutrition,
                  dietary, or lifestyle programme, including any protocol
                  referenced on this Platform. Individual medical
                  circumstances vary, and protocols suitable for one
                  individual may be inappropriate or harmful to another.
                </p>
              </div>
            </div>

            <div>
              <h2 id="no-warranties" className="scroll-mt-24 font-heading font-700 text-navy text-[20px] mb-2">
                3. Educational Content — No Warranties or Guarantees
              </h2>
              <p className="text-[15px] leading-relaxed text-ink">
                All Content on this Platform is provided on an &quot;as
                is&quot; and &quot;as available&quot; basis, without any
                representation, warranty, or guarantee of any kind, whether
                express or implied, including but not limited to implied
                warranties of merchantability, fitness for a particular
                purpose, accuracy, completeness, timeliness, or
                non-infringement.
              </p>
              <p className="mt-3 text-[15px] leading-relaxed text-ink">
                Dr. Sarkar expressly disclaims all warranties to the fullest
                extent permitted under the Consumer Protection Act, 2019,
                and the Information Technology Act, 2000. Results and
                outcomes from following any health protocol or
                recommendation featured on this Platform may vary
                significantly from person to person, and no specific health
                outcome is guaranteed or implied.
              </p>
              <p className="mt-3 text-[15px] leading-relaxed text-ink">
                Nothing on this Platform shall constitute an advertisement
                or solicitation in violation of the Drugs &amp; Magic
                Remedies (Objectionable Advertisements) Act, 1954, or the
                Guidelines for Prevention of Misleading Advertisements and
                Endorsements for Misleading Advertisements, 2022 issued
                under the Consumer Protection Act, 2019.
              </p>
            </div>

            <div>
              <h2 id="assumption-of-risk" className="scroll-mt-24 font-heading font-700 text-navy text-[20px] mb-2">
                4. User&apos;s Assumption of Risk and Personal Responsibility
              </h2>
              <p className="text-[15px] leading-relaxed text-ink">
                By using this Platform and engaging with any Content, you
                expressly acknowledge, accept, and agree that:
              </p>
              <ul className="mt-2 space-y-2 text-[15px] leading-relaxed text-ink list-disc pl-5">
                <li>
                  (a) You are solely and exclusively responsible for all
                  health, dietary, lifestyle, and medical decisions you make
                  in connection with or reliance upon the Content of this
                  Platform.
                </li>
                <li>
                  (b) You assume all risks associated with implementing any
                  health protocol, dietary change, supplement use, or
                  wellness practice referenced on or linked from this
                  Platform.
                </li>
                <li>
                  (c) You have independently verified the suitability of
                  any health-related information for your specific medical
                  condition and circumstances, with the assistance of a
                  qualified medical professional.
                </li>
                <li>
                  (d) Certain practices, protocols, or recommendations may
                  be unsafe, unsuitable, or contraindicated for individuals
                  with pre-existing medical conditions, pregnant or nursing
                  women, minors, elderly persons, or immunocompromised
                  individuals.
                </li>
              </ul>
              <p className="mt-3 text-[15px] leading-relaxed text-ink">
                This assumption of risk and personal responsibility forms a
                material part of the agreement between you and Dr. Sarkar,
                and constitutes lawful consideration under the Indian
                Contract Act, 1872.
              </p>
            </div>

            <div>
              <h2 id="limitation-of-liability" className="scroll-mt-24 font-heading font-700 text-navy text-[20px] mb-2">
                5. Limitation of Liability
              </h2>
              <p className="text-[15px] leading-relaxed text-ink">
                To the fullest extent permissible under applicable Indian
                law, Dr. Kunal Sarkar, his authorised entities, employees,
                associates, contributors, and agents (collectively,
                &quot;Protected Parties&quot;) expressly disclaim and shall
                not be liable for:
              </p>
              <ul className="mt-2 space-y-2 text-[15px] leading-relaxed text-ink list-disc pl-5">
                <li>
                  (a) Any direct, indirect, incidental, consequential,
                  special, exemplary, or punitive loss or damage of any
                  nature whatsoever, including but not limited to personal
                  injury, bodily harm, aggravation of a pre-existing medical
                  condition, loss of profits, loss of data, loss of
                  goodwill, or economic loss;
                </li>
                <li>
                  (b) Any adverse effects, health complications, or
                  outcomes arising from the use of, reliance upon, or
                  implementation of any Content, protocol, product
                  recommendation, or supplement information featured on
                  this Platform;
                </li>
                <li>
                  (c) Any interruption, suspension, delay, or unavailability
                  of the Platform or its Content.
                </li>
              </ul>
              <p className="mt-3 text-[15px] leading-relaxed text-ink">
                Nothing in this clause shall operate to exclude or restrict
                liability for death or personal injury caused by the gross
                negligence or wilful misconduct of Dr. Sarkar in the direct
                provision of regulated medical services, to the extent that
                such exclusion is not permitted by law.
              </p>
              <p className="mt-3 text-[15px] leading-relaxed text-ink">
                Where liability cannot be fully excluded under the Consumer
                Protection Act, 2019, or any other statute, it shall be
                limited to the amount, if any, paid by the User for the
                specific product or service giving rise to the claim.
              </p>
            </div>

            <div>
              <h2 id="third-party-links" className="scroll-mt-24 font-heading font-700 text-navy text-[20px] mb-2">
                6. Third-Party Links, Products, and Services
              </h2>
              <p className="text-[15px] leading-relaxed text-ink">
                This Platform may contain links, references, or
                recommendations relating to third-party websites, products,
                services, or resources. Such links and references are
                provided for convenience and general informational purposes
                only and do not constitute an endorsement, approval,
                sponsorship, or affiliation with any third party.
              </p>
              <p className="mt-3 text-[15px] leading-relaxed text-ink">
                Dr. Sarkar and the Protected Parties expressly disclaim all
                responsibility and liability for the accuracy, completeness,
                legality, safety, suitability, availability, quality, or
                outcomes associated with any third-party resource, product,
                or service accessed through this Platform. Users access
                third-party links at their own risk.
              </p>
              <p className="mt-3 text-[15px] leading-relaxed text-ink">
                Any commercial transaction entered into by a User with a
                third-party service or product provider is solely between
                the User and that provider. Dr. Sarkar shall have no
                liability in respect of any such transaction under the Sale
                of Goods Act, 1930, the Consumer Protection Act, 2019, or
                any other applicable law.
              </p>
            </div>

            <div>
              <h2 id="supplement-info" className="scroll-mt-24 font-heading font-700 text-navy text-[20px] mb-2">
                7. Supplement and Nutrition Information
              </h2>
              <p className="text-[15px] leading-relaxed text-ink">
                Any information relating to dietary supplements,
                nutraceuticals, vitamins, minerals, or herbal products
                featured on this Platform is provided for general
                educational purposes only. Such information does not
                constitute a prescription, clinical recommendation, or
                endorsement. All supplement-related decisions should be
                made in consultation with a licensed medical practitioner or
                registered dietitian. Dr. Sarkar disclaims all liability for
                adverse effects, interactions, or complications arising from
                supplement use.
              </p>
              <p className="mt-3 text-[15px] leading-relaxed text-ink">
                Information regarding supplements is shared in compliance
                with the Food Safety and Standards Act, 2006, and the
                regulations framed thereunder by the Food Safety and
                Standards Authority of India (FSSAI). No claim on this
                Platform is intended to diagnose, treat, cure, or prevent
                any disease within the meaning of the Drugs and Cosmetics
                Act, 1940.
              </p>
            </div>

            <div>
              <h2 id="intellectual-property" className="scroll-mt-24 font-heading font-700 text-navy text-[20px] mb-2">
                8. Intellectual Property Rights
              </h2>
              <p className="text-[15px] leading-relaxed text-ink">
                All Content on this Platform, including but not limited to
                text, graphics, logos, images, audio-visual materials,
                health protocols, programme materials, and data
                compilations, are the exclusive intellectual property of Dr.
                Kunal Sarkar and are protected under the Copyright Act,
                1957, the Trade Marks Act, 1999, and all other applicable
                Indian and international intellectual property laws.
              </p>
              <p className="mt-3 text-[15px] leading-relaxed text-ink">
                Unauthorised reproduction, distribution, modification,
                creation of derivative works, commercial exploitation, or
                public communication of any Content without the prior
                written consent of Dr. Sarkar constitutes an infringement of
                intellectual property rights and may attract civil remedies
                under the Copyright Act, 1957, and criminal liability under
                Section 63 thereof, as well as liability under the
                Information Technology Act, 2000.
              </p>
            </div>

            <div>
              <h2 id="user-conduct" className="scroll-mt-24 font-heading font-700 text-navy text-[20px] mb-2">
                9. User Conduct and Prohibited Activities
              </h2>
              <p className="text-[15px] leading-relaxed text-ink">
                Users agree not to use this Platform for any purpose that is
                unlawful, fraudulent, harmful, or in violation of these
                Terms or any applicable Indian law. Without prejudice to the
                generality of the foregoing, Users shall not:
              </p>
              <ul className="mt-2 space-y-2 text-[15px] leading-relaxed text-ink list-disc pl-5">
                <li>
                  (a) Use the Platform in any manner that causes or may
                  cause damage to the Platform or impairs its availability
                  or accessibility;
                </li>
                <li>
                  (b) Upload, transmit, or distribute any content that is
                  defamatory, obscene, pornographic, hateful,
                  discriminatory, or in violation of any Indian law,
                  including the IT Act, 2000, or the Indian Penal Code,
                  1860;
                </li>
                <li>
                  (c) Attempt to gain unauthorised access to any part of
                  the Platform, its servers, or any data or systems
                  connected to it, which may constitute an offence under
                  Section 43 and Section 66 of the IT Act, 2000;
                </li>
                <li>
                  (d) Misrepresent any affiliation with Dr. Sarkar, or
                  impersonate him or any member of his team.
                </li>
              </ul>
            </div>

            <div>
              <h2 id="governing-law" className="scroll-mt-24 font-heading font-700 text-navy text-[20px] mb-2">
                10. Governing Law and Dispute Resolution
              </h2>
              <p className="text-[15px] leading-relaxed text-ink">
                These Terms shall be governed by and construed in
                accordance with the laws of the Republic of India, without
                regard to its conflict-of-law principles.
              </p>
              <p className="mt-3 text-[15px] leading-relaxed text-ink">
                In the event of any dispute, controversy, or claim arising
                out of or in connection with these Terms or the use of this
                Platform (&quot;Dispute&quot;), the parties shall first
                attempt to resolve such Dispute through good-faith
                negotiation within 15 (fifteen) days of written notice.
              </p>
              <p className="mt-3 text-[15px] leading-relaxed text-ink">
                If the Dispute is not resolved through negotiation, it
                shall be referred to mediation under the Mediation Act,
                2023. If mediation fails within 30 (thirty) days of
                commencement, the Dispute shall be finally settled by
                arbitration under the Arbitration and Conciliation Act, 1996
                (as amended), by a sole arbitrator mutually appointed by the
                parties. The seat and venue of arbitration shall be [Insert
                City], India, and proceedings shall be conducted in the
                English language.
              </p>
              <p className="mt-3 text-[15px] leading-relaxed text-ink">
                Subject to the above, the courts of competent jurisdiction
                at [Insert City], India shall have exclusive jurisdiction
                over any matter not subject to arbitration.
              </p>
            </div>

            <div>
              <h2 id="severability" className="scroll-mt-24 font-heading font-700 text-navy text-[20px] mb-2">
                11. Severability
              </h2>
              <p className="text-[15px] leading-relaxed text-ink">
                If any provision of these Terms is held to be invalid,
                unlawful, or unenforceable under any applicable Indian law,
                such provision shall be deemed modified to the minimum
                extent necessary to make it valid and enforceable, and the
                remaining provisions of these Terms shall continue in full
                force and effect.
              </p>
            </div>

            <div>
              <h2 id="amendments" className="scroll-mt-24 font-heading font-700 text-navy text-[20px] mb-2">
                12. Amendments
              </h2>
              <p className="text-[15px] leading-relaxed text-ink">
                Dr. Sarkar reserves the right to amend, update, or modify
                these Terms at any time without prior notice, subject to
                applicable law. The revised Terms will be effective from the
                date of publication on this Platform. Your continued use of
                the Platform following any amendment shall constitute your
                acceptance of the revised Terms.
              </p>
            </div>

            <div>
              <h2 id="contact-grievance" className="scroll-mt-24 font-heading font-700 text-navy text-[20px] mb-2">
                13. Contact and Grievance Officer
              </h2>
              <p className="text-[15px] leading-relaxed text-ink">
                For any queries, complaints, or concerns regarding these
                Terms or the Content on this Platform, please contact:
              </p>
              <div className="mt-3 rounded-xl bg-slate-50 ring-1 ring-slate-200/70 p-5 text-[15px] leading-relaxed text-ink space-y-1">
                <p>Dr. Kunal Sarkar</p>
                <p>Email: contactdrkunalsarkar@gmail.com</p>
                <p>Phone: +91 98310 30908</p>
                <p>Address: 42/1A, Harish Mukherjee Road, Bhowanipore, Kolkata – 700025, West Bengal, India</p>
              </div>
              <p className="mt-3 text-[15px] leading-relaxed text-ink">
                Grievances relating to personal data shall be addressed in
                accordance with the Digital Personal Data Protection Act,
                2023. All other complaints shall be addressed within 30
                days of receipt.
              </p>
            </div>

            <div className="pt-6 border-t border-slate-200 text-[15px] leading-relaxed text-ink">
              <p>Dr. Kunal Sarkar</p>
              <p>Chief Cardiac Surgeon &amp; Director, Manipal Hospitals — Cardiothoracic &amp; Vascular Surgeon</p>
              <p>Date: August 2, 2026</p>
            </div>
          </div>
          </div>
          </div>
        </section>
      </main>

      <Footer />

      <SiteScripts />
    </>
  );
}
