import Image from "next/image";

interface TeamMemberCardProps {
  name: string;
  role: string;
  bio: string;
  avatar: string;
}

export function TeamMemberCard({ name, role, bio, avatar }: TeamMemberCardProps) {
  return (
    <div className="rounded-2xl border border-white/10 bg-white/5 p-6 text-slate-100">
      <div className="mb-4 flex items-center gap-4">
        <Image src={avatar} alt={name} width={72} height={72} className="rounded-2xl border border-white/20 object-cover" />
        <div>
          <p className="text-lg font-semibold text-white">{name}</p>
          <p className="text-sm text-brand-light">{role}</p>
        </div>
      </div>
      <p className="text-sm text-slate-300">{bio}</p>
    </div>
  );
}

