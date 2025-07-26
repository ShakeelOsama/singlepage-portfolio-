import fs from 'fs/promises';
import path from 'path';
import { notFound } from 'next/navigation';
import MemberContent from './MemberContent';

// Helper to load team data
async function getTeamData() {
  const filePath = path.join(process.cwd(), 'app', 'data', 'team.json');
  const data = await fs.readFile(filePath, 'utf-8');
  return JSON.parse(data);
}

export async function generateStaticParams() {
  const teamData = await getTeamData();
  return teamData.map((member) => ({ slug: member.slug }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const teamData = await getTeamData();
  const member = teamData.find((m) => m.slug === slug);
  if (!member) return {};
  return {
    title: `${member.name} | DevTeam Portfolio`,
    description: member.description,
    openGraph: {
      title: `${member.name} | DevTeam Portfolio`,
      description: member.description,
      images: [member.image],
    },
  };
}

export default async function MemberPage({ params }) {
  const { slug } = await params;
  const teamData = await getTeamData();
  const member = teamData.find((m) => m.slug === slug);
  if (!member) return notFound();

  return <MemberContent member={member} slug={slug} />;
}
