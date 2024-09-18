import React,{useEffect} from "react";

export default function ReturnPolicy() {
  useEffect(()=>{
    window.scrollTo(0,0);
  },[])
  return (
    <div className="return-policy">
      {/* Header Section */}
      <header className=" text-white py-6 bg-[#ffcf32] rounded-t-lg">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl font-bold  text-[2rem]">
            Return Policy of Grow Lotus Fintech
          </h1>
          <p className="mt-2 text-lg tracking-[.6px]">
            We strive to provide the best services and customer satisfaction.
          </p>
        </div>
      </header>

      {/* Main Content Section */}
      <main className="container mx-auto px-4 py-8">
        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">1. General Return Policy</h2>
          <p className="text-lg text-[#000] mb-4">
            Our return policy lasts for 30 days from the date of purchase. If 30
            days have gone by since your purchase, unfortunately, we cannot
            offer you a refund or exchange.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">2. Eligibility for Returns</h2>
          <p className="text-lg text-[#000] mb-4">
            To be eligible for a return, your item must be unused and in the same
            condition that you received it. It must also be in the original
            packaging. Several types of goods are exempt from being returned,
            such as perishable goods and customized services.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">3. Refunds Process</h2>
          <p className="text-lg text-[#000] mb-4">
            Once your return is received and inspected, we will send you an email
            to notify you of the approval or rejection of your refund. If approved,
            your refund will be processed, and a credit will automatically be
            applied to your original method of payment within 7-10 business days.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">4. Late or Missing Refunds</h2>
          <p className="text-lg text-[#000] mb-4">
            If you haven’t received a refund yet, first check your bank account again.
            Then contact your credit card company, it may take some time before your
            refund is officially posted. If you’ve done all of this and you still have
            not received your refund yet, please contact us at info@growlotusfintech.com.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">5. Exchanges</h2>
          <p className="text-lg text-[#000] mb-4">
            We only replace items if they are defective or damaged. If you need to
            exchange it for the same item, send us an email at info@growlotusfintech.com
            and we will arrange the process.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">6. Shipping Returns</h2>
          <p className="text-lg text-[#000] mb-4">
            To return your product, you should mail your product to our office address.
            You will be responsible for paying for your own shipping costs for returning
            your item. Shipping costs are non-refundable.
          </p>
        </section>
      </main>

      {/* Footer Section */}
      <footer className=" text-white py-6 text-center rounded-b-lg bg-[#ffcf32]">
        <p>
          If you have any questions, please contact us at{" "}
          <a href="mailto:info@growlotusfintech.com" className="underline">
            info@growlotusfintech.com
          </a>
        </p>
      </footer>
    </div>
  );
}
