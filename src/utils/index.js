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

export const getBgColor = (name = "") => {
  const bgarr = [
    "#3A2A2A", 
    "#2E2F4A", 
    "#2A3A3A", 
    "#4A4028", 
    "#2B2A3A", 
    "#2E3A2A", 
    "#3A2A30", 
    "#2A4A3A"
  ];
  
  if (!name) return "#1f1f1f";
  
  let hash = 0;
  for (let i = 0; i < name.length; i++) {
    hash = name.charCodeAt(i) + ((hash << 5) - hash);
  }
  
  return bgarr[Math.abs(hash) % bgarr.length];
};

export const getAvatarName = (name) => {
  if(!name) return "";

  return name.split(" ").map(word => word[0]).join("").toUpperCase();
}

export const formatDate = (date) => {
        const months = [
            'January', 'February', 'March', 'April', 'May', 'June', 'July',
            'August', 'September', 'October', 'November', 'Desember'
        ];
        return `${months[date.getMonth()]} ${String(date.getDate()).padStart(2, '0')}, ${date.getFullYear()}`;
    };