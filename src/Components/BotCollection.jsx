import React from "react";
import BotCard from "./BotCard";

function BotCollection({ bots, onEnlist }) {
  return (
    <div>
      {bots.map(bot => (
        <BotCard key={bot.id} bot={bot} onEnlist={onEnlist} isInArmy={false} />
      ))}
    </div>
  );
}

export default BotCollection;