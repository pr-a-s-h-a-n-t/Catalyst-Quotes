import { useState } from "react";
import "./NewsLetter.css";

export default function NewsLetter() {
  const [email, setemail] = useState("");

  const handleSubmit = () => {
    if (email === " ") {
      alert("Enter your mail ID");
    }
    fetch(
      "https://module-7-a3af5-default-rtdb.firebaseio.com/newsletterEmail.json",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email: email,
        }),
      }
    )
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setemail("");
      });
  };

  return (
    <>
      <div className="inTouch">
        <h3> Subscribe for Updates </h3>
        <div>
          <div
            className="email"
            // onSubmit={ submitHandler }
          >
            <input
              type="email"
              placeholder="Your Email"
              value={email}
              onChange={(e) => {
                setemail(e.target.value);
              }}
            />
            <button onClick={handleSubmit}>Subscribe</button>
          </div>
        </div>
      </div>
    </>
  );
}
