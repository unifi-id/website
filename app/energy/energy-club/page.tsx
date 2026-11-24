import type { Metadata } from 'next';
import EnergyEnergyClubClient from './EnergyEnergyClubClient';

export const metadata: Metadata = {
  title: {
    absolute: "Unifi.id Energy Club | Free to Join, Fairer Energy Buying",
  },
  description: "Join the free Unifi ID Energy Club. Tell us when your contract ends and we will show you the rate we can get. No supplier commissions: you only pay if you take up a deal.",
  alternates: {
    canonical: "https://unifi.id/energy/energy-club",
  },
  openGraph: {
    title: "Unifi.id Energy Club | Free to Join, Fairer Energy Buying",
    description: "Join the free Unifi ID Energy Club. Tell us when your contract ends and we will show you the rate we can get. No supplier commissions: you only pay if you take up a deal.",
    url: "https://unifi.id/energy/energy-club",
    images: ['/unifi-assets/unifid-logo.png'],
  },
};

export default function EnergyClub() {
  return <EnergyEnergyClubClient />;
}
