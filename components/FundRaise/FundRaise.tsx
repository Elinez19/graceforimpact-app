import Image from 'next/image';
import Link from 'next/link';

const links = [
  {
    href: "#",
    imgSrc: "/images/logo/art-for-grace.png",
    label: "Organize a hike and collect donations for Grace"
  },
  {
    href: "#",
    imgSrc: "/images/logo/bake-for-grace.png",
    label: "Organize a bike race and collect donations for Grace"
  },
  {
    href: "#",
    imgSrc: "/images/logo/bike-for-grace.png",
    label: "Organize a talent show and sell tickets to fundraise"
  },
  {
    href: "#",
    imgSrc: "/images/logo/dance-for-grace.png",
    label: "bouncing castles, tug-o-war, face painting family fun day."
  },
  {
    href: "#",
    imgSrc: "/images/logo/eat-for-grace.png",
    label: "Organize a dance competition for children or an adult dance lesson."
  },
  {
    href: "#",
    imgSrc: "/images/logo/field-fun-for-grace.png",
    label: "Organize an art auction"
  },
  {
    href: "#",
    imgSrc: "/images/logo/Fundraise-1.png",
    label: "Host a comedy night"
  },
  {
    href: "#",
    imgSrc: "/images/logo/Fundraise-2.png",
    label: "Host a Karaoke night"
  },
  {
    href: "#",
    imgSrc: "/images/logo/hike-for-grace.png",
    label: "Connect your local church to Grace and raise funds for"
  },
  {
    href: "#",
    imgSrc: "/images/logo/laugh-for-grace.png",
    label: "Organize a walkathon/ paw-a-thon where walkers can bring their dogs along."
  },
  {
    href: "#",
    imgSrc: "/images/logo/pray-for-peace.png",
    label: "Connect with your local restaurants to FundRaise a portion of your meal to Grace."
  },
  {
    href: "#",
    imgSrc: "/images/logo/pups-for-grace.png",
    label: "Sell homemade bake sale items in your community"
  },
  {
    href: "#",
    imgSrc: "/images/logo/raffle-for-grace.png",
    label: "Reach out to local stores and seek out sellable items"
  },
  {
    href: "#",
    imgSrc: "/images/logo/sing-for-grace.png",
    label: "Turn one of your student or campus events into a fundraising opportunity."
  },
  {
    href: "#",
    imgSrc: "/images/logo/talent-for-grace.png",
    label: "Host a party, get together, and tell your friends about Grace for Impact"
  }
];

const FundRaise = () => {
  return (
    <div className="container relative z-40 mx-auto mt-12 px-4 sm:px-6 lg:px-8">
      <div className="text-center mb-12">
        <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">Discover Ways You Can Help at Grace For Impact</h2>
        <p className="mt-2 text-lg text-gray-600">
          Grace For Impact has so much to offer. Whether it is becoming a member, <br className="hidden sm:block" />
          partnership, joining a team or volunteering as a board member, everyone can find a way to be involved.
        </p>
      </div>
      <div className="flex flex-wrap justify-center mx-auto lg:w-full md:w-5/6 xl:shadow-small-blue">
        {links.map((link, index) => (
          <Link href={link.href} key={index} className="block w-full sm:w-1/2 md:w-1/3 lg:w-1/4 py-10 text-center border">
            <div>
              <Image src={link.imgSrc} alt={link.label} width={64} height={64} className="block mx-auto" />
              <p className="pt-4 text-sm font-medium capitalize font-body text-green-900 lg:text-lg md:text-base md:pt-6">
                {link.label}
              </p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default FundRaise;
