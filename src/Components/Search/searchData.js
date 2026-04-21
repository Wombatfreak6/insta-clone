export const generateRandomProfiles = () => {
  const firstNames = ["alex", "jordan", "taylor", "morgan", "casey", "riley", "avery", "quinn", "peyton", "skyler", "cameron", "blake", "ryan", "dylan", "evan"];
  const lastNames = ["smith", "johnson", "williams", "brown", "jones", "garcia", "miller", "davis", "rodriguez", "martinez", "hernandez", "lopez", "gonzalez", "wilson", "anderson"];

  return Array.from({ length: 20 }, (_, i) => {
    const first = firstNames[Math.floor(Math.random() * firstNames.length)];
    const last = lastNames[Math.floor(Math.random() * lastNames.length)];
    const username = `${first}_${last}${Math.floor(Math.random() * 999)}`;
    const fullName = `${first.charAt(0).toUpperCase() + first.slice(1)} ${last.charAt(0).toUpperCase() + last.slice(1)}`;
    const followers = `${(Math.random() * 10).toFixed(1)}M`;
    const imageId = Math.floor(Math.random() * 70) + 1;
    
    return {
      id: i.toString() + Math.random().toString(36).substring(7),
      username,
      fullName,
      avatar: `https://i.pravatar.cc/150?img=${imageId}`,
      followers: `${followers} followers`,
      verified: Math.random() > 0.5
    };
  });
};
