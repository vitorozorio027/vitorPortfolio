import React, { useContext } from "react";
import "./twitter.scss";
import { TwitterTimelineEmbed } from "react-twitter-embed";
import { twitterDetails } from "../../portfolio";
import StyleContext from "../../contexts/StyleContext";

const cantDisplayError =
  "<div className='centerContent'><h2>Can't load? Check privacy protection settings</h2></div>";

function timeOut() {
  setTimeout(function () {
    if (!document.getElementById("twitter").innerHTML.includes("iframe")) {
      document.getElementById("twitter").innerHTML = cantDisplayError;
    }
  }, 10);
}
var widthScreen = window.screen.width;

export default function Twitter() {
  const { isDark } = useContext(StyleContext);

  if (!twitterDetails.display) {
    return null;
  }
  if (!twitterDetails.userName) {
    console.error("Twitter username for twitter section is missing");
  }

  if (twitterDetails.userName) {
    return (
      <div className="tw-main-div" id="twitter">
        <div className="centerContent">
          <TwitterTimelineEmbed
            sourceType="profile"
            screenName={twitterDetails.userName}
            options={{ height: 400, width: { widthScreen } }}
            autoHeight={false}
            borderColor="#fff"
            key={isDark ? "1" : "2"}
            theme={isDark ? "dark" : "light"}
            noFooter={true}
            onLoad={timeOut} // Use a referência à função, não a chamada
          />
        </div>
      </div>
    );
  } else {
    return null;
  }
}
