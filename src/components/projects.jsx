import React from "react";
import FolderOpenRoundedIcon from "@mui/icons-material/FolderOpenRounded";
import FadeInSection from "./FadeInSection";
import ExternalLinks from "./ExternalLinks";

class Projects extends React.Component {
  constructor() {
    super();
    this.state = {
      expanded: true,
      activeKey: "1",
    };
    this.handleSelect = this.handleSelect.bind(this);
  }
  handleSelect(eventKey) {
    this.setState({
      activeKey: eventKey,
    });
  }
  render() {
    const projects = {
      "Rust Shell (MyShell)": {
        desc: "A lightweight, interactive shell built in Rust, featuring custom commands, autocompletion, and history support.",
        techStack: "Rust, Shell Scripting",
        link: "https://github.com/adisehrawat/shellAdi",
      },
      "TADO": {
        desc: "A task management app that allows users to create, update, and delete tasks. BUilt on diouxis framework.",
        techStack: "Diouxis, React.js",
        link: "https://github.com/adisehrawat/TADO",
      },
      "GitBolt vscode Extension": {
        desc: "A Visual Studio Code extension that enhances Git functionality with features like commit history visualization and branch management.",
        techStack: "React.js",
        link: "https://github.com/adisehrawat/gitboy_extension",
      },
    };

    return (
      <div id="projects" className="flex items-center justify-center min-h-screen mx-auto pt-[100px] px-5 sm:px-6 ">
        <FadeInSection>
        <div className="section-header mb-6">
          <span className="section-title text-red-500 xl:text-3xl md:text-2.5xl sm:text-3xl text-2xl">
            / projects
          </span>
        </div>
        <div id="projects" className="max-w-5xl mx-auto pt-24 min-h-[50vh] max-h-[80vh] overflow-y-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
            {Object.keys(projects).map((key) => (
              <FadeInSection key={key}>
                <div className="bg-red-500 p-6 rounded-lg shadow-lg hover:translate-y-[-4px] hover:bg-red-600 transition h-full">
                  <div className="flex justify-between items-center mb-4">
                    <ExternalLinks
                      githubLink={projects[key].link}
                    />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-2">{key}</h3>
                  <p className="text-gray-300 text-sm mb-4">
                    {projects[key].desc}
                  </p>
                  <p className="text-black text-xs font-semibold">
                    {projects[key].techStack}
                  </p>
                </div>
              </FadeInSection>
            ))}
          </div>
        </div>
      </FadeInSection>
      </div>
    );
  }
}

export default Projects;
