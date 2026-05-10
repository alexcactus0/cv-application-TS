import * as InfoCards from "./InfoCards";
import React, { useState } from "react";

type CardId =
  | "general"
  | "objective"
  | "education"
  | "experience"
  | "upload"
  | "download";

interface InfoCard {
  id: CardId;
  label: string;
}

const infoCards: InfoCard[] = [
  { id: "general", label: "General" },
  { id: "objective", label: "Objective" },
  { id: "education", label: "Education" },
  { id: "experience", label: "Experience" },
  { id: "upload", label: "Upload" },
  { id: "download", label: "Download" },
];

const cardComponents: Record<CardId, React.FC> = {
  general: InfoCards.GeneralInfo,
  objective: InfoCards.Objective,
  education: InfoCards.Education,
  experience: InfoCards.Experience,
  upload: InfoCards.UploadPicture,
  download: InfoCards.DownloadCv,
};

function Info() {
  const [infoCard, setInfoCard] = useState<CardId>("general");

  const handleCardChange = (cardName: CardId) => {
    setInfoCard(cardName);
  };

  const ActiveCard = cardComponents[infoCard];
  return (
    <div className="infoSide flex flex-col justify-between items-center border-2 border-black h-full w-[40em]">
      <h1>CV Application</h1>
      <div className="infoCardsCon border-2 p-10 rounded">
        <ActiveCard />
      </div>
      <div className="infoCardsNav">
        <nav className="flex gap-8">
          {infoCards.map((card) => (
            <button key={card.id} onClick={() => handleCardChange(card.id)}>
              {card.label}
            </button>
          ))}
        </nav>
      </div>
    </div>
  );
}

export default Info;
