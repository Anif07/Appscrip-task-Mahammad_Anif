import HomePage from "@/app/components/HomePage";
import Header from "@/app/components/Header";
import Footer from "@/app/components/Footer";
import Navbar from "./components/Navbar";
import Banner from "./components/Banner";

export default function Home() {
  return (
    <>
      {/* <Navbar /> */}
      <Header />
      <Banner />
      <HomePage />
      <Footer />
    </>
  );
}
