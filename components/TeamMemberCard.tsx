import Image from "next/image";

interface TeamMemberCardProps {
  name: string;
  role: string;
  bio: string;
  avatar: string;
}

export function TeamMemberCard({ name, role, bio, avatar }: TeamMemberCardProps) {
  return (
    <div className="rounded-2xl border border-white/60 bg-white/70 backdrop-blur-xl backdrop-saturate-150 p-6 text-slate-900 shadow-lg">
      <div className="mb-4 flex items-center gap-4">
        <Image src={avatar} alt={name} width={72} height={72} className="rounded-2xl border border-slate-200 object-cover" />
        <div>
          <p className="text-lg font-semibold text-slate-900">{name}</p>
          <p className="text-sm text-brand">{role}</p>
        </div>
      </div>
      <p className="text-sm text-slate-600">{bio}</p>
    </div>
  );
}

