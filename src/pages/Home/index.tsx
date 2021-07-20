import { lazy } from "react";
import IntroContent from "../../content/IntroContent.json";
import MiddleBlockContent from "../../content/MiddleBlockContent.json";
import AboutContent from "../../content/AboutContent.json";
import MissionContent from "../../content/MissionContent.json";
import ProductContent from "../../content/ProductContent.json";
import ContactContent from "../../content/ContactContent.json";
import FrequentlyAskedContent from "../../content/FrequentlyAskedContent.json";
import RoadmapContent from "../../content/RoadmapContent.json";

const Contact = lazy(() => import("../../components/ContactForm"));
const MiddleBlock = lazy(() => import("../../components/MiddleBlock"));
const Container = lazy(() => import("../../common/Container"));
const ScrollToTop = lazy(() => import("../../common/ScrollToTop"));
const ContentBlock = lazy(() => import("../../components/ContentBlock"));
const RoadMap = lazy(() => import("../../components/Roadmap/Roadmap"));
const FrequentlyAsked = lazy(() => import("../../components/FrequentlyAsked"));

const Home = () => {
  return (
      <Container>
        <ScrollToTop />
        <ContentBlock
          type="right"
          title={IntroContent.title}
          content={IntroContent.text}
          icon="CFC_ROOSTER_0019.svg"
          id="intro"
        />
        <MiddleBlock
          title={MiddleBlockContent.title}
          content={MiddleBlockContent.text}
        />
        <ContentBlock
          type="left"
          title={AboutContent.title}
          content={AboutContent.text}
          icon="cockAnatomy.jpg"
          id="about"
        />
        <ContentBlock
          type="right"
          title={MissionContent.title}
          content={MissionContent.text}
          icon="product-launch.svg"
          id="mission"
        />
        <ContentBlock
          type="left"
          title={ProductContent.title}
          content={ProductContent.text}
          icon="waving.svg"
          id="product"
        />
        <FrequentlyAsked
          title={FrequentlyAskedContent.title}
          bulletPoints={FrequentlyAskedContent.points}
        />
        <RoadMap
          title={RoadmapContent.title}
          milestones={RoadmapContent.mileStones}
        />
        <Contact
          title={ContactContent.title}
          content={ContactContent.text}
          id="contact"
        />
      </Container>
  );
};

export default Home;
