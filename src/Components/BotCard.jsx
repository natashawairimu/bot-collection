import React from "react"

function BotCard({ bot, onEnlist, onRelease, onDischarge, isInArmy }) {
  const handleClick = () => {
    if (isInArmy) {
      onRelease(bot);
    } else {
      onEnlist(bot);
    }
  };

  return (
    <div className="card" onClick={handleClick}>
      <div className="image">
        <img src={bot.avatar_url} alt={bot.name} />
      </div>
      <div className="content">
        <h3>{bot.name}</h3>
        <p>{bot.catchphrase}</p>
        <div>
        <span>❤️ {bot.health} | ⚡ {bot.damage} | 🛡 {bot.armor}</span>
        </div>
      </div>
      {isInArmy && (
        <button
          onClick={(e) => {
            e.stopPropagation();
            onDischarge(bot);
          }}
        >
          x
        </button>
      )}
    </div>
  );
}

export default BotCard;