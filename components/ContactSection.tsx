"use client";
import Image from "next/image";
import { motion } from "framer-motion";
import { desVariants, tagVariants, titileVariants } from "@/utils/animation";
const posts = [
  {
    id: 1,
    title: "Boost your conversion rate",
    href: "#",
    description:
      "It is a fantastic theme with tons of design and layout options,and the customer service is simply outstanding. They respond immediately and solve any inconvenience, no matter how small.",
    date: "Mar 16, 2024",
    datetime: "2024-03-16",
    category: { title: "4.7", href: "#" },
    author: {
      name: "Natasha",
      role: "Co-Founder / СТО",
      href: "#",
      imageUrl: "/profile1.jpg",
    },
  },
  {
    id: 2,
    title: "Boost your conversion rate",
    href: "#",
    description:
      "It is a fantastic theme with tons of design and layout options,and the customer service is simply outstanding. They respond immediately and solve any inconvenience, no matter how small.",
    date: "Mar 16, 2024",
    datetime: "2024-03-16",
    category: { title: "4.2", href: "#" },
    author: {
      name: "Michael Chris",
      role: "Co-Founder / СТО",
      href: "#",
      imageUrl: "/profile2.jpg",
    },
  },
  {
    id: 3,
    title: "Boost your conversion rate",
    href: "#",
    description:
      "It is a fantastic theme with tons of design and layout options,and the customer service is simply outstanding. They respond immediately and solve any inconvenience, no matter how small.",
    date: "Mar 16, 2024",
    datetime: "2024-03-16",
    category: { title: "4.9", href: "#" },
    author: {
      name: "Abhishek",
      role: "Co-Founder / СТО",
      href: "#",
      imageUrl: "/profile3.jpg",
    },
  },
];

export default function ContactSection() {
  return (
    <div className="pt-12">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <motion.h2
          initial="offscreen"
          whileInView={"onscreen"}
          variants={titileVariants}
          className="text-3xl font-bold tracking-tight sm:text-4xl"
        >
          Customer Reviews
        </motion.h2>
        <motion.p
          initial="offscreen"
          whileInView={"onscreen"}
          variants={desVariants}
          className="mt-2 text-lg leading-8 "
        >
          {" "}
          Learn how to grow your business with our expert advice.
        </motion.p>
        <motion.div
          initial="offscreen"
          whileInView={"onscreen"}
          variants={tagVariants}
          className="mx-auto mt-10 grid lg:grid-cols-3 grid-cols-1 gap-x-8 lg:max-w-none lg:mx-0 sm:py-16 sm:mt-16 py-10 border-t border-b border-gray-200 gap-y-16"
        >
          {posts.map((post) => (
            <article
              key={post.id}
              className="flex max-w-xl flex-col items-start justify-between"
            >
              <div className="flex  items-center gap-x-4 text-xs">
                <time dateTime={post.datetime}>
                  <Image src="/star.svg" width={80} height={5} alt="" />
                </time>
                <a
                  href={post.category.href}
                  className="relative z-10 bg-primary rounded-full text-white px-3 py-1.5 font-medium hover:text-black transition-all"
                >
                  {post.category.title}
                </a>
              </div>
              <div className="group relative">
                <h3 className="font-semibold mt-3 text-lg leading-6 group-hover:text-gray-600">
                  <a href={post.href}>
                    <span>{post.title}</span>
                  </a>
                </h3>
                <p className="mt-5 line-clamp-3 text-sm leading-6 ">
                  {post.description}
                </p>
              </div>
              <div className="relative mt-8 flex items-center gap-x-4">
                <img
                  src={post.author.imageUrl}
                  alt=""
                  className="h-10 w-10 rounded-full bg-gray-500"
                />
                <div className="text-sm leading-6">
                  <p className="font-semibold">
                    <a href={post.author.href}>
                      <span />
                      {post.author.name}
                    </a>
                  </p>
                  <p>{post.author.role}</p>
                </div>
              </div>
            </article>
          ))}
        </motion.div>
      </div>
    </div>
  );
}
