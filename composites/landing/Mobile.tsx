import Layout from "components/Layout";
import Banner from "components/Banner";
import Mobile from "components/Carousel/Mobile";
import Button from "components/Button";
import StickyCTA from "components/StickyCTA";
import Speech from "components/Speech";

export default function LandingMobile() {
  return (
    <Layout>
      <Banner> Limited offers </Banner>
      <Mobile />
      <Speech />
      <StickyCTA>
        <Button onClick={() => alert("Hi!")}>Get Started</Button>
      </StickyCTA>
    </Layout>
  )
}