import React from "react";
import BotCard from "./BotCard";

function YourBotArmy({ army, onRelease, onDischarge }) {
  return (
    <div className="card">
      <h2>Your Bot Army</h2>
      <div>
        {army.map(bot => (
          <BotCard
            key={bot.id}
            bot={bot}
            onRelease={onRelease}
            onDischarge={onDischarge}
            isInArmy={true}
          />
        ))}
      </div>
    </div>
  );
}

export default YourBotArmy;