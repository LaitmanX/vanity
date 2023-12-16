"use client";

import Header from "components/header";
import SubHeader from "components/header-sub";

import BlockchainSection from "components/section-blockchain";
import InputSettingSection from "components/section-properties";
import PerformanceSection from "components/section-performance";
import WalletsSection from "components/section-wallets";

export default function Home() {
  return (
    <main className="flex max-h-screen max-w-3xl flex-col md:my-48 mx-auto">
      <Header />
      <SubHeader />
      <div className="md:flex flex-col">
        <BlockchainSection />
        <InputSettingSection />
        <PerformanceSection />
        <WalletsSection />
      </div>
    </main>
  );
}
