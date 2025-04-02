import React from "react";
import GitHubIcon from "@mui/icons-material/GitHub";

const ExternalLinks = ({ githubLink }) => {
  return (
    <span className="flex space-x-2">
      <a href={githubLink} className="text-gray-300 hover:text-black">
        <GitHubIcon style={{ fontSize: 20 }} />
      </a>
    </span>
  );
};

export default ExternalLinks;