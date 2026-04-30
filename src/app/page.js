import Banner from "@/components/Banner";
import LearningPage from "@/components/Learning";
import Services from "@/components/Services";
import Trending from "@/components/Trending";

export default function Home() {
  return (
    <div>
       <Banner/>
       <Services/>
       <Trending/>
       <LearningPage/>
    </div>
  );
}
