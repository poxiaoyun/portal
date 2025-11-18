import Image from "next/image";

interface TeamMemberCardProps {
  name: string;
  role: string;
  bio: string;
  avatar: string;
}

export function TeamMemberCard({ name, role, bio, avatar }: TeamMemberCardProps) {
  return (
    <div className="card-glow p-6">
      <div className="mb-4 flex items-center gap-4">
        <Image src={avatar} alt={name} width={64} height={64} className="rounded-lg object-cover" />
        <div>
          <p className="text-base font-semibold text-slate-900">{name}</p>
          <p className="text-sm text-slate-600">{role}</p>
        </div>
      </div>
      <p className="text-sm leading-relaxed text-slate-600">{bio}</p>
    </div>
  );
}

