// 定制主题
const theme = {
  color: {
    primaryColor: "#ff385c",
    secondaryColor: "#008489",
  },
  text: {
    primaryColor: "#222",
    secondaryColor: "#717171",
  },
  boxShadow: `
    transition: box-shadow 200ms ease;
    &:hover {
      box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.18);
  }`,
};

export default theme;
