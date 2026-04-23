import AtAGlance from "./sections/at-a-glance";
import AnnualReport from "./sections/annual-report";
import Cta from "./sections/cta";
import Community from "./sections/community";
import EventRundown from "./sections/event-rundown";
import Hero from "./sections/hero";
import Metric from "./sections/metric";
import PastLbw from "./sections/past-lbw";
import PastSpeakers from "./sections/past-speakers";
import Partners from "./sections/partners";
import WhyAttend from "./sections/why-attend";

export default function Home() {
  return (
    <div>
      <Hero />
      <Metric />
      <EventRundown />
      {/* <PastLbw /> */}
      {/* <WhyAttend />
      <Partners /> */}
      <PastSpeakers />
      <Community />

      <AtAGlance />
      <AnnualReport />
      <Cta />
    </div>
  );
}
