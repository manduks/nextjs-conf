import Layout from "components/Layout";
import Banner from "components/Banner";
import Desktop from "components/Carousel/Desktop";
import Button from "components/Button";
import Speech from "components/Speech";

export default function LandingMobile() {
  return (
    <Layout>
      <Banner> Limited offers </Banner>
      <Desktop />
      <div className="flex items-center justify-center mt-4">
        <Button onClick={() => alert("Hi!")}>Get Started</Button>
      </div>
      <Speech />
    </Layout>
  )
}