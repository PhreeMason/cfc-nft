import { SvgIcon } from "../../common/SvgIcon";

interface SocialLinkProps {
  href: string;
  src: string;
  width?: string;
  height?: string;
}

const Socials = () => {

  const SocialLink = ({ href, src, width, height }: SocialLinkProps) => {
    return (
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        key={src}
        aria-label={src}
      >
        <SvgIcon src={src} width={width || "25px"} height={height || "25px"} />
      </a>
    );
  };

  return (
    <>
      <SocialLink
        href="https://discord.gg/GQERfEqE3w"
        src="discord.svg"
        width="30px"
        height="30px"
      />
      <SocialLink
        href="https://twitter.com/CFCNFT"
        src="twittah.svg"
        width="30px"
        height="30px"
      />
      <SocialLink
        href="https://opensea.io/"
        src="opensea.svg"
      />
      <SocialLink
        href="https://www.peta.org/issues/animals-in-entertainment/cruel-sports/cockfighting/"
        src="Peta.svg"
      />
    </>
  );
};

export default Socials;
