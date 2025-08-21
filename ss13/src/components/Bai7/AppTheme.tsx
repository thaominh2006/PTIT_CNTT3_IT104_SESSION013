import React, { Component } from "react";

interface State {
  theme: "Sáng" | "Tối";
  language: "Tiếng Anh" | "Tiếng Việt";
}

export default class AppTheme extends Component<object, State> {
  constructor(props: object) {
    super(props);
    this.state = {
      theme: "Sáng",
      language: "Tiếng Anh",
    };
  }

  render() {
    const { theme, language } = this.state;

    const backgroundColor = theme === "Sáng" ? "#ffffff" : "#000000";
    const textColor = theme === "Sáng" ? "#000000" : "#ffffff";

    return (
      <div style={{ backgroundColor, color: textColor, padding: "10px" }}>
        <p><b>Nền: {theme}</b></p>
        <p><b>Ngôn ngữ: {language}</b></p>
                {theme === "Sáng" && language === "Tiếng Anh" && (
          <p>Theme đang là <b>Sáng</b> và Ngôn ngữ đang là <b>Tiếng Anh</b></p>
        )}
        {theme === "Tối" && language === "Tiếng Việt" && (
          <p>Theme đang là <b>Tối</b> và Ngôn ngữ đang là <b>Tiếng Việt</b></p>
        )}
        <button
          onClick={() =>
            this.setState({ theme: theme === "Sáng" ? "Tối" : "Sáng" })
          }
        >
          Đổi theme
        </button>

        <button
          style={{ marginLeft: "10px" }}
          onClick={() =>
            this.setState({
              language: language === "Tiếng Anh" ? "Tiếng Việt" : "Tiếng Anh",
            })
          }
        >
          Đổi language
        </button>
      </div>
    );
  }
}
