import React from "react";
import Footer from "./Footer";

export const Terms = () => {
  return (
    <>
      <div>
        <article className="prose text-black m-12 lg:prose-xl">
          <h1 className="text-black">Terms</h1>
          <p>
            {" "}
            1. Photoshoot4u.com is a web application that uses artificial
            intelligence used to generate personalized main photos. This general
            terms and conditions govern the use of the app and the relationship
            between you and Photoshoot4u.com.
          </p>{" "}
          <p>
            2. Acceptance: By using the app you agree to these general terms and
            conditions.
          </p>{" "}
          <p>
            3. Use of the app: You may only use the app for personal,
            non-commercial purposes. You are not allowed to use the app in any
            way that is harmful, unlawful or offensive.
          </p>
          <p>
            4. Intellectual property: All intellectual property rights belong to
            the app and its content belong to Photoshoot4u.com
          </p>
          <p>
            5. Liability: Photoshoot4u.com is not liable for any damage you
            suffer as a result of using the app.
          </p>
          <p>
            6. Changes: We may change these terms and conditions from time to
            time change. We will notify you of changes via the app or by email.
          </p>{" "}
          <p>
            7. Termination: We may terminate your use of the App if you
            terminate it violates general terms and conditions.
          </p>
          <p>
            8. Governing law: These terms and conditions are governed by and
            interpreted in accordance with Dutch law.
          </p>
          <p>
            9. Contact: For questions or comments about our general terms and
            conditions you can contact us via live chat.
          </p>
        </article>
      </div>
      <Footer />
    </>
  );
};
