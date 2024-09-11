import ImageSection from "./ImageSection";

export default function TermsAndConditions() {
    return (
        <>
            <div className="terms">
                <ImageSection />
                <div className="px-[30px] py-[30px]">
                    <header className="text-white py-6 bg-[#FFC804] rounded-[10px] ">
                        <div className="container mx-auto px-4 bg-[#FFC804] text-[#fff]">
                            <h1 className="text-4xl font-bold text-[1.9rem]">
                                Terms and Conditions for Grow Lotus Fintech Private Limited
                            </h1>
                    
                        </div>
                    </header>

                    <main className="container mx-auto px-4 py-8">
                        <section className="mb-8">
                            <p className="text-lg mb-4 text-[#000]">
                                Welcome to <strong className="text-[#ffcf32]">Grow Lotus Fintech Private Limited</strong>. By accessing or using our website (<a href="https://www.growlotusfintech.com" className="text-blue-600 underline">www.growlotusfintech.com</a>), you agree to comply with and be bound by the following terms and conditions of use, which govern our relationship with you in relation to this website.
                            </p>
                            <p className="text-lg text-[#000]">
                                If you disagree with any part of these terms and conditions, please do not use our website or services.
                            </p>
                        </section>

                        <section className="mb-[50px]">
                            <h2 className="text-2xl font-semibold mb-4">1. Use of the Website</h2>
                            <p className="text-lg text-[#000] mb-4">
                                The content of this website is for your general information and use only. It is subject to change without notice.
                            </p>
                            <ul className="list-disc pl-6 space-y-2">
                                <li className="mb-[15px]">You agree not to use the website for any unlawful purpose.</li>
                                <li className="mb-[15px]">You are responsible for ensuring that any information you provide is accurate and up to date.</li>
                                <li className="mb-[15px]">Unauthorized use of this website may give rise to a claim for damages and/or be a criminal offense.</li>
                            </ul>
                        </section>

                        <section className="mb-[50px]">
                            <h2 className="text-2xl font-semibold mb-4">2. Intellectual Property</h2>
                            <p className="text-lg mb-4 text-[#000]">
                                All intellectual property rights in this website and its content, including text, graphics, logos, and software, are owned by or licensed to <strong className="text-[#ffcf32]">Grow Lotus Fintech Private Limited</strong>.
                            </p>
                            <p className="text-lg text-[#000]">
                                You may not reproduce, distribute, or use any materials on this website for commercial purposes without our written consent.
                            </p>
                        </section>

                        <section className="mb-[50px]">
                            <h2 className="text-2xl font-semibold mb-4">3. Limitation of Liability</h2>
                            <p className="text-lg text-[#000]">
                                We do not guarantee that our website will be secure or free from bugs or viruses. To the extent permitted by law, we exclude all liability for any loss or damage arising out of your use of this website.
                            </p>
                        </section>

                        <section className="mb-[50px]">
                            <h2 className="text-2xl font-semibold mb-4">4. Governing Law</h2>
                            <p className="text-lg text-[#000]">
                                These terms and conditions are governed by and construed in accordance with the laws of India, and any disputes relating to them will be subject to the exclusive jurisdiction of the courts of Gurugram, Haryana, India.
                            </p>
                        </section>

                        <section className="mb-[50px]">
                            <h2 className="text-2xl font-semibold mb-4">5. Changes to These Terms</h2>
                            <p className="text-lg text-[#000]">
                                We reserve the right to modify these terms and conditions at any time. Your continued use of the website following any changes indicates your acceptance of the new terms.
                            </p>
                        </section>

                        <section className="mb-[50px]">
                            <h2 className="text-2xl font-semibold mb-4">6. Contact Us</h2>
                            <p className="text-lg mb-4 text-[#000]">
                                If you have any questions about these terms and conditions, please contact us at:
                            </p>
                            <address className="bg-gray-100 p-4 rounded-md shadow-md">
                                <strong>Grow Lotus Fintech Private Limited</strong><br />
                                302, 3rd Floor, Global Foyer Mall, Golf Course Road,<br />
                                Gurugram, Haryana, India 122009<br />
                                Phone: <a href="tel:18001801800" className="text-blue-600 underline">1800 180 1800</a><br />
                                Email: <a href="mailto:info@growlotusfintech.com" className="text-blue-600 underline">info@growlotusfintech.com</a>
                            </address>
                        </section>
                    </main>

                    <footer className="text-white text-center py-6 text-[#fff] rounded-[10px] bg-[#FFC804]">
                        <p className="text-[#fff]">
                            By using our website, you agree to these terms and conditions.
                        </p>
                    </footer>
                </div>
            </div>
        </>
    );
}
