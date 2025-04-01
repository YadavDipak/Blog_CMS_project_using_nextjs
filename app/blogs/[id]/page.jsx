"use client";
import { assets, blog_data } from "@/assets/assets";
import React, { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import Image from "next/image";
import Link from "next/link";

const BlogPage = () => {
  const params = useParams();
  const [data, setData] = useState(null);

  const fetchBlogData = () => {
    for (let index = 0; index < blog_data.length; index++) {
      if (Number(params.id) == blog_data[index].id) {
        setData(blog_data[index]);
        break;
      }
    }
  };

  useEffect(() => {
    fetchBlogData();
  }, []);

  return data ? (
    <>
      <div className="bg-gray-200 py-5 px-5 md:px-12 lg:px-28">
        <div className="flex justify-between items-center">
          <Link href="/">
            <Image
              src={assets.logo}
              width={180}
              alt=""
              className="w-[130px] sm:w-auto"
            />
          </Link>
          <button className="flex items-center gap-2 font-medium py-1 px-3 sm:py-3 sm:px-6 border border-black shadow-[-7px_7px_0px_#000000]">
            Get started <Image src={assets.arrow} alt="" />
          </button>
        </div>
        <div className="text-center my-24">
          <h1 className="text-2xl sm:text-5xl font-semibold max-w-[700px] mx-auto">
            {data.title}
          </h1>
          <Image
            className="mx-auto mt-6 border border-white rounded-full"
            src={data.author_img}
            width={60}
            height={60}
            alt=""
          />
          <p className="mt-1 pb-2 text-lg max-w-[740px] mx-auto">
            {data.author}
          </p>
        </div>
      </div>
      <div className="mx-5 max-w-[800px] md:mx-auto mt-[-100px] mb-10">
        <Image
          src={data.image}
          alt=""
          width={1280}
          height={720}
          className="border-4 border-white"
        />
        <h1 className="my-8 text-[26px] font-semibold">Introduction</h1>
        <p>{data.description}</p>
        <h3 className="my-5 text-[18px] font-semibold">
          Step 1: Self-Reflection and Goal Setting
        </h3>
        <p className="my-3">
          Before we can manage our lifestyle, we must have a clear understanding
          of our current habits, strengths, and areas for improvement. Take some
          time to reflect on your daily routines, priorities, and long-term
          aspirations. Setting realistic and measurable goals will provide a
          roadmap for your journey toward a balanced and fulfilling lifestyle.
        </p>
        <h3 className="my-5 text-[18px] font-semibold">
          Step 2: Building Healthy Habits
        </h3>
        <p className="my-3">
          Developing healthy habits is essential for maintaining a balanced
          lifestyle. Start by incorporating small, manageable changes into your
          daily routine. Focus on activities such as regular exercise, balanced
          nutrition, and adequate sleep. Over time, these habits will become
          second nature and contribute to your overall well-being.
        </p>
        <h3 className="my-5 text-[18px] font-semibold">
          Step 3: Time Management and Prioritization
        </h3>
        <p className="my-3">
          Effective time management is crucial for achieving a balanced
          lifestyle. Start by identifying your priorities and allocating time to
          activities that align with your goals. Use tools like calendars or
          to-do lists to organize your tasks and stay on track.
        </p>
        <p className="my-3">
          Learn to say no to activities that do not contribute to your
          well-being or goals. By focusing on what truly matters, you can reduce
          stress and make the most of your time. Remember, balance is about
          quality, not quantity.
        </p>
        <h3 className="my-5 text-[18px] font-semibold">Conclusion</h3>
        <p className="my-3">
          In conclusion, achieving a balanced and fulfilling lifestyle requires
          a combination of self-awareness, goal setting, and consistent effort.
          By reflecting on your habits, setting realistic goals, and taking
          actionable steps, you can create a life that aligns with your values
          and aspirations. Remember, the journey to a better lifestyle is a
          continuous process, and every small step counts. Stay committed, stay
          positive, and embrace the changes that lead to a healthier and happier
          you.
        </p>
        <div className="my-24">
          <p className="font-semibold my-4">
            Share this article on social media.
          </p>
          <div className="flex">
            <Image src={assets.facebook_icon} alt="" width={50} />
            <Image src={assets.twitter_icon} alt="" width={50} />
            <Image src={assets.googleplus_icon} alt="" width={50} />
          </div>
        </div>
      </div>
    </>
  ) : (
    <></>
  );
};

export default BlogPage;
