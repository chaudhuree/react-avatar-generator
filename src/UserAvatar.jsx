import React from "react";

const UserAvatar = ({ fullName, size }) => {
  const getInitials = (name) => {
    const names = name.split(" ");
    const initials = names.map((name) => name.charAt(0)).join("");
    return initials;
  };

  const generateColor = () => {
    // Generate a random color based on the name's hash code
    const hashCode = fullName
      .split("")
      .reduce(
        (acc, char) => (acc = char.charCodeAt(0) + ((acc << 5) - acc)),
        0
      );
    const hue = hashCode % 360;
    return `hsl(${hue}, 70%, 50%)`;
  };

  const initials = getInitials(fullName);
  const avatarStyle = {
    backgroundColor: generateColor(),
    width: size,
    height: size,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: "50%",
    fontSize: Math.floor(size / 2.5),
    color: "white"
  };

  return <div style={avatarStyle}>{initials}</div>;
};

export default UserAvatar;
