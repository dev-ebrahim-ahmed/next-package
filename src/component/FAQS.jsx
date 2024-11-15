import { useState } from "react";
import { faqsData } from "./Data"
import FAQ from "./FAQ";
const FAQS = () => {
    const [faqs, setFaqs] = useState(faqsData);
  return (
    <main>
       <section>
       <h3>FAQS</h3>
       {faqs.map(faq => <FAQ  key={faq.id}{...faq}/>)}
       </section>
    </main>
  )
}

export default FAQS;