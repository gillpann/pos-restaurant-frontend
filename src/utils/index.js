export const getAvatarBG = (initials = "") => {
  const colors = [
    "#F97316",
    "#FB923C",
    "#6366F1",
    "#8B5CF6",
    "#0EA5E9",
    "#14B8A6",
  ];

  let hash = 0;
  for (let i = 0; i < initials.length; i++) {
    hash = initials.charCodeAt(i) + ((hash << 5) - hash);
  }

  return colors[Math.abs(hash) % colors.length];
};
