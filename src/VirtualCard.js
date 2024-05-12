import React, { useState } from "react";
import styled from "styled-components";
import { animated, useSpring } from "react-spring";

import cutiesImage from "./imgs/cuties.jpg";
import dogImage from "./imgs/dog.jpg";
import dog2Image from "./imgs/dog2.jpg";
import friendsImage from "./imgs/friends.jpg";
import hikeImage from "./imgs/hike.jpg";
import teaImage from "./imgs/tea.jpg";
import timelessImage from "./imgs/timeless.jpg";

const CardContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  height: 100vh;
  background-color: #f7f7f7;
`;

const BouncingText = styled(animated.div)`
  font-size: 36px;
  font-weight: bold;
  color: #ff4081;
  text-align: center;
  margin-bottom: 20px;
`;

const EmojisContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 20px;
  margin-bottom: 20px;
`;

const BouncingEmoji = styled(animated.span)`
  font-size: 50px;
  cursor: pointer;
`;

const ImageContainer = styled.div`
  text-align: center;
`;

const Image = styled.img`
  max-width: 300px;
  border-radius: 10px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
`;

const PhoneText = styled.p`
  font-size: 30px;
  color: #ff4081;
  margin-top: 10px;
  text-align: center;
`;

const InfoText = styled.p`
  font-size: 16px;
  color: #666;
  margin-top: 10px;
  text-align: center;
`;

const emojisData = [
  { emoji: "🍊", imageUrl: cutiesImage, info: "A collection of cuties!!!" },
  { emoji: "🐶", imageUrl: dogImage, info: "She's a dog mom :)" },
  { emoji: "🛍️", imageUrl: dog2Image, info: "Taking the pup rug shopping 💰" },
  {
    emoji: "👭",
    imageUrl: friendsImage,
    info: "Friends galore (Nov 22, 2021)",
  },
  { emoji: "🏞️", imageUrl: hikeImage, info: "She loves a good hike 👍" },
  { emoji: "🍵", imageUrl: teaImage, info: "This tea tastes funny..." },
  { emoji: "🕰️", imageUrl: timelessImage, info: "💥 A blast from the past 💥" },
];

const VirtualCard = () => {
  const [showImage, setShowImage] = useState(null);
  const [showInfo, setShowInfo] = useState("");
  const [showPhoneNumber, setShowPhoneNumber] = useState(false);
  const [clickedEmojis, setClickedEmojis] = useState(
    emojisData.map(() => false)
  );

  const textProps = useSpring({
    to: { fontSize: "45px" },
    from: { fontSize: "50px" },
  });

  const textBounceProps = useSpring({
    to: async (next) => {
      while (1) {
        await next({ transform: "scale(1.1)" });
        await next({ transform: "scale(1)" });
      }
    },
    from: { transform: "scale(1)" },
  });

  const emojiBounceProps = useSpring({
    to: async (next) => {
      while (1) {
        await next({ transform: "scale(1.1)" });
        await next({ transform: "scale(1)" });
      }
    },
    from: { transform: "scale(1)" },
  });

  const handleEmojiClick = (imageUrl, info, index) => {
    setShowImage(imageUrl);
    setShowInfo(info);
    const newClickedEmojis = clickedEmojis.map((clicked, i) =>
      i === index ? true : clicked
    );
    setClickedEmojis(newClickedEmojis);
    if (newClickedEmojis.every((clicked) => clicked)) {
      setShowPhoneNumber(true);
    }
  };

  return (
    <CardContainer>
      <BouncingText style={{ ...textProps, ...textBounceProps }}>
        Happy Mother's Day Mom!
      </BouncingText>
      <EmojisContainer>
        {emojisData.map(({ emoji, imageUrl, info }, index) => (
          <BouncingEmoji
            key={index}
            style={{ ...emojiBounceProps }}
            onClick={() => handleEmojiClick(imageUrl, info, index)}
            role="img"
            aria-label="Emoji"
          >
            {emoji}
          </BouncingEmoji>
        ))}
      </EmojisContainer>
      {showImage && showInfo && (
        <div>
          <ImageContainer>
            <Image src={showImage} alt="" />
          </ImageContainer>
          <InfoText>{showInfo}</InfoText>
        </div>
      )}
      {showPhoneNumber && (
        <PhoneText>
          It's time for a What's App Call! Call me at 425-533-5139
        </PhoneText>
      )}
    </CardContainer>
  );
};

export default VirtualCard;
