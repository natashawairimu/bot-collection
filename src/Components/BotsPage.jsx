import React, { useEffect, useState } from "react";
import BotCollection from "./BotCollection";
import YourBotArmy from "./BotArmy";

function BotsPage() {
  const [bots, setBots] = useState([]);
  const [army, setArmy] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3000/bots")
      .then(res => res.json())
      .then(data => setBots(data));
  }, []);

  const handleEnlist = (bot) => {
    if (!army.find(b => b.id === bot.id)) {
      setArmy([...army, bot]);
    }
  };

  const handleRelease = (bot) => {
    setArmy(army.filter(b => b.id !== bot.id));
  };

  const handleDischarge = (bot) => {
    fetch(`http://localhost:3000/bots/${bot.id}`, {
      method: "DELETE"
    }).then(() => {
      setBots(bots.filter(b => b.id !== bot.id));
      setArmy(army.filter(b => b.id !== bot.id));
    });
  };

  return (
    <div>
      <YourBotArmy
        army={army}
        onRelease={handleRelease}
        onDischarge={handleDischarge}
      />
      <BotCollection bots={bots} onEnlist={handleEnlist} />
    </div>
  );
}

export default BotsPage;