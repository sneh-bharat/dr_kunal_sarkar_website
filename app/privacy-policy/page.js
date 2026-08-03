import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SiteScripts from "@/components/SiteScripts";
import LegalTOC from "@/components/LegalTOC";

const sections = [
  { id: "introduction", label: "1. Introduction" },
  { id: "data-fiduciary", label: "2. Identity of Data Fiduciary / Controller" },
  { id: "information-we-collect", label: "3. Information We Collect" },
  { id: "purpose-and-legal-basis", label: "4. Purpose of Processing and Legal Basis" },
  { id: "sharing-and-disclosure", label: "5. Sharing and Disclosure of Information" },
  { id: "data-localisation", label: "6. Data Localisation and Cross-Border Transfers" },
  { id: "cookies", label: "7. Cookies and Tracking Technologies" },
  { id: "health-survey-research", label: "8. Health Survey and Research Data" },
  { id: "data-retention", label: "9. Data Retention" },
  { id: "your-rights", label: "10. Your Rights as a Data Principal" },
  { id: "childrens-privacy", label: "11. Children's Privacy" },
  { id: "data-security", label: "12. Data Security" },
  { id: "medical-disclaimer", label: "13. Medical Disclaimer and Limitation of Liability" },
  { id: "intellectual-property", label: "14. Intellectual Property Rights" },
  { id: "governing-law", label: "15. Governing Law and Dispute Resolution" },
  { id: "amendments", label: "16. Amendments to This Policy" },
  { id: "grievance-redressal", label: "17. Grievance Redressal Mechanism" },
];

export const metadata = {
  title: "Privacy Policy — Dr. Kunal Sarkar",
  description:
    "Privacy Policy governing all digital platforms and services operated by Dr. Kunal Sarkar.",
  robots: { index: false, follow: true },
};

export default function PrivacyPolicyPage() {
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
                Privacy Policy
              </h1>
              <p className="mt-4 text-[15px] leading-relaxed text-ink">
                Effective Date: August 2, 2026
              </p>
              <p className="mt-2 text-[13px] leading-relaxed text-ink/70">
                Governed by: Information Technology Act, 2000 · IT (Amendment)
                Act, 2008 · Digital Personal Data Protection Act, 2023 ·
                Consumer Protection Act, 2019 · Indian Contract Act, 1872 ·
                Indian Medical Council Act, 1956
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
              <h2 id="introduction" className="scroll-mt-24 font-heading font-700 text-navy text-[20px] mb-2">
                1. Introduction
              </h2>
              <p className="text-[15px] leading-relaxed text-ink">
                This Privacy Policy and Terms of Use (&quot;Policy&quot;)
                governs all interactions between users (&quot;you&quot;,
                &quot;User&quot;) and the digital platforms, websites, mobile
                applications, online consultations, health programmes, and
                related services operated by or under the authority of Dr.
                Kunal Sarkar (&quot;Dr. Sarkar&quot;, &quot;we&quot;,
                &quot;us&quot;, &quot;our&quot;). By accessing or using any
                service offered by Dr. Kunal Sarkar, you unconditionally
                agree to be bound by this Policy in its entirety.
              </p>
              <p className="mt-3 text-[15px] leading-relaxed text-ink">
                This Policy is published in accordance with Rule 3(1) of the
                Information Technology (Intermediaries Guidelines) Rules,
                2011, Rule 4 of the Information Technology (Reasonable
                Security Practices and Procedures and Sensitive Personal Data
                or Information) Rules, 2011 (&quot;SPDI Rules&quot;), and the
                provisions of the Digital Personal Data Protection Act, 2023
                (&quot;DPDPA&quot;). It constitutes a legally binding
                agreement under the Indian Contract Act, 1872.
              </p>
            </div>

            <div>
              <h2 id="data-fiduciary" className="scroll-mt-24 font-heading font-700 text-navy text-[20px] mb-2">
                2. Identity of Data Fiduciary / Controller
              </h2>
              <p className="text-[15px] leading-relaxed text-ink">
                For the purposes of the DPDPA, 2023 and the SPDI Rules, Dr.
                Kunal Sarkar (hereinafter &quot;Data Fiduciary&quot;) is the
                individual responsible for the collection, processing,
                storage, and use of all personal data submitted by Users. Dr.
                Sarkar operates as a licensed medical practitioner and health
                educator, and all data processing activities are carried out
                in the lawful exercise of his professional functions.
              </p>
              <div className="mt-3 rounded-xl bg-slate-50 ring-1 ring-slate-200/70 p-5 text-[15px] leading-relaxed text-ink space-y-1">
                <p className="font-700 text-navy">Contact and Grievance Officer:</p>
                <p>Dr. Kunal Sarkar</p>
                <p>Email: contactdrkunalsarkar@gmail.com</p>
                <p>Phone: +91 98310 30908</p>
                <p>Address: 42/1A, Harish Mukherjee Road, Bhowanipore, Kolkata – 700025, West Bengal, India</p>
              </div>
            </div>

            <div>
              <h2 id="information-we-collect" className="scroll-mt-24 font-heading font-700 text-navy text-[20px] mb-2">
                3. Information We Collect
              </h2>
              <p className="text-[15px] leading-relaxed text-ink">
                We may collect the following categories of data, classified
                as per the SPDI Rules and DPDPA:
              </p>
              <ul className="mt-2 space-y-2 text-[15px] leading-relaxed text-ink list-disc pl-5">
                <li>
                  <strong className="font-600">Personal Data:</strong> Name,
                  email address, residential/billing address, phone number,
                  date of birth, gender, and payment information when you
                  register, purchase, or subscribe to our services.
                </li>
                <li>
                  <strong className="font-600">Sensitive Personal Data or Information (SPDI):</strong>{" "}
                  Health records, medical history, symptoms, diagnostic
                  reports, lifestyle information, or any other health-related
                  information you voluntarily provide in consultations,
                  questionnaires, or health programmes. Collection of SPDI is
                  governed strictly under Rule 3 of the SPDI Rules and
                  requires your explicit written consent.
                </li>
                <li>
                  <strong className="font-600">Automatically Collected Data:</strong> IP address,
                  browser type, device identifiers, cookies, usage data, and
                  browsing behaviour collected through cookies and similar
                  technologies under the IT Act, 2000 and applicable rules.
                </li>
                <li>
                  <strong className="font-600">Aggregated / Anonymised Data:</strong> Non-identifiable,
                  aggregated statistics for research, analytics, and public
                  health education purposes.
                </li>
              </ul>
            </div>

            <div>
              <h2 id="purpose-and-legal-basis" className="scroll-mt-24 font-heading font-700 text-navy text-[20px] mb-2">
                4. Purpose of Processing and Legal Basis
              </h2>
              <p className="text-[15px] leading-relaxed text-ink">
                We process your data for the following purposes and rely on
                the following legal bases under Indian law:
              </p>
              <ul className="mt-2 space-y-2 text-[15px] leading-relaxed text-ink list-disc pl-5">
                <li>
                  <strong className="font-600">Contractual Necessity:</strong> To process appointments,
                  manage billing, deliver health programmes, and provide
                  customer support (Indian Contract Act, 1872; Consumer
                  Protection Act, 2019).
                </li>
                <li>
                  <strong className="font-600">Consent:</strong> To send newsletters, promotional
                  communications, health tips, and to collect and use SPDI
                  for research or educational purposes. Consent is obtained
                  explicitly and may be withdrawn at any time without
                  affecting prior lawful processing (DPDPA, 2023; SPDI
                  Rules, 2011).
                </li>
                <li>
                  <strong className="font-600">Legal Obligation:</strong> To comply with applicable
                  Indian laws, court orders, or directions from
                  regulatory/government authorities, including the Indian
                  Medical Council Act, 1956, and directions of the Medical
                  Council of India.
                </li>
                <li>
                  <strong className="font-600">Legitimate Interest:</strong> To operate, secure, and
                  improve our services, prevent fraud, and protect the
                  rights of Dr. Sarkar and his practice, where such interest
                  is not overridden by your fundamental rights under Article
                  21 of the Constitution of India.
                </li>
                <li>
                  <strong className="font-600">Public Health / Medical Research:</strong> Anonymised
                  data may be used for public health education and research
                  publications. Your identity shall never be disclosed
                  without your explicit consent.
                </li>
              </ul>
            </div>

            <div>
              <h2 id="sharing-and-disclosure" className="scroll-mt-24 font-heading font-700 text-navy text-[20px] mb-2">
                5. Sharing and Disclosure of Information
              </h2>
              <p className="text-[15px] leading-relaxed text-ink">
                We do not sell, rent, or trade your personal data to any
                third party. Your information may be shared only with:
              </p>
              <ul className="mt-2 space-y-2 text-[15px] leading-relaxed text-ink list-disc pl-5">
                <li>
                  Authorised service providers (e.g., payment gateways,
                  cloud hosting providers, email marketing platforms) who
                  are bound by contractual data processing agreements and
                  are prohibited from using your data for any purpose other
                  than providing the contracted service.
                </li>
                <li>
                  Referring doctors or medical professionals, only with
                  your prior written consent and strictly for your medical
                  benefit.
                </li>
                <li>
                  Law enforcement, courts, or government authorities, when
                  required by a court order, statutory duty, or directive
                  under applicable Indian law, including the IT Act, 2000.
                </li>
              </ul>
              <p className="mt-3 text-[15px] leading-relaxed text-ink">
                All third-party data processors are required to maintain
                confidentiality and implement security standards no less
                stringent than those required by the SPDI Rules and DPDPA.
              </p>
            </div>

            <div>
              <h2 id="data-localisation" className="scroll-mt-24 font-heading font-700 text-navy text-[20px] mb-2">
                6. Data Localisation and Cross-Border Transfers
              </h2>
              <p className="text-[15px] leading-relaxed text-ink">
                In compliance with applicable provisions of the DPDPA, 2023,
                personal data of Indian residents shall primarily be stored
                on servers located within India. Any cross-border transfer
                of personal data shall be carried out only to countries or
                entities notified by the Central Government under Section 16
                of the DPDPA or where adequate safeguards have been
                established by way of Standard Contractual Clauses or
                equivalent protections. SPDI shall not be transferred
                outside India without your prior written consent, in
                accordance with Rule 7 of the SPDI Rules.
              </p>
            </div>

            <div>
              <h2 id="cookies" className="scroll-mt-24 font-heading font-700 text-navy text-[20px] mb-2">
                7. Cookies and Tracking Technologies
              </h2>
              <p className="text-[15px] leading-relaxed text-ink">
                We use cookies, web beacons, and similar technologies to
                enhance your experience on our platforms. These technologies
                are used to recognize returning visitors, personalise
                content, and analyze traffic patterns. You may manage or
                disable cookies through your browser settings; however,
                doing so may impact certain features of our services. Our
                use of cookies is governed by the IT Act, 2000, and
                applicable regulations.
              </p>
            </div>

            <div>
              <h2 id="health-survey-research" className="scroll-mt-24 font-heading font-700 text-navy text-[20px] mb-2">
                8. Health Survey and Research Data
              </h2>
              <p className="text-[15px] leading-relaxed text-ink">
                If you voluntarily provide health information through a
                questionnaire, programme, or survey administered by Dr.
                Sarkar, such information may be used for:
              </p>
              <ul className="mt-2 space-y-2 text-[15px] leading-relaxed text-ink list-disc pl-5">
                <li>
                  Clinical and public health research, including potential
                  publication in peer-reviewed or scientific journals — in
                  fully anonymised, aggregate form only.
                </li>
                <li>
                  Educational and marketing content demonstrating programme
                  outcomes, using only non-identifiable aggregate data.
                </li>
                <li>
                  Personalised outreach, such as follow-up recommendations
                  or programme offers, only where your separate, explicit
                  consent has been obtained.
                </li>
              </ul>
              <p className="mt-3 text-[15px] leading-relaxed text-ink">
                Your identity and personal details shall never be disclosed,
                published, or marketed in any identifiable form without your
                explicit written consent. Consent for research use shall be
                obtained in a separate, specific consent form at the time of
                data collection, in compliance with the SPDI Rules and the
                Indian Council of Medical Research (ICMR) Ethical
                Guidelines.
              </p>
            </div>

            <div>
              <h2 id="data-retention" className="scroll-mt-24 font-heading font-700 text-navy text-[20px] mb-2">
                9. Data Retention
              </h2>
              <p className="text-[15px] leading-relaxed text-ink">
                We retain personal data only for as long as necessary for
                the purposes described in this Policy, or as required by
                applicable Indian law, whichever is longer. Medical records
                shall be retained in accordance with the guidelines issued
                by the Medical Council of India. Upon expiry of the
                applicable retention period, data shall be securely
                deleted, anonymised, or destroyed.
              </p>
            </div>

            <div>
              <h2 id="your-rights" className="scroll-mt-24 font-heading font-700 text-navy text-[20px] mb-2">
                10. Your Rights as a Data Principal
              </h2>
              <p className="text-[15px] leading-relaxed text-ink">
                Under the Digital Personal Data Protection Act, 2023, and
                other applicable Indian laws, you have the following
                rights:
              </p>
              <ul className="mt-2 space-y-2 text-[15px] leading-relaxed text-ink list-disc pl-5">
                <li>
                  <strong className="font-600">Right to Access:</strong> To obtain confirmation of and
                  access to your personal data held by us.
                </li>
                <li>
                  <strong className="font-600">Right to Correction and Erasure:</strong> To request
                  correction of inaccurate or incomplete data, and erasure
                  of data no longer necessary for the original purpose.
                </li>
                <li>
                  <strong className="font-600">Right to Grievance Redressal:</strong> To have
                  grievances addressed within a reasonable period, and to
                  escalate unresolved complaints to the Data Protection
                  Board of India under the DPDPA.
                </li>
                <li>
                  <strong className="font-600">Right to Withdraw Consent:</strong> To withdraw
                  consent at any time, without prejudice to the lawfulness
                  of processing based on consent before withdrawal.
                </li>
                <li>
                  <strong className="font-600">Right to Nominate:</strong> To nominate another
                  individual to exercise your rights in the event of your
                  death or incapacity.
                </li>
              </ul>
              <p className="mt-3 text-[15px] leading-relaxed text-ink">
                To exercise any of the above rights, please contact our
                Grievance Officer at the details provided in Section 2.
              </p>
            </div>

            <div>
              <h2 id="childrens-privacy" className="scroll-mt-24 font-heading font-700 text-navy text-[20px] mb-2">
                11. Children&apos;s Privacy
              </h2>
              <p className="text-[15px] leading-relaxed text-ink">
                Our services are not directed to children below the age of
                18 years. We do not knowingly collect personal data from
                minors without verifiable parental or guardian consent. If
                we become aware that personal data of a minor has been
                collected without proper consent, we shall take immediate
                steps to delete such data. This is in accordance with
                Section 9 of the DPDPA, 2023.
              </p>
            </div>

            <div>
              <h2 id="data-security" className="scroll-mt-24 font-heading font-700 text-navy text-[20px] mb-2">
                12. Data Security
              </h2>
              <p className="text-[15px] leading-relaxed text-ink">
                We implement reasonable technical, administrative, and
                physical security measures to protect your personal data
                from unauthorised access, disclosure, alteration, misuse,
                or destruction, in compliance with Rule 8 of the SPDI
                Rules. These measures include, but are not limited to,
                encryption, access controls, and regular security audits.
              </p>
              <p className="mt-3 text-[15px] leading-relaxed text-ink">
                Notwithstanding the above, no transmission or storage
                system can guarantee absolute security. Users are advised
                to maintain the confidentiality of their login credentials
                and to inform us immediately in the event of any suspected
                unauthorised use of their account.
              </p>
            </div>

            <div>
              <h2 id="medical-disclaimer" className="scroll-mt-24 font-heading font-700 text-navy text-[20px] mb-2">
                13. Medical Disclaimer and Limitation of Liability
              </h2>
              <div className="rounded-xl border border-teal/25 bg-teal-50 p-5">
                <p className="text-[15px] leading-relaxed text-ink">
                  Content published on Dr. Sarkar&apos;s platforms, including
                  articles, videos, social media posts, and health programme
                  materials, is intended for general informational and
                  educational purposes only. It does not constitute a
                  doctor-patient relationship, a substitute for professional
                  medical advice, diagnosis, or treatment.
                </p>
                <p className="mt-3 text-[15px] leading-relaxed text-ink">
                  Dr. Sarkar&apos;s liability for any claim arising from
                  reliance on educational content shall be limited to the
                  maximum extent permitted under Indian law. Nothing herein
                  excludes liability for gross negligence or willful
                  misconduct in the direct provision of regulated medical
                  services.
                </p>
              </div>
            </div>

            <div>
              <h2 id="intellectual-property" className="scroll-mt-24 font-heading font-700 text-navy text-[20px] mb-2">
                14. Intellectual Property Rights
              </h2>
              <p className="text-[15px] leading-relaxed text-ink">
                All content on Dr. Sarkar&apos;s platforms, including text,
                images, videos, logos, programme materials, and data
                compilations, are the exclusive intellectual property of Dr.
                Kunal Sarkar and are protected under the Copyright Act,
                1957, the Trade Marks Act, 1999, and other applicable Indian
                intellectual property laws. Unauthorised reproduction,
                distribution, modification, or commercial use is strictly
                prohibited and may attract civil and criminal liability
                under Indian law.
              </p>
            </div>

            <div>
              <h2 id="governing-law" className="scroll-mt-24 font-heading font-700 text-navy text-[20px] mb-2">
                15. Governing Law and Dispute Resolution
              </h2>
              <p className="text-[15px] leading-relaxed text-ink">
                This Policy is governed by the laws of the Republic of
                India. Any dispute arising out of or in connection with this
                Policy shall first be attempted to be resolved by mediation.
                If mediation fails within 30 days, the dispute shall be
                referred to arbitration under the Arbitration and
                Conciliation Act, 1996, with proceedings conducted in the
                English language in [Insert City], India. The courts of
                [Insert City], India shall have exclusive jurisdiction for
                any matters not subject to arbitration.
              </p>
            </div>

            <div>
              <h2 id="amendments" className="scroll-mt-24 font-heading font-700 text-navy text-[20px] mb-2">
                16. Amendments to This Policy
              </h2>
              <p className="text-[15px] leading-relaxed text-ink">
                We reserve the right to update or modify this Policy at any
                time. All material changes shall be notified to registered
                users via email or a prominent notice on our platforms, with
                a revised &quot;Effective Date&quot;. Continued use of our
                services following such notice shall constitute your
                acceptance of the updated Policy.
              </p>
            </div>

            <div>
              <h2 id="grievance-redressal" className="scroll-mt-24 font-heading font-700 text-navy text-[20px] mb-2">
                17. Grievance Redressal Mechanism
              </h2>
              <p className="text-[15px] leading-relaxed text-ink">
                In accordance with Rule 5(9) of the SPDI Rules and Section
                13 of the DPDPA, 2023, any grievance or complaint regarding
                the collection, use, or processing of your personal data
                may be directed to our designated Grievance Officer at the
                contact details in Section 2. We shall acknowledge your
                complaint within 72 hours and endeavour to resolve it within
                30 days of receipt. If your grievance is not resolved to
                your satisfaction, you may escalate the matter to the Data
                Protection Board of India.
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
