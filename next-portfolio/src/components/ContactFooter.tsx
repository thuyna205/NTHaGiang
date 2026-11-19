'use client';

import Image from 'next/image';
import { Phone, Mail } from 'lucide-react';

interface ContactFooterProps {
  profile: {
    name: string;
    title: string;
    avatarFooter: string;
    phone: string;
    email: string;
    facebook: string;
    tiktok: string;
    instagram: string;
    address: string;
  };
}

export default function ContactFooter({ profile }: ContactFooterProps) {
  return (
    <footer id="contact" className="w-full bg-[#F97316] text-white py-6 sm:py-8 mt-10">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-5">
          <div className="relative w-28 h-28 sm:w-32 sm:h-32 rounded-full overflow-hidden border-4 border-white shadow-lg bg-orange-200 shrink-0">
            <Image
              src={profile.avatarFooter}
              alt={profile.name}
              fill
              className="object-cover object-bottom"
              sizes="128px"
            />
          </div>

          <div className="flex w-full max-w-[360px] flex-col gap-2.5 text-sm font-semibold text-white">
            <a
              href={`tel:${profile.phone.replace(/[^0-9]/g, '')}`}
              className="flex items-center gap-3 leading-none hover:text-orange-100 transition-colors"
            >
              <span className="w-6 h-6 shrink-0 rounded-md bg-white/15 flex items-center justify-center">
                <Phone className="w-3.5 h-3.5" />
              </span>
              <span>{profile.phone}</span>
            </a>
            <a
              href={`mailto:${profile.email}`}
              className="flex items-center gap-3 leading-none hover:text-orange-100 transition-colors"
            >
              <span className="w-6 h-6 shrink-0 rounded-md bg-white/15 flex items-center justify-center">
                <Mail className="w-3.5 h-3.5" />
              </span>
              <span>{profile.email}</span>
            </a>
            <a
              href={profile.facebook}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 leading-none hover:text-orange-100 transition-colors"
            >
              <span className="w-6 h-6 shrink-0 rounded-md bg-white/15 flex items-center justify-center font-bold">
                f
              </span>
              <span>Nguyễn Thị Hà Giang</span>
            </a>
            <a
              href={profile.tiktok}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 leading-none hover:text-orange-100 transition-colors"
            >
              <span className="w-6 h-6 shrink-0 rounded-md bg-white/15 flex items-center justify-center text-xs font-bold">
                ♪
              </span>
              <span>@hagiangdayyy83</span>
            </a>
            <a
              href={profile.instagram}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 leading-none hover:text-orange-100 transition-colors"
            >
              <span className="w-6 h-6 shrink-0 rounded-md bg-white/15 flex items-center justify-center text-xs font-bold">
                ◎
              </span>
              <span>@hagiangdayyy</span>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
