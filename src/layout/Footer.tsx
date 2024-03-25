import Container from "react-bootstrap/Container";
import Github from "src/static/images/github.svg";
import LinkedIn from "src/static/images/linkedin.svg";
import StackOverflow from "src/static/images/stackoverflow.svg";
import EMail from "src/static/images/email.svg";

export const Footer = () => {
  const footerLinks = [
    {
      name: "Github",
      url: "https://www.github.com/rileyjsumner",
      photo: Github,
      imgSource: "https://github.com/logos",
    },
    {
      name: "LinkedIn",
      url: "https://www.linkedin.com/in/rileyjsumner",
      photo: LinkedIn,
      imgSource: "https://iconmonstr.com/linkedin-3-svg/",
    },
    {
      name: "Stack Overflow",
      url: "https://stackoverflow.com/users/10166162/rileyjsumner",
      photo: StackOverflow,
      imgSource: "https://www.vectorlogo.zone/logos/stackoverflow/index.html",
    },
    {
      name: "E-Mail",
      url: "mailto:rileyjsumner@gmail.com",
      photo: EMail,
      imgSource: "https://www.svgrepo.com/svg/285/email",
    },
  ];

  return (
    <footer className="p-4">
      <Container className="d-flex justify-content-center">
        {footerLinks.map((link) => (
          <a href={link.url} className="mx-5">
            <img
              src={link.photo}
              alt={`${link.name}; source: ${link.imgSource}`}
              width="100"
              height="100"
            />
          </a>
        ))}
      </Container>
    </footer>
  );
};
