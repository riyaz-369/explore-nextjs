import Link from "next/link";
import React from "react";

const AboutContents = () => {
  return (
    <div className="bg-orange-500 p-16 flex gap-8">
      <Link href="/about/history">History</Link>
      <Link href="/about/mission">Mission</Link>
    </div>
  );
};

export default AboutContents;
