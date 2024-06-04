import React from "react";
import Image from "next/image";

export default function Percakapan(params) {
  return (
    <section className="percakapan pd-container">
      <div className="percakapan-container">
        <div class="talk-bubble tri-right round btm-left">
          <div class="talktext">
            <p>
              And now using .round we can smooth the sides down. Also uses
              .btm-left to show a triangle at the bottom flush to the left.
            </p>
          </div>
        </div>
        {/* <div className="percakapan-chat">
          <span>Hey</span>
        </div>
        <div className="percakapan-chat">
          <span>Hello</span>
        </div>
        <div className="percakapan-chat">
          <span>How Are You?</span>
        </div> */}
      </div>
      <div className="percakapan-wrap">
        <input type="text" name="chat" />
        <Image
          alt="arrow"
          src={"/arrow-up.svg"}
          width={100}
          height={100}
          priority
        />
      </div>
    </section>
  );
}
