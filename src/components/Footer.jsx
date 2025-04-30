const socialLinks = [
  {
    name: "Email",
    icon: "/assets/icons/email.svg",
    url: "mailto:hioov1@gmail.com",
  },
  {
    name: "GitHub",
    icon: "/assets/icons/github.svg",
    url: "https://github.com/hioov1",
  },
  {
    name: "Instagram",
    icon: "/assets/icons/instagram.svg",
    url: "https://www.instagram.com/hioov.1",
  },
  {
    name: "Facebook",
    icon: "assets/icons/facebook.svg",
    url: "https://www.facebook.com/Whydn06",
  },
  {
    name: "Tiktok",
    icon: "assets/icons/tiktok.svg",
    url: "https://tiktok.com/@hioov.1",
  },
];

const Footer = () => {
  return (
    <footer className="bg-blue-300 text-white py-8 px-4">
      <div className="max-w-5xl mx-auto flex flex-col items-center justify-center space-y-4">
        <div className="flex gap-6">
          {socialLinks.map((item, index) => (
            <a key={index} href={item.url} target="_blank" rel="noopener noreferrer" className="hover:opacity-80 transition-opacity duration-300" aria-label={item.name}>
              <img src={item.icon} alt={item.name} className="w-6 h-6 md:w-7 md:h-7" />
            </a>
          ))}
        </div>
        <p className="text-sm text-black">
          &copy; {new Date().getFullYear()} Created by{" "}
          <a href="https://www.instagram.com/hioov.1" target="_blank">
            <span className="text-blue-700 hover:underline">hioov1</span>,
          </a>{" "}
          All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
