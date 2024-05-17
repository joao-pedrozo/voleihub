import Image from "next/image";

interface TeamMemberProps {
  name: string;
  role: string;
  image: string;
}

export default function TeamMember({ name, image, role }: TeamMemberProps) {
  return (
    <li className="p-16 text-black bg-white flex justify-center rounded-lg flex-col items-center">
      <Image
        src={image}
        width={150}
        height={150}
        className="rounded-full"
        alt="Avatar 1"
      />
      <span className="font-bold text-2xl mt-4">{name}</span>

      <span className="font-medium mt-1">{role}</span>
    </li>
  );
}
