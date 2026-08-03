import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SiteScripts from "@/components/SiteScripts";
import LegalTOC from "@/components/LegalTOC";

const sections = [
  { id: "applicability", label: "1. Applicability and Acceptance" },
  { id: "content-ip", label: "2. Content — Videos, Writings & Publications" },
  { id: "medical-disclaimer", label: "3. No Medical Advice Disclaimer" },
  { id: "user-conduct", label: "4. Accounts and User Conduct" },
  { id: "third-party-links", label: "5. Third-Party Links" },
  { id: "limitation-of-liability", label: "6. Limitation of Liability" },
  { id: "indemnification", label: "7. Indemnification" },
  { id: "privacy", label: "8. Privacy" },
  { id: "governing-law", label: "9. Governing Law and Dispute Resolution" },
  { id: "changes", label: "10. Changes to These Terms" },
  { id: "grievance-officer", label: "11. Grievance Officer" },
  { id: "contact", label: "12. Contact" },
];

export const metadata = {
  title: "Terms of Use — Dr. Kunal Sarkar",
  description:
    "Terms of Use governing access to and use of the Dr. Kunal Sarkar website.",
  robots: { index: false, follow: true },
};

export default function TermsOfUsePage() {
  return (
    <>
      <Header active="legal" />

      <main>
        {/* ===================== HEADER ===================== */}
        <section className="bg-white py-10">
          <div className="mx-auto max-w-[1280px] px-4 sm:px-6 lg:px-8">
            <div className="max-w-2xl mx-auto text-center reveal reveal-up">
              <p className="text-teal font-700 text-[13px] tracking-[0.2em] uppercase mb-3">
                Legal
              </p>
              <h1 className="font-heading font-700 text-navy text-[30px] sm:text-[42px] leading-tight tracking-tight">
                Terms of <span className="text-teal">Use</span>
              </h1>
              <p className="mt-4 text-[15px] leading-relaxed text-ink">
                Website of Dr. Kunal Sarkar — Last Updated: August 2, 2026
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
            <p className="text-[15px] leading-relaxed text-ink">
              Please read these Terms of Use (&quot;Terms&quot;) carefully
              before accessing or using this website (&quot;Website&quot; or
              &quot;Service&quot;). This Website is owned and operated by Dr.
              Kunal Sarkar (&quot;we&quot;, &quot;us&quot;, &quot;our&quot;).
            </p>
            <p className="text-[15px] leading-relaxed text-ink">
              By accessing or using this Website, you agree to be bound by
              these Terms and all applicable laws of the Republic of India.
              If you do not agree with any part of these Terms, you are not
              permitted to access or use this Website.
            </p>

            <div>
              <h2 id="applicability" className="scroll-mt-24 font-heading font-700 text-navy text-[20px] mb-2">
                1. Applicability and Acceptance
              </h2>
              <p className="text-[15px] leading-relaxed text-ink">
                These Terms constitute a legally binding agreement between
                you (&quot;User&quot;, &quot;you&quot;) and Dr. Kunal Sarkar,
                in accordance with the Information Technology Act, 2000 and
                the Information Technology (Intermediary Guidelines and
                Digital Media Ethics Code) Rules, 2021.
              </p>
              <p className="mt-3 text-[15px] leading-relaxed text-ink">
                By accessing this Website, you represent that:
              </p>
              <ul className="mt-2 space-y-1.5 text-[15px] leading-relaxed text-ink list-disc pl-5">
                <li>
                  You are at least 18 years of age, or are accessing the
                  Website under the supervision of a parent or legal
                  guardian;
                </li>
                <li>
                  You have the legal capacity to enter into a binding
                  agreement under the Indian Contract Act, 1872;
                </li>
                <li>
                  Your use of this Website is in compliance with all
                  applicable Indian laws, rules, and regulations.
                </li>
              </ul>
            </div>

            <div>
              <h2 id="content-ip" className="scroll-mt-24 font-heading font-700 text-navy text-[20px] mb-2">
                2. Content — Videos, Writings, and Publications
              </h2>
              <p className="text-[15px] leading-relaxed text-ink">
                All content on this Website, including but not limited to
                videos, articles, blog posts, written commentary, lectures,
                podcasts, medical opinions, and educational material
                (&quot;Content&quot;) published by Dr. Kunal Sarkar is
                protected under the Copyright Act, 1957 (as amended) and
                related intellectual property laws of India.
              </p>
              <ul className="mt-2 space-y-1.5 text-[15px] leading-relaxed text-ink list-disc pl-5">
                <li>The Content is the exclusive intellectual property of Dr. Kunal Sarkar.</li>
                <li>
                  No part of this Website or its Content may be reproduced,
                  redistributed, publicly communicated, translated, adapted,
                  or commercially exploited without the prior written consent
                  of Dr. Kunal Sarkar.
                </li>
                <li>
                  Sharing of individual links to the Website is permitted for
                  personal, non-commercial purposes, provided proper
                  attribution is made.
                </li>
                <li>
                  Any unauthorised reproduction or misappropriation may
                  attract civil and criminal liability under applicable
                  Indian law, including but not limited to the Copyright Act,
                  1957 and the Information Technology Act, 2000.
                </li>
              </ul>
            </div>

            <div>
              <h2 id="medical-disclaimer" className="scroll-mt-24 font-heading font-700 text-navy text-[20px] mb-2">
                3. No Medical Advice Disclaimer
              </h2>
              <div className="rounded-xl border border-teal/25 bg-teal-50 p-5">
                <p className="font-700 text-navy text-[14px] uppercase tracking-wide mb-3">
                  Important Notice — Please Read Carefully
                </p>
                <p className="text-[15px] leading-relaxed text-ink">
                  All Content on this Website — including videos, written
                  articles, social media posts, and any other publications by
                  Dr. Kunal Sarkar — is provided strictly for general
                  educational and informational purposes only.
                </p>
                <ul className="mt-3 space-y-1.5 text-[15px] leading-relaxed text-ink list-disc pl-5">
                  <li>The Content does not constitute medical advice, professional consultation, diagnosis, or treatment.</li>
                  <li>Nothing on this Website should be construed as establishing a doctor-patient relationship between Dr. Kunal Sarkar and any User.</li>
                  <li>You must not rely on any Content on this Website as a substitute for professional medical advice, diagnosis, or treatment from a qualified and registered medical practitioner.</li>
                  <li>Always seek the advice of your physician or other qualified healthcare professional regarding any medical condition or symptoms you may have.</li>
                  <li>Never disregard professional medical advice or delay seeking it because of something you have read, watched, or heard on this Website.</li>
                  <li>In the event of a medical emergency, contact emergency services or proceed to the nearest hospital immediately.</li>
                </ul>
                <p className="mt-3 text-[15px] leading-relaxed text-ink">
                  Dr. Kunal Sarkar expressly disclaims all liability arising
                  out of any reliance placed on the Content of this Website
                  for medical decision-making.
                </p>
              </div>
            </div>

            <div>
              <h2 id="user-conduct" className="scroll-mt-24 font-heading font-700 text-navy text-[20px] mb-2">
                4. Accounts and User Conduct
              </h2>
              <p className="text-[15px] leading-relaxed text-ink">
                If the Website provides a facility to create an account or
                register:
              </p>
              <ul className="mt-2 space-y-1.5 text-[15px] leading-relaxed text-ink list-disc pl-5">
                <li>You agree to provide accurate, complete, and current information.</li>
                <li>You are solely responsible for maintaining the confidentiality of your login credentials.</li>
                <li>You agree not to use the Website for any unlawful purpose or in a manner that violates these Terms or any applicable Indian law.</li>
                <li>
                  You agree not to post, upload, transmit, or share any
                  content that is:
                  <ul className="mt-1.5 space-y-1.5 list-disc pl-5">
                    <li>Defamatory, obscene, or in violation of another person&apos;s rights;</li>
                    <li>Threatening, harassing, or abusive;</li>
                    <li>In contravention of the Indian Penal Code, 1860, the IT Act, 2000, or any other applicable statute.</li>
                  </ul>
                </li>
              </ul>
              <p className="mt-3 text-[15px] leading-relaxed text-ink">
                We reserve the right to suspend or terminate your access at
                our sole discretion, without prior notice, for breach of
                these Terms.
              </p>
            </div>

            <div>
              <h2 id="third-party-links" className="scroll-mt-24 font-heading font-700 text-navy text-[20px] mb-2">
                5. Third-Party Links
              </h2>
              <p className="text-[15px] leading-relaxed text-ink">
                This Website may contain links to third-party websites or
                platforms (including but not limited to YouTube, social
                media, or news portals). Dr. Kunal Sarkar has no control
                over, and assumes no responsibility for, the content, privacy
                policies, or practices of any such third-party platforms.
              </p>
              <p className="mt-3 text-[15px] leading-relaxed text-ink">
                You access such third-party links entirely at your own risk.
                We strongly advise you to read the terms and conditions and
                privacy policies of any third-party websites you visit.
              </p>
            </div>

            <div>
              <h2 id="limitation-of-liability" className="scroll-mt-24 font-heading font-700 text-navy text-[20px] mb-2">
                6. Limitation of Liability
              </h2>
              <p className="text-[15px] leading-relaxed text-ink">
                To the fullest extent permitted under applicable Indian law:
              </p>
              <ul className="mt-2 space-y-1.5 text-[15px] leading-relaxed text-ink list-disc pl-5">
                <li>
                  Dr. Kunal Sarkar shall not be liable for any direct,
                  indirect, incidental, consequential, or punitive damages
                  arising out of your access to or use of this Website,
                  including reliance on any Content herein.
                </li>
                <li>
                  The Website is provided on an &quot;as is&quot; and
                  &quot;as available&quot; basis without warranties of any
                  kind, whether express or implied.
                </li>
                <li>
                  We do not warrant that the Website will be uninterrupted,
                  error-free, or free from viruses or other harmful
                  components.
                </li>
              </ul>
            </div>

            <div>
              <h2 id="indemnification" className="scroll-mt-24 font-heading font-700 text-navy text-[20px] mb-2">
                7. Indemnification
              </h2>
              <p className="text-[15px] leading-relaxed text-ink">
                You agree to indemnify, defend, and hold harmless Dr. Kunal
                Sarkar and his authorised representatives from and against
                any claims, liabilities, damages, losses, costs, and expenses
                (including reasonable legal fees) arising out of:
              </p>
              <ul className="mt-2 space-y-1.5 text-[15px] leading-relaxed text-ink list-disc pl-5">
                <li>(a) your use of or access to this Website;</li>
                <li>(b) your violation of these Terms;</li>
                <li>(c) your violation of any rights of a third party; or</li>
                <li>(d) your violation of any applicable law or regulation.</li>
              </ul>
            </div>

            <div>
              <h2 id="privacy" className="scroll-mt-24 font-heading font-700 text-navy text-[20px] mb-2">
                8. Privacy
              </h2>
              <p className="text-[15px] leading-relaxed text-ink">
                Your use of this Website is also governed by our{" "}
                <a href="/privacy-policy" className="text-teal hover:underline">
                  Privacy Policy
                </a>
                , which is incorporated herein by reference. The collection,
                processing, and storage of personal data is carried out in
                accordance with the Information Technology (Reasonable
                Security Practices and Procedures and Sensitive Personal Data
                or Information) Rules, 2011, and applicable data protection
                laws of India.
              </p>
            </div>

            <div>
              <h2 id="governing-law" className="scroll-mt-24 font-heading font-700 text-navy text-[20px] mb-2">
                9. Governing Law and Dispute Resolution
              </h2>
              <p className="text-[15px] leading-relaxed text-ink">
                These Terms shall be governed by and construed in accordance
                with the laws of the Republic of India.
              </p>
              <p className="mt-3 text-[15px] leading-relaxed text-ink">
                Any dispute, claim, or controversy arising out of or in
                connection with these Terms or the use of this Website shall
                be subject to the exclusive jurisdiction of the courts at
                Kolkata, West Bengal, India.
              </p>
            </div>

            <div>
              <h2 id="changes" className="scroll-mt-24 font-heading font-700 text-navy text-[20px] mb-2">
                10. Changes to These Terms
              </h2>
              <p className="text-[15px] leading-relaxed text-ink">
                We reserve the right to modify or update these Terms at any
                time. Material changes will be notified on the Website. Your
                continued use of the Website after any such changes
                constitutes your acceptance of the revised Terms.
              </p>
            </div>

            <div>
              <h2 id="grievance-officer" className="scroll-mt-24 font-heading font-700 text-navy text-[20px] mb-2">
                11. Grievance Officer
              </h2>
              <p className="text-[15px] leading-relaxed text-ink">
                In accordance with the Information Technology Act, 2000 and
                the IT (Intermediary Guidelines and Digital Media Ethics
                Code) Rules, 2021, the details of the Grievance Officer are
                as follows:
              </p>
              <div className="mt-3 rounded-xl bg-slate-50 ring-1 ring-slate-200/70 p-5 text-[15px] leading-relaxed text-ink space-y-1">
                <p>Name: [Insert Name of Grievance Officer]</p>
                <p>Email: [Insert Contact Email]</p>
                <p>Address: [Insert Office Address]</p>
                <p>Working Hours: Monday to Friday, 10:00 AM – 5:00 PM IST</p>
              </div>
              <p className="mt-3 text-[15px] leading-relaxed text-ink">
                Any grievances or complaints regarding this Website or its
                Content may be directed to the Grievance Officer. Grievances
                will be acknowledged within 24 hours and resolved within 15
                days of receipt, in compliance with applicable Rules.
              </p>
            </div>

            <div>
              <h2 id="contact" className="scroll-mt-24 font-heading font-700 text-navy text-[20px] mb-2">
                12. Contact
              </h2>
              <p className="text-[15px] leading-relaxed text-ink">
                For any queries regarding these Terms, please contact:
              </p>
              <div className="mt-3 rounded-xl bg-slate-50 ring-1 ring-slate-200/70 p-5 text-[15px] leading-relaxed text-ink space-y-1">
                <p>Dr. Kunal Sarkar</p>
                <p>Email: contactdrkunalsarkar@gmail.com</p>
                <p>Website: www.drkunalsarkar.com</p>
              </div>
            </div>

            <p className="pt-4 text-[13px] text-ink/70 border-t border-slate-200">
              © Dr. Kunal Sarkar. All rights reserved under the Copyright
              Act, 1957.
            </p>
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
